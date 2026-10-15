import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Barbers } from "@/components/Barbers";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

/**
 * Blade & Cedar — one-page layout.
 * Each section component renders its own <section> with the id
 * the Header anchor links point to (#about, #services, etc.).
 * pt-16 clears the fixed header.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Barbers />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
