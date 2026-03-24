"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
}

export default function Gallery({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {images.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              i === 0 ? "col-span-2 md:col-span-2 row-span-2 h-72 md:h-96" : "h-44 md:h-44"
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
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
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-stone-400 transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Chiudi"
            >
              ×
            </button>

            {/* Prev */}
            {lightbox > 0 && (
              <button
                className="absolute left-4 text-white text-4xl hover:text-stone-400 transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox - 1);
                }}
                aria-label="Precedente"
              >
                ‹
              </button>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
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
            {lightbox < images.length - 1 && (
              <button
                className="absolute right-4 text-white text-4xl hover:text-stone-400 transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox + 1);
                }}
                aria-label="Successiva"
              >
                ›
              </button>
            )}

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
