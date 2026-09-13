/* ============================================================
   MESSAY MOHAMMED — PORTFOLIO ENGINE
   Vanilla JS, zero dependencies.

   ✏️  EDIT YOUR CONTENT HERE — everything rendered on the page
   (skills, projects, experience, testimonials, marquee, typed
   roles) lives in the SITE object below.
   ============================================================ */

const SITE = {
  name: "Messay Mohammed",
  role: "Full Stack Developer",
  location: "Addis Ababa, Ethiopia",
  email: "hello@messay.dev", // ← set your real email
  github: "https://github.com/moisoi",
  cal: "https://cal.com/messay-mohammed-w47ggg", // Cal.com booking link
  cvFile: "assets/Messay_Mohammed_CV.pdf",       // downloadable CV
  timeZone: "Africa/Addis_Ababa",

  typedRoles: [
    "fast web applications.",
    "clean, scalable APIs.",
    "delightful user interfaces.",
    "products people love.",
    "the web, from db to pixel.",
  ],

  marquee: [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "Express", "Next.js", "Tailwind CSS", "Git & GitHub", "Docker",
    "REST APIs", "GraphQL", "Redis", "Linux", "Figma", "CI/CD",
  ],

  skillGroups: [
    {
      emoji: "🎨",
      title: "Frontend",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React & Next.js", level: 88 },
        { name: "HTML & Modern CSS", level: 92 },
        { name: "Tailwind / UI Systems", level: 85 },
        { name: "Accessibility & Performance", level: 82 },
      ],
    },
    {
      emoji: "⚙️",
      title: "Backend",
      skills: [
        { name: "Node.js & Express", level: 88 },
        { name: "Python & FastAPI", level: 80 },
        { name: "PostgreSQL / MongoDB", level: 84 },
        { name: "REST & GraphQL APIs", level: 86 },
        { name: "Auth, Security & Testing", level: 78 },
      ],
    },
    {
      emoji: "🧰",
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub Flow", level: 92 },
        { name: "Docker & Linux", level: 76 },
        { name: "CI/CD Pipelines", level: 74 },
        { name: "Vercel / Cloud Deploy", level: 85 },
        { name: "Figma → Code", level: 80 },
      ],
    },
  ],

  projects: [
    {
      title: "Gebeya Marketplace",
      tagline: "A full-stack marketplace connecting Ethiopian artisans with buyers everywhere.",
      category: "fullstack",
      categoryLabel: "Full Stack",
      year: "2025",
      glyph: "ገ",
      g1: "#c9f24d",
      g2: "#4be0c8",
      description:
        "A two-sided marketplace where local artisans list handmade goods and buyers worldwide purchase with escrow-protected payments. I owned the product end-to-end: schema design, REST API, storefront, and deployment.",
      highlights: [
        "Designed a normalized PostgreSQL schema for listings, orders & escrow",
        "Built a React + TypeScript storefront with optimistic cart updates",
        "Implemented seller dashboards with real-time sales analytics",
        "Achieved sub-second page loads via image CDN & route-level code splitting",
      ],
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "BunaPOS",
      tagline: "Offline-first point-of-sale for independent cafés — works even when the Wi-Fi doesn't.",
      category: "fullstack",
      categoryLabel: "Full Stack · PWA",
      year: "2025",
      glyph: "☕",
      g1: "#ffb86b",
      g2: "#ff5f57",
      description:
        "A Progressive Web App POS designed for Addis Ababa's café culture: instant order entry, table management, and daily reports — fully functional offline with background sync when connectivity returns.",
      highlights: [
        "IndexedDB + service-worker architecture for true offline-first UX",
        "Thermal-printer-friendly receipt rendering",
        "Background sync queue resolves offline orders without conflicts",
        "Installable PWA with < 150ms interaction latency on low-end devices",
      ],
      tech: ["PWA", "IndexedDB", "Service Workers", "React", "Node.js"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "Selam Chat",
      tagline: "Real-time messaging with rooms, presence, and typing indicators — 50ms round trip.",
      category: "backend",
      categoryLabel: "Backend · Real-time",
      year: "2024",
      glyph: "ሰ",
      g1: "#7c6cf0",
      g2: "#4be0c8",
      description:
        "A WebSocket-powered chat platform supporting group rooms, live presence, and message history. Built to explore real-time architecture at scale: fan-out, backpressure, and horizontal readiness.",
      highlights: [
        "WebSocket gateway with room-based pub/sub (Redis)",
        "Presence heartbeats + typing indicators with debounced fan-out",
        "Message pagination & search over 100k+ messages",
        "Load-tested to 2k concurrent connections on a single node",
      ],
      tech: ["Node.js", "WebSockets", "Redis", "MongoDB", "React"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "Makeda Analytics",
      tagline: "A privacy-friendly analytics dashboard with beautiful, interactive charts.",
      category: "frontend",
      categoryLabel: "Frontend · Data Viz",
      year: "2024",
      glyph: "📊",
      g1: "#4be0c8",
      g2: "#7c6cf0",
      description:
        "A lightweight analytics dashboard that respects user privacy — no cookies, no fingerprinting. Focused on rendering performance and gorgeous data visualization with minimal bundle weight.",
      highlights: [
        "Hand-tuned SVG charts with 60fps hover interactions",
        "Cookieless tracking script under 1KB gzipped",
        "Realtime visitor map & funnel breakdowns",
        "Dark/light theming with system preference detection",
      ],
      tech: ["React", "D3.js", "FastAPI", "ClickHouse", "Vite"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "Axum UI",
      tagline: "An open-source React component library inspired by Ethiopian design motifs.",
      category: "frontend",
      categoryLabel: "Open Source",
      year: "2024",
      glyph: "✦",
      g1: "#c9f24d",
      g2: "#ffb86b",
      description:
        "A themable component library with 30+ accessible components, drawing visual inspiration from Aksumite patterns and Ethiopian textiles. Fully typed, tree-shakeable, and documented with live examples.",
      highlights: [
        "30+ WCAG-AA components with full keyboard navigation",
        "Design-token theming engine (colors, radii, motion)",
        "100% TypeScript with auto-generated docs",
        "Published to npm with automated release pipeline",
      ],
      tech: ["React", "TypeScript", "Storybook", "CSS Variables", "Vitest"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "SnapCV API",
      tagline: "A resume-parsing API that turns messy PDFs into clean structured JSON.",
      category: "backend",
      categoryLabel: "Backend · API",
      year: "2023",
      glyph: "📄",
      g1: "#ff5f57",
      g2: "#c9f24d",
      description:
        "A FastAPI service that extracts structured data from resumes — skills, experience, education — using OCR and heuristic parsing. Built for HR teams drowning in PDFs.",
      highlights: [
        "OCR + rule-based parsing pipeline with 92% field accuracy",
        "Async job queue for batch uploads (500+ resumes)",
        "OpenAPI docs with interactive sandbox",
        "Dockerized with health checks & structured logging",
      ],
      tech: ["Python", "FastAPI", "OCR", "Celery", "Redis", "Docker"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
  ],

  timeline: [
    {
      kind: "work",
      date: "2024 — Present",
      role: "Full Stack Developer",
      org: "Freelance & Contract",
      points: [
        "Shipping end-to-end web products for startups and local businesses — from schema design to deployment.",
        "Delivered marketplace, POS, and analytics platforms used by real customers daily.",
        "Advised clients on architecture, performance budgets, and accessibility.",
      ],
    },
    {
      kind: "work",
      date: "2023 — 2024",
      role: "Frontend Developer",
      org: "Product Studio, Addis Ababa",
      points: [
        "Built and maintained React applications serving thousands of monthly users.",
        "Introduced a component system that cut UI development time by ~40%.",
        "Paired with designers to ship pixel-perfect, responsive interfaces.",
      ],
    },
    {
      kind: "work",
      date: "2022 — 2023",
      role: "Web Development Intern",
      org: "Tech Startup, Remote",
      points: [
        "Learned production workflows: code review, Git flow, CI/CD, and agile sprints.",
        "Shipped my first features to real users — and my first 2 a.m. hotfix. 😅",
      ],
    },
    {
      kind: "edu",
      date: "2019 — 2023",
      role: "BSc, Computer Science",
      org: "Addis Ababa University",
      points: [
        "Focused on software engineering, databases, and algorithms.",
        "Led the student dev club; organized hackathons and study groups.",
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "Messay took our vague idea and turned it into a product our customers actually rave about. He thinks in systems, sweats the details, and ships on time — a rare combination.",
      name: "Sara T.",
      role: "Founder, e-commerce startup",
      initials: "ST",
    },
    {
      quote:
        "One of those developers who makes the whole team better. Clean code, honest estimates, and he'll happily explain the 'why' behind every technical decision.",
      name: "Daniel K.",
      role: "Engineering Lead",
      initials: "DK",
    },
    {
      quote:
        "We handed Messay a slow, dated web app and got back a fast, accessible experience our users love. Communication was excellent from kickoff to launch.",
      name: "Hanna G.",
      role: "Product Manager",
      initials: "HG",
    },
  ],
};

/* ============================================================
   Utilities
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = window.matchMedia("(pointer: fine)").matches;

function toast(msg, icon = "✓") {
  const el = $("#toast");
  if (!el) return;
  el.innerHTML = `<span class="t-ico">${icon}</span>${msg}`;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2800);
}

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

/* ============================================================
   Theme
   ============================================================ */
const Theme = {
  key: "mm-theme",
  init() {
    const saved = localStorage.getItem(this.key);
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    this.set(saved || (prefersLight ? "light" : "dark"), false);
    $("#theme-toggle")?.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      this.set(next, true);
      toast(next === "dark" ? "Dark mode — as it should be 🌙" : "Light mode activated ☀️", "◐");
    });
  },
  set(mode, save) {
    document.documentElement.dataset.theme = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", mode === "dark" ? "#0a0a10" : "#f5f4ee");
    if (save) localStorage.setItem(this.key, mode);
    window.dispatchEvent(new CustomEvent("themechange", { detail: mode }));
  },
};

/* ============================================================
   Preloader
   ============================================================ */
const Preloader = {
  init() {
    const el = $("#preloader");
    if (!el || REDUCED) { el?.remove(); document.body.classList.remove("locked"); return; }
    document.body.classList.add("locked");
    const bar = $("#preloader-bar");
    const count = $("#preloader-count");
    const duration = 950;
    const start = performance.now();
    const tick = (now) => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const pct = Math.round(eased * 100);
      bar.style.width = pct + "%";
      count.textContent = pct + "%";
      if (t < 1) requestAnimationFrame(tick);
      else this.finish(el);
    };
    requestAnimationFrame(tick);
  },
  finish(el) {
    el.classList.add("done");
    document.body.classList.remove("locked");
    setTimeout(() => el.remove(), 900);
  },
};

/* ============================================================
   Nav: scrolled state, progress bar, scrollspy, back-to-top
   ============================================================ */
const Nav = {
  init() {
    const nav = $("#nav");
    const progress = $("#scroll-progress");
    const backTop = $("#back-top");

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 24);
      backTop.classList.toggle("show", y > 640);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }));

    // Scrollspy
    const links = $$(".nav-link");
    const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => {
              const active = l.getAttribute("href") === "#" + e.target.id;
              l.classList.toggle("active", active);
              if (active) l.setAttribute("aria-current", "true");
              else l.removeAttribute("aria-current");
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  },
};

/* ============================================================
   Mobile menu
   ============================================================ */
const MobileMenu = {
  init() {
    const burger = $("#burger");
    if (!burger) return;
    const toggle = (open) => {
      document.body.classList.toggle("menu-open", open);
      document.body.classList.toggle("locked", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    burger.addEventListener("click", () => toggle(!document.body.classList.contains("menu-open")));
    $$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => toggle(false)));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) toggle(false);
    });
  },
};

/* ============================================================
   Custom cursor
   ============================================================ */
const Cursor = {
  init() {
    if (!FINE_POINTER || REDUCED) return;
    document.body.classList.add("has-cursor");
    const dot = $("#cursor-dot");
    const ring = $("#cursor-ring");
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, visible = false;

    window.addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; dot.style.opacity = 1; ring.style.opacity = 1; }
      dot.style.left = x + "px"; dot.style.top = y + "px";
    }, { passive: true });

    document.addEventListener("pointerover", (e) => {
      ring.classList.toggle("hovering", !!e.target.closest("a, button, input, textarea, [data-cursor]"));
    });
    document.addEventListener("pointerdown", () => ring.classList.add("pressing"));
    document.addEventListener("pointerup", () => ring.classList.remove("pressing"));
    document.addEventListener("pointerleave", () => { visible = false; dot.style.opacity = 0; ring.style.opacity = 0; });

    const loop = () => {
      rx = lerp(rx, x, 0.16); ry = lerp(ry, y, 0.16);
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    };
    loop();
  },
};

/* ============================================================
   Hero constellation canvas
   ============================================================ */
const HeroCanvas = {
  particles: [],
  pointer: { x: -9999, y: -9999 },
  init() {
    const canvas = $("#hero-canvas");
    if (!canvas || REDUCED) { canvas?.remove(); return; }
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = w * this.dpr;
      canvas.height = h * this.dpr;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.w = w; this.h = h;
      const count = clamp(Math.round((w * h) / 16000), 40, 110);
      this.particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    canvas.parentElement.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      this.pointer.x = e.clientX - rect.left;
      this.pointer.y = e.clientY - rect.top;
    }, { passive: true });
    canvas.parentElement.addEventListener("pointerleave", () => {
      this.pointer.x = -9999; this.pointer.y = -9999;
    });

    // Pause when hero out of view or tab hidden
    let heroVisible = true;
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }, { threshold: 0 })
      .observe($("#home"));

    const loop = () => {
      requestAnimationFrame(loop);
      if (!heroVisible || document.hidden) return;
      this.draw();
    };
    loop();
  },
  colors() {
    const dark = document.documentElement.dataset.theme !== "light";
    return dark
      ? { dot: "rgba(201,242,77,", line: "rgba(154,154,180,", pLine: "rgba(201,242,77," }
      : { dot: "rgba(80,100,10,", line: "rgba(60,60,80,", pLine: "rgba(90,120,10," };
  },
  draw() {
    const { ctx, w, h, particles, pointer } = this;
    ctx.clearRect(0, 0, w, h);
    const c = this.colors();
    const LINK = 120, P_LINK = 170;

    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;

      // gentle pointer repulsion
      const dx = p.x - pointer.x, dy = p.y - pointer.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 140 * 140 && d2 > 0.01) {
        const d = Math.sqrt(d2);
        const f = ((140 - d) / 140) * 0.6;
        p.x += (dx / d) * f; p.y += (dy / d) * f;
      }
    }

    // links
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = c.line + (0.16 * (1 - d / LINK)) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // pointer links
      const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
      if (pd < P_LINK) {
        ctx.strokeStyle = c.pLine + (0.35 * (1 - pd / P_LINK)) + ")";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
      }
    }

    // dots
    for (const p of particles) {
      ctx.fillStyle = c.dot + "0.75)";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  },
};

/* ============================================================
   Typewriter
   ============================================================ */
const Typewriter = {
  init() {
    const el = $("#typed");
    if (!el) return;
    const roles = SITE.typedRoles;
    if (REDUCED) { el.textContent = roles[0]; return; }
    let ri = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = roles[ri];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let delay = deleting ? 38 : 78;
      if (!deleting && ci === word.length) { delay = 1900; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 420; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 1400);
  },
};

/* ============================================================
   Marquee
   ============================================================ */
const Marquee = {
  init() {
    const track = $("#marquee-track");
    if (!track) return;
    const items = SITE.marquee.map((t) => `<span>${t}</span>`).join("");
    track.innerHTML = items + items; // duplicated for seamless loop
  },
};

/* ============================================================
   Count-up stats + spotlight hover
   ============================================================ */
const Stats = {
  init() {
    const nums = $$(".stat .num");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        this.count(e.target);
      });
    }, { threshold: 0.5 });
    nums.forEach((n) => io.observe(n));

    // spotlight follow
    $$(".stat, .skill-group").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  },
  count(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    if (REDUCED) { el.textContent = target + suffix; return; }
    const dur = 1500, start = performance.now();
    const tick = (now) => {
      const t = clamp((now - start) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },
};

/* ============================================================
   Skills (rendered from SITE)
   ============================================================ */
const Skills = {
  init() {
    const grid = $("#skills-grid");
    if (!grid) return;
    grid.innerHTML = SITE.skillGroups
      .map(
        (g, gi) => `
        <div class="skill-group" data-reveal style="--d:${0.1 + gi * 0.1}s">
          <h3><span class="emoji" aria-hidden="true">${g.emoji}</span>${g.title}</h3>
          ${g.skills
            .map(
              (s) => `
            <div class="skill">
              <div class="skill-head"><span>${s.name}</span><span class="lv">${s.level}%</span></div>
              <div class="skill-bar"><span style="--lv:${s.level}%"></span></div>
            </div>`
            )
            .join("")}
        </div>`
      )
      .join("");

    // animate bars when group scrolls into view
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.3 });
    $$(".skill-group").forEach((g) => io.observe(g));
  },
};

/* ============================================================
   Projects: render, filter, tilt, modal
   ============================================================ */
const Projects = {
  init() {
    const grid = $("#projects-grid");
    if (!grid) return;
    grid.innerHTML = SITE.projects
      .map(
        (p, i) => `
      <article class="project-card" data-cat="${p.category}" data-index="${i}" data-reveal style="--d:${(i % 3) * 0.08}s; --g1:${p.g1}; --g2:${p.g2}">
        <div class="pc-cover" aria-hidden="true">
          <span class="pc-glyph">${p.glyph}</span>
          <span class="pc-year">${p.year}</span>
        </div>
        <div class="pc-body">
          <div class="pc-top"><h3>${p.title}</h3><span class="pc-type">${p.categoryLabel}</span></div>
          <p class="pc-tagline">${p.tagline}</p>
          <div class="pc-tags">${p.tech.slice(0, 4).map((t) => `<span class="chip">${t}</span>`).join("")}</div>
          <div class="pc-links">
            <a class="pc-link" href="${p.repo}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              Code
            </a>
            <a class="pc-link" href="${p.demo}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
              Live
            </a>
            <button class="pc-link primary" data-open="${i}">Details →</button>
          </div>
        </div>
      </article>`
      )
      .join("");

    // Filters
    $$(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
        $$(".project-card").forEach((card) => {
          const show = f === "all" || card.dataset.cat === f;
          card.classList.toggle("hidden-by-filter", !show);
          if (show) card.classList.add("in-view"); // keep revealed
        });
      });
    });

    // 3D tilt
    if (FINE_POINTER && !REDUCED) {
      $$(".project-card").forEach((card) => {
        card.addEventListener("pointermove", (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${py * -7}deg) rotateY(${px * 9}deg) translateY(-4px)`;
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      });
    }

    // Modal openers (delegated)
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-open]");
      if (btn) this.openModal(+btn.dataset.open);
    });
    $$(".pc-cover").forEach((cover) => {
      cover.style.cursor = "pointer";
      cover.addEventListener("click", () => this.openModal(+cover.closest(".project-card").dataset.index));
    });

    const modal = $("#project-modal");
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest(".pm-close")) modal.close();
    });
  },
  openModal(i) {
    const p = SITE.projects[i];
    const modal = $("#project-modal");
    modal.innerHTML = `
      <div class="pm-cover" style="--g1:${p.g1};--g2:${p.g2}">
        <span class="pc-glyph">${p.glyph}</span>
        <button class="pm-close" aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="pm-body">
        <h3>${p.title}</h3>
        <p class="pm-meta">${p.categoryLabel} · ${p.year}</p>
        <p>${p.description}</p>
        <ul class="pm-highlights">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        <div class="pm-tech">${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        <div class="pm-actions">
          <a class="btn btn-primary btn-sm" href="${p.repo}" target="_blank" rel="noopener">View code</a>
          <a class="btn btn-ghost btn-sm" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>
        </div>
      </div>`;
    modal.showModal();
    document.body.classList.add("locked");
    modal.addEventListener("close", () => document.body.classList.remove("locked"), { once: true });
  },
};

/* ============================================================
   Timeline
   ============================================================ */
const Timeline = {
  init() {
    const wrap = $("#timeline");
    if (!wrap) return;
    wrap.innerHTML = SITE.timeline
      .map(
        (t, i) => `
      <div class="tl-item" data-reveal="${i % 2 ? "right" : "left"}" style="--d:.1s">
        <span class="tl-dot" aria-hidden="true"></span>
        <div class="tl-card">
          <span class="tl-kind">${t.kind === "work" ? "💼 Work" : "🎓 Education"}</span>
          <span class="tl-date">${t.date}</span>
          <h3>${t.role}</h3>
          <p class="org">${t.org}</p>
          <ul>${t.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
      </div>`
      )
      .join("");
  },
};

/* ============================================================
   Testimonials slider
   ============================================================ */
const Testimonials = {
  index: 0,
  init() {
    const track = $("#t-track");
    if (!track) return;
    track.innerHTML = SITE.testimonials
      .map(
        (t, i) => `
      <div class="t-slide ${i === 0 ? "current" : ""}" role="group" aria-label="Testimonial ${i + 1} of ${SITE.testimonials.length}">
        <blockquote>${t.quote}</blockquote>
        <div class="t-author">
          <span class="t-avatar" aria-hidden="true">${t.initials}</span>
          <div class="who"><strong>${t.name}</strong><span>${t.role}</span></div>
        </div>
      </div>`
      )
      .join("");

    const dots = $("#t-dots");
    dots.innerHTML = SITE.testimonials
      .map((_, i) => `<button class="t-dot ${i === 0 ? "active" : ""}" data-i="${i}" aria-label="Go to testimonial ${i + 1}"></button>`)
      .join("");

    $("#t-prev").addEventListener("click", () => this.go(this.index - 1));
    $("#t-next").addEventListener("click", () => this.go(this.index + 1));
    dots.addEventListener("click", (e) => {
      const d = e.target.closest(".t-dot");
      if (d) this.go(+d.dataset.i);
    });

    // autoplay
    this.timer = setInterval(() => this.go(this.index + 1), 6500);
    $(".testimonial-shell").addEventListener("pointerenter", () => clearInterval(this.timer));
    $(".testimonial-shell").addEventListener("pointerleave", () => {
      this.timer = setInterval(() => this.go(this.index + 1), 6500);
    });
  },
  go(i) {
    const n = SITE.testimonials.length;
    this.index = (i + n) % n;
    $$(".t-slide").forEach((s, si) => s.classList.toggle("current", si === this.index));
    $$(".t-dot").forEach((d, di) => d.classList.toggle("active", di === this.index));
  },
};

/* ============================================================
   Contact: form, copy email, local time
   ============================================================ */
const Contact = {
  init() {
    $("#email-text").textContent = SITE.email;

    // Copy email
    $("#copy-email").addEventListener("click", async () => {
      const label = $("#copy-label");
      try {
        await navigator.clipboard.writeText(SITE.email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = SITE.email; document.body.appendChild(ta);
        ta.select(); document.execCommand("copy"); ta.remove();
      }
      label.textContent = "Copied!";
      toast("Email copied to clipboard — talk soon!", "📋");
      setTimeout(() => (label.textContent = "Copy"), 2000);
    });

    // Form
    const form = $("#contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      const check = (id, valid) => {
        const field = $(id).closest(".form-field");
        field.classList.toggle("error", !valid);
        if (!valid) ok = false;
      };
      check("#cf-name", $("#cf-name").value.trim().length >= 2);
      check("#cf-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#cf-email").value.trim()));
      check("#cf-msg", $("#cf-msg").value.trim().length >= 10);
      if (!ok) return;

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = 'Sending… <span style="display:inline-block;width:14px;height:14px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></span>';

      // Simulated send — wire this to Formspree/EmailJS/your API for real delivery.
      setTimeout(() => {
        form.classList.add("sent");
        toast("Message sent — thanks for reaching out!", "🚀");
        btn.disabled = false;
        btn.innerHTML = 'Send message';
      }, 1100);
    });

    $$("#contact-form input, #contact-form textarea").forEach((f) =>
      f.addEventListener("input", () => f.closest(".form-field").classList.remove("error"))
    );

    // Local time (Addis Ababa)
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: SITE.timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit",
    });
    const updateTime = () => {
      const t = fmt.format(new Date()) + " (GMT+3)";
      const a = $("#local-time"), b = $("#footer-time");
      if (a) a.textContent = t;
      if (b) b.textContent = fmt.format(new Date());
    };
    updateTime();
    setInterval(updateTime, 1000);

    $("#year").textContent = new Date().getFullYear();
  },
};

/* ============================================================
   Command palette (⌘K)
   ============================================================ */
const CmdK = {
  selected: 0,
  commands: [
    { icon: "👋", label: "Go to About", hint: "#about", run: () => location.hash === "#about" ? $("#about").scrollIntoView() : (location.href = "#about") },
    { icon: "🧰", label: "Go to Skills", hint: "#skills", run: () => (location.href = "#skills") },
    { icon: "🚀", label: "Go to Projects", hint: "#projects", run: () => (location.href = "#projects") },
    { icon: "💼", label: "Go to Experience", hint: "#experience", run: () => (location.href = "#experience") },
    { icon: "✉️", label: "Go to Contact", hint: "#contact", run: () => (location.href = "#contact") },
    { icon: "◐", label: "Toggle dark / light theme", hint: "theme", run: () => $("#theme-toggle").click() },
    { icon: "📅", label: "Book a call (Cal.com)", hint: "schedule", run: () => window.open(SITE.cal, "_blank") },
    { icon: "⤓", label: "Download CV (PDF)", hint: "cv", run: () => { const a = document.createElement("a"); a.href = SITE.cvFile; a.download = ""; a.click(); } },
    { icon: "📄", label: "Open résumé", hint: "resume.html", run: () => window.open("resume.html", "_blank") },
    { icon: "📋", label: "Copy email address", hint: SITE.email, run: () => $("#copy-email").click() },
    { icon: "🐙", label: "Open GitHub profile", hint: "github.com/moisoi", run: () => window.open(SITE.github, "_blank") },
    { icon: "⬆️", label: "Scroll to top", hint: "home", run: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { icon: "🤖", label: "Chat with Messa (AI assistant)", hint: "bot", run: () => { if (typeof Bot !== "undefined") Bot.open(); } },
    { icon: "🎉", label: "Trigger confetti", hint: "easter egg", run: () => EasterEgg.party() },
  ],
  init() {
    this.dialog = $("#cmdk");
    this.input = $("#cmdk-input");
    this.list = $("#cmdk-list");

    $("#cmdk-btn").addEventListener("click", () => this.open());
    this.dialog.addEventListener("click", (e) => { if (e.target === this.dialog) this.dialog.close(); });
    this.input.addEventListener("input", () => this.render());
    this.input.addEventListener("keydown", (e) => {
      const items = $$(".cmdk-item", this.list);
      if (e.key === "ArrowDown") { e.preventDefault(); this.selected = Math.min(this.selected + 1, items.length - 1); this.paint(items); }
      else if (e.key === "ArrowUp") { e.preventDefault(); this.selected = Math.max(this.selected - 1, 0); this.paint(items); }
      else if (e.key === "Enter") { e.preventDefault(); items[this.selected]?.click(); }
    });
    this.list.addEventListener("click", (e) => {
      const item = e.target.closest(".cmdk-item");
      if (item) { this.dialog.close(); this.commands[+item.dataset.i].run(); }
    });

    window.addEventListener("keydown", (e) => {
      const typing = /^(input|textarea|select)$/i.test(e.target.tagName);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k" && !typing) {
        e.preventDefault();
        this.dialog.open ? this.dialog.close() : this.open();
      }
    });
  },
  open() {
    this.input.value = "";
    this.render();
    this.dialog.showModal();
    this.input.focus();
  },
  render() {
    const q = this.input.value.trim().toLowerCase();
    const matches = this.commands
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => !q || (c.label + " " + c.hint).toLowerCase().includes(q));
    this.selected = 0;
    this.list.innerHTML = matches.length
      ? matches
          .map(
            ({ c, i }) => `
        <button class="cmdk-item" data-i="${i}">
          <span class="c-ico">${c.icon}</span>
          <span class="c-label">${c.label}</span>
          <span class="c-hint">${c.hint}</span>
        </button>`
          )
          .join("")
      : `<div class="cmdk-empty">No results for “${q}” — try “projects” 🤔</div>`;
  },
  paint(items) {
    items.forEach((el, i) => el.classList.toggle("selected", i === this.selected));
    items[this.selected]?.scrollIntoView({ block: "nearest" });
  },
};

/* ============================================================
   Easter eggs: Konami code + confetti + console hello
   ============================================================ */
const EasterEgg = {
  seq: ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"],
  buffer: [],
  init() {
    window.addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      this.buffer.push(e.key.toLowerCase());
      this.buffer = this.buffer.slice(-10);
      if (this.buffer.join(",") === this.seq.join(",")) this.party();
    });

    // Console hello for the curious recruiter 😏
    console.log(
      "%c MM %c  Hey there, curious one! 👋\n     You opened the console — I like you already.\n     Tip: press ⌘K for the command palette,\n     or enter the Konami code for a surprise.",
      "background:#c9f24d;color:#0a0a10;font-weight:bold;font-size:16px;padding:4px 8px;border-radius:6px",
      "color:inherit;font-size:12px"
    );
  },
  party() {
    document.body.classList.add("party");
    toast("🎮 KONAMI CODE! You found the easter egg — coffee's on me ☕", "🎉");
    Confetti.burst();
    setTimeout(() => document.body.classList.remove("party"), 6000);
  },
};

const Confetti = {
  pieces: [],
  running: false,
  burst() {
    const canvas = $("#confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const colors = ["#c9f24d", "#7c6cf0", "#4be0c8", "#ffb86b", "#ff5f57", "#ffffff"];
    const spawn = (x, y, n) => {
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 9;
        this.pieces.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 6,
          w: 6 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          color: colors[(Math.random() * colors.length) | 0],
          life: 130 + Math.random() * 50,
        });
      }
    };
    spawn(innerWidth / 2, innerHeight * 0.35, 130);
    spawn(innerWidth * 0.2, innerHeight * 0.5, 60);
    spawn(innerWidth * 0.8, innerHeight * 0.5, 60);

    if (this.running) return;
    this.running = true;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.pieces = this.pieces.filter((p) => p.life > 0 && p.y < canvas.height + 40);
      for (const p of this.pieces) {
        p.vy += 0.22; p.vx *= 0.99;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = clamp(p.life / 40, 0, 1);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (this.pieces.length) requestAnimationFrame(loop);
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); this.running = false; }
    };
    loop();
  },
};

/* ============================================================
   Scroll reveal
   ============================================================ */
const Reveal = {
  init() {
    const els = $$("[data-reveal]");
    if (REDUCED) { els.forEach((el) => el.classList.add("in-view")); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
  },
};

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  Preloader.init();
  Nav.init();
  MobileMenu.init();
  Cursor.init();
  HeroCanvas.init();
  Typewriter.init();
  Marquee.init();
  Skills.init();
  Projects.init();
  Timeline.init();
  Testimonials.init();
  Contact.init();
  Stats.init();
  CmdK.init();
  EasterEgg.init();
  Reveal.init();
});
