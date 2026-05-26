import { CheckCircle, Sparkles } from "lucide-react";
import { WA_LINK } from "@/lib/site";

const packages = [
  {
    name: "Basic",
    label: "Untuk acara sederhana",
    features: [
      "1–2 kamera",
      "Live streaming ke 1 platform",
      "Audio capture",
      "File recording",
      "Cocok acara kecil, komunitas, internal",
    ],
    cta: "Tanya Paket Basic",
  },
  {
    name: "Standard",
    label: "Paling fleksibel",
    features: [
      "2–3 kamera",
      "Live switching",
      "Audio capture",
      "Streaming ke YouTube / Zoom / Instagram",
      "File recording full acara",
      "Cocok wedding, seminar, wisuda",
    ],
    cta: "Tanya Paket Standard",
    highlight: true,
  },
  {
    name: "Custom",
    label: "Untuk kebutuhan khusus",
    features: [
      "Multi-camera setup",
      "Drone camera",
      "Fotografi & videografi",
      "Highlight video",
      "Platform streaming custom",
      "Cocok event besar & korporat",
    ],
    cta: "Konsultasi Paket Custom",
  },
];

export function PackagesSection() {
  return (
    <section id="paket" className="py-24 lg:py-32 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Paket</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Paket <span className="italic font-light text-gold">Layanan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pilih paket sesuai kebutuhan acara. Harga dapat menyesuaikan jenis
            acara, lokasi, durasi, jumlah kamera, dan kebutuhan output dokumentasi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 border transition ${
                p.highlight
                  ? "border-gold/50 bg-gradient-to-b from-gold/10 to-transparent glow-gold"
                  : "border-white/10 bg-background/50 hover:border-gold/30"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 bg-gold text-primary-foreground text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="h-3 w-3" /> Rekomendasi
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition ${
                  p.highlight
                    ? "bg-gold text-primary-foreground hover:opacity-90"
                    : "border border-white/15 hover:bg-white/5"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          Harga dan kebutuhan teknis dapat menyesuaikan jenis acara, lokasi,
          durasi, jumlah kamera, platform streaming, dan kebutuhan output
          dokumentasi.
        </p>
      </div>
    </section>
  );
}
