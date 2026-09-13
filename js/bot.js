/* ============================================================
   MESSA — the portfolio AI assistant
   A fully client-side conversational agent: no servers, no API
   keys, works offline & on GitHub Pages. It "knows" everything
   in the SITE object (js/main.js) plus BOT_PROFILE below.

   ✏️ Update BOT_PROFILE when your situation changes.
   ============================================================ */

const BOT_PROFILE = {
  botName: "Messa",
  availability: "Available now — open to full-time roles, contracts and freelance, remote or on-site.",
  remote: "Yes! Messay works across time zones comfortably from Bole, Addis Ababa (GMT+3) and is open to relocation for the right opportunity.",
  languages: "Amharic (native) and English.",
  salary: "Compensation depends on the role, scope and location — Messay is pragmatic and happy to discuss a fair range once he understands the position. Best to reach out directly!",
  noticePeriod: "None — he can start right away.",
  funFacts: [
    "Messay runs on Ethiopian coffee — 'buna' is basically a food group for him. ☕",
    "He's also a digital content creator — that's where his UI/UX eye comes from. 🎬",
    "He built a Telegram Mini App for real business paperwork. Petty cash, automated. 🧾",
    "His favorite key combo is Cmd+K. Try it on this site 😉",
    "He reads the browser console of every site he visits. That's how he found you. 👀",
  ],
};

/* ============================================================
   Chat engine
   ============================================================ */
const Bot = (() => {
  let opened = false;
  let lastIntent = null;      // for follow-ups like "tell me more"
  let lastProject = null;
  const els = {};

  const rand = (arr) => arr[(Math.random() * arr.length) | 0];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function normalize(s) {
    return s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }
  function hasTerm(norm, term) {
    return (" " + norm + " ").includes(" " + term + " ");
  }

  /* ---------- Action registry ---------- */
  const ACTIONS = {
    scroll: (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    theme: () => $("#theme-toggle")?.click(),
    copyEmail: () => $("#copy-email")?.click(),
    resume: () => window.open("resume.html", "_blank"),
    github: () => window.open(SITE.github, "_blank"),
    linkedin: () => window.open("https://www.linkedin.com/", "_blank"),
    confetti: () => EasterEgg.party(),
    openProject: (i) => Projects.openModal(i),
    bookCall: () => window.open(SITE.cal, "_blank"),
    downloadCV: () => { const a = document.createElement("a"); a.href = SITE.cvFile; a.download = ""; document.body.appendChild(a); a.click(); a.remove(); },
    emailNow: () => { window.location.href = "mailto:" + SITE.email; },
  };

  const ACT = {
    projects: { label: "See projects", icon: "🚀", run: () => ACTIONS.scroll("projects") },
    contact: { label: "Go to contact", icon: "✉️", run: () => ACTIONS.scroll("contact") },
    copyEmail: { label: "Copy email", icon: "📋", run: () => ACTIONS.copyEmail() },
    resume: { label: "Open résumé", icon: "📄", run: () => ACTIONS.resume() },
    downloadCV: { label: "Download CV", icon: "⤓", run: () => ACTIONS.downloadCV() },
    bookCall: { label: "Book a call", icon: "📅", run: () => ACTIONS.bookCall() },
    github: { label: "GitHub profile", icon: "🐙", run: () => ACTIONS.github() },
    email: { label: "Email him now", icon: "📨", run: () => ACTIONS.emailNow() },
    skills: { label: "See skills", icon: "🧰", run: () => ACTIONS.scroll("skills") },
    experience: { label: "See experience", icon: "💼", run: () => ACTIONS.scroll("experience") },
  };

  /* ---------- Helpers to build answers from SITE data ---------- */
  const skillSummary = (g) =>
    g.skills.map((s) => `• ${s.name} — ${s.level}%`).join("\n");

  const projectBlurb = (p) => `📌 ${p.title} (${p.year}) — ${p.tagline}`;

  const findProject = (norm) => {
    const aliases = {
      "student sports hub": 0, "sports hub": 0, sports: 0, "school app": 0, dewel: 0, "sports app": 0,
      "business forms": 1, "forms app": 1, "telegram mini app": 1, "mini app": 1, telegram: 1, meteku: 1, "forms": 1,
    };
    for (const [k, idx] of Object.entries(aliases)) {
      if (hasTerm(norm, k)) return idx;
    }
    for (let i = 0; i < SITE.projects.length; i++) {
      if (norm.includes(SITE.projects[i].title.toLowerCase())) return i;
    }
    return -1;
  };

  /* ---------- Intents ---------- */
  const INTENTS = [
    {
      id: "help",
      kw: ["help", 6, "what can you do", 8, "commands", 4, "how do you work", 5, "options", 2, "menu", 2],
      re: [/what can (you|i) (do|ask)/],
      respond: () => ({
        text:
          "I'm " + BOT_PROFILE.botName + " — I can tell you everything a recruiter needs to know:\n\n" +
          "🧰 Skills & tech stack\n🚀 Projects & case studies\n💼 Experience & education\n" +
          "📅 Availability & location\n📄 Résumé & CV download\n✉️ Contact details — or book a call\n\n" +
          "Or say things like “take me to projects” and I'll navigate for you.",
        chips: ["What's his stack?", "Show projects", "Book a call", "Fun fact"],
      }),
    },
    {
      id: "greeting",
      kw: ["hi", 5, "hello", 5, "hey", 5, "hiya", 4, "yo", 3, "hey there", 5, "good morning", 5, "good afternoon", 5, "good evening", 5, "selam", 6, "salam", 4, "greetings", 4, "howdy", 4, "hola", 3, "sup", 3],
      re: [/^(hi|hey|hello|yo|sup|hiya|howdy)[\s!?.]*$/],
      respond: () => {
        const h = parseInt(new Intl.DateTimeFormat("en-GB", { timeZone: SITE.timeZone, hour: "numeric", hour12: false }).format(new Date()), 10);
        const part = h < 12 ? "morning" : h < 17 ? "afternoon" : "evening";
        return {
          text: `Good ${part}! 👋 Great to meet you. Ask me about Messay's skills, projects, experience — or how to hire him.`,
          chips: ["What's his stack?", "Show projects", "Book a call", "Is he available?"],
        };
      },
    },
    {
      id: "who-bot",
      kw: ["are you a bot", 8, "are you real", 7, "are you human", 7, "are you ai", 7, "who are you", 6, "what are you", 5],
      respond: () => ({
        text:
          "I'm " + BOT_PROFILE.botName + " 🤖 — a little AI that lives in this website and knows everything about Messay: his skills, projects, and how to reach him.\n\nNo servers, no waiting — I run right here in your browser. And yes, Messay himself is very real and very hireable. 😄",
        chips: ["What can you do?", "Tell me about Messay", "Surprise me"],
      }),
    },
    {
      id: "about",
      kw: ["about", 3, "tell me about", 5, "who is messay", 7, "who is he", 6, "bio", 4, "background", 3, "himself", 3, "summary", 3, "introduce", 4],
      re: [/tell me about (him|messay)/],
      respond: () => ({
        text:
          `${SITE.name} is a ${SITE.role} based in ${SITE.location}. A Computer Science graduate (HILCOE), he builds across the stack: mobile apps with React Native + Supabase, Telegram Mini Apps, and web apps with React/Next.js.\n\nHe's shipped production software for real clients — including a school sports platform used across Addis Ababa — and pairs clean code with genuine UI/UX awareness and AI-assisted workflows.`,
        chips: ["What's his stack?", "Show projects", "His experience", "Is he available?"],
        actions: [ACT.resume, ACT.downloadCV],
      }),
    },
    {
      id: "skills-frontend",
      kw: ["frontend", 6, "front end", 6, "front-end", 6, "ui", 3, "react", 4, "css", 3, "javascript", 3, "typescript", 3, "interface", 2],
      re: [/front.?end/],
      respond: () => ({
        text: "On the frontend & mobile side, Messay's toolkit looks like this:\n\n" + skillSummary(SITE.skillGroups[0]) + "\n\nFrom React web apps to React Native mobile apps and Telegram Mini Apps — one codebase mindset, every screen.",
        chips: ["And backend?", "Tools & DevOps?", "Show projects"],
        actions: [ACT.skills],
      }),
    },
    {
      id: "skills-backend",
      kw: ["backend", 6, "back end", 6, "back-end", 6, "api", 4, "apis", 4, "server", 3, "database", 4, "sql", 3, "node", 3, "python", 3],
      re: [/back.?end/],
      respond: () => ({
        text: "On the backend, he's solid here:\n\n" + skillSummary(SITE.skillGroups[1]) + "\n\nREST or GraphQL, schema design, auth, caching — he owns the whole request lifecycle.",
        chips: ["And frontend?", "Tools & DevOps?", "Show projects"],
        actions: [ACT.skills],
      }),
    },
    {
      id: "skills-tools",
      kw: ["devops", 5, "tools", 4, "docker", 4, "git", 3, "ci/cd", 4, "deployment", 3, "linux", 3, "workflow", 3],
      respond: () => ({
        text: "Tools & workflow he runs daily:\n\n" + skillSummary(SITE.skillGroups[2]) + "\n\nGit discipline, clean commits, and CI that actually passes. ✔️",
        chips: ["Frontend skills", "Backend skills", "Show projects"],
        actions: [ACT.skills],
      }),
    },
    {
      id: "skills",
      kw: ["skills", 5, "stack", 4, "tech stack", 6, "technologies", 4, "tech", 2, "what does he know", 6, "programming languages", 5, "expertise", 4, "proficient", 3, "strong in", 3],
      re: [/what.*(skills|stack|technologies)/, /does he know/],
      respond: () => ({
        text:
          "Messay is genuinely full-stack — web and mobile. The short version:\n\n" +
          "📱 Frontend & Mobile — React.js, Next.js, React Native + Expo, TypeScript, Tailwind\n⚙️ Backend & Data — Node.js/NestJS, Express, FastAPI, PostgreSQL, Supabase, Firebase\n🧰 Tools — Git/GitLab CI-CD, Docker, JWT/OAuth 2.0/RBAC, WebSockets, AI workflows\n\nWant the deep dive with confidence levels?",
        chips: ["Frontend detail", "Backend detail", "Tools & DevOps"],
        actions: [ACT.skills],
      }),
    },
    {
      id: "project-detail",
      kw: ["student sports hub", 14, "sports hub", 12, "sports app", 10, "business forms", 14, "forms app", 10, "telegram mini app", 12, "mini app", 8, "telegram", 7, "dewel", 10, "meteku", 10, "sports", 5],
      respond: (norm) => {
        const i = findProject(norm);
        if (i < 0) return INTENTS.find((x) => x.id === "projects").respond();
        const p = SITE.projects[i];
        lastProject = i;
        return {
          text: `${p.glyph} ${p.title} (${p.year}) — ${p.categoryLabel}\n\n${p.description}\n\nHighlights:\n${p.highlights.slice(0, 3).map((h) => "• " + h).join("\n")}`,
          chips: ["Another project", "All projects", "His stack"],
          actions: [{ label: "Open full case study", icon: "🔍", run: () => ACTIONS.openProject(i) }],
        };
      },
    },
    {
      id: "projects",
      kw: ["projects", 6, "project", 4, "portfolio", 5, "work samples", 6, "what has he built", 7, "case studies", 5, "things he made", 6, "show me something", 5, "built", 2, "shipped", 3],
      re: [/show (me )?(his |the )?projects/, /what.*(built|made|shipped)/],
      respond: () => ({
        text:
          "Here's a taste of what he's shipped:\n\n" +
          SITE.projects.map(projectBlurb).join("\n") +
          "\n\nSay a project's name (e.g. “tell me about Gebeya”) and I'll give you the full story.",
        chips: ["Tell me about Gebeya", "Tell me about BunaPOS", "Surprise me"],
        actions: [ACT.projects],
      }),
    },
    {
      id: "experience",
      kw: ["experience", 5, "work history", 6, "job history", 6, "career", 4, "where has he worked", 7, "previous roles", 5, "employment", 4, "worked", 3, "roles", 2],
      re: [/work experience/],
      respond: () => ({
        text:
          "Messay's journey so far:\n\n" +
          SITE.timeline.filter((t) => t.kind === "work").map((t) => `💼 ${t.role} — ${t.org} (${t.date})`).join("\n") +
          "\n\nHe's done everything from scrappy intern fixes to owning products end-to-end. The full timeline is on this page.",
        chips: ["His education", "Skills", "See projects"],
        actions: [ACT.experience],
      }),
    },
    {
      id: "education",
      kw: ["education", 5, "degree", 5, "university", 5, "college", 4, "school", 2, "studied", 4, "graduate", 3, "bsc", 5, "diploma", 4],
      respond: () => {
        const edu = SITE.timeline.find((t) => t.kind === "edu");
        return {
          text: edu
            ? `🎓 ${edu.role} — ${edu.org} (${edu.date})\n\n${edu.points.join("\n")}\n\nBut honestly? His GitHub commits say more than any diploma. 😄`
            : "Check the experience section for his academic background!",
          chips: ["His experience", "Skills", "Open résumé"],
          actions: [ACT.resume],
        };
      },
    },
    {
      id: "hire",
      kw: ["hire", 8, "hiring", 8, "recruit", 6, "recruiter", 5, "job offer", 6, "position", 3, "role", 2, "opportunity", 4, "join our team", 7, "join the team", 7, "work with us", 6, "interested in him", 6, "interview", 5],
      re: [/(hire|recruit)/, /we('re| are) (looking|hiring)/],
      respond: () => ({
        text:
          "Excellent instincts! 🎯 Here's the pitch:\n\n" +
          "✅ " + BOT_PROFILE.availability + "\n✅ Shipped production apps for real clients (mobile + Telegram)\n✅ Full stack: React Native, Next.js, NestJS, Supabase\n✅ Starts " + BOT_PROFILE.noticePeriod.toLowerCase() + "\n\n" +
          "The fastest way is a quick email — or grab a slot on his calendar right now.",
        chips: ["Book a call", "Get his contact", "His salary expectations"],
        actions: [ACT.bookCall, ACT.copyEmail, ACT.resume],
      }),
    },
    {
      id: "availability",
      kw: ["available", 6, "availability", 6, "open to work", 7, "when can he start", 7, "start date", 5, "notice period", 6, "free", 2, "capacity", 3, "remote", 4, "relocation", 5, "relocate", 5, "willing to move", 6, "timezone", 4, "time zone", 4],
      respond: (norm) => {
        const reloc = /reloc|move|onsite|on-site/.test(norm);
        const remote = /remote|timezone|time zone/.test(norm);
        let text = "📅 " + BOT_PROFILE.availability;
        if (remote || reloc) text += "\n\n🌍 " + BOT_PROFILE.remote;
        if (hasTerm(norm, "notice period") || /start/.test(norm)) text += "\n\n⚡ Notice period: " + BOT_PROFILE.noticePeriod;
        return {
          text,
          chips: ["Book a call", "Get his contact", "His salary expectations"],
          actions: [ACT.bookCall, ACT.contact],
        };
      },
    },
    {
      id: "salary",
      kw: ["salary", 7, "rate", 4, "pay", 4, "compensation", 6, "expected salary", 8, "how much does he cost", 8, "budget", 3, "wage", 5],
      respond: () => ({
        text: "💰 " + BOT_PROFILE.salary,
        chips: ["Get his contact", "Is he available?", "Open résumé"],
        actions: [ACT.email],
      }),
    },
    {
      id: "book",
      kw: ["book a call", 9, "book a meeting", 9, "book", 4, "schedule", 6, "meeting", 5, "calendar", 6, "cal.com", 10, "interview call", 8, "set up a call", 8, "hop on a call", 8, "quick call", 7, "video call", 6, "zoom", 4, "google meet", 5, "time to talk", 6, "slot", 4, "appointment", 5, "reserve", 3],
      re: [/book (a |an |the )?(call|meeting|chat|time|slot)/, /schedule (a |the )?(call|meeting|chat|interview)/],
      respond: () => ({
        text:
          "📅 Great idea — talking beats emailing!\n\nMessay uses Cal.com: pick any slot that suits you and you'll get an instant confirmation. 15 minutes is plenty for a first chat.",
        chips: ["Get his contact", "Is he available?", "His salary expectations"],
        actions: [ACT.bookCall, ACT.downloadCV],
      }),
    },
    {
      id: "contact",
      kw: ["contact", 6, "email", 4, "e-mail", 4, "reach", 4, "get in touch", 7, "phone", 3, "talk to him", 6, "message him", 5, "contact info", 7, "address", 2, "schedule", 3, "call", 3, "meet", 2],
      re: [/how (can|do) i (contact|reach)/],
      respond: () => ({
        text: `The fastest routes to Messay:\n\n✉️ ${SITE.email}\n📞 ${SITE.phone}\n🔗 ${SITE.linkedin}\n\nHe replies within 24 hours — usually much faster. Prefer to talk live? Book a slot on his calendar.`,
        chips: ["Copy email", "Book a call", "His availability"],
        actions: [ACT.copyEmail, ACT.bookCall, ACT.email],
      }),
    },
    {
      id: "location",
      kw: ["location", 5, "where is he", 6, "where based", 6, "based in", 4, "where does he live", 7, "country", 3, "city", 3, "addis", 5, "ethiopia", 5, "what time is it", 6, "local time", 6, "his time", 5],
      respond: () => {
        const t = new Intl.DateTimeFormat("en-GB", { timeZone: SITE.timeZone, hour: "2-digit", minute: "2-digit" }).format(new Date());
        return {
          text: `📍 Messay is based in ${SITE.location} (GMT+3).\n\nRight now it's ${t} for him.\n\nHe's fully set up for remote collaboration across time zones — and open to relocation for the right role.`,
          chips: ["Is he available?", "Get his contact"],
        };
      },
    },
    {
      id: "languages",
      kw: ["languages", 5, "speak", 3, "speaks", 4, "amharic", 6, "english", 3, "bilingual", 5, "fluent", 3, "language barrier", 5],
      respond: () => ({
        text: "🗣️ " + BOT_PROFILE.languages + "\n\nAll documentation, commits and communication in English — no friction for international teams.",
        chips: ["His experience", "Get his contact"],
      }),
    },
    {
      id: "resume",
      kw: ["resume", 6, "résumé", 6, "cv", 6, "curriculum vitae", 7, "download", 2],
      re: [/(resume|résumé|cv)/],
      respond: () => ({
        text: "📄 Sure! His résumé has the full story — experience, education, skills — formatted for a quick skim (recruiter-friendly, promise).\n\nYou can grab the PDF directly, or open the print-friendly page.",
        actions: [ACT.downloadCV, ACT.resume, ACT.contact],
      }),
    },
    {
      id: "certificates",
      kw: ["certificate", 6, "certificates", 7, "certification", 6, "certified", 4, "credentials", 4, "training", 3, "courses", 3, "mmcy", 8, "modeling", 4],
      respond: () => ({
        text:
          "🎓 Beyond the CS degree (HILCOE School of Computer Science & Technology), Messay holds a:\n\n• 2D & 3D Modeling for Modern Product Development — MMCY Workforce Training Certificate\n\nDesign thinking, meet engineering. There's more context in the “Beyond the code” section on this page.",
        chips: ["His education", "Volunteering?", "Show projects"],
        actions: [{ label: "See beyond the code", icon: "🤝", run: () => ACTIONS.scroll("beyond") }],
      }),
    },
    {
      id: "volunteering",
      kw: ["volunteer", 8, "volunteering", 9, "volunteer work", 10, "red cross", 10, "ywca", 10, "blood donation", 8, "community", 3, "charity", 4, "ngo", 4, "fundraising", 5],
      respond: () => ({
        text:
          "🤝 Messay gives back:\n\n• Red Cross Ethiopia — organized high-school blood donation drives (2018)\n• YWCA — Lead Unit Coordinator & Teacher: ran a teaching team, daily academic operations, and a fundraising initiative that supplied 100+ students\n\nLeadership and reliability aren't just on his CV — they're habits.",
        chips: ["His experience", "Certificates?", "Get his contact"],
        actions: [{ label: "See beyond the code", icon: "🤝", run: () => ACTIONS.scroll("beyond") }],
      }),
    },
    {
      id: "socials",
      kw: ["github", 6, "linkedin", 6, "twitter", 3, "social", 3, "profiles", 3, "code samples", 5],
      respond: () => ({
        text: `🐙 His code lives on GitHub: ${SITE.github}\n\nCommit history doesn't lie — go see the green squares. 🟩`,
        actions: [ACT.github, ACT.contact],
      }),
    },
    {
      id: "nav",
      kw: ["take me to", 6, "go to", 5, "show me the", 4, "scroll to", 6, "navigate", 5, "open the", 3, "jump to", 6],
      respond: (norm) => {
        const targets = [
          ["about", "about"], ["skills", "skills"], ["project", "projects"], ["work", "projects"],
          ["experience", "experience"], ["timeline", "experience"], ["testimonial", "testimonials"],
          ["contact", "contact"], ["top", "home"], ["home", "home"],
        ];
        for (const [k, id] of targets) {
          if (norm.includes(k)) {
            ACTIONS.scroll(id);
            return { text: `On it — taking you to ${id === "home" ? "the top" : "the " + id + " section"}! 🛸`, chips: ["What else can you do?"] };
          }
        }
        return { text: "Where would you like to go? I can jump to About, Skills, Projects, Experience or Contact.", chips: ["Go to projects", "Go to contact", "Go to skills"] };
      },
    },
    {
      id: "theme",
      kw: ["dark mode", 6, "light mode", 6, "theme", 4, "switch theme", 7, "change color", 5, "too bright", 5, "too dark", 5],
      respond: () => {
        ACTIONS.theme();
        return { text: "Done — flipped the theme for you! ◐ Looking sharp either way.", chips: ["Fun fact", "Show projects"] };
      },
    },
    {
      id: "surprise",
      kw: ["surprise", 6, "easter egg", 7, "something fun", 6, "party", 4, "confetti", 5, "celebrate", 4, "bored", 3],
      respond: () => {
        ACTIONS.confetti();
        return { text: "🎉 PARTY MODE! You asked for it.\n\n(psst — the Konami code works on this site too…)", chips: ["Fun fact", "What can you do?"] };
      },
    },
    {
      id: "funfact",
      kw: ["fun fact", 7, "joke", 5, "something interesting", 5, "hobby", 4, "hobbies", 4, "coffee", 3, "buna", 5, "tell me something", 4, "another one", 6, "one more", 4],
      respond: () => ({
        text: rand(BOT_PROFILE.funFacts),
        chips: ["Another one!", "Show projects", "Get his contact"],
      }),
    },
    {
      id: "thanks",
      kw: ["thank", 5, "thanks", 5, "thank you", 6, "great", 2, "awesome", 3, "cool", 2, "nice", 2, "perfect", 3, "amazing", 3],
      respond: () => ({
        text: rand([
          "Anytime! 😊 Anything else you'd like to know?",
          "You're welcome! He'd love to hear from you, by the way. ✉️",
          "My pleasure! Fun tip: press ⌘K anywhere on this site.",
        ]),
        chips: ["Get his contact", "Show projects", "Open résumé"],
      }),
    },
    {
      id: "bye",
      kw: ["bye", 5, "goodbye", 5, "see you", 4, "later", 2, "good night", 4, "farewell", 4],
      respond: () => ({
        text: "👋 Talk soon! If anything comes to mind, I'm right here in the corner.\n\nAnd if you're a recruiter reading this… he really does reply within 24 hours. 😉",
        chips: ["Actually, one more thing…"],
      }),
    },
    {
      id: "more",
      kw: ["tell me more", 6, "more", 3, "go on", 4, "continue", 4, "elaborate", 5, "details", 3, "and then", 3],
      respond: (norm) => {
        if (!lastIntent) return INTENTS.find((x) => x.id === "help").respond();
        const deep = {
          skills: () => INTENTS.find((x) => x.id === "skills-frontend").respond(),
          "skills-frontend": () => INTENTS.find((x) => x.id === "skills-backend").respond(),
          "skills-backend": () => INTENTS.find((x) => x.id === "skills-tools").respond(),
          projects: () => {
            const i = lastProject === null ? 0 : (lastProject + 1) % SITE.projects.length;
            return INTENTS.find((x) => x.id === "project-detail").respond((" " + SITE.projects[i].title.toLowerCase() + " ").trim());
          },
          experience: () => INTENTS.find((x) => x.id === "education").respond(),
          hire: () => INTENTS.find((x) => x.id === "contact").respond(),
        };
        return (deep[lastIntent] || INTENTS.find((x) => x.id === "projects").respond)();
      },
    },
  ];

  /* ---------- Matching ---------- */
  function match(norm) {
    let best = null, bestScore = 0;
    for (const intent of INTENTS) {
      let score = 0;
      if (intent.kw) {
        for (let i = 0; i < intent.kw.length; i += 2) {
          if (hasTerm(norm, intent.kw[i])) score += intent.kw[i + 1];
        }
      }
      if (intent.re) {
        for (const r of intent.re) if (r.test(norm)) score += 6;
      }
      if (score > bestScore) { bestScore = score; best = intent; }
    }
    return bestScore >= 3 ? best : null;
  }

  function fallback() {
    return {
      text: rand([
        "Hmm, that one's outside my training data 😅 I know skills, projects, experience, availability and contact best — try one of these?",
        "I'm a small bot with a big specialty: Messay! Ask me about his stack, his projects, or how to hire him.",
        "Good question — but I'll give you a better answer if you ask about his skills, projects, experience or contact info 🙂",
      ]),
      chips: ["What's his stack?", "Show projects", "Is he available?", "What can you do?"],
    };
  }

  function think(raw) {
    const norm = normalize(raw);
    const intent = match(norm);
    if (intent) {
      lastIntent = intent.id;
      return intent.respond ? intent.respond(norm, raw) : { text: "…" };
    }
    return fallback();
  }

  /* ============================================================
     UI layer
     ============================================================ */
  function esc(el, text) { el.textContent = text; return el; }

  function addMessage(role, payload) {
    const row = document.createElement("div");
    row.className = "msg-row " + role;
    if (role === "bot") {
      const ava = document.createElement("div");
      ava.className = "msg-ava";
      ava.textContent = "🤖";
      row.appendChild(ava);
    }
    const bubble = document.createElement("div");
    bubble.className = "msg";
    esc(bubble, payload.text || "");

    if (payload.chips?.length) {
      const chips = document.createElement("div");
      chips.className = "msg-chips";
      payload.chips.forEach((c) => {
        const b = document.createElement("button");
        b.className = "mchip";
        b.type = "button";
        b.textContent = c;
        b.addEventListener("click", () => sendUser(c));
        chips.appendChild(b);
      });
      bubble.appendChild(chips);
    }
    if (payload.actions?.length) {
      const acts = document.createElement("div");
      acts.className = "msg-actions";
      payload.actions.forEach((a) => {
        const b = document.createElement("button");
        b.className = "mact" + (a.ghost ? " ghost" : "");
        b.type = "button";
        b.innerHTML = `<span aria-hidden="true">${a.icon || "▸"}</span>`;
        b.appendChild(document.createTextNode(a.label));
        b.addEventListener("click", () => {
          a.run();
          if (a.label === "Copy email") addMessage("bot", { text: "Copied! 📋 His email is in your clipboard — now it's destiny." });
        });
        acts.appendChild(b);
      });
      bubble.appendChild(acts);
    }
    row.appendChild(bubble);
    els.body.appendChild(row);
    scrollBottom();
    return row;
  }

  function scrollBottom() { els.body.scrollTop = els.body.scrollHeight; }

  let typingEl = null;
  function showTyping() {
    typingEl = document.createElement("div");
    typingEl.className = "msg-row bot";
    typingEl.innerHTML = `<div class="msg-ava">🤖</div><div class="msg typing"><i></i><i></i><i></i></div>`;
    els.body.appendChild(typingEl);
    scrollBottom();
  }
  function hideTyping() { typingEl?.remove(); typingEl = null; }

  async function sendUser(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    els.input.value = "";
    els.send.disabled = true;
    addMessage("user", { text: trimmed });

    const reply = think(trimmed);
    showTyping();
    const delay = 420 + Math.min(1300, (reply.text || "").length * 5) + Math.random() * 300;
    await sleep(delay);
    hideTyping();
    addMessage("bot", reply);
  }

  /* ---------- Open / close ---------- */
  function open() {
    if (opened) return;
    opened = true;
    sessionStorage.setItem("mm-bot-opened", "1");
    document.body.classList.add("bot-open");
    els.panel.classList.add("open");
    els.launcher.setAttribute("aria-expanded", "true");
    els.badge.hidden = true;
    els.teaser.classList.remove("show");
    setTimeout(() => els.input.focus(), 250);

    if (!els.body.children.length) {
      greet();
    }
  }
  function close() {
    opened = false;
    document.body.classList.remove("bot-open");
    els.panel.classList.remove("open");
    els.launcher.setAttribute("aria-expanded", "false");
    els.launcher.focus({ preventScroll: true });
  }
  function toggle() { opened ? close() : open(); }

  async function greet() {
    showTyping();
    await sleep(700);
    hideTyping();
    addMessage("bot", {
      text: `Hi there! 👋 I'm ${BOT_PROFILE.botName}, Messay's AI assistant.\n\nRecruiters ask me about his skills, projects and availability — or say "hire him" and I'll get you sorted. 😄`,
      chips: ["What can you do?", "What's his stack?", "Book a call", "Is he available?"],
    });
  }

  /* ---------- Init ---------- */
  function init() {
    els.launcher = $("#bot-launcher");
    els.panel = $("#bot-panel");
    els.body = $("#bot-body");
    els.input = $("#bot-input");
    els.send = $("#bot-send");
    els.close = $("#bot-close");
    els.badge = $("#bot-badge");
    els.teaser = $("#bot-teaser");
    if (!els.launcher) return;

    els.launcher.addEventListener("click", toggle);
    els.close.addEventListener("click", close);
    els.send.addEventListener("click", () => sendUser(els.input.value));
    els.input.addEventListener("input", () => { els.send.disabled = !els.input.value.trim(); });
    els.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); sendUser(els.input.value); }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && opened) close();
    });

    // Nudge: badge + teaser bubble for first-time visitors this session
    if (!sessionStorage.getItem("mm-bot-opened")) {
      setTimeout(() => { if (!opened) els.badge.hidden = false; }, 2200);
      setTimeout(() => { if (!opened) els.teaser.classList.add("show"); }, 4600);
      setTimeout(() => els.teaser.classList.remove("show"), 13000);
      els.teaser.addEventListener("click", open);
    }

    // Command palette integration (defined in main.js)
    window.addEventListener("bot:open", open);
  }

  document.addEventListener("DOMContentLoaded", init);

  return { open, close, toggle, ask: (t) => sendUser(t) };
})();
