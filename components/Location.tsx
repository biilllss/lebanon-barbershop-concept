"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Button } from "./ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations } from "@/lib/translations";

export function Location() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="location" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-text">{t.location.title}</h2>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-12 lg:max-w-5xl lg:grid-cols-2">
        {/* Contact details */}
        <FadeIn>
          <div>
            <p className="text-sm text-text-dim">{t.location.address}</p>
            <p className="mt-4 text-sm text-text-dim">{t.location.hours}</p>
            <a
              href={buildWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-sm text-accent hover:text-accent-hover transition-colors"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </FadeIn>

        {/* Stylized map placeholder */}
        <FadeIn delay={100}>
          <div className="relative aspect-square w-full border border-white/5">
            <div className="absolute inset-0 bg-surface" />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="text-center text-xs text-text-dim">
                {t.location.mapPlaceholder}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
