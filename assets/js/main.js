// main.js — tema düğmesi

const root = document.documentElement;
const KEY = "akici-theme";
const store = {
  get: () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  },
  set: (v) => {
    try { localStorage.setItem(KEY, v); } catch { /* private mode */ }
  }
};

function applyTheme(theme) {
  root.dataset.theme = theme;
  document
    .getElementById("theme-toggle")
    ?.setAttribute("aria-pressed", String(theme === "light"));
  const meta = document.getElementById("meta-theme");
  if (meta) meta.content = theme === "light" ? "#fafbfc" : "#0b0d10";
}

applyTheme(
  store.get() ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
);

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  store.set(next);
});