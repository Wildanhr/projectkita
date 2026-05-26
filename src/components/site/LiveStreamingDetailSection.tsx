import { Camera, MonitorPlay, Radio, Mic, Video } from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Multi Camera Setup",
    desc: "Menggunakan 2–3 kamera profesional untuk menangkap acara dari berbagai sudut agar tampilan tidak monoton.",
    bullets: ["2–3 kamera profesional", "Angle utama, close-up, wide shot", "Berbagai sudut pengambilan", "Dapat dikombinasi drone camera"],
  },
  {
    icon: MonitorPlay,
    title: "Live Switching",
    desc: "Pergantian kamera langsung saat acara berlangsung, membuat siaran terasa seperti produksi televisi.",
    bullets: ["Perpindahan kamera real-time", "Tampilan lebih dinamis", "Cocok formal & hiburan", "Live streaming tidak monoton"],
  },
  {
    icon: Radio,
    title: "Streaming Platform",
    desc: "Acara dapat disiarkan melalui berbagai platform sesuai kebutuhan klien.",
    bullets: ["YouTube Live", "Instagram Live", "Zoom", "Platform lain sesuai kebutuhan"],
  },
  {
    icon: Mic,
    title: "Audio Capture",
    desc: "Audio diambil langsung dari sound system agar suara pembicara, MC, musik, dan rangkaian acara terdengar jelas.",
    bullets: ["Suara lebih jernih", "Mengurangi noise sekitar", "Cocok seminar, wedding, ibadah", "Kualitas siaran nyaman ditonton"],
  },
  {
    icon: Video,
    title: "Recording",
    desc: "Setiap acara direkam penuh dan diberikan ke klien sebagai arsip dokumentasi atau bahan konten ulang.",
    bullets: ["File rekaman full acara", "Bisa untuk dokumentasi", "Bisa dipotong untuk konten", "Cocok arsip pribadi & lembaga"],
  },
];

export function LiveStreamingDetailSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Live Streaming</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Detail Layanan <span className="italic font-light text-gold">Live Streaming</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kami menyiapkan kebutuhan teknis siaran agar acara terlihat lebih
            dinamis, jelas, dan profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`rounded-3xl border border-white/10 bg-card/40 p-7 hover:border-gold/30 transition ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gold/15 text-gold">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-gold">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
