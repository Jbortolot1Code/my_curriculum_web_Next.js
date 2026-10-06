"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { references } from "@/data/references";

export function ReferencesSection() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="referencias"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("references.eyebrow")}
        title={t("references.title")}
        description={t("references.description")}
      />
      {references.map((reference) => (
        <article key={reference.id} className="rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 glow-amber md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-300">
                {t(`references.items.${reference.id}.issuer`)}
                {" · "}
                {new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(new Date(reference.issuedOn))}
              </p>
              <h3 className="text-xl font-semibold text-white">{t(`references.items.${reference.id}.title`)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                {t(`references.items.${reference.id}.description`)}
              </p>
            </div>
            <a
              href={reference.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-amber-300/30 bg-amber-300/5 px-5 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              {t("references.openFile")}
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
