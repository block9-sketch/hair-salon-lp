/* =============================================================
   TestimonialsSection — Neo-Noir Cinematic Design
   Elegant testimonial cards with star ratings
   Cinematic quote styling
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "山田 花子",
    role: "会社員 · 34歳",
    rating: 5,
    text: "田中さんに担当していただいて3年になります。毎回、私の気分や生活スタイルを丁寧に聞いてくれて、想像以上のスタイルに仕上げてくれます。サロンの雰囲気も大好きで、来るたびに特別な気持ちになれます。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "鈴木 美咲",
    role: "フリーランス · 28歳",
    rating: 5,
    text: "カラーリングが本当に上手で、他のサロンでは実現できなかった色を完璧に再現してくれました。ダメージも最小限で、施術後の髪の状態が全然違います。もう他のサロンには行けません。",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    name: "中村 さくら",
    role: "学生 · 22歳",
    rating: 5,
    text: "成人式のヘアセットをお願いしました。当日の朝から丁寧に対応してくださり、理想通りの仕上がりに感動しました。写真を見るたびに幸せな気持ちになります。本当にありがとうございました。",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.13 0.008 260)" }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-16 left-8 md:left-16 text-[12rem] leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "oklch(0.72 0.12 75 / 0.06)",
        }}
      >
        "
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
            <span
              className="text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Testimonials
            </span>
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
          </div>
          <h2
            className="text-5xl md:text-7xl text-white leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            WHAT CLIENTS<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>SAY</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 transition-all duration-500"
              style={{
                background: index === activeIndex
                  ? "oklch(0.18 0.008 260)"
                  : "oklch(0.15 0.008 260)",
                border: `1px solid ${index === activeIndex ? "oklch(0.72 0.12 75 / 0.3)" : "oklch(1 0 0 / 0.06)"}`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s, background 0.5s ease, border 0.5s ease`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={24}
                className="mb-6"
                style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="oklch(0.72 0.12 75)"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-white/60 text-sm leading-loose mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 overflow-hidden"
                  style={{ border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div
                    className="text-sm text-white font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-[10px] text-white/30"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Active indicator */}
              {index === activeIndex && (
                <div
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-5000"
                  style={{
                    background: "oklch(0.72 0.12 75)",
                    width: "100%",
                    animation: "none",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="transition-all duration-300"
              style={{
                width: index === activeIndex ? "24px" : "8px",
                height: "2px",
                background: index === activeIndex ? "oklch(0.72 0.12 75)" : "oklch(1 0 0 / 0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
