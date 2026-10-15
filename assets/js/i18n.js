// i18n.js — TR/EN sözlük ve anahtar arama

export const dict = {
  tr: {
    "a11y.skip": "İçeriğe geç",

    "nav.stack": "Yığın",
    "nav.work": "İşler",
    "nav.dotfiles": "Dotfiles",
    "nav.contact": "İletişim",

    "hero.eyebrow": "akiciemir / fullstack",
    "hero.l1": "Sunucudan shell'e",
    "hero.l2": "kadar uçtan uca.",
    "hero.lead":
      "PHP'i XAMPP üzerinde, arayüzü HTML/CSS ile, kabuğu PowerShell ile kuruyorum. İşin çalışma mantığını severim; katmanı gereksiz yere çoğaltmam.",
    "hero.cta": "İşlere bak",

    "stack.title": "Yığın",
    "stack.sub": "Günlük olarak dokunduğum katmanlar, en çok kullanılandan az'a.",
    "stack.php.t": "sunucu tarafı",
    "stack.php.d":
      "XAMPP üzerinde Apache + MariaDB. Framework katmanı yok: düz PHP, PDO ve hazırlanmış sorgular. Laravel değil.",
    "stack.web.t": "arayüz",
    "stack.web.d":
      "Semantik HTML, custom property'lı CSS, ES modülü JavaScript. Hareket için anime.js.",
    "stack.data.t": "sorgu ve API",
    "stack.data.d":
      "MySQL/MariaDB şemaları, JOIN'li raporlar ve JSON döndüren REST uçları.",
    "stack.win.t": "kabuk ve otomasyon",
    "stack.win.d":
      "PowerShell 5.1 profilleri, CMD için doskey makroları, yükseltilmiş komutları ayrı bir görev kuyruğuna gönderme.",
    "stack.design.t": "arayüz tasarımı",
    "stack.design.d":
      "Tipografi ölçeği, 4px spacing ızgarası, WCAG AA kontrast, light/dark tema.",

    "work.title": "İşler",
    "work.sub": "Kendi ihtiyacım için yazdığım, sonra paylaştığım şeyler.",
    "work.afc.d":
      "Windows'u telefondan yönetmek için yazdığım asistan: yükseltilmiş komut kuyruğu, onay adımı ve skill ile gelen komutlar.",
    "work.tg.d":
      "opencode oturumlarını Telegram'a bağlayan bot. Node 24 + fetch, sıfır bağımlılık; normal işleri bot yapar, yönetici gerektirenler ayrı kuyruğa düşer.",
    "work.dotfiles.d":
      "Kabuğa girdiğim ilk ekranı kendim kuruyorum: fastfetch banner'ı, doskey ile cls, PSReadLine kısayolları.",
    "work.weak.d":
      "Instagram'da sahte ve kötü niyetli içeriklerin kaldırılması için gönüllü girişim.",

    "dots.title": "Dotfiles",
    "dots.sub": "Kabuktan girdiğim ilk şeyler. Hepsi sürümlü, hepsi taşınabilir.",
    "dots.banner":
      "Açılışta fastfetch: işlemci, bellek, sürücü ve logom tek komutta.",
    "dots.doskey":
      "CMD'de cls yazınca boş ekran yerine banner gelir; AutoRun doskey dosyasını yükler.",
    "dots.ps1":
      "Profil: PSReadLine, cls/clear alias'ları, Ctrl+L ile geçmiş temizleme.",
    "dots.fastfetch":
      "Logo, renk ve modül seçimi — makineye göre değil, kişiye göre ayarlanmış.",
    "dots.opencode":
      "Ajan config'i, skill'ler ve çalışma kuralları; buradan ajanlara da iş tarif ediyorum.",

    "contact.title": "İletişim",
    "contact.sub": "Kod, öneri ya da birlikte yapılacak bir şey.",

    "foot.note": "Elle yazıldı. Framework yok, şablon yok.",

    "meta.title": "akiciemir — PHP, web ve Windows",
    "meta.desc": "akiciemir: XAMPP üzerinde PHP, web arayüzleri ve Windows shell dotfile'ları.",
    "term.aria":
      "PowerShell oturumu: kullanıcı adı, birincil yığın ve Laravel sorgusunun karşılığı."
  },

  en: {
    "a11y.skip": "Skip to content",

    "nav.stack": "Stack",
    "nav.work": "Work",
    "nav.dotfiles": "Dotfiles",
    "nav.contact": "Contact",

    "hero.eyebrow": "akiciemir / fullstack",
    "hero.l1": "From the server",
    "hero.l2": "down to the shell.",
    "hero.lead":
      "I run PHP on XAMPP, the interface in HTML/CSS, the shell in PowerShell. I like the working logic; I don't stack layers for nothing.",
    "hero.cta": "See the work",

    "stack.title": "Stack",
    "stack.sub": "The layers I touch daily, most used first.",
    "stack.php.t": "server side",
    "stack.php.d":
      "Apache + MariaDB on XAMPP. No framework layer: plain PHP, PDO and prepared statements. Not Laravel.",
    "stack.web.t": "interface",
    "stack.web.d":
      "Semantic HTML, CSS built on custom properties, JavaScript as ES modules. anime.js for motion.",
    "stack.data.t": "queries and API",
    "stack.data.d":
      "MySQL/MariaDB schemas, JOIN-heavy reports and REST endpoints that return JSON.",
    "stack.win.t": "shell and automation",
    "stack.win.d":
      "PowerShell 5.1 profiles, doskey macros for CMD, and an elevated command queue for the jobs that need it.",
    "stack.design.t": "interface design",
    "stack.design.d":
      "Type scale, a 4px spacing grid, WCAG AA contrast, light and dark themes.",

    "work.title": "Work",
    "work.sub": "Things I built for myself first, then shared.",
    "work.afc.d":
      "An assistant for driving Windows from a phone: an elevated command queue, an approval step, and commands arriving as skills.",
    "work.tg.d":
      "A bot that bridges opencode sessions to Telegram. Node 24 + fetch, zero dependencies; the bot runs unprivileged and elevated work goes to a separate queue.",
    "work.dotfiles.d":
      "I build the first screen I see in a shell: the fastfetch banner, cls through doskey, PSReadLine shortcuts.",
    "work.weak.d":
      "A volunteer effort to get fake and malicious content removed from Instagram.",

    "dots.title": "Dotfiles",
    "dots.sub": "The first things I touch in a shell. All versioned, all portable.",
    "dots.banner":
      "fastfetch on startup: CPU, memory, disks and the logo in one command.",
    "dots.doskey":
      "In CMD, cls runs the banner instead of clearing to black; AutoRun loads the doskey file.",
    "dots.ps1":
      "Profile: PSReadLine, cls/clear aliases, Ctrl+L to clear history.",
    "dots.fastfetch":
      "Logo, colors and module choice — tuned to the person, not to the machine.",
    "dots.opencode":
      "Agent config, skills and working rules; I brief the agents from here too.",

    "contact.title": "Contact",
    "contact.sub": "Code, an idea, or something to build together.",

    "foot.note": "Hand written. No framework, no template.",

    "meta.title": "akiciemir — PHP, web and Windows",
    "meta.desc":
      "akiciemir: PHP on XAMPP, web interfaces and Windows shell dotfiles.",
    "term.aria":
      "PowerShell session: the user name, the primary stack, and what comes back when Laravel is queried."
  }
};

export function lookup(lang, key) {
  return dict[lang]?.[key] ?? dict.tr[key] ?? key;
}