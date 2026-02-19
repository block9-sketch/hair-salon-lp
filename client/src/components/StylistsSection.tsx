/* =============================================================
   StylistsSection — Neo-Noir Cinematic Design
   Stylist cards with cinematic portrait images
   Gold accent details
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Instagram, Award } from "lucide-react";

const STYLIST_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/xX0C76875r0RZkLcLiwsys/sandbox/1Ptskul2weXMqqwud1VNO8-img-5_1771499401000_na1fn_c3R5bGlzdC1wb3J0cmFpdA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveFgwQzc2ODc1cjBSWmtMY0xpd3N5cy9zYW5kYm94LzFQdHNrdWwyd2VYTXFxd3VkMVZOTzgtaW1nLTVfMTc3MTQ5OTQwMTAwMF9uYTFmbl9jM1I1YkdsemRDMXdiM0owY21GcGRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eolhFzU86w2CUkN4jt83CdjWxPy40qkEDYIpG2fhLn5wAkceDf5cILwv3wCyRa1EOGi8E7h6lHjkljR7E6G-zlxdiPOdv-VulLjFRL2iNueABcYeLwNxz7PusOhK0SnsybbU2ubHLoD7NAkdUX4g5NtLaf1KNBV40Jwl3qbMSJhbTgUuwlKoG9MAFTu1DgRiuXMe8T2RgziXU7jrQ1l0HlEqFm9GQp~DJIFC3qLkvVmCFVx9YSFJ7JaUxBJtceOb1ZkUuaO9moooChVurGsbQB3Eq-7r0~CWbFgpO21jk7Af~rY1rxMcJAnScxuMt3J5177ZQusa10DVvMdSr-yLuQ__";

const stylists = [
  {
    name: "Yuki Tanaka",
    nameJa: "田中 優希",
    role: "Art Director",
    experience: "15年",
    specialty: "カラー・デザインカット",
    awards: ["Best Colorist 2023", "VIDAL SASSOON認定"],
    image: STYLIST_IMAGE,
    instagram: "@yuki_luxe",
  },
  {
    name: "Kenji Mori",
    nameJa: "森 健二",
    role: "Senior Stylist",
    experience: "10年",
    specialty: "パーマ・メンズスタイル",
    awards: ["Hair Show Award 2022"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    instagram: "@kenji_luxe",
  },
  {
    name: "Mia Sato",
    nameJa: "佐藤 美亜",
    role: "Color Specialist",
    experience: "8年",
    specialty: "ハイライト・バレイヤージュ",
    awards: ["L'Oréal Color Trophy"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    instagram: "@mia_luxe",
  },
];

export default function StylistsSection() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stylists"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.11 0.008 260)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "oklch(0.72 0.12 75 / 0.025)",
          letterSpacing: "0.05em",
        }}
      >
        04
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
            <span
              className="text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Team
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl text-white leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            MEET THE<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>ARTISTS</span>
          </h2>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <div
              key={stylist.name}
              className="group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-6"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={stylist.image}
                  alt={stylist.nameJa}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredId === index ? "scale(1.05)" : "scale(1)",
                    objectPosition: "top center",
                  }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, oklch(0.10 0.008 260) 0%, transparent 50%)",
                  }}
                />

                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-10 h-10 transition-all duration-500"
                  style={{
                    borderTop: `1px solid oklch(0.72 0.12 75 / ${hoveredId === index ? 1 : 0.4})`,
                    borderLeft: `1px solid oklch(0.72 0.12 75 / ${hoveredId === index ? 1 : 0.4})`,
                  }}
                />

                {/* Instagram */}
                <div
                  className="absolute top-4 right-4 transition-opacity duration-300"
                  style={{ opacity: hoveredId === index ? 1 : 0 }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.12 75 / 0.9)" }}
                  >
                    <Instagram size={14} style={{ color: "oklch(0.13 0.008 260)" }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div
                      className="text-[10px] tracking-[0.4em] uppercase mb-1"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stylist.role}
                    </div>
                    <h3
                      className="text-2xl text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                    >
                      {stylist.nameJa}
                    </h3>
                    <p
                      className="text-white/30 text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stylist.name}
                    </p>
                  </div>
                  <div
                    className="text-right"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <div className="text-lg font-semibold">{stylist.experience}</div>
                    <div className="text-[10px] text-white/30">経験</div>
                  </div>
                </div>

                <div
                  className="h-px my-4"
                  style={{ background: "oklch(1 0 0 / 0.08)" }}
                />

                <p
                  className="text-white/40 text-xs mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  専門: {stylist.specialty}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stylist.awards.map((award) => (
                    <div
                      key={award}
                      className="flex items-center gap-1 px-2 py-1"
                      style={{
                        background: "oklch(0.72 0.12 75 / 0.1)",
                        border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                      }}
                    >
                      <Award size={10} style={{ color: "oklch(0.72 0.12 75)" }} />
                      <span
                        className="text-[9px] tracking-wider"
                        style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
