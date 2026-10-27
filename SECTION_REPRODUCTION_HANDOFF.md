# Portfolio Sections — Exact Reproduction Handoff

Use this document with the current `index.html`, `styles.css`, and `script.js` when recreating the sections in another project/session. The goal is **faithful reproduction**, not reinterpretation: preserve the copy, hierarchy, colors, animations, interactions, breakpoints, and accessibility behavior.

## Transfer prompt

> Reproduce **only** the following three sections from Messay Mohammed’s portfolio exactly as supplied in the attached source files: **Selected Work**, **Capabilities**, and **Experience**. Do not redesign, simplify, rename, or replace the current visual language. Preserve the dark technical/editorial UI, grid background, Space Grotesk + Manrope + DM Mono typography, warm orange/coral and cyan accent system, rounded controls, reveal animation, responsive breakpoints, and keyboard accessibility. Copy the relevant HTML from `index.html`, matching CSS from `styles.css`, and required behavior from `script.js`. The source files are authoritative over any assumptions in this brief.

## Shared visual system

- **Background:** `#080a0f` / `#0a0c13` / `#0b0d13` sections, with a subtle 4rem square grid using low-opacity lavender lines.
- **Text:** near-white `#eff0f8`; muted copy `#9a9caf`; dim metadata `#65687c`.
- **Accents:** warm `#ffab5a`, coral `#ff7474`, cyan `#70ddd9`.
- **Typography:**
  - Display headings: `Space Grotesk`, 700, tight negative tracking
  - Body: `Manrope`
  - Labels, dates, tags, stack metadata: `DM Mono`
- **Section rhythm:** `padding-top` and `padding-bottom: clamp(5rem, 10vw, 10rem)`; horizontal padding: `clamp(1.25rem, 5vw, 5rem)`.
- Each section has a subtle grid background plus edge/fade masking so the grid never competes with the content.
- Keep card and interactive-control corners softly rounded (typically `.65rem`–`1rem`), never sharp.
- Preserve the `IntersectionObserver` reveal pattern: elements begin at `opacity: 0; transform: translateY(1.5rem)` and receive `.visible` on entry.

---

## 1. Selected Work

### Required layout

- Section id: `work`
- Label: `02 / Selected work`
- Main heading: **Recent builds**
- Supporting copy: **Two contract products, from first commit to a tool ready for real users.**
- Desktop: two equal-width cards in a 2-column grid with a `1.25rem` gap.
- Mobile/tablet: one card per row.
- Keep a thin section divider below the heading row.
- Add a final inline CTA below the cards:
  - “Have an operational headache worth solving?”
  - Link: “Let’s talk about it ↘” leading to `#contact`.

### Project cards

Both project cards are keyboard-operable `article` elements (`tabindex="0"`, `role="button"`). Clicking, Enter, or Space opens the case-study dialog. Each card must retain:

1. **Student Sports Hub**
   - Project code: `P.01`
   - Type: `Mobile / Education`
   - Description: mobile app for Dewel Marketing and Consultancy, for grades 1–12 students and parents across Addis Ababa; live stories, match schedules, team rosters, and sports updates.
   - Impact: designed for multiple schools with real-time updates and a scalable database structure.
   - Tags: `React Native`, `Supabase`, `Expo`
   - Circular cyan sport glyph with a warm dot.

2. **Business Forms Mini App**
   - Project code: `P.02`
   - Type: `Web / Operations`
   - Description: Telegram Mini App for Meteku Teshome General Work PLC; petty cash, purchase orders, and employee attendance in one digital workflow.
   - Impact: replaced manual paperwork across three workflows with an exportable digital process.
   - Tags: `React + Vite`, `Node.js`, `NestJS`
   - Circular warm `{ }` glyph with a cyan dot.

### Card behavior and art direction

- Dark glass-like card gradient with a 1px subdued border and `1rem` corner radius.
- Decorative outlined circle lives in the lower-right of each card and scales on hover.
- On hover: card moves up slightly, border turns cyan, arrow shifts diagonally, circle enlarges.
- Preserve visible keyboard focus with warm outline.
- On phone widths, remove the absolute footer positioning so tags and “View case study” flow naturally after the card content rather than overlapping it.

### Case-study dialog

A native `<dialog id="case-modal">` is required. It must be populated from the `caseStudies` object in JavaScript, with:

- project kicker
- title
- lead paragraph
- “The problem”, “The build”, and “Stack” details
- highlighted outcome line
- contact link
- responsive visual-art pane

Dialog requirements:

- Opens from either card.
- Closes from the close button, Escape, click on the backdrop, or its contact link.
- Uses a blurred dark backdrop.
- Desktop: text/content and art pane in two columns.
- Tablet/mobile: art pane moves above the text and has rounded top corners.
- Keep body scroll locked while open.

---

## 2. Capabilities

### Required layout

- Section id: `skills`
- Label: `03 / Capabilities`
- Heading: **Stack & tools**
- Supporting copy: **What I reach for by default, and how the pieces fit together.**
- Toolbar with four rounded filters:
  - `Everything`
  - `Build`
  - `Data`
  - `Ship & secure`
- The active filter has warm fill / dark text. Inactive filters are dark with a subdued border.

### Skill matrix

- Desktop: 3 equal columns, fine bordered grid.
- Medium screens: 2 columns.
- Mobile: one column.
- Each group has a mono heading, a warm index, a divider, and rows with a technology name plus segmented warm proficiency bar.
- Rows should use the exact CV categories and technologies:

| Group | Filter | Skills |
| --- | --- | --- |
| Frontend | Build | React.js / Next.js; TypeScript; Tailwind CSS; HTML5 / CSS3 |
| Mobile | Build | React Native; Expo; Telegram Mini Apps |
| Backend | Build | Node.js / NestJS; Express.js; FastAPI; RESTful API design |
| Databases | Data | PostgreSQL / MySQL; Supabase / Firebase; Redis |
| Security & ops | Ship & secure | JWT / OAuth 2.0; RBAC; Docker; Git / GitHub / GitLab CI; WebSockets |
| Design & AI | Build | UI/UX design awareness; Claude Code / AI workflows; Design motion principles; shadcn/ui |

### Filter behavior

- Use the existing `data-skill-filter` and `data-skill-group` contract.
- Clicking a filter must:
  1. change the active filter UI;
  2. show matching skill groups or all groups;
  3. hide non-matching groups using `.hidden { display: none; }`;
  4. emit the small toast confirmation.
- Do not present the bars as hard metrics or years of experience; they are a visual “familiarity map.”

---

## 3. Experience

### Required layout

- Section id: `experience`
- Label: `04 / Experience`
- Heading: **Where I’ve made things move**
- Supporting copy: **Building products, strengthening operations, and showing up for the people around me.**
- Use a vertical timeline with a fine left rule and outlined timeline nodes.
- Desktop: fixed-width date column plus content column.
- Mobile: stack date above content; retain the timeline rule and node.

### Timeline entries (keep exact order)

1. **Operations Intern** — MMCY — Addis Ababa
   - Date: `Jun 22 — Jul 23, 2026`
   - Add a small cyan `NEW` tag.
   - Highlighted timeline node: warm fill plus glow.
   - Copy: worked across company operations with a technology-first lens; supported day-to-day digital work, shared tools/access needs, operational follow-through, and surfaced small process gaps that slow teams down.
   - Tags: `Tech operations support`, `Workflow tracking`, `Process documentation`.

2. **Full Stack Developer (Contract)** — Meteku Teshome General Work PLC — Addis Ababa
   - Date: `Feb 2026`
   - Copy: developed Business Forms Telegram Mini App with React + Vite, Node.js, and NestJS; automated petty cash requests, purchase orders, employee attendance, and report exports.

3. **Full Stack Mobile Developer (Contract)** — Dewel Marketing and Consultancy — Addis Ababa
   - Date: `Sep 2025 — Dec 2025`
   - Copy: built Student Sports Hub with React Native + Supabase for students and parents in grades 1–12; real-time stories, match schedules, team rosters, sports updates, and multi-school support.

### Supporting experience cards

Below the timeline, retain a 3-card information strip. At tablet/mobile it becomes a single column.

- **Education** — Bachelor of Computer Science; HILCOE School of Computer Science and Technology; Sep 2020 — Jul 2025; Addis Ababa.
- **Leadership** — YWCA Lead Unit Coordinator & Teacher; led teachers, supported student learning, coordinated fundraising for 100+ students.
- **Community** — Red Cross Ethiopia; organized and facilitated a high-school blood-donation initiative.

Cards use a dark translucent surface, a cyan left accent rule, small warm mono label, rounded right corners, and restrained text sizing.

---

## Required responsive behavior

Do not treat desktop as the only target. Preserve these breakpoints:

- **Above 1100px:** hero terminal floats on the right; skill matrix is 3 columns; project cards are 2 columns.
- **1100px and below:** hero terminal becomes an in-flow card; skills become 2 columns; experience extras become 2 columns.
- **820px and below:** main navigation switches to the command-menu button; selected work becomes 1 column; timeline date/content remains structured but narrower.
- **560px and below:**
  - full-width CTA buttons;
  - terminal uses full available width;
  - project-card footer is in normal document flow;
  - skill matrix, timeline, and experience extras become one column;
  - case-study art appears above content;
  - contact actions stack;
  - portfolio chat and its launcher fit within `calc(100vw - 2rem)`.
- **370px and below:** stats become a single column; footer/contact controls remain readable without horizontal overflow.

## Verification checklist

- No horizontal scroll at 320px, 375px, 390px, 768px, 1024px, and desktop widths.
- Every control has a visible focus state.
- Project cards work with mouse, Enter, and Space.
- Native case-study dialog closes with Escape and backdrop click.
- Skill filter works after each breakpoint change.
- Reduced-motion mode disables typing/reveal/ornamental animation while keeping all content visible.
- Do not introduce framework or runtime dependencies; this portfolio is plain HTML, CSS, and JavaScript.
