"use client";

import { useLanguage } from "./LanguageProvider";

/**
 * EN | AR toggle shown in the header.
 * The active language is highlighted in gold; clicking switches language.
 */
export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center text-sm font-medium tracking-[0.2em] text-text-dim hover:text-accent transition-colors"
      aria-label="Toggle language"
      aria-pressed={lang === "ar"}
    >
      <span
        className={`transition-colors ${
          lang === "en" ? "text-accent" : ""
        }`}
      >
        EN
      </span>
      <span className="mx-1 opacity-30"> | </span>
      <span
        className={`transition-colors ${
          lang === "ar" ? "text-accent" : ""
        }`}
      >
        AR
      </span>
      {/* Subtle sliding indicator */}
      <span
        className="absolute bottom-0 h-0.5 bg-accent transition-all duration-300"
        style={{
          width: "24px",
          left: lang === "en" ? "-4px" : "28px",
        }}
      />
    </button>
  );
}
