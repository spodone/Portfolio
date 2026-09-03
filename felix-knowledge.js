/* ============================================================================
   FELIX KNOWLEDGE BASE
   ----------------------------------------------------------------------------
   Felix is the AI assistant on Eugene Treiher's portfolio. This file is the
   single source of truth for everything Felix knows and how it should behave.
   Edit THIS file (not index.html) to teach Felix new things.

   Every fact below is drawn from the portfolio case studies and Eugene's
   LinkedIn profile. Do not invent metrics, employers, or claims that are not
   here. When unsure, Felix should say so and point to the case studies.

   Each entry:
     topic  - short label (for humans, not shown to users)
     keys   - trigger phrases/words. Multi-word phrases score higher than
              single words. Add synonyms generously.
     answer - what Felix replies. Use "\n" for line breaks and "•" for bullets.

   Matching is handled in index.html: the query is scored against every
   entry's keys and the best-scoring entry wins. If nothing scores high
   enough, FELIX_KB.fallback is used.
   ========================================================================== */
window.FELIX_KB = {

  /* One-line persona used by the matcher's tone; not shown directly. */
  persona: "Felix is Eugene Treiher's friendly, concise portfolio assistant. It only answers questions about Eugene: his work, experience, skills, and how he can help a team. It never makes up facts.",

  entries: [
    /* ---- Who he is / bio --------------------------------------------- */
    {
      topic: "about",
      keys: ["who is eugene","who's eugene","about eugene","tell me about","background","bio","summary","who are you talking about","introduce"],
      answer: "Eugene Treiher is an AI-native Product Designer with 8+ years designing complex, high-impact products across Web3, fintech, trading, and regulated banking.\n\nHe specializes in turning complex domains - blockchain infrastructure, trading systems, and compliance-heavy banking - into clear, usable experiences. He's based in Dubai, UAE, and works at the intersection of UX, regulation, and engineering.\n\nHe's driven by systems thinking and a constant desire to make complex things feel simple, trustworthy, and human."
    },

    /* ---- How he can help a team / hire ------------------------------- */
    {
      topic: "help-team",
      keys: ["help our team","help your team","how can eugene help","work with","collaborate","bring him on","add to our team","why hire","value","what can he do for us","fit for our team"],
      answer: "Eugene helps product teams turn complex business problems into intuitive, scalable digital experiences.\n\nWith 8+ years across fintech, banking, Web3, and trading, he combines product strategy, UX design, rapid AI-assisted prototyping, and UX research to deliver measurable business impact.\n\nHe's especially effective where products involve complex user journeys, technical constraints, or regulatory requirements - the situations where most designers struggle."
    },

    /* ---- Contact / hire ---------------------------------------------- */
    {
      topic: "contact",
      keys: ["contact","email","reach him","reach out","get in touch","hire eugene","how do i contact","linkedin","connect","talk to eugene","email address"],
      answer: "You can reach Eugene directly:\n\n• Email: e.treiher@gmail.com\n• LinkedIn: linkedin.com/in/eugene-t-9b0225137\n\nHe's based in Dubai, UAE, and open to talking about senior product design roles and interesting product challenges."
    },

    /* ---- What role he's looking for ---------------------------------- */
    {
      topic: "looking-for",
      keys: ["looking for","open to","what role","kind of role","job","position","opportunity","next role","hiring him","available","seeking"],
      answer: "Eugene is looking for a Senior or Staff Product Designer role where he can help build ambitious, AI-first products alongside strong product teams.\n\nHe's particularly interested in:\n• AI products\n• Fintech\n• Trading platforms\n• Developer tools\n• Data-intensive platforms\n• Web3 infrastructure\n\nHe thrives where product thinking, experimentation, and measurable impact are valued as much as visual design."
    },

    /* ---- Experience timeline ----------------------------------------- */
    {
      topic: "experience",
      keys: ["experience","career","work history","timeline","companies","where has he worked","past roles","employment","how many years","years of experience","cv","resume"],
      answer: "Eugene has 8+ years of product design experience:\n\n• PUMB (a leading Ukrainian bank) - Senior Product Designer, 2024-2026. End-to-end KYC, KYB, and AML experiences for SMBs.\n• DappRadar - Senior / Lead Product Designer, 2022-2023. Web3 analytics, staking, rankings, and the design system.\n• Yellow - Product Designer, 2018-2022. Crypto exchange platforms, OpenDAX, and trading products.\n• AMgrade - UX/UI Designer, 2017-2018.\n• Skysait - Web Designer, 2017.\n\nEducation: Bachelor's degree, Zaporizhzhya State University (2012-2016)."
    },

    /* ---- Current role ------------------------------------------------- */
    {
      topic: "current-role",
      keys: ["current role","currently","right now","where does he work now","present job","today","pumb","what is he doing now","current job"],
      answer: "Eugene is a Senior Product Designer at PUMB, one of Ukraine's largest private banks (2024-2026).\n\nHis core focus is end-to-end design of KYC, KYB, and AML flows, where regulatory, legal, and technical constraints directly shape the experience. He translates compliance-heavy requirements into structured, low-friction journeys that business owners can complete with confidence - working closely with product, legal, compliance, and engineering teams.\n\nHe also mentors designers and runs hiring interviews and UX challenges."
    },

    /* ---- KYB case ----------------------------------------------------- */
    {
      topic: "kyb",
      keys: ["kyb","business verification","know your business","kyb case","business onboarding","corporate onboarding","verification portal"],
      answer: "KYB Verification Service (leading Ukrainian bank) is one of Eugene's strongest case studies.\n\nHe digitized the entire business verification (KYB) onboarding process, replacing a fully manual flow that took 8-14 business days and 15-30 documents per case.\n\nAs Lead Product Designer he owned product strategy, UX research, product and UI design, prototyping, the design system, and developer handoff.\n\nOutcome:\n• ~$1.1M in operational savings\n• 70% faster verification\n• 3× faster corporate onboarding"
    },

    /* ---- KYC case ----------------------------------------------------- */
    {
      topic: "kyc",
      keys: ["kyc","re-verification","reverification","drop-off","drop off","document upload","progressive disclosure","kyc case","onboarding friction","a/b test","ab test"],
      answer: "Simplifying KYC Re-verification (leading Ukrainian bank) shows Eugene's eye for high-leverage, low-effort wins.\n\nDuring periodic KYC updates, everyone was asked to re-upload their ID - even when nothing had changed - so many users abandoned the flow. His insight: most users weren't changing their document at all.\n\nThe fix was progressive disclosure - the upload step only appears when the document actually changes. Validated with an A/B experiment in production.\n\nOutcome: drop-off cut from 38% to 8%."
    },

    /* ---- Token staking case ------------------------------------------ */
    {
      topic: "staking",
      keys: ["staking","token staking","radar staking","stake","defi staking","pro subscription","staking case"],
      answer: "Token Staking UX (DappRadar) let users stake RADAR tokens in exchange for a DappRadar PRO account.\n\nAs Lead Product Designer, Eugene redesigned the flow from wallet connection through to the active staking dashboard, introducing a 30-day cool-down and a more sustainable APY while making the experience approachable for newcomers.\n\nOutcome: 5M+ tokens staked and 100+ new PRO subscribers in the first month - the simplicity paid off."
    },

    /* ---- Design system case ------------------------------------------ */
    {
      topic: "design-system",
      keys: ["design system","design systems","system","tokens","components","storybook","foundations","design ops","consistency","design language"],
      answer: "Design System (DappRadar): Eugene led the creation and adoption of a centralized design system spanning Figma, Storybook, and production.\n\nHe started with a full design audit, harmonized a sprawl of colors, type, and grids into functional foundations, built reusable components, trained designers, and partnered with engineering to keep implementation in sync. He also drove accessibility.\n\nOutcome:\n• -60% per-feature design time\n• 4.41/5 user rating for the system\n• Faster delivery and a more consistent experience across products"
    },

    /* ---- White-label / OpenDAX --------------------------------------- */
    {
      topic: "white-label",
      keys: ["white-label","white label","opendax","openware","frontdex","ui kit","exchange infrastructure","admin panel","themeable","reusable exchange"],
      answer: "White-label Exchange (OpenDax): Eugene designed both the end-user trading interface and the admin panel for white-label crypto exchange infrastructure.\n\nThe hard part: one codebase serving radically different clients (a retail exchange, a regulated fintech, an OTC desk). He built a token-based design system where swapping ~12 theme tokens could transform the product from dark crypto to clean fintech without touching component logic.\n\nOutcome: the FrontDEX UI Kit is used by 7K+ designers and reached 582 forks on GitHub."
    },

    /* ---- Rankings ----------------------------------------------------- */
    {
      topic: "rankings",
      keys: ["rankings","discovery","dapp rankings","engaged sessions","discovery experience","browse dapps","rankings case"],
      answer: "Rankings Experience (DappRadar): Eugene redesigned DappRadar's core discovery experience - the rankings that are central to how people find and evaluate dapps.\n\nAs Lead Product Designer he reworked the experience to be clearer and more engaging.\n\nOutcome: +16% engaged sessions. (A fuller write-up is on the way.)"
    },

    /* ---- Trady -------------------------------------------------------- */
    {
      topic: "trady",
      keys: ["trady","memecoin","meme coin","trading terminal","rebrand","cross-chain","memecoin trading"],
      answer: "Memecoin Trading Terminal (Trady): a cross-chain memecoin trading terminal built for speed.\n\nAs freelance Product Designer, Eugene applied a new brand across the whole product under a very tight deadline - translating it into a refreshed design system, new components, and a redesigned trading experience (Discover feed, Trenches, custom radar, KOL signals, wallet tracking, and portfolio analytics).\n\nHe used Claude connected to Figma via MCP to generate the color-token set and responsive layouts directly in the file, which was decisive in hitting the timeline without cutting corners."
    },

    /* ---- OUINEX ------------------------------------------------------- */
    {
      topic: "ouinex",
      keys: ["ouinex","multi-asset","commodities","indices","forex","fx","crypto collateral","stocks trading"],
      answer: "Trading Platform (OUINEX): a platform to trade crypto, FX, stocks, commodities, and indices - all using crypto as collateral.\n\nEugene worked as Product Designer on the trading experience. A full write-up is coming soon."
    },

    /* ---- Web3 experience --------------------------------------------- */
    {
      topic: "web3",
      keys: ["web3","defi","crypto","blockchain","dapp","radar","wallet","nft","on-chain","onchain"],
      answer: "Eugene has several years designing in the Web3 ecosystem, across DappRadar, Yellow, OpenDax, and Trady.\n\nHis Web3 work spans:\n• DeFi and staking products\n• Trading interfaces and terminals\n• Portfolio management and blockchain analytics\n• Crypto wallets and authentication flows\n• Developer tools and design systems\n\nWorking in Web3 taught him to simplify highly technical concepts without dumbing them down for experienced users."
    },

    /* ---- Fintech / banking / compliance ------------------------------ */
    {
      topic: "fintech",
      keys: ["fintech","banking","bank","compliance","regulated","aml","anti-money laundering","kyc kyb","regulation","financial"],
      answer: "Regulated fintech is one of Eugene's deepest areas. At PUMB he designs end-to-end KYC, KYB, and AML experiences for small and medium businesses.\n\nHe operates at the intersection of UX, regulation, and engineering - translating legal and compliance requirements into structured, low-friction journeys, with deep attention to edge cases, validation logic, and system constraints.\n\nHighlights: the KYB portal (~$1.1M savings, 70% faster, 3× onboarding) and KYC re-verification (drop-off 38% → 8%)."
    },

    /* ---- Trading experience ------------------------------------------ */
    {
      topic: "trading",
      keys: ["trading","trade","exchange","terminal","order book","charts","markets","trading experience"],
      answer: "Eugene has designed trading products across several companies: crypto exchanges at Yellow and OpenDax, a multi-asset platform at OUINEX (crypto, FX, stocks, commodities, indices), and a cross-chain memecoin terminal at Trady.\n\nHe's comfortable with data-dense, real-time interfaces - keeping them fast and legible while surfacing exactly what a trader needs at each moment."
    },

    /* ---- AI workflow -------------------------------------------------- */
    {
      topic: "ai",
      keys: ["ai","artificial intelligence","machine learning","gpt","llm","claude","automation","use ai","ai-native","ai native","prototyping with ai","mcp"],
      answer: "AI is deeply integrated into Eugene's process - he's an AI-native designer.\n\nHe uses it to:\n• Accelerate research synthesis and discovery\n• Generate layouts, flows, and interaction concepts\n• Prototype interactions and explore ideas fast\n• Write UX copy and challenge assumptions\n• Automate repetitive design work\n\nA concrete example: on Trady he used Claude connected to Figma via MCP to generate the color tokens and responsive layouts directly in the file. AI doesn't replace his product thinking - it frees him to spend more time on the hard decisions."
    },

    /* ---- Results / metrics ------------------------------------------- */
    {
      topic: "results",
      keys: ["results","result","metric","metrics","measurable","impact","numbers","stats","outcome","roi","business impact","proof"],
      answer: "Eugene designs for measurable outcomes, not just visuals:\n\n• KYB portal - ~$1.1M savings, 70% faster, 3× onboarding speed\n• KYC re-verification - drop-off cut from 38% to 8%\n• DappRadar design system - -60% per-feature design time, 4.41/5 rating\n• Rankings redesign - +16% engaged sessions\n• RADAR staking - 5M+ tokens staked, 100+ PRO subscribers in month one\n• OpenDax UI kit - 7K+ designers, 582 GitHub forks\n\nHe believes good design should improve both user experience and business performance."
    },

    /* ---- Strongest skill / what makes him different ------------------ */
    {
      topic: "strengths",
      keys: ["strongest skill","what makes him different","unique","stand out","superpower","best at","strengths","why eugene","what sets him apart","special"],
      answer: "Eugene combines strong product thinking with an AI-native workflow.\n\nRather than starting from screens, he works backwards from business goals, user problems, and product strategy. He's spent years simplifying regulated financial systems, blockchain products, and data-heavy applications into experiences that feel intuitive.\n\nHis AI-augmented workflow lets him move from research to validated prototypes far faster - without sacrificing quality. In short: complex domains made simple, with measurable results."
    },

    /* ---- Leadership / mentoring / hiring ------------------------------ */
    {
      topic: "leadership",
      keys: ["led","lead","leadership","initiative","mentor","mentoring","hiring","interviews","ownership","strategy","manage","team growth","reviews","critique"],
      answer: "Yes - Eugene consistently takes ownership beyond UI.\n\nHe has led design system initiatives, facilitated design reviews, introduced AI-powered workflows, and contributed to product strategy across teams. He regularly mentors and reviews other designers, gives structured feedback and design critiques, and participates in hiring - conducting interviews, reviewing portfolios and test tasks, and running UX challenges based on real product problems.\n\nEven in individual-contributor roles, he improves process and helps teams make better product decisions."
    },

    /* ---- Tools -------------------------------------------------------- */
    {
      topic: "tools",
      keys: ["tools","figma","software","stack","what does he use","storybook","prototyping tools","toolset"],
      answer: "Eugene works primarily in Figma (design systems, prototyping, developer handoff) and Storybook for keeping design and production in sync.\n\nHe leans heavily on AI tools for prototyping and discovery - including Claude connected to Figma via MCP to generate tokens and layouts directly in the file. He validates decisions with UX research: usability testing, interviews, and A/B experiments."
    },

    /* ---- Languages ---------------------------------------------------- */
    {
      topic: "languages",
      keys: ["languages","speak","spoken languages","ukrainian","russian","english","bilingual","which languages"],
      answer: "Eugene speaks:\n• Ukrainian - native\n• Russian - native\n• English - professional working\n• Hebrew - elementary\n• Spanish - elementary"
    },

    /* ---- Location ----------------------------------------------------- */
    {
      topic: "location",
      keys: ["location","where is he based","where does he live","dubai","relocate","relocation","remote","timezone","based"],
      answer: "Eugene is based in Dubai, UAE. He's comfortable working with distributed teams and open to remote and relocation for the right role."
    },

    /* ---- Education ---------------------------------------------------- */
    {
      topic: "education",
      keys: ["education","degree","university","study","studied","school","academic"],
      answer: "Eugene holds a Bachelor's degree from Zaporizhzhya State University (2012-2016). Most of his craft, though, comes from 8+ years shipping real products in fintech and Web3."
    }
  ],

  /* Used when no entry scores high enough. */
  fallback: "Great question. Eugene is an AI-native Product Designer with 8+ years across fintech, banking, Web3, and trading - with work at PUMB, DappRadar, Yellow, and OpenDax.\n\nYou can ask me about any of his case studies (KYB, KYC, staking, design system, Trady, rankings), his AI workflow, measurable results, the kind of role he's after, or how to get in touch."
};
