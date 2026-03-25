"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
}

export default function Gallery({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const visibleImages = images.slice(0, 3);

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback((direction: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + direction + images.length) % images.length);
  }, [images.length, lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, go, lightbox]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {visibleImages.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              i === 0 ? "col-span-2 h-72 md:col-span-2 md:row-span-2 md:h-96" : "h-36 md:h-44"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </motion.button>
        ))}
          {images.length > 3 && (
            <motion.button
              onClick={() => setLightbox(3)}
              className="col-span-2 flex items-center justify-center rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 md:hidden"
              whileTap={{ scale: 0.98 }}
            >
              Visualizza altre foto
            </motion.button>
          )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/94 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/14"
              onClick={close}
              aria-label="Chiudi"
            >
              Chiudi
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-2xl text-white transition-colors hover:bg-white/14"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Precedente"
            >
              ‹
            </button>

          <motion.div
            key={lightbox}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="relative h-[100dvh] w-[100vw] overflow-hidden bg-stone-900 sm:h-auto sm:w-full sm:max-w-4xl sm:aspect-[4/3] sm:rounded-[28px] sm:border sm:border-white/10 sm:shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${alt} ${lightbox + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-2xl text-white transition-colors hover:bg-white/14"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Successiva"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
