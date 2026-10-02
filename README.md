# Grace Community Church website

A static, dependency-free church website (HTML/CSS/JS). Placeholder content throughout — replace "Grace Community Church", address, times, and email with your own.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Structure
- `index.html`, `about.html`, `ministries.html`, `events.html`, `sermons.html`, `give.html`, `contact.html`
- `css/style.css` — theme colors are variables at the top (light/dark aware)
- `js/main.js` — mobile menu, active link, contact form (currently opens a mailto)

## Deploy
Any static host works: GitHub Pages, Netlify, Cloudflare Pages, Vercel.

## To do before launch
- Real logo, photos, staff, beliefs, and history
- Sermon video embeds and a giving-provider link
- Hook the contact form to Formspree/Netlify Forms
