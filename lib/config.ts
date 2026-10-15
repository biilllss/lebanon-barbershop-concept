/**
 * Blade & Cedar — Site Configuration
 * Change values here to update the phone number, image sources, or social links
 * without touching component code.
 *
 * All images now live in /public/ as SVGs so there are no external
 * dependencies that can 404.  Logo is /public/logo.svg.
 */

export const SITE_CONFIG = {
  // ─── Logo ───────────────────────────────────────────
  logo: "/logo.svg",

  // ─── WhatsApp ───────────────────────────────────────────
  whatsapp: {
    // Lebanon country code (961) + mobile number — replace X's with real digits
    phoneNumber: "961XXXXXXXX",
    message: {
      en: "Hi Blade & Cedar, I'd like to book an appointment.",
      ar: "مرحباً، أود حجز موعد في بليد آند سيدر.",
    },
  },

  // ─── Colors (mirrored in globals.css variables) ─────────
  colors: {
    background: "#121212",
    surface: "#1A1A1A",
    text: "#F2EDE4",
    accent: "#C9A24B",
  },

  // ─── Image URLs — all local /public/images/ SVGs ─────────
  images: {
    hero: "/images/hero.svg",
    about: "/images/about.svg",
    gallery: [
      "/images/gallery-0.svg",
      "/images/gallery-1.svg",
      "/images/gallery-2.svg",
      "/images/gallery-3.svg",
      "/images/gallery-4.svg",
      "/images/gallery-5.svg",
    ],
    barbers: [
      "/images/barber-0.svg",
      "/images/barber-1.svg",
      "/images/barber-2.svg",
    ],
  },

  // ─── Social ─────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/bladeandcedar",
  },

  // ─── Metadata ───────────────────────────────────────────
  metadata: {
    title: "Blade & Cedar — Premium Barbershop | Beirut",
    description:
      "A premium barbershop experience in the heart of Beirut, where traditional craftsmanship meets modern style.",
    url: "https://blade-and-cedar.vercel.app",
    ogImage: "/images/hero.svg",
  },
} as const;
