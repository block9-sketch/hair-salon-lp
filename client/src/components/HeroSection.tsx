/* =============================================================
   HeroSection — Neo-Noir Cinematic Design
   Full-screen cinematic hero with parallax effect
   Dark background with warm gold text overlay
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/xX0C76875r0RZkLcLiwsys/sandbox/1Ptskul2weXMqqwud1VNO8-img-1_1771499397000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveFgwQzc2ODc1cjBSWmtMY0xpd3N5cy9zYW5kYm94LzFQdHNrdWwyd2VYTXFxd3VkMVZOTzgtaW1nLTFfMTc3MTQ5OTM5NzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FrVXsHtT2c7nyCMNRu1wi8jH1mC3MYMSxcTEtxPJ75h12mHeUINcpnfZLR3IcvBFAX1S~hYdKPamzVe20p7Mgbdr636GAgPGiFJCgfbhx~XwG7QG3G48Bd-36H68yclPDBCf9Dl8I8vwpjbp38BIsGeAO7NgHpFzno3MNLCtKcH0Vx~-CBo9mLnDchnCjGeDXhQBzC33-ako8Aa7e3kvXJZKpzJO0FiH33guZ3YZN3E5cMjYgS-ovwwXdqaQYl7mHxng95DLkaUARLIHirEjSBQRcMDWCvoouWleyahK52fUc4ISkNPLvxtivTHsbd7ldR2vEAfKmtfwjpeSrk76Ww__";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const next = document.querySelector("#about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
      style={{ background: "oklch(0.10 0.008 260)" }}
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <img
          src={HERO_IMAGE}
          alt="LUXE HAIR SALON"
          className="w-full h-full object-cover object-center"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
          onLoad={() => setLoaded(true)}
        />
        {/* Multi-layer dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.10 0.008 260 / 0.85) 0%, oklch(0.10 0.008 260 / 0.50) 50%, oklch(0.10 0.008 260 / 0.20) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.10 0.008 260) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[1400px]">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
            <span
              className="text-[11px] tracking-[0.5em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Tokyo · Omotesando
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span
              className="block text-[clamp(4rem,12vw,11rem)] text-white"
              style={{ letterSpacing: "0.05em" }}
            >
              LUXE
            </span>
            <span
              className="block text-[clamp(2rem,6vw,5.5rem)]"
              style={{
                letterSpacing: "0.3em",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              HAIR SALON
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            あなたの美しさを、映画のワンシーンのように。<br />
            <span className="text-white/40 text-base not-italic" style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "normal" }}>
              Crafting beauty that tells your story.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="btn-gold-filled"
              onClick={() => {
                document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ご予約はこちら
            </button>
            <button
              className="btn-gold"
              onClick={() => {
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              サービスを見る
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="absolute bottom-20 left-8 md:left-16 lg:left-24 flex gap-12 transition-all duration-1000 delay-300"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {[
            { num: "15+", label: "年の経験" },
            { num: "3,000+", label: "満足のお客様" },
            { num: "8", label: "受賞歴" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.72 0.12 75)", letterSpacing: "0.05em" }}
              >
                {stat.num}
              </span>
              <span
                className="text-[10px] tracking-[0.2em] text-white/40 uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-white/30 hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
