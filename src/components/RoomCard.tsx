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
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
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
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-serif text-white text-2xl font-semibold">
                {room.name}
              </h3>
              <p className="text-stone-200 text-sm mt-1">{room.subtitle}</p>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white p-5">
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {room.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-5">
              {room.features.slice(0, 4).map((f) => (
                <span
                  key={f.label}
                  className="flex items-center gap-1 bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full"
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-stone-400 text-xs">{room.price}</span>
              <span className="flex items-center gap-1 text-amber-600 text-sm font-medium group-hover:gap-2 transition-all">
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
