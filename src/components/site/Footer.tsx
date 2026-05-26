import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WA_LINK } from "@/lib/site";

const menu = ["Home", "Tentang", "Layanan", "Portfolio", "Paket", "FAQ", "Kontak"];
const hrefs: Record<string, string> = {
  Home: "#home", Tentang: "#tentang", Layanan: "#layanan",
  Portfolio: "#portfolio", Paket: "#paket", FAQ: "#faq", Kontak: "#kontak",
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-semibold tracking-[0.2em] text-lg">
              PROJE<span className="text-gold">KITA</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Jasa live streaming, fotografi, dan videografi profesional
              berbasis di Bengkulu untuk berbagai kebutuhan acara.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Menu</p>
            <ul className="space-y-2.5 text-sm">
              {menu.map((m) => (
                <li key={m}>
                  <a href={hrefs[m]} className="text-muted-foreground hover:text-foreground transition">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Kontak</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                >
                  <Instagram className="h-4 w-4 text-gold" /> @studio.projekita
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                >
                  <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp Booking
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" /> Bengkulu, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Projekita. All rights reserved.</p>
          <p className="tracking-wider">Based in Bengkulu • Live Streaming • Fotografi • Videografi</p>
        </div>
      </div>
    </footer>
  );
}
