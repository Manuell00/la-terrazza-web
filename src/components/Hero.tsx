"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-screen min-h-[680px] items-end overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/struttura/struttura-2.jpg"
          alt="La Terrazza Affittacamere — panorama e natura del Monferrato"
          fill
          priority
          quality={100}
          className="object-cover scale-[1.04]"
        />
        {/* Subtle vignette top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_50%)]" />
        {/* Left gradient — stronger for text legibility on desktop */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,12,8,0.82)_0%,rgba(8,12,8,0.54)_42%,rgba(8,12,8,0.18)_70%,rgba(8,12,8,0.12)_100%)]" />
        {/* Bottom-to-top gradient for CTA area */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/28 to-transparent md:from-stone-950/82 md:via-stone-950/18" />
        {/* Mobile: centered reading panel */}
        <div className="absolute inset-x-4 bottom-10 top-[22%] rounded-[30px] bg-[linear-gradient(180deg,rgba(12,10,9,0.18),rgba(12,10,9,0.58),rgba(12,10,9,0.78))] backdrop-blur-[2px] md:hidden" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 w-full pb-14 md:pb-20" style={{ opacity }}>
        <div className="container mx-auto px-4">
          {/* Centered on mobile, left-aligned on desktop */}
          <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-3xl md:text-left">

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
            >
              <span className="text-base">📍</span>
              <span className="tracking-wide">Cantarana, Asti — Piemonte</span>
            </motion.div>

            {/* ── MOBILE headline ── */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="md:hidden font-serif text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.03em] text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.6)]"
            >
              Un soggiorno
              <span className="mt-1 block text-stone-100/92">davvero unico.</span>
            </motion.h1>

            {/* ── DESKTOP headline ── */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="hidden md:block font-serif text-[5.5rem] font-semibold leading-[0.9] tracking-[-0.04em] text-white [text-shadow:0_16px_48px_rgba(0,0,0,0.5)]"
            >
              Respira il silenzio
              <span className="mt-2 block text-stone-100/90 md:mt-1">e lasciati accogliere.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.75 }}
              className="mt-5 hidden max-w-sm text-base leading-relaxed text-stone-100/85 sm:max-w-lg sm:text-lg md:block md:max-w-xl md:text-xl"
            >
              Tre camere esclusive tra i vigneti del Monferrato. Stacca la spina, respira e lasciati accogliere con la calma autentica del Piemonte.
            </motion.p>

            {/* CTAs — HIDDEN on mobile, visible from md+ */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65 }}
              className="mt-8 hidden md:flex md:flex-row md:items-start gap-3"
            >
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-4 text-base font-semibold text-white shadow-[0_16px_48px_-16px_rgba(22,163,74,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-[0_20px_52px_-16px_rgba(22,163,74,0.9)]"
              >
                {WA_ICON}
                Verifica disponibilità su WhatsApp
              </a>
              <Link
                href="/prenota"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Controlla disponibilità
              </Link>
            </motion.div>

            {/* Trust signals — 2-col grid on mobile, 4-col on md */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-7 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:max-w-2xl"
            >
              {[
                { icon: "★", text: `${siteConfig.rating}/5 rating` },
                { icon: "✓", text: "Risposta veloce" },
                { icon: "🔒", text: "Prenotazione sicura" },
                { icon: "🍳", text: "Colazione inclusa" },
              ].map((t) => (
                <span
                  key={t.text}
                  className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-white/12 bg-white/10 px-3 py-2.5 text-xs text-white/90 backdrop-blur-sm sm:px-4 sm:py-3 sm:text-sm"
                >
                  <span className="text-emerald-300">{t.icon}</span>
                  {t.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scopri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-white/25 rounded-full"
        />
      </motion.div>
    </section>
  );
}
