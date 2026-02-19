/* =============================================================
   BookingSection — Neo-Noir Cinematic Design
   Dark form with gold accents
   Elegant input styling
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, User, Mail, Phone, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export default function BookingSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("ご予約リクエストを受け付けました。確認メールをお送りします。", {
      style: {
        background: "oklch(0.17 0.008 260)",
        border: "1px solid oklch(0.72 0.12 75 / 0.3)",
        color: "oklch(0.93 0.015 85)",
      },
    });
  };

  const inputStyle = {
    background: "oklch(0.17 0.008 260)",
    border: "1px solid oklch(1 0 0 / 0.1)",
    color: "oklch(0.93 0.015 85)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    display: "block",
    fontSize: "10px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "oklch(0.72 0.12 75)",
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: "8px",
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.11 0.008 260)" }}
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
        05
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left: Info */}
          <div
            className="lg:col-span-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.9s ease",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.12 75)" }} />
              <span
                className="text-[10px] tracking-[0.5em] uppercase"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Reservation
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl text-white leading-none mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              BOOK YOUR<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>SESSION</span>
            </h2>

            <p
              className="text-white/50 text-sm leading-loose mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ご予約はオンラインフォームよりお気軽にお申し込みください。
              確認後、担当スタッフよりご連絡いたします。
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "電話", value: "03-1234-5678" },
                { icon: Mail, label: "メール", value: "info@luxe-hair.jp" },
                { icon: Clock, label: "営業時間", value: "10:00 - 20:00（火曜定休）" },
                { icon: Calendar, label: "住所", value: "東京都渋谷区神宮前5-1-1\n表参道ヒルズ B2F" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
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
                        {item.label}
                      </div>
                      <div
                        className="text-sm text-white/60 whitespace-pre-line"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.9s ease 0.2s",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>
                    <span className="flex items-center gap-2">
                      <User size={10} />
                      お名前
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="山田 花子"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    <span className="flex items-center gap-2">
                      <Mail size={10} />
                      メールアドレス
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>
                  <span className="flex items-center gap-2">
                    <Phone size={10} />
                    電話番号
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="090-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                />
              </div>

              {/* Service + Stylist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label style={labelStyle}>ご希望のメニュー</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    required
                  >
                    <option value="" disabled style={{ background: "oklch(0.17 0.008 260)" }}>選択してください</option>
                    <option value="cut" style={{ background: "oklch(0.17 0.008 260)" }}>ヘアカット</option>
                    <option value="color" style={{ background: "oklch(0.17 0.008 260)" }}>カラーリング</option>
                    <option value="perm" style={{ background: "oklch(0.17 0.008 260)" }}>パーマ</option>
                    <option value="treatment" style={{ background: "oklch(0.17 0.008 260)" }}>トリートメント</option>
                    <option value="set" style={{ background: "oklch(0.17 0.008 260)" }}>ヘアセット</option>
                    <option value="spa" style={{ background: "oklch(0.17 0.008 260)" }}>ヘッドスパ</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-[calc(50%+8px)] pointer-events-none"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                </div>
                <div className="relative">
                  <label style={labelStyle}>ご希望のスタイリスト</label>
                  <select
                    value={formData.stylist}
                    onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                  >
                    <option value="" style={{ background: "oklch(0.17 0.008 260)" }}>指定なし</option>
                    <option value="yuki" style={{ background: "oklch(0.17 0.008 260)" }}>田中 優希</option>
                    <option value="kenji" style={{ background: "oklch(0.17 0.008 260)" }}>森 健二</option>
                    <option value="mia" style={{ background: "oklch(0.17 0.008 260)" }}>佐藤 美亜</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-[calc(50%+8px)] pointer-events-none"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>
                    <span className="flex items-center gap-2">
                      <Calendar size={10} />
                      ご希望日
                    </span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ ...inputStyle, colorScheme: "dark" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    required
                  />
                </div>
                <div className="relative">
                  <label style={labelStyle}>
                    <span className="flex items-center gap-2">
                      <Clock size={10} />
                      ご希望時間
                    </span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    required
                  >
                    <option value="" disabled style={{ background: "oklch(0.17 0.008 260)" }}>選択してください</option>
                    {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map((t) => (
                      <option key={t} value={t} style={{ background: "oklch(0.17 0.008 260)" }}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-[calc(50%+8px)] pointer-events-none"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>ご要望・ご質問</label>
                <textarea
                  placeholder="ご要望やご質問があればお気軽にどうぞ..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                />
              </div>

              <button type="submit" className="btn-gold-filled w-full py-4">
                予約リクエストを送信する
              </button>

              <p
                className="text-center text-white/25 text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ご予約確定後、確認メールをお送りします。キャンセルは前日18時までにご連絡ください。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
