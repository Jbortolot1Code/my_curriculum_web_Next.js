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
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-6 py-24"
    >
      <SectionHeader
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        description={t("skills.description")}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-[2rem] border border-slate-700/50 bg-slate-800/35 p-8 shadow-sm glow-amber"
          >
            <h3 className="mb-5 text-xl font-semibold tracking-tight text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-600/50 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
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
