"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Language } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "blade-cedar-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // On mount, sync from localStorage so refresh preserves preference
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") {
      setLang(stored);
    }
  }, []);

  // Persist + update <html> dir & lang attributes in one effect
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const html = document.documentElement;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    html.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
