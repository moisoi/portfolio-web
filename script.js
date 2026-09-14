const projects = {
  atlas: {
    title: "Atlas",
    type: "Product direction · Web experience",
    summary: "A navigational concept for turning a broad decision into a confident next step — equal parts utility, atmosphere, and forward motion.",
    focus: "Information hierarchy, product story, responsive interaction",
    question: "How can a complex choice feel more like orientation than overwhelm?",
    role: "Experience direction, interface design, motion concepts, prototype",
    quote: "A strong first impression should make the next action feel obvious.",
    art: "ATLAS\n/ 01",
    color: "#a294ff"
  },
  signal: {
    title: "Signal OS",
    type: "Design system · Product experience",
    summary: "A flexible UI language designed to help a product team make the everyday information feel calm, legible, and ready to grow.",
    focus: "Component thinking, interaction states, product language",
    question: "What if consistency made the work feel more expressive — not less?",
    role: "System principles, UI patterns, prototyping, documentation direction",
    quote: "The best systems reduce the cost of making the next good decision.",
    art: "SIGNAL\n/ OS",
    color: "#d7ff4f"
  },
  archive: {
    title: "Archive No. 4",
    type: "Editorial platform · Web design",
    summary: "An editorial playground shaped around pace, texture, and an unhurried way to encounter stories that deserve a second look.",
    focus: "Editorial rhythm, art direction, accessible reading patterns",
    question: "How can a digital archive invite discovery rather than demand attention?",
    role: "Creative direction, web design, interaction choreography",
    quote: "The interface can set the tempo before the first word is read.",
    art: "ARCHIVE\n/ 04",
    color: "#ff7c48"
  },
  pace: {
    title: "Pace",
    type: "Mobile product · Interaction design",
    summary: "A deliberately human dashboard for noticing progress without turning every moment into another metric to optimise.",
    focus: "Mobile flow, visual feedback, moments of reflection",
    question: "Can a progress tool create momentum without adding pressure?",
    role: "Product framing, flow design, interface craft, interactive prototype",
    quote: "A useful measure should leave people feeling more capable, not more watched.",
    art: "PACE\n/ 01",
    color: "#b4a6ff"
  }
};

const signals = {
  impact: {
    eyebrow: "01 / Impact",
    title: "Clarity compounds.",
    copy: "I look for the leverage point: the decision, journey, or system that makes all the work after it move more smoothly. The goal is not surface novelty — it is a change people can feel and teams can build on."
  },
  craft: {
    eyebrow: "02 / Craft",
    title: "Details are a form of care.",
    copy: "The microcopy, the loading state, the space around a hard choice — none of it is too small to shape the experience. I care about the logic beneath the polish and the personality inside the system."
  },
  fit: {
    eyebrow: "03 / Fit",
    title: "Ambition loves a good collaborator.",
    copy: "My best work happens with curious, candid people who value a strong point of view, an open working process, and the discipline to keep returning to the human on the other side of the screen."
  }
};

const body = document.body;
const toast = document.querySelector('.toast');
let toastTimer;
let activeCommandIndex = 0;

function showToast(message) {
  toast.querySelector('p').textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000);
}

function openDialog(dialog) {
  if (!dialog.open) {
    dialog.showModal();
    body.classList.add('modal-open');
  }
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
  if (!document.querySelector('dialog[open]')) body.classList.remove('modal-open');
}

// Reveal elements only after they enter the viewport, keeping first paint calm and intentional.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-up').forEach((item) => revealObserver.observe(item));

// Reading progress + a soft ambient cursor light. Motion is disabled by the stylesheet for reduced-motion users.
const progress = document.querySelector('.scroll-progress span');
const cursorGlow = document.querySelector('.cursor-glow');
window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll ? (window.scrollY / maxScroll) * 100 : 0}%`;
}, { passive: true });
window.addEventListener('pointermove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
}, { passive: true });

// Project filters
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach((button) => button.classList.toggle('active', button === filter));
    cards.forEach((card) => {
      const shouldShow = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.classList.toggle('is-filtered', !shouldShow);
    });
    showToast(category === 'all' ? 'Showing all selected work.' : `Showing ${filter.textContent.trim()} work.`);
  });
});

// Project case-study dialog
const projectModal = document.querySelector('#project-modal');
function openProject(key) {
  const project = projects[key];
  if (!project) return;
  document.querySelector('#modal-type').textContent = project.type;
  document.querySelector('#modal-title').textContent = project.title;
  document.querySelector('#modal-summary').textContent = project.summary;
  document.querySelector('#modal-focus').textContent = project.focus;
  document.querySelector('#modal-question').textContent = project.question;
  document.querySelector('#modal-role').textContent = project.role;
  document.querySelector('#modal-quote').textContent = project.quote;
  const art = document.querySelector('#modal-art');
  art.style.background = project.color;
  art.querySelector('span').innerHTML = project.art.replace('\n', '<br>');
  openDialog(projectModal);
}
cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (!event.target.closest('button') || event.target.closest('.round-arrow')) openProject(card.dataset.project);
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

// Recruiter brief and signal cards
const briefModal = document.querySelector('#brief-modal');
function openBrief() {
  closeCommand();
  window.setTimeout(() => openDialog(briefModal), 80);
}
document.querySelectorAll('.brief-trigger').forEach((trigger) => trigger.addEventListener('click', openBrief));
document.querySelector('.print-brief').addEventListener('click', () => {
  window.print();
});

const signalModal = document.querySelector('#signal-modal');
document.querySelectorAll('.signal-card').forEach((card) => {
  card.addEventListener('click', () => {
    const signal = signals[card.dataset.modal];
    document.querySelector('#signal-modal-overline').textContent = signal.eyebrow;
    document.querySelector('#signal-modal-title').textContent = signal.title;
    document.querySelector('#signal-modal-copy').textContent = signal.copy;
    openDialog(signalModal);
  });
});

// Modal closers; clicking the dark dialog gutter also closes the panel.
document.querySelectorAll('.modal').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) body.classList.remove('modal-open');
  });
  dialog.querySelectorAll('.modal-close, [data-close-on-click]').forEach((button) => {
    button.addEventListener('click', () => closeDialog(dialog));
  });
});

// Quick-navigation palette
const commandOverlay = document.querySelector('.command-overlay');
const commandInput = document.querySelector('#command-input');
const commandItems = [...document.querySelectorAll('[data-command]')];
function openCommand() {
  commandOverlay.classList.add('open');
  commandOverlay.setAttribute('aria-hidden', 'false');
  body.classList.add('menu-open');
  commandInput.value = '';
  activeCommandIndex = 0;
  window.setTimeout(() => commandInput.focus(), 100);
}
function closeCommand() {
  commandOverlay.classList.remove('open');
  commandOverlay.setAttribute('aria-hidden', 'true');
  body.classList.remove('menu-open');
}
function getVisibleCommands() {
  return commandItems.filter((item) => item.style.display !== 'none');
}
function highlightCommand() {
  getVisibleCommands().forEach((item, index) => item.style.outline = index === activeCommandIndex ? '2px solid #6e59e6' : 'none');
}
document.querySelectorAll('.command-trigger').forEach((trigger) => trigger.addEventListener('click', openCommand));
commandOverlay.addEventListener('click', (event) => { if (event.target === commandOverlay) closeCommand(); });
commandItems.forEach((item) => item.addEventListener('click', () => {
  if (!item.classList.contains('brief-trigger')) closeCommand();
}));
commandInput.addEventListener('input', () => {
  const term = commandInput.value.toLowerCase().trim();
  commandItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
  activeCommandIndex = 0;
  highlightCommand();
});
commandInput.addEventListener('keydown', (event) => {
  const available = getVisibleCommands();
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    activeCommandIndex = (activeCommandIndex + (event.key === 'ArrowDown' ? 1 : -1) + available.length) % available.length;
    highlightCommand();
  }
  if (event.key === 'Enter' && available[activeCommandIndex]) available[activeCommandIndex].click();
});

window.addEventListener('keydown', (event) => {
  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if (event.key === 'Escape') {
    closeCommand();
    document.querySelectorAll('.modal[open]').forEach(closeDialog);
  }
  if (!isTyping && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    commandOverlay.classList.contains('open') ? closeCommand() : openCommand();
  }
  if (!isTyping && event.key.toLowerCase() === 'b') openBrief();
  if (!isTyping && event.key === '1') document.querySelector('[data-filter="all"]').click();
  if (!isTyping && event.key === '2') document.querySelector('[data-filter="product"]').click();
  if (!isTyping && event.key === '3') document.querySelector('[data-filter="system"]').click();
  if (!isTyping && event.key === '4') document.querySelector('[data-filter="web"]').click();
});

// Useful recruiter affordance: a one-click, feedback-confirmed address copy.
document.querySelector('.copy-email').addEventListener('click', async () => {
  const email = document.querySelector('.copy-email').dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied — speak soon.');
  } catch {
    showToast(`Email: ${email}`);
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
