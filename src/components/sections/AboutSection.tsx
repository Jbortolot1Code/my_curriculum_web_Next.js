"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t, tRaw } = useLanguage();
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
    </section>
  );
}
