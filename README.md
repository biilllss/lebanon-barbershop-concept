# Blade & Cedar

A premium barbershop concept website built with **Next.js 14** (App Router), **Tailwind CSS**, and a minimal shadcn/ui-style component set. Fully responsive, bilingual (English / Arabic), and deploy-ready for Vercel.

## Tech Stack

| Layer       | Choice                          |
|-------------|---------------------------------|
| Framework   | Next.js 14.2.4 (App Router)     |
| Styling     | Tailwind CSS 3.4                  |
| Components  | Custom shadcn/ui-compatible     |
| Fonts       | Inter, Playfair Display, Cairo   |
| Images      | next/image + Unsplash            |
| Deploy      | Vercel (zero-config)             |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
blade-cedar/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, LanguageProvider
│   ├── page.tsx            # Page assembly — renders all sections
│   └── globals.css         # Tailwind directives + design-token variables
├── components/
│   ├── Header.tsx          # Sticky header with nav + language toggle
│   ├── Hero.tsx            # Full-screen hero with WhatsApp CTA
│   ├── About.tsx           # Shop story (image + copy)
│   ├── Services.tsx        # Services & prices grid
│   ├── Gallery.tsx         # 6-image responsive grid with hover zoom
│   ├── Barbers.tsx         # Meet the barbers (3 profiles)
│   ├── Reviews.tsx         # Customer reviews with star ratings
│   ├── Location.tsx        # Address, hours, styled map placeholder
│   ├── CTA.tsx             # Final call-to-action with WhatsApp button
│   ├── Footer.tsx          # Social links, copyright, attribution
│   ├── WhatsAppFloat.tsx   # Floating WhatsApp button (mobile only)
│   ├── LanguageProvider.tsx # Context for EN/AR switching
│   ├── LanguageToggle.tsx   # EN | AR toggle switch
│   ├── FadeIn.tsx           # Scroll-triggered fade-up animation
│   └── ui/button.tsx        # shadcn-style Button (primary/secondary/ghost)
├── lib/
│   ├── config.ts            # Site config: WhatsApp number, image URLs, colors
│   ├── translations.ts      # All user-facing text (EN + AR)
│   └── whatsapp.ts          # WhatsApp deep-link URL builder
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Change the WhatsApp number

Edit `lib/config.ts` → `SITE_CONFIG.whatsapp.phoneNumber`:

```ts
phoneNumber: "961XXXXXXXX",
```

This single value flows to every "Book" button and the floating WhatsApp button.

### Change images

All image URLs live in `lib/config.ts` → `SITE_CONFIG.images`. Each key is documented:

| Key        | Usage                      |
|------------|----------------------------|
| `hero`     | Hero background            |
| `about`    | About section image        |
| `tools`    | (reserved)                 |
| `gallery`  | Array of 6 gallery images  |
| `barbers`  | Array of 3 barber portraits|

### Change text

All copy lives in `lib/translations.ts` in a single `translations` object keyed by language (`en` / `ar`). Edit the strings there — no component changes needed.

### Change colors

The palette is defined in both `tailwind.config.js` (for utility classes) and `:root` in `globals.css` (for custom CSS that references color variables):

```css
:root {
  --color-background: #121212;   /* charcoal */
  --color-surface:    #1a1a1a;   /* slightly lighter card bg */
  --color-text:       #f2ede4;   /* warm off-white */
  --color-text-dim:   #a6a094;   /* muted secondary text */
  --color-accent:     #c9a24b;   /* antique gold */
  --color-accent-hover: #b8994d; /* gold hover state */
}
```

## Design Decisions

- **Sharp edges**: all buttons and cards use `rounded-none`. Subtle hover transforms (translate-x, scale-105) provide interactivity.
- **Logical properties**: layout uses `inset-inline-start`, `translate-x`, etc. so the mobile menu and floating button mirror correctly in RTL.
- **Font strategy**: Playfair Display for headings (LTR) / Cairo (RTL); Inter for body; Cairo for Arabic body text. The brand name always uses Playfair via `.font-brand { font-family: var(--font-playfair-display) !important }`.
- **Motion**: fade-up via Intersection Observer with `prefers-reduced-motion` respect. No heavy animation libraries.
- **Images**: `next/image` with `object-cover`, responsive `sizes`, and `priority` on the hero.

## Accessibility Notes

- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`.
- Anchor links use `href="#id"` for native browser navigation.
- All icon-only buttons have `aria-label`.
- Decorative images have `aria-hidden="true"` or descriptive `alt`.
- Focus rings on interactive elements via Tailwind `focus-visible`.
- `prefers-reduced-motion` honored — all transitions disabled.
- Arabic mode: `dir="rtl"` set on `<html>` via LanguageProvider, mirrored layout via logical properties.

## License

This is a concept/portfolio project. All content — barber names, reviews, addresses — is fictional. Unsplash image URLs are placeholders; replace with your own assets.
