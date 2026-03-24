"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

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

  const openAt = (index: number) => setSelected(index);
  const close = useCallback(() => setSelected(null), []);
  const go = useCallback((direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages.length, selected]);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, go, selected]);

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block h-72 w-full overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-stone-200"
          aria-label={`Apri la galleria di ${alt}`}
        >
          <Image
            src={featuredImage}
            alt={`${alt} principale`}
            fill
            className={`${featuredMode === "contain" ? "object-contain p-6 md:p-8" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm">
            Apri gallery
          </span>
        </button>
        <div className="grid grid-cols-3 gap-3">
          {gridImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className="group relative block h-32 overflow-hidden rounded-2xl ring-1 ring-stone-200"
              aria-label={`Apri immagine ${i + 2} di ${alt}`}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[70] px-4 py-6">
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 bg-stone-950/88 backdrop-blur-sm"
            aria-label="Chiudi galleria"
          />
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Chiudi
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
            aria-label="Immagine precedente"
          >
            ‹
          </button>
          <div className="relative z-10 mx-auto h-[72vh] w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-stone-900 shadow-2xl">
            <Image
              src={lightboxImages[selected]}
              alt={`${alt} ${selected + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
            aria-label="Immagine successiva"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
