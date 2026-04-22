"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { socialIcons } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-start px-5 pt-24 pb-12 md:items-center md:px-6 md:pt-32 md:pb-20 lg:h-full">
      <div className="grid w-full gap-8 md:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="contents lg:block lg:max-w-3xl">
          <p className="order-1 mb-3 text-xs uppercase tracking-[0.3em] text-slate-400 md:mb-4 md:text-sm">
            {t("hero.eyebrow")}
          </p>

          <h1 className="order-2 mb-3 text-4xl font-bold leading-tight tracking-tight md:mb-6 md:text-5xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="order-3 mb-6 max-w-2xl text-base leading-7 text-slate-300 md:mb-6 md:text-xl md:leading-9 lg:text-2xl">
            {t("profile.role")}
          </h2>

          <div className="order-4 mb-6 flex justify-center lg:hidden">
            <div className="w-44 max-w-full rounded-[1.5rem] border border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-950 p-2 shadow-2xl sm:w-52">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-slate-950">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 60vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-5 mb-6 flex flex-wrap gap-3 md:mb-8 md:gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-800/40 px-4 py-2.5 text-sm font-medium text-white transition hover:border-slate-600/70 hover:bg-slate-800 md:px-5 md:py-3"
              >
                {socialIcons[social.label]}
                {social.label}
              </a>
            ))}

            <a
              href="#contato"
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200 md:px-5 md:py-3"
            >
              {t("hero.contactBtn")}
            </a>
          </div>

          <div className="order-6 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="hidden justify-center lg:flex lg:justify-end">
          <div className="w-full max-w-sm rounded-[2rem] border border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-950 p-4 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 60vw, 400px"
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
