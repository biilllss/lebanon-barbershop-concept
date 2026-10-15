"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { getTranslations } from "@/lib/translations";

export function Barbers() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="barbers" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-text">{t.barbers.title}</h2>
        <p className="mt-4 text-sm text-text-dim">{t.barbers.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
        {t.barbers.profiles.map((barber, idx) => (
          <FadeIn key={idx} delay={idx * 100} className="text-center">
            <div className="relative mx-auto mb-6 aspect-square w-48 overflow-hidden">
              <Image
                src={barber.image}
                alt={barber.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <h3 className="font-heading text-xl text-text">{barber.name}</h3>
            <p className="mt-1 text-sm text-text-dim">{barber.role}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
