"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { education } from "@/data/education";

export function AboutSection() {
  const { t, tRaw, lang } = useLanguage();
  const areas = tRaw("about.areas") as string[];

  return (
    <section
      id="sobre"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.description")}
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5 text-sm leading-7 text-slate-400 md:space-y-6 md:text-base md:leading-8 md:text-justify lg:text-lg">
          <p>{t("profile.summary")}</p>
          <p>{t("about.paragraph")}</p>
        </div>

        <div className="rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 md:p-8 glow-cyan">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">
            {t("about.areasTitle")}
          </p>

          <ul className="space-y-4 text-slate-300">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-700/40 pt-8">
        <h3 className="mb-5 text-lg font-semibold text-white">{t("about.educationTitle")}</h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {education[lang].map((item) => (
            <li key={item.id} className={item.status === "in-progress"
              ? "relative overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400/15 via-slate-800/50 to-slate-900/60 p-6 shadow-[0_0_28px_rgba(34,211,238,0.07)] md:col-span-2"
              : "rounded-2xl border border-slate-700/40 bg-slate-800/20 p-5"}>
              {item.status === "in-progress" && (
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {t("about.currentStudyLabel")}
                </span>
              )}
              <p className="text-sm font-medium leading-6 text-slate-200">{item.degree}</p>
              <p className="mt-2 text-sm text-slate-400">{item.institution}</p>
              <p className="mt-2 text-xs leading-5 text-cyan-300">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
