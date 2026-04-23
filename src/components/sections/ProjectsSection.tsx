"use client";

import { Carousel } from "@/components/ui/Carousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechIcon } from "@/components/ui/TechIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ProjectStatus } from "@/types";

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  statusType?: ProjectStatus;
  context?: string;
};

export function ProjectsSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw("projects.items") as ProjectItem[];

  const statusLabel: Record<ProjectStatus, string> = {
    done: t("projects.statusDone"),
    "in-progress": t("projects.statusInProgress"),
  };

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

      <Carousel
        itemsPerViewDesktop={2}
        itemsPerViewTablet={2}
        itemsPerViewMobile={1}
        gap={20}
        glowClass="glow-green"
        ariaLabel="Projetos"
      >
        {items.map((project) => {
          const isDone = project.statusType === "done";
          return (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800/55 glow-green md:rounded-[2rem] md:p-8"
            >
              {/* Status + context row */}
              {(project.statusType || project.context) && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {project.statusType && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ${
                        isDone
                          ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                          : "border-amber-400/40 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isDone ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                        }`}
                      />
                      {statusLabel[project.statusType]}
                    </span>
                  )}

                  {project.context && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/50 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="10"
                        height="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-70"
                      >
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2C20 17.5 12 22 12 22z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.context}
                    </span>
                  )}
                </div>
              )}

              <h3 className="mb-4 text-xl font-semibold tracking-tight text-white md:text-2xl">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-7 text-slate-400 md:text-base md:leading-8 md:text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/40 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 transition hover:border-slate-500/60 hover:bg-slate-800/80 md:text-sm"
                  >
                    <TechIcon name={tech} size={14} />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </Carousel>
    </section>
  );
}
