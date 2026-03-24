"use client";

import { useRef } from "react";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

export default function MobileReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = card?.offsetWidth ?? container.offsetWidth * 0.88;
    const gap = 16;

    container.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="md:hidden">
      <div className="mb-4 flex items-center justify-between gap-3 px-1">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-400">
          Scorri le recensioni
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition-colors hover:bg-stone-50"
            aria-label="Recensione precedente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition-colors hover:bg-stone-50"
            aria-label="Recensione successiva"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
      >
        {reviews.map((review, i) => (
          <div
            key={review.id}
            data-review-card
            className="flex-none w-[calc(100vw-40px)] max-w-[340px] snap-center"
          >
            <ReviewCard review={review} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
