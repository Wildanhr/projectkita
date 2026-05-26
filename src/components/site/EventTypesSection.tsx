import {
  Heart, GraduationCap, Briefcase, Building, Music, Users,
  Church, Mic, Sparkles, Calendar, Camera, Video,
} from "lucide-react";

const events = [
  { icon: Heart, name: "Pernikahan", desc: "Dokumentasi momen sakral agar bisa disaksikan keluarga dari mana saja." },
  { icon: Mic, name: "Seminar / Webinar", desc: "Siaran acara edukatif dengan audio jelas dan tampilan profesional." },
  { icon: Briefcase, name: "Event Perusahaan", desc: "Dokumentasi corporate, launching, gathering, dan acara internal." },
  { icon: GraduationCap, name: "Wisuda", desc: "Abadikan momen kelulusan dengan live streaming, foto, dan video." },
  { icon: Music, name: "Konser / Pertunjukan", desc: "Tampilan multi-angle agar pertunjukan terlihat lebih hidup." },
  { icon: Users, name: "Acara Komunitas", desc: "Dokumentasi komunitas agar mudah dipublikasikan dan diarsipkan." },
  { icon: Church, name: "Acara Keagamaan", desc: "Siaran acara ibadah dengan tampilan rapi dan audio yang jelas." },
  { icon: Camera, name: "Talkshow", desc: "Produksi talkshow dengan multi-camera dan switching profesional." },
  { icon: Sparkles, name: "Launching Produk", desc: "Dokumentasi peluncuran agar momen bisa dipublikasikan luas." },
  { icon: Calendar, name: "Gathering", desc: "Kumpulkan momen kebersamaan menjadi arsip yang berkesan." },
  { icon: Video, name: "Pelatihan / Workshop", desc: "Rekaman lengkap sebagai materi belajar dan dokumentasi." },
  { icon: Building, name: "Acara Sekolah / Kampus", desc: "Dokumentasi kegiatan akademik dan acara kemahasiswaan." },
];

export function EventTypesSection() {
  return (
    <section id="event" className="py-24 lg:py-32 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Jenis Acara</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Cocok untuk Berbagai <span className="italic font-light text-gold">Jenis Acara</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Setiap acara memiliki kebutuhan dokumentasi yang berbeda. Projekita
            membantu menyesuaikan setup terbaik berdasarkan jenis acara,
            lokasi, durasi, dan kebutuhan teknis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {events.map((e) => (
            <div
              key={e.name}
              className="group rounded-2xl border border-white/10 bg-background/50 p-5 hover:border-gold/30 hover:bg-background transition"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gold/10 text-gold mb-4 group-hover:bg-gold/20 transition">
                <e.icon className="h-4 w-4" />
              </div>
              <h3 className="font-medium text-sm mb-1.5">{e.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
