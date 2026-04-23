"use client";

import { ClusterIcon, type ClusterKey } from "@/components/ui/ClusterIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechIcon } from "@/components/ui/TechIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CSSProperties } from "react";

type SkillGroupItem = {
  key?: ClusterKey;
  title: string;
  items: string[];
};

type LanguageItem = {
  code: string;
  name: string;
  level: string;
  levelPercent: number;
  note?: string;
};

const CLUSTER_COLORS: Record<
  ClusterKey,
  { text: string; bar: string; chipBorder: string; chipHover: string }
> = {
  languages: {
    text: "text-sky-300",
    bar: "from-sky-500/70 to-sky-300/70",
    chipBorder: "border-sky-500/20",
    chipHover: "hover:border-sky-400/50",
  },
  backend: {
    text: "text-cyan-300",
    bar: "from-cyan-500/70 to-cyan-300/70",
    chipBorder: "border-cyan-500/20",
    chipHover: "hover:border-cyan-400/50",
  },
  frontend: {
    text: "text-amber-300",
    bar: "from-amber-500/70 to-amber-300/70",
    chipBorder: "border-amber-500/20",
    chipHover: "hover:border-amber-400/50",
  },
  ml: {
    text: "text-purple-300",
    bar: "from-purple-500/70 to-purple-300/70",
    chipBorder: "border-purple-500/20",
    chipHover: "hover:border-purple-400/50",
  },
};

export function SkillsSection() {
  const { t, tRaw } = useLanguage();
  const groups = tRaw("skills.groups") as SkillGroupItem[];
  const languages = tRaw("skills.languages") as LanguageItem[];
  const languagesTitle = t("skills.languagesTitle");
  const languagesDescription = t("skills.languagesDescription");

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

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {groups.map((group) => {
          const key: ClusterKey = group.key ?? "languages";
          const colors = CLUSTER_COLORS[key];
          return (
            <article
              key={group.title}
              className="flex flex-col rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 shadow-sm glow-amber md:rounded-[2rem] md:p-8"
            >
              <header className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/80">
                  <ClusterIcon cluster={key} size={22} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-base font-semibold tracking-tight md:text-lg ${colors.text}`}
                  >
                    {group.title}
                  </h3>
                  <div
                    className={`mt-1 h-0.5 w-12 rounded-full bg-gradient-to-r ${colors.bar}`}
                    aria-hidden="true"
                  />
                </div>
              </header>

              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-1.5 rounded-full border bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 transition md:px-3.5 md:py-2 md:text-sm ${colors.chipBorder} ${colors.chipHover}`}
                  >
                    <TechIcon name={item} size={14} />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Languages subsection */}
      <div className="mt-12 md:mt-16">
        <div className="mb-6 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-300"
            style={{ filter: "drop-shadow(0 0 6px rgba(129, 140, 248, 0.35))" }}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
              {languagesTitle}
            </h3>
            <p className="mt-0.5 text-xs text-slate-400 md:text-sm">
              {languagesDescription}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {languages.map((lang) => (
            <article
              key={lang.code}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/35 p-5 glow-indigo md:rounded-3xl md:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`fi fi-${lang.code} inline-block h-6 w-8 shrink-0 rounded-sm border border-slate-700/50 shadow-sm`}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white md:text-base">
                    {lang.name}
                  </p>
                  <p className="text-xs text-indigo-300 md:text-sm">
                    {lang.level}
                  </p>
                </div>
              </div>

              <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700/40">
                <div
                  className="lang-bar-fill h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
                  style={{ "--lang-level": `${lang.levelPercent}%` } as CSSProperties}
                />
              </div>

              {lang.note && (
                <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-5 text-slate-400 md:text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-indigo-400"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <span>{lang.note}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
