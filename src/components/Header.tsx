"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/camere/luna", label: "Luna" },
  { href: "/camere/stella", label: "Stella" },
  { href: "/camere/sole", label: "Sole" },
  { href: "/prenota", label: "Prenota" },
  { href: "/partner", label: "Partner" },
];

const navLinksFull = [
  { href: "/", label: "Home" },
  { href: "/camere/luna", label: "Camera Luna" },
  { href: "/camere/stella", label: "Camera Stella" },
  { href: "/camere/sole", label: "Camera Sole" },
  { href: "/prenota", label: "Prenota" },
  { href: "/partner", label: "Partner" },
];

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200/60 bg-white/92 py-3.5 shadow-[0_8px_32px_-16px_rgba(28,25,23,0.30)] backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-stone-200 transition-all duration-300 group-hover:ring-emerald-600">
              <Image src="/images/logo/logo.jpg" alt="La Terrazza" fill className="object-cover" />
            </div>
            <div>
              <span className="block font-serif text-[1.05rem] font-semibold tracking-wide text-stone-800">
                La Terrazza
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">
                Affittacamere
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-emerald-800"
                    : "text-stone-500 hover:bg-stone-100/70 hover:text-stone-800"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute inset-x-3.5 -bottom-[1px] h-[2px] origin-left rounded-full bg-emerald-600 transition-transform duration-300 ${
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
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-md md:flex"
            >
              {WA_ICON}
              WhatsApp
            </a>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-stone-200 bg-white p-2.5 text-stone-700 shadow-soft transition-all hover:bg-stone-50 lg:hidden"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            >
              <div className="flex w-6 flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-stone-950/80 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full items-center justify-center px-4"
            >
              <div className="w-full max-w-sm rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(28,25,23,0.98),rgba(20,26,20,0.97))] p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)]">
                <div className="mb-5 flex items-center justify-center">
                  <span className="h-1 w-10 rounded-full bg-white/15" />
                </div>
                <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.36em] text-stone-600">
                  Navigazione
                </p>
                <div className="space-y-2.5">
                  {navLinksFull.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-center justify-between rounded-[20px] px-5 py-4 text-[0.95rem] font-semibold tracking-wide transition-all active:scale-[0.985] ${
                          isActive(link.href)
                            ? "bg-emerald-600 text-white shadow-[0_12px_32px_-12px_rgba(22,163,74,0.65)]"
                            : "bg-white/[0.05] text-white hover:bg-white/[0.09] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          className={isActive(link.href) ? "text-white/60" : "text-stone-500 group-hover:text-stone-400"}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile WhatsApp CTA inside menu */}
                <div className="mt-5 pt-4 border-t border-white/8">
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-[20px] bg-green-600 py-4 text-sm font-semibold text-white transition-all hover:bg-green-500"
                  >
                    {WA_ICON} Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
