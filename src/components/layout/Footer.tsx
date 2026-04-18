"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateAcademicCV } from "@/utils/generateCV";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-slate-700/40 bg-[#0c1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-500">
            © {currentYear} • {t("footer.copyright")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => generateAcademicCV(lang)}
          className="rounded-2xl border border-slate-700/50 bg-slate-800/40 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800"
        >
          {t("footer.downloadCV")}
        </button>
      </div>
    </footer>
  );
}
