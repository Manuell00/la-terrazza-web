"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const images = [
  { src: "/images/struttura/struttura-3.jpg", alt: "La Terrazza — hall" },
  { src: "/images/struttura/struttura-5.jpg", alt: "La Terrazza — ambienti comuni" },
  { src: "/images/struttura/struttura-6.jpg", alt: "La Terrazza — terrazza" },
  { src: "/images/camera-luna/luna-1.jpg", alt: "Camera Luna" },
  { src: "/images/camera-sole/sole-1.jpg", alt: "Camera Sole" },
  { src: "/images/struttura/struttura-4.jpg", alt: "La Terrazza — esterno" },
];

export default function StructureCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent((next + images.length) % images.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) go(current + 1);
    else if (info.offset.x > 50) go(current - 1);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "14%" : "-14%", opacity: 0, scale: 1.018 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-14%" : "14%", opacity: 0, scale: 0.992 }),
  };

  return (
    <div className="relative overflow-hidden rounded-2xl select-none" style={{ touchAction: "pan-y" }}>
      {/* Main image */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.62, ease: [0.42, 0, 0.2, 1] }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.09}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover pointer-events-none transition-transform duration-700 ease-out"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Arrows */}
        <button
          onClick={() => go(current - 1)}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-black/60 hover:shadow-lg"
          aria-label="Precedente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-black/60 hover:shadow-lg"
          aria-label="Successiva"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Caption */}
        <div className="absolute bottom-3 left-0 right-0 text-center z-10">
          <span className="text-white/70 text-xs">{images[current].alt}</span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-3 bg-stone-100">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-5 h-2 bg-emerald-600" : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
            }`}
            aria-label={`Immagine ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
