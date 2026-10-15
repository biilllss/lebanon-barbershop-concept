/**
 * Blade & Cedar — Site Configuration
 * Change values here to update the phone number, image sources, or social links
 * without touching component code.
 */

export const SITE_CONFIG = {
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

  // ─── Image URLs — all Unsplash, easy to replace ─────────
  images: {
    hero:
      "https://images.unsplash.com/photo-1503602638996-26d9d5f7c0d4?auto=format&fit=crop&w=2100&q=80",
    about:
      "https://images.unsplash.com/photo-1575517616116-9bc5e1b1d8b3?auto=format&fit=crop&w=800&q=80",
    tools:
      "https://images.unsplash.com/photo-1519085360774-6ef66e1f3b9b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-15716020706938-8b3661eee3f0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521441176212-70aa60c673ce?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622394947125-13b3d3b4a7db?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590779310340-6c300c0a5e01?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513673954982-2df06b8d4a37?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593634978195-3a14b4a6c2f6?auto=format&fit=crop&w=600&q=80",
    ],
    barbers: [
      "https://images.unsplash.com/photo-1560250097-0b93528c-3111?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507003211167-993222f164b4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1562277391-42131dcd5a5a?auto=format&fit=crop&w=600&q=80",
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
    ogImage:
      "https://images.unsplash.com/photo-1503602638996-26d9d5f7c0d4?auto=format&fit=crop&w=1200&q=80",
  },
} as const;
