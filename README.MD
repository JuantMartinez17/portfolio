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
    ├── profile.jpg        # Hero photo (add your own — see below)
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
- **No layout shifts:** theme is set before paint to avoid flash.

## Contact form (no backend needed)

GitHub Pages is static-only, so the form posts to **[Formspree](https://formspree.io)** instead of a server:

1. Create a free Formspree account and a new form.
2. Copy your form ID and paste it into the `action` of the `<form id="contact-form">` in `index.html`, replacing `YOUR_FORM_ID`.

That's it — `scripts/main.js` keeps all the validation, loading state, honeypot and feedback, and just POSTs JSON to that endpoint. Until the ID is set, the form shows a friendly error instead of failing silently.

> Prefer **Web3Forms**? Set the form `action` to `https://api.web3forms.com/submit` and add a hidden `<input name="access_key" value="...">`.

## Deploy (GitHub Pages)

Served at **`https://juantmartinez17.github.io/portfolio/`** (a project subpath), so **all asset paths are relative** — don't switch them back to leading-slash absolute paths or they'll 404 on the subpath.

1. Push to the branch GitHub Pages is configured to serve (Settings → Pages).
2. Open the URL above and confirm assets, OG image, CV and photo all load.

Also static-friendly: Vercel, Netlify, Cloudflare Pages.

## Things you should customize before going live

1. **Formspree form ID** — replace `YOUR_FORM_ID` in `index.html` (see above).
2. **`assets/profile.jpg`** — add your hero photo (~360×440, portrait). If the file is missing, the hero hides the photo gracefully. A crop of your CV photo works.
3. **Confirm the experience role order** in the Aeroterra timeline (`index.html` → `#experience`) reflects your actual progression.
4. **Custom domain (optional)** — if you buy one (e.g. `juantomasmartinez.com`), add a `CNAME` file and switch the absolute URLs in the `og:`/`twitter:` meta and JSON-LD back to that domain.

The OG image lives at `assets/og-image.png` (1200×630); recreate it if you change your name or role.
