# MOISOI Portfolio

A bold, dependency-free one-page portfolio tailored for recruiter scanning and deeper exploration.

## Run locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## Experience highlights

- Responsive editorial/art-direction-led portfolio layout
- Keyboard-friendly quick navigation (`K`) and recruiter brief (`B`)
- Interactive project filtering and accessible case-study dialogs
- Scroll progress, reveal choreography, motion-safe fallbacks, and copy-email confirmation
- Print-to-PDF recruiter brief
- No bundler, framework, or runtime dependency required

## Personalise before publishing

The supplied checkout did not contain the original HTML or CV, so the portfolio uses a confident content framework and illustrative case-study labels. Replace the following in `index.html` with the real CV details before production:

1. The name/brand and the public email address (`hello@moisoi.dev`)
2. Availability, location, headline, about copy, and recruiter-brief wording
3. The four selected-work titles, labels, visual content, and case-study details in `script.js`
4. The contact links / social links that should be public

All content is intentionally kept in `index.html` and the `projects` object at the top of `script.js`, so copy replacement is quick and does not require a build step.
