"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const WA_ICON = (
  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const trustItems = [
  { label: `${siteConfig.rating}/5 rating`, value: "Ospiti verificati" },
  { label: "Tre camere", value: "Luna, Stella, Sole" },
  { label: "Risposta veloce", value: "Anche su WhatsApp" },
  { label: "Piemonte autentico", value: "Tra vigne e silenzio" },
];

const heroEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroCopyVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: heroEase,
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: heroEase },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, y: 42, scale: 0.94, rotate: -1.2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.05, ease: heroEase, delay: 0.14 },
  },
};

const floatingCardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: heroEase },
  }),
};

function HeroIllustration({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[34px] shadow-[0_34px_110px_-46px_rgba(28,25,23,0.24)] ${compact ? "h-[420px]" : "h-[560px]"}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.18, ease: heroEase }}
        className="absolute inset-x-8 top-8 h-24 rounded-full bg-white/45 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.24, ease: heroEase }}
        className="absolute left-[-10%] top-[14%] h-36 w-36 rounded-full bg-emerald-200/70 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.78 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: heroEase }}
        className="absolute right-[-8%] top-[8%] h-44 w-44 rounded-full bg-stone-200/80 blur-3xl"
      />

      <motion.div
        variants={heroImageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-x-0 bottom-0 top-0 rounded-[34px]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
          <Image
            src="/images/hero-generated-house.jpg"
            alt="Illustrazione hero della struttura"
            fill
            priority
            quality={100}
            className="scale-[0.985] object-cover transition-transform duration-[1800ms] ease-out"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02),rgba(19,29,20,0.12))]" />
        </div>

        <motion.div
          custom={0.45}
          variants={floatingCardVariants}
          initial="hidden"
          animate="visible"
          className="absolute right-[10%] bottom-[20%] flex w-[30%] flex-col gap-3"
        >
          <div className="rounded-[18px] border border-white/55 bg-white/75 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">Check-in</p>
            <p className="mt-1 text-sm font-semibold text-stone-800">Accoglienza rapida</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[18px] border border-white/55 bg-white/78 px-3 py-3 text-center backdrop-blur-sm">
              <p className="text-lg">🍳</p>
              <p className="mt-1 text-[11px] font-semibold text-stone-800">Colazione inclusa</p>
            </div>
            <div className="rounded-[18px] border border-white/55 bg-white/78 px-3 py-3 text-center backdrop-blur-sm">
              <p className="text-lg">🚗</p>
              <p className="mt-1 text-[11px] font-semibold text-stone-800">Parcheggio gratuito</p>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-x-8 bottom-6 h-[2px] rounded-full bg-white/55" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f2e8_0%,#fcfaf6_58%,#ffffff_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-12%] top-[-8%] h-[24rem] w-[24rem] rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute right-[-8%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-stone-200/80 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div className="relative z-10 w-full px-4 pb-14 pt-28">
            <motion.div
              variants={heroCopyVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-xl text-center"
            >
              <motion.div variants={heroItemVariants} className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-sm text-emerald-800 shadow-soft backdrop-blur-sm">
                <span className="text-base">📍</span>
                <span className="tracking-wide">Cantarana, Asti — Piemonte</span>
              </motion.div>
              <motion.h1 variants={heroItemVariants} className="font-serif text-[2.75rem] font-semibold leading-[0.94] tracking-[-0.05em] text-stone-900">
                La Terrazza
                <span className="mt-1 block text-stone-500">Affittacamere</span>
              </motion.h1>
              <motion.p variants={heroItemVariants} className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-stone-600">
                Soggiorni che rallentano il tempo, tra i vigneti del Monferrato e un&apos;ospitalità semplice da amare.
              </motion.p>
              <motion.a
                variants={heroItemVariants}
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(22,163,74,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500"
              >
                {WA_ICON}
                Scrivici ora
              </motion.a>

              <motion.div
                variants={heroImageVariants}
                initial="hidden"
                animate="visible"
                className="mt-10"
                style={{ y: imageY }}
              >
                <HeroIllustration compact />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="container relative mx-auto px-4 pb-16 pt-36 lg:pt-40">
          <div className="grid min-h-[720px] items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <motion.div
              variants={heroCopyVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10"
              style={{ y: cardY }}
            >
              <div className="max-w-xl">
                <motion.div variants={heroItemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-soft">
                  <span className="text-base">📍</span>
                  Cantarana, Asti — Piemonte
                </motion.div>

                <motion.h1
                  variants={heroItemVariants}
                  className="font-serif text-[4.65rem] font-semibold leading-[0.88] tracking-[-0.055em] text-stone-900 xl:text-[5.1rem]"
                >
                  La Terrazza
                  <span className="block text-stone-500">Affittacamere</span>
                </motion.h1>

                <motion.p
                  variants={heroItemVariants}
                  className="mt-6 max-w-md text-lg leading-relaxed text-stone-600"
                >
                  Soggiorni che rallentano il tempo, tra viste aperte sui vigneti e un&apos;ospitalità pensata per farti respirare meglio.
                </motion.p>

                <motion.div
                  variants={heroItemVariants}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    href="/prenota"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_44px_-20px_rgba(28,25,23,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                  >
                    Controlla disponibilità
                  </Link>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-4 text-base font-semibold text-white shadow-[0_16px_48px_-18px_rgba(22,163,74,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500"
                  >
                    {WA_ICON}
                    Scrivici su WhatsApp
                  </a>
                </motion.div>

                <motion.div
                  variants={heroItemVariants}
                  className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2"
                >
                  {trustItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-stone-100 bg-stone-50/90 px-5 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-white"
                    >
                      <p className="text-sm font-semibold text-stone-800">{item.label}</p>
                      <p className="mt-1 text-sm text-stone-500">{item.value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative h-[660px]"
              style={{ y: imageY }}
            >
              <HeroIllustration />

              <motion.div
                custom={0.42}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 left-[-1rem] flex w-[18.5rem] items-center justify-center rounded-[28px] border border-stone-200 bg-white px-5 py-5 text-center shadow-[0_28px_84px_-40px_rgba(28,25,23,0.42)]"
              >
                <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">La Terrazza</p>
                <p className="mt-3 font-serif text-2xl leading-[0.95] text-stone-900">
                  Tre camere con
                  <span className="block text-stone-500">anima diversa</span>
                </p>
                </div>
              </motion.div>

              <motion.div
                custom={0.5}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 rounded-[24px] border border-white/90 bg-white/92 px-4 py-4 text-center text-stone-900 shadow-[0_24px_80px_-34px_rgba(28,25,23,0.32)] backdrop-blur-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">Recensioni</p>
                <p className="mt-2 text-2xl font-semibold leading-none">{siteConfig.rating}/5</p>
                <p className="mt-2 text-[12px] text-stone-500">{siteConfig.reviewCount}+ recensioni verificate</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
