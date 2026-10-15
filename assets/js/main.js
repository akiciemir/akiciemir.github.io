// main.js — tema, dil, animasyon

import { MAIL, lookup } from "./i18n.js";

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
  document
    .getElementById("theme-toggle")
    ?.setAttribute("aria-pressed", String(theme === "light"));
  const meta = document.getElementById("meta-theme");
  if (meta) meta.content = theme === "light" ? "#fafbfc" : "#0b0d10";
}

applyTheme(
  store.get(THEME_KEY) ||
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
  if (lang !== "en") lang = "tr";
  root.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = lookup(lang, el.dataset.i18n);
  });

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

/* ---------- bağlantılar ---------- */
document
  .querySelector("[data-mailto]")
  ?.setAttribute("href", `mailto:${MAIL}`);

// WP linki platform belirlendiginde buraya yazilir
const WP_URL = "";
if (WP_URL) document.querySelector("[data-wp-link]")?.setAttribute("href", WP_URL);

/* ---------- anime.js ---------- */
let anime = null;
try {
  anime = await import("https://cdn.jsdelivr.net/npm/animejs@4.5.0/+esm");
} catch {
  /* CDN yoksa sayfa normal calisir */
}

function setupReveals() {
  const items = [...document.querySelectorAll(".reveal")];
  if (!anime || reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        anime.animate(entry.target, {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 600,
          delay: anime.stagger(50, { start: 60 }),
          ease: "outQuint"
        });
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  items.forEach((el) => io.observe(el));
}

setupReveals();