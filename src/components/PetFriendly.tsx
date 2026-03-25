"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function PetFriendly() {
  const { lang } = useLanguage();
  const t = translations[lang].home;
  const petFeatures = t.petFeatures;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Section header */}
        <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">{t.petLabel}</p>
          <h2 className="mb-3 font-serif text-3xl font-semibold leading-tight text-stone-800 md:text-5xl">
            {t.petTitle}
          </h2>
          <p className="text-base text-stone-400">
            {t.petSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* ── Image column ── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="group relative h-72 overflow-hidden rounded-[28px] shadow-elevated md:h-[460px]">
                <Image
                  src="/images/varie/cane.png"
                  alt="Cane benvenuto a La Terrazza Affittacamere"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/18 to-transparent" />
              </div>

              {/* Pet-friendly badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -right-2 rounded-[18px] border border-emerald-100 bg-white p-4 shadow-elevated md:-bottom-6 md:-right-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                    <span className="text-lg">🐾</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{t.petBadge}</p>
                    <p className="mt-0.5 text-xs text-emerald-600">{t.petBadgeSub}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ── Content column ── */}
          <AnimatedSection direction="right" className="text-center md:text-left">

            <p className="mb-6 text-base leading-relaxed text-stone-500 md:text-lg">
              {t.petDesc}
            </p>

            {/* Feature cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {petFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center gap-2 rounded-[18px] border border-stone-100 bg-cream-50 p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/40 hover:shadow-card md:items-start md:text-left"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{f.title}</p>
                    <p className="mt-0.5 text-xs text-stone-400">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-6 text-xs leading-relaxed text-stone-400">
              {t.petNote}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
