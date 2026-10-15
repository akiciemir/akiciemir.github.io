// i18n.js — TR/EN metinler

export const dict = {
  tr: {
    "a11y.skip": "İçeriğe geç",

    "hero.line": "PHP yazıyorum, arayüz kuruyorum, Windows'ta otomasyon yapıyorum.",

    "stack.title": "Yığın",
    "stack.php.k": "PHP",
    "stack.php.v": "XAMPP: Apache, MariaDB, phpMyAdmin. Framework yok.",
    "stack.web.k": "Web",
    "stack.web.v": "HTML, CSS, JavaScript.",
    "stack.db.k": "Veri",
    "stack.db.v": "MySQL, SQL, REST.",
    "stack.win.k": "Windows",
    "stack.win.v": "PowerShell, CMD, doskey, PSReadLine.",

    "work.title": "İşler",
    "work.afc": "Telefondan Windows yöneten asistan.",
    "work.tg": "opencode oturumlarını Telegram'a bağlayan bot.",
    "work.banner": "PowerShell ve CMD için dotfile'lar.",
    "work.weak": "Instagram'da sahte içerik temizleme gönüllü girişimi.",

    "contact.mail": "ahmedemirakc@gmail.com",

    "meta.desc": "PHP, web arayüzü ve Windows kabuğu."
  },

  en: {
    "a11y.skip": "Skip to content",

    "hero.line": "I write PHP, I build interfaces, I automate Windows.",

    "stack.title": "Stack",
    "stack.php.k": "PHP",
    "stack.php.v": "XAMPP: Apache, MariaDB, phpMyAdmin. No framework.",
    "stack.web.k": "Web",
    "stack.web.v": "HTML, CSS, JavaScript.",
    "stack.db.k": "Data",
    "stack.db.v": "MySQL, SQL, REST.",
    "stack.win.k": "Windows",
    "stack.win.v": "PowerShell, CMD, doskey, PSReadLine.",

    "work.title": "Work",
    "work.afc": "An assistant that drives Windows from a phone.",
    "work.tg": "A bot that bridges opencode sessions to Telegram.",
    "work.banner": "Dotfiles for PowerShell and CMD.",
    "work.weak": "Volunteer effort to get fake content off Instagram.",

    "contact.mail": "ahmedemirakc@gmail.com",

    "meta.desc": "PHP, web interfaces and the Windows shell."
  }
};

export const MAIL = dict.tr["contact.mail"];

export function lookup(lang, key) {
  return dict[lang]?.[key] ?? dict.tr[key] ?? key;
}