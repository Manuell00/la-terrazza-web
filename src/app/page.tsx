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
import { rooms } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Affittacamere Cantarana | B&B Asti | Soggiorno Piemonte",
  description:
    "Affittacamere a Cantarana e B&B vicino Asti per un soggiorno in Piemonte tra Monferrato, colazione inclusa, parcheggio gratuito e tre camere esclusive.",
  keywords: [
    ...siteConfig.seo.keywords,
    "affittacamere Cantarana",
    "B&B Asti",
    "soggiorno Piemonte",
  ].join(", "),
  alternates: {
    canonical: "/",
    languages: {
      it: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Affittacamere Cantarana | B&B Asti | La Terrazza",
    description: "Soggiorno in Piemonte tra vigne, quiete e ospitalità autentica a Cantarana, vicino Asti.",
    images: [{ url: "/images/seo/bb-asti-la-terrazza-struttura.jpg" }],
    locale: "it_IT",
    type: "website",
  },
};

const highlights = [
  { icon: "🌿", title: "Natura selvaggia", desc: "Circondati dai vigneti del Monferrato. Qui il verde è protagonista." },
  { icon: "🌅", title: "Alba e tramonto", desc: "Panorami che tolgono il fiato. Nessun filtro necessario." },
  { icon: "🛏️", title: "Comfort autentico", desc: "Letti morbidi, biancheria di qualità, bagni privati." },
  { icon: "🍳", title: "Colazione inclusa", desc: "Prodotti locali, dolci fatti in casa ogni mattina." },
  { icon: "🔇", title: "Silenzio totale", desc: "Solo il vento tra le foglie e il canto degli uccelli." },
  { icon: "💬", title: "Risposta veloce", desc: "Risposta garantita entro pochi minuti su WhatsApp." },
];

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomePage() {
  return (
    <main lang="it">
      <Hero />

      {/* ── Presentation ── */}
      <section aria-labelledby="home-story-title" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream-50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">

            {/* Text */}
            <AnimatedSection direction="right" className="order-1 text-center md:order-2 md:text-left">
              <div className="rounded-[30px] border border-stone-100 bg-cream-50/80 p-7 shadow-soft backdrop-blur-sm md:p-9">
                <p className="section-label">La nostra storia</p>
                <h2 id="home-story-title" className="section-title-xl mb-5 text-[2.3rem]">
                  Un posto speciale
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-stone-500 md:text-base">
                  <p>Siamo a Cantarana, nel cuore dell&apos;Astigiano, tra i vigneti del Monferrato. Un posto dove la natura detta i ritmi e il cielo la sera è uno spettacolo.</p>
                  <p>
                    <span className="font-semibold text-stone-900">Tre camere</span>:{" "}
                    <span className="font-semibold text-emerald-700">Luna</span>,{" "}
                    <span className="font-semibold text-emerald-700">Stella</span>{" "}e{" "}
                    <span className="font-semibold text-emerald-700">Sole</span>.
                    {" "}Tre caratteri diversi, una sola promessa: andarsene con un sorriso.
                  </p>
                  <p>
                    Se stai cercando un <span className="font-semibold text-stone-900">affittacamere a Cantarana</span>, un
                    {" "}<span className="font-semibold text-stone-900">B&amp;B ad Asti</span> o un
                    {" "}<span className="font-semibold text-stone-900">soggiorno in Piemonte</span> tra quiete, colline e ospitalità autentica, La Terrazza è pensata proprio per questo.
                  </p>
                </div>
                <div className="mt-8 flex justify-center md:justify-start">
                  <Link href="/prenota" className="btn-outline text-sm px-6 py-3">
                    Scopri le nostre camere →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div className="relative">
                <div className="group relative h-72 overflow-hidden rounded-[24px] shadow-elevated md:h-[460px]">
                  <Image
                    src="/images/seo/bb-asti-la-terrazza-struttura.jpg"
                    alt="Esterno de La Terrazza Affittacamere a Cantarana, vicino Asti"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={88}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                {/* Rating badge */}
                <div className="absolute -bottom-5 right-2 rounded-[18px] border border-stone-100 bg-white p-4 shadow-elevated md:-bottom-6 md:-right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div>
                      <p className="font-serif text-xl font-semibold text-stone-800 leading-none">{siteConfig.rating}/5</p>
                      <p className="mt-0.5 text-xs text-stone-400">{siteConfig.reviewCount}+ recensioni</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section aria-labelledby="home-highlights-title" className="bg-cream-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Perché sceglierci</p>
            <h2 id="home-highlights-title" className="section-title-xl">
              Quello che rende La Terrazza unica
            </h2>
          </AnimatedSection>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center rounded-[22px] border border-stone-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card md:p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50 text-2xl transition-colors group-hover:bg-emerald-50">
                    {h.icon}
                  </div>
                  <h3 className="mb-2 font-serif text-base leading-snug text-stone-800 md:text-xl">{h.title}</h3>
                  <p className="hidden text-xs leading-relaxed text-stone-400 md:block md:text-sm">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rooms ── */}
      <section aria-labelledby="home-rooms-title" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Le nostre camere</p>
            <h2 id="home-rooms-title" className="section-title-xl mb-3">
              Tre camere, tre emozioni
            </h2>
            <p className="hidden text-stone-400 md:block">Ogni spazio ha la sua personalità. Scegli quella che rispecchia il tuo umore.</p>
          </AnimatedSection>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
            {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── Structure Carousel ── */}
      <section aria-labelledby="home-structure-title" className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-10 max-w-xl text-center">
            <p className="section-label">La struttura</p>
            <h2 id="home-structure-title" className="section-title-lg text-[2rem] md:text-3xl">Scorri per scoprirla</h2>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-3xl">
            <StructureCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section aria-labelledby="home-reviews-title" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <p className="section-label">Recensioni</p>
            <h2 id="home-reviews-title" className="section-title-xl mb-5">
              Cosa dicono i nostri ospiti
            </h2>
            <div className="inline-flex flex-col items-center rounded-[26px] border border-stone-100 bg-white px-5 py-4 shadow-[0_24px_70px_-42px_rgba(28,25,23,0.22)] md:px-7">
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-emerald-500 md:h-[18px] md:w-[18px]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-end justify-center gap-2">
                <span className="font-serif text-3xl font-semibold leading-none text-stone-900 md:text-[2.2rem]">
                  {siteConfig.rating}
                </span>
                <span className="pb-0.5 text-sm font-medium text-stone-500">/ 5</span>
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
                {siteConfig.reviewCount}+ recensioni verificate
              </p>
            </div>
          </AnimatedSection>

          {/* Desktop grid */}
          <div className="mx-auto hidden max-w-6xl md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
          </div>
          {/* Mobile carousel */}
          <MobileReviewsCarousel />
        </div>
      </section>

      {/* ── Pet Friendly ── */}
      <PetFriendly />

      {/* ── Map ── */}
      <section aria-labelledby="home-map-title" className="bg-cream-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-label">Come raggiungerci</p>
            <h2 id="home-map-title" className="section-title-lg text-[2.15rem]">
              Tra vigne, quiete e strade panoramiche.
            </h2>
            <p className="mx-auto mt-4 hidden max-w-xl text-sm leading-relaxed text-stone-500 md:block md:text-base">
              Arrivare a La Terrazza significa entrare gradualmente in un paesaggio più lento,
              fatto di colline morbide, luce aperta e un <span className="font-semibold text-stone-800">Piemonte</span> che si fa subito sentire.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white p-3 shadow-[0_30px_100px_-46px_rgba(28,25,23,0.28)] md:p-4">
              <div className="mb-4 hidden gap-3 md:grid md:grid-cols-3">
                {[
                  { icon: "📍", title: "Cantarana, Asti" },
                  { icon: "🚗", title: "Arrivo semplice" },
                  { icon: "🌿", title: "Atmosfera autentica" },
                ].map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-stone-100 bg-cream-50 px-4 py-4 text-center">
                    <p className="text-xl">{item.icon}</p>
                    <p className="mt-2 text-sm font-semibold text-stone-800">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="h-72 overflow-hidden rounded-[24px] border border-stone-200 shadow-inner md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0!2d8.1!3d44.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a5e5e5e5e5f%3A0x0!2sCantarana%2C+AT!5e0!3m2!1sit!2sit!4v1711234567890"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="La Terrazza Affittacamere - Mappa"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href={siteConfig.links.google}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                Apri su Google Maps
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-stone-900 py-24 text-center md:py-32">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[480px] w-[480px] rounded-full bg-emerald-900/20 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl rounded-[30px] bg-stone-900 px-6 py-8 md:px-10 md:py-10">
              <p className="section-label mb-5 text-emerald-400">Pronti ad accoglierti</p>
              <h2 className="page-hero-title mb-4 text-3xl text-white md:text-5xl">
                La tua prossima fuga inizia qui
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-stone-300 md:text-base">
                Tre camere, natura intorno, silenzio vero. Verifica la disponibilità e prenota il tuo soggiorno a La Terrazza.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/prenota"
                  className="inline-flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-500 hover:-translate-y-px active:translate-y-0 sm:w-auto sm:max-w-none"
                >
                  Verifica disponibilità
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:-translate-y-px active:translate-y-0 sm:w-auto sm:max-w-none"
                >
                  📞 Chiama per prenotare
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
