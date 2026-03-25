"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LangToggle from "@/components/LangToggle";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/lib/i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();

  const navLinks = [
    { href: localizePath("/", lang), label: "Home" },
    { href: localizePath("/camere/luna", lang), label: lang === "it" ? "Luna" : "Luna" },
    { href: localizePath("/camere/stella", lang), label: lang === "it" ? "Stella" : "Stella" },
    { href: localizePath("/camere/sole", lang), label: lang === "it" ? "Sole" : "Sole" },
    { href: localizePath("/prenota", lang), label: lang === "it" ? "Prenota" : "Book" },
    { href: localizePath("/partner", lang), label: lang === "it" ? "Partner" : "Partners" },
  ];

  const navLinksFull = [
    { href: localizePath("/", lang), label: "Home" },
    { href: localizePath("/camere/luna", lang), label: lang === "it" ? "Camera Luna" : "Luna Room" },
    { href: localizePath("/camere/stella", lang), label: lang === "it" ? "Camera Stella" : "Stella Room" },
    { href: localizePath("/camere/sole", lang), label: lang === "it" ? "Camera Sole" : "Sole Room" },
    { href: localizePath("/prenota", lang), label: lang === "it" ? "Prenota" : "Book" },
    { href: localizePath("/partner", lang), label: lang === "it" ? "Partner" : "Partners" },
  ];

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
                {lang === "it" ? "Affittacamere" : "Guesthouse"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ease-out ${
                  isActive(link.href)
                    ? "text-emerald-800"
                    : "text-stone-500 hover:bg-stone-100/70 hover:text-stone-800"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute inset-x-3.5 -bottom-[1px] h-[2px] origin-left rounded-full bg-emerald-600 transition-all duration-300 ease-out ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right side: lang toggle (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Desktop lang toggle */}
            <div className="hidden lg:flex">
              <LangToggle />
            </div>
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-xl border p-2.5 shadow-soft transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "border-emerald-200/80 bg-emerald-50/85 text-emerald-800 shadow-[0_14px_36px_-18px_rgba(22,163,74,0.45)] backdrop-blur-md"
                  : "border-emerald-100/80 bg-emerald-50/65 text-stone-700 shadow-[0_12px_30px_-18px_rgba(22,163,74,0.24)] backdrop-blur-md hover:bg-emerald-50/85 hover:text-emerald-800"
              }`}
              aria-label={menuOpen ? (lang === "it" ? "Chiudi menu" : "Close menu") : (lang === "it" ? "Apri menu" : "Open menu")}
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
                  {lang === "it" ? "Navigazione" : "Navigation"}
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
                        className={`group grid grid-cols-[1fr_auto_1fr] items-center rounded-[20px] px-5 py-4 text-[0.95rem] font-semibold tracking-wide transition-all active:scale-[0.985] ${
                          isActive(link.href)
                            ? "bg-emerald-600 text-white shadow-[0_12px_32px_-12px_rgba(22,163,74,0.65)]"
                            : "bg-white/[0.05] text-white hover:bg-white/[0.09] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <span className="invisible">→</span>
                        <span className="text-center">{link.label}</span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          className={`justify-self-end ${isActive(link.href) ? "text-white/60" : "text-stone-500 group-hover:text-stone-400"}`}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                {/* Language toggle */}
                <div className="mt-5 flex justify-center">
                  <LangToggle dark />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
