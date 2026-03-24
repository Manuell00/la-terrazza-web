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

      <div className="mt-2 flex flex-col items-center gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-400">
          Scorri le recensioni
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200/80 bg-white text-sm text-stone-500 shadow-sm transition-all hover:bg-stone-50 hover:text-stone-700"
            aria-label="Recensione precedente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200/80 bg-white text-sm text-stone-500 shadow-sm transition-all hover:bg-stone-50 hover:text-stone-700"
            aria-label="Recensione successiva"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
