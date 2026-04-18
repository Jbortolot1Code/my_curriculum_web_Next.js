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
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-6 py-24"
    >
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        description={t("projects.description")}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-slate-700/50 bg-slate-800/35 p-8 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800/55 glow-green"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              {project.status && (
                <span className="rounded-full border border-slate-600/50 px-3 py-1 text-xs text-slate-300">
                  {project.status}
                </span>
              )}
            </div>

            <p className="mb-6 text-base leading-8 text-slate-400 text-justify">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700/40 bg-slate-900/60 px-3 py-2 text-sm text-slate-200"
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
