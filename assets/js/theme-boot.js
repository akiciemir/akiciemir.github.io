// theme-boot: ilk boyadan önce tema uygular

(function () {
  var t = null;
  try {
    t = localStorage.getItem("akici-theme");
  } catch (e) {
    /* private mod */
  }
  if (!t) t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  var meta = document.getElementById("meta-theme");
  if (meta) meta.content = t === "light" ? "#fafbfc" : "#0b0d10";
})();