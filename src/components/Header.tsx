"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/camere/luna", label: "Camera Luna" },
  { href: "/camere/stella", label: "Camera Stella" },
  { href: "/camere/sole", label: "Camera Sole" },
  { href: "/prenota", label: "Prenota" },
  { href: "/partner", label: "Partner" },
];

const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude il menu al cambio pagina
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/92 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-stone-300 group-hover:ring-amber-500 transition-all">
              <Image src="/images/logo/logo.jpg" alt="La Terrazza Logo" fill className="object-cover" />
            </div>
            <div>
              <span className={`font-serif text-lg font-semibold tracking-wide transition-colors ${scrolled ? "text-stone-800" : "text-white"}`}>
                La Terrazza
              </span>
              <p className={`text-xs tracking-widest uppercase transition-colors ${scrolled ? "text-stone-500" : "text-stone-200"}`}>
                Affittacamere
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? scrolled
                      ? "text-amber-700 bg-amber-50"
                      : "text-amber-300 bg-white/10"
                    : scrolled
                    ? "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {WA_ICON}
              WhatsApp
            </a>

            {/* Hamburger — si trasforma in X, NON c'è un secondo bottone nel menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-stone-700" : "text-white"}`}
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — nessun bottone × aggiuntivo, l'hamburger è già una X */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-stone-900/98 backdrop-blur-sm flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors ${
                    isActive(link.href) ? "text-amber-400" : "text-white hover:text-amber-300"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              href={siteConfig.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-full text-lg font-medium"
            >
              {WA_ICON}
              Scrivici su WhatsApp
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-stone-500 text-sm mt-2"
            >
              {siteConfig.phone}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
