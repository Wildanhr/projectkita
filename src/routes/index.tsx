import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroSection } from "@/components/site/HeroSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { LiveStreamingDetailSection } from "@/components/site/LiveStreamingDetailSection";
import { EventTypesSection } from "@/components/site/EventTypesSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { WhyChooseUsSection } from "@/components/site/WhyChooseUsSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { PackagesSection } from "@/components/site/PackagesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTASection } from "@/components/site/FinalCTASection";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppButton } from "@/components/site/FloatingWhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Projekita — Jasa Live Streaming, Fotografi & Videografi Bengkulu",
      },
      {
        name: "description",
        content:
          "Projekita menyediakan jasa live streaming, fotografi, dan videografi profesional di Bengkulu untuk wedding, seminar, webinar, wisuda, event perusahaan, konser, komunitas, dan acara keagamaan.",
      },
      {
        name: "keywords",
        content:
          "jasa live streaming Bengkulu, live streaming wedding Bengkulu, jasa fotografi Bengkulu, jasa videografi Bengkulu, dokumentasi event Bengkulu, Projekita Bengkulu",
      },
      {
        property: "og:title",
        content:
          "Projekita — Jasa Live Streaming, Fotografi & Videografi Bengkulu",
      },
      {
        property: "og:description",
        content:
          "Dokumentasi acara profesional di Bengkulu: live streaming, fotografi, dan videografi untuk wedding, seminar, wisuda, dan event perusahaan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LiveStreamingDetailSection />
        <EventTypesSection />
        <WorkflowSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <PackagesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
