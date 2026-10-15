import "./globals.css";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_CONFIG } from "@/lib/config";

/* ─── Font setup via next/font ─────────────────────────────── */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["latin", "latin-ext", "arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.metadata.title,
    template: `%s | Blade & Cedar`,
  },
  description: SITE_CONFIG.metadata.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.metadata.url,
    siteName: "Blade & Cedar",
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    images: [
      {
        url: SITE_CONFIG.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Blade & Cedar barbershop interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    images: [SITE_CONFIG.metadata.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_CONFIG.metadata.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ─── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          playfairDisplay.variable,
          cairo.variable,
          "min-h-screen bg-background text-text antialiased",
        ].join(" ")}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
