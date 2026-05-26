import { MapPin, Sparkles, Users, CheckCircle } from "lucide-react";

const points = [
  { icon: MapPin, title: "Based in Bengkulu", desc: "Lokal, paham kebutuhan event di sekitar." },
  { icon: Sparkles, title: "Berbagai Jenis Acara", desc: "Wedding, seminar, wisuda, korporat, dan lainnya." },
  { icon: CheckCircle, title: "Visual & Audio Berkualitas", desc: "Setup teknis disesuaikan untuk hasil maksimal." },
  { icon: Users, title: "Fleksibel & Komunikatif", desc: "Menyesuaikan kebutuhan dan budget klien." },
];

const stats = [
  { v: "2020", l: "Since" },
  { v: "3", l: "Layanan Utama" },
  { v: "12+", l: "Jenis Event" },
  { v: "100%", l: "Output Siap Publikasi" },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Tentang Kami</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Tentang <span className="italic font-light text-gold">Projekita</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tim dokumentasi acara berbasis di Bengkulu yang membantu momen
              penting kamu terlihat lebih profesional, rapi, dan mudah diakses
              secara online.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Projekita adalah penyedia jasa live streaming, fotografi, dan
              videografi yang membantu berbagai jenis acara agar dapat
              disiarkan secara profesional, terdokumentasi dengan baik, dan
              dinikmati kembali melalui hasil rekaman berkualitas.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-card/60 p-6 hover:border-gold/30 transition"
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gold/15 text-gold mb-4">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-6 lg:p-8 text-center">
              <p className="text-2xl lg:text-3xl font-semibold text-gold">{s.v}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
