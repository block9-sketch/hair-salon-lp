/* =============================================================
   GallerySection — Neo-Noir Cinematic Design
   Masonry-style gallery with hover zoom effects
   Gold overlay on hover
   ============================================================= */

import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "ヘアスタイル 1",
    span: "col-span-1 row-span-2",
    label: "Natural Wave",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    alt: "ヘアスタイル 2",
    span: "col-span-1 row-span-1",
    label: "Sleek Bob",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "ヘアスタイル 3",
    span: "col-span-1 row-span-1",
    label: "Elegant Updo",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "ヘアスタイル 4",
    span: "col-span-2 row-span-1",
    label: "Balayage Color",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "ヘアスタイル 5",
    span: "col-span-1 row-span-1",
    label: "Textured Cut",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
    alt: "ヘアスタイル 6",
    span: "col-span-1 row-span-1",
    label: "Classic Style",
  },
];

export default function GallerySection() {
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
      id="gallery"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.13 0.008 260)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "oklch(0.72 0.12 75 / 0.025)",
          letterSpacing: "0.05em",
        }}
      >
        03
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
              Gallery
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl text-white leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            OUR<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>WORKS</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          style={{ gridAutoRows: "240px" }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden ${item.span} cursor-pointer`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: `all 0.7s ease ${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hoveredId === item.id ? "scale(1.08)" : "scale(1)",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-5 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(to top, oklch(0.10 0.008 260 / 0.9) 0%, transparent 60%)",
                  opacity: hoveredId === item.id ? 1 : 0,
                }}
              >
                <div>
                  <div
                    className="w-8 h-px mb-2"
                    style={{ background: "oklch(0.72 0.12 75)" }}
                  />
                  <span
                    className="text-sm tracking-widest text-white uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Default subtle gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, oklch(0.10 0.008 260 / 0.4) 0%, transparent 50%)",
                  opacity: hoveredId === item.id ? 0 : 1,
                  transition: "opacity 0.4s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className="flex items-center justify-center mt-12 gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.6s",
          }}
        >
          <div className="h-px flex-1" style={{ background: "oklch(1 0 0 / 0.08)" }} />
          <a
            href="#"
            className="flex items-center gap-3 text-white/40 hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              @luxe_hair_salon
            </span>
          </a>
          <div className="h-px flex-1" style={{ background: "oklch(1 0 0 / 0.08)" }} />
        </div>
      </div>
    </section>
  );
}
