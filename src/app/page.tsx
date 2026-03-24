import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
import StructureCarousel from "@/components/StructureCarousel";
import MobileReviewsCarousel from "@/components/MobileReviewsCarousel";
import { rooms } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "La Terrazza Affittacamere | B&B Cantarana, Asti — Piemonte",
  description:
    "Affittacamere immerso nella campagna di Cantarana (Asti). Tre camere esclusive, colazione inclusa, natura e silenzio. Prenota su Airbnb o Booking.com.",
  keywords: siteConfig.seo.keywords.join(", "),
  openGraph: {
    title: "La Terrazza Affittacamere — Cantarana, Asti",
    description: "Tre camere esclusive tra i vigneti del Piemonte. Natura, relax e ospitalità autentica.",
    images: [{ url: "/images/struttura/struttura-2.jpg" }],
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
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Presentation */}
      <section className="bg-stone-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="group relative h-72 md:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/struttura/struttura-3.jpg" alt="La Terrazza — struttura" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-5 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl p-3.5 shadow-xl border border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <p className="font-serif text-xl font-semibold text-stone-800">{siteConfig.rating}/5</p>
                      <p className="text-xs text-stone-500">{siteConfig.reviewCount}+ recensioni</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="text-center">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-600">La nostra storia</p>
              <h2 className="mb-5 text-center font-serif text-3xl leading-tight text-stone-800 md:text-5xl">
                Un posto che<br />si sente speciale.
              </h2>
              <div className="mx-auto max-w-xl space-y-4 text-center text-sm leading-relaxed text-stone-600 md:text-base">
                <p>La Terrazza nasce dall&apos;amore per questa terra. Una proprietà familiare trasformata in un luogo di accoglienza autentica, dove ogni dettaglio è stato curato per farti sentire a casa — anzi, meglio di casa.</p>
                <p>Siamo a Cantarana, nel cuore dell&apos;Astigiano, tra i vigneti del Monferrato. Un posto dove la natura detta i ritmi e il cielo la sera è uno spettacolo.</p>
                <p>Tre camere — Luna, Stella, Sole — tre caratteri diversi, una sola promessa: andartene con il sorriso.</p>
              </div>
              <div className="mt-8 flex justify-center">
                <Link href="/prenota"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-lg md:bg-transparent md:px-5 md:py-2.5 md:text-sm md:text-stone-700 md:shadow-none md:ring-1 md:ring-stone-300 md:hover:bg-stone-100/70 md:hover:ring-stone-500">
                  Scopri le nostre camere →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights — 2 col mobile, 3 col desktop */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Perché sceglierci</p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight">
              Quello che rende La Terrazza unica.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-stone-100 p-4 text-center transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-50/40 hover:shadow-lg md:p-6">
                  <div className="text-3xl md:text-4xl mb-3">{h.icon}</div>
                  <h3 className="font-serif text-base md:text-xl text-stone-800 mb-1.5 leading-snug">{h.title}</h3>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Le nostre camere</p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight mb-3">Tre camere, tre emozioni.</h2>
            <p className="text-stone-500">Ogni spazio ha la sua personalità. Scegli quella che rispecchia il tuo umore.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>
        </div>
      </section>

      {/* Structure Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-8">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2">La struttura</p>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-800">Scorri per scoprirla.</h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-3xl mx-auto">
            <StructureCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Recensioni</p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight mb-4">Cosa dicono i nostri ospiti.</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-stone-800">{siteConfig.rating}</span>
              <span className="text-stone-400 text-sm">· {siteConfig.reviewCount}+ recensioni verificate</span>
            </div>
          </AnimatedSection>
          {/* Mobile: horizontal scroll; Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
          </div>
          <MobileReviewsCarousel />
        </div>
      </section>

      {/* Map — mobile simplified */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Come raggiungerci</p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 leading-tight mb-4">Nel cuore del Piemonte.</h2>
          </AnimatedSection>

          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0!2d8.1!3d44.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a5e5e5e5e5f%3A0x0!2sCantarana%2C+AT!5e0!3m2!1sit!2sit!4v1711234567890"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="La Terrazza Affittacamere - Mappa"
              />
            </div>
            {/* Bottone Google Maps */}
            <div className="mt-4 text-center">
              <a
                href={siteConfig.links.google}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-stone-700 sm:px-6 sm:py-3"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Apri su Google Maps
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA — "Il tuo relax inizia qui" */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/struttura/struttura-4.jpg" alt="La Terrazza" fill className="object-cover" />
          <div className="absolute inset-0 bg-stone-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">Pronto a partire?</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-semibold leading-tight mb-5">
              Il tuo relax<br />inizia qui.
            </h2>
            <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto mb-10">
              Scrivici su WhatsApp per disponibilità, domande o richieste speciali.
              Risposta garantita entro pochi minuti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* PRIMARY: WhatsApp */}
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-400 shadow-xl sm:px-8 sm:py-4 sm:text-base">
                {WA_ICON} Scrivici su WhatsApp
              </a>
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base">
                📞 Chiama ora
              </a>
              <Link href="/prenota"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-900 transition-all hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Controlla disponibilità
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
