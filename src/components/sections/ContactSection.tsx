"use client";

import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contato"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-6 py-24"
    >
      <SectionHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("profile.contactText")}
      />

      <div className="rounded-[2rem] border border-slate-700/50 bg-slate-800/35 p-8 glow-indigo">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">
              {t("contact.location")}
            </p>
            <p className="text-lg text-slate-200">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700/50 bg-slate-900/60 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
