# portfolio-web

Personal portfolio website for **Messay Mohammed** — Full Stack Developer, Addis Ababa 🇪🇹

A single-page portfolio built with **vanilla HTML, CSS & JavaScript** — zero frameworks, zero build step,
zero dependencies. Designed to make recruiters stop scrolling and start exploring.

## ✨ Features

| Category | What's inside |
| --- | --- |
| **First impression** | Animated preloader, line-by-line hero title reveal, interactive particle constellation canvas, typewriter roles, pulsing "open to work" badge |
| **Navigation** | Glassy sticky nav with scrollspy + scroll-progress bar, full-screen mobile menu, back-to-top |
| **⌘K Command palette** | Press `Ctrl/Cmd + K` anywhere — fuzzy-searchable commands to jump sections, toggle theme, copy email, open the résumé |
| **About** | Animated count-up stats, syntax-highlighted `developer.ts` code card, spotlight hover effects |
| **Skills** | Animated proficiency bars grouped by discipline + infinite tech marquee |
| **Projects** | Filterable grid, 3D tilt cards with shine sweep, rich detail modals |
| **Experience** | Alternating scroll-revealed timeline (work + education) |
| **Testimonials** | Auto-playing carousel with dots & arrows |
| **Contact** | Validated form with success state, one-click email copy, **live Addis Ababa local time** |
| **Résumé** | Print-ready A4 résumé page (`resume.html`) with one-click "Download PDF" |
| **Extras** | Dark/light theme (persisted), custom cursor, toast notifications, film grain overlay, scroll-reveal animations, full `prefers-reduced-motion` support |
| **Easter eggs 🥚** | Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`) fires confetti party mode; a hidden hello in the browser console for curious recruiters |

## 📁 Structure

```
index.html      → the portfolio (all markup)
css/styles.css  → design system + all component styles
js/main.js      → SITE content object + every interaction
resume.html     → print-friendly résumé (use browser print → PDF)
```

## ✏️ Customize content

Everything recruiters read lives in **one place**: the `SITE` object at the top of [`js/main.js`](js/main.js)
(name, email, typed roles, skills, projects, timeline, testimonials, marquee tech).
Edit it and the page re-renders — no other file changes needed.

> ⚠️ **Before publishing, update these placeholders:**
> - `SITE.email` (`hello@messay.dev`) → your real email (also appears in the hero socials `mailto:` in `index.html`)
> - Project `repo` / `demo` links → real project URLs
> - LinkedIn URL in the hero socials
> - Experience/education entries and stats → your true history
> - Testimonial quotes → real ones once you have them

## 🖥️ Run locally

No build step — any static server works:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## 🚀 Deploy (GitHub Pages)

1. Repo **Settings → Pages → Branch: `main`**, root folder.
2. Done — `index.html` is picked up automatically.

## ♿ Accessibility & performance notes

- Semantic landmarks, skip-link, `aria-label`s, visible focus states
- Fully keyboard operable (nav, palette, modals, sliders); `Esc` closes everything
- `prefers-reduced-motion` disables particles, tilt, typewriter, marquee & reveals
- Canvas loops pause when the hero leaves the viewport or the tab is hidden
- Lighthouse-friendly: no frameworks, one CSS file, one JS file, system-font fallbacks
