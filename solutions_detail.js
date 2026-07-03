/* ============================================================
   Solutions 卡片「展開面板」文案 — 三語內容檔
   ------------------------------------------------------------
   ▸ 要改展開後顯示的文字，只要編輯這個檔案即可。
   ▸ 每張卡片有 zh（繁中）/ en（英）/ ja（日）三組。
   ▸ 每組欄位：
       sub     = 小標題（標題下方那行）
       lead    = 引言段落（一段話）
       bullets = 三個列點（陣列，建議三點合計約 300 字）
                 ※ 冒號「：」前面的字會自動變粗體標籤
   ▸ 大標題與 eyebrow 不在這裡：
       - eyebrow（如 01 / HEMS）由卡片編號＋英文代碼自動產生
       - 大標題沿用卡片標題（在 site.js 的 sol.cardN.title）
   ▸ 改完存檔、重新整理頁面即可看到效果。
   ============================================================ */

window.SOL_DETAIL = {

  /* ── 01 HEMS 家庭能源管理 ───────────────────────────── */
  card1: {
    zh: {
      sub: "將家庭能源轉化為客戶價值與數據資產",
      lead: "可視化並最佳化智慧家庭的能源流，以 B2B2C 白牌平台加速公用事業應用部署，整合太陽能、儲能與家電於單一平台一元管理。",
      bullets: [
        "B2B2C 白牌方案：賦能公用事業與能源服務商快速推出專屬 HEMS 應用（如 Hanwha Japan 案例，半年上線 2,500+ 用戶）。",
        "AI 驅動儲能調控：智慧判斷充放電時機，最大化太陽能利用率與經濟效益。",
        "深度互操作性：支援 85% 以上國內主要設備，無痛接軌智慧家庭生態系。"
      ]
    },
    en: {
      sub: "Transforming Behind-the-Meter Assets into Consumer and Data Value",
      lead: "Visualize and optimize the smart home's energy flow — unifying solar, storage, and appliances on a single platform through a B2B2C white-label architecture built for utility-scale deployment.",
      bullets: [
        "B2B2C White-Label Platform: Accelerates utility app deployment, customer acquisition, and fleet connectivity.",
        "AI-Driven Optimization: Coordinates solar and storage assets to maximize self-consumption and reduce costs.",
        "Universal Interoperability: Multi-protocol support covering 85%+ of major domestic devices for frictionless integration across smart home ecosystems."
      ]
    },
    ja: {
      sub: "家庭のエネルギーを、顧客価値とデータ価値へ",
      lead: "スマートホームのエネルギーフローを可視化・最適化し、B2B2C ホワイトレーベルプラットフォームで太陽光・蓄電池・家電を単一基盤で一元管理します。",
      bullets: [
        "B2B2C ホワイトレーベルソリューション：公益事業者とエネルギーサービス事業者が独自の HEMS アプリケーションを迅速に立ち上げることを支援（例：Hanwha Japan ケース、6ヶ月で 2,500+ ユーザー）。",
        "AI 駆動型蓄電池制御：充放電のタイミングをインテリジェントに最適化し、太陽光発電の利用率と経済効益を最大化。",
        "深い相互運用性：国内主要機器の 85% 以上に対応し、スマートホームエコシステムとシームレスに統合。"
      ]
    }
  },

  /* ── 02 CEMS 企業能源管理 ───────────────────────────── */
  card2: {
    zh: {
      sub: "AI 賦能企業能源戰略，兼顧效率、永續與競爭力",
      lead: "透過 AI 需量控制與跨境遙測，降低建築與工廠的能源成本，同時提供合規工具支援企業 ESG 目標落地。",
      bullets: [
        "跨境能源遙測：將多據點用電數據匯集於單一整合架構。",
        "AI 即時調控需量，自動抑低尖峰、避免超約罰款，平均省下 20% 電費",
        "ISO 50001 工具組：內建數位化節能績效指標，提升耗報與合規審查效率。"
      ]
    },
    en: {
      sub: "AI-Powered Enterprise Energy Strategies for Global Portfolios",
      lead: "Reduce energy costs across buildings and factories with AI demand control and cross-border telemetry, while delivering compliance tools that make enterprise ESG targets achievable.",
      bullets: [
        "Cross-Border Telemetry: Aggregates multi-site power consumption into a single-pane architecture.",
        "AI Demand Control: Automates peak-shaving and load management to eliminate capacity penalties and protect margins.",
        "Compliance & ESG Toolkit: Streamlines institutional ISO 50001 auditing and global ESG compliance reporting."
      ]
    },
    ja: {
      sub: "AIが企業のエネルギー戦略を強化し、効率・サステナビリティ・競争力を同時に実現",
      lead: "AI需要制御とクロスボーダー・テレメトリーにより、ビルや工場のエネルギーコストを削減しながら、企業の ESG 目標達成を支援するコンプライアンスツールを提供します。",
      bullets: [
        "クロスボーダー・テレメトリー：複数拠点の電力消費データを単一のアーキテクチャに集約。",
        "AI需要制御：自動ピーク抑制と契約違反防止により、電気代を平均 20% 削減。",
        "ISO 50001 ツールキット：デジタルエネルギー指標を内蔵し、報告業務とコンプライアンス審査を効率化。"
      ]
    }
  },

  /* ── 03 BESS 表前儲能 ───────────────────────────────── */
  card3: {
    zh: {
      sub: "以智慧化營運釋放大型儲能潛能，提升資產效益與市場回報",
      lead: "以大規模儲能系統穩定電力供應，透過統包交付與演算法收益最佳化，最大化可再生能源資產的全生命週期價值。",
      bullets: [
        "統包式 FTM 交付：管理電網前端（FTM）資產從併網到長期收益變現的完整生命週期。",
        "調度與收益最佳化：結合全天候技術運維與演算法電力交易，持續最大化電網收益。",
        "可融資一線生態系：透過全球製造夥伴網絡，確保硬體可靠性與最佳採購價格。"
      ]
    },
    en: {
      sub: "Full Lifecycle Asset Optimization & Revenue Management",
      lead: "Stabilize power supply with large-scale energy storage — combining turnkey FTM delivery with algorithmic yield optimization to maximize the full lifecycle value of renewable energy assets.",
      bullets: [
        "Turnkey FTM Delivery: Manages front-of-meter asset lifecycles from grid interconnection to long-term monetization.",
        "Algorithmic Yield Optimization: Syncs 24/7 technical operations with predictive trading to maximize market revenues.",
        "Bankable Tier-1 Ecosystem: Secures hardware reliability and optimized pricing via a global manufacturer network."
      ]
    },
    ja: {
      sub: "スマート運用により、大規模蓄電資産のライフサイクル価値と市場収益を最大化。",
      lead: "大規模蓄電システムにより電力供給を安定化し、ターンキー型 FTM 納品とアルゴリズム収益最適化を組み合わせて、再生可能エネルギー資産のライフサイクル価値を最大化します。",
      bullets: [
        "ターンキー FTM デリバリー：系統連系から長期収益化まで、FTM資産のライフサイクル全体を管理。",
        "調度・収益最適化：24時間技術 O&M とアルゴリズム電力取引を統合し、電網収益を継続的に最大化。",
        "融資適格な一流エコシステム：グローバル製造パートナー網により、ハードウェア信頼性と最適な調達価格を確保。"
      ]
    }
  },

  /* ── 04 VPP 虛擬電廠・聚合 ──────────────────────────── */
  card4: {
    zh: {
      sub: "分散式資源聚合與批發市場變現",
      lead: "整合分散式能源資源並直接參與電力市場，透過預測性套利引擎與輔助市場接入，為企業減碳行動創造全新現金流。",
      bullets: [
        "跨場域資源池建構：無縫整合多據點之太陽能、儲能與 EV 設備，打造高彈性虛擬電廠。",
        "AI 動態預測與套利：演算法自動執行削峰填谷與時間電價套利，極大化能源資產效益。",
        "電力市場直通機制：對接容量與需給調整市場，透過需量反應 (DR) 創造全新現金流。"
      ]
    },
    en: {
      sub: "Distributed Resource Aggregation & Wholesale Market Monetization",
      lead: "Aggregate distributed energy resources for direct power-market participation — a predictive arbitrage engine and ancillary market access that create new revenue streams for enterprise decarbonization.",
      bullets: [
        "Fleet-Scale Asset Pooling: Aggregates solar, BESS, and EV infrastructure into country-scale virtual power plants.",
        "Predictive Arbitrage Engine: Automates peak-shaving and battery scheduling to unlock institutional financial alpha.",
        "Ancillary Market Access: Connects aggregated capacity directly to balancing markets for real-time asset monetization."
      ]
    },
    ja: {
      sub: "分散型リソースの集約と卸電力市場での収益化",
      lead: "分散型エネルギーリソースを統合して電力市場に直接参加し、予測型アービトラージエンジンと補助サービス市場アクセスにより、企業の脱炭素化に新たなキャッシュフローを創出します。",
      bullets: [
        "クロスサイト・リソースプーリング：複数拠点にまたがる太陽光、蓄電池、EV設備をシームレスに統合し、高弾力なVPPを構築。",
        "AI ダイナミック予測・裁定取引：アルゴリズムがピークカットや時間帯別料金のアービトラージを自動実行し、資産価値を最大化。",
        "電力市場ダイレクトアクセス：容量市場および需給調整市場と連携し、デマンドレスポンス (DR) を通じて新たなキャッシュフローを創出。"
      ]
    }
  },

  /* ── 05 CPO EV 充電基礎設施 ─────────────────────────── */
  card5: {
    zh: {
      sub: "次世代充電站基礎設施與電網調度整合平台",
      lead: "以智慧充電管理把 EV 作為能源資源運用，提供整合企業級用戶體驗與 V2X 電網同步功能的充電站營運解決方案。",
      bullets: [
        "智慧化站點營運：協助營運商遠端管理充電站資產與費率，並即時監控充電樁使用狀態。",
        "整合企業級體驗：可擴充白牌工作流程，支援導航、動態計費與車隊請款。",
        "V2X 與電網整合潛力：結合集團 VPP 技術，將 EV 車隊轉化為移動式儲能資產。"
      ]
    },
    en: {
      sub: "Next-Generation Fleet Infrastructure & Grid Integration",
      lead: "Use smart charging management to treat EVs as energy resources — combining integrated enterprise UX with V2X grid synchronization for a complete charging station operations platform.",
      bullets: [
        "Smart Network Operations: Delivers remote asset management, flexible tariff scheduling, and real-time status telemetry.",
        "Integrated Enterprise UX: Scalable white-label workflows supporting navigation, dynamic billing, and fleet invoicing.",
        "V2X Grid Synchronization: Links charging hubs to VPP orchestration, turning EV fleets into mobile storage assets."
      ]
    },
    ja: {
      sub: "次世代充電ステーション運用・エネルギー調度管理プラットフォーム。",
      lead: "スマート充電管理により EV をエネルギーリソースとして活用し、統合型エンタープライズ UX と V2X グリッド同期を組み合わせた充電ステーション運用プラットフォームを提供します。",
      bullets: [
        "スマート拠点運用：料金・資産の遠隔管理と充電器のリアルタイム状態監視を統合。",
        "統合エンタープライズUX：ナビゲーション・動的課金・車隊請求に対応する拡張可能なホワイトレーベルワークフロー。",
        "V2X・グリッド統合：グループ VPP 技術を活用し、EV車隊を移動式分散蓄電資産へ転換。"
      ]
    }
  },

  /* ── 06 Data API 能源數據 API ───────────────────────── */
  card6: {
    zh: {
      sub: "無縫串聯生態系，加速新能源應用與商務擴展",
      lead: "以豐富的能源數據 API 加速合作夥伴企業的服務開發，支援從碳信用追蹤到進階計費引擎的跨境解決方案，支撐整體生態系的價值創造。",
      bullets: [
        "四大高附加價值模組：涵蓋用戶管理、裝置管理、數據存取、資料科學等應用，加速企業內部新服務開發。",
        "廣泛且深度的聯網能力：支援 ECHONET Lite、Modbus 等多元通訊協定，無縫串聯智慧電表、光電、充放電樁、儲能、熱水器等智慧能源設備。",
        "多元應用場景：從碳權追蹤到進階計費引擎，賦能跨境解決方案。"
      ]
    },
    en: {
      sub: "Open-Architecture Datasets Fueling Ecosystem Innovation",
      lead: "Accelerate partners' service development with rich energy-data APIs — powering cross-border solutions from carbon credit tracking to advanced billing engines across the entire ecosystem.",
      bullets: [
        "Modular Developer Core: Secure API modules that accelerate custom enterprise service and device development.",
        "Multi-Protocol Connectivity: Native integration across meters, solar, storage, and EVs via major industry protocols.",
        "Extensible Use Cases: Powers cross-border solutions from carbon credit tracking to advanced billing engines."
      ]
    },
    ja: {
      sub: "エコシステムをシームレスに接続し、新エネルギーアプリケーションとビジネス拡大を加速。",
      lead: "豊富なエネルギーデータ API でパートナー企業のサービス開発を加速し、カーボンクレジット追跡から高度な請求エンジンまで、クロスボーダーソリューションを通じてエコシステム全体の価値創出を支えます。",
      bullets: [
        "4 つの高付加価値モジュール：ユーザー/デバイス管理とデータアクセスで企業サービス開発を加速。",
        "広範かつ深いコネクティビティ：ECHONET Lite・Modbus等の多様なプロトコルに対応し、スマートメーター・太陽光・EV充電器・蓄電池・給湯器をシームレスに接続。",
        "多様なユースケース：カーボンクレジット追跡から高度な課金エンジンまで、クロスボーダーソリューションを実現。"
      ]
    }
  }

};
