import { Radio, Camera, Video, ArrowUpRight } from "lucide-react";
import { WA_LINK } from "@/lib/site";

const services = [
  {
    icon: Radio,
    title: "Live Streaming",
    desc: "Layanan siaran langsung profesional menggunakan kamera profesional, audio capture, live switching, dan dukungan platform streaming sesuai kebutuhan.",
    features: [
      "Multi-camera setup",
      "Live switching",
      "Audio capture dari sound system",
      "Streaming ke YouTube, Instagram, Zoom",
      "File recording full acara",
    ],
    cta: "Detail Live Streaming",
  },
  {
    icon: Camera,
    title: "Fotografi",
    desc: "Dokumentasi foto untuk menangkap momen penting acara secara natural, rapi, dan estetik. Cocok untuk wedding, korporat, wisuda, hingga komunitas.",
    features: [
      "Foto dokumentasi event",
      "Foto candid & momen penting",
      "Editing warna natural",
      "Output arsip, publikasi & media sosial",
    ],
    cta: "Konsultasi Foto",
  },
  {
    icon: Video,
    title: "Videografi",
    desc: "Produksi video dokumentasi acara dengan pengambilan gambar yang sinematik, rapi, dan sesuai kebutuhan publikasi maupun arsip.",
    features: [
      "Dokumentasi video acara",
      "Highlight & recap video",
      "Editing video sinematik",
      "Output media sosial / dokumentasi resmi",
    ],
    cta: "Konsultasi Video",
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 lg:py-32 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Layanan</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Layanan <span className="italic font-light text-gold">Kami</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pilih layanan dokumentasi yang paling sesuai dengan kebutuhan acara kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-background/50 p-7 hover:border-gold/40 hover:bg-background transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gold/15 text-gold mb-6">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground">
                    <span className="text-gold mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-2.5 transition-all"
              >
                {s.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
