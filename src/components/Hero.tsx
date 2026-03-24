"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const WA_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/struttura/struttura-4.jpg"
          alt="La Terrazza Affittacamere — esterno della struttura"
          fill
          priority
          quality={100}
          className="object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/72 via-stone-950/58 to-stone-950/82 md:from-stone-950/58 md:via-stone-950/42 md:to-stone-950/76" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ opacity }}>
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
        >
          <span>📍</span><span>Cantarana, Asti — Piemonte</span>
        </motion.div>

        {/* Headline — più emotivo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-5 font-serif text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.03em] text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:text-5xl md:text-7xl"
        >
          Un rifugio di relax
          <br />
          <span className="text-amber-300">tra natura e comfort.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
          className="mx-auto mb-10 max-w-[20rem] text-base leading-relaxed text-stone-200 sm:max-w-2xl sm:text-lg md:text-xl"
        >
          Tre camere esclusive tra i vigneti del Monferrato. Stacca la spina, respira,
          lasciati coccolare — e torna a casa diverso.
        </motion.p>

        {/* CTAs — hidden on mobile (floating WA button handles it), visible from sm */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          className="hidden sm:flex flex-row gap-4 justify-center"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-[0_20px_55px_-20px_rgba(34,197,94,0.7)]"
          >
            {WA_ICON}
            Contattaci su WhatsApp
          </a>
          <a
            href="/prenota"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-stone-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_18px_45px_-18px_rgba(245,158,11,0.8)]"
          >
            Controlla disponibilità
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 hidden flex-wrap justify-center gap-3 sm:mt-12 sm:flex sm:gap-5"
        >
          {[
            { icon: "★", text: `${siteConfig.rating}/5 rating` },
            { icon: "✓", text: "Risposta veloce" },
            { icon: "🔒", text: "Prenotazione sicura" },
            { icon: "🍳", text: "Colazione inclusa" },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm px-3 py-1.5 rounded-full">
              <span className="text-amber-300">{t.icon}</span>{t.text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scopri</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-white/30 rounded-full" />
      </motion.div>
    </section>
  );
}
