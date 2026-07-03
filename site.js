// site.js — NextDrive Holdings Preview

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     i18n 字典
  ───────────────────────────────────────── */
  const i18n = {
    zh: {
      'eco.api': "API\uff08WebAPI \u6574\u5408\uff09",
      'eco.bottom': "\u80fd\u6e90\u8a2d\u5099\u5206\u985e",
      'eco.btm.high': "\u9ad8\u58d3 / \u5546\u696d\u00b7\u5de5\u696d\u7528",
      'eco.btm.low': "\u4f4e\u58d3 / \u5bb6\u5ead\u7528",
      'eco.btm.title': "\u8868\u5f8c\uff08\u9700\u6c42\u5074\uff09",
      'eco.der.battery': "\u7cfb\u7d71\u7d1a\u5132\u80fd\u958b\u767c",
      'eco.der.commercial': "\u5546\u696d\u7528\u8a2d\u5099\u92b7\u552e",
      'eco.der.powerplant': "\u767c\u96fb\u5ee0\u958b\u767c",
      'eco.der.residential': "\u5bb6\u5ead\u7528\u8a2d\u5099\u92b7\u552e",
      'eco.ftm.battery': "\u5132\u80fd\u96fb\u6c60",
      'eco.ftm.controller': "\u73fe\u5834\u63a7\u5236\u5668",
      'eco.ftm.generation': "\u767c\u96fb\u8a2d\u5099",
      'eco.ftm.limiter': "\u8f38\u51fa\u9650\u5236\u8a2d\u5099",
      'eco.ftm.title': "\u8868\u524d\uff08\u7cfb\u7d71\u5074\uff09",
      'eco.legend': "NextDrive \u670d\u52d9\u7bc4\u7587",
      'eco.product.ecogenie': "Ecogenie+",
      'eco.product.ems': "EMS",
      'eco.product.enesense': "EneSense",
      'eco.y.axis': "\u670d\u52d9\u5c64",
      'eco.row1': "\u96fb\u529b\u4ea4\u6613\uff08\u7279\u5b9a\u6279\u767c\u3001\u96f6\u552e\uff09",
      'eco.row2': "AC \u7cfb\u7d71\uff08\u9700\u6c42\u4f9b\u61c9\u7ba1\u7406\u7cfb\u7d71\uff09",
      'eco.row3': "RA \u7cfb\u7d71\uff08\u7fa4\u9ad4\u63a7\u5236\u00b7\u7ba1\u7406\u7cfb\u7d71\uff09",
      'eco.row5': "\u5206\u6563\u5f0f\u80fd\u6e90\u8cc7\u6e90\uff08DER\uff09",
      'footer.col1.item1': "HEMS",
      'footer.col1.item2': "CEMS",
      'footer.col1.item3': "BESS",
      'footer.col1.item4': "VPP",
      'footer.col1.item5': "EV CPO",
      'footer.col1.item6': "Data API",
      'footer.col1.title': "\u89e3\u6c7a\u65b9\u6848",
      'footer.col2.item1': "\u95dc\u65bc\u6211\u5011",
      'footer.col2.item2': "\u6700\u65b0\u6d88\u606f",
      'footer.col2.item4': "\u806f\u7d61\u6211\u5011",
      'footer.col2.title': "\u96c6\u5718\u8cc7\u8a0a",
      'footer.col3.item1': "NextDrive KK",
      'footer.col3.item2': "GREX ENERGY",
      'footer.col3.item3': "NextDrive Co.",
      'footer.col3.item4': "SKYLEY",
      'footer.col3.title': "\u96c6\u5718\u516c\u53f8",
      'footer.copyright': "\u00a9 2026 NextDrive Holdings. \u7248\u6b0a\u6240\u6709\u3002",
      'footer.offices': "\u6771\u4eac\u3001\u65e5\u672c \uff5c \u53f0\u5317\u3001\u53f0\u7063",
      'footer.privacy': "\u96b1\u79c1\u653f\u7b56",
      'footer.tagline': "\u5584\u7528\u6bcf\u4e00\u5ea6\u96fb",
      'footer.terms': "\u4f7f\u7528\u689d\u6b3e",
      'group.body': "NextDrive\uff08\u806f\u9f4a\u79d1\u6280\uff09\u4ee5\u65e5\u672c\u548c\u53f0\u7063\u70ba\u6838\u5fc3\u64da\u9ede\uff0c\u5168\u7403\u5c55\u958b\u3002\u4ee5 IoE\uff08\u80fd\u6e90\u7269\u806f\u7db2\uff09\u5e73\u53f0\u6280\u8853\u70ba\u6838\u5fc3\uff0c\u662f\u6b21\u4e16\u4ee3\u80fd\u6e90\u89e3\u6c7a\u65b9\u6848\u96c6\u5718\u3002\u6574\u5408 IoE \u8207\u80fd\u6e90\u50f9\u503c\u93c8\u5168\u9ad4\uff0c\u5728\u6700\u5c0f\u5316\u4f01\u696d\u5c0e\u5165\u98a8\u96aa\u7684\u540c\u6642\uff0c\u5be6\u73fe\u80fd\u6e90\u8cc7\u6e90\u5316\u3002",
      'group.co1.desc': "\u65e5\u672c\u5e02\u5834\u696d\u52d9\u5c55\u958b\u7684\u6838\u5fc3\u3002\u63d0\u4f9b\u5c0d\u61c9\u96fb\u529b\u7cfb\u7d71\u6539\u9769\u7684 IoE \u89e3\u6c7a\u65b9\u6848\u3002",
      'group.co1.name': "NextDrive KK",
      'group.co1.region': "\u6771\u4eac\u3001\u65e5\u672c",
      'group.co2.desc': "\u80fd\u6e90\u805a\u5408\u5e73\u53f0\u7684\u958b\u767c\u548c\u904b\u71df\u3002VPP \u696d\u52d9\u7684\u6838\u5fc3\u4f01\u696d\u3002",
      'group.co2.name': "GREX ENERGY",
      'group.co2.region': "\u6771\u4eac\u3001\u65e5\u672c",
      'group.co3.desc': "\u8ca0\u8cac\u6771\u76df\u5e02\u5834\u7684\u64f4\u5c55\u3002IoE \u5e73\u53f0\u7684\u7814\u7a76\u958b\u767c\u4e2d\u5fc3\u3002",
      'group.co3.name': "NextDrive Co.",
      'group.co3.region': "\u53f0\u5317\u3001\u53f0\u7063",
      'group.co4.desc': "\u901a\u4fe1\u548c\u57fa\u790e\u8a2d\u65bd\u6280\u8853\u5c08\u5bb6\u3002\u652f\u6490\u96c6\u5718\u6574\u9ad4\u6280\u8853\u57fa\u790e\u3002",
      'group.co4.name': "SKYLEY",
      'group.co4.region': "\u5168\u7403",
      'group.eyebrow': "\u95dc\u65bc\u6211\u5011",
      'group.lead': "\u80fd\u6e90\u7269\u806f\u7db2\u5e73\u53f0\u7684\u5168\u7403\u9818\u5c0e\u8005",
      'group.title': "NextDrive \u96c6\u5718",
      'group.profile.label': "\u516c\u53f8\u57fa\u672c\u8cc7\u8a0a",
      'group.profile.company_name': "\u516c\u53f8\u540d\u7a31",
      'group.profile.company_value': "NextDrive Holdings \u682a\u5f0f\u6703\u793e",
      'group.profile.representative': "\u4ee3\u8868\u4eba",
      'group.profile.representative_value': "\u984f\u54f2\u6df5",
      'group.profile.location': "\u6240\u5728\u5730",
      'group.profile.location_value': "\u65e5\u672c\u6771\u4eac\u90fd\u6e2f\u5340\u82a5\u9580\u914d\u7f72\u4e00\u4e01\u76ee2-14\n\u53f0\u7063\u53f0\u5317\u5e02\u4e2d\u5c71\u5340",
      'group.profile.founded': "\u8a2d\u7acb",
      'group.profile.founded_value': "2020\u5e74",
      'group.profile.capital': "\u8cc7\u672c\u91d1",
      'group.profile.capital_value': "30,000,000\u5713\uff08NextDrive Holdings \u682a\u5f0f\u6703\u793e 100%\uff09",
      'group.profile.business': "\u4e8b\u696d\u5167\u5bb9",
      'group.profile.business_value': "IoE\u5e73\u53f0\u670d\u52d9\n\u80fd\u6e90\u7ba1\u7406\u670d\u52d9\n\u80fd\u6e90\u7ba1\u7406\u6a5f\u5668\u7684\u9f4a\u6a5f\u8ca0\u8cac\u7b49",

      // 會社概要表格 - 中文版本 (8 行)
      'group.profile.company_name_zh': "公司名稱",
      'group.profile.company_name_value_zh': "NextDrive Holdings 株式会社",
      'group.profile.representative_zh': "董事長",
      'group.profile.representative_value_zh': "顏哲淵",

      'group.profile.capital_zh': "資本金",
      'group.profile.capital_value_zh': "30,000,000圓",

      'group.profile.location_zh': "總部地址",
      'group.profile.location_value_zh': "〒105-0012<br><br>東京都港區芝大門1丁目2-14",
      'group.profile.business_zh': "業務內容",
      'group.profile.business_value_zh': "集團子公司之經營管理及相關附帶業務",
      'group.profile.subsidiary_zh': "子公司業務範疇",
      'group.profile.subsidiary_value_zh': "1. 提供能源管理服務 (EMS)<br><br>2. 能源管理設備之開發與銷售<br><br>3. 提供再生能源等電力聚合服務 (VPP Aggregation)<br><br>4. 儲電所建置、開發與銷售<br><br>5. 通信軟體之開發與銷售",
      


      'group.business_map.label': "NextDrive \u4e8b\u696d\u7248\u5716",
      'group.board.label': "\u8463\u4e8b\u6703\u4ecb\u7d39",
      'group.board.member1.title': "董事長",
      'group.board.member1.name': "顏哲淵",
      'group.board.member1.desc': "聯齊科技 (NextDrive) 創辦人暨執行長",
      'group.board.member2.title': "董事",
      'group.board.member2.name': "陳宣賀",
      'group.board.member2.desc': "鴻海精密工業股份有限公司 資深經理",
      'group.board.member3.title': "董事",
      'group.board.member3.name': "陳良信",
      'group.board.member3.desc': "民傑資科股份有限公司創辦人暨執行長",
      'group.board.member4.title': "董事",
      'group.board.member4.name': "陳蓓怡",
      'group.board.member4.desc': "續升綠能股份有限公司 總經理",
      'group.board.member5.title': "董事",
      'group.board.member5.name': "石聖弘",
      'group.board.member5.desc': "聯齊科技 (NextDrive) DGX 事業部部長",
      'group.board.member6.title': "董事",
      'group.board.member6.name': "孫紹祖",
      'group.board.member6.desc': "美商中經合集團 合夥人",
      'group.auditor.title': "監察人",
      'group.auditor.name': "林俊彬",
      'group.auditor.desc': "",
      'hero.cta1': "\u67e5\u770b\u96c6\u5718\u7c21\u4ecb",
      'hero.cta2': "\u6280\u8853\u8a73\u60c5",
      'hero.cta2_mission': "\u96c6\u5718\u4f7f\u547d",
      'hero.eyebrow': "NextDrive Holdings",
      'hero.title.main': "\u9a45\u52d5\u65b0\u80fd\u6e90\u7d93\u6fdf",
      'hero.title.sub': "\u4e32\u806f\u5206\u6563\u5f0f\u80fd\u6e90\uff0c\u9081\u5411\u667a\u6167\u672a\u4f86",
      'milestone.label1': "能源案場據點",
      'milestone.label2': "\u53ef\u8abf\u5ea6\u5206\u6563\u5f0f\u80fd\u6e90",
      'milestone.label3': "\u6210\u7acb",
      'milestone.label4': "\u6771\u8a3c \u2014 Top 14",
      'nav.contact': "\u806f\u7d61\u6211\u5011",
      'nav.group': "\u96c6\u5718\u4ecb\u7d39",
      'nav.news': "\u6700\u65b0\u6d88\u606f",
      'nav.solutions': "\u89e3\u6c7a\u65b9\u6848",
      'nav.team': "\u5718\u968a",
      'nav.mission': "\u96c6\u5718\u4f7f\u547d",
      'nav.technology': "\u6838\u5fc3\u6280\u8853",
      'news.eyebrow': "\u6700\u65b0\u6d88\u606f",
      'news.item1.date': "東京，日本－2026年7月2日",
      'news.item1.location': "東京，日本",
      'news.item1.desc': "NextDrive日本首座表前儲能案場完成併網，6月起啟動JEPX現貨交易。",
      'news.item1.tag': "新聞發布",
      'news.item1.title': "NextDrive首座表前儲能併網啟動交易",
      'news.item1.content': "<p>NextDrive 聯齊科技宣布，位於日本九州熊本縣山鹿市的表前（Front-of-the-Meter）儲能案場已於今年2月完成併網商轉，並自6月4日起正式投入 JEPX（日本電力交易所）現貨市場交易，成為 NextDrive 在日本市場的首座表前儲能案場。案場預計於今年8月進一步取得 EPRX 電力調整力市場資格，屆時將完成能量與調整力雙市場的完整商業運轉（LIVE）。</p><p><strong>首座表前儲能案場 於九州電力區域完成併網</strong></p><p>本案場座落於熊本縣山鹿市，交流輸出容量為 1,998 kW，直流儲能容量為 8,146 kWh，採用 TMEIC 電力轉換系統（PCS）搭配 CATL 電芯，並於 2026 年 2 月 26 日完成併網商轉（COD）。案場自 2025 年 2 月申請併網、同年 3 月取得電力公司回覆函，至 2026 年 2 月完成商轉，歷時約一年，展現 NextDrive 在日本市場土地取得、電網申設與工程執行的完整專案能力。</p><p><strong>啟動 JEPX 現貨交易 EPRX 調整力市場預計 8 月上線</strong></p><p>案場已自 2026 年 6 月 4 日起正式投入 JEPX 現貨市場交易，NextDrive 透過 IoE 平台的預測型 AI 調度能力，依即時電價動態調整儲能案場的充放電策略。案場並規劃於 2026 年 8 月同步取得 EPRX 電力調整力市場資格，屆時將完成能量與調整力雙市場的完整商業運轉，進一步提升案場整體收益表現。此案場的推進，也象徵 NextDrive 的日本業務版圖，正式由既有的表後（Behind-the-Meter）能源管理，延伸至表前電網級儲能與市場交易，完善公司在日本電力聚合價值鏈的佈局。</p><p>展望未來，隨著日本電力市場持續開放、表前儲能案場的併網申請量能穩定成長，NextDrive 將持續複製此案場的開發與交易模式，於九州及其他區域佈局更多表前儲能資產，並以 IoE 平台為核心，串連表前、表後與分散式能源資源，協助日本電力系統邁向更具韌性與市場效率的能源轉型。</p>",
      'news.item2.date': "台北，台灣－2025年10月29日",
      'news.item2.location': "台北，台灣",
      'news.item2.desc': "聯齊科技於台灣國際能源週展示最新AI能源調控成果，以2.7倍節費效益開啟光儲投資新時代。",
      'news.item2.tag': "新聞發布",
      'news.item2.title': "AI調控助攻2.7倍節費 光儲投資新時代",
      'news.item2.content': "<p>聯齊科技 NextDrive 長期專注能源物聯網技術，持續以 AI 與雲端技術助力企業邁向投資型淨零轉型。2025 台灣國際能源週，NextDrive 以「投資型淨零，啟動光儲新經濟」為主軸，展示最新 AI 能源調控成果，協助企業將光儲建置從節能方案升級為具報酬潛力的能源投資。</p><p><strong>智慧調控，實現 2.7 倍節費效益</strong></p><p>隨著電價差距持續擴大與再生能源滲透率攀升，表後儲能與光儲整合，正從技術選項邁向能源轉型的主流解方。企業推動淨零減排的同時，也更加重視能源投資的報酬與可回收性。NextDrive 聯齊科技將於本月 29 日登場的 2025 台灣國際能源週，以「投資型淨零，啟動光儲新經濟」為主軸，發表最新 AI 能源調控成果。透過預測型 AI 演算法與 IoE 能源物聯網平台，系統可依場域用電特性自動調整充放電策略，協助企業削減尖峰用電支出、提升綠電自用率與備援韌性，實現 2.7 倍節費效益的智慧能源管理新模式。</p><p>受惠於 AI 演算法與雲地整合技術的雙重升級，NextDrive 的 EneSense 企業能源管理方案以「投資型淨零」為方向，讓光儲不只是節能工具，更是能創造長期效益的能源資產。EneSense 結合需量預測模型與即時調控機制，依據場域用電行為自動優化充放電時序，並透過時間電價套利與餘電最佳化操作等策略，協助場域有效降低契約容量與流動電費支出。以指標商用車服務據點為例，導入後最高可達單日節費 43%，整體效益較傳統地端排程提升 2.7 倍。</p><p><strong>AI 迭代再升級，帶動光儲效益持續提升</strong></p><p>NextDrive 自 2023 年即率先於企業能源管理導入 AI 調控技術，並持續優化演算法與場域整合調控機制。最新世代版本已於 2025 年 10 月正式上線，節費效益較初期導入再提升 24.6%，展現 AI 迭代升級帶來的長期優化成果。</p><p>此外，NextDrive 也提供顧問式投報分析與模組化平台設計，協助能源服務商與租賃業者依場域特性延伸節費、綠電 (RE) 及 ESG 管理需求，讓企業能在投資前清楚預期回收年限，運行中即時掌握成效，打造更可視、更可評估的能源管理佈局。</p><p><strong>深耕日台市場，積極發展表前表後聚合事業</strong></p><p>在國際市場方面，NextDrive 連續兩年入選東京證券交易所「東證亞洲創業中心」(TSA Asia Startup Hub)*，顯現其於能源物聯網領域的技術實力與成長潛力。公司正積極布局日本市場的表前與表後高低壓聚合事業，涵蓋 DR Ready**、虛擬電廠 (VPP) 與電力交易等應用。展望 2026 財年，日本將全面開放表後低壓資源參與電力交易，NextDrive 亦將持續以 IoE 平台為核心，整合工商與住宅端太陽能、儲能及電動車等分散式資源，協助用電戶將能源管理轉化為兼具市場回報與永續價值的投資行動。</p>",
      'news.item3.date': "東京，日本－2025年9月25日",
      'news.item3.location': "東京，日本",
      'news.item3.desc': "東京證交所公布2025亞洲新創名單，NextDrive連續兩年入列，為台灣獲選4家之一。",
      'news.item3.tag': "新聞發布",
      'news.item3.title': "NextDrive連續2年入選東證亞洲新創",
      'news.item3.content': "<p>東京證券交易所公布 2025 年度「亞洲新創提攜企業」名單，本次共遴選 20 家企業，其中包括 13 家「再度獲選」（re-selected）企業，以及 7 家新入選團隊。NextDrive 連續兩年名列其中，為台灣獲得肯定的 4 家之一。</p><p>連續兩年獲得東京證交所遴選提攜，展現日本市場對 NextDrive 技術與商業模式的信任，也突顯能源轉型浪潮下，NextDrive 的紮實落地成果與發展潛力。目前，NextDrive 已於台北與東京設立據點，業務涵蓋多元場域的高壓、低壓能源物聯網解決方案，並積極佈局日本電力聚合與市場交易。</p><p>在日本，NextDrive 正與多組產業指標品牌合作，推動住宅與企業用電的智慧化轉型。核心業務的表後能源管理解決方案，結合 IoE 平台與預測型 AI 調控，協助客戶降低場域用電成本、推進再生能源的導入與參與電網輔助調度。在企業端，NextDrive 於台、日兩地透過整合多據點、多目標的智慧化能源管理，協助零售、物流與金融業整合太陽能與儲能，提升能源資產效益，實現雙位數節能與再生能源占比成長。</p><p>同時，NextDrive 積極佈局日本表前與表後能源市場，協助客戶透過能源物聯網平台，將太陽能、儲能與電動車等分散式資源轉化為可調度、可交易的市場化資產，不僅創造收益，也強化電網韌性。自 2022 年起，NextDrive 便積極響應日本經濟產業省與東京都的「DR Ready*」能源轉型政策，從需量反應技術實證，到家用儲能導入，皆入列官民協作的重要推手，逐步奠定產業影響力，領頭累積多項能源聚合的落地案例。</p><p>自 2026 財年起，日本能源環境將迎來更大規模的轉型舉措，包括表後高低壓需量反應市場的全面開放，以及全國電力供給與再生能源占比的持續提升。NextDrive 將同步擴大住宅、企業與大型儲能解決方案佈局，為客戶強化能源投資的市場與環境價值，以技術創新與實績為基礎，推動智慧、低碳且具韌性的新能源社會。</p><p>更多詳情，請見東京證交所新聞發佈：https://www.jpx.co.jp/corporate/news/news-releases/1071/20250925-01.html</p>",
      'news.lead': "\u884c\u696d\u6d1e\u5bdf\u548c\u4f01\u696d\u65b0\u805e\u7684\u6700\u65b0\u4fe1\u606f",
      'news.sub.grex': "GREX ENERGY",
      'news.sub.jp': "NextDrive \u65e5\u672c",
      'news.sub.label': "\u67e5\u770b\u5404\u96c6\u5718\u516c\u53f8\u7684\u6700\u65b0\u6d88\u606f\uff1a",
      'news.sub.link': "\u67e5\u770b\u6700\u65b0\u6d88\u606f \u2192",
      'news.sub.tw': "NextDrive \u53f0\u7063",
      'news.title': "\u65b0\u805e\u4e2d\u5fc3",
      'scene.body': "\u5f9e\u5bb6\u5ead\u5230\u57ce\u5e02\uff0c\u512a\u5316\u80fd\u6e90\u6d41\u52d5\uff0c\u8b93\u6240\u6709\u4eba\u90fd\u80fd\u53d7\u60e0\u3002",
      'scene.eyebrow': "Our Mission",
      'scene.title': "\u7528\u79d1\u6280\uff0c\u63cf\u7e6b\u672a\u4f86\u85cd\u5716",
      'sol.card1.desc': "\u53ef\u8996\u5316\u548c\u512a\u5316\u667a\u6167\u5bb6\u5ead\u80fd\u6e90\u3002\u4e00\u5143\u7ba1\u7406\u592a\u967d\u80fd\u3001\u5132\u80fd\u548c\u5bb6\u96fb\u3002",
      'sol.card1.title': "家庭能源管理\nHEMS",
      'sol.card2.desc': "\u964d\u4f4e\u5efa\u7bc9\u548c\u5de5\u5ee0\u7684\u80fd\u6e90\u6210\u672c\u3002\u900f\u904e AI \u9700\u6c42\u9810\u6e2c\u5be6\u73fe\u6700\u4f73\u904b\u71df\u3002",
      'sol.card2.title': "企業能源管理\nCEMS",
      'sol.card3.desc': "統包交付與演算法收益最佳化，最大化儲能資產全生命週期價值。",
      'sol.card3.title': "系統級儲能開發與全代管服務\nBESS",
      'sol.card4.desc': "聚合分散式資源直接參與電力市場，透過預測性套利創造全新現金流。",
      'sol.card4.title': "虛擬電廠網絡\nVPP",
      'sol.card5.desc': "智慧充電管理將 EV 化為能源資產，支援 V2X 電網同步整合。",
      'sol.card5.title': "充電站營運管理\nCPO",
      'sol.card6.desc': "開放架構能源數據 API，驅動生態系夥伴服務開發與跨境應用創新。",
      'sol.card6.title': "能源數據開發者平台\nData API",
      'sol.cta': "\u67e5\u770b\u6240\u6709\u89e3\u6c7a\u65b9\u6848",
      'sol.cta.all': "\u67e5\u770b\u6240\u6709\u89e3\u6c7a\u65b9\u6848",
      'sol.cta.label': "\u63a2\u7d22\u66f4\u591a\u89e3\u6c7a\u65b9\u6848\uff1a",
      'sol.cta.btn': "\u770b\u66f4\u591a\u89e3\u6c7a\u65b9\u6848",
      'sol.cta.link': "\u4e86\u89e3\u66f4\u591a \u2192",
      'sol.eyebrow': "\u89e3\u6c7a\u65b9\u6848",
      'sol.lead': "\u9069\u7528\u65bc\u5404\u7a2e\u898f\u6a21\u4f01\u696d\u7684\u7d9c\u5408\u80fd\u6e90\u89e3\u6c7a\u65b9\u6848",
      'sol.title': "\u4f01\u696d\u80fd\u6e90\u7ba1\u7406",
      'team.eyebrow': "TEAM",
      'team.tagline': "\u696d\u754c\u5c08\u5bb6\u7d44\u6210\u7684\u6cbb\u7406\u5718\u968a",
      'team.lead': "",
      'team.note': "\u7167\u7247\u5f85\u88dc\u5145",
      'team.title': "\u516c\u53f8\u6cbb\u7406",
      'team.member1.name': "\u984f\u54f2\u6df5",
      'team.member1.org': "\u8054\u9f4a\u79d1\u6280 (NextDrive) \u5275\u8fa6\u4eba\u66a8\u57f7\u884c\u9577",
      'team.member1.title': "\u8463\u4e8b\u9577",
      'team.member2.name': "\u9673\u5ba3\u8cc0",
      'team.member2.org': "\u9e3f\u6d77\u7cbe\u5bc6\u5de5\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u8cc7\u6df1\u7d93\u7406",
      'team.member2.title': "\u8463\u4e8b",
      'team.member3.name': "\u9673\u826f\u4fe1",
      'team.member3.org': "\u6c11\u5091\u8cc7\u79d1\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5275\u8fa6\u4eba\u66a8\u57f7\u884c\u9577",
      'team.member3.title': "\u8463\u4e8b",
      'team.member4.name': "\u9673\u84d3\u6021",
      'team.member4.org': "\u7e8c\u5347\u7da0\u80fd\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u7e3d\u7d93\u7406",
      'team.member4.title': "\u8463\u4e8b",
      'team.member5.name': "\u77f3\u8056\u5f18",
      'team.member5.org': "\u8054\u9f4a\u79d1\u6280 (NextDrive) DGX \u4e8b\u696d\u90e8\u90e8\u9577",
      'team.member5.title': "\u8463\u4e8b",
      'team.member6.name': "\u5b6b\u7d39\u7956",
      'team.member6.org': "\u7f8e\u5546\u4e2d\u7d93\u5408\u96c6\u5718 \u5408\u4f19\u4eba",
      'team.member6.title': "\u8463\u4e8b",
      'tech.ecosystem.subtitle': "\u9a45\u52d5\u80fd\u6e90\u672a\u4f86\u7684\u6578\u4f4d\u57fa\u790e\u8a2d\u65bd\u5e73\u53f0",
      'tech.ecosystem.title': "\u9a45\u52d5\u80fd\u6e90\u50f9\u503c\u93c8\u7684 <br>\u56db\u5927\u6838\u5fc3\u6280\u8853",
      'tech.eyebrow': "Core Technology",
      'tech.flow.p1': "Interoperability",
      'tech.flow.p1.desc': "\u5efa\u69cb\u4e92\u806f\u80fd\u6e90\u7684\u6578\u4f4d\u57fa\u790e",
      'tech.flow.p2': "Orchestration",
      'tech.flow.p2.desc': "\u4ee5 AI \u9a45\u52d5\u80fd\u6e90\u6c7a\u7b56\u8207\u71df\u904b\u512a\u5316",
      'tech.flow.p3': "Intelligence",
      'tech.flow.p3.desc': "\u6574\u5408\u5206\u6563\u8cc7\u6e90\uff0c\u91cb\u653e\u8abf\u5ea6\u50f9\u503c",
      'tech.flow.p4': "Monetization",
      'tech.flow.p4.desc': "\u9023\u7d50\u80fd\u6e90\u5e02\u5834\uff0c\u5275\u9020\u6301\u7e8c\u56de\u5831",
      'tech.main.overview': "\u5f9e\u8cc7\u7522\u9078\u7d50\u5230\u5e02\u5834\u53c3\u8207\uff0cNextDrive \u900f\u904e\u56db\u5927\u6838\u5fc3\u6280\u8853\uff0c\u5c07\u5206\u6563\u5f0f\u80fd\u6e90\u8f49\u5316\u70ba\u53ef\u5275\u9020\u50f9\u503c\u7684\u80fd\u6e90\u8cc7\u7522\u3002",
      'tech.main.title': "\u9a45\u52d5\u80fd\u6e90\u50f9\u503c\u93c8\u7684<br>\u56db\u5927\u6838\u5fc3\u6280\u8853",
      'tech.p1.eyebrow': "01 / 互通性",
      'tech.p1.title': "Gateway 與去中心化邊緣架構",
      'tech.p1.subheading': "硬體無關邊緣運算與電網互通",
      'tech.p1.desc': "雲端無關的現場邊緣基礎設施，確保每項能源資產持續可用。支援 14+ 通訊協定並通過 ISO/JC-STAR 認證，從根本消除投資組合整合摩擦。",
      'tech.p1.bullet1': "<b>混合雲端／邊緣：</b>本地處理與雲端規模艦隊協調的最佳整合",
      'tech.p1.bullet2': "<b>自主容錯移轉：</b>自動化本地電網邊緣控制，降低停機風險",
      'tech.p1.bullet3': "<b>合規護城河：</b>ISO27001、ISO27017 及 JC-STAR 機構級安全認證",
      'tech.p2.eyebrow': "02 / 協同調度",
      'tech.p2.title': "IoE 平台技術",
      'tech.p2.subheading': "雲端原生聚合與資產調度",
      'tech.p2.desc': "可擴展的能源作業系統，將住宅至電網層級的異質 DER 整合為統一網路，提供即時遙測與自動化調度，支援複雜資產管理。",
      'tech.p2.bullet1': "<b>即時遙測：</b>艦隊全域可視化與預測型調度",
      'tech.p2.bullet2': "<b>統一管理：</b>分散資產整合至單一管理框架",
      'tech.p2.bullet3': "<b>OEM 相容性：</b>跨異質資產類型的高品質軟體整合",
      'tech.p3.eyebrow': "03 / 智慧分析",
      'tech.p3.title': "DaaS & AI 分析技術",
      'tech.p3.subheading': "AI 驅動收益最佳化與風險管控",
      'tech.p3.desc': "自研機器學習模型預測負載與再生能源波動，透過自動化電池套利最大化投資組合 IRR，同時規避電網罰款風險。",
      'tech.p3.bullet1': "<b>高精度預測：</b>負載預測準確率 93%、太陽能預測 85%",
      'tech.p3.bullet2': "<b>多目標最佳化：</b>即時平衡成本、碳強度與 VPP 目標",
      'tech.p3.bullet3': "<b>SoC 套利：</b>借助高精度預測，為資產持有人創造超額收益",
      'tech.p4.eyebrow': "04 / 資產變現",
      'tech.p4.title': "變現引擎：聚合與智慧競標",
      'tech.p4.subheading': "艦隊級資源管理與容量貨幣化",
      'tech.p4.desc': "整合資源聚合（RA）與聚合協調者（AC）交易機制，透過自動化自耗與電力轉售，將實體資產轉化為穩定收益流。",
      'tech.p4.bullet1': "<b>輔助服務整合：</b>艦隊容量與電力批發市場同步對接",
      'tech.p4.bullet2': "<b>收益極大化：</b>動態競價預測驅動收益最佳化",
      'tech.p4.bullet3': "<b>資產變現：</b>商業綠能轉售解鎖持續性收益",
      'trust.label': "\u5ee3\u53d7\u696d\u754c\u8a8d\u53ef\u8207\u4fe1\u8cf4",
      'vp.quote': "\u79d1\u6280\u4e4b\u6240\u4ee5\u8b93\u4eba\u56ae\u5f80\uff0c\u5728\u65bc\u898b\u8b49\u4eba\u5011\u56e0\u800c\u53d7\u60e0\u3002",
      'vp.sub': "\u63cf\u7e6a\u672a\u4f86\u7684\u80fd\u6e90\u85cd\u5716",
      'vp.tag1': "\u80fd\u6e90\u7269\u806f\u7db2",
      'vp.tag2': "\u865b\u64ec\u96fb\u5ee0",
      'vp.tag3': "\u9700\u91cf\u9810\u6e2c\u578b AI",
      'mission.body': "NextDrive Holdings \u4ee5\u80fd\u6e90\u7269\u806f\u7db2\u5e73\u53f0\uff08Internet of Energy Platform\uff09\u70ba\u6838\u5fc3\uff0c\u6253\u9020\u4e0b\u4e00\u4ee3\u7684\u6578\u4f4d\u80fd\u6e90\u57fa\u790e\u8a2d\u65bd\u3002\u6211\u5011\u4e32\u806f\u4e26\u5354\u8abf\u5206\u6563\u5f0f\u80fd\u6e90\u8cc7\u6e90\uff0c\u5c07\u500b\u4eba\u3001\u4f01\u696d\u3001\u57ce\u5e02\u4e43\u81f3\u570b\u5bb6\u5c64\u7d1a\u7684\u80fd\u6e90\u7db2\u7d61\uff0c\u6574\u5408\u70ba\u53ef\u898f\u6a21\u5316\u904b\u4f5c\u7684\u865b\u64ec\u96fb\u5ee0\uff08VPP\uff09\u3002\n\n\u6211\u5011\u9032\u4e00\u6b65\u9023\u7d50\u80fd\u6e90\u6548\u7387\u8207\u8cc7\u672c\u5e02\u5834\uff0c\u63a8\u52d5\u80fd\u6e90\u8cc7\u7522\u9081\u5411\u5168\u65b0\u7684\u6a5f\u69cb\u6295\u8cc7\u985e\u5225\uff0c\u70ba\u80fd\u6e90\u57fa\u790e\u8a2d\u65bd\u958b\u555f\u66f4\u5177\u5f48\u6027\u8207\u53bb\u4e2d\u5fc3\u5316\u7684\u672a\u4f86\u3002\u900f\u904e\u5c07\u50b3\u7d71\u96fb\u7db2\u8f49\u578b\u70ba\u9ad8\u6548\u7387\u7684\u6578\u4f4d\u80fd\u6e90\u7db2\u7d61\uff0c\u6211\u5011\u8b93\u7da0\u8272\u6295\u8cc7\u540c\u6642\u5275\u9020\u7d93\u6fdf\u50f9\u503c\u8207\u793e\u6703\u9032\u6b65\uff0c\u63a8\u52d5\u80fd\u6e90\u6587\u660e\u9081\u5411\u4e0b\u4e00\u500b\u968e\u6bb5\u3002",
      'mission.eyebrow': "Our Mission",
      'mission.title': "\u4e32\u806f\u80fd\u6e90\u793e\u7fa4\uff0c\u5171\u5275\u6f54\u6de8\u672a\u4f86",      
      // 會社概要表格 - 日文版本 (8 行)
      'group.profile.company_name_jp': "社名",
      'group.profile.company_name_value_jp': "NextDrive Holdings 株式会社",
      'group.profile.representative_jp': "取締役会長",
      'group.profile.representative_value_jp': "顏哲淵",

      'group.profile.capital_jp': "資本金",
      'group.profile.capital_value_jp': "30,000,000円",

      'group.profile.location_jp': "本社",
      'group.profile.location_value_jp': "〒105-0012<br><br>東京都港区芝大門1丁目2-14",
      'group.profile.business_jp': "事業内容",
      'group.profile.business_value_jp': "グループ子会社の経営管理ならびにそれに付帯する業務",
      'group.profile.subsidiary_jp': "子会社の事業内容",
      'group.profile.subsidiary_value_jp': "エネルギーマネジメントサービスの提供<br><br>エネルギーマネジメント機器の開発ならびに販売<br><br>再生可能エネルギー等の電力、アグリゲーションサービスの提供<br><br>蓄電所の開発ならびに販売<br><br>通信ソフトウェアの開発ならびに販売",
    },
    en: {
      'news.item1.date': "Tokyo, Japan – July 2, 2026",
      'news.item1.location': "Tokyo, Japan",
      'news.item1.desc': "NextDrive&apos;s Kumamoto FTM BESS is grid-connected, trading on JEPX since June 2026.",
      'news.item1.tag': "Press Release",
      'news.item1.title': "NextDrive Connects First Japan FTM BESS, Begins Trading",
      'news.item1.content': "<p>NextDrive announces that its front-of-the-meter (FTM) battery energy storage system (BESS) project in Yamaga City, Kumamoto Prefecture, Kyushu, Japan, completed grid connection and commercial operation (COD) this February, and has been trading in the JEPX (Japan Electric Power Exchange) spot market since June 4. This marks NextDrive&apos;s first front-of-the-meter storage project in Japan. The project is expected to qualify for the EPRX balancing (reserve) market in August this year, at which point it will be fully live across both the energy and balancing markets.</p><p><strong>First Front-of-the-Meter BESS Grid-Connected in the Kyushu Region</strong></p><p>Located in Yamaga City, Kumamoto Prefecture, the project has an AC output capacity of 1,998 kW and a DC storage capacity of 8,146 kWh, built using a TMEIC power conversion system (PCS) paired with CATL battery cells, and reached commercial operation (COD) on February 26, 2026. From the interconnection application in February 2025 and the utility&apos;s response letter that March, to commercial operation in February 2026, the project took roughly a year to develop — demonstrating NextDrive&apos;s end-to-end project capabilities in the Japanese market, from land acquisition and grid application to construction execution.</p><p><strong>JEPX Spot Trading Now Live; EPRX Balancing Market Targeted for August</strong></p><p>The project has been trading in the JEPX spot market since June 4, 2026, with NextDrive using predictive AI dispatch on its IoE platform to dynamically adjust the project&apos;s charge-discharge strategy based on real-time electricity prices. The project is also expected to qualify for the EPRX balancing market in August 2026, at which point it will be fully live across both the energy and balancing markets, further improving its overall returns. This project&apos;s progress also marks the expansion of NextDrive&apos;s business in Japan from its existing behind-the-meter (BTM) energy management into front-of-the-meter, grid-scale storage and market trading, rounding out the company&apos;s position across the energy aggregation value chain in Japan.</p><p>Looking ahead, as Japan&apos;s electricity market continues to open and interconnection applications for front-of-the-meter storage projects steadily increase, NextDrive will continue to replicate this project&apos;s development and trading model, expanding its front-of-the-meter storage assets in Kyushu and other regions. Built around its IoE platform, the company will continue to connect front-of-the-meter, behind-the-meter, and distributed energy resources, helping Japan&apos;s power system move toward a more resilient and market-efficient energy transition.</p>",
      'news.item2.date': "Taipei, Taiwan – October 29, 2025",
      'news.item2.location': "Taipei, Taiwan",
      'news.item2.desc': "NextDrive's AI control cuts costs 2.7x, opening a new era of solar-storage investment.",
      'news.item2.tag': "Press Release",
      'news.item2.title': "AI Boosts Savings 2.7x, Opens New Solar-Storage Era",
      'news.item2.content': "<p>NextDrive has long focused on energy IoT technology, using AI and cloud technologies to help enterprises advance toward investment-grade net-zero transformation. At the 2025 Taiwan International Energy Week, NextDrive is showcasing its latest AI-driven energy control results under the theme \"Investment-Grade Net Zero: Launching the New Solar-Storage Economy,\" helping enterprises upgrade solar-plus-storage deployments from energy-saving measures into energy investments with real return potential.</p><p><strong>Smart Control Delivers 2.7x Cost Savings</strong></p><p>As electricity price spreads widen and renewable energy penetration rises, behind-the-meter storage integrated with solar power is shifting from a technical option to a mainstream solution for the energy transition. While enterprises pursue net-zero emissions, they are also placing greater emphasis on the returns and payback of their energy investments. At the 2025 Taiwan International Energy Week, opening on the 29th of this month, NextDrive is presenting its latest AI-driven energy control results under the theme \"Investment-Grade Net Zero: Launching the New Solar-Storage Economy.\" Using predictive AI algorithms and its IoE energy-IoT platform, the system automatically adjusts charge-discharge strategies based on each site's power usage patterns, helping enterprises reduce peak demand costs, increase self-consumption of green power, and improve backup resilience — delivering a new model of smart energy management with 2.7x greater cost savings.</p><p>Benefiting from dual upgrades in AI algorithms and cloud-edge integration, NextDrive's EneSense enterprise energy management solution is built around \"investment-grade net zero,\" turning solar-plus-storage into more than an energy-saving tool — into an energy asset that generates long-term value. EneSense combines demand-forecasting models with real-time control mechanisms to automatically optimize charge-discharge timing based on each site's usage behavior, using strategies such as time-of-use price arbitrage and surplus-power optimization to help sites effectively reduce contracted capacity and demand charges. At a flagship commercial-fleet service site, the solution achieved daily savings of up to 43% after deployment — an overall improvement of 2.7 times compared with traditional on-site scheduling.</p><p><strong>Continuous AI Upgrades Drive Ongoing Gains in Solar-Storage Efficiency</strong></p><p>NextDrive was among the first to introduce AI-driven control into enterprise energy management, starting in 2023, and has continuously refined its algorithms and site-level integrated control mechanisms ever since. The latest generation of the system went live in October 2025, delivering a further 24.6% improvement in cost savings over the initial deployment — demonstrating the long-term optimization gains achieved through successive AI upgrades.</p><p>NextDrive also offers consultative return-on-investment analysis and modular platform design, helping energy service providers and leasing companies extend cost-saving, renewable-energy (RE), and ESG management capabilities tailored to each site. This allows enterprises to clearly anticipate payback periods before investing and track performance in real time once operational, creating a more visible and measurable approach to energy management.</p><p><strong>Deepening Presence in Japan and Taiwan, Expanding Front- and Behind-the-Meter Aggregation Business</strong></p><p>On the international front, NextDrive has been selected for two consecutive years to the Tokyo Stock Exchange's TSE Asia Startup Hub program*, reflecting its technical strength and growth potential in the energy IoT space. The company is actively expanding its front-of-meter and behind-the-meter, high- and low-voltage aggregation business in the Japanese market, spanning applications such as DR Ready**, virtual power plants (VPP), and electricity trading. Looking ahead to fiscal year 2026, Japan will fully open behind-the-meter low-voltage resources to electricity trading. NextDrive will continue to build on its IoE platform to integrate distributed resources — including commercial, industrial, and residential solar, storage, and electric vehicles — helping electricity users turn energy management into an investment that delivers both market returns and sustainable value.</p>",
      'news.item3.date': "Tokyo, Japan – September 25, 2025",
      'news.item3.location': "Tokyo, Japan",
      'news.item3.desc': "TSE names NextDrive to its Asia Startup Hub for a 2nd year, one of four Taiwan firms.",
      'news.item3.tag': "Press Release",
      'news.item3.title': "NextDrive Named to TSE Asia Startup Hub for 2nd Year",
      'news.item3.content': "<p>The Tokyo Stock Exchange has announced its 2025 \"Asia Startup Hub\" selection, naming 20 companies in total — 13 re-selected companies and 7 newly selected teams. NextDrive has been named for the second consecutive year, one of only four companies recognized from Taiwan.</p><p>Being selected by the Tokyo Stock Exchange for two consecutive years reflects the trust the Japanese market places in NextDrive's technology and business model, and underscores the company's solid track record and growth potential amid the energy transition. NextDrive currently operates out of Taipei and Tokyo, offering high- and low-voltage energy-IoT solutions across a wide range of sites, and is actively expanding its electricity aggregation and market-trading business in Japan.</p><p>In Japan, NextDrive is partnering with a number of leading industry brands to drive the smart transformation of residential and commercial electricity use. Its core behind-the-meter energy management solution combines the IoE platform with predictive AI control to help customers lower on-site electricity costs, expand renewable energy adoption, and participate in grid ancillary services. On the enterprise side, NextDrive integrates smart energy management across multiple sites and objectives in both Taiwan and Japan, helping retail, logistics, and financial-sector customers combine solar power with energy storage — improving the efficiency of energy assets and achieving double-digit gains in energy savings and renewable energy share.</p><p>At the same time, NextDrive is actively expanding into Japan's front-of-meter and behind-the-meter energy markets, helping customers use its energy-IoT platform to turn distributed resources — solar power, energy storage, and electric vehicles — into dispatchable, tradable market assets that generate revenue while strengthening grid resilience. Since 2022, NextDrive has actively supported the \"DR Ready*\" energy transition policy led by Japan's Ministry of Economy, Trade and Industry (METI) and the Tokyo Metropolitan Government, playing a key role in public-private collaboration — from demand-response technology trials to the rollout of residential energy storage — steadily building industry influence and accumulating a growing track record of energy aggregation projects.</p><p>Starting in fiscal year 2026, Japan's energy landscape will undergo an even larger-scale transformation, including the full opening of the behind-the-meter, high- and low-voltage demand-response market, along with continued growth in the national power supply's renewable energy share. NextDrive will expand its residential, enterprise, and large-scale storage solutions in parallel, helping customers strengthen both the market and environmental value of their energy investments — building, on a foundation of technological innovation and proven results, a smarter, lower-carbon, and more resilient energy society.</p><p>For further details, please see the Tokyo Stock Exchange's press release: https://www.jpx.co.jp/corporate/news/news-releases/1071/20250925-01.html</p>",
      'eco.api': "API (WebAPI Integration)",
      'eco.bottom': "Energy Equipment Classification",
      'eco.btm.high': "High Voltage / Commercial & Industrial",
      'eco.btm.low': "Low Voltage / Residential",
      'eco.btm.title': "Behind The Meter (Demand Side)",
      'eco.der.battery': "Grid-Scale Battery Development",
      'eco.der.commercial': "Commercial Equipment Sales",
      'eco.der.powerplant': "Power Plant Development",
      'eco.der.residential': "Residential Equipment Sales",
      'eco.ftm.battery': "Energy Storage",
      'eco.ftm.controller': "Site Controller",
      'eco.ftm.generation': "Power Generation",
      'eco.ftm.limiter': "Output Limiter",
      'eco.ftm.title': "Front of The Meter (System Side)",
      'eco.legend': "NextDrive Service Area",
      'eco.product.ecogenie': "Ecogenie+",
      'eco.product.ems': "EMS",
      'eco.product.enesense': "EneSense",
      'eco.y.axis': "Service Layer",
      'eco.row1': "Electricity Trading (Wholesale & Retail)",
      'eco.row2': "AC System (Demand-Supply Management)",
      'eco.row3': "RA System (Fleet Control & Management)",
      'eco.row5': "Distributed Energy Resources (DER)",
      'footer.col1.item1': "HEMS",
      'footer.col1.item2': "CEMS",
      'footer.col1.item3': "BESS",
      'footer.col1.item4': "VPP",
      'footer.col1.item5': "EV CPO",
      'footer.col1.item6': "Data API",
      'footer.col1.title': "Solutions",
      'footer.col2.item1': "About Us",
      'footer.col2.item2': "News",
      'footer.col2.item4': "Contact Us",
      'footer.col2.title': "Group Info",
      'footer.col3.item1': "NextDrive KK",
      'footer.col3.item2': "GREX ENERGY",
      'footer.col3.item3': "NextDrive Co.",
      'footer.col3.item4': "SKYLEY",
      'footer.col3.title': "Group Companies",
      'footer.copyright': "\u00a9 2026 NextDrive Holdings. All rights reserved.",
      'footer.offices': "Tokyo, Japan | Taipei, Taiwan",
      'footer.privacy': "Privacy Policy",
      'footer.tagline': "Make Energy Count",
      'footer.terms': "Terms of Use",
      'group.body': "NextDrive (Lianzhi Technology) is headquartered in Japan and Taiwan with global operations. As a next-generation energy solution group built on IoE (Internet of Energy) platform technology, we integrate IoE with the entire energy value chain while minimizing enterprise adoption risks and enabling energy resource optimization.",
      'group.co1.desc': "Operational core for the Japanese market, delivering IoE solutions tailored to evolving power system reforms.",
      'group.co1.name': "NextDrive KK",
      'group.co1.region': "Tokyo, Japan",
      'group.co2.desc': "The group's energy trading operator, driving power market aggregation and asset monetization in Japan.",
      'group.co2.name': "GREX ENERGY",
      'group.co2.region': "Tokyo, Japan",
      'group.co3.desc': "The strategic and commercial hub for Taiwan and ASEAN markets, and serving as the global R&D center for the IoE platform.",
      'group.co3.name': "NextDrive Co.",
      'group.co3.region': "Taipei, Taiwan",
      'group.co4.desc': "The communications and network infrastructure core anchoring the group's foundational technology.",
      'group.co4.name': "SKYLEY",
      'group.co4.region': "Global",
      'group.eyebrow': "About Us",
      'group.lead': "Global Leader in Energy IoT Platform",
      'group.title': "NextDrive Group",
      'group.profile.label': "Company Profile",
      'group.profile.company_name': "Company Name",
      'group.profile.company_value': "NextDrive Holdings Inc.",
      'group.profile.representative': "Representative",
      'group.profile.representative_value': "Che-Yuan YEN",
      'group.profile.location': "Location",
      'group.profile.location_value': "Tokyo, Japan\nTaipei, Taiwan",
      'group.profile.founded': "Founded",
      'group.profile.founded_value': "2020",
      'group.profile.capital': "Capital",
      'group.profile.capital_value': "30,000,000 JPY (100% NextDrive Holdings Inc.)",
      'group.profile.business': "Business",
      'group.profile.business_value': "IoE Platform Services\nEnergy Management Services\nEnergy Management Equipment Sales and More",
      'group.business_map.label': "NextDrive Business Map",
      'group.board.label': "Board of Directors",
      'group.auditor.title': "Audit & Supervisory Board Member",
      'group.auditor.name': "Chun-Pin LIN",
      'group.auditor.desc': "",
      'group.board.member1.title': "Chairman",
      'group.board.member1.name': "Che-Yuan YEN",
      'group.board.member1.desc': "Founder and CEO of NextDrive",
      'group.board.member2.title': "Board Director",
      'group.board.member2.name': "Hsuan-Ho CHEN",
      'group.board.member2.desc': "Senior Manager of HON HAI PRECISION IND. CO., LTD",
      'group.board.member3.title': "Board Director",
      'group.board.member3.name': "Liang-Hsin CHEN",
      'group.board.member3.desc': "Founder and CEO of Maktar Inc.",
      'group.board.member4.title': "Board Director",
      'group.board.member4.name': "Pei-Min CHEN",
      'group.board.member4.desc': "President of Susen Green Energy Co., Ltd.",
      'group.board.member5.title': "Board Director",
      'group.board.member5.name': "Sheng-Hung SHIH",
      'group.board.member5.desc': "DGX Business Director of NextDrive",
      'group.board.member6.title': "Board Director",
      'group.board.member6.name': "Hsiao-Tsu SUN",
      'group.board.member6.desc': "Partner of WI Harper Group",
      'hero.cta1': "About NextDrive",
      'hero.cta2': "Technology Details",
      'hero.cta2_mission': "Our Mission",
      'hero.eyebrow': "NextDrive Holdings",
      'hero.title.main': "Powering the New Energy Economy",
      'hero.title.sub': "Connecting Distributed Energy for a Smarter Future",
      'milestone.label1': "Deployed Sites",
      'milestone.label2': "Managed Distributed Energy",
      'milestone.label3': "Founded",
      'milestone.label4': "JPX \u2014 Top 14",
      'nav.contact': "Contact Us",
      'nav.group': "Group",
      'nav.mission': "Mission",
      'nav.news': "News",
      'nav.solutions': "Solutions",
      'nav.team': "Team",
      'nav.technology': "Technology",
      'news.eyebrow': "News",
      'news.lead': "Latest industry insights and company news",
      'news.sub.grex': "GREX ENERGY",
      'news.sub.jp': "NextDrive Japan",
      'news.sub.label': "View latest news from group companies:",
      'news.sub.link': "View latest news \u2192",
      'news.sub.tw': "NextDrive Taiwan",
      'news.title': "News Center",
      'scene.body': "From homes to cities, optimize energy flow and ensure everyone benefits.",
      'scene.eyebrow': "Our Mission",
      'scene.title': "Shaping the Future of Energy Together",
      'sol.card1.desc': "Visualize and optimize smart home energy. Unified management of solar, storage, and appliances.",
      'sol.card1.title': "Residential Energy Management\nHEMS",
      'sol.card2.desc': "Reduce energy costs for buildings and factories. Achieve optimal operations through AI demand forecasting.",
      'sol.card2.title': "Corporate Energy Management\nCEMS",
      'sol.card3.desc': "Large-scale energy storage stabilizes power. Maximize renewable energy value.",
      'sol.card3.title': "Front-of-Meter Storage Development\nBESS",
      'sol.card4.desc': "Aggregate distributed energy resources for direct market participation. 2026 low-voltage trading support.",
      'sol.card4.title': "Virtual Power Plant Networks\nVPP",
      'sol.card5.desc': "Smart charging management leverages EVs as energy resources. V2G support included.",
      'sol.card5.title': "Charging Station Operations Management\nCPO",
      'sol.card6.desc': "Rich energy data APIs accelerate partner service development.",
      'sol.card6.title': "Energy Data Developer Platform\nData API",
      'sol.cta': "View All Solutions",
      'sol.cta.all': "View All Solutions",
      'sol.cta.label': "Explore more solutions:",
      'sol.cta.btn': "View All Solutions",
      'sol.cta.link': "Learn more \u2192",
      'sol.eyebrow': "Solutions",
      'sol.lead': "Comprehensive energy solutions for businesses of all sizes",
      'sol.title': "Enterprise Energy Management",
      'team.eyebrow': "TEAM",
      'team.tagline': "Governance Team Composed of Industry Experts",
      'team.lead': "",
      'team.note': "Photos coming soon",
      'team.title': "Corporate Governance",
      'team.member1.name': "Che-Yuan YEN",
      'team.member1.org': "Founder and CEO of NextDrive",
      'team.member1.title': "Chairman",
      'team.member2.name': "Hsuan-Ho CHEN",
      'team.member2.org': "Senior Manager of HON HAI PRECISION IND. CO., LTD",
      'team.member2.title': "Board Director",
      'team.member3.name': "Liang-Hsin CHEN",
      'team.member3.org': "Founder and CEO of Maktar Inc.",
      'team.member3.title': "Board Director",
      'team.member4.name': "Pei-Min CHEN",
      'team.member4.org': "President of Susen Green Energy Co., Ltd.",
      'team.member4.title': "Board Director",
      'team.member5.name': "Sheng-Hung SHIH",
      'team.member5.org': "DGX Business Director of NextDrive",
      'team.member5.title': "Board Director",
      'team.member6.name': "HSIAO-TSU SUN",
      'team.member6.org': "Partner of WI Harper Group",
      'team.member6.title': "Board Director",
      'tech.ecosystem.subtitle': " A vertically integrated platform driving seamless asset coordination across the entire front-of-meter and behind-the-meter value chain.",
      'tech.ecosystem.title': "Powering the Energy Value Chain <br> Core Technology Architecture",
      'tech.eyebrow': "Core Technology",
      'tech.flow.p1': "Interoperability",
      'tech.flow.p1.desc': "Connected energy starts here.",
      'tech.flow.p2': "Orchestration",
      'tech.flow.p2.desc': "Intelligence that drives performance",
      'tech.flow.p3': "Intelligence",
      'tech.flow.p3.desc': "Unlock the value of flexibility.",
      'tech.flow.p4': "Monetization",
      'tech.flow.p4.desc': "Converting resources into revenue streams",
      'tech.main.overview': "Content: NextDrive maximizes distributed energy asset performance through four proprietary technology pillars—safeguarding operational continuity at the grid edge while transforming physical infrastructure into optimized financial yield.",
      'tech.main.title': "Powering the Energy Value Chain<br>Core Technology Architecture",
      'tech.p1.eyebrow': "01 / INTEROPERABILITY",
      'tech.p1.title': "Decentralized Edge Architecture",
      'tech.p1.subheading': "Hardware-Agnostic Edge & Grid Interoperability",
      'tech.p1.desc': "Cloud-independent on-site edge infrastructure securing continuous asset availability. Multi-protocol (14+) and certified (ISO/JC-STAR) to eliminate portfolio integration friction.",
      'tech.p1.bullet1': "<b>Hybrid Cloud/Edge:</b> Optimizes local processing with cloud-scale fleet coordination",
      'tech.p1.bullet2': "<b>Autonomous Failover:</b> Mitigates downtime risks via automated local grid-edge control",
      'tech.p1.bullet3': "<b>Compliance Moats:</b> Institutional security backed by ISO27001, ISO27017, and JC-STAR",
      'tech.p2.eyebrow': "02 / ORCHESTRATION",
      'tech.p2.title': "Internet of Energy (IoE) Platform",
      'tech.p2.subheading': "Cloud-Native Aggregation & Asset Orchestration",
      'tech.p2.desc': "Scalable energy OS aggregating heterogeneous DERs into a unified network. Delivers real-time telemetry and automated dispatch for complex asset management.",
      'tech.p2.bullet1': "<b>Real-Time Telemetry:</b> Provides instant visibility and predictive fleet dispatch",
      'tech.p2.bullet2': "<b>Unified Management:</b> Consolidates fragmented assets into a single-pane framework",
      'tech.p2.bullet3': "<b>OEM Compatibility:</b> Ensures high-fidelity software integration across diverse asset types",
      'tech.p3.eyebrow': "03 / INTELLIGENCE",
      'tech.p3.title': "AI Analytics & DaaS",
      'tech.p3.subheading': "AI-Driven Yield Optimization & Risk Management",
      'tech.p3.desc': "Proprietary machine learning forecasting load and renewable volatility. Maximizes portfolio IRR through automated battery arbitrage while neutralizing grid penalty exposure.",
      'tech.p3.bullet1': "<b>High-Accuracy Forecasting:</b> Achieves 93% load and 85% solar accuracy profiles",
      'tech.p3.bullet2': "<b>Multi-Objective Optimization:</b> Balances cost, carbon intensity, and VPP goals in real time",
      'tech.p3.bullet3': "<b>SoC Arbitrage:</b> Capitalizes on precision forecasting to unlock asset owner alpha",
      'tech.p4.eyebrow': "04 / MONETIZATION",
      'tech.p4.title': "Aggregation & Market Bidding Engine",
      'tech.p4.subheading': "Fleet-Scale Resource Management & Capacity Monetization",
      'tech.p4.desc': "Integrates Resource Aggregation (RA) and Aggregation Coordinator (AC) trading. Transforms physical assets into liquid income through automated self-consumption and power resale.",
      'tech.p4.bullet1': "<b>Ancillary Integration:</b> Synchronizes fleet capacity with wholesale power markets",
      'tech.p4.bullet2': "<b>Yield Maximization:</b> Drives revenue optimization via dynamic bid forecasting",
      'tech.p4.bullet3': "<b>Asset Monetization:</b> Unlocks recurring yield through commercial green energy resale",
      'trust.label': "Trusted by Industry Leaders",
      'vp.quote': "Technology is only as meaningful as the lives it improves.",
      'vp.sub': "Charting the energy future",
      'vp.tag1': "Internet of Energy",
      'vp.tag2': "Virtual Power Plant",
      'vp.tag3': "Demand Forecasting AI",
      'mission.body': "NextDrive Holdings connects distributed energy resources and builds the digital energy infrastructure of tomorrow through our Internet of Energy Platform. We unify and orchestrate decentralized power networks at scale, connecting individuals, corporations, cities, and nations into unified, country-scale Virtual Power Plants.\n\nWe bridge financial markets with energy efficiency into a new institutional asset class driven by financial alpha, advancing energy infrastructure into a new era of decentralization and flexibility. By converting analog power grids into highly efficient digital energy networks, our platform turns green investments into reliable drivers of both economic returns and structural societal progress—advancing civilization to its next stage.",
      'mission.eyebrow': "Our Mission",
      'mission.title': "Connecting Communities to a Cleaner Tomorrow.",      
      // 會社概要表格 - 日文版本 (8 行)
      'group.profile.company_name_jp': "社名",
      'group.profile.company_name_value_jp': "NextDrive Holdings 株式会社",
      'group.profile.representative_jp': "取締役会長",
      'group.profile.representative_value_jp': "顏哲淵",

      'group.profile.capital_jp': "資本金",
      'group.profile.capital_value_jp': "30,000,000円",

      'group.profile.location_jp': "本社",
      'group.profile.location_value_jp': "〒105-0012<br><br>東京都港区芝大門1丁目2-14",
      'group.profile.business_jp': "事業内容",
      'group.profile.business_value_jp': "グループ子会社の経営管理ならびにそれに付帯する業務",
      'group.profile.subsidiary_jp': "子会社の事業内容",
      'group.profile.subsidiary_value_jp': "エネルギーマネジメントサービスの提供<br><br>エネルギーマネジメント機器の開発ならびに販売<br><br>再生可能エネルギー等の電力、アグリゲーションサービスの提供<br><br>蓄電所の開発ならびに販売<br><br>通信ソフトウェアの開発ならびに販売",
      
      // 會社概要表格 - 英文版本 (8 行)
      'group.profile.company_name_en': "Company Name",
      'group.profile.company_name_value_en': "NextDrive Holdings Co., Ltd.",
      'group.profile.representative_en': "Chairman",
      'group.profile.representative_value_en': "Che-Yuan YEN",

      'group.profile.capital_en': "Capital",
      'group.profile.capital_value_en': "30,000,000 JPY",

      'group.profile.location_en': "Headquarters",
      'group.profile.location_value_en': "1-2-14 Shibadaimon, Minato-ku, Tokyo, 105-0012, Japan",
      'group.profile.business_en': "Core Business",
      'group.profile.business_value_en': "Corporate management and administration of group subsidiaries, alongside all annexed strategic operations.",
      'group.profile.subsidiary_en': "Subsidiary Operations",
      'group.profile.subsidiary_value_en': "1. Energy Management System (EMS): Deploying end-to-end front-of-meter (FTM) and behind-the-meter (BTM) software solutions.<br><br>2. Research, development, and commercialization of energy management Smart Edge Hardware: R&D and commercialization of proprietary, multi-protocol grid-edge computing devices.<br><br>3.VPP & Energy Trading: Providing cloud-native distributed resource aggregation and automated trading platforms.<br><br>4.Grid-Scale BESS: Delivering turnkey infrastructure development, deployment, and full lifecycle asset optimization.<br><br>5. Protocol Licensing: Engineering and licensing secure, foundational communication network software architectures.",
    },
    ja: {
      'news.item1.date': "東京、日本－2026年7月2日",
      'news.item1.location': "東京、日本",
      'news.item1.desc': "NextDrive熊本の表前蓄電所が系統連系を完了、6月よりJEPX取引を開始した。",
      'news.item1.tag': "プレスリリース",
      'news.item1.title': "NextDrive表前蓄電所が系統連系、取引開始",
      'news.item1.content': "<p>NextDrive（聯齊科技）は、日本・九州・熊本県山鹿市に位置する表前（メーター前）蓄電池（BESS）案件が本年2月に系統連系および商業運転（COD）を完了し、6月4日よりJEPX（日本卸電力取引所）のスポット市場での取引を開始したことを発表する。本案件はNextDriveにとって日本国内初の表前蓄電所となる。案件は本年8月にEPRX調整力市場の取引資格取得を予定しており、これによりエネルギー市場と調整力市場の双方での完全な商業運転（LIVE）を達成する見込みである。</p><p><strong>九州エリアにて表前蓄電所が系統連系を完了</strong></p><p>本案件は熊本県山鹿市に位置し、交流出力容量は1,998kW、直流蓄電容量は8,146kWhに達する。TMEIC製の電力変換システム（PCS）とCATL製電池セルを組み合わせ、2026年2月26日に商業運転（COD）を達成した。2025年2月の系統連系申請、同年3月の電力会社からの回答書取得を経て、2026年2月の商業運転開始に至るまで約1年を要しており、土地取得、系統連系申請、工事施工に至るNextDriveの日本市場における一貫したプロジェクト遂行力を示している。</p><p><strong>JEPX現物取引が稼働、EPRX調整力市場は8月に稼働予定</strong></p><p>本案件は2026年6月4日よりJEPXスポット市場での取引を開始しており、NextDriveはIoEプラットフォーム上の予測型AI調整機能を活用し、リアルタイムの電力価格に応じて充放電戦略を動的に調整している。案件は2026年8月にEPRX調整力市場の取引資格取得も予定しており、これによりエネルギー市場と調整力市場の双方での完全な商業運転を達成し、収益性のさらなる向上を図る。本案件の進展は、NextDriveの日本事業がこれまでのメーター後（表後）エネルギー管理から、メーター前（表前）の系統規模蓄電および市場取引へと拡大したことも意味し、日本におけるエネルギーアグリゲーション事業のバリューチェーン強化につながっている。</p><p>今後、日本の電力市場の自由化がさらに進み、表前蓄電案件の系統連系申請が着実に増加する中、NextDriveは本案件の開発・取引モデルを継続的に展開し、九州をはじめとする各地域で表前蓄電資産の拡大を図る。引き続きIoEプラットフォームを核として、表前・表後および分散型エネルギーリソースを統合し、日本の電力システムがより強靭かつ市場効率性の高いエネルギー転換を実現できるよう支援していく。</p>",
      'news.item2.date': "台北、台湾－2025年10月29日",
      'news.item2.location': "台北、台湾",
      'news.item2.desc': "NextDriveが台湾エネルギー展でAI調整の成果を発表、節費2.7倍で光蓄電投資新時代を開く。",
      'news.item2.tag': "プレスリリース",
      'news.item2.title': "AI制御が節費2.7倍を実現、光蓄電投資新時代へ",
      'news.item2.content': "<p>NextDrive（聯齊科技）はエネルギーIoT技術に長年注力し、AIとクラウド技術を通じて企業の投資型ネットゼロ転換を支援している。2025年台湾国際エネルギーウィークにおいて、NextDriveは「投資型ネットゼロ、光蓄電新経済の始動」をテーマに、最新のAIエネルギー調整成果を披露し、企業が光蓄電設備を省エネ手段から収益性を備えたエネルギー投資へと発展させることを支援する。</p><p><strong>スマート調整で節費効果2.7倍を実現</strong></p><p>電力価格差の拡大と再生可能エネルギー導入率の上昇に伴い、メーター後蓄電と光蓄電の統合は、技術的選択肢からエネルギー転換の主流解決策へと移行している。企業がネットゼロ排出を推進する一方で、エネルギー投資における収益性と回収可能性への関心も高まっている。今月29日に開幕する2025年台湾国際エネルギーウィークにおいて、NextDriveは「投資型ネットゼロ、光蓄電新経済の始動」をテーマに最新のAIエネルギー調整成果を発表する。予測型AIアルゴリズムとIoEエネルギーIoTプラットフォームにより、システムは拠点の電力使用特性に応じて充放電戦略を自動調整し、企業のピーク電力コスト削減、再生可能エネルギー自家消費率の向上、および非常時のレジリエンス強化を支援し、節費効果2.7倍を実現する新たなスマートエネルギー管理モデルを提供する。</p><p>AIアルゴリズムとクラウド・エッジ統合技術の両面での進化により、NextDriveの企業向けエネルギー管理ソリューション「EneSense」は「投資型ネットゼロ」を方向性に据え、光蓄電を単なる省エネツールから、長期的な収益を生み出すエネルギー資産へと位置づける。EneSenseは需要予測モデルとリアルタイム調整機構を組み合わせ、拠点の電力使用行動に基づき充放電タイミングを自動最適化し、時間帯別電力価格を活用したアービトラージや余剰電力の最適化運用などの戦略により、契約容量および流動的な電力コストの削減を支援する。代表的な商用車サービス拠点の事例では、導入後に一日あたり最大43%の節費を達成し、従来のオンプレミス型スケジューリングと比較して全体効果は2.7倍に向上した。</p><p><strong>AIの継続的なアップグレードが光蓄電効果をさらに高める</strong></p><p>NextDriveは2023年より企業向けエネルギー管理へのAI調整技術導入を業界に先駆けて実施し、以降もアルゴリズムと拠点統合調整機構の最適化を継続してきた。最新世代のバージョンは2025年10月に正式稼働し、導入初期と比較して節費効果はさらに24.6%向上しており、AIの継続的なアップグレードによる長期的な最適化成果を示している。</p><p>さらに、NextDriveはコンサルティング型の投資回収分析とモジュール型プラットフォーム設計を提供し、エネルギーサービス事業者やリース会社が拠点特性に応じて節費、再生可能エネルギー（RE）、ESG管理のニーズを拡張することを支援する。これにより企業は投資前に回収期間を明確に見積もることができ、運用中もリアルタイムで成果を把握できるため、より可視化され、評価可能なエネルギー管理体制を構築できる。</p><p><strong>日台市場での展開を強化、メーター前後のアグリゲーション事業を積極推進</strong></p><p>国際市場においては、NextDriveは東京証券取引所の「東証アジア・スタートアップ・ハブ」（TSE Asia Startup Hub）*に2年連続で選出され、エネルギーIoT分野における技術力と成長性の高さを示している。同社は日本市場におけるメーター前・メーター後の高圧・低圧アグリゲーション事業を積極的に展開しており、DR Ready**、バーチャルパワープラント（VPP）、電力取引などの分野を対象としている。2026年度以降、日本ではメーター後の低圧リソースによる電力取引への全面参加が解禁される見通しであり、NextDriveは引き続きIoEプラットフォームを核として、商工業および住宅向けの太陽光発電・蓄電池・電気自動車などの分散型エネルギーリソースを統合し、電力需要者がエネルギー管理を市場収益と持続可能性の両方を備えた投資活動へと転換することを支援していく。</p>",
      'news.item3.date': "東京、日本－2025年9月25日",
      'news.item3.location': "東京、日本",
      'news.item3.desc': "東證が2025年アジア新興企業を発表、NextDriveは2年連続選出、台湾で選ばれた4社の一社に。",
      'news.item3.tag': "プレスリリース",
      'news.item3.title': "NextDrive東証アジア新興企業2年連続選出",
      'news.item3.content': "<p>東京証券取引所は2025年度「アジア新興企業提携プログラム」の選出企業を発表し、今回は20社が選出された。うち13社が再選出企業、7社が新規選出チームとなっている。NextDriveは2年連続で選出され、台湾から選ばれた4社のうちの1社となった。</p><p>東京証券取引所に2年連続で選出されたことは、日本市場がNextDriveの技術およびビジネスモデルに対して高い信頼を寄せていることを示すとともに、エネルギー転換の潮流の中で同社が着実な実績と成長の可能性を有していることを裏付けている。現在、NextDriveは台北と東京に拠点を構え、多様な現場に向けた高圧・低圧のエネルギーIoTソリューションを提供するとともに、日本における電力アグリゲーションおよび市場取引事業を積極的に展開している。</p><p>日本国内では、NextDriveは複数の業界大手ブランドと協業し、住宅および企業の電力利用のスマート化を推進している。中核事業であるメーター後エネルギー管理ソリューションは、IoEプラットフォームと予測型AI調整を組み合わせ、顧客の現場における電力コスト削減、再生可能エネルギー導入の推進、および系統運用への補助的参加を支援する。企業向けには、台湾・日本両国において複数拠点・複数目的に対応したスマートエネルギー管理を展開し、小売・物流・金融業が太陽光発電と蓄電池を統合してエネルギー資産の効率を高め、二桁台の省エネ効果と再生可能エネルギー比率の向上を実現するよう支援している。</p><p>同時に、NextDriveは日本のメーター前・メーター後エネルギー市場への展開を積極的に進めており、エネルギーIoTプラットフォームを通じて、太陽光発電・蓄電池・電気自動車などの分散型エネルギーリソースを、調整可能かつ市場で取引可能な資産へと転換する支援を行っている。これにより新たな収益創出が可能になるとともに、電力系統の強靭性強化にも貢献する。2022年より、NextDriveは経済産業省および東京都が推進する「DR Ready*」エネルギー転換施策に積極的に参画し、需要応答技術の実証から家庭用蓄電システムの導入まで、官民協働の重要な推進役として産業への影響力を着実に高め、エネルギーアグリゲーションの実績を積み重ねてきた。</p><p>2026年度以降、日本のエネルギー環境はさらなる大規模な転換期を迎える。メーター後の高圧・低圧需要応答市場の全面開放や、全国の電力供給における再生可能エネルギー比率の継続的な向上が見込まれる。NextDriveは、住宅・企業・大規模蓄電ソリューションの展開を拡大し、顧客のエネルギー投資が持つ市場価値と環境価値を高めていく。技術革新と実績を基盤として、スマートで低炭素かつ強靭な新エネルギー社会の実現を推進していく。</p><p>詳細については、東京証券取引所のプレスリリースをご参照ください：https://www.jpx.co.jp/corporate/news/news-releases/1071/20250925-01.html</p>",
      'eco.api': "API\uff08WebAPI\u9023\u643a\uff09",
      'eco.bottom': "\u30a8\u30cd\u30eb\u30ae\u30fc\u8a2d\u5099\u7a4d\u5225",
      'eco.btm.high': "\u9ad8\u5727 / \u696d\u52d9\u30fb\u7523\u696d\u7528",
      'eco.btm.low': "\u4f4e\u5727 / \u5bb6\u5ead\u5411\u3051",
      'eco.btm.title': "Behind The Meter\uff08\u9700\u8981\u5074\uff09",
      'eco.der.battery': "\u7cfb\u7d71\u7528\u84c4\u96fb\u6c60\u958b\u767a",
      'eco.der.commercial': "\u696d\u52d9\u7528\u8a2d\u5099\u8ca9\u58f2",
      'eco.der.powerplant': "\u767a\u96fb\u6240\u958b\u767a",
      'eco.der.residential': "\u5bb6\u5ead\u7528\u8a2d\u5099\u8ca9\u58f2",
      'eco.ftm.battery': "\u84c4\u96fb\u6c60",
      'eco.ftm.controller': "\u30b5\u30a4\u30c8\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",
      'eco.ftm.generation': "\u767a\u96fb\u8a2d\u5099",
      'eco.ftm.limiter': "\u51fa\u529b\u6291\u5236\u6a5f\u5668",
      'eco.ftm.title': "Front of The Meter\uff08\u7cfb\u7d71\u5074\uff09",
      'eco.legend': "NextDrive \u30b5\u30fc\u30d3\u30b9\u9818\u57df",
      'eco.product.ecogenie': "Ecogenie+",
      'eco.product.ems': "EMS",
      'eco.product.enesense': "EneSense",
      'eco.y.axis': "\u30b5\u30fc\u30d3\u30b9\u30ec\u30a4\u30e4\u30fc",
      'eco.row1': "\u96fb\u529b\u53d6\u5f15\uff08\u7279\u5b9a\u5378\u3001\u5c0f\u58f2\uff09",
      'eco.row2': "AC\u30b7\u30b9\u30c6\u30e0\uff08\u9700\u7d66\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\uff09",
      'eco.row3': "RA\u30b7\u30b9\u30c6\u30e0\uff08\u7fa4\u5236\u5fa1\u30fb\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\uff09",
      'eco.row5': "\u5206\u6563\u578b\u30a8\u30cd\u30eb\u30ae\u30fc\u30ea\u30bd\u30fc\u30b9\uff08DER's\uff09",
      'footer.col1.item1': "HEMS",
      'footer.col1.item2': "CEMS",
      'footer.col1.item3': "BESS",
      'footer.col1.item4': "VPP",
      'footer.col1.item5': "EV CPO",
      'footer.col1.item6': "Data API",
      'footer.col1.title': "\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3",
      'footer.col2.item1': "\u79c1\u305f\u3061\u306b\u3064\u3044\u3066",
      'footer.col2.item2': "\u30cb\u30e5\u30fc\u30b9",
      'footer.col2.item4': "\u304a\u554f\u3044\u5408\u308f\u305b",
      'footer.col2.title': "\u96c6\u5718\u60c5\u5831",
      'footer.col3.item1': "NextDrive KK",
      'footer.col3.item2': "GREX ENERGY",
      'footer.col3.item3': "NextDrive Co.",
      'footer.col3.item4': "SKYLEY",
      'footer.col3.title': "\u30b0\u30eb\u30fc\u30d7\u4f01\u696d",
      'footer.copyright': "\u00a9 2026 NextDrive Holdings. All rights reserved.",
      'footer.offices': "\u6771\u4eac\u3001\u65e5\u672c \uff5c \u53f0\u5317\u3001\u53f0\u6e7e",
      'footer.privacy': "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
      'footer.tagline': "\u30a8\u30cd\u30eb\u30ae\u30fc\u3092\u7121\u99c4\u306a\u304f\u8cac\u304f\u4f7f\u3046",
      'footer.terms': "\u5229\u7528\u898f\u7d04",
      'group.body': "NextDrive\uff08\u806f\u9f4a\u79d1\u6280\uff09\u306f\u3001\u65e5\u672c\u3068\u53f0\u6e7e\u3092\u4e2d\u6838\u62e0\u70b9\u3068\u3057\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u5c55\u958b\u3059\u308bIoE\uff08\u30a8\u30cd\u30eb\u30ae\u30fc\u30fb\u30a4\u30aa\u30c3\u30c8\uff09\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6280\u8853\u3092\u6838\u306b\u3001\u6b21\u4e16\u4ee3\u578b\u30a8\u30cd\u30eb\u30ae\u30fc\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30fb\u30b0\u30eb\u30fc\u30d7\u3067\u3059\u3002IoE\u3068\u30a8\u30cd\u30eb\u30ae\u30fc\u30fb\u30d0\u30ea\u30e5\u30fc\u30c1\u30a7\u30fc\u30f3\u5168\u4f53\u3092\u7d71\u5408\u3057\u3001\u4f01\u696d\u306e\u5c0e\u5165\u30ea\u30b9\u30af\u3092\u6700\u5c0f\u5316\u3057\u306a\u304c\u3089\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u8cc7\u6e90\u5316\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002",
      'group.co1.desc': "\u65e5\u672c\u5e02\u5834\u306b\u304a\u3051\u308b\u4e8b\u696d\u5c55\u958b\u306e\u4e2d\u6838\u3002\u96fb\u529b\u30b7\u30b9\u30c6\u30e0\u6539\u9769\u306b\u5bfe\u5fdc\u3057\u305f IoE \u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3002",
      'group.co1.name': "NextDrive KK",
      'group.co1.region': "\u6771\u4eac\u3001\u65e5\u672c",
      'group.co2.desc': "\u30a8\u30cd\u30eb\u30ae\u30fc\u30a2\u30b0\u30ea\u30b2\u30fc\u30b7\u30e7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u958b\u767a\u30fb\u904b\u55b6\u3002VPP \u4e8b\u696d\u306e\u4e2d\u6838\u4f01\u696d\u3002",
      'group.co2.name': "GREX ENERGY",
      'group.co2.region': "\u6771\u4eac\u3001\u65e5\u672c",
      'group.co3.desc': "ASEAN \u5e02\u5834\u3078\u306e\u5c55\u958b\u3092\u62c5\u3046\u3002IoE \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u7814\u7a76\u958b\u767a\u62e0\u70b9\u3002",
      'group.co3.name': "NextDrive Co.",
      'group.co3.region': "\u53f0\u5317\u3001\u53f0\u6e7e",
      'group.co4.desc': "\u901a\u4fe1\u30fb\u30a4\u30f3\u30d5\u30e9\u6280\u8853\u306e\u5c02\u9580\u4f01\u696d\u3002\u30b0\u30eb\u30fc\u30d7\u5168\u4f53\u306e\u6280\u8853\u57fa\u76e4\u3092\u652f\u3048\u308b\u3002",
      'group.co4.name': "SKYLEY",
      'group.co4.region': "\u30b0\u30ed\u30fc\u30d0\u30eb",
      'group.eyebrow': "About Us",
      'group.lead': "\u30a8\u30cd\u30eb\u30ae\u30fcIoT\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\n\u30b0\u30ed\u30fc\u30d0\u30eb\u30ea\u30fc\u30c0\u30fc",
      'group.title': "NextDrive\u30b0\u30eb\u30fc\u30d7",
      'group.profile.label': "\u4f1a\u793e\u6982\u8981",
      'group.profile.company_name': "\u4f1a\u793e\u540d",
      'group.profile.company_value': "NextDrive\u682a\u5f0f\u4f1a\u793e",
      'group.profile.representative': "\u4ee3\u8868\u53d6\u7de0\u5f79\u793e\u9577",
      'group.profile.representative_value': "\u984f\u54f2\u6df5",
      'group.profile.location': "\u6240\u5728\u5730",
      'group.profile.location_value': "\u3010\u4f4f\u6240\u3011\u3010\u65e5\u672c\u3011\u3010\u53f0\u6e7e\u3011",
      'group.profile.founded': "\u8a2d\u7acb",
      'group.profile.founded_value': "2020\u5e74",
      'group.profile.capital': "\u8cc7\u672c\u91d1",
      'group.profile.capital_value': "30,000,000\u5186\uff08NextDrive\u682a\u5f0f\u4f1a\u793e 100%\uff09",
      'group.profile.business': "\u4e8b\u696d\u5185\u5bb9",
      'group.profile.business_value': "IoE\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\n\u30a8\u30cd\u30eb\u30ae\u30fc\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\n\u30a8\u30cd\u30eb\u30ae\u30fc\u7ba1\u7406\u6a5f\u5668\u306e\u8f38\u5165\u8ca9\u58f2\u306a\u3069",
      'group.business_map.label': "NextDrive \u4e8b\u696d\u30de\u30c3\u30d7",
      'group.board.label': "\u8463\u4e8b\u4f1a\u7d39\u4ecb",
      'group.auditor.title': "監査役",
      'group.auditor.name': "林俊彬",
      'group.auditor.desc': "",
      'group.board.member1.title': "\u53d6\u7b79\u4f1a\u9577",
      'group.board.member1.name': "\u984f\u54f2\u6df5",
      'group.board.member1.desc': "NextDrive\uff08\u806f\u9f4a\u79d1\u6280\uff09\u521b\u696d\u8005\u517cCEO",
      'group.board.member2.title': "\u53d6\u7b79\u4f1a",
      'group.board.member2.name': "\u9673\u5ba3\u8cc0",
      'group.board.member2.desc': "\u9d3b\u6d77\u7cbe\u5bc6\u5de5\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u30b7\u30cb\u30a2\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",
      'group.board.member3.title': "\u53d6\u7b79\u4f1a",
      'group.board.member3.name': "\u9673\u826f\u4fe1",
      'group.board.member3.desc': "\u6c11\u5091\u8cc7\u79d1\u80a1\u4efd\u6709\u9650\u516c\u53f8\u521b\u696d\u8005\u517cCEO",
      'group.board.member4.title': "\u53d6\u7b79\u4f1a",
      'group.board.member4.name': "\u9673\u84d3\u6021",
      'group.board.member4.desc': "\u7e8c\u5347\u7da0\u80fd\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u7e3d\u7d93\u7406",
      'group.board.member5.title': "\u53d6\u7b79\u4f1a",
      'group.board.member5.name': "\u77f3\u8056\u5f18",
      'group.board.member5.desc': "NextDrive\uff08\u806f\u9f4a\u79d1\u6280\uff09DGX \u4e8b\u696d\u90e8\u90e8\u9577",
      'group.board.member6.title': "\u53d6\u7b79\u4f1a",
      'group.board.member6.name': "\u5b6b\u7d39\u7956",
      'group.board.member6.desc': "\u7f8e\u5546\u4e2d\u7d93\u5408\u96c6\u5718 \u30d1\u30fc\u30c8\u30ca\u30fc",
      'hero.cta1': "\u30b0\u30eb\u30fc\u30d7\u3092\u898b\u308b",
      'hero.cta2': "\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u8a73\u7d30",
      'hero.cta2_mission': "\u30b0\u30eb\u30fc\u30d7\u306e\u30df\u30c3\u30b7\u30e7\u30f3",
      'hero.eyebrow': "NextDrive Holdings",
      'hero.title.main': "\u65b0\u305f\u306a\u30a8\u30cd\u30eb\u30ae\u30fc\u7d4c\u6e08\u3092\u52d5\u304b\u3059",
      'hero.title.sub': "\u5206\u6563\u578b\u30a8\u30cd\u30eb\u30ae\u30fc\u3092\u3064\u306a\u304e\u3001\u3088\u308a\u30b9\u30de\u30fc\u30c8\u306a\u672a\u6765\u3078",
      'milestone.label1': "管理サイト数（グローバル）",
      'milestone.label2': "管理リソース規模",
      'milestone.label3': "\u6210\u7acb",
      'milestone.label4': "\u6771\u8a3c \u2014 Top 14",
      'nav.contact': "\u304a\u554f\u3044\u5408\u308f\u305b",
      'nav.group': "\u30b0\u30eb\u30fc\u30d7",
      'nav.mission': "\u30df\u30c3\u30b7\u30e7\u30f3",
      'nav.news': "\u30cb\u30e5\u30fc\u30b9",
      'nav.solutions': "\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3",
      'nav.team': "\u30c1\u30fc\u30e0",
      'nav.technology': "\u30c6\u30af\u30ce\u30ed\u30b8\u30fc",
      'news.eyebrow': "News",
      'news.lead': "\u696d\u754c\u30a4\u30f3\u30b5\u30a4\u30c8\u3068\u4f01\u696d\u30cb\u30e5\u30fc\u30b9\u306e\u6700\u65b0\u60c5\u5831",
      'news.sub.grex': "GREX ENERGY",
      'news.sub.jp': "NextDrive \u65e5\u672c",
      'news.sub.label': "\u30b0\u30eb\u30fc\u30d7\u5404\u793e\u306e\u6700\u65b0\u30cb\u30e5\u30fc\u30b9\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a",
      'news.sub.link': "\u6700\u65b0\u30cb\u30e5\u30fc\u30b9\u3092\u898b\u308b \u2192",
      'news.sub.tw': "NextDrive \u53f0\u6e7e",
      'news.title': "\u30cb\u30e5\u30fc\u30b9\u30bb\u30f3\u30bf\u30fc",
      'scene.body': "\u5bb6\u5ead\u304b\u3089\u90fd\u5e02\u307e\u3067\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u6d41\u308c\u3092\u6700\u9069\u5316\u3057\u3001\u3059\u3079\u3066\u306e\u4eba\u304c\u6069\u6075\u3092\u53d7\u3051\u3089\u308c\u308b\u793e\u4f1a\u3092\u3064\u304f\u308b\u3002",
      'scene.eyebrow': "Our Mission",
      'scene.title': "\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u672a\u6765\u3092\u3001\u3068\u3082\u306b\u63cf\u304f\u3002",
      'sol.card1.desc': "\u30b9\u30de\u30fc\u30c8\u30db\u30fc\u30e0\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u3092\u53ef\u8996\u5316\u30fb\u6700\u9069\u5316\u3002\u592a\u967d\u5149\u30fb\u84c4\u96fb\u6c60\u30fb\u5bb6\u96fb\u3092\u4e00\u5143\u7ba1\u7406\u3002",
      'sol.card1.title': "\u5bb6\u5ead\u30a8\u30cd\u30eb\u30ae\u30fc\u7ba1\u7406\nHEMS",
      'sol.card2.desc': "\u30d3\u30eb\u3084\u5de5\u5834\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3002AI\u306b\u3088\u308b\u9700\u8981\u4e88\u6e2c\u3067\u6700\u9069\u904b\u7528\u3092\u5b9f\u73fe\u3002",
      'sol.card2.title': "\u4f01\u696d\u30a8\u30cd\u30eb\u30ae\u30fc\u7ba1\u7406\nCEMS",
      'sol.card3.desc': "ターンキー納品とアルゴリズム収益最適化で、蓄電資産のライフサイクル価値を最大化。",
      'sol.card3.title': "系統用蓄電池（所）の販売・運用代行事業\nBESS",
      'sol.card4.desc': "分散リソースを集約して電力市場に直接参加し、予測型裁定取引で新たなキャッシュフローを創出。",
      'sol.card4.title': "仮想発電所ネットワーク\nVPP",
      'sol.card5.desc': "スマート充電管理で EV をエネルギー資産として活用。V2X グリッド統合に対応。",
      'sol.card5.title': "充電ステーション運用管理\nCPO",
      'sol.card6.desc': "オープンアーキテクチャの能源データ API で、パートナーのサービス開発とエコシステム革新を加速。",
      'sol.card6.title': "エネルギーデータ開発者プラットフォーム\nData API",
      'sol.cta': "\u3059\u3079\u3066\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u898b\u308b",
      'sol.cta.all': "\u3059\u3079\u3066\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u898b\u308b",
      'sol.cta.label': "\u3055\u3089\u306b\u591a\u304f\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63a2\u7d22\uff1a",
      'sol.cta.btn': "\u3059\u3079\u3066\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u898b\u308b",
      'sol.cta.link': "\u8a73\u7d30\u3092\u898b\u308b \u2192",
      'sol.eyebrow': "\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3",
      'sol.lead': "\u3042\u3089\u3086\u308b\u898f\u6a21\u306e\u30d3\u30b8\u30cd\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\n\u5305\u62ec\u7684\u306a\u30a8\u30cd\u30eb\u30ae\u30fc\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3",
      'sol.title': "\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\n\u30a8\u30cd\u30eb\u30ae\u30fc\u7ba1\u7406",
      'team.eyebrow': "TEAM",
      'team.tagline': "\u696d\u754c\u5c02\u9580\u5bb6\u3067\u69cb\u6210\u3055\u308c\u305f\u30ac\u30d0\u30ca\u30f3\u30b9\u30c1\u30fc\u30e0",
      'team.lead': "",
      'team.note': "\u7167\u7247\u5f85\u88dc\u5145",
      'team.title': "\u516c\u53f8\u6cbb\u7406",
      'team.member1.name': "\u984f\u54f2\u6df5",
      'team.member1.org': "NextDrive\uff08\u8054\u9f4a\u79d1\u6280\uff09\u521b\u696d\u8005\u5146CEO",
      'team.member1.title': "\u53d6\u7de0\u5f79\u4f1a\u9577",
      'team.member2.name': "\u9673\u5ba3\u8cc0",
      'team.member2.org': "\u9e3f\u6d77\u7cbe\u5bc6\u5de5\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u30b7\u30cb\u30a2\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",
      'team.member2.title': "\u53d6\u7de0\u5f79",
      'team.member3.name': "\u9673\u826f\u4fe1",
      'team.member3.org': "Maktar\uff08\u6c11\u5091\u8cc7\u6599\uff09\u521b\u696d\u8005\u5146CEO",
      'team.member3.title': "\u53d6\u7de0\u5f79",
      'team.member4.name': "\u9673\u84d3\u6021",
      'team.member4.org': "\u7e8c\u5347\u7da0\u80fd\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u7dcf\u7d93\u7406",
      'team.member4.title': "\u53d6\u7de0\u5f79",
      'team.member5.name': "\u77f3\u8056\u5f18",
      'team.member5.org': "NextDrive\uff08\u8054\u9f4a\u79d1\u6280\uff09DGX \u4e8b\u696d\u90e8\u9577",
      'team.member5.title': "\u53d6\u7de0\u5f79",
      'team.member6.name': "\u5b6b\u7d39\u7956",
      'team.member6.org': "\u7f8e\u5546\u4e2d\u7d93\u5408\u96c6\u5718 \u30d1\u30fc\u30c8\u30ca\u30fc",
      'team.member6.title': "\u53d6\u7de0\u5f79",
      'tech.ecosystem.subtitle': "\u30a8\u30cd\u30eb\u30ae\u30fc\u30d0\u30ea\u30e5\u30fc\u30c1\u30a7\u30fc\u30f3\u5168\u4f53\u3067\u3001\u8cc7\u7523\u30fb\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30fb\u5e02\u5834\u3092\u3064\u306a\u3050",
      'tech.ecosystem.title': "\u30a8\u30cd\u30eb\u30ae\u30fc\u30d0\u30ea\u30e5\u30fc\u30c1\u30a7\u30fc\u30f3\u3092\u652f\u3048\u308b \n4\u3064\u306e\u6280\u8853",
      'tech.eyebrow': "Core Technology",
      'tech.flow.p1': "Interoperability",
      'tech.flow.p1.desc': "\u3064\u306a\u304c\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u30c7\u30b8\u30bf\u30eb\u57fa\u76e4\u3092\u69cb\u7bc9",
      'tech.flow.p2': "Orchestration",
      'tech.flow.p2.desc': "AI\u306b\u3088\u308b\u4e88\u6e2c\u3068\u6700\u9069\u5316\u3067\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u904b\u7528\u3092\u9ad8\u5ea6\u5316",
      'tech.flow.p3': "Intelligence",
      'tech.flow.p3.desc': "\u5206\u6563\u30ea\u30bd\u30fc\u30b9\u3092\u7d71\u5408\u3057\u3001\u8abf\u6574\u529b\u306e\u4fa1\u5024\u3092\u6700\u5927\u5316",
      'tech.flow.p4': "Monetization",
      'tech.flow.p4.desc': "\u30ea\u30bd\u30fc\u30b9\u3092\u53ce\u76ca\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u5909\u63db",
      'tech.main.overview': "\u5206\u6563\u3059\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u8cc7\u6e90\u3092\u3001\u3064\u306a\u3050\u3001\u6700\u9069\u5316\u3059\u308b\u3001\u4e88\u6e2c\u3059\u308b\u3001\u4fa1\u5024\u5316\u3059\u308b\u3002\nNextDrive\u306f4\u3064\u306e\u6280\u8853\u57fa\u76e4\u3092\u901a\u3058\u3066\u3001\u6b21\u4e16\u4ee3\u30a8\u30cd\u30eb\u30ae\u30fc\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002",
      'tech.main.title': "\u30a8\u30cd\u30eb\u30ae\u30fc\u30d0\u30ea\u30e5\u30fc\u30c1\u30a7\u30fc\u30f3\u3092\u652f\u3048\u308b<br>4\u3064\u306e\u30c6\u30af\u30ce\u30ed\u30b8\u30fc",
      'tech.p1.eyebrow': "01 / インターオペラビリティ",
      'tech.p1.title': "分散型エッジアーキテクチャ",
      'tech.p1.subheading': "マルチベンダー対応エッジ基盤と系統連系インターオペラビリティ",
      'tech.p1.desc': "クラウド非依存型のオンサイト・エッジ基盤により、アセットの継続稼働を確保。マルチプロトコル（14+）対応とISO27001・JC-STAR認証取得により、ポートフォリオ統合時の摩擦を根本から排除する。",
      'tech.p1.bullet1': "<b>ハイブリッドクラウド／エッジ：</b>ローカル処理とクラウド規模のフリート制御を最適なかたちで統合",
      'tech.p1.bullet2': "<b>自律フェイルオーバー：</b>ローカルなグリッドエッジ制御の自動化により、ダウンタイムリスクを抑止",
      'tech.p1.bullet3': "<b>コンプライアンス護城河：</b>ISO27001・ISO27017・JC-STARに裏打ちされた、機関投資家水準のセキュリティ基盤",
      'tech.p2.eyebrow': "02 / オーケストレーション",
      'tech.p2.title': "Internet of Energy（IoE）プラットフォーム",
      'tech.p2.subheading': "クラウドネイティブ・アグリゲーション基盤とアセット・オーケストレーション",
      'tech.p2.desc': "異種DERを単一ネットワークへと統合するスケーラブルなエネルギーOSとして機能。リアルタイムテレメトリと自動ディスパッチにより、複雑なアセット管理を実現する。",
      'tech.p2.bullet1': "<b>リアルタイムテレメトリ：</b>フリート全体のリアルタイム可視化と予測型ディスパッチを実現",
      'tech.p2.bullet2': "<b>統合管理基盤：</b>分散した各種アセットをシングルペインのフレームワークに統合",
      'tech.p2.bullet3': "<b>OEM互換性：</b>多様なアセットタイプにわたる高精度なソフトウェア統合を保証",
      'tech.p3.eyebrow': "03 / インテリジェンス",
      'tech.p3.title': "AIアナリティクス & DaaS",
      'tech.p3.subheading': "AI駆動による収益最適化とリスクマネジメント",
      'tech.p3.desc': "独自開発の機械学習モデルが負荷変動と再エネ出力の不確実性を予測し、自動化されたバッテリーアービトラージによってポートフォリオIRRを最大化。系統インバランスペナルティのリスク中和にも取り組んでいる。",
      'tech.p3.bullet1': "<b>高精度予測：</b>負荷予測93%・太陽光予測85%の精度水準を達成",
      'tech.p3.bullet2': "<b>多目的最適化：</b>コスト・カーボンインテンシティ・VPP目標をリアルタイムで統合的に制御",
      'tech.p3.bullet3': "<b>SoCアービトラージ：</b>高精度予測を起点に、アセットオーナーへのアルファ創出を実現",
      'tech.p4.eyebrow': "04 / マネタイゼーション",
      'tech.p4.title': "リソースアグリゲーション＆市場入札エンジン",
      'tech.p4.subheading': "フリートスケールのリソース管理と容量マネタイズ",
      'tech.p4.desc': "リソースアグリゲーター（RA）とアグリゲーションコーディネーター（AC）の取引機能を統合。自家消費の最適化と電力転売の自動化により、物理アセットを安定的な収益基盤へと転換する。",
      'tech.p4.bullet1': "<b>アンシラリーサービス統合：</b>フリート容量をJEPX・需給調整市場と同期させ、卸電力取引に参加",
      'tech.p4.bullet2': "<b>収益最大化：</b>動態な入札予測モデルにより、収益最適化を継続的に推進",
      'tech.p4.bullet3': "<b>アセットマネタイズ：</b>グリーンエネルギーの商業転売を通じ、アセットオーナーへの継続的な収益還元を実現",
      'trust.label': "\u696d\u754c\u304b\u3089\u4fe1\u983c\u3055\u308c\u308b",
      'vp.quote': "\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306e\u771f\u4fa1\u306f\u3001\n\u305d\u308c\u304c\u4eba\u3005\u306e\u66ae\u3089\u3057\u3092\u8c4a\u304b\u306b\u3059\u308b\u3068\u304d\u306b\u5bbf\u308b\u3002",
      'vp.sub': "\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u672a\u6765\u3092\u3001\u3068\u3082\u306b\u63cf\u304f\u3002",
      'vp.tag1': "\u30a8\u30cd\u30eb\u30ae\u30fc IoE",
      'vp.tag2': "\u30d0\u30fc\u30c1\u30e3\u30eb\u30d1\u30ef\u30fc\u30d7\u30e9\u30f3\u30c8",
      'vp.tag3': "\u9700\u8981\u4e88\u6e2c AI",
      'mission.body': "NextDrive Holdingsは、Internet of Energy Platformを基盤として、次世代のデジタルエネルギーインフラを構築しています。分散型エネルギーリソースを統合・最適化し、個人、企業、都市、さらには国家規模に至るまでのエネルギーネットワークを結びつけ、大規模な仮想発電所（VPP）として機能させます。\n\nまた、エネルギー効率と資本市場を結びつけることで、新たな機関投資向けアセットクラスの創出を推進し、エネルギーインフラを分散化と柔軟性を備えた新たな時代へと導きます。さらに、従来の電力網を高効率なデジタルエネルギーネットワークへと進化させることで、グリーン投資を経済的リターンと社会的進歩の両面で信頼できる推進力へと転換し、文明を次のステージへと導きます。",
      'mission.eyebrow': "Our Mission",
      'mission.title': "\u30a8\u30cd\u30eb\u30ae\u30fc\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3092\u3064\u306a\u304e\u3001\u3088\u308a\u30af\u30ea\u30fc\u30f3\u306a\u672a\u6765\u3078",      
      // 會社概要表格 - 日文版本 (8 行)
      'group.profile.company_name_jp': "社名",
      'group.profile.company_name_value_jp': "NextDrive Holdings 株式会社",
      'group.profile.representative_jp': "取締役会長",
      'group.profile.representative_value_jp': "顏哲淵",

      'group.profile.capital_jp': "資本金",
      'group.profile.capital_value_jp': "30,000,000円",

      'group.profile.location_jp': "本社",
      'group.profile.location_value_jp': "〒105-0012<br><br>東京都港区芝大門1丁目2-14",
      'group.profile.business_jp': "事業内容",
      'group.profile.business_value_jp': "グループ子会社の経営管理ならびにそれに付帯する業務",
      'group.profile.subsidiary_jp': "子会社の事業内容",
      'group.profile.subsidiary_value_jp': "エネルギーマネジメントサービスの提供<br><br>エネルギーマネジメント機器の開発ならびに販売<br><br>再生可能エネルギー等の電力、アグリゲーションサービスの提供<br><br>蓄電所の開発ならびに販売<br><br>通信ソフトウェアの開発ならびに販売",
    },
  };

  /* ─────────────────────────────────────────
     語言套用函式
  ───────────────────────────────────────── */
  function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    // 套用所有帶 data-i18n 屬性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 套用會社概要表格的多語系內容
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      let key;
      if (lang === 'zh') {
        key = el.getAttribute('data-i18n-key');
      } else if (lang === 'en') {
        key = el.getAttribute('data-i18n-key-en');
      } else if (lang === 'ja') {
        key = el.getAttribute('data-i18n-key-jp');
      }
      
      if (key && dict[key] !== undefined) {
        // 處理換行符號
        const text = dict[key].replace(/\\n/g, '<br>');
        el.innerHTML = text;
      }
    });

    // 更新 html lang 屬性
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;

    // 讓新聞全文中的網址成為可點擊連結（純文字網址自動轉連結，並開新分頁）
    linkifyNewsContent();
  }

  /* 將 .news-detail-content 中的純文字網址轉為可點擊連結 */
  function linkifyNewsContent() {
    const urlRe = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/g;
    document.querySelectorAll('.news-detail-content').forEach(box => {
      const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, null);
      const targets = [];
      let node;
      while ((node = walker.nextNode())) {
        if (node.parentNode && node.parentNode.closest('a')) continue;
        urlRe.lastIndex = 0;
        if (urlRe.test(node.nodeValue)) targets.push(node);
      }
      targets.forEach(textNode => {
        const s = textNode.nodeValue;
        const frag = document.createDocumentFragment();
        let last = 0, m;
        urlRe.lastIndex = 0;
        while ((m = urlRe.exec(s))) {
          if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
          const a = document.createElement('a');
          a.href = m[0].indexOf('http') === 0 ? m[0] : 'https://' + m[0];
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = m[0];
          frag.appendChild(a);
          last = m.index + m[0].length;
        }
        if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
        textNode.parentNode.replaceChild(frag, textNode);
      });
      // 既有的 <a> 也統一開新分頁
      box.querySelectorAll('a').forEach(a => {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      });
    });
  }

  /* ─────────────────────────────────────────
     Nav scroll effect & Logo color switching
  ───────────────────────────────────────── */
  const nav = document.getElementById('mainNav');
  const hero = document.getElementById('hero');

  const onScroll = () => {
    // 檢查是否在 hero 區域（淺色背景）
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const isInHero = heroRect && heroRect.bottom > 0;

    // 如果在 hero 區域，使用黑色 logo；否則根據滾動位置決定
    if (isInHero) {
      nav.classList.remove('scrolled');
    } else {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 頁面加載完成後再次檢查 logo 顏色
  window.addEventListener('load', onScroll, { passive: true });

  /* ─────────────────────────────────────────
     Language switcher
  ───────────────────────────────────────── */
  const langBtns = document.querySelectorAll('[data-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  // 初始化：以當前 active 按鈕的語言套用
  const activeLangBtn = document.querySelector('[data-lang].active');
  if (activeLangBtn) applyLang(activeLangBtn.getAttribute('data-lang'));

  // 初始化 logo 顏色
  onScroll();

  /* ─────────────────────────────────────────
     News item expand/collapse
  ───────────────────────────────────────── */
  const newsItems = document.querySelectorAll('.news-item');
  const newsDetails = document.querySelectorAll('.news-detail');
  const newsCloseButtons = document.querySelectorAll('.news-detail-close');

  newsItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const wrapper = item.closest('.news-item-wrapper');
      const newsId = wrapper.getAttribute('data-news-id');
      const detail = wrapper.querySelector('.news-detail[data-news-id="' + newsId + '"]');
      
      newsDetails.forEach(d => {
        if (d !== detail) {
          d.classList.remove('active');
        }
      });
      
      detail.classList.toggle('active');
    });
  });

  newsCloseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const detail = btn.closest('.news-detail');
      detail.classList.remove('active');
    });
  });

  /* ─────────────────────────────────────────
     Smooth scroll for anchor links
  ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setTimeout(onScroll, 100);
      }
    });
  });

  /* ─────────────────────────────────────────
     Business Map: make the whole company card clickable
  ───────────────────────────────────────── */
  document.querySelectorAll('.grp-co-grid-plan4c .grp-co-card').forEach(card => {
    const link = card.querySelector('.grp-co-url');
    if (!link) return;
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    const open = () => window.open(link.href, '_blank', 'noopener');
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // let the real link handle its own click
      open();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

});
