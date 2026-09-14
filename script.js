const caseStudies = {
  sports: {
    kicker: 'P.01 / Mobile · Education',
    title: 'Student Sports Hub',
    lede: 'A real-time mobile home for student sport — designed for grades 1–12 students and parents across Addis Ababa.',
    problem: 'Sports updates were scattered. Students, parents, and schools needed one responsive place to find stories, fixtures, rosters, and the latest activity.',
    build: 'Built a clear mobile experience that brings real-time stories, match schedules, team rosters, and sports updates into a single accessible app.',
    stack: 'React Native · Supabase · Expo',
    line: 'Designed with a database architecture ready to support multiple schools at once.',
    color: '#70ddd9',
    art: 'SPORTS<br />HUB'
  },
  forms: {
    kicker: 'P.02 / Web · Operations',
    title: 'Business Forms Mini App',
    lede: 'A Telegram Mini App that turns important internal paperwork into a practical digital workflow.',
    problem: 'Manual forms for petty cash, purchase orders, and attendance slowed routine operations and made reporting harder to manage.',
    build: 'Created an operations-focused Mini App for Meteku Teshome General Work PLC, with forms, workflow support, and report exports for client management.',
    stack: 'React + Vite · Node.js · NestJS',
    line: 'Replaced manual paperwork across three workflows with an exportable digital process.',
    color: '#ffab5a',
    art: 'BUSINESS<br />FORMS'
  }
};

const chatAnswers = [
  {
    matches: ['mmcy', 'operations', 'intern'],
    answer: 'At MMCY, Messay worked as an Operations Intern from June 22 to July 23, 2026. He supported company-wide operations with a technology-first mindset: helping teams with shared digital tools, tracking follow-through, documenting recurring processes, and noticing small workflow blockers before they slowed the day down.'
  },
  {
    matches: ['sports', 'dewel', 'student'],
    answer: 'For Dewel Marketing and Consultancy, Messay built Student Sports Hub: a React Native + Supabase mobile app for grades 1–12 students and parents. It includes real-time stories, match schedules, team rosters, and sports updates, with an architecture intended to support multiple schools.'
  },
  {
    matches: ['forms', 'meteku', 'telegram', 'mini app'],
    answer: 'For Meteku Teshome General Work PLC, Messay built a Business Forms Telegram Mini App. React + Vite powers the frontend and Node.js + NestJS the backend. It digitises petty cash requests, purchase orders, employee attendance, and exportable business reports.'
  },
  {
    matches: ['stack', 'skill', 'technology', 'tech'],
    answer: 'Messay’s core stack includes React, Next.js, TypeScript, React Native, Expo, Node.js, NestJS, Express, FastAPI, PostgreSQL, MySQL, Supabase, Firebase, Redis, Docker, Git, REST APIs, WebSockets, JWT, OAuth 2.0, and RBAC.'
  },
  {
    matches: ['contact', 'call', 'email', 'available', 'hire'],
    answer: 'The fastest way to reach Messay is messaymohammed@gmail.com or +251 900 651 948. He is open to full-time roles and freelance contracts.'
  },
  {
    matches: ['education', 'graduate', 'university', 'school'],
    answer: 'Messay holds a Bachelor of Computer Science from HILCOE School of Computer Science and Technology, completed between September 2020 and July 2025 in Addis Ababa.'
  }
];

const body = document.body;
const toast = document.querySelector('.toast');
let toastTimer;

function toastMessage(message) {
  toast.querySelector('p').textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
}

// Animated entrance is intentionally restrained and respects the CSS reduced-motion setting.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const progress = document.querySelector('.progress span');
const navLinks = [...document.querySelectorAll('.primary-nav a')];
const navSections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  let current = '';
  navSections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - window.innerHeight * 0.42) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });

// Project case studies
const caseModal = document.querySelector('#case-modal');
function openCaseStudy(id) {
  const study = caseStudies[id];
  if (!study) return;
  document.querySelector('#case-kicker').textContent = study.kicker;
  document.querySelector('#case-title').textContent = study.title;
  document.querySelector('#case-lede').textContent = study.lede;
  document.querySelector('#case-problem').textContent = study.problem;
  document.querySelector('#case-build').textContent = study.build;
  document.querySelector('#case-stack').textContent = study.stack;
  document.querySelector('#case-line').textContent = study.line;
  const art = document.querySelector('#case-art');
  art.style.background = study.color;
  art.querySelector('span').innerHTML = study.art;
  caseModal.showModal();
  body.classList.add('modal-open');
}
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openCaseStudy(card.dataset.project));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseStudy(card.dataset.project);
    }
  });
});
function closeCaseStudy() {
  if (caseModal.open) caseModal.close();
  body.classList.remove('modal-open');
}
caseModal.querySelector('.modal-close').addEventListener('click', closeCaseStudy);
caseModal.addEventListener('click', (event) => { if (event.target === caseModal) closeCaseStudy(); });
caseModal.querySelector('.case-contact').addEventListener('click', closeCaseStudy);
caseModal.addEventListener('close', () => body.classList.remove('modal-open'));

// Skills use a filter rather than static proficiency claims; it helps recruiters scan the stack by context.
const skillFilters = [...document.querySelectorAll('.skill-filter')];
const skillGroups = [...document.querySelectorAll('.skill-group')];
document.querySelectorAll('[data-level]').forEach((bar) => bar.style.setProperty('--level', bar.dataset.level));
skillFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.skillFilter;
    skillFilters.forEach((item) => item.classList.toggle('active', item === filter));
    skillGroups.forEach((group) => group.classList.toggle('hidden', selected !== 'all' && group.dataset.skillGroup !== selected));
    toastMessage(selected === 'all' ? 'Showing the complete toolkit.' : `Showing ${filter.textContent.trim()} skills.`);
  });
});

// Lightweight, transparent portfolio guide — answers are curated from the résumé, never generated or sent anywhere.
const chatLauncher = document.querySelector('.portfolio-chat-launcher');
const chatPanel = document.querySelector('.portfolio-chat');
const chatClose = document.querySelector('.chat-close');
const chatLog = document.querySelector('.chat-log');
const chatForm = document.querySelector('.chat-form');
const chatInput = chatForm.querySelector('input');
function setChat(open) {
  chatPanel.classList.toggle('open', open);
  chatPanel.setAttribute('aria-hidden', String(!open));
  chatLauncher.setAttribute('aria-expanded', String(open));
  body.classList.toggle('chat-open', open);
  if (open) window.setTimeout(() => chatInput.focus(), 170);
}
function addChatMessage(text, type) {
  const message = document.createElement('div');
  message.className = `chat-message ${type}`;
  message.textContent = text;
  chatLog.append(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function answerQuestion(question) {
  const phrase = question.toLowerCase();
  const response = chatAnswers.find((entry) => entry.matches.some((match) => phrase.includes(match)));
  return response?.answer || 'Messay is a Computer Science graduate and full-stack/mobile developer based in Addis Ababa. Try asking about MMCY, Student Sports Hub, the Business Forms Mini App, his stack, education, or how to get in touch.';
}
function submitQuestion(question) {
  const clean = question.trim();
  if (!clean) return;
  addChatMessage(clean, 'user');
  chatInput.value = '';
  window.setTimeout(() => addChatMessage(answerQuestion(clean), 'bot'), 250);
}
chatLauncher.addEventListener('click', () => setChat(!chatPanel.classList.contains('open')));
chatClose.addEventListener('click', () => setChat(false));
document.querySelectorAll('[data-question]').forEach((button) => button.addEventListener('click', () => submitQuestion(button.dataset.question)));
chatForm.addEventListener('submit', (event) => { event.preventDefault(); submitQuestion(chatInput.value); });

// Quick navigation palette
const commandOverlay = document.querySelector('.command-overlay');
const commandInput = commandOverlay.querySelector('input');
function setCommand(open) {
  commandOverlay.classList.toggle('open', open);
  commandOverlay.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('menu-open', open);
  if (open) window.setTimeout(() => commandInput.focus(), 120);
}
document.querySelector('.nav-command').addEventListener('click', () => setCommand(true));
commandOverlay.addEventListener('click', (event) => { if (event.target === commandOverlay) setCommand(false); });
commandOverlay.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setCommand(false)));
commandInput.addEventListener('input', () => {
  const term = commandInput.value.toLowerCase().trim();
  commandOverlay.querySelectorAll('.command-options a').forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});

// Contact affordance
const copyEmail = document.querySelector('.copy-email');
copyEmail.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyEmail.dataset.email);
    toastMessage('Email copied — speak soon.');
  } catch {
    toastMessage('messaymohammed@gmail.com');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('keydown', (event) => {
  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if (event.key === 'Escape') {
    setCommand(false);
    setChat(false);
    closeCaseStudy();
  }
  if (!isTyping && (event.key.toLowerCase() === 'k' || (event.metaKey && event.key.toLowerCase() === 'k'))) {
    event.preventDefault();
    setCommand(!commandOverlay.classList.contains('open'));
  }
});
