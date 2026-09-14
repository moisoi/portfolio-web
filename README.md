# Messay Mohammed Portfolio

A bold, dependency-free one-page portfolio designed for recruiter scanning and deeper exploration.

## Run locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## Experience highlights

- Responsive editorial/art-direction-led portfolio layout
- MMCY Operations Internship spotlight (June 22–July 23, 2026)
- Keyboard-friendly quick navigation (`K`) and recruiter brief (`B`)
- Interactive project filtering and accessible case-study dialogs
- Scroll progress, reveal choreography, motion-safe fallbacks, and copy-email confirmation
- Print-to-PDF recruiter brief
- No bundler, framework, or runtime dependency required

## Personalise before publishing

All page content is intentionally kept in `index.html` and the case-study data at the top of `script.js`, so replacement does not require a build step. Before publishing, update:

1. The public email address (`hello@moisoi.dev`) and any social links
2. Any availability, location, and personal-summary wording
3. Selected-work titles, visual content, and case-study details in `script.js`
4. Additional work history, achievements, qualifications, and measurable outcomes from the CV
