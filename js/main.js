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
  location: "Bole, Addis Ababa, Ethiopia",
  email: "messaymohammed@gmail.com",
  phone: "+251 900 651 948",
  phoneRaw: "+251900651948",
  github: "https://github.com/moisoi",
  linkedin: "https://www.linkedin.com/in/messay-seid-398000252",
  cal: "https://cal.com/messay-mohammed-w47ggg", // Cal.com booking link
  cvFile: "assets/Messay_Mohammed_CV.pdf",       // downloadable CV
  timeZone: "Africa/Addis_Ababa",

  typedRoles: [
    "mobile apps with React Native.",
    "Telegram Mini Apps.",
    "web apps with React & Next.js.",
    "scalable backends with NestJS.",
    "products with AI-powered workflows.",
  ],

  marquee: [
    "React Native", "Expo", "React.js", "Next.js", "TypeScript", "Node.js",
    "NestJS", "Express.js", "FastAPI", "Supabase", "Firebase", "PostgreSQL",
    "MySQL", "Redis", "Tailwind CSS", "WebSockets", "JWT & OAuth 2.0",
    "Docker", "GitLab CI/CD", "Telegram Mini Apps",
  ],

  skillGroups: [
    {
      emoji: "📱",
      title: "Frontend & Mobile",
      skills: [
        { name: "React.js & Next.js", level: 90 },
        { name: "React Native & Expo", level: 88 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "HTML5, CSS3 & Tailwind", level: 90 },
        { name: "Telegram Mini Apps", level: 84 },
      ],
    },
    {
      emoji: "⚙️",
      title: "Backend & Databases",
      skills: [
        { name: "Node.js & NestJS", level: 87 },
        { name: "Express.js & FastAPI", level: 82 },
        { name: "PostgreSQL / MySQL", level: 84 },
        { name: "Supabase / Firebase / Redis", level: 83 },
        { name: "Auth — JWT, OAuth 2.0, RBAC", level: 80 },
      ],
    },
    {
      emoji: "🧰",
      title: "Tools & Practices",
      skills: [
        { name: "Git, GitHub & GitLab CI/CD", level: 88 },
        { name: "RESTful APIs & WebSockets", level: 86 },
        { name: "Docker", level: 78 },
        { name: "AI-assisted development", level: 85 },
        { name: "Penetration testing basics", level: 70 },
      ],
    },
  ],

  projects: [
    {
      title: "Student Sports Hub",
      tagline: "React Native app bringing school sports to life for students & parents across Addis Ababa.",
      category: "mobile",
      categoryLabel: "Mobile · React Native",
      year: "2025",
      glyph: "🏆",
      g1: "#c9f24d",
      g2: "#4be0c8",
      client: "Dewel Marketing and Consultancy",
      description:
        "A mobile app for grade 1–12 students and parents across Addis Ababa, built with React Native + Supabase on contract for Dewel Marketing and Consultancy. It brings school sports to life with real-time stories, match schedules, team rosters and updates — on a database designed to scale across multiple schools.",
      highlights: [
        "Built with React Native + Expo and a Supabase backend",
        "Real-time stories, match schedules, team rosters & sports updates",
        "Scalable database architecture supporting multiple schools",
        "Designed for grade 1–12 students and parents across Addis Ababa",
      ],
      tech: ["React Native", "Expo", "Supabase", "TypeScript", "PostgreSQL"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
    {
      title: "Business Forms Mini App",
      tagline: "Telegram Mini App automating petty cash, purchase orders & attendance for real businesses.",
      category: "fullstack",
      categoryLabel: "Full Stack · Telegram",
      year: "2026",
      glyph: "🧾",
      g1: "#7c6cf0",
      g2: "#ffb86b",
      client: "Meteku Teshome General Work PLC",
      description:
        "A Telegram Mini App that digitizes everyday business paperwork — petty cash requests, purchase orders and employee attendance — built on contract for Meteku Teshome General Work PLC. React + Vite frontend, Node.js + NestJS backend, with exportable business reports for client management.",
      highlights: [
        "Automated petty cash requests, purchase orders & employee attendance",
        "Business reports with export functionality for client management",
        "React + Vite frontend · Node.js + NestJS backend",
        "Delivered inside Telegram — zero install friction for users",
      ],
      tech: ["React", "Vite", "Node.js", "NestJS", "Telegram API"],
      repo: "https://github.com/moisoi",
      demo: "https://github.com/moisoi",
    },
  ],

  timeline: [
    {
      kind: "work",
      date: "Feb 2026",
      role: "Full Stack Developer (Contract)",
      org: "Meteku Teshome General Work PLC",
      location: "Addis Ababa",
      points: [
        "Developed the Business Forms Telegram Mini App — React + Vite frontend, Node.js + NestJS backend.",
        "Automated forms for petty cash requests, purchase orders and employee attendance.",
        "Generated business reports with export functionality for client management.",
      ],
    },
    {
      kind: "work",
      date: "Sep 2025 – Dec 2025",
      role: "Full Stack Mobile Developer (Contract)",
      org: "Dewel Marketing and Consultancy",
      location: "Addis Ababa",
      points: [
        "Built the Student Sports Hub mobile app with React Native + Supabase for grade 1–12 students and parents.",
        "Shipped real-time stories, match schedules, team rosters and sports updates.",
        "Designed a scalable database architecture supporting multiple schools.",
      ],
    },
    {
      kind: "edu",
      date: "Sep 2020 – Jul 2025",
      role: "Bachelor of Computer Science",
      org: "HILCOE School of Computer Science and Technology",
      location: "Addis Ababa",
      points: [
        "Full-stack development focus: web, mobile, databases & APIs.",
        "Complemented engineering with digital content creation skills.",
      ],
    },
    {
      kind: "volunteer",
      date: "Jun 2018 – Aug 2018",
      role: "Lead Unit Coordinator & Teacher",
      org: "YWCA — Young Women's Christian Association",
      location: "Addis Ababa",
      points: [
        "Led and coordinated a team of teachers; oversaw daily academic activities and site operations.",
        "Organized a successful fundraising initiative supporting 100+ students with school supplies.",
      ],
    },
    {
      kind: "volunteer",
      date: "May 2018",
      role: "Blood Donation Organizer",
      org: "Red Cross Ethiopia",
      location: "Addis Ababa",
      points: [
        "Facilitated and organized blood donations from high school students, sponsored by Red Cross Ethiopia.",
      ],
    },
  ],

  beyond: [
    {
      icon: "🎓",
      title: "2D & 3D Modeling Certificate",
      org: "MMCY Workforce Training",
      text: "Certified in 2D & 3D modeling for modern product development — design thinking beyond the browser.",
    },
    {
      icon: "❤️",
      title: "Red Cross Ethiopia",
      org: "Blood Donation Drive · May 2018",
      text: "Facilitated and organized high-school blood donation drives sponsored by Red Cross Ethiopia.",
    },
    {
      icon: "🤝",
      title: "YWCA Lead Coordinator & Teacher",
      org: "Jun 2018 – Aug 2018",
      text: "Led a teaching team, ran daily academic operations, and drove fundraising that supplied 100+ students.",
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

    // "More on GitHub" card — always last
    grid.insertAdjacentHTML(
      "beforeend",
      `
      <a class="project-card github-card" href="${SITE.github}" target="_blank" rel="noopener" data-reveal style="--d:.16s">
        <div class="pc-cover" aria-hidden="true" style="--g1:#c9f24d;--g2:#7c6cf0">
          <span class="pc-glyph">🐙</span>
        </div>
        <div class="pc-body">
          <div class="pc-top"><h3>More on GitHub</h3><span class="pc-type">Open source</span></div>
          <p class="pc-tagline">Experiments, contributions and works-in-progress live on my GitHub. The commit history doesn't lie.</p>
          <div class="pc-links">
            <span class="pc-link primary">Follow along →</span>
          </div>
        </div>
      </a>`
    );

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
          <span class="tl-kind">${t.kind === "work" ? "💼 Work" : t.kind === "edu" ? "🎓 Education" : "🤝 Volunteering"}</span>
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
   Beyond the code: certificates & volunteering
   ============================================================ */
const Beyond = {
  init() {
    const grid = $("#beyond-grid");
    if (!grid) return;
    grid.innerHTML = SITE.beyond
      .map(
        (b, i) => `
      <div class="beyond-card" data-reveal style="--d:${0.08 + i * 0.09}s">
        <span class="b-ico" aria-hidden="true">${b.icon}</span>
        <div class="b-copy">
          <h3>${b.title}</h3>
          <p class="b-org">${b.org}</p>
          <p class="b-text">${b.text}</p>
        </div>
      </div>`
      )
      .join("");
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
  Beyond.init();
  Contact.init();
  Stats.init();
  CmdK.init();
  EasterEgg.init();
  Reveal.init();
});
