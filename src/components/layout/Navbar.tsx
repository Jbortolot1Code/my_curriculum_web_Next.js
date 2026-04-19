"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  function toggle() {
    setOpen((v) => !v);
    setPulseKey((k) => k + 1);
  }

  const navItems = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#certificados", label: t("nav.certificates") },
    { href: "#contato", label: t("nav.contact") },
  ];

  const brand = profile.name.split(" ")[0] || "CV";

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const flagButtons = (
    <div className="flex items-center gap-2">
      {flags.map((flag) => (
        <button
          key={flag.lang}
          type="button"
          onClick={() => setLang(flag.lang)}
          className={`h-6 w-9 md:h-5 md:w-7 overflow-hidden rounded transition ${
            lang === flag.lang
              ? "ring-2 ring-indigo-400 opacity-100"
              : "opacity-50 hover:opacity-80 ring-1 ring-white/20"
          }`}
          title={flag.alt}
          aria-label={flag.alt}
        >
          <span
            className={`fi fi-${flag.code}`}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
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

        <div className="hidden md:flex items-center gap-2 ml-4">{flagButtons}</div>

        <button
          type="button"
          onClick={toggle}
          className="md:hidden relative inline-flex h-10 w-10 items-center justify-center overflow-visible rounded-lg border border-white/10 bg-white/5 text-white transition active:scale-90 hover:bg-white/10"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            key={pulseKey}
            aria-hidden="true"
            className="hamburger-pulse pointer-events-none absolute inset-0 rounded-lg"
          />
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 origin-left bg-current transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
              style={{ transitionDelay: open ? "120ms" : "0ms" }}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 origin-center -translate-y-1/2 bg-current transition-all duration-300 ease-out ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
              style={{ transitionDelay: open ? "0ms" : "120ms" }}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 origin-left bg-current transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
              style={{ transitionDelay: open ? "120ms" : "0ms" }}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={open ? "drawer-item" : ""}
                style={open ? { animationDelay: `${i * 50 + 80}ms` } : undefined}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`mt-3 flex items-center justify-end gap-3 border-t border-white/5 pt-3 ${
              open ? "drawer-item" : ""
            }`}
            style={
              open
                ? { animationDelay: `${navItems.length * 50 + 80}ms` }
                : undefined
            }
          >
            {flagButtons}
          </div>
        </nav>
      </div>
    </header>
  );
}
