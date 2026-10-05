# Portfolio — Juan Tomás Martínez

Personal portfolio. Plain HTML + CSS + JavaScript (no framework, no build step).

## Structure

```
portfolio/
├── index.html              # Entry point (Hero, About, Experience, Work, Stack, Contact)
├── styles.css              # Single stylesheet
├── scripts/
│   └── main.js            # i18n, theme, form, motion
└── assets/
    ├── favicon.svg        # Logo / favicon
    ├── og-image.png       # 1200×630 social preview
    ├── profile.jpg        # Hero photo (720×900, 4:5)
    └── cv/                # Downloadable CV (ES + EN PDFs)
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
- **Sections added:** Experience (Aeroterra role timeline) and Stack (grouped by category).
- **Personality layer:** emerald accent derived from the CV, a hero photo, and a language-aware "Download CV" button.
- **Projects:** redesigned as a list with year, type, stack chips, and external links.
- **Form:** client-side validation with inline errors, loading state, honeypot anti-bot field, success/error feedback.
- **Accessibility:** semantic landmarks, skip link, focus-visible states, ARIA on toggles, `prefers-reduced-motion` respected, keyboard navigation.
- **SEO:** full Open Graph + Twitter meta tags, JSON-LD `Person` schema, alt locale tags.
- **Performance:** Bootstrap removed (was unused), fonts preconnected with `display=swap`, JS as `type="module"`, scroll handlers throttled with rAF.
- **Motion:** subtle staggered fade-in on hero, scroll-reveal via `IntersectionObserver` (one-shot, not jittery).
- **No flash:** a small inline script in `<head>` applies the stored theme and language before the first paint (`scripts/main.js` is a module, so it runs too late to do that itself).

## Contact form (no backend needed)

GitHub Pages is static-only, so the form posts to **[Formspree](https://formspree.io)** instead of a server. It's already wired up: the endpoint lives in the `action` of `<form id="contact-form">` in `index.html`. To point it at a different form, swap the form ID there — nothing else needs to change.

`scripts/main.js` keeps all the validation, loading state, honeypot and feedback, and just POSTs JSON to that endpoint. If the `action` is ever left as a `YOUR_FORM_ID` placeholder, the form shows a friendly error instead of failing silently.

> Prefer **Web3Forms**? Set the form `action` to `https://api.web3forms.com/submit` and add a hidden `<input name="access_key" value="...">`.

## Deploy (GitHub Pages)

Live at **`https://juantmartinez17.github.io/portfolio/`**, served from the `master` branch — pushing to `master` is the deploy.

Two things to keep in mind on this setup:

- It's a **project subpath**, so **all asset paths are relative**. Don't switch them back to leading-slash absolute paths or they'll 404.
- GitHub Pages is **case-sensitive**, unlike Windows. A file committed as `profile.JPG` will 404 when the HTML asks for `profile.jpg`, and it will look fine locally — this already happened once. Keep asset filenames lowercase and reference them exactly.

After a push, confirm the page, OG image, CV PDFs and hero photo all load on the live URL, not just locally.

Also static-friendly: Vercel, Netlify, Cloudflare Pages.

## Still open (optional)

1. **Custom domain** — if you buy one (e.g. `juantomasmartinez.com`), add a `CNAME` file and switch the absolute URLs in the `og:`/`twitter:` meta and JSON-LD to that domain.

The OG image lives at `assets/og-image.png` (1200×630); recreate it if you change your name or role. The hero photo is `assets/profile.jpg` (720×900, rendered at 4:5); if it ever goes missing, `initPhoto()` hides the figure instead of showing a broken image.
