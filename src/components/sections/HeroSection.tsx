"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { socialIcons } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex h-full min-h-screen max-w-6xl items-center px-6 py-20 pt-32">
      <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
            {t("hero.eyebrow")}
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mb-6 max-w-2xl text-xl leading-9 text-slate-300 md:text-2xl">
            {t("profile.role")}
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-8 text-slate-400 text-justify md:text-lg">
            {t("profile.summary")}
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-800/40 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800"
              >
                {socialIcons[social.label]}
                {social.label}
              </a>
            ))}

            <a
              href="#contato"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t("hero.contactBtn")}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-[2rem] border border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-950 p-4 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
