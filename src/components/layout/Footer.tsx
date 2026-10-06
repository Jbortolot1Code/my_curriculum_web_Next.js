"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateAcademicCV } from "@/utils/generateCV";
import { useRef, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useLanguage();
  const [generating, setGenerating] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const downloadInProgress = useRef(false);

  async function downloadProfessionalCV() {
    if (downloadInProgress.current) return;
    downloadInProgress.current = true;
    setGenerating(true);
    setDownloadError(false);
    try {
      const { generateProfessionalCV } = await import("@/utils/generateProfessionalCV");
      await generateProfessionalCV(lang);
    } catch (error) {
      console.error("Failed to generate professional CV", error);
      setDownloadError(true);
    } finally {
      downloadInProgress.current = false;
      setGenerating(false);
    }
  }

  return (
    <footer className="relative z-10 border-t border-slate-700/40 bg-[#0c1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-10">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="mt-2 text-xs text-slate-500 md:text-sm">
            © {currentYear} • {t("footer.copyright")}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-col gap-3 lg:flex-row">
            <button
              type="button"
              onClick={() => generateAcademicCV(lang)}
              className="w-full rounded-2xl border border-slate-700/50 bg-slate-800/40 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800 md:w-auto"
            >
              {t("footer.downloadCV")}
            </button>
            <button
              type="button"
              onClick={downloadProfessionalCV}
              disabled={generating}
              aria-busy={generating}
              className="w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20 disabled:cursor-wait disabled:opacity-60 md:w-auto"
            >
              {t(generating ? "footer.generatingCV" : "footer.downloadProfessionalCV")}
            </button>
          </div>
          <p role="status" className="sr-only">{generating ? t("footer.generatingCV") : ""}</p>
          {downloadError && <p role="alert" className="max-w-md text-sm text-red-300">{t("footer.downloadError")}</p>}
        </div>
      </div>
    </footer>
  );
}
