import { MapPin, MessageCircle, ArrowRight, Camera, Radio, Mic, Video, MonitorPlay } from "lucide-react";
import { WA_LINK } from "@/lib/site";

const trust = [
  "Multi Camera Setup",
  "Live Switching",
  "Audio Capture",
  "Full Recording",
  "Drone Camera Available",
];

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-8">
            <MapPin className="h-3 w-3 text-gold" />
            Based in Bengkulu • Event Documentation Team
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Live Streaming, Fotografi, dan{" "}
            <span className="text-gold italic font-light">Videografi</span>{" "}
            Profesional di Bengkulu
          </h1>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Bantu acara kamu tampil lebih rapi, dinamis, dan berkesan melalui
            dokumentasi visual profesional — mulai dari multi-camera setup,
            live switching, audio capture, hingga file rekaman full acara.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 border border-white/15 text-foreground px-6 py-3.5 rounded-full hover:bg-white/5 transition"
            >
              Lihat Layanan <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative fade-up">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 glow-gold">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80"
              alt="Crew dokumentasi event Projekita di Bengkulu"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              ON AIR
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="absolute -left-4 sm:-left-10 top-10 bg-card/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-xl flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gold/15 text-gold">
              <Camera className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold">2–3 Camera</p>
              <p className="text-muted-foreground">Multi-angle setup</p>
            </div>
          </div>
          <div className="absolute -right-2 sm:-right-6 top-1/3 bg-card/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-xl flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gold/15 text-gold">
              <Radio className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold">YouTube · IG · Zoom</p>
              <p className="text-muted-foreground">Streaming platform</p>
            </div>
          </div>
          <div className="absolute -left-2 bottom-16 bg-card/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-xl flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gold/15 text-gold">
              <Mic className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold">Audio Capture</p>
              <p className="text-muted-foreground">Direct sound system</p>
            </div>
          </div>
          <div className="absolute -right-2 sm:-right-4 -bottom-4 bg-card/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-xl flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gold/15 text-gold">
              <MonitorPlay className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold">Full Recording</p>
              <p className="text-muted-foreground">Arsip lengkap acara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
