"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { getTranslations } from "@/lib/translations";

/* ─── Star rating ──────────────────────────────────────────── */

function StarIcon({ filled }: { filled: boolean }) {
  return filled ? (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7.91 14.15 4 9.27l6.91-1.01L12 2z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      width="18"
      height="18"
      className="text-text-dim"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7.91 14.15 4 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────── */

export function Reviews() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section id="reviews" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-text">{t.reviews.title}</h2>
        <p className="mt-4 text-sm text-text-dim">{t.reviews.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
        {t.reviews.items.map((review, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="flex flex-col p-8 border border-white/5">
              <StarRating rating={review.rating} />
              <p className="text-sm text-text-dim mb-4">"{review.text}"</p>
              <p className="text-sm font-medium text-text">— {review.author}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
