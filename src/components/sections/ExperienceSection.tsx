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
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        description={t("experience.description")}
      />

      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:block md:space-y-8 md:overflow-visible md:px-0 md:pb-0">
        {items.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="flex w-[88%] shrink-0 snap-center flex-col rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 shadow-sm transition hover:bg-slate-800/55 glow-purple md:w-auto md:shrink md:rounded-[2rem] md:p-8"
          >
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {experience.role}
                </h3>
                <p className="mt-2 text-slate-300">{experience.company}</p>
              </div>

              <span className="self-start rounded-full border border-slate-600/50 px-3 py-1.5 text-xs text-slate-300 md:px-4 md:py-2 md:text-sm">
                {experience.period}
              </span>
            </div>

            <p className="mb-6 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8 md:text-justify">
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
