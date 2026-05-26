import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#event", label: "Event" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#paket", label: "Paket" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-[0.2em] text-sm">
          PROJE<span className="text-gold">KITA</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gold text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-full hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            Booking Sekarang
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/5">
          <ul className="px-5 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground text-sm font-semibold px-4 py-3 rounded-full"
            >
              <MessageCircle className="h-4 w-4" /> Booking Sekarang
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
