"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  featuredImage: string;
  gridImages: string[];
  lightboxImages: string[];
  alt: string;
  featuredMode?: "cover" | "contain";
}

export default function PartnerGallery({
  featuredImage,
  gridImages,
  lightboxImages,
  alt,
  featuredMode = "cover",
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const openAt = (index: number) => setSelected(index);
  const close = useCallback(() => setSelected(null), []);
  const go = useCallback((direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages.length, selected]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selected === null) return;
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
  }, [close, go, selected]);

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block h-72 w-full overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-stone-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
          aria-label={`Apri la galleria di ${alt}`}
        >
          <Image
            src={featuredImage}
            alt={`${alt} principale`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            quality={84}
            className={`${featuredMode === "contain" ? "object-contain p-4 md:p-6" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/28 via-stone-950/10 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:opacity-100" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/92 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm">
            Apri gallery
          </span>
        </button>
        <div className="grid grid-cols-3 gap-3">
          {gridImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className="group relative block h-32 overflow-hidden rounded-2xl ring-1 ring-stone-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`Apri immagine ${i + 2} di ${alt}`}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 2}`}
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                quality={80}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="premium-image-overlay" />
            </button>
          ))}
        </div>
      </div>

      {mounted && selected !== null && createPortal(
        <div className="fixed inset-0 z-[999] bg-stone-950/90 backdrop-blur-md">
          <button
            type="button"
            onClick={close}
            className="absolute inset-0"
            aria-label="Chiudi galleria"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-6 sm:px-6">
            <div className="relative w-full max-w-6xl">
              <button
                type="button"
                onClick={close}
                className="absolute right-0 top-[-3.25rem] z-30 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
              >
                Chiudi
              </button>

              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors hover:bg-white/15 sm:left-4"
                aria-label="Immagine precedente"
              >
                ‹
              </button>

              <div className="relative mx-auto flex h-[78vh] w-full items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 shadow-2xl">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={lightboxImages[selected]}
                    initial={{ opacity: 0, x: 24, scale: 0.992 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -24, scale: 0.992 }}
                    transition={{ duration: 0.42, ease: [0.42, 0, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={lightboxImages[selected]}
                      alt={`${alt} ${selected + 1}`}
                      fill
                      quality={88}
                      className="object-contain"
                      sizes="100vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors hover:bg-white/15 sm:right-4"
                aria-label="Immagine successiva"
              >
                ›
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
