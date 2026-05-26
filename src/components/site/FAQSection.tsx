import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Apakah Projekita hanya melayani area Bengkulu?", a: "Projekita berbasis di Bengkulu. Untuk layanan di luar kota atau luar wilayah, dapat dikonsultasikan terlebih dahulu menyesuaikan jadwal, lokasi, dan kebutuhan teknis acara." },
  { q: "Bisa live ke YouTube dan Zoom sekaligus?", a: "Bisa disesuaikan dengan kebutuhan acara. Platform streaming dapat menggunakan YouTube Live, Instagram Live, Zoom, atau platform lain sesuai kebutuhan klien." },
  { q: "Apakah hasil live streaming bisa direkam?", a: "Ya. File rekaman full acara dapat disediakan dan digunakan kembali untuk dokumentasi, arsip, atau konten ulang." },
  { q: "Apakah bisa menggunakan drone?", a: "Bisa, apabila lokasi dan kondisi acara memungkinkan untuk pengambilan gambar menggunakan drone." },
  { q: "Apakah audio bisa langsung dari sound system?", a: "Ya. Audio dapat diambil langsung dari sound system agar suara lebih jelas dan nyaman didengar oleh penonton live streaming." },
  { q: "Apakah bisa sekalian foto dan video?", a: "Bisa. Projekita juga menyediakan layanan fotografi dan videografi yang dapat dikombinasikan dengan layanan live streaming." },
  { q: "Kapan sebaiknya booking layanan?", a: "Sebaiknya booking dilakukan lebih awal agar tim dapat menyesuaikan jadwal, kebutuhan alat, jumlah kamera, platform streaming, dan konsep dokumentasi acara." },
  { q: "Apakah paket bisa custom?", a: "Bisa. Paket layanan dapat disesuaikan dengan kebutuhan acara, seperti jumlah kamera, durasi acara, drone, fotografi, videografi, hingga output file." },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Pertanyaan yang Sering <span className="italic font-light text-gold">Ditanyakan</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-white/10 rounded-2xl px-6 bg-background/50"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
