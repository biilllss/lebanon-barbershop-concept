"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/lib/translations";
import { SITE_CONFIG } from "@/lib/config";

export function About() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="about" className="section-container">
      <div className="mx-auto grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl text-text">{t.about.title}</h2>
          <div className="mt-6 h-px w-40 bg-accent" />
          <p className="mt-6 max-w-prose text-lg text-text-dim">
            {t.about.body}
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={SITE_CONFIG.images.about}
            alt="Barber crafting a precise cut at Blade & Cedar"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
