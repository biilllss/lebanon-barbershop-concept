"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/lib/translations";
import { SITE_CONFIG } from "@/lib/config";

export function Gallery() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);
  const images = SITE_CONFIG.images.gallery;

  return (
    <section id="gallery" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-text">{t.gallery.title}</h2>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={t.gallery.alts[idx]}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
