# Project Guidelines — TubeNotes Landing Page

## Overview
Static landing page for [TubeNotes Desktop](https://github.com/orgofjs/tubenotes-desktop) — a free, open-source video knowledge management app. Hosted on GitHub Pages.

## Architecture
- **Pure static site**: HTML + CSS + vanilla JS — no build step, no framework
- `index.html` — Single-page landing with all sections
- `css/style.css` — All styles using CSS custom properties (theme variables)
- `js/main.js` — Animations (GSAP/ScrollTrigger), interactions, preloader
- `images/` — App screenshots and assets (if local copies needed)

## Code Style
- **Design system**: Cyberpunk Brutalist — see [THEME_GUIDE.md](..THEME_GUIDE.md) for palette, typography, shadows
- **CSS variables** defined in `:root` — all colors, fonts, spacing reference `var(--name)`
- **No border-radius** — sharp corners everywhere (brutalist rule)
- **3px borders**, **4px/6px offset shadows** — the signature brutalist shadow pattern
- **Fonts**: Orbitron (display), Chakra Petch (headings/body), Share Tech Mono (mono) via Google Fonts CDN
- **Icons**: Inline SVGs from Lucide icon set — no icon font dependency
- **Animations**: GSAP 3 + ScrollTrigger loaded from CDN; CSS @keyframes for micro-interactions

## Key Design Patterns
- Section structure: `.section > .section-container > .section-header + content`
- Feature cards use `data-accent` attribute for color variant: `primary | secondary | tertiary | blue | orange`
- Showcase uses tab system with `data-tab` attributes matching between `.showcase-tab` and `.showcase-img`
- All scroll-reveal elements get `.reveal` class — GSAP handles the animation
- Buttons follow `.btn-brutal .btn-primary|.btn-secondary|.btn-cta` pattern
- Contributor card data is static HTML; GitHub avatar URLs use `https://github.com/{username}.png`

## Build & Deploy
```bash
# No build step — open index.html directly or serve with any static server
# Deploy: push to main branch, GitHub Pages serves from root
```

## Important Links
- **Download link**: `https://github.com/orgofjs/tubenotes-desktop/releases/tag/v0.2.3` — update version in HTML when new release ships
- **Repo**: `https://github.com/orgofjs/tubenotes-desktop`
- **Screenshots**: Pulled from `https://raw.githubusercontent.com/orgofjs/tubenotes-desktop/main/public/pics/`
- **Contributor avatars**: `https://github.com/{username}.png`

## When Updating
- New release → update version badge in hero, download URLs, titlebar text, CTA button
- New contributor → add a `.contributor-card` block in the contributors grid (before the join card)
- New feature → add a `.feature-card` to the features grid with appropriate `data-accent`
- Theme reference → consult [THEME_GUIDE.md](../THEME_GUIDE.md) and [frontend-design-rules.md](../frontend-design-rules.md)
