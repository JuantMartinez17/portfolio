# Portfolio — Juan Tomás Martínez

Personal portfolio. Plain HTML + CSS + JavaScript (no framework, no build step).

## Structure

```
portfolio/
├── index.html              # Entry point
├── styles.css              # Single stylesheet
├── scripts/
│   └── main.js            # i18n, theme, form, motion
├── assets/
│   └── favicon.svg        # Logo / favicon
└── backend/               # (your existing contact form backend)
```

## Run locally

Any static server works. Two easy options:

```bash
# Python
python3 -m http.server 5173

# Node (if you have npx)
npx serve .
```

Then open `http://localhost:5173`.

## What changed vs. the previous version

- **Visual:** complete redesign — Linear/Vercel-style minimal aesthetic, dark theme by default with light toggle.
- **Bilingual:** ES/EN toggle in the header, persisted in `localStorage`. All copy is keyed via `data-i18n`.
- **Typography:** Geist + Geist Mono (Vercel's typeface).
- **Sections added:** Stack (grouped by category).
- **Projects:** redesigned as a list with year, type, stack chips, and external links.
- **Form:** client-side validation with inline errors, loading state, honeypot anti-bot field, success/error feedback.
- **Accessibility:** semantic landmarks, skip link, focus-visible states, ARIA on toggles, `prefers-reduced-motion` respected, keyboard navigation.
- **SEO:** full Open Graph + Twitter meta tags, JSON-LD `Person` schema, alt locale tags.
- **Performance:** Bootstrap removed (was unused), fonts preconnected with `display=swap`, JS as `type="module"`, scroll handlers throttled with rAF.
- **Motion:** subtle staggered fade-in on hero, scroll-reveal via `IntersectionObserver` (one-shot, not jittery).
- **No layout shifts:** theme is set before paint to avoid flash.

## Backend hookup

The contact form POSTs to `/api/contact` with JSON. Keep your existing `backend/` endpoint or adapt the URL inside `scripts/main.js` (search for `/api/contact`).

If you'd rather not run a backend, you can swap the form to use:
- **Formspree** — change form to `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and remove the JS submit handler, OR
- **Resend / EmailJS** — keep the JS handler, swap the fetch URL.

## Deploy

This is fully static. Drop it on:
- **Vercel** (`vercel deploy`)
- **Netlify** (drag the folder onto netlify.com/drop)
- **GitHub Pages** (push to `gh-pages` branch or use Actions)
- **Cloudflare Pages**

All free, all fast.

## Things you should customize before going live

1. **`<meta property="og:url">`** in `index.html` — set to your real domain.
2. **`og-image.png`** in `/assets` — create a 1200×630 social preview image (Figma template: just your name + role on a dark background).
3. **Email address** in the contact section and footer.
4. **Add a real photo** if you want one (currently no photo section — minimal Linear-style portfolios often skip it intentionally).
5. **CV/Resume download** — if you want one, add a `<a href="/cv.pdf" download>` link in the hero CTA.
6. **Domain** — buy `juantomasmartinez.com` or similar; it's worth it for a serious job search.
