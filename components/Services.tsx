"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="services" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-text">{t.services.title}</h2>
        <p className="mt-4 text-sm text-text-dim">{t.services.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
        {t.services.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border border-white/5 px-6 py-4 transition-transform hover:translate-x-1"
          >
            <span className="text-sm font-medium text-text-dim">
              {item.name}
            </span>
            <span className="font-medium text-accent">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
