// theme-boot: ilk boyadan önce tema ve dil uygular

(function () {
  var t = null;
  var l = null;
  try {
    t = localStorage.getItem("akici-theme");
    l = localStorage.getItem("akici-lang");
  } catch (e) {
    /* private mod */
  }
  if (!t) t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  var meta = document.getElementById("meta-theme");
  if (meta) meta.content = t === "light" ? "#fafbfc" : "#0b0d10";
  if (l) document.documentElement.lang = l;
})();