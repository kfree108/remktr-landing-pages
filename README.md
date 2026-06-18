# reMKTR Landing Page Lab

## Pages

- `offers/video-demand-engine.html`
- `offers/off-amazon-attribution.html`
- `offers/streaming-tv-breakthrough.html`

Each page supports hero variants:

- `?v=a` outcome-led
- `?v=b` pain-led
- `?v=c` mechanism-led

Use `?debug=1` to show the active variant badge.

### Streaming TV Breakthrough (redesigned 2026-06-12)

`offers/streaming-tv-breakthrough.html` is now a self-contained page (its own
CSS/JS inside the file) so it no longer depends on `assets/app.js` or
`assets/styles.css`. The previous version is preserved at
`offers/streaming-tv-breakthrough-legacy.html`.

- Headline variants `?v=a/b/c/d` are defined in the `VARIANTS` object at the
  bottom of the HTML file — edit headline lines, subhead, and CTA label there.
- Creative ID for ad-to-page mapping: add `?cid=your-creative-id` (captured to
  localStorage and attached to every tracked event), e.g.
  `...streaming-tv-breakthrough.html?v=b&cid=street-interview-01&utm_source=meta`
- CTA clicks open the Calendly popup with stored UTM params passed through, so
  bookings carry attribution into Calendly.

## Tracking

Edit `assets/tracking.js` before launch:

- `hotjarId`
- `metaPixelId`
- `xPixelId`
- `bookingUrl`

The tracking layer captures UTMs into `localStorage` and emits:

- `landing_page_view`
- `cta_click`

Payload includes offer, variant, landing path, and UTM fields.

## Refero Direction Used

- Video Demand Engine: Arcade/customer.io style mix for crisp product-marketing conversion.
- Off-Amazon Attribution Engine: customer.io/Default style mix for measured enterprise attribution.
- Streaming TV Breakthrough: Frame.io style foundation for premium cinematic dark-mode advertising.

The pages intentionally share structure and event names so paid-media results are comparable.
