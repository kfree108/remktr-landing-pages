const bookingUrl = "https://calendly.com/jayce-remktr/30min";

const directions = [
  ["metaview", "MetaView", "https://metaview.ai", "Mint command-center proof grid with calm AI polish."],
  ["frameio", "Frame.io", "https://frame.io", "Cinematic creative workflow with violet-blue depth."],
  ["warp", "Warp", "https://warp.dev/terminal", "Terminal-native devtool with disciplined graphite surfaces."],
  ["pipe", "Pipe", "https://pipe.com", "Black infrastructure editorial with one molten orange action."],
  ["vapi", "Vapi", "https://vapi.ai", "Sparse AI hero with signal capsules and vivid action pills."],
  ["hbo", "HBO Max", "https://www.hbomax.com", "Premium streaming theater with full-bleed media rhythm."],
  ["langbase", "Langbase", "https://langbase.com", "Stark AI developer grid with luminous data bars."],
  ["doppler", "Doppler", "https://doppler.com", "Secret-management console energy with electric status green."],
  ["suno", "Suno", "https://suno.com", "Warm neon studio atmosphere with floating media cards."],
  ["elementor", "Elementor", "https://elementor.com", "Editorial monochrome SaaS with poster-scale typography."]
];

const directionProfiles = {
  metaview: {
    name: "MetaView",
    reference: "https://metaview.ai",
    layout: "layout-proof-wall",
    hero: "proof",
    proof: "mosaic",
    video: "grid",
    cta: "mint",
    thesis: "Dark proof wall, testimonial mosaic, operational AI credibility.",
    homeOrder: ["proof", "programs", "creative", "access", "flow"],
    offerOrder: ["proof", "mechanism", "math", "creative", "included", "faq"]
  },
  frameio: {
    name: "Frame.io",
    reference: "https://frame.io",
    layout: "layout-cinema",
    hero: "cinematic",
    proof: "reel",
    video: "rail",
    cta: "violet",
    thesis: "Cinematic creative workflow with large video reels and soft violet depth.",
    homeOrder: ["creative", "programs", "access", "proof", "flow"],
    offerOrder: ["creative", "mechanism", "math", "proof", "included", "faq"]
  },
  warp: {
    name: "Warp",
    reference: "https://warp.dev/terminal",
    layout: "layout-terminal",
    hero: "terminal",
    proof: "dense",
    video: "console",
    cta: "white",
    thesis: "Terminal command center, command-line audit flow, dense technical proof.",
    homeOrder: ["flow", "programs", "math", "access", "creative", "proof"],
    offerOrder: ["math", "mechanism", "proof", "included", "creative", "faq"]
  },
  pipe: {
    name: "Pipe",
    reference: "https://pipe.com",
    layout: "layout-editorial layout-pipe",
    hero: "split",
    proof: "stats",
    video: "tall",
    cta: "orange",
    thesis: "Stark black/orange founder-finance editorial with a tall media panel.",
    homeOrder: ["programs", "proof", "access", "creative", "flow"],
    offerOrder: ["math", "mechanism", "included", "proof", "creative", "faq"]
  },
  vapi: {
    name: "Vapi",
    reference: "https://vapi.ai",
    layout: "layout-signal",
    hero: "signal",
    proof: "compact",
    video: "compact",
    cta: "orange",
    thesis: "Minimal AI signal interface with colorful bars and compact modules.",
    homeOrder: ["programs", "flow", "creative", "proof", "access"],
    offerOrder: ["mechanism", "math", "creative", "proof", "included", "faq"]
  },
  hbo: {
    name: "HBO Max",
    reference: "https://www.hbomax.com",
    layout: "layout-theater",
    hero: "poster",
    proof: "poster",
    video: "poster",
    cta: "blue",
    thesis: "Premium streaming theater, video-poster rows, dark showpiece conversion.",
    homeOrder: ["creative", "access", "programs", "proof", "flow"],
    offerOrder: ["creative", "mechanism", "proof", "math", "included", "faq"]
  },
  langbase: {
    name: "Langbase",
    reference: "https://langbase.com",
    layout: "layout-grid",
    hero: "datastream",
    proof: "grid",
    video: "grid",
    cta: "white",
    thesis: "Black-and-white developer grid, luminous data streams, strict diagrams.",
    homeOrder: ["flow", "programs", "access", "math", "creative", "proof"],
    offerOrder: ["mechanism", "math", "included", "proof", "creative", "faq"]
  },
  doppler: {
    name: "Doppler",
    reference: "https://doppler.com",
    layout: "layout-console",
    hero: "console",
    proof: "status",
    video: "console",
    cta: "green",
    thesis: "Secure operations console, purple-black panels, green status-led CTAs.",
    homeOrder: ["access", "flow", "programs", "proof", "creative"],
    offerOrder: ["mechanism", "included", "math", "proof", "creative", "faq"]
  },
  suno: {
    name: "Suno",
    reference: "https://suno.com",
    layout: "layout-studio",
    hero: "studio",
    proof: "loose",
    video: "floating",
    cta: "warm",
    thesis: "Warm neon creative studio with floating tilted video cards.",
    homeOrder: ["creative", "programs", "flow", "proof", "access"],
    offerOrder: ["creative", "proof", "mechanism", "math", "included", "faq"]
  },
  elementor: {
    name: "Elementor",
    reference: "https://elementor.com",
    layout: "layout-poster",
    hero: "posterText",
    proof: "editorial",
    video: "editorial",
    cta: "mono",
    thesis: "Monochrome editorial poster system with alternating bands and huge type.",
    homeOrder: ["programs", "access", "proof", "creative", "flow"],
    offerOrder: ["mechanism", "math", "proof", "included", "creative", "faq"]
  }
};

const programs = {
  undercut: {
    code: "MARKETPLACE EFFICIENCY",
    num: "01",
    path: "/undercut/",
    lp: "/lp/undercut/",
    seo: "amazon dsp management",
    kicker: "PROGRAM 01 — MARKETPLACE EFFICIENCY",
    promise: "PPC cost relief via on-Amazon DSP.",
    headline: "Stop paying $4 for a $1 click.",
    subhead: "The same Amazon real estate your PPC buys — bought through DSP at 50–75% less per visit.",
    cta: "Get the free CPC Leak Audit",
    pain: "My CPCs are up 18% again and ACoS is eating my margin.",
    stat: "SP CPC: $3.40",
    active: "undercut",
    metrics: [
      ["$0.80", "Effective CPC target", "▼ 68% vs PPC"],
      ["40%", "Shiftable spend model", "default audit assumption"],
      ["50", "Keywords mapped", "page-one audit"]
    ],
    included: ["Free CPC Leak Audit", "50 most expensive keywords mapped to DSP equivalents", "Campaign build", "Weekly pacing", "Monthly blended cost-per-PDP-view report"],
    faq: [
      ["Is a DSP click as good as a keyword click?", "DSP has no keyword targeting. It targets the intent behind the keyword, expressed as audiences. PPC keeps what only PPC can do. Everything else, we buy cheaper."],
      ["Do we pause PPC?", "No. Branded terms and proven converters stay in PPC. Expensive broad terms, ASIN retargeting, conquesting, and in-market audiences move to DSP where the math is better."],
      ["How do you charge?", "A simple percentage of managed spend. No retainers. No platform fees. No creative fees."]
    ]
  },
  ignite: {
    code: "VIDEO DEMAND ENGINE",
    num: "02",
    path: "/ignite/",
    lp: "/lp/ignite/",
    seo: "amazon olv advertising",
    kicker: "PROGRAM 02 — VIDEO DEMAND ENGINE",
    promise: "Online video that creates demand.",
    headline: "Search harvests demand. Video creates it.",
    subhead: "Full-funnel online video that grows new-to-brand customers — with unlimited on-brand creative included free.",
    cta: "Get the free Video Opportunity Map",
    pain: "We already own our keywords. Where does the next million come from?",
    stat: "NTB rate: flat 6 mo",
    active: "ignite",
    metrics: [
      ["2.4x", "New-to-brand growth", "pilot placeholder"],
      ["20–40%", "Halo on last-touch ROAS", "expected readout"],
      ["48h", "Creative turnaround", "$0 creative fee"]
    ],
    included: ["Audience architecture", "Unlimited agency-grade video creative", "48-hour creative turnaround", "Monthly NTB report", "OLV prospecting into DSP retargeting"],
    faq: [
      ["Where does the video run?", "Online video inventory bought through Amazon DSP, then retargeted into lower-funnel capture."],
      ["Is the creative really included?", "Yes. Unlimited concepts, on-brand cutdowns, and refreshes are included free."],
      ["How do you charge?", "A simple percentage of managed spend. No retainers. No platform fees. No creative fees."]
    ]
  },
  crossover: {
    code: "AMAZON AUDIENCE LINKOUTS",
    num: "03",
    path: "/crossover/",
    lp: "/lp/crossover/",
    seo: "amazon audiences shopify",
    kicker: "PROGRAM 03 — AMAZON AUDIENCE LINKOUTS",
    promise: "Amazon Audiences pointed at Shopify.",
    headline: "Run Amazon's audiences to your Shopify store.",
    subhead: "In-market and purchase-behavior targeting Meta will never have — aimed at the channel where you own the customer. Creative included free.",
    cta: "Get the free Linkout Readiness Audit",
    pain: "Meta CAC is up 40% in two years. I'm one algorithm change from a bad quarter.",
    stat: "Meta CAC: ▲ 40%",
    active: "crossover",
    metrics: [
      ["$41", "Linkout CAC placeholder", "vs $89 Meta CAC"],
      ["2%+", "Site CVR threshold", "qualification line"],
      ["100%", "UTM + GA4 + survey setup", "before spend"]
    ],
    included: ["Readiness audit", "Amazon audience build", "Agency-grade statics and video", "Landing page direction", "Blended CAC reporting"],
    faq: [
      ["Does DSP target keywords?", "No. All targeting language here is audiences. DSP targets purchase and behavior signals, not keywords."],
      ["Who should not run this?", "Brands with weak site conversion, no credible offer, or no measurement discipline should not start here."],
      ["How do you charge?", "A simple percentage of managed spend. No retainers. No platform fees. No creative fees."]
    ]
  },
  primetime: {
    code: "STREAMING TV",
    num: "04",
    path: "/primetime/",
    lp: "/lp/primetime/",
    seo: "buy netflix ads through amazon dsp",
    kicker: "PROGRAM 04 — STREAMING TV",
    promise: "Premium streaming with a purchase graph.",
    headline: "TV with a purchase graph.",
    subhead: "Netflix, Disney+, Hulu, Prime Video and Roku — bought through Amazon DSP access, targeted with Amazon purchase data, measured like performance media. TV-ready creative included free.",
    cta: "Get the free Streaming Reach Plan",
    pain: "We're ready for TV. But I'm not lighting money on fire.",
    stat: "CTV: 20% time, 7.7% spend",
    active: "primetime",
    metrics: [
      ["CTV", "Premium streaming placements", "Prime Video + more"],
      ["AMC", "Sales and NTB attribution", "purchase graph"],
      ["7 days", "Brief to launch-ready", "creative included"]
    ],
    included: ["Reach plan free", "Broadcast-quality :15/:30 spots", "Adaptations and refreshes", "Premium streaming plan", "Sales lift and branded-search readouts"],
    faq: [
      ["Tried self-serve CTV?", "Good. You proved the channel. You were missing the Amazon purchase graph, the creative system, and the measurement layer."],
      ["Can we prove sales?", "We measure sales lift, branded search, NTB, and upper-tier brand-lift studies where the campaign qualifies."],
      ["How do you charge?", "A simple percentage of managed spend. No retainers. No platform fees. No creative fees."]
    ]
  }
};

const videos = [
  ["b0ft3wvczz-impossible-swagger.mp4", "Impossible Swagger"],
  ["b0gscj9j4g-morning-show.mp4", "Morning Show"],
  ["b0gscj9j4g-street-interview.mp4", "Street Interview"],
  ["b0gscj9j4g-mock-news.mp4", "Mock News"],
  ["b01bk871de-absurd-expert-explainer.mp4", "Absurd Expert Explainer"],
  ["b01bk871de-mock-news.mp4", "Mock News Variant"],
  ["b00r3zlxz6-founder-myth.mp4", "Founder Myth"],
  ["b00y2mae9o-street-interview.mp4", "Street Interview"],
  ["b09jww7kl4-category-roast.mp4", "Category Roast"],
  ["b0ctj5k5gq-legendary-customer.mp4", "Legendary Customer"],
  ["b0gwkrsbv6-apple-glitch.mp4", "Apple Glitch"],
  ["sciatiease-test.mp4", "Test Cut"]
];

const streamingLogos = ["Netflix", "Disney+", "Hulu", "Prime Video", "Roku", "Peacock", "Max", "Paramount+"];
const categories = ["Supplements", "Beauty", "Electronics", "Home", "CPG"];

function rootPath(path) { return path; }
function vpath(file) { return `/assets/videos/${file}`; }
function app() { return document.getElementById("app"); }
function pageName() { return document.body.dataset.page || "home"; }
function pageProgram() { return document.body.dataset.program || ""; }
function isLp() { return document.body.classList.contains("lp"); }
function activeDirection() {
  const id = new URLSearchParams(location.search).get("d");
  return directions.some(([key]) => key === id) ? id : "base";
}
function withDirection(path) {
  const d = activeDirection();
  if (d === "base" || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  if (path.includes("#")) {
    const [base, hash] = path.split("#");
    const joiner = base.includes("?") ? "&" : "?";
    return `${base}${joiner}d=${encodeURIComponent(d)}#${hash}`;
  }
  const joiner = path.includes("?") ? "&" : "?";
  return `${path}${joiner}d=${encodeURIComponent(d)}`;
}

function cta(label = "Get your free audit", cls = "primary", href = "/audit/") {
  return `<a class="btn ${cls}" href="${withDirection(href)}" data-cta="${label}">${label}</a>`;
}

function nav() {
  return `<nav class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="${withDirection("/")}"><span class="re">re</span><span class="mktr">MKTR</span></a>
      <div class="nav-links">
        <div class="programs">
          <a href="${withDirection("/#programs")}">Programs</a>
          <div class="program-menu">
            ${Object.values(programs).map(p => `<a href="${withDirection(p.path)}"><b>${p.code}</b><span>${p.promise}</span></a>`).join("")}
          </div>
        </div>
        <a href="${withDirection("/the-seat/")}">DSP Access</a>
        <a href="${withDirection("/results/")}">Results</a>
        <a href="${withDirection("/insights/")}">Insights</a>
        <a href="${withDirection("/directions/")}">Directions</a>
        <a href="${withDirection("/about/")}">About</a>
        ${cta("Get your free audit")}
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="${withDirection("/")}"><span class="re">re</span><span class="mktr">MKTR</span></a>
          <p style="color:var(--text-secondary);margin-top:14px">No retainers. No platform fees. No creative fees. The performance is on us.</p>
        </div>
        <div><strong>Programs</strong>${Object.values(programs).map(p => `<a href="${withDirection(p.path)}">${p.code}</a>`).join("")}</div>
        <div><strong>Company</strong><a href="${withDirection("/the-seat/")}">DSP Access</a><a href="${withDirection("/about/")}">About</a><a href="${withDirection("/audit/")}">Audit</a></div>
        <div><strong>Insights</strong><a href="${withDirection("/results/")}">Results</a><a href="${withDirection("/insights/")}">Video Library</a><a href="${withDirection("/directions/")}">Directions</a></div>
        <div><strong>Contact</strong><a href="${bookingUrl}">Book a call</a><a href="mailto:jayce@remktr.com">jayce@remktr.com</a></div>
      </div>
      <div class="signoff">remktr — a Full Circle company</div>
    </div>
  </footer>`;
}

function terminalCard({ path, quote, stat, href }) {
  return `<a class="terminal-card" href="${withDirection(href)}">
    <div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">${path}</span></div>
    <div class="terminal-body">
      <div class="quote">"${quote}"</div>
      <div class="stat-line"><span class="mono">${stat}</span><span class="arrow">→</span></div>
    </div>
  </a>`;
}

function metricStat([num, label, delta], warn = false) {
  return `<div class="metric-stat"><span class="metric-value">${num}</span><div class="metric-label">${label}</div>${delta ? `<span class="delta ${warn ? "warn" : ""}">${delta}</span>` : ""}</div>`;
}

function ladder(active = "all") {
  return `<div class="ladder">
    ${Object.values(programs).map(p => `<a class="ladder-step ${active === p.active || active === "all" ? "active" : ""}" href="${withDirection(p.path)}">
      <span>${p.num}</span><h3>${p.code}</h3><p style="color:var(--text-secondary);margin-top:8px">${p.promise}</p>
    </a>`).join("")}
  </div>`;
}

function auditCta(program = "") {
  return `<section><div class="wrap"><div class="audit-band">
    <div><h2>~/free-audit</h2><p>Free. 30 minutes. Your data, not a pitch.</p></div>
    ${cta(program ? `Get the ${program} audit` : "Get your free audit", "primary", `/audit/${program ? `?program=${program.toLowerCase()}` : ""}`)}
  </div></div></section>`;
}

function videoCard([file, title], i = 0) {
  return `<article class="creative">
    <video src="${vpath(file)}" muted loop playsinline preload="metadata" ${i < 3 ? "autoplay" : ""}></video>
    <div class="creative-body"><div class="tag">${title}</div><h3 style="margin-top:10px">Creative test ${String(i + 1).padStart(2, "0")}</h3><p style="color:var(--text-secondary);margin-top:8px">Use as page proof, ad creative, or offer-specific variant.</p></div>
  </article>`;
}

function signalBars() {
  return `<div class="signal-bars" aria-hidden="true">${Array.from({ length: 28 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>`;
}

function channelCard(title, body, stat, href) {
  return `<a class="channel-card" href="${withDirection(href)}">
    <span class="offer-code">${title}</span>
    <p>${body}</p>
    <strong class="mono">${stat}</strong>
  </a>`;
}

function home() {
  return `${nav()}
  <header class="hero full">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow">Amazon's audience. Every screen. Your growth.</div>
        <h1>Amazon's audience. Every screen. Your growth.</h1>
        <p class="lead">reMKTR turns Amazon's purchase data into customer acquisition — on Amazon, on your Shopify store, and on every major streaming service.</p>
        <div class="cta-row">${cta()}<a class="btn ghost" href="#programs">See the four programs ↓</a><a class="btn ghost" href="${withDirection("/directions/")}">View design directions</a></div>
        <div class="ticker">DSP eCPC <span class="number">$0.80</span> · SP CPC <span class="number">$3.40</span> · NETFLIX VIA DSP: LIVE · CTV 2026: <span class="number">$38B</span></div>
        ${signalBars()}
      </div>
    </div>
  </header>
  <section>
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">What reMKTR actually does</div><h2>One media system for the surfaces your buyer already uses.</h2></div><p class="section-copy">The homepage now explains the operating model before asking people to pick a program. Amazon data is the input. Creative, landing pages, audiences, pixels, and readouts are the system.</p></div>
      <div class="grid-3">
        ${channelCard("ON AMAZON", "Replace expensive PDP traffic with DSP equivalents where the math is obvious.", "$0.80 eCPC", programs.undercut.path)}
        ${channelCard("OWNED SITE", "Aim Amazon audiences at Shopify and measure the customer you actually own.", "UTM + GA4 + survey", programs.crossover.path)}
        ${channelCard("STREAMING", "Buy Netflix, Disney+, Hulu, Prime Video, and Roku through Amazon DSP access.", "Purchase graph TV", programs.primetime.path)}
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="eyebrow">Which one is you?</div>
      <div class="grid-2">
        ${terminalCard({ path: "~/ppc-pain", quote: programs.undercut.pain, stat: programs.undercut.stat, href: programs.undercut.path })}
        ${terminalCard({ path: "~/growth-ceiling", quote: programs.ignite.pain, stat: programs.ignite.stat, href: programs.ignite.path })}
        ${terminalCard({ path: "~/meta-dependence", quote: programs.crossover.pain, stat: programs.crossover.stat, href: programs.crossover.path })}
        ${terminalCard({ path: "~/tv-ready", quote: programs.primetime.pain, stat: programs.primetime.stat, href: programs.primetime.path })}
      </div>
    </div>
  </section>
  <section>
    <div class="wrap access-panel">
      <div>
        <div class="eyebrow">Amazon DSP access</div>
        <h2>Amazon's purchase graph across every major surface.</h2>
        <p class="section-copy" style="margin-top:18px">Amazon DSP connects commerce media, off-Amazon audiences, and premium streaming inventory into one managed buying layer.</p>
        <p class="section-copy" style="margin-top:14px">reMKTR turns that access into productized acquisition programs for founder-led consumer brands.</p>
        <div class="logo-strip">${streamingLogos.map(x => `<span class="logo-pill">${x}</span>`).join("")}</div>
        <div class="cta-row"><a class="btn ghost" href="${withDirection("/the-seat/")}">How DSP access works →</a></div>
      </div>
      <div class="video-frame"><video src="${vpath("b0gscj9j4g-morning-show.mp4")}" autoplay muted loop playsinline preload="metadata"></video></div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Creative engine</div><h2>Different ads. Different pages. Same measurement loop.</h2></div><p class="section-copy">Launch one offer with multiple hooks, multiple videos, and tracked landing-page variants. Read CTR and conversion rate by creative, source, and page direction.</p></div>
      <div class="creative-grid feature-videos">${videos.slice(0, 6).map(videoCard).join("")}</div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Testing loop</div><h2>Put in the offer. Generate the variants. Turn it on.</h2></div><p class="section-copy">Keep the workflow simple enough to run every week: offer, headline set, creative set, target audience, tracked URL, pixel event, readout.</p></div>
      <div class="timeline">
        ${["Offer", "Headlines", "Creative", "Audience", "Pixel", "Readout"].map((x,i)=>`<div class="timeline-item compact"><span class="number">0${i+1}</span><h3 style="margin-top:16px">${x}</h3><p style="color:var(--text-secondary);margin-top:8px">${["Pick the program and promise.", "Write 5-10 hooks.", "Attach video tests.", "Choose Meta, X, or DSP.", "Fire page and lead events.", "Compare CTR and CVR."][i]}</p></div>`).join("")}
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Proof</div><h2>Numbers before adjectives.</h2></div><p class="section-copy">Placeholders until live case data lands. The site is structured so these metrics update in one place later.</p></div>
      <div class="grid-3">${[["–62%", "Cost per detail-page view", "Marketplace Efficiency pilot"], ["2.4x", "New-to-brand growth", "Video Demand Engine"], ["$41 vs $89", "Linkout CAC vs Meta CAC", "Audience Linkouts"]].map(m => metricStat(m)).join("")}</div>
    </div>
  </section>
  <section id="programs"><div class="wrap"><div class="section-head"><div><div class="eyebrow">The Ladder</div><h2>Four programs. One system.</h2></div><p class="section-copy">Brands enter through savings, then redeploy those savings into demand creation, owned-channel acquisition, and streaming.</p></div>${ladder("all")}</div></section>
  <section><div class="wrap"><div class="doctrine"><pre>THE DOCTRINE
No retainers. No platform fees. No creative fees.
Agency-grade creative on every program. The performance is on us.</pre><div class="cta-row" style="justify-content:center">${cta()}</div></div></div></section>
  ${footer()}`;
}

function offerHero(p) {
  const heroVideo = p.active === "primetime" ? "b01bk871de-absurd-expert-explainer.mp4" : p.active === "ignite" ? "b0ft3wvczz-impossible-swagger.mp4" : p.active === "crossover" ? "b0gscj9j4g-street-interview.mp4" : "";
  return `<header class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow">${p.kicker}</div>
        <h1>${p.headline}</h1>
        <p class="lead">${p.subhead}</p>
        <div class="cta-row">${cta(p.cta, "primary", `/audit/?program=${p.active}`)}<a class="btn ghost" href="#math">See the math</a></div>
      </div>
      ${heroVideo ? `<div class="hero-media"><video src="${vpath(heroVideo)}" autoplay muted loop playsinline preload="metadata"></video><div class="hero-media-caption"><span class="tag">${p.code}</span><span class="mono">${p.promise}</span></div></div>` : `<div class="terminal-card"><div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">~/audit/${p.active}</span></div><div class="terminal-body"><div class="quote">"${p.pain}"</div><div class="stat-line"><span class="mono">${p.stat}</span><span class="arrow">→</span></div></div></div>`}
    </div>
  </header>`;
}

function comparisonFor(p) {
  if (p.active === "undercut") {
    return `<div class="comparison" id="math">
      <div class="comparison-row"><div class="comparison-cell">Metric</div><div class="comparison-cell old">Old way</div><div class="comparison-cell new">reMKTR way</div></div>
      <div class="comparison-row"><div class="comparison-cell">Auction</div><div class="comparison-cell old">Keyword CPC</div><div class="comparison-cell new">Audience CPM</div></div>
      <div class="comparison-row"><div class="comparison-cell">Effective click</div><div class="comparison-cell old">$1.50–$4.00</div><div class="comparison-cell new">$0.43–$2.00</div></div>
      <div class="comparison-row"><div class="comparison-cell">Rule</div><div class="comparison-cell old">Keep paying broad-term tax</div><div class="comparison-cell new">PPC keeps what only PPC can do</div></div>
    </div>
    <div class="calculator" data-calculator>
      <label class="calc-field"><span class="form-label">Monthly PPC spend</span><input data-spend type="number" value="50000"></label>
      <label class="calc-field"><span class="form-label">Current CPC</span><input data-cpc type="number" step=".01" value="3.40"></label>
      <div class="calc-field calc-result"><span class="form-label">Projected monthly savings</span><div class="metric-value" data-savings>$15,294</div><span class="delta">40% shiftable at $0.80 eCPC</span></div>
    </div>`;
  }
  if (p.active === "primetime") {
    return `<div class="comparison" id="math">
      <div class="comparison-row"><div class="comparison-cell">Targeting</div><div class="comparison-cell old">Adults 25–54 who like cooking</div><div class="comparison-cell new">Households that bought a competitor air fryer on Amazon in 90 days</div></div>
      <div class="comparison-row"><div class="comparison-cell">Buying layer</div><div class="comparison-cell old">Self-serve CTV</div><div class="comparison-cell new">Managed Amazon DSP access</div></div>
      <div class="comparison-row"><div class="comparison-cell">Proof</div><div class="comparison-cell old">Reach and frequency</div><div class="comparison-cell new">Sales lift, branded search, NTB</div></div>
    </div>`;
  }
  if (p.active === "crossover") {
    return `<div class="comparison" id="math">
      <div class="comparison-row"><div class="comparison-cell">Source</div><div class="comparison-cell old">Meta interest graph</div><div class="comparison-cell new">Amazon purchase graph</div></div>
      <div class="comparison-row"><div class="comparison-cell">Destination</div><div class="comparison-cell old">Platform-owned customer</div><div class="comparison-cell new">Your Shopify PDP</div></div>
      <div class="comparison-row"><div class="comparison-cell">Measurement</div><div class="comparison-cell old">Blended CAC guess</div><div class="comparison-cell new">UTM, GA4, post-purchase survey before spend</div></div>
    </div>`;
  }
  return `<div class="comparison" id="math">
    <div class="comparison-row"><div class="comparison-cell">Growth</div><div class="comparison-cell old">Search waits for demand</div><div class="comparison-cell new">Video creates branded search</div></div>
    <div class="comparison-row"><div class="comparison-cell">Creative</div><div class="comparison-cell old">$5–15K per spot, 3-week timeline</div><div class="comparison-cell new">Unlimited concepts, 48-hour turnaround, $0</div></div>
    <div class="comparison-row"><div class="comparison-cell">Proof</div><div class="comparison-cell old">Last-touch ROAS tunnel</div><div class="comparison-cell new">NTB, branded search lift, halo readout</div></div>
  </div>`;
}

function offerPage(key) {
  const p = programs[key];
  return `${nav()}${offerHero(p)}
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Mechanism</div><h2>${mechanismTitle(p)}</h2></div><p class="section-copy">${mechanismCopy(p)}</p></div>${p.active === "primetime" ? supplyMap() : ladder(p.active)}</div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Math</div><h2>Make the economics obvious.</h2></div><p class="section-copy">The page leads with the mechanism, then gives the buyer a number they can use in a real budget conversation.</p></div>${comparisonFor(p)}</div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Proof</div><h2>Early case panels.</h2></div><p class="section-copy">Use category descriptors until logo permission exists. No stock photos. No fake testimonials.</p></div><div class="grid-3">${p.metrics.map(m => metricStat(m, p.active === "undercut")).join("")}</div></div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Creative</div><h2>${p.active === "primetime" ? "TV-ready creative included free." : "Agency-grade creative included free."}</h2></div><p class="section-copy">Use the existing creative library where appropriate. Do not make the page depend on one ad style.</p></div><div class="creative-grid">${videos.slice(0, p.active === "primetime" ? 6 : 3).map(videoCard).join("")}</div></div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Included</div><h2>What the program ships with.</h2></div><p class="section-copy">The offer is productized so founders know what happens after the audit.</p></div><div class="grid-3">${p.included.map(x => `<div class="card" style="padding:20px"><h3>${x}</h3></div>`).join("")}</div></div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">FAQ</div><h2>Objections handled once.</h2></div></div><div class="faq">${p.faq.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></div></section>
  <section><div class="wrap"><div class="section-head"><div><div class="eyebrow">The Ladder</div><h2>${p.code} in the system.</h2></div><p class="section-copy">Every offer fits into the same four-step acquisition model: efficiency, demand creation, owned-channel growth, and streaming reach.</p></div>${ladder(p.active)}</div></section>
  ${auditCta(p.code)}${footer()}`;
}

function mechanismTitle(p) {
  return {
    undercut: "Two auctions. One page.",
    ignite: "AMC audiences feed video, retargeting, and sponsored-ads capture.",
    crossover: "Amazon audience signals flow into your Shopify PDP.",
    primetime: "Premium streaming supply flows through managed Amazon DSP access."
  }[p.active];
}
function mechanismCopy(p) {
  return {
    undercut: "PPC buys by keyword and click. DSP buys by audience and CPM. The same PDP can contain both auctions.",
    ignite: "Competitor purchasers, category browsers, and lapsed buyers see video first. Retargeting and sponsored ads capture demand after the search appears.",
    crossover: "Almost nobody runs this play. That is the point. Amazon audiences go to your site, where you own the margin and customer relationship.",
    primetime: "Demo-targeted TV buys broad people. Purchase-graph TV buys households with category behavior Amazon can actually see."
  }[p.active];
}

function supplyMap() {
  return `<div class="terminal-card"><div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">~/dsp/supply-map</span></div><div class="terminal-body"><div class="logo-strip">${streamingLogos.map(x => `<span class="logo-pill">${x}</span>`).join("")}</div><div class="metric-value" style="margin-top:14px">DSP ACCESS</div><p style="color:var(--text-secondary)">Amazon purchase data aims premium streaming inventory at households more likely to buy.</p></div></div>`;
}

function directionLinks(id) {
  const routes = [
    ["/", "Home"],
    ["/undercut/", "Marketplace Efficiency"],
    ["/ignite/", "Video Demand Engine"],
    ["/crossover/", "Audience Linkouts"],
    ["/primetime/", "Streaming TV"],
    ["/the-seat/", "DSP Access"],
    ["/results/", "Results"],
    ["/insights/", "Insights"],
    ["/audit/", "Audit"],
    ["/about/", "About"]
  ];
  return routes.map(([path, label]) => `<a class="chip" href="${path}?d=${id}">${label}</a>`).join("");
}

function directionsPage() {
  return `${nav()}<header class="hero full"><div class="wrap hero-grid"><div><div class="eyebrow">Refero direction lab</div><h1>Ten premium SaaS directions for every reMKTR page.</h1><p class="lead">Each card applies a full-page treatment across the homepage, offer pages, education pages, results, insights, audit, and about. Use this as a review room before choosing a final design system.</p></div></div></header>
  <section>
    <div class="wrap">
      <div class="direction-grid">
        ${directions.map(([id, name, url, note], i) => `<article class="direction-card direction-${id}">
          <div class="direction-preview">${signalBars()}<span class="number">${String(i + 1).padStart(2, "0")}</span></div>
          <div class="direction-body">
            <div class="eyebrow">${name}</div>
            <h3>${note}</h3>
            <p style="color:var(--text-secondary);margin-top:10px">Reference: <a href="${url}" target="_blank" rel="noreferrer">${url.replace("https://", "")}</a></p>
            <div class="logo-strip">${directionLinks(id)}</div>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>${footer()}`;
}

function simplePage(type) {
  if (type === "the-seat") return `${nav()}<header class="hero full"><div class="wrap hero-grid"><div><div class="eyebrow">Education Hub</div><h1>How Amazon DSP access turns purchase data into acquisition.</h1><p class="lead">Managed DSP access lets reMKTR buy Amazon placements, reach Amazon audiences off Amazon, and run premium streaming campaigns with performance measurement.</p></div></div></header><section><div class="wrap"><div class="timeline">${["Commerce media access", "Amazon audiences off Amazon", "Premium streaming inventory", "Purchase-graph measurement"].map((x,i)=>`<div class="timeline-item"><span class="number">0${i+1}</span><h3 style="margin-top:16px">${x}</h3><p style="color:var(--text-secondary);margin-top:8px">Turn the platform capability into a productized growth program.</p></div>`).join("")}</div></div></section><section><div class="wrap">${supplyMap()}</div></section>${auditCta()}${footer()}`;
  if (type === "results") return `${nav()}<header class="hero full"><div class="wrap hero-grid"><div><div class="eyebrow">Results</div><h1>Case studies without agency theater.</h1><p class="lead">Filter by program and category. Use anonymized descriptors until logo permission exists.</p></div></div></header><section><div class="wrap"><div class="logo-strip">${["All", ...Object.values(programs).map(p=>p.code), ...categories].map(x=>`<span class="chip">${x}</span>`).join("")}</div><div class="grid-3" style="margin-top:26px">${Object.values(programs).map(p=>`<a class="case-card" style="padding:22px" href="${withDirection(`/audit/?program=${p.active}`)}"><span class="offer-code">${p.code}</span><span class="metric-value" style="margin-top:18px">${p.metrics[0][0]}</span><p style="color:var(--text-secondary);margin-top:12px">Consumer brand, ${p.promise.toLowerCase()} Early result panel placeholder.</p></a>`).join("")}</div></div></section>${auditCta()}${footer()}`;
  if (type === "insights") return `${nav()}<header class="hero"><div class="wrap hero-grid"><div><div class="eyebrow">Insights</div><h1>Amazon DSP briefing for operators.</h1><p class="lead">5 minutes on what Amazon added to DSP, streaming, and audience targeting, and how founder-led brands should use it.</p></div><div class="video-frame"><video src="${vpath("b00r3zlxz6-founder-myth.mp4")}" autoplay muted loop playsinline preload="metadata"></video></div></div></header><section><div class="wrap"><div class="creative-grid">${videos.map(videoCard).join("")}</div></div></section>${auditCta()}${footer()}`;
  if (type === "about") return `${nav()}<header class="hero full"><div class="wrap hero-grid"><div><div class="eyebrow">About</div><h1>Media buying for operators, not agency awards.</h1><p class="lead">reMKTR is a Full Circle company. The team combines Amazon operators, DSP buying, creative production, and Orbit as the automation layer.</p></div></div></header><section><div class="wrap grid-3">${["Ken", "Nick", "Jayce"].map(x=>`<div class="terminal-card"><div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">~/team/${x.toLowerCase()}</span></div><div class="terminal-body"><h3>${x}</h3><p style="color:var(--text-secondary)">Operator role. Delivery details can be added when final bios are approved.</p></div></div>`).join("")}</div></section>${auditCta()}${footer()}`;
  if (type === "directions") return directionsPage();
  return auditPage();
}

function auditPage() {
  const options = Object.values(programs);
  return `${nav()}<header class="hero full"><div class="wrap hero-grid"><div><div class="eyebrow">Universal Audit</div><h1>Free audit. Real data. No deck.</h1><p class="lead">Pick a program, add a few test details, and generate the tracked link structure before a dollar moves.</p></div></div></header>
  <section><div class="wrap grid-2">
    <div class="form-card">
      <div class="form-grid">
        <label class="field"><span class="form-label">Program</span><select data-link-program>${options.map(p=>`<option value="${p.active}">${p.code}</option>`).join("")}</select></label>
        <label class="field"><span class="form-label">Source</span><select data-link-source><option value="meta">Meta</option><option value="x">X</option><option value="linkedin">LinkedIn</option></select></label>
        <label class="field"><span class="form-label">Creative ID</span><input data-link-creative value="creative_001"></label>
        <label class="field"><span class="form-label">Variant</span><input data-link-variant value="a"></label>
      </div>
      <div class="generated-link" data-generated-link></div>
      <div class="cta-row"><button class="btn primary" data-generate-link>Generate tracked URL</button><a class="btn ghost" href="${bookingUrl}">Open calendar</a></div>
    </div>
    <div class="form-card">
      <h3>Audit intake</h3>
      <div class="form-grid" style="margin-top:18px">
        <label class="field"><span class="form-label">Name</span><input></label>
        <label class="field"><span class="form-label">Email</span><input></label>
        <label class="field"><span class="form-label">Brand URL</span><input></label>
        <label class="field"><span class="form-label">Monthly ad spend</span><select><option>$10K–$25K</option><option>$25K–$100K</option><option>$100K+</option></select></label>
      </div>
      <p style="color:var(--text-secondary);margin-top:16px">30 minutes · your account data · you keep the audit either way</p>
    </div>
  </div></section>${creativeMarquee(profile, "Creative inputs for the audit")}${footer()}`;
}

function lpPage(key) {
  const p = programs[key];
  return `${offerHero(p)}<section><div class="wrap"><div class="grid-3">${p.metrics.map(m=>metricStat(m)).join("")}</div></div></section><section><div class="wrap">${comparisonFor(p)}</div></section>${auditCta(p.code)}`;
}

function activeProfile() {
  return directionProfiles[activeDirection()] || directionProfiles.metaview;
}

function pList() {
  return Object.values(programs);
}

function programNameShort(p) {
  return {
    undercut: "Efficiency",
    ignite: "Video",
    crossover: "Linkouts",
    primetime: "Streaming"
  }[p.active] || p.code;
}

function directionHref(path, id = activeDirection()) {
  if (id === "base") return path;
  return `${path}${path.includes("?") ? "&" : "?"}d=${encodeURIComponent(id)}`;
}

function statDeck() {
  return [
    ["$0.80", "target eCPC", "Marketplace Efficiency"],
    ["2.4x", "NTB growth", "Video Demand Engine"],
    ["$41", "Linkout CAC", "Audience Linkouts"],
    ["CTV", "purchase graph", "Streaming TV"]
  ];
}

function posterVideo([file, title], i = 0) {
  return `<article class="poster-video">
    <video src="${vpath(file)}" muted loop playsinline preload="metadata" ${i < 4 ? "autoplay" : ""}></video>
    <span class="tag">${title}</span>
  </article>`;
}

function miniVideoStrip(offset = 0, count = 6) {
  const rotated = [...videos.slice(offset), ...videos.slice(0, offset)];
  return `<div class="mini-video-strip">${rotated.slice(0, count).map(([file, title], i) => `<div class="mini-video">
    <video src="${vpath(file)}" muted loop playsinline preload="metadata" ${i < 3 ? "autoplay" : ""}></video>
    <span>${title}</span>
  </div>`).join("")}</div>`;
}

function profileBadge(profile) {
  return `<div class="profile-badge"><span>${profile.name}</span><strong>${profile.thesis}</strong></div>`;
}

function heroVisual(profile, p = null) {
  const leadVideo = p?.active === "primetime" ? videos[4] : p?.active === "ignite" ? videos[0] : p?.active === "crossover" ? videos[2] : videos[1];
  if (["cinematic", "poster", "studio"].includes(profile.hero)) {
    return `<div class="hero-cinema-stack">
      ${videos.slice(0, 5).map((v, i) => posterVideo(v, i)).join("")}
    </div>`;
  }
  if (["terminal", "console", "datastream"].includes(profile.hero)) {
    return `<div class="command-center">
      <div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">~/remktr/audit/run</span></div>
      <div class="command-lines">
        <p><span>$</span> select program ${p ? p.active : "--all"}</p>
        <p><span>$</span> attach creative_set ${videos.length} videos</p>
        <p><span>$</span> generate tracked_urls --pixel meta,x,dsp</p>
        <p><span>$</span> monitor ctr cvr cac ntb</p>
      </div>
      ${miniVideoStrip(p ? p.num : 0, 4)}
      ${signalBars()}
    </div>`;
  }
  if (profile.hero === "split") {
    return `<div class="hero-tall-media">${posterVideo(leadVideo, 0)}<div class="split-stat"><span class="metric-value">$0.80</span><p>target effective CPC</p></div></div>`;
  }
  if (profile.hero === "signal") {
    return `<div class="signal-hero-panel">${signalBars()}${miniVideoStrip(2, 5)}<div class="grid-3">${statDeck().slice(0,3).map(metricStat).join("")}</div></div>`;
  }
  return `<div class="proof-wall-mini">${statDeck().map(metricStat).join("")}${miniVideoStrip(1, 4)}</div>`;
}

function heroRedesign({ profile, p = null, page = "home" }) {
  const isHome = page === "home";
  const headline = p ? p.headline : "Amazon's audience. Every screen. Your growth.";
  const subhead = p ? p.subhead : "reMKTR turns Amazon's purchase data into customer acquisition across Amazon, your Shopify store, and every major streaming service.";
  const ctaLabel = p ? p.cta : "Get your free audit";
  return `<header class="hero hero-redesign hero-${profile.hero}">
    <div class="wrap hero-redesign-grid">
      <div class="hero-copy">
        <div class="eyebrow">${p ? p.kicker : "reMKTR acquisition system"}</div>
        <h1>${headline}</h1>
        <p class="lead">${subhead}</p>
        <div class="cta-row">${cta(ctaLabel, "primary", p ? `/audit/?program=${p.active}` : "/audit/")}<a class="btn ghost" href="${withDirection(isHome ? "/directions/" : "/#programs")}">${isHome ? "Compare directions" : "See the system"}</a></div>
        <div class="ticker">creative included · pixel-ready links · Amazon DSP access · weekly readout</div>
        ${profileBadge(profile)}
      </div>
      ${heroVisual(profile, p)}
    </div>
  </header>`;
}

function programRouterCards(profile) {
  const variant = profile.layout.includes("terminal") || profile.layout.includes("grid") ? "router-terminal" : profile.layout.includes("poster") ? "router-editorial" : "";
  return `<section id="programs" class="program-router ${variant}">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Programs</div><h2>Four ways into the same acquisition system.</h2></div><p class="section-copy">Choose the constraint: expensive marketplace traffic, flat demand, Meta dependence, or streaming readiness.</p></div>
      <div class="program-board">${pList().map((p, i) => `<a class="program-tile" href="${withDirection(p.path)}">
        <div class="program-video"><video src="${vpath(videos[(i * 2) % videos.length][0])}" muted loop playsinline preload="metadata" autoplay></video></div>
        <span class="number">0${i + 1}</span>
        <h3>${p.code}</h3>
        <p>${p.promise}</p>
        <strong>${p.stat}</strong>
      </a>`).join("")}</div>
    </div>
  </section>`;
}

function proofMosaic(profile, p = null) {
  const items = p ? p.metrics : statDeck();
  return `<section class="proof-section proof-${profile.proof}">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Proof</div><h2>${p ? "Make the result legible before the call." : "Proof should feel operational, not ornamental."}</h2></div><p class="section-copy">Use numbers, category descriptors, and clear readouts. No stock imagery and no vague agency claims.</p></div>
      <div class="proof-mosaic">${items.map((m, i) => `<article class="proof-card span-${(i % 3) + 1}">
        <div class="proof-video"><video src="${vpath(videos[(i + 4) % videos.length][0])}" muted loop playsinline preload="metadata" ${i < 2 ? "autoplay" : ""}></video></div>
        ${metricStat(m, p?.active === "undercut")}
        <p>${["Cost pressure", "Demand creation", "Owned acquisition", "Streaming reach"][i] || "Program readout"}</p>
      </article>`).join("")}</div>
    </div>
  </section>`;
}

function creativeEngine(profile, p = null) {
  const count = profile.video === "poster" || profile.video === "rail" || profile.video === "floating" ? 8 : 6;
  return `<section class="creative-section video-${profile.video}">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Creative engine</div><h2>${p?.active === "primetime" ? "TV-ready creative becomes the media plan." : "Creative is not a line item. It is the testing surface."}</h2></div><p class="section-copy">Use the existing video library as actual page media, paid creative, and offer-specific proof. Variants are tracked by source, hook, and landing page.</p></div>
      <div class="video-wall">${videos.slice(0, count).map(posterVideo).join("")}</div>
    </div>
  </section>`;
}

function dspAccessSection(profile) {
  return `<section class="access-redesign">
    <div class="wrap access-redesign-grid">
      <div>
        <div class="eyebrow">DSP Access</div>
        <h2>Amazon's purchase graph across commerce, owned sites, and streaming.</h2>
        <p class="section-copy" style="margin-top:18px">reMKTR manages Amazon DSP access as a productized acquisition layer: marketplace efficiency, video demand, Amazon audience linkouts, and premium streaming.</p>
        <div class="logo-strip">${streamingLogos.map(x => `<span class="logo-pill">${x}</span>`).join("")}</div>
      </div>
      ${heroVisual(profile)}
    </div>
  </section>`;
}

function creativeMarquee(profile, label = "Creative library") {
  return `<section class="creative-marquee-section">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">${label}</div><h2>The offer travels with a full creative bench.</h2></div><p class="section-copy">Use these as page media, paid creative, proof assets, and variant-specific hooks across every program.</p></div>
      ${miniVideoStrip(0, videos.length)}
    </div>
  </section>`;
}

function commandFlow(profile) {
  return `<section class="flow-section">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Launch loop</div><h2>Put in the offer. Generate variants. Turn it on.</h2></div><p class="section-copy">The workflow stays simple enough to run weekly while preserving pixel discipline and source-level readouts.</p></div>
      <div class="flow-board">${["Offer", "Hooks", "Creative", "Audience", "Pixel", "Readout"].map((x, i) => `<div class="flow-step">
        <span class="number">0${i + 1}</span>
        <h3>${x}</h3>
        <p>${["Choose the program promise.", "Write headline variants.", "Attach video tests.", "Target Meta, X, or DSP.", "Fire page and lead events.", "Compare CTR, CVR, CAC, NTB."][i]}</p>
      </div>`).join("")}</div>
    </div>
  </section>`;
}

function mathSection(profile, p = null) {
  return `<section class="math-section">
    <div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Math</div><h2>Make the economics obvious.</h2></div><p class="section-copy">The page gives buyers a number they can use in a real budget conversation.</p></div>
      ${p ? comparisonFor(p) : `<div class="grid-3">${statDeck().slice(0,3).map(metricStat).join("")}</div>`}
    </div>
  </section>`;
}

function includedSection(p) {
  return `<section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Included</div><h2>What ships with ${programNameShort(p)}.</h2></div><p class="section-copy">Productized delivery keeps the offer clear after the audit.</p></div><div class="included-grid">${p.included.map(x => `<div class="card included-card"><h3>${x}</h3></div>`).join("")}</div></div></section>`;
}

function mechanismSection(profile, p) {
  return `<section class="mechanism-section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Mechanism</div><h2>${mechanismTitle(p)}</h2></div><p class="section-copy">${mechanismCopy(p)}</p></div>${p.active === "primetime" ? supplyMap() : programRouterCards(profile)}</div></section>`;
}

function faqSection(p) {
  return `<section><div class="wrap"><div class="section-head"><div><div class="eyebrow">FAQ</div><h2>Objections handled once.</h2></div></div><div class="faq">${p.faq.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></div></section>`;
}

function renderHomeSection(name, profile) {
  return {
    programs: programRouterCards(profile),
    proof: proofMosaic(profile),
    creative: creativeEngine(profile),
    access: dspAccessSection(profile),
    flow: commandFlow(profile),
    math: mathSection(profile)
  }[name] || "";
}

function homeRedesign() {
  const profile = activeProfile();
  return `${nav()}${heroRedesign({ profile, page: "home" })}
    ${profile.homeOrder.map(name => renderHomeSection(name, profile)).join("")}
    ${creativeMarquee(profile, "Full creative bench")}
    <section><div class="wrap"><div class="doctrine"><pre>THE DOCTRINE
No retainers. No platform fees. No creative fees.
Agency-grade creative on every program. The performance is on us.</pre><div class="cta-row" style="justify-content:center">${cta()}</div></div></div></section>
    ${footer()}`;
}

function renderOfferSection(name, profile, p) {
  return {
    mechanism: mechanismSection(profile, p),
    math: mathSection(profile, p),
    proof: proofMosaic(profile, p),
    creative: creativeEngine(profile, p),
    included: includedSection(p),
    faq: faqSection(p)
  }[name] || "";
}

function offerPageRedesign(key) {
  const profile = activeProfile();
  const p = programs[key] || programs.undercut;
  return `${nav()}${heroRedesign({ profile, p, page: "offer" })}
    ${profile.offerOrder.map(name => renderOfferSection(name, profile, p)).join("")}
    ${creativeMarquee(profile, `${p.code} creative variants`)}
    ${auditCta(p.code)}${footer()}`;
}

function directionsPageRedesign() {
  return `${nav()}<header class="hero hero-redesign hero-review">
    <div class="wrap">
      <div class="eyebrow">Direction lab</div>
      <h1>Ten distinct website systems for reMKTR.</h1>
      <p class="lead">Each direction now changes composition, media treatment, section order, proof model, and CTA pattern across the site.</p>
    </div>
  </header>
  <section><div class="wrap"><div class="review-board">
    ${Object.entries(directionProfiles).map(([id, profile], i) => `<article class="review-card ${profile.layout}">
      <div class="review-preview">
        ${heroVisual(profile)}
      </div>
      <div class="review-body">
        <span class="number">${String(i + 1).padStart(2, "0")}</span>
        <h3>${profile.name}</h3>
        <p>${profile.thesis}</p>
        <a href="${directionHref("/", id)}" class="btn primary">Open homepage</a>
        <div class="logo-strip">${directionLinks(id)}</div>
      </div>
    </article>`).join("")}
  </div></div></section>${footer()}`;
}

function auditPageRedesign() {
  const profile = activeProfile();
  const options = Object.values(programs);
  return `${nav()}${heroRedesign({ profile, page: "audit" })}
  <section><div class="wrap audit-console">
    <div class="form-card">
      <h2>Generate a tracked launch URL.</h2>
      <div class="form-grid" style="margin-top:20px">
        <label class="field"><span class="form-label">Program</span><select data-link-program>${options.map(p=>`<option value="${p.active}">${p.code}</option>`).join("")}</select></label>
        <label class="field"><span class="form-label">Source</span><select data-link-source><option value="meta">Meta</option><option value="x">X</option><option value="linkedin">LinkedIn</option><option value="dsp">DSP</option></select></label>
        <label class="field"><span class="form-label">Creative ID</span><input data-link-creative value="creative_001"></label>
        <label class="field"><span class="form-label">Variant</span><input data-link-variant value="a"></label>
      </div>
      <div class="generated-link" data-generated-link></div>
      <div class="cta-row"><button class="btn primary" data-generate-link>Generate tracked URL</button><a class="btn ghost" href="${bookingUrl}">Open calendar</a></div>
    </div>
    <div class="command-center">
      <div class="terminal-top"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="terminal-label">~/audit/intake</span></div>
      <div class="command-lines"><p><span>$</span> 30 minutes</p><p><span>$</span> your account data</p><p><span>$</span> you keep the audit</p><p><span>$</span> no deck required</p></div>
    </div>
  </div></section>${creativeMarquee(profile, "Creative inputs for the audit")}${footer()}`;
}

function simplePageRedesign(type) {
  const profile = activeProfile();
  if (type === "directions") return directionsPageRedesign();
  if (type === "the-seat") return `${nav()}${heroRedesign({ profile, page: "access" })}${dspAccessSection(profile)}${creativeMarquee(profile, "DSP creative supply")}${commandFlow(profile)}${auditCta()}${footer()}`;
  if (type === "results") return `${nav()}${heroRedesign({ profile, page: "results" })}${proofMosaic(profile)}${creativeMarquee(profile, "Creative-backed proof")}${programRouterCards(profile)}${auditCta()}${footer()}`;
  if (type === "insights") return `${nav()}${heroRedesign({ profile, page: "insights" })}${creativeEngine(profile)}${creativeMarquee(profile, "Video library")}${commandFlow(profile)}${auditCta()}${footer()}`;
  if (type === "about") return `${nav()}${heroRedesign({ profile, page: "about" })}<section><div class="wrap"><div class="section-head"><div><div class="eyebrow">Team</div><h2>Operators, buyers, creative, and automation.</h2></div><p class="section-copy">reMKTR is a Full Circle company built around Amazon operators, DSP buying, creative production, and Orbit as the automation layer.</p></div><div class="program-board">${["Ken", "Nick", "Jayce", "Orbit"].map((x, i) => `<div class="program-tile"><div class="program-video"><video src="${vpath(videos[i][0])}" muted loop playsinline preload="metadata" autoplay></video></div><span class="number">TEAM</span><h3>${x}</h3><p>Role details can be added when final bios are approved.</p></div>`).join("")}</div></div></section>${creativeMarquee(profile, "Creative operating system")}${auditCta()}${footer()}`;
  return auditPageRedesign();
}

function render() {
  const name = pageName();
  const program = pageProgram();
  document.body.classList.toggle("lp", isLp());
  document.body.dataset.direction = activeDirection();
  document.body.dataset.layout = activeProfile().layout.split(" ")[0].replace("layout-", "");
  let html = "";
  if (name === "home") html = homeRedesign();
  else if (name === "offer") html = offerPageRedesign(program);
  else if (name === "lp") html = lpPage(program);
  else html = simplePageRedesign(name);
  app().innerHTML = `<div class="shell direction-shell ${activeProfile().layout}">${html}</div>`;
  hydrate();
}

function hydrate() {
  const calc = document.querySelector("[data-calculator]");
  if (calc) {
    const spend = calc.querySelector("[data-spend]");
    const cpc = calc.querySelector("[data-cpc]");
    const out = calc.querySelector("[data-savings]");
    const update = () => {
      const s = Number(spend.value || 0);
      const current = Number(cpc.value || 0);
      const savings = s * .4 * Math.max(0, 1 - (.8 / Math.max(current, .01)));
      out.textContent = savings.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
    };
    spend.addEventListener("input", update);
    cpc.addEventListener("input", update);
    update();
  }
  const gen = document.querySelector("[data-generate-link]");
  if (gen) {
    const updateLink = () => {
      const p = document.querySelector("[data-link-program]").value;
      const source = document.querySelector("[data-link-source]").value;
      const creative = document.querySelector("[data-link-creative]").value || "creative_001";
      const variant = document.querySelector("[data-link-variant]").value || "a";
      const url = `${location.origin}/${p}/?v=${encodeURIComponent(variant)}&utm_source=${encodeURIComponent(source)}&utm_medium=paid&utm_campaign=${encodeURIComponent(p)}_test&utm_content=${encodeURIComponent(creative)}&creative_id=${encodeURIComponent(creative)}&page_variant=${encodeURIComponent(variant)}`;
      document.querySelector("[data-generated-link]").textContent = url;
    };
    gen.addEventListener("click", updateLink);
    updateLink();
  }
  const onScroll = () => document.body.classList.toggle("scrolled", scrollY > 24);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", render);
