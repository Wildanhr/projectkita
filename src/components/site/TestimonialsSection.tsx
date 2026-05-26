const testimonials = [
  { text: "Siarannya rapi, audio jelas, dan hasil rekamannya bisa kami gunakan lagi untuk dokumentasi.", name: "Wedding Event" },
  { text: "Timnya komunikatif dan setup acaranya terlihat profesional dari awal sampai akhir.", name: "Seminar & Webinar" },
  { text: "Live streaming tidak monoton karena ada pergantian kamera. Hasilnya terlihat lebih hidup.", name: "Komunitas" },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">Testimoni</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Apa Kata <span className="italic font-light text-gold">Mereka?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kepuasan mereka adalah bagian penting dari setiap dokumentasi acara.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-3xl border border-white/10 bg-card/40 p-8 flex flex-col"
            >
              <span className="text-5xl font-serif text-gold leading-none">“</span>
              <blockquote className="mt-2 text-foreground/90 leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">Bengkulu, Indonesia</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
