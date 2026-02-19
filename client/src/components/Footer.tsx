/* =============================================================
   Footer — Neo-Noir Cinematic Design
   Dark footer with gold accents
   Access info + social links
   ============================================================= */

import { MapPin, Phone, Clock, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="access" style={{ background: "oklch(0.09 0.008 260)" }}>
      {/* Access Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map placeholder */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/9", background: "oklch(0.15 0.008 260)" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <MapPin size={32} style={{ color: "oklch(0.72 0.12 75)" }} />
              <div className="text-center">
                <p
                  className="text-white/60 text-sm mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  東京都渋谷区神宮前5-1-1
                </p>
                <p
                  className="text-white/40 text-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  表参道駅 A4出口より徒歩3分
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[10px] mt-2"
              >
                Google Mapで見る
              </a>
            </div>
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-8 h-8"
              style={{
                borderTop: "1px solid oklch(0.72 0.12 75 / 0.4)",
                borderLeft: "1px solid oklch(0.72 0.12 75 / 0.4)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8"
              style={{
                borderBottom: "1px solid oklch(0.72 0.12 75 / 0.4)",
                borderRight: "1px solid oklch(0.72 0.12 75 / 0.4)",
              }}
            />
          </div>

          {/* Access Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
              <span
                className="text-[10px] tracking-[0.5em] uppercase"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Access
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl text-white leading-none mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              FIND US<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>OMOTESANDO</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "住所",
                  content: "東京都渋谷区神宮前5-1-1\n表参道ヒルズ B2F",
                },
                {
                  icon: Phone,
                  title: "電話番号",
                  content: "03-1234-5678",
                },
                {
                  icon: Clock,
                  title: "営業時間",
                  content: "月・水〜日: 10:00 - 20:00\n火曜日: 定休日",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "oklch(0.72 0.12 75 / 0.1)",
                        border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                      }}
                    >
                      <Icon size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <div
                        className="text-[10px] tracking-[0.3em] uppercase mb-1"
                        style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.title}
                      </div>
                      <p
                        className="text-white/50 text-sm whitespace-pre-line leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span
                className="text-xl tracking-[0.3em] font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.72 0.12 75)" }}
              >
                LUXE HAIR SALON
              </span>
              <span
                className="text-[10px] tracking-[0.3em] text-white/30"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Tokyo · Omotesando
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "oklch(0.72 0.12 75 / 0.1)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "oklch(0.72 0.12 75 / 0.1)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                <Twitter size={14} />
              </a>
            </div>

            {/* Copyright */}
            <p
              className="text-white/20 text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © 2024 LUXE HAIR SALON. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
