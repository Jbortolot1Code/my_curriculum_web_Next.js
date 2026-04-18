"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/profile";
import type { Language } from "@/data/translations";

const flags: { lang: Language; code: string; alt: string }[] = [
  { lang: "pt", code: "br", alt: "Português" },
  { lang: "en", code: "us", alt: "English" },
  { lang: "es", code: "es", alt: "Español" },
];

export function Navbar() {
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#certificados", label: t("nav.certificates") },
    { href: "#contato", label: t("nav.contact") },
  ];

  const brand = profile.name.split(" ")[0] || "CV";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition"
        >
          {brand}
          <span className="text-indigo-400">.</span>
        </a>

        <nav className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-2xl justify-between text-sm text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2 ml-4">
          {flags.map((flag) => (
            <button
              key={flag.lang}
              type="button"
              onClick={() => setLang(flag.lang)}
              className={`h-5 w-7 overflow-hidden rounded transition ${
                lang === flag.lang
                  ? "ring-2 ring-indigo-400 opacity-100"
                  : "opacity-50 hover:opacity-80 ring-1 ring-white/20"
              }`}
              title={flag.alt}
              aria-label={flag.alt}
            >
              <span
                className={`fi fi-${flag.code}`}
                style={{ display: "block", width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
