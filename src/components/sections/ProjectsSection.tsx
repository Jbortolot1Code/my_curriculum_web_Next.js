"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  status?: string;
};

export function ProjectsSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw("projects.items") as ProjectItem[];

  return (
    <section
      id="projetos"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        description={t("projects.description")}
      />

      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {items.map((project) => (
          <article
            key={project.title}
            className="flex w-[85%] shrink-0 snap-center flex-col rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800/55 glow-green md:w-auto md:shrink md:rounded-[2rem] md:p-8"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                {project.title}
              </h3>

              {project.status && (
                <span className="shrink-0 rounded-full border border-slate-600/50 px-3 py-1 text-xs text-slate-300">
                  {project.status}
                </span>
              )}
            </div>

            <p className="mb-6 text-sm leading-7 text-slate-400 md:text-base md:leading-8 md:text-justify">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700/40 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 md:py-2 md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
