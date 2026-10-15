"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Button } from "./ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations } from "@/lib/translations";
import { SITE_CONFIG } from "@/lib/config";

export function Hero() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center">
      {/* Background image */}
      <Image
        src={SITE_CONFIG.images.hero}
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-heading text-5xl font-medium tracking-tight text-text sm:text-6xl md:text-7xl">
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-dim">
          {t.hero.subtext}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              {t.hero.bookButton}
            </Button>
          </a>
          <a href="#services">
            <Button variant="secondary" size="lg">
              {t.hero.servicesButton}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
