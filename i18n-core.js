/*
 * i18n-core.js
 * ------------------------------------------------------------
 * NextDrive Holdings 三語文案同步工具 — 核心解析/寫回邏輯
 *
 * 這支檔案同時可以在瀏覽器（<script src="i18n-core.js">，掛在 window.I18nCore）
 * 和 Node.js（require('./i18n-core.js')）底下運作，方便測試。
 *
 * 依賴：acorn（全域變數 acorn，或 Node 的 require('acorn')）
 * ------------------------------------------------------------
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('acorn'));
  } else {
    root.I18nCore = factory(root.acorn);
  }
})(typeof window !== 'undefined' ? window : globalThis, function (acorn) {

  const LANGS = ['zh', 'en', 'ja'];
  const SUFFIX_LANG = { _zh: 'zh', _en: 'en', _jp: 'ja' };

  /* ---------- 共用工具 ---------- */

  function stripSuffix(key) {
    for (const suf of Object.keys(SUFFIX_LANG)) {
      if (key.endsWith(suf)) {
        return { base: key.slice(0, -suf.length), lang: SUFFIX_LANG[suf], suffixed: true };
      }
    }
    return { base: key, lang: null, suffixed: false };
  }

  function keyToPropName(node) {
    // Property key 可能是 Literal('a.b') 或 Identifier(a)
    if (node.type === 'Literal') return String(node.value);
    if (node.type === 'Identifier') return node.name;
    return null;
  }

  function sectionOf(key) {
    const parts = key.split('.');
    if (parts[0] === 'group' && parts[1]) return 'group.' + parts[1];
    if (parts[0] === 'news' && parts[1]) return 'news';
    if (parts[0] === 'tech' && parts[1]) return 'tech';
    if (parts[0] === 'eco') return 'eco';
    return parts[0];
  }

  /* ---------- 依 index.html 實際頁面順序分組 ----------
   * 這裡故意「認 DOM 結構」而不是用 key 字串猜分類，這樣以後頁面結構調整，
   * 只要重新選一次資料夾，順序就會自動跟著頁面走，不用改這支工具。
   */
  const GROUP_DEFS = [
    { match: el => el.id === 'mainNav', groupId: 'nav', groupLabel: '導覽列 Nav' },
    { match: el => el.id === 'hero', groupId: 'hero', groupLabel: 'Hero' },
    { match: el => el.id === 'news', groupId: 'news', groupLabel: 'News' },
    { match: el => el.id === 'our-mission', groupId: 'our-mission', groupLabel: 'Our Mission' },
    { match: el => el.id === 'technology', groupId: 'technology', groupLabel: 'Core Technology' },
    // 注意：頁面上這個 section 的 id 剛好叫 "mission"，但實際內容是「用科技，描繪未來藍圖」
    // 那個情感訴求 band，對應使用者說的 Our Vision，不要跟上面的 our-mission 搞混。
    { match: el => el.id === 'mission', groupId: 'our-vision', groupLabel: 'Our Vision' },
    { match: el => el.id === 'solutions', groupId: 'solutions', groupLabel: 'Solutions' },
    { match: el => el.id === 'group', groupId: 'about-us', groupLabel: 'About Us' },
    { match: el => el.tagName === 'FOOTER', groupId: 'footer', groupLabel: 'Footer' }
  ];
  const UNKNOWN_GROUP = { groupId: 'unknown', groupLabel: '其他（頁面上找不到對應欄位，可能是舊資料）' };

  /**
   * 掃描 index.html 的 DOM（呼叫端負責用 DOMParser / jsdom 產生 document 物件傳進來），
   * 依照畫面上元素出現的先後順序，記錄每個 data-i18n / data-i18n-key(-en/-jp) key
   * 屬於哪個大區塊、以及它的排序序號。
   *
   * 回傳： { [key]: { index, groupId, groupLabel } }
   */
  function parseIndexHtmlOrder(doc) {
    const containerEls = GROUP_DEFS.map(def => {
      let found = null;
      const all = doc.querySelectorAll('*');
      for (const el of all) {
        if (def.match(el)) { found = el; break; }
      }
      return Object.assign({ el: found }, def);
    });

    function groupFor(el) {
      for (const c of containerEls) {
        if (c.el && c.el.contains(el)) return { groupId: c.groupId, groupLabel: c.groupLabel };
      }
      return UNKNOWN_GROUP;
    }

    const order = {};
    let idx = 0;
    const nodes = doc.querySelectorAll('[data-i18n], [data-i18n-key]');
    nodes.forEach(el => {
      const g = groupFor(el);
      const keys = [];
      if (el.hasAttribute('data-i18n')) keys.push(el.getAttribute('data-i18n'));
      if (el.hasAttribute('data-i18n-key')) keys.push(el.getAttribute('data-i18n-key'));
      if (el.hasAttribute('data-i18n-key-en')) keys.push(el.getAttribute('data-i18n-key-en'));
      if (el.hasAttribute('data-i18n-key-jp')) keys.push(el.getAttribute('data-i18n-key-jp'));
      let usedThisElement = false;
      keys.forEach(k => {
        if (!k) return;
        if (!(k in order)) {
          order[k] = { index: idx, groupId: g.groupId, groupLabel: g.groupLabel };
          usedThisElement = true;
        }
      });
      if (usedThisElement) idx++;
    });
    return order;
  }

  /**
   * 幫 rows 加上 .order / .groupId / .groupLabel，並回傳「排序＋分組後」的新陣列。
   * indexOrder：parseIndexHtmlOrder() 的回傳值；沒有的話全部歸類到「其他」。
   */
  function attachDisplayOrder(rows, indexOrder) {
    indexOrder = indexOrder || {};

    // Solutions 卡片在 solutions_detail.js 裡的欄位（sub/lead/bullets）不會出現在
    // index.html 的 data-i18n 裡（是用 JS 動態塞進展開面板的），所以要另外接到
    // 同一張卡片在 index.html 裡「大標題」（sol.cardN.title）的順序後面。
    function cardAnchorOrder(cardKey) {
      const anchorKey = 'sol.' + cardKey + '.title';
      if (indexOrder[anchorKey]) return indexOrder[anchorKey].index;
      // 找不到就退而求其次，用卡片編號本身排序，塞在 Solutions 區塊最後面
      const num = parseInt((cardKey.match(/\d+/) || ['999'])[0], 10);
      return 100000 + num;
    }
    const FIELD_EPSILON = { sub: 0.1, lead: 0.2, bullets: 0.3 };

    const withOrder = rows.map(row => {
      let info = indexOrder[row.rawBase];
      if (!info && row.file === 'solutions_detail.js') {
        const m = row.key.match(/^solutions\.(card\d+)\.(\w+)$/);
        if (m) {
          const base = cardAnchorOrder(m[1]);
          info = {
            index: base + (FIELD_EPSILON[m[2]] || 0.5),
            groupId: 'solutions',
            groupLabel: 'Solutions'
          };
        }
      }
      if (!info) info = { index: Number.MAX_SAFE_INTEGER, groupId: UNKNOWN_GROUP.groupId, groupLabel: UNKNOWN_GROUP.groupLabel };
      return Object.assign({}, row, { order: info.index, groupId: info.groupId, groupLabel: info.groupLabel });
    });

    withOrder.sort((a, b) => a.order - b.order);
    return withOrder;
  }

  /* ---------- site.js 解析 ---------- */

  function findVarDeclObject(ast, varName) {
    let found = null;
    (function walk(node) {
      if (!node || typeof node.type !== 'string' || found) return;
      if (node.type === 'VariableDeclarator' && node.id && node.id.name === varName &&
          node.init && node.init.type === 'ObjectExpression') {
        found = node.init;
        return;
      }
      for (const k in node) {
        if (k === 'parent') continue;
        const v = node[k];
        if (v && typeof v === 'object') {
          if (Array.isArray(v)) v.forEach(walk);
          else if (typeof v.type === 'string') walk(v);
        }
      }
    })(ast);
    return found;
  }

  function findWindowAssign(ast, propName) {
    let found = null;
    (function walk(node) {
      if (!node || typeof node.type !== 'string' || found) return;
      if (node.type === 'AssignmentExpression' &&
          node.left && node.left.type === 'MemberExpression' &&
          node.left.object && node.left.object.name === 'window' &&
          node.left.property && node.left.property.name === propName &&
          node.right && node.right.type === 'ObjectExpression') {
        found = node.right;
        return;
      }
      for (const k in node) {
        if (k === 'parent') continue;
        const v = node[k];
        if (v && typeof v === 'object') {
          if (Array.isArray(v)) v.forEach(walk);
          else if (typeof v.type === 'string') walk(v);
        }
      }
    })(ast);
    return found;
  }

  /**
   * 解析 site.js，回傳 { rows, raw, occurrenceCount }
   * rows: [{ key, section, zh: FieldSlot, en: FieldSlot, ja: FieldSlot }]
   * FieldSlot: { value, consistent, locations: [{start,end}] }
   */
  function parseSiteJs(sourceText) {
    const ast = acorn.parse(sourceText, { ecmaVersion: 2020, sourceType: 'script' });
    const i18nObj = findVarDeclObject(ast, 'i18n');
    if (!i18nObj) throw new Error('找不到 site.js 裡的 `const i18n = {...}`，檔案結構可能已改變');

    // occurrences: logicalKey -> { zh:[...], en:[...], ja:[...] }
    const groups = {};

    for (const langProp of i18nObj.properties) {
      const dictLang = keyToPropName(langProp.key); // 'zh' | 'en' | 'ja'
      if (!LANGS.includes(dictLang)) continue;
      if (langProp.value.type !== 'ObjectExpression') continue;

      for (const p of langProp.value.properties) {
        const rawKey = keyToPropName(p.key);
        if (rawKey === null) continue;
        if (p.value.type !== 'Literal' || typeof p.value.value !== 'string') continue; // 只處理字串欄位

        const { base, lang, suffixed } = stripSuffix(rawKey);
        const slotLang = suffixed ? lang : dictLang;
        // 用命名空間隔開「舊版無後綴 key」跟「新版 _zh/_en/_jp 三連 key」，
        // 避免兩種命名習慣剛好同名時被誤合併成同一列（例如舊版的
        // group.profile.representative 跟新版 representative_zh/_en/_jp 拆開後的
        // base 剛好一樣，但其實是完全不同的兩組資料）。
        const groupKey = suffixed ? (' SFX ' + base) : (' PLAIN ' + base);
        if (!groups[groupKey]) groups[groupKey] = { base, suffixed, zh: [], en: [], ja: [] };
        groups[groupKey][slotLang].push({
          value: p.value.value,
          start: p.value.start,
          end: p.value.end,
          rawKey,
          dictLang
        });
      }
    }

    const rows = [];
    let occurrenceCount = 0;
    for (const groupKey of Object.keys(groups).sort()) {
      const g = groups[groupKey];
      // 顯示用的 key：後綴組加註記，避免跟同名的舊版 plain key 混淆
      const displayKey = g.suffixed ? (g.base + ' [_zh/_en/_jp 表格欄位]') : g.base;
      const row = { key: displayKey, rawBase: g.base, isSuffixGroup: g.suffixed, section: sectionOf(g.base) };
      for (const lang of LANGS) {
        const occ = g[lang];
        occurrenceCount += occ.length;
        if (occ.length === 0) {
          row[lang] = { value: undefined, consistent: true, locations: [] };
        } else {
          const value = occ[0].value;
          const consistent = occ.every(o => o.value === value);
          row[lang] = {
            value,
            consistent,
            locations: occ.map(o => ({ start: o.start, end: o.end }))
          };
        }
      }
      rows.push(row);
    }

    return { rows, raw: sourceText, occurrenceCount };
  }

  /* ---------- solutions_detail.js 解析 ---------- */

  function parseSolutionsJs(sourceText) {
    const ast = acorn.parse(sourceText, { ecmaVersion: 2020, sourceType: 'script' });
    const solObj = findWindowAssign(ast, 'SOL_DETAIL');
    if (!solObj) throw new Error('找不到 solutions_detail.js 裡的 `window.SOL_DETAIL = {...}`，檔案結構可能已改變');

    const rows = [];

    for (const cardProp of solObj.properties) {
      const cardKey = keyToPropName(cardProp.key); // card1, card2 ...
      if (cardProp.value.type !== 'ObjectExpression') continue;

      // 先蒐集這張卡片三語的 sub/lead/bullets
      const perLang = { zh: null, en: null, ja: null };
      for (const langProp of cardProp.value.properties) {
        const lang = keyToPropName(langProp.key);
        if (LANGS.includes(lang) && langProp.value.type === 'ObjectExpression') {
          perLang[lang] = langProp.value;
        }
      }

      const fields = ['sub', 'lead', 'bullets'];
      for (const field of fields) {
        const row = { key: `solutions.${cardKey}.${field}`, section: `solutions.${cardKey}` };
        for (const lang of LANGS) {
          const obj = perLang[lang];
          let slot = { value: undefined, consistent: true, locations: [] };
          if (obj) {
            const prop = obj.properties.find(p => keyToPropName(p.key) === field);
            if (prop) {
              if (field === 'bullets' && prop.value.type === 'ArrayExpression') {
                const items = prop.value.elements.map(el => (el && el.type === 'Literal') ? el.value : '');
                slot = {
                  value: items.join('\n'),
                  consistent: true,
                  locations: [{ start: prop.value.start, end: prop.value.end, isArray: true }]
                };
              } else if (prop.value.type === 'Literal' && typeof prop.value.value === 'string') {
                slot = {
                  value: prop.value.value,
                  consistent: true,
                  locations: [{ start: prop.value.start, end: prop.value.end }]
                };
              }
            }
          }
          row[lang] = slot;
        }
        rows.push(row);
      }
    }

    return { rows, raw: sourceText };
  }

  /* ---------- 寫回 ---------- */

  function quoteString(str) {
    return JSON.stringify(str);
  }

  function quoteArray(items, indent) {
    const pad = ' '.repeat(indent);
    const inner = ' '.repeat(indent + 2);
    if (items.length === 0) return '[]';
    return '[\n' + items.map(i => inner + quoteString(i)).join(',\n') + '\n' + pad + ']';
  }

  /**
   * edits: [{ locations: [{start,end,isArray?}], newValue: string }]
   * 依 location.start 由大到小套用，避免位移互相干擾。
   * newValue 對一般欄位是字串；對 bullets 欄位是 '\n' 分隔的多行文字。
   */
  function applyEdits(sourceText, edits) {
    const patches = [];
    for (const edit of edits) {
      for (const loc of edit.locations) {
        let replacement;
        if (loc.isArray) {
          // 用該陣列開頭那一行的縮排來產生新陣列文字
          const lineStart = sourceText.lastIndexOf('\n', loc.start) + 1;
          const indent = loc.start - lineStart;
          const items = edit.newValue.split('\n').map(s => s.trim()).filter(s => s.length > 0);
          replacement = quoteArray(items, indent);
        } else {
          replacement = quoteString(edit.newValue);
        }
        patches.push({ start: loc.start, end: loc.end, replacement });
      }
    }
    patches.sort((a, b) => b.start - a.start);
    let text = sourceText;
    for (const p of patches) {
      text = text.slice(0, p.start) + p.replacement + text.slice(p.end);
    }
    return text;
  }

  /* ---------- Console 狀態管理（跟 DOM 無關，方便測試） ---------- */

  const META_FILE = 'i18n-meta.json';

  function createConsoleState() {
    let rows = [];
    let filesRaw = {};
    let edits = {};
    let metaState = {};   // rid -> { lastEditedLang, lastEditedBy, lastEditedAt, approvals: {zh,en,ja} }
    let metaDirty = false;

    /**
     * indexDoc：選填，index.html 解析出來的 Document（由呼叫端用 DOMParser/jsdom 產生），
     *          用來決定畫面上的排序跟分組。不給的話全部歸類到「其他」，維持解析時的原始順序。
     * metaRaw：選填，i18n-meta.json 的原始內容（字串或已經 parse 好的物件），沒有就當作空白（全部沒人動過）。
     */
    function load(siteRaw, solRaw, indexDoc, metaRaw) {
      filesRaw = { 'site.js': siteRaw, 'solutions_detail.js': solRaw };
      const siteParsed = parseSiteJs(siteRaw);
      const solParsed = parseSolutionsJs(solRaw);
      const combined = [
        ...siteParsed.rows.map(r => Object.assign({ file: 'site.js' }, r)),
        ...solParsed.rows.map(r => Object.assign({ file: 'solutions_detail.js', isBullets: r.key.endsWith('.bullets') }, r))
      ];
      let indexOrder = {};
      if (indexDoc) {
        try { indexOrder = parseIndexHtmlOrder(indexDoc); } catch (e) { indexOrder = {}; }
      }
      rows = attachDisplayOrder(combined, indexOrder);
      edits = {};
      metaDirty = false;
      if (metaRaw) {
        try { metaState = typeof metaRaw === 'string' ? JSON.parse(metaRaw) : metaRaw; } catch (e) { metaState = {}; }
      } else {
        metaState = {};
      }
    }

    function id(row) { return row.file + '::' + row.key; }
    function getRows() { return rows; }
    function getRow(rid) { return rows.find(r => id(r) === rid); }

    function currentValue(row, lang) {
      const rid = id(row);
      if (edits[rid] && edits[rid][lang] !== undefined) return edits[rid][lang];
      return row[lang].value === undefined ? '' : row[lang].value;
    }

    function isDirty(rid, lang) { return !!(edits[rid] && edits[rid][lang] !== undefined); }

    function getMeta(rid) { return metaState[rid] || null; }

    function ensureMeta(rid) {
      if (!metaState[rid]) {
        metaState[rid] = { lastEditedLang: null, lastEditedBy: '', lastEditedAt: null, approvals: { zh: false, en: false, ja: false } };
      }
      return metaState[rid];
    }

    /**
     * 設定某個 row 某個語言的新值。who 是編輯者自己填的稱呼（可留空）。
     * 回傳 { affectedOtherLangs } 告訴呼叫者：因為這次編輯，
     * 哪些「其他語言」欄位應該被標記成待確認（只有該語言在這個 row 裡真的存在才算）。
     *
     * 只要值真的改變了（跟原始值不同），就會同步記錄「最後編輯者/語言/時間」，
     * 並把編輯的這個語言標記為已確認、其他語言標記為待確認——因為改動者顯然已經看過
     * 自己這語言的內容了，但另外兩個語言的負責人還沒看過這次改動。
     */
    function setEdit(rid, lang, value, who) {
      const row = getRow(rid);
      if (!row) throw new Error('unknown row id: ' + rid);
      const original = row[lang].value === undefined ? '' : row[lang].value;
      if (!edits[rid]) edits[rid] = {};
      const becameDirty = value !== original;
      if (!becameDirty) {
        delete edits[rid][lang];
        if (Object.keys(edits[rid]).length === 0) delete edits[rid];
      } else {
        edits[rid][lang] = value;
      }
      const affectedOtherLangs = LANGS.filter(l => l !== lang && row[l].locations.length > 0);

      if (becameDirty) {
        const meta = ensureMeta(rid);
        meta.lastEditedLang = lang;
        meta.lastEditedBy = who || '';
        meta.lastEditedAt = new Date().toISOString();
        meta.approvals[lang] = true;
        affectedOtherLangs.forEach(l => { meta.approvals[l] = false; });
        metaDirty = true;
      }
      return { affectedOtherLangs };
    }

    /** 手動切換某語言負責人的核可勾選（不需要真的改動文字內容）。 */
    function toggleApproval(rid, lang) {
      const meta = ensureMeta(rid);
      meta.approvals[lang] = !meta.approvals[lang];
      metaDirty = true;
      return meta.approvals[lang];
    }

    function dirtyCount() {
      return Object.keys(edits).reduce((n, k) => n + Object.keys(edits[k]).length, 0);
    }

    function hasUnsavedMeta() { return metaDirty; }

    function collectFileEdits(fileName) {
      const fileEdits = [];
      for (const row of rows) {
        if (row.file !== fileName) continue;
        const rid = id(row);
        if (!edits[rid]) continue;
        for (const lang of LANGS) {
          if (edits[rid][lang] === undefined) continue;
          if (row[lang].locations.length === 0) continue;
          fileEdits.push({ locations: row[lang].locations, newValue: edits[rid][lang] });
        }
      }
      return fileEdits;
    }

    /**
     * 回傳這個檔案「目前畫面上看到的最新內容」——把記憶體裡還沒存檔的編輯套用在原始內容上。
     * 跟 buildSaveOutputs() 不同的地方是：即使完全沒有任何編輯，也一定回傳內容（原始內容），
     * 給「預覽」功能使用，不是給「存檔」用。
     */
    function getEffectiveContent(fileName) {
      if (!(fileName in filesRaw)) return null;
      const fileEdits = collectFileEdits(fileName);
      return fileEdits.length > 0 ? applyEdits(filesRaw[fileName], fileEdits) : filesRaw[fileName];
    }

    /**
     * 回傳 { 'site.js': 新內容或 null, 'solutions_detail.js': 新內容或 null, 'i18n-meta.json': 新內容或 null }
     * null 表示這個檔案完全沒有被改到，不需要重新下載。
     */
    function buildSaveOutputs() {
      const out = {};
      for (const fileName of Object.keys(filesRaw)) {
        const fileEdits = collectFileEdits(fileName);
        out[fileName] = fileEdits.length > 0 ? applyEdits(filesRaw[fileName], fileEdits) : null;
      }
      out[META_FILE] = metaDirty ? JSON.stringify(metaState, null, 2) : null;
      return out;
    }

    function clearEdits() { edits = {}; metaDirty = false; }

    return {
      load, getRows, getRow, currentValue, setEdit, isDirty,
      dirtyCount, hasUnsavedMeta, getMeta, toggleApproval,
      buildSaveOutputs, getEffectiveContent, clearEdits, rowId: id,
      META_FILE
    };
  }

  /**
   * 用來組「預覽」頁面：把 text（通常是 index.html 或 CSS 的原始內容）裡，所有出現過的
   * assetMap 的 key（檔案相對路徑字串，例如 "assets/logo.png"、"site.js"）都換成對應的 value
   * （通常是 blob URL）。
   *
   * 特意用最長的路徑先換，避免「styles.css」剛好是「old-styles.css」的子字串之類的誤換情況。
   * 純字串處理，不需要瀏覽器環境，方便單元測試。
   */
  function substituteAssetPaths(text, assetMap) {
    if (!text) return text;
    const keys = Object.keys(assetMap).sort((a, b) => b.length - a.length);
    let result = text;
    for (const key of keys) {
      if (!key) continue;
      result = result.split(key).join(assetMap[key]);
    }
    return result;
  }

  return {
    parseSiteJs,
    parseSolutionsJs,
    applyEdits,
    stripSuffix,
    sectionOf,
    parseIndexHtmlOrder,
    attachDisplayOrder,
    substituteAssetPaths,
    createConsoleState,
    GROUP_DEFS
  };
});
