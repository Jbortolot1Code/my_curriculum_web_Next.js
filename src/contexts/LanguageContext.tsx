"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "@/data/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tRaw: (key: string) => unknown;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  function resolve(key: string): unknown {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }
    return value;
  }

  function t(key: string): string {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  }

  function tRaw(key: string): unknown {
    return resolve(key);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tRaw }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
