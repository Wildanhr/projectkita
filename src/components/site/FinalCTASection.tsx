import { MessageCircle, Instagram } from "lucide-react";
import { WA_LINK, INSTAGRAM_URL } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section id="kontak" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 blur-[150px] rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs tracking-[0.25em] text-gold uppercase mb-5">Let's Talk</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
          Siap Bikin Acara Kamu Tampil{" "}
          <span className="italic font-light text-gold">Lebih Profesional?</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan live streaming, fotografi, dan videografi
          acara kamu bersama Projekita. Kami bantu sesuaikan setup terbaik
          berdasarkan jenis acara, lokasi, durasi, dan kebutuhan dokumentasi.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground font-semibold px-7 py-4 rounded-full hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            Booking via WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-foreground px-7 py-4 rounded-full hover:bg-white/5 transition"
          >
            <Instagram className="h-4 w-4" />
            Kunjungi Instagram
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wider">
          Based in Bengkulu • Live Streaming • Fotografi • Videografi
        </p>
      </div>
    </section>
  );
}
