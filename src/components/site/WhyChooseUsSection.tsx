import { MapPin, Camera, MonitorPlay, Radio, Video, Sparkles } from "lucide-react";

const items = [
  { icon: MapPin, title: "Based in Bengkulu", desc: "Berbasis di Bengkulu dan memahami kebutuhan dokumentasi event lokal maupun acara di sekitarnya." },
  { icon: Camera, title: "Setup Profesional", desc: "Menggunakan kamera profesional, audio capture, live switching, dan sistem streaming yang disesuaikan." },
  { icon: MonitorPlay, title: "Siaran Lebih Dinamis", desc: "Multi-camera dan live switching membuat tampilan acara terasa seperti siaran profesional." },
  { icon: Radio, title: "Fleksibel Banyak Platform", desc: "Mendukung siaran ke YouTube Live, Instagram Live, Zoom, atau platform lain sesuai kebutuhan." },
  { icon: Video, title: "Dokumentasi Lengkap", desc: "Tidak hanya live, acara juga direkam penuh untuk arsip, publikasi, atau konten ulang." },
  { icon: Sparkles, title: "Cocok Banyak Acara", desc: "Wedding, seminar, wisuda, konser, event perusahaan, komunitas, hingga acara keagamaan." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Why Us</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Kenapa Memilih <span className="italic font-light text-gold">Projekita?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kami membantu acara kamu terlihat lebih rapi, profesional, dan
            terdokumentasi dengan baik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-background/50 p-7 hover:border-gold/30 transition"
            >
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-gold/15 text-gold mb-5">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
