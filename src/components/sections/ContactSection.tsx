"use client";

import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { socialIcons } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contato"
      className="mx-auto max-w-6xl border-t border-slate-700/40 px-5 py-16 md:px-6 md:py-24"
    >
      <SectionHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("profile.contactText")}
      />

      <div className="rounded-3xl border border-slate-700/50 bg-slate-800/35 p-6 glow-indigo md:rounded-[2rem] md:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500 md:mb-3 md:text-sm">
              {t("contact.location")}
            </p>
            <p className="text-base text-slate-200 md:text-lg">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800 md:px-5 md:py-3"
              >
                {socialIcons[social.label]}
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
