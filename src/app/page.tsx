import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
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
    description:
      "Tre camere esclusive tra i vigneti del Piemonte. Natura, relax e ospitalità autentica.",
    images: [{ url: "/images/struttura/struttura-1.jpg" }],
    locale: "it_IT",
    type: "website",
  },
};

const highlights = [
  {
    icon: "🌿",
    title: "Natura selvaggia",
    desc: "Circondati dai vigneti del Monferrato, lontano dal rumore. Qui il verde è protagonista.",
  },
  {
    icon: "🌅",
    title: "Alba e tramonto",
    desc: "Ogni giornata inizia e finisce con un panorama che toglie il fiato. Nessun filtro necessario.",
  },
  {
    icon: "🛏️",
    title: "Comfort autentico",
    desc: "Letti morbidi, biancheria di qualità, bagni privati. Il lusso vero è quello che si sente.",
  },
  {
    icon: "🍳",
    title: "Colazione inclusa",
    desc: "Ogni mattina una colazione fatta con cura: prodotti locali, dolci fatti in casa.",
  },
  {
    icon: "🔇",
    title: "Silenzio totale",
    desc: "Niente traffico, niente sirene. Solo il vento tra le foglie e il canto degli uccelli.",
  },
  {
    icon: "💬",
    title: "Risposta veloce",
    desc: "I proprietari rispondono sempre entro pochi minuti. Su WhatsApp, email o telefono.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Presentation */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/struttura/struttura-2.jpg"
                    alt="La Terrazza - struttura"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-stone-800">
                        {siteConfig.rating}/5
                      </p>
                      <p className="text-xs text-stone-500">
                        {siteConfig.reviewCount}+ recensioni
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
                La nostra storia
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-6">
                Un posto che
                <br />
                si sente speciale.
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  La Terrazza nasce dall&apos;amore per questa terra. Una
                  proprietà familiare trasformata in un luogo di accoglienza
                  autentica, dove ogni dettaglio è stato curato per farti sentire
                  a casa — anzi, meglio di casa.
                </p>
                <p>
                  Siamo a Cantarana, nel cuore dell&apos;Astigiano, tra i vigneti
                  del Monferrato. Un posto dove la natura detta i ritmi, i profumi
                  sono quelli veri, e il cielo la sera è uno spettacolo.
                </p>
                <p>
                  Tre camere — Luna, Stella, Sole — tre caratteri diversi, una
                  sola promessa: andartene con il sorriso.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/prenota"
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  Scopri le camere
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
                </Link>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 hover:border-stone-500 px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
              Perché sceglierci
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
              Quello che rende La Terrazza unica.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{h.icon}</div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
              Le nostre camere
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
              Tre camere, tre emozioni.
            </h2>
            <p className="text-stone-500 text-lg">
              Ogni spazio ha la sua personalità. Scegli quella che rispecchia il
              tuo umore.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-4 overflow-hidden bg-white">
        <div className="grid grid-cols-4 gap-2">
          {[
            "/images/struttura/struttura-3.jpg",
            "/images/struttura/struttura-4.jpg",
            "/images/camera-luna/luna-2.jpg",
            "/images/camera-sole/sole-2.jpg",
          ].map((src, i) => (
            <div key={i} className="relative h-48 md:h-64 overflow-hidden">
              <Image
                src={src}
                alt={`La Terrazza gallery ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
              Recensioni
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
              Cosa dicono i nostri ospiti.
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-stone-800">
                {siteConfig.rating}
              </span>
              <span className="text-stone-400 text-sm">
                · {siteConfig.reviewCount}+ recensioni verificate
              </span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
              Come raggiungerci
            </p>
            <h2 className="font-serif text-4xl text-stone-800 leading-tight mb-4">
              Nel cuore del Piemonte.
            </h2>
            <p className="text-stone-500">
              Palazzasso, Cantarana (Asti) — 45 min da Torino · 1h da Milano
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0!2d8.1!3d44.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a5e5e5e5e5f%3A0x0!2sCantarana%2C+AT!5e0!3m2!1sit!2sit!4v1711234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Terrazza Affittacamere - Mappa"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <span>🚗</span> 45 min da Torino
              </span>
              <span className="flex items-center gap-1.5">
                <span>🚗</span> 1h da Milano
              </span>
              <span className="flex items-center gap-1.5">
                <span>🚗</span> 30 min da Asti
              </span>
              <span className="flex items-center gap-1.5">
                <span>🅿️</span> Parcheggio gratuito
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/struttura/struttura-4.jpg"
            alt="La Terrazza"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-4">
              Pronto a partire?
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-semibold leading-tight mb-6">
              Il tuo riposo
              <br />
              ti aspetta.
            </h2>
            <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
              Prenota direttamente con noi o attraverso le nostre piattaforme.
              Risposta garantita entro pochi minuti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prenota"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 shadow-2xl"
              >
                Controlla disponibilità
              </Link>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5"
              >
                📞 {siteConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
