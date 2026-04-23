"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  periodDetail?: string;
  description: string;
  highlights: string[];
};

function getInitials(company: string): string {
  const words = company
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !/^(de|do|da|e|Ltda|Cia|Cía|y|and)$/i.test(w));
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ExperienceSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw("experience.items") as ExperienceItem[];
  const currentLabel = t("experience.currentLabel");

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

      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div
          className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-indigo-500/40 to-slate-700/20 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        <ol className="space-y-10 md:space-y-14">
          {items.map((experience, idx) => {
            const isLeft = idx % 2 === 0;
            const isCurrent = !!experience.periodDetail;
            return (
              <li
                key={`${experience.company}-${experience.role}`}
                className="relative pl-14 md:pl-0"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-5 top-6 z-[1] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-purple-400/50 bg-slate-900 text-xs font-bold tracking-tight text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.35)] md:left-1/2 md:top-8"
                  aria-hidden="true"
                >
                  {getInitials(experience.company)}
                  {isCurrent && (
                    <span className="absolute -right-1 -top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                  )}
                </div>

                <div
                  className="timeline-card md:grid md:grid-cols-2 md:gap-12"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {/* Period block */}
                  <div
                    className={`mb-4 md:mb-0 md:flex md:flex-col md:justify-start md:pt-6 ${
                      isLeft
                        ? "md:col-start-1 md:row-start-1 md:items-end md:text-right md:pr-2"
                        : "md:col-start-2 md:row-start-1 md:items-start md:text-left md:pl-2"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="text-sm font-semibold tracking-wide text-purple-300 md:text-base">
                        {experience.period}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {currentLabel}
                        </span>
                      )}
                    </div>
                    {experience.periodDetail && (
                      <p className="mt-1 text-xs text-slate-500 md:text-sm">
                        {experience.periodDetail}
                      </p>
                    )}
                  </div>

                  {/* Card */}
                  <article
                    className={`rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 shadow-sm transition hover:bg-slate-800/60 glow-purple md:rounded-3xl md:p-7 ${
                      isLeft
                        ? "md:col-start-2 md:row-start-1"
                        : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300 md:text-base">
                      {experience.company}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400 md:leading-7 md:text-justify">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {experience.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-slate-300"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
