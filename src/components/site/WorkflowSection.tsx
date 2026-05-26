const steps = [
  { n: "01", title: "Konsultasi Kebutuhan", desc: "Klien menghubungi Projekita melalui WhatsApp atau Instagram untuk menjelaskan jenis acara, tanggal, lokasi, durasi, dan kebutuhan dokumentasi." },
  { n: "02", title: "Penyesuaian Paket", desc: "Tim membantu menyesuaikan kebutuhan teknis seperti jumlah kamera, live streaming, audio, drone, fotografi, videografi, dan output file." },
  { n: "03", title: "Produksi di Hari Acara", desc: "Tim melakukan setup alat, pengecekan kamera, audio, jaringan, dan proses dokumentasi sesuai kebutuhan acara." },
  { n: "04", title: "Output Dokumentasi", desc: "Klien menerima hasil dokumentasi berupa file rekaman, foto, video, atau output lain sesuai kesepakatan layanan." },
];

export function WorkflowSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Workflow</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Alur <span className="italic font-light text-gold">Pemesanan Layanan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Proses pemesanan dibuat sederhana agar kebutuhan dokumentasi acara
            kamu bisa disiapkan dengan jelas.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-white/10 bg-card/40 p-7 hover:border-gold/30 transition"
            >
              <span className="text-5xl font-light text-gold/60">{s.n}</span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
