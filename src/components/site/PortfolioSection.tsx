import { Instagram, ArrowUpRight } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_CATALOG_URL } from "@/lib/site";

const items = [
  {
    title: "Wedding Live Streaming",
    desc: "Dokumentasi dan siaran langsung acara pernikahan dengan tampilan rapi dan audio jelas.",
    badges: ["Live Streaming", "Foto", "Video"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Seminar & Webinar",
    desc: "Siaran acara edukatif, formal, dan online meeting dengan kualitas visual dan audio yang stabil.",
    badges: ["Live Streaming", "Audio Capture"],
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wisuda",
    desc: "Dokumentasi momen kelulusan untuk kampus, sekolah, dan lembaga pendidikan.",
    badges: ["Live Streaming", "Video"],
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Event Perusahaan",
    desc: "Dokumentasi kegiatan corporate, launching produk, gathering, dan acara internal perusahaan.",
    badges: ["Foto", "Video", "Live"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Konser / Pertunjukan",
    desc: "Pengambilan gambar multi-angle untuk pertunjukan musik, seni, dan hiburan.",
    badges: ["Multi Camera", "Video"],
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Acara Keagamaan",
    desc: "Siaran dan dokumentasi acara ibadah atau kegiatan keagamaan dengan visual rapi dan suara jelas.",
    badges: ["Live Streaming", "Recording"],
    img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Portfolio <span className="italic font-light text-gold">Dokumentasi</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Beberapa contoh kategori acara yang dapat ditangani oleh Projekita.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold font-medium hover:gap-3 transition-all"
            >
              <Instagram className="h-4 w-4" /> @rareproject.id
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold font-medium hover:gap-3 transition-all"
            >
              <Instagram className="h-4 w-4" /> @studio.projekita
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-card/40"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {it.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg flex items-center justify-between">
                  {it.title}
                  <ArrowUpRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
