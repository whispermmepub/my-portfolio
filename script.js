/* ════════════════════════════════════════════════════════════
   ✏️  EDIT THIS CONFIG — ကိုယ့်အချက်အလက်တွေ ဒီမှာ ပြောင်းပါ
   ════════════════════════════════════════════════════════════ */
const CONFIG = {
  // ── Basic info ──
  name: "Aung Soe Moe",
  bootName: "AUNG_SOE_MOE",
  alias: "Whisper Of Words",
  role: "Founder — Whisper Of Words Mmepub",
  location: "Myanmar",
  bio:
    "An organization that creates and shares high-quality Myanmar e-books " +
    "for free, including EPUB, KFX.",
  email: "",                    // ကိုယ့် email ထည့်ချင်ရင် ဒီမှာ
  photo: "https://avatars.githubusercontent.com/u/61192036?v=4",  // GitHub avatar photo

  // ── Social links ──
  socials: {
    github: "https://github.com/whispermmepub",
    facebook: "https://www.facebook.com/mmebookwhisper/",
    youtube: "https://www.youtube.com/@whisperofwordsebook",
    twitter: "https://x.com/whisperw69842",
    website: "",
  },

  // ── Skills (အမည်, tag) ──
  skills: {
    Frontend: [
      ["HTML/CSS", "WEB"],
      ["JavaScript", "ES6"],
    ],
    Backend: [
      ["Python", "PY"],
      ["Node.js", "ENV"],
      ["Telegram Bots", "BOT"],
    ],
    Tools: [
      ["Git", "VCS"],
      ["GitHub", "HUB"],
      ["EPUB / KFX", "EBOOK"],
      ["Cloudflare", "CF"],
    ],
  },

  // ── Projects ──
  projects: [
    {
      title: "Group Guardian Bot",
      desc: "Telegram group management + book search bot — link protection, auto-moderation, action logs, AI chat.",
      tags: ["Python", "Telegram", "AI"],
      link: "",
      code: "https://github.com/whispermmepub/group-guardian-bot",
      date: "Aug 2026",
    },
    {
      title: "Gemini Telegram Bot",
      desc: "Gemini-powered Telegram assistant with web search, URL reading, curated notes, and daily messages.",
      tags: ["Python", "Gemini", "Web Search"],
      link: "",
      code: "https://github.com/whispermmepub/gemini-telegram-bot",
      date: "Aug 2026",
    },
    {
      title: "DeepSeek Chat Bot",
      desc: "Free Telegram chat bot — works with Ollama (no API key), Gemini, Groq, or DeepSeek.",
      tags: ["Python", "Ollama", "Telegram"],
      link: "",
      code: "https://github.com/whispermmepub/deepseek-chat-bot",
      date: "Aug 2026",
    },
  ],

  // ── Education ──
  education: [
    {
      school: "Self-taught",
      degree: "Web Development & Automation",
      date: "—",
      note: "Telegram bots, e-book publishing (EPUB/KFX), and small web tools.",
    },
  ],
};

/* ════════════════════════════════════════════════════════════
   Site rendering — ဒီအောက်ကို မပြင်ပါနဲ့
   ════════════════════════════════════════════════════════════ */
const $ = (sel) => document.querySelector(sel);
const year = new Date().getFullYear();
const SECTIONS = [
  ["about", "about.exe"],
  ["skills", "skills.exe"],
  ["projects", "projects.exe"],
  ["contact", "contact.exe"],
  ["education", "education.exe"],
];

/* ── Boot screen ─────────────────────────────────────────── */
function bootLines() {
  return [
    `INITIALIZING ${CONFIG.bootName || "MY_SPACE"} v1.0...`,
    "LOADING MEMORY BANKS [OK]",
    "MOUNTING FILE SYSTEM [OK]",
    "CONNECTING TO API NEXUS...",
    "ESTABLISHING SECURE CONNECTION [OK]",
    "FETCHING SKILLS.EXE [OK]",
    `System Ready • ${year}`,
  ];
}

function runBoot() {
  const linesEl = $("#boot-lines");
  const lines = bootLines();
  let i = 0;
  const timer = setInterval(() => {
    const line = document.createElement("div");
    const isLast = i === lines.length - 1;
    line.innerHTML =
      lines[i].replace("[OK]", '<span class="ok">[OK]</span>') +
      (isLast ? '<span class="cursor"></span>' : "");
    linesEl.appendChild(line);
    i++;
    if (i >= lines.length) {
      clearInterval(timer);
      setTimeout(() => finishBoot(), 900);
    }
  }, 320);

  const skip = () => { clearInterval(timer); finishBoot(); };
  document.addEventListener("keydown", skip, { once: true });
  document.addEventListener("click", skip, { once: true });
}

function finishBoot() {
  const boot = $("#boot");
  if (!boot || boot.classList.contains("done")) return;
  boot.classList.add("done");
  $("#app").classList.remove("hidden");
  setTimeout(() => boot.remove(), 600);
}

/* ── Tabs ────────────────────────────────────────────────── */
function renderTabs() {
  const nav = $("#tabs");
  nav.innerHTML = "";
  SECTIONS.forEach(([id, label], idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.tab = id;
    btn.innerHTML = `<span class="idx">${String(idx + 1).padStart(2, "0")}</span>${label}`;
    btn.addEventListener("click", () => switchTab(id));
    nav.appendChild(btn);
  });
}

function switchTab(id) {
  document.querySelectorAll("#tabs button").forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
  document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === `tab-${id}`));
  const panel = $(`#tab-${id}`);
  if (panel) $("#win-title").textContent = panel.dataset.title || "";
}

/* ── Typewriter ──────────────────────────────────────────── */
function typewriter(el, phrases, delay = 90) {
  let phrase = 0, char = 0, deleting = false;
  const tick = () => {
    const current = phrases[phrase % phrases.length];
    el.textContent = current.slice(0, char);
    if (!deleting) {
      if (char < current.length) { char++; setTimeout(tick, delay); }
      else { deleting = true; setTimeout(tick, 2600); }
    } else {
      if (char > 0) { char--; setTimeout(tick, 30); }
      else { deleting = false; phrase++; setTimeout(tick, 350); }
    }
  };
  tick();
}

/* ── Panels ──────────────────────────────────────────────── */
function renderAbout() {
  const el = $("#tab-about");
  const initials = (CONFIG.name || "?").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  el.innerHTML = `
    <p class="section-label">profile.exe</p>
    <div class="about-top">
      <div class="avatar">
        <div class="initials">${initials}</div>
        <img src="${CONFIG.photo || ""}" alt="${escapeHtml(CONFIG.name)}" onerror="this.remove()" ${CONFIG.photo ? "" : "hidden"}/>
        <span class="online" title="Online"></span>
      </div>
      <div class="about-meta">
        <div class="about-name"><span id="type-name"></span><span class="caret"></span></div>
        <div><span class="role-badge">${escapeHtml(CONFIG.role)}</span></div>
        <div class="chip-row"><span class="chip">📍 ${escapeHtml(CONFIG.location)}</span></div>
      </div>
    </div>
    <p class="about-bio">${escapeHtml(CONFIG.bio)}</p>
    <div class="chip-row" id="about-chips"></div>
    ${CONFIG.email ? `
    <div class="email-row">
      <span class="email-box">✉ ${escapeHtml(CONFIG.email)}</span>
      <button class="btn-copy" id="copy-email" type="button">COPY</button>
      <span class="copy-ok hidden" id="copy-ok">copied!</span>
    </div>` : ""}`;

  typewriter($("#type-name"), [CONFIG.name, CONFIG.alias || CONFIG.name]);

  const chips = $("#about-chips");
  Object.values(CONFIG.skills).flat().slice(0, 12).forEach(([name]) => {
    const c = document.createElement("span");
    c.className = "chip";
    c.textContent = name;
    chips.appendChild(c);
  });

  const copyBtn = $("#copy-email");
  if (!copyBtn) return;
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      $("#copy-ok").classList.remove("hidden");
      setTimeout(() => $("#copy-ok").classList.add("hidden"), 2000);
    } catch (_) { /* clipboard blocked */ }
  });
}

function renderSkills() {
  const el = $("#tab-skills");
  el.innerHTML = '<p class="section-label">skills.exe</p>';
  Object.entries(CONFIG.skills).forEach(([group, items]) => {
    const wrap = document.createElement("div");
    wrap.className = "skill-group";
    wrap.innerHTML = `<h3>${escapeHtml(group)}</h3><div class="skill-list"></div>`;
    const list = wrap.querySelector(".skill-list");
    items.forEach(([name, tag]) => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.innerHTML = `<span>${escapeHtml(name)}</span><span class="tag">${escapeHtml(tag)}</span>`;
      list.appendChild(item);
    });
    el.appendChild(wrap);
  });
}

function renderProjects() {
  const el = $("#tab-projects");
  el.innerHTML = '<p class="section-label">projects.exe</p><div class="project-grid"></div>';
  const grid = el.querySelector(".project-grid");
  CONFIG.projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    const tags = (p.tags || []).map((t) => `<span>${escapeHtml(t)}</span>`).join("");
    const links = [];
    if (p.link) links.push(`<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener">open ↗</a>`);
    if (p.code) links.push(`<a href="${escapeAttr(p.code)}" target="_blank" rel="noopener">code</a>`);
    card.innerHTML = `
      <span class="date">${escapeHtml(p.date || "")}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-links">${links.join("")}</div>`;
    grid.appendChild(card);
  });
}

function renderContact() {
  const el = $("#tab-contact");
  el.innerHTML = '<p class="section-label">contact.exe</p><div class="contact-grid"></div>';
  const grid = el.querySelector(".contact-grid");
  Object.entries(CONFIG.socials).forEach(([key, href]) => {
    if (!href) return;
    const a = document.createElement("a");
    a.className = "contact-card";
    a.href = /^https?:/.test(href) ? href : `mailto:${href}`;
    a.target = "_blank";
    a.rel = "noopener";
    const label = key.replace(/_/g, " ");
    a.innerHTML = `<span class="label">${escapeHtml(label)}</span><span class="value">${escapeHtml(href.replace(/^https?:\/\//, ""))}</span>`;
    grid.appendChild(a);
  });
}

function renderEducation() {
  const el = $("#tab-education");
  el.innerHTML = '<p class="section-label">education.exe</p>';
  CONFIG.education.forEach((e) => {
    const card = document.createElement("div");
    card.className = "edu-card";
    card.innerHTML = `
      <span class="date">${escapeHtml(e.date || "")}</span>
      <h3>${escapeHtml(e.school || "")}</h3>
      <p><strong>${escapeHtml(e.degree || "")}</strong></p>
      ${e.note ? `<p>${escapeHtml(e.note)}</p>` : ""}`;
    el.appendChild(card);
  });
}

/* ── Helpers ─────────────────────────────────────────────── */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(s) {
  return escapeHtml(s);
}

/* ── Init ────────────────────────────────────────────────── */
function init() {
  renderTabs();
  renderAbout();
  renderSkills();
  renderProjects();
  renderContact();
  renderEducation();
  $("#site-footer").textContent = `System Ready • ${year} — © ${CONFIG.name}`;
  switchTab("about");
  runBoot();
}

document.addEventListener("DOMContentLoaded", init);
