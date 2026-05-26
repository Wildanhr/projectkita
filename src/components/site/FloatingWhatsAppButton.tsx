import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/site";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Projekita"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-gold text-primary-foreground font-semibold px-4 py-3 rounded-full shadow-2xl glow-gold hover:scale-105 transition"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm">Chat WhatsApp</span>
    </a>
  );
}
