"use client";

import { motion } from "framer-motion";
import { Review } from "@/data/reviews";

interface Props {
  review: Review;
  index: number;
}

const sourceLabel = {
  airbnb: "Airbnb",
  booking: "Booking.com",
  google: "Google",
};

const labelEmoji: Record<string, string> = {
  Coppia: "👩‍❤️‍👨",
  "Weekend romantico": "🌙",
  "Soggiorno esteso": "🧳",
  Anniversario: "💞",
};

export default function ReviewCard({ review, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col rounded-[24px] border border-stone-100 bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf6_100%)] p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-card"
    >
      {/* Decorative quote mark */}
      <div className="pointer-events-none absolute right-5 top-3 select-none font-serif text-7xl leading-none text-stone-100 transition-transform duration-500 group-hover:scale-110">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="mb-3 flex gap-0.5">
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="relative z-10 mb-5 flex-1 text-sm leading-relaxed text-stone-600 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author + source */}
      <div className="flex items-center justify-between border-t border-stone-50 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cream-100 text-xs font-semibold text-stone-600">
            {review.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-800">{review.author}</p>
            <p className="text-xs text-stone-400">{review.location} · {review.date}</p>
          </div>
        </div>
        <span className="rounded-full border border-stone-100 bg-stone-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-400">
          {sourceLabel[review.source]}
        </span>
      </div>

      {/* Optional label badge */}
      {review.label && (
        <div className="mt-3 pt-3 border-t border-stone-50">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            <span className="text-xs leading-none">{labelEmoji[review.label] ?? "✦"}</span>
            {review.label}
          </span>
        </div>
      )}
    </motion.div>
  );
}
