/* =============================================================
   ServicesSection — Neo-Noir Cinematic Design
   Dark card grid with gold hover effects
   Service images with cinematic overlay
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Scissors, Sparkles, Wand2, Droplets, Star, Clock } from "lucide-react";

const CUT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/xX0C76875r0RZkLcLiwsys/sandbox/1Ptskul2weXMqqwud1VNO8-img-2_1771499393000_na1fn_c2VydmljZS1jdXQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveFgwQzc2ODc1cjBSWmtMY0xpd3N5cy9zYW5kYm94LzFQdHNrdWwyd2VYTXFxd3VkMVZOTzgtaW1nLTJfMTc3MTQ5OTM5MzAwMF9uYTFmbl9jMlZ5ZG1salpTMWpkWFEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i06CTgRlOqouI--gyUNC-x-iS3NWcmE93O848i8ZDKWI44FBkrs5HWPPblSs8pR7RFbgr2izvT0c5XxlYk0qlQJvXzDxWjhzG68XSu-EB3wSbK9w0s7dS4yVkH~UL06MnjJc9~jP6TrtBejkjV~xJ4Svne9bSUb5V8wzQIjgh8YzxB9UNXjdL~77~gXUM7Z8Szkty9xEVkUCYAVQklA32dvy-iVbC0MFKFvDrdv0bKfLLdrfVwvINOajRp7vidcRj-Fg2mVIvPIKzD09rVZay37Wszfsye4zQZOjbqzDeg1RzEtFs3r2JqVhrXVqtLpXByLVAMOS5UGSXW8FMncMxA__";
const COLOR_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/xX0C76875r0RZkLcLiwsys/sandbox/1Ptskul2weXMqqwud1VNO8-img-3_1771499389000_na1fn_c2VydmljZS1jb2xvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveFgwQzc2ODc1cjBSWmtMY0xpd3N5cy9zYW5kYm94LzFQdHNrdWwyd2VYTXFxd3VkMVZOTzgtaW1nLTNfMTc3MTQ5OTM4OTAwMF9uYTFmbl9jMlZ5ZG1salpTMWpiMnh2Y2cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qKlLvNnRr~jvk2blzkoHrXAhFZGb-9TzjrxfpJGhvzNDH3-Sd-y31Jvaatu7Y83hqbcbpKUIpSgqcIbfLUh3DcbY-OA48YzVMoMxm~HSVBL7To-hlYOjU1im5iUZfeDbqyxxOxBwLuu3ctlL6xvyRQoBccjWCHFM6Fnr3UbBJrl-n3iBShpkeThg0JYlacCBLtVIVtShUnSAyTQr3J0DqatvVKwmuOrqf~487tgNC9SyjEr1fZUEQ3K~oS-ibBx9uP9cKE1pt2xLu6WdKOIh7YFPa-hFW0AkI7UElfg5fnlpG8THSvICt1TeY-s0qvtzcxPjIhqtLWkvzKob09mQtA__";

const services = [
  {
    id: "01",
    icon: Scissors,
    title: "ヘアカット",
    subtitle: "Hair Cut",
    desc: "あなたの骨格・髪質・ライフスタイルを丁寧にカウンセリングし、最適なスタイルをデザインします。",
    price: "¥8,800〜",
    duration: "60分〜",
    image: CUT_IMAGE,
  },
  {
    id: "02",
    icon: Sparkles,
    title: "カラーリング",
    subtitle: "Hair Color",
    desc: "最新のカラー技術とオーガニック染料で、ダメージを最小限に抑えながら理想の色を実現します。",
    price: "¥15,400〜",
    duration: "90分〜",
    image: COLOR_IMAGE,
  },
  {
    id: "03",
    icon: Wand2,
    title: "パーマ",
    subtitle: "Perm",
    desc: "デジタルパーマからコールドパーマまで、あなたの髪質に合わせた最適な施術を提供します。",
    price: "¥18,700〜",
    duration: "120分〜",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "04",
    icon: Droplets,
    title: "トリートメント",
    subtitle: "Treatment",
    desc: "髪の深部から補修・保湿する集中トリートメントで、サロン帰りのような艶髪を持続させます。",
    price: "¥6,600〜",
    duration: "45分〜",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80",
  },
  {
    id: "05",
    icon: Star,
    title: "ヘアセット",
    subtitle: "Hair Set",
    desc: "結婚式・成人式・パーティーなど特別な日のためのヘアセット。あなたの晴れ姿を美しく演出します。",
    price: "¥11,000〜",
    duration: "60分〜",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
  },
  {
    id: "06",
    icon: Clock,
    title: "ヘッドスパ",
    subtitle: "Head Spa",
    desc: "頭皮環境を整え、深いリラクゼーションをもたらすプレミアムヘッドスパ。心身ともに癒されます。",
    price: "¥9,900〜",
    duration: "60分〜",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
];

function ServiceCard({ service, index, visible }: { service: typeof services[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative overflow-hidden group"
      style={{
        background: "oklch(0.17 0.008 260)",
        border: "1px solid oklch(1 0 0 / 0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, oklch(0.17 0.008 260) 100%)",
            opacity: hovered ? 0.7 : 0.9,
          }}
        />
        {/* Service number */}
        <div
          className="absolute top-4 right-4 text-5xl font-bold leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: "oklch(0.72 0.12 75 / 0.3)",
            letterSpacing: "0.05em",
          }}
        >
          {service.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Icon size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
              <span
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.subtitle}
              </span>
            </div>
            <h3
              className="text-xl text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            >
              {service.title}
            </h3>
          </div>
          <div className="text-right">
            <div
              className="text-lg font-semibold"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.price}
            </div>
            <div
              className="text-[10px] text-white/30"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.duration}
            </div>
          </div>
        </div>

        <p
          className="text-white/40 text-xs leading-relaxed mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.desc}
        </p>

        {/* Hover line */}
        <div
          className="h-px transition-all duration-500"
          style={{
            background: "oklch(0.72 0.12 75)",
            width: hovered ? "100%" : "0%",
          }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
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
      id="services"
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
        02
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
              Our Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-5xl md:text-7xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              MENU &<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>SERVICES</span>
            </h2>
            <p
              className="text-white/40 text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              すべてのメニューは、お客様一人ひとりに合わせてカスタマイズされます。
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.6s",
          }}
        >
          <button
            className="btn-gold-filled"
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            ご予約・お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}
