/* =============================================================
   Home Page — LUXE HAIR SALON
   Neo-Noir Cinematic Design
   All sections assembled
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import StylistsSection from "@/components/StylistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.13 0.008 260)" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <StylistsSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
