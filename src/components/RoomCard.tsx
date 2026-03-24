"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Room } from "@/data/rooms";

interface Props {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Link href={`/camere/${room.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={room.coverImage}
              alt={room.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Highlight badge */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
              {room.highlight}
            </div>

            {/* Room name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="font-serif text-white text-2xl font-semibold">
                {room.name}
              </h3>
              <p className="mt-1 text-sm text-stone-200">{room.subtitle}</p>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white p-6 text-center">
            <p className="mb-6 min-h-[96px] text-sm leading-relaxed text-stone-600">
              {room.description}
            </p>

            {/* Footer */}
            <div className="flex flex-col items-center gap-4 border-t border-stone-100 pt-5">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">
                  Tariffa indicativa
                </p>
                <span className="font-serif text-2xl text-stone-800">{room.price}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 transition-all group-hover:gap-2">
                Scopri di più
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
