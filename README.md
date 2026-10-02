# Christ Beloved Evangelical Ministry website

Static, dependency-free site (HTML/CSS/JS). Content and page structure come from the ministry's existing site draft.

## Pages
`index.html` · `about.html` · `operation-cms.html` · `watch.html` · `events.html` · `prayer.html` · `testimonies.html` · `contact.html`

## Run locally
    python3 -m http.server 8000   # http://localhost:8000

## Things to know
- **Forms (prayer, testimony, contact) do not send anywhere yet.** They only show a thank-you message. Connect them to Formspree, Netlify Forms or your own endpoint in `js/main.js` before launch, otherwise requests are lost.
- The Operation C.M.S date (28–30 Oct 2026) drives the countdown in `js/main.js`; update `START`/`END` and the text on `index.html`, `operation-cms.html`, `events.html` each quarter.
- The Watch TV page embeds the YouTube channel's uploads playlist (works when served over http/https, not from a `file://` path).
- Photos and logo are in `img/`.
