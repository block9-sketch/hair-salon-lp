/* =============================================================
   AboutSection — Neo-Noir Cinematic Design
   Asymmetric layout with salon interior image
   Gold accent lines and cinematic typography
   ============================================================= */

import { useEffect, useRef, useState } from "react";

const INTERIOR_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/xX0C76875r0RZkLcLiwsys/sandbox/1Ptskul2weXMqqwud1VNO8-img-4_1771499392000_na1fn_c2Fsb24taW50ZXJpb3I.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveFgwQzc2ODc1cjBSWmtMY0xpd3N5cy9zYW5kYm94LzFQdHNrdWwyd2VYTXFxd3VkMVZOTzgtaW1nLTRfMTc3MTQ5OTM5MjAwMF9uYTFmbl9jMkZzYjI0dGFXNTBaWEpwYjNJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U4zvC4eCQ0ja927heWOHsP~ZznpmMBS4-5Dcre6AfEFFm7O6emern9YFyt~JmdxeO2ABk86OHo72YXMQtIj4~fGyFCMFhWFdi6wlIPZBtIDBSley2eHUZU7y7k-mmPrbnPOzGsVXNVyFgSowd7pWhz8FNLB7kVzOzntvmeGJhBrRZMFuNou7wwzmgQIuieY~PYtD143dS~nvcnKIY5KrQ7WYJBjoyzBHCeXNLZlQSHdJ4HtYQM7DR9pq7NLt-PRmMQy7D89hvuO8mSVQDsYhu07Ih-chsaZ0JeKxfejoBIsvRAgUNtl2jeKVBdkjZijcQqHtNtB6YDxapxTYEORnXg__";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "oklch(0.13 0.008 260)" }}>
      {/* Background number decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "oklch(0.72 0.12 75 / 0.03)",
          letterSpacing: "0.05em",
        }}
      >
        01
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.9s ease",
            }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src={INTERIOR_IMAGE}
                alt="LUXE HAIR SALON インテリア"
                className="w-full h-full object-cover"
                style={{ transform: "scale(1.05)" }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16"
                style={{
                  borderTop: "2px solid oklch(0.72 0.12 75)",
                  borderLeft: "2px solid oklch(0.72 0.12 75)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-16 h-16"
                style={{
                  borderBottom: "2px solid oklch(0.72 0.12 75)",
                  borderRight: "2px solid oklch(0.72 0.12 75)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 flex flex-col items-center justify-center"
              style={{
                background: "oklch(0.72 0.12 75)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <span
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.13 0.008 260)" }}
              >
                15
              </span>
              <span
                className="text-[9px] tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.13 0.008 260)" }}
              >
                YEARS
              </span>
            </div>
          </div>

          {/* Text Column */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.9s ease 0.2s",
            }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
              <span
                className="text-[10px] tracking-[0.5em] uppercase"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
              >
                About Us
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              美しさは、<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>物語</span>である。
            </h2>

            <p
              className="text-white/60 text-lg mb-6 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              "Beauty is not just appearance — it is the story you tell the world."
            </p>

            <p
              className="text-white/50 text-sm leading-loose mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              LUXE HAIR SALONは、2009年に東京・表参道に誕生したラグジュアリーヘアサロンです。
              映画のワンシーンのような空間で、熟練のスタイリストがあなた一人ひとりの美しさを丁寧に引き出します。
              単なるヘアカットではなく、あなたの個性と物語を形にする体験を提供します。
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: "完全個室対応", desc: "プライベートな空間でリラックス" },
                { title: "オーガニック製品", desc: "髪と地球に優しい素材のみ使用" },
                { title: "カスタムデザイン", desc: "あなただけのスタイルを提案" },
                { title: "アフターケア", desc: "施術後のサポートも充実" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
                    <span
                      className="text-xs tracking-wider text-white/80 font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p
                    className="text-xs text-white/40 pl-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="btn-gold"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              サービスを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
