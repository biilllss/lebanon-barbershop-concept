"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "./ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getTranslations } from "@/lib/translations";

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const t = getTranslations(lang);
  const isRtl = lang === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "about", label: t.nav.about, href: "#about" },
    { key: "services", label: t.nav.services, href: "#services" },
    { key: "gallery", label: t.nav.gallery, href: "#gallery" },
    { key: "barbers", label: t.nav.barbers, href: "#barbers" },
    { key: "reviews", label: t.nav.reviews, href: "#reviews" },
    { key: "location", label: t.nav.location, href: "#location" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          {/* Logo — always Playfair Display regardless of language */}
          <Link
            href="#"
            className="font-brand text-xl font-semibold text-text"
            aria-label="Blade & Cedar — home"
          >
            Blade &amp; Cedar
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-text-dim hover:text-accent transition-colors"
                onClick={closeMobile}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: lang toggle, book button, mobile menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href={buildWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="primary" size="sm">
                {t.nav.bookNow}
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-none border border-text/20 p-2 text-text hover:bg-text/10 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-text transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background" onClick={closeMobile} />
        <nav
          className={`absolute inset-y-0 inset-inline-end-0 h-screen w-72 overflow-y-auto border-l border-white/5 bg-background px-8 py-20 flex flex-col gap-8 transition-transform duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : isRtl
                ? "-translate-x-full"
                : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-2xl font-medium text-text hover:text-accent transition-colors"
              onClick={closeMobile}
            >
              {item.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="mt-4"
          >
            <Button variant="primary" size="md">
              {t.nav.bookNow}
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}
