import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
import StructureCarousel from "@/components/StructureCarousel";
import MobileReviewsCarousel from "@/components/MobileReviewsCarousel";
import PetFriendly from "@/components/PetFriendly";
import { getRooms } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Guesthouse in Cantarana | B&B near Asti | Stay in Piedmont",
  description:
    "English-friendly guesthouse in Cantarana, a B&B near Asti for a stay in Piedmont among vineyards, breakfast included and quiet countryside views.",
  keywords: [
    "guesthouse Cantarana",
    "B&B near Asti",
    "stay in Piedmont",
    "Monferrato accommodation",
    "countryside stay Asti",
  ].join(", "),
  alternates: {
    canonical: "/en",
    languages: {
      it: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Guesthouse in Cantarana | Stay in Piedmont",
    description: "An English-friendly countryside stay near Asti, among the vineyards of Piedmont.",
    images: [{ url: "/images/seo/bb-asti-la-terrazza-struttura.jpg" }],
    locale: "en_US",
    type: "website",
  },
};

const rooms = getRooms("en");

const highlights = [
  { icon: "🌿", title: "Surrounded by nature", desc: "Monferrato vineyards, open countryside and a slower rhythm from the moment you arrive." },
  { icon: "🌅", title: "Light & views", desc: "Morning light, sunsets and panoramic moments that shape the whole stay." },
  { icon: "🛏️", title: "Authentic comfort", desc: "Soft beds, carefully prepared rooms and a guest experience that feels personal." },
  { icon: "🍳", title: "Breakfast included", desc: "A relaxed start to the day with breakfast already part of the experience." },
  { icon: "🔇", title: "Real quiet", desc: "A calm countryside setting for guests who want to switch off properly." },
  { icon: "💬", title: "Fast response", desc: "Direct contact and quick replies when you need information or availability." },
];

export default function EnglishHomePage() {
  return (
    <main lang="en">
      <Hero />

      <section aria-labelledby="en-home-story-title" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream-50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <AnimatedSection direction="right" className="order-1 text-center md:order-2 md:text-left">
              <div className="rounded-[30px] border border-stone-100 bg-cream-50/80 p-7 shadow-soft backdrop-blur-sm md:p-9">
                <p className="section-label">Our story</p>
                <h2 id="en-home-story-title" className="mb-5 font-serif text-[2.3rem] font-semibold leading-[0.95] tracking-[-0.03em] text-stone-800 md:text-5xl">
                  A special place.
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-stone-500 md:text-base">
                  <p>We are in Cantarana, in the heart of the Asti countryside, among the vineyards of Monferrato. A place where nature sets the pace and the evening sky becomes part of the stay.</p>
                  <p>
                    <span className="font-semibold text-stone-900">Three rooms</span>:{" "}
                    <span className="font-semibold text-emerald-700">Luna</span>,{" "}
                    <span className="font-semibold text-emerald-700">Stella</span>{" "}and{" "}
                    <span className="font-semibold text-emerald-700">Sole</span>. Three different moods, one promise: leaving with a smile.
                  </p>
                  <p>
                    If you are looking for a <span className="font-semibold text-stone-900">guesthouse in Cantarana</span>, a
                    {" "}<span className="font-semibold text-stone-900">B&amp;B near Asti</span> or a
                    {" "}<span className="font-semibold text-stone-900">stay in Piedmont</span> surrounded by vineyards and quiet countryside, La Terrazza is designed for that slower kind of escape.
                  </p>
                </div>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Link href="/en/book" className="btn-outline text-sm px-6 py-3">
                    Explore our rooms →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div className="relative">
                <div className="group relative h-72 overflow-hidden rounded-[24px] shadow-elevated md:h-[460px]">
                  <Image
                    src="/images/seo/bb-asti-la-terrazza-struttura.jpg"
                    alt="La Terrazza guesthouse in Cantarana near Asti, Piedmont"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={88}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-5 right-2 rounded-[18px] border border-stone-100 bg-white p-4 shadow-elevated md:-bottom-6 md:-right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div>
                      <p className="font-serif text-xl font-semibold leading-none text-stone-800">{siteConfig.rating}/5</p>
                      <p className="mt-0.5 text-xs text-stone-400">{siteConfig.reviewCount}+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section aria-labelledby="en-home-highlights-title" className="bg-cream-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Why choose us</p>
            <h2 id="en-home-highlights-title" className="font-serif text-[2.25rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-5xl">
              What makes La Terrazza feel different.
            </h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center rounded-[22px] border border-stone-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card md:p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50 text-2xl transition-colors group-hover:bg-emerald-50">{h.icon}</div>
                  <h3 className="mb-2 font-serif text-base leading-snug text-stone-800 md:text-xl">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-stone-400 md:text-sm">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="en-home-rooms-title" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Our rooms</p>
            <h2 id="en-home-rooms-title" className="mb-3 font-serif text-[2.25rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-5xl">
              Three rooms, three moods.
            </h2>
            <p className="text-stone-400">Each room has its own personality. Choose the one that feels right for your stay.</p>
          </AnimatedSection>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
            {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="en-home-structure-title" className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-10 max-w-xl text-center">
            <p className="section-label">The property</p>
            <h2 id="en-home-structure-title" className="font-serif text-[2rem] font-semibold leading-[0.98] tracking-[-0.03em] text-stone-800 md:text-3xl">Scroll to discover it.</h2>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-3xl">
            <StructureCarousel />
          </AnimatedSection>
        </div>
      </section>

      <section aria-labelledby="en-home-reviews-title" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Reviews</p>
            <h2 id="en-home-reviews-title" className="mb-5 font-serif text-[2.25rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-5xl">What our guests say.</h2>
          </AnimatedSection>
          <div className="mx-auto hidden max-w-6xl md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
          </div>
          <MobileReviewsCarousel />
        </div>
      </section>

      <PetFriendly />

      <section aria-labelledby="en-home-map-title" className="bg-cream-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-label">How to reach us</p>
            <h2 id="en-home-map-title" className="font-serif text-[2.15rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-4xl">
              Vineyards, quiet and scenic roads.
            </h2>
            <p className="mx-auto mt-4 hidden max-w-xl text-sm leading-relaxed text-stone-500 md:block md:text-base">
              Reaching La Terrazza means gradually entering a slower landscape of rolling hills, open light and the calm atmosphere of <span className="font-semibold text-stone-800">Piedmont</span>.
            </p>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white p-3 shadow-[0_30px_100px_-46px_rgba(28,25,23,0.28)] md:p-4">
              <div className="mb-4 hidden gap-3 md:grid md:grid-cols-3">
                {[
                  { icon: "📍", title: "Cantarana, Asti" },
                  { icon: "🚗", title: "Easy to reach" },
                  { icon: "🌿", title: "Authentic setting" },
                ].map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-stone-100 bg-cream-50 px-4 py-4 text-center">
                    <p className="text-xl">{item.icon}</p>
                    <p className="mt-2 text-sm font-semibold text-stone-800">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="h-72 overflow-hidden rounded-[24px] border border-stone-200 shadow-inner md:h-96">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Terrazza map"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href={siteConfig.links.google} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                Open in Google Maps
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
