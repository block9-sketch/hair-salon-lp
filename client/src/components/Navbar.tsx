/* =============================================================
   Navbar — Neo-Noir Cinematic Design
   Dark translucent background with gold accents
   Smooth scroll navigation
   ============================================================= */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICE", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "STYLIST", href: "#stylists" },
  { label: "ACCESS", href: "#access" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.13_0.008_260/0.95)] backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex flex-col leading-none"
            >
              <span
                className="text-2xl tracking-[0.3em] font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.72 0.12 75)" }}
              >
                LUXE
              </span>
              <span
                className="text-[10px] tracking-[0.5em] text-white/60 font-light"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                HAIR SALON
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[11px] tracking-[0.3em] text-white/60 hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#booking")}
                className="hidden md:block btn-gold text-[10px]"
              >
                予約する
              </button>
              <button
                className="md:hidden text-white/70 hover:text-[oklch(0.72_0.12_75)] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.10 0.008 260/0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl tracking-[0.3em] text-white/80 hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#booking")}
            className="btn-gold mt-4"
          >
            予約する
          </button>
        </div>
      </div>
    </>
  );
}
