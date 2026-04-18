"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export function ExperienceSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw("experience.items") as ExperienceItem[];

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-6 py-24"
    >
      <SectionHeader
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        description={t("experience.description")}
      />

      <div className="space-y-8">
        {items.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="rounded-[2rem] border border-slate-700/50 bg-slate-800/35 p-8 shadow-sm transition hover:bg-slate-800/55 glow-purple"
          >
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 text-slate-300">{experience.company}</p>
              </div>

              <span className="rounded-full border border-slate-600/50 px-4 py-2 text-sm text-slate-300">
                {experience.period}
              </span>
            </div>

            <p className="mb-6 max-w-3xl text-base leading-8 text-slate-400 text-justify">
              {experience.description}
            </p>

            <ul className="grid gap-3 md:grid-cols-2">
              {experience.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-700/40 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
