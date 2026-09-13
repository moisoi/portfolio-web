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
| **Résumé & CV** | Print-ready A4 résumé page (`resume.html`) with one-click "Download PDF", plus a **direct-download CV** (`assets/Messay_Mohammed_CV.pdf`, regenerable via `tools/make_cv.py`) |
| **📅 Booking** | **Cal.com "Book a call"** CTAs in the nav, hero, contact cards, mobile menu, résumé page, command palette and bot |
| **🤖 AI Assistant ("Messa")** | Floating chat bot that answers recruiter questions — skills, projects, experience, availability, salary, contact — with quick-reply chips, action buttons (navigate / copy email / open résumé / open case studies), typing indicator, follow-up memory, and graceful fallbacks. 100% client-side: no servers, no API keys, works offline & on GitHub Pages |
| **Extras** | Dark/light theme (persisted), custom cursor, toast notifications, film grain overlay, scroll-reveal animations, full `prefers-reduced-motion` support |
| **Easter eggs 🥚** | Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`) fires confetti party mode; a hidden hello in the browser console for curious recruiters |

## 📁 Structure

```
index.html      → the portfolio (all markup)
css/styles.css  → design system + all component styles
js/main.js      → SITE content object + every interaction
js/bot.js       → "Messa" AI assistant (NLU engine + chat UI)
resume.html     → print-friendly résumé (use browser print → PDF)
assets/Messay_Mohammed_CV.pdf → downloadable CV (regenerate with tools/make_cv.py)
tools/make_cv.py→ one-page CV generator (pip install fpdf2)
404.html        → branded not-found page with auto-redirect
robots.txt      → search-engine hints
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
> - `BOT_PROFILE` at the top of `js/bot.js` → availability, salary stance, languages (the assistant speaks with this data)
> - To swap the CV: drop your own PDF at `assets/Messay_Mohammed_CV.pdf`, or edit the `CONTENT` dict in `tools/make_cv.py` and re-run `python3 tools/make_cv.py`

### 📅 Booking & CV links

- Booking: `SITE.cal` in `js/main.js` → https://cal.com/messay-mohammed-w47ggg
  (hardcoded in `index.html` nav/hero/contact — search & replace if it ever changes)
- CV download: `SITE.cvFile` → `assets/Messay_Mohammed_CV.pdf`

### 🤖 About the AI assistant

**Messa** is a rule-based NLU assistant (keyword-weight scoring + regex boosts + intent memory
for follow-ups like *"tell me more"* and *"and backend?"*). Because it runs entirely in the
browser from your `SITE` data, answers always stay in sync with the page content — edit the
data once, and both the site *and* the bot update. It handles 25+ intents: greetings,
skills (with per-area deep dives), every project by name, experience, education, hiring,
availability/relocation, salary, contact, location & local time, languages, résumé,
navigation ("take me to projects"), theme switching, fun facts and easter eggs.

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
