// ============================================================
// reMKTR tracking config — paste your IDs here (one place only)
// ============================================================
window.REMKTR_TRACKING = {
  // Meta (Facebook/Instagram): Events Manager > Data Sources > your pixel ID (15-16 digits)
  metaPixelId: "REPLACE_WITH_META_PIXEL_ID",

  // Google: a Google tag ID. Use your Google Ads tag ("AW-XXXXXXXXX")
  // or GA4 tag ("G-XXXXXXXXXX"). Either works; AW- recommended for ads.
  googleTagId: "REPLACE_WITH_GOOGLE_TAG_ID",

  // Google Ads booking conversion: Goals > Conversions > your action's
  // "send_to" value, looks like "AW-XXXXXXXXX/AbC-dEfGhIjK"
  googleAdsBookingLabel: "REPLACE_WITH_GOOGLE_ADS_CONVERSION_LABEL",

  // X (Twitter): Events Manager pixel ID (looks like "of2ab")
  xPixelId: "REPLACE_WITH_X_PIXEL_ID",

  // X booking conversion event ID (looks like "tw-of2ab-od3cd")
  xBookingEventId: "REPLACE_WITH_X_BOOKING_EVENT_ID",

  // Hotjar (optional session recordings)
  hotjarId: "REPLACE_WITH_HOTJAR_ID",

  bookingUrl: "https://calendly.com/jayce-remktr/30min"
};

function remktrConfigured(id) {
  return id && !String(id).startsWith("REPLACE");
}

// ---------- Attribution capture (utm_* + variant, survives navigation) ----------
(function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "v", "cid"];
  const stored = JSON.parse(localStorage.getItem("remktr_attribution") || "{}");
  keys.forEach((key) => {
    if (params.has(key)) stored[key] = params.get(key);
  });
  stored.landing_path = window.location.pathname;
  stored.last_seen_at = new Date().toISOString();
  localStorage.setItem("remktr_attribution", JSON.stringify(stored));
})();

// ---------- Meta pixel ----------
(function installMetaPixel() {
  const id = window.REMKTR_TRACKING.metaPixelId;
  if (!remktrConfigured(id)) return;
  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];
    t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
})();

// ---------- Google tag (Google Ads / GA4) ----------
(function installGoogleTag() {
  const id = window.REMKTR_TRACKING.googleTagId;
  if (!remktrConfigured(id)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", id);
})();

// ---------- X (Twitter) pixel ----------
(function installXPixel() {
  const id = window.REMKTR_TRACKING.xPixelId;
  if (!remktrConfigured(id)) return;
  !(function(e,t,n,s,u,a){
    e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
    s.version="1.1",s.queue=[],u=t.createElement(n),u.async=!0,u.src="https://static.ads-twitter.com/uwt.js",
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a));
  })(window,document,"script");
  twq("config", id);
})();

// ---------- Hotjar (optional) ----------
(function installHotjar() {
  const id = window.REMKTR_TRACKING.hotjarId;
  if (!remktrConfigured(id)) return;
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments); };
  window._hjSettings = { hjid: Number(id), hjsv: 6 };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=6`;
  document.head.appendChild(script);
})();

// ---------- Unified event fan-out ----------
window.remktrTrack = function remktrTrack(eventName, payload = {}) {
  const attribution = JSON.parse(localStorage.getItem("remktr_attribution") || "{}");
  const eventPayload = {
    offer: document.body.dataset.offer,
    variant: attribution.v || "a",
    ...attribution,
    ...payload
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventPayload });
  if (window.gtag) window.gtag("event", eventName, eventPayload);
  if (window.hj) window.hj("event", eventName);
  if (window.fbq) window.fbq("trackCustom", eventName, eventPayload);
};

// ---------- CTA clicks ----------
document.addEventListener("click", (event) => {
  const cta = event.target.closest("[data-cta]");
  if (!cta) return;
  window.remktrTrack("cta_click", {
    cta: cta.dataset.cta,
    href: cta.getAttribute("href")
  });
  // Meta standard event so you can optimize on it before bookings accumulate.
  // Skipped for CTAs marked data-cta-secondary (e.g. "see how it works" anchors)
  // so the optimization signal stays booking-intent only.
  if (window.fbq && !cta.hasAttribute("data-cta-secondary")) {
    window.fbq("track", "InitiateCheckout");
  }
});

// ---------- THE conversion: Calendly booking completed (fires in the
// on-page popup on your https production domain) ----------
window.addEventListener("message", (event) => {
  if (typeof event.origin !== "string" || event.origin.indexOf("calendly.com") === -1) return;
  const type = event.data && event.data.event;
  if (type === "calendly.event_scheduled") {
    const t = window.REMKTR_TRACKING;
    window.remktrTrack("booking_scheduled", { source: "calendly_embed" });
    if (window.fbq) window.fbq("track", "Schedule");
    if (window.gtag && remktrConfigured(t.googleAdsBookingLabel)) {
      window.gtag("event", "conversion", { send_to: t.googleAdsBookingLabel });
    }
    if (window.twq && remktrConfigured(t.xBookingEventId)) {
      window.twq("event", t.xBookingEventId, {});
    }
  }
});

// ---------- Engagement signals (for warm retargeting audiences) ----------
(function engagementSignals() {
  let fired50 = false;
  window.addEventListener("scroll", () => {
    if (fired50) return;
    const depth = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    if (depth >= 0.5) {
      fired50 = true;
      window.remktrTrack("scroll_50");
    }
  }, { passive: true });
  setTimeout(() => window.remktrTrack("engaged_30s"), 30000);
})();

// ---------- Page view ----------
window.addEventListener("load", () => {
  window.remktrTrack("landing_page_view");
});
