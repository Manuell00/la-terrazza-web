"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Room } from "@/data/rooms";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/lib/i18n";

interface Props {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: Props) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={localizePath(`/camere/${room.slug}`, lang)} className="group block h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-stone-200/70 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">

          {/* Image */}
          <div className="relative h-72 overflow-hidden flex-shrink-0">
            <Image
              src={room.coverImage}
              alt={room.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/72 via-stone-950/12 to-transparent md:from-stone-950/18 md:via-transparent md:to-transparent" />

            {/* Highlight badge */}
            <div className="absolute top-4 right-4 rounded-full border border-white/25 bg-stone-950/30 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              {room.highlight}
            </div>

            {/* Room name overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 text-center md:hidden">
              <div className="mx-auto max-w-[15rem] rounded-[20px] border border-white/12 bg-stone-950/45 px-4 py-3 backdrop-blur-md shadow-[0_14px_40px_-18px_rgba(0,0,0,0.75)]">
                <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">
                  {room.name}
                </h3>
                <p className="mt-1 text-sm text-stone-200/90 font-light">{room.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="flex flex-1 flex-col bg-white p-6 text-center">
            <div className="mb-4 hidden md:block">
              <h3 className="font-serif text-[2rem] font-semibold tracking-[-0.03em] text-stone-900">
                {room.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-700">{room.subtitle}</p>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-stone-500 mb-6">
              {room.description}
            </p>

            {/* Price + CTA */}
            <div className="border-t border-stone-100 pt-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                {lang === "it" ? "Tariffa indicativa" : "Indicative rate"}
              </p>
              <p className="mb-4 font-serif text-2xl text-stone-800">{room.price}</p>
              <p className="mb-4 text-xs leading-relaxed text-stone-400">
                {lang === "it"
                  ? "Prezzo indicativo. Può variare in base a date e periodo."
                  : "Indicative price. It may vary depending on dates and season."}
              </p>

              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-5 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                {lang === "it" ? "Scopri di più" : "Discover more"}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
