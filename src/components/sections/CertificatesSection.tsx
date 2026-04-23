"use client";

import { Carousel } from "@/components/ui/Carousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import { certificates as certificateData } from "@/data/certificates";
import { useLanguage } from "@/contexts/LanguageContext";

type CertTranslation = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description?: string;
};

export function CertificatesSection() {
  const { t, tRaw } = useLanguage();
  const certTranslations = tRaw("certificates.items") as CertTranslation[];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedIndex(null);
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <section
        id="certificados"
        className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
      >
        <SectionHeader
          eyebrow={t("certificates.eyebrow")}
          title={t("certificates.title")}
          description={t("certificates.description")}
        />

        <Carousel
          itemsPerViewDesktop={3}
          itemsPerViewTablet={2}
          itemsPerViewMobile={1}
          gap={20}
          glowClass="glow-blue"
          ariaLabel="Certificados"
        >
          {certificateData.map((certificate, i) => {
            const ct = certTranslations[i];
            return (
              <article
                key={certificate.id}
                className="group h-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-800/35 transition hover:bg-slate-800/55 glow-blue"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className="flex h-full w-full flex-col text-left"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-950">
                    <Image
                      src={certificate.thumbnail}
                      alt={ct.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      {ct.category}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {ct.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {ct.issuer} • {ct.date}
                    </p>
                  </div>
                </button>
              </article>
            );
          })}
        </Carousel>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 px-3 py-6 md:px-4 md:py-8"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950 shadow-2xl md:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
            >
              {t("certificates.closeBtn")}
            </button>

            <div className="grid gap-0 md:grid-cols-[1.4fr_0.9fr]">
              <div className="relative min-h-[300px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={certificateData[selectedIndex].image}
                    alt={certTranslations[selectedIndex].title}
                    fill
                    className="object-contain bg-slate-900"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {certTranslations[selectedIndex].category}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {certTranslations[selectedIndex].title}
                </h3>

                <p className="mb-2 text-slate-300">
                  <span className="font-medium text-white">{t("certificates.institution")}:</span>{" "}
                  {certTranslations[selectedIndex].issuer}
                </p>

                <p className="mb-6 text-slate-300">
                  <span className="font-medium text-white">{t("certificates.year")}:</span>{" "}
                  {certTranslations[selectedIndex].date}
                </p>

                {certTranslations[selectedIndex].description && (
                  <p className="mb-6 text-sm leading-7 text-slate-400">
                    {certTranslations[selectedIndex].description}
                  </p>
                )}

                {certificateData[selectedIndex].fileUrl && (
                  <a
                    href={certificateData[selectedIndex].fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-slate-800"
                  >
                    {t("certificates.openFile")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
