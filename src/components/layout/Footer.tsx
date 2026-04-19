"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateAcademicCV } from "@/utils/generateCV";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-slate-700/40 bg-[#0c1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-10">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="mt-2 text-xs text-slate-500 md:text-sm">
            © {currentYear} • {t("footer.copyright")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => generateAcademicCV(lang)}
          className="w-full rounded-2xl border border-slate-700/50 bg-slate-800/40 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800 md:w-auto"
        >
          {t("footer.downloadCV")}
        </button>
      </div>
    </footer>
  );
}
