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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Chiude il menu al cambio pagina
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-white/90 py-3.5 shadow-[0_10px_35px_-24px_rgba(28,25,23,0.45)] backdrop-blur-xl transition-all duration-300"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-stone-300 group-hover:ring-amber-500 transition-all">
              <Image src="/images/logo/logo.jpg" alt="La Terrazza Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="font-serif text-lg font-semibold tracking-wide text-stone-800 transition-colors">
                La Terrazza
              </span>
              <p className="text-xs tracking-widest uppercase text-stone-500 transition-colors">
                Affittacamere
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium tracking-wide px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-stone-900"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute inset-x-3 -bottom-[2px] h-[2px] origin-left rounded-full bg-amber-500 transition-transform duration-300 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg"
            >
              {WA_ICON}
              WhatsApp
            </a>

            {/* Hamburger — si trasforma in X, NON c'è un secondo bottone nel menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden rounded-md p-2 text-stone-700 transition-colors hover:bg-stone-100"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-40 bg-stone-950/55 backdrop-blur-[2px] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 36 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="ml-auto flex h-full w-[86vw] max-w-sm flex-col justify-center bg-stone-950 px-5 shadow-2xl"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-4 shadow-2xl">
                <p className="mb-4 px-2 text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
                  Navigazione
                </p>
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-4 font-serif text-2xl transition-all ${
                          isActive(link.href)
                            ? "bg-amber-400 text-stone-950 shadow-lg"
                            : "bg-white/[0.03] text-white hover:bg-white/[0.08]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={isActive(link.href) ? "text-stone-800/70" : "text-stone-500"}>→</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
