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

const sourceColor = {
  airbnb: "bg-rose-100 text-rose-700",
  booking: "bg-blue-100 text-blue-700",
  google: "bg-green-100 text-green-700",
};

export default function ReviewCard({ review, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-stone-600 text-sm leading-relaxed mb-5 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-semibold">
            {review.avatar}
          </div>
          <div>
            <p className="text-sm font-medium text-stone-800">{review.author}</p>
            <p className="text-xs text-stone-400">{review.location} · {review.date}</p>
          </div>
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            sourceColor[review.source]
          }`}
        >
          {sourceLabel[review.source]}
        </span>
      </div>
    </motion.div>
  );
}
