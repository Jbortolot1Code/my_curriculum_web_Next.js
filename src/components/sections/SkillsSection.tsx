"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

type SkillGroupItem = {
  title: string;
  items: string[];
};

export function SkillsSection() {
  const { t, tRaw } = useLanguage();
  const groups = tRaw("skills.groups") as SkillGroupItem[];

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        description={t("skills.description")}
      />

      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {groups.map((group) => (
          <article
            key={group.title}
            className="flex w-[85%] shrink-0 snap-center flex-col rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 shadow-sm glow-amber md:w-auto md:shrink md:rounded-[2rem] md:p-8"
          >
            <h3 className="mb-5 text-lg font-semibold tracking-tight text-white md:text-xl">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-600/50 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 md:px-4 md:py-2 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
