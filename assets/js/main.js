/* main — tema, dil, terminal, animasyon */

import { dict, lookup } from "./i18n.js";

const root = document.documentElement;
root.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get: (k) => {
    try { return localStorage.getItem(k); } catch { return null; }
  },
  set: (k, v) => {
    try { localStorage.setItem(k, v); } catch { /* private mode */ }
  }
};

/* ---------- tema ---------- */
const THEME_KEY = "akici-theme";
function applyTheme(theme) {
  root.dataset.theme = theme;
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.setAttribute("aria-pressed", String(theme === "light"));
  const meta = document.getElementById("meta-theme");
  if (meta) meta.content = theme === "light" ? "#fafbfc" : "#0b0d10";
}

const savedTheme = store.get(THEME_KEY);
applyTheme(
  savedTheme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
);

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  store.set(THEME_KEY, next);
});

/* ---------- dil ---------- */
const LANG_KEY = "akici-lang";
function applyLang(lang) {
  dict[lang] || (lang = "tr");
  root.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = lookup(lang, el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", lookup(lang, el.dataset.i18nAria));
  });

  document.title = lookup(lang, "meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = lookup(lang, "meta.desc");

  const label = document.querySelector("[data-lang-label]");
  if (label) label.textContent = lang === "tr" ? "EN" : "TR";

  store.set(LANG_KEY, lang);
  return lang;
}

let lang = applyLang(store.get(LANG_KEY) || (navigator.language || "tr").slice(0, 2));
document.getElementById("lang-toggle")?.addEventListener("click", () => {
  lang = applyLang(lang === "tr" ? "en" : "tr");
});

/* ---------- anime.js ---------- */
let anime = null;
try {
  anime = await import("https://cdn.jsdelivr.net/npm/animejs@4.5.0/+esm");
} catch {
  /* CDN yoksa sayfa normal çalışır, animasyonsuz */
}

function revealAll() {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!anime || reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const group = [...entry.target.parentElement.children].filter((c) =>
          c.classList.contains("reveal")
        );
        anime.animate(entry.target, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 700,
          delay: Math.min(group.indexOf(entry.target), 4) * 70,
          ease: "outQuint"
        });
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
  );

  items.forEach((el) => io.observe(el));
}

/* ---------- terminal ---------- */
const TERM = [
  { text: "PS C:\\Users\\akiciemir> whoami", cls: "p" },
  { text: "akiciemir\\akiciemir", cls: "" },
  { text: "PS C:\\Users\\akiciemir> stack --primary", cls: "p" },
  { text: "php   xampp   apache   mariadb", cls: "" },
  { text: "PS C:\\Users\\akiciemir> framework --laravel", cls: "p" },
  { text: "not found.", cls: "c" }
];

const totalChars = TERM.reduce((n, l) => n + l.text.length + 1, 0);

function renderTerm(chars) {
  const out = document.getElementById("term-out");
  if (!out) return;
  let left = chars;
  let html = "";
  for (const line of TERM) {
    if (left <= 0) break;
    const cut = line.text.slice(0, Math.min(left, line.text.length));
    html += `<span class="${line.cls}">${cut.replace(/</g, "&lt;")}</span>\n`;
    left -= line.text.length + 1;
  }
  out.innerHTML = html;
}

function setupTerminal() {
  const out = document.getElementById("term-out");
  if (!out) return;
  renderTerm(TERM[0].text.length + 1);

  if (!anime || reduceMotion) {
    renderTerm(totalChars);
    return;
  }

  const state = { chars: 0 };
  anime.animate(state, {
    chars: totalChars,
    duration: 2600,
    ease: "linear",
    onUpdate: () => renderTerm(Math.floor(state.chars)),
    onComplete: () => renderTerm(totalChars)
  });
}

/* ---------- hero girişi ---------- */
function setupHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  if (!anime || reduceMotion) return;

  anime.animate(hero.querySelector(".eyebrow"), {
    opacity: [0, 1],
    translateY: [12, 0],
    duration: 600,
    ease: "outQuint"
  });

  anime.animate(hero.querySelectorAll(".hero__title .line"), {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 800,
    delay: anime.stagger(90, { start: 120 }),
    ease: "outQuint"
  });

  anime.animate(
    [hero.querySelector(".lead"), hero.querySelector(".hero__actions"), hero.querySelector(".term")],
    {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 700,
      delay: anime.stagger(110, { start: 380 }),
      ease: "outQuint"
    }
  );
}

/* ---------- ilk boya ---------- */
setupHero();
setupTerminal();
setupReveals();