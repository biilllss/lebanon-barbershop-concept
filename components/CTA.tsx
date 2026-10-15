"use client";

import { useLanguage } from "./LanguageProvider";
import { Button } from "./ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations } from "@/lib/translations";

/**
 * Final call-to-action — full-width section on the dark surface
 * background with a prominent WhatsApp button.
 */
export function CTA() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section className="bg-surface">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl text-text sm:text-5xl">
            {t.cta.headline}
          </h2>
          <p className="mt-6 text-lg text-text-dim">{t.cta.subtext}</p>
          <div className="mt-10">
            <a
              href={buildWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                {t.cta.button}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
