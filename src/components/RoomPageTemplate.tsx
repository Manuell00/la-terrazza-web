"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Room } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  room: Room;
  otherRooms: Room[];
}

export default function RoomPageTemplate({ room, otherRooms }: Props) {
  return (
    <main className="pt-0">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={room.coverImage}
            alt={room.name}
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-white/60 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{room.name}</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">
              {room.highlight}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-semibold mb-3">
              {room.name}
            </h1>
            <p className="text-stone-200 text-xl max-w-xl">{room.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Gallery + Description */}
            <div className="lg:col-span-2 space-y-10">
              {/* Gallery */}
              <AnimatedSection>
                <Gallery images={room.images} alt={room.name} />
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection>
                <h2 className="font-serif text-3xl text-stone-800 mb-4">
                  La camera
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {room.longDescription}
                </p>
              </AnimatedSection>

              {/* Amenities */}
              <AnimatedSection>
                <h3 className="font-serif text-2xl text-stone-800 mb-6">
                  Cosa trovi in camera
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {room.amenities.map((a) => (
                    <div
                      key={a}
                      className="flex items-center gap-3 bg-stone-50 rounded-xl px-4 py-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span className="text-stone-700 text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Booking sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right" className="sticky top-28">
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-sm">
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-stone-200">
                    <p className="text-stone-400 text-sm mb-1">A partire da</p>
                    <p className="font-serif text-3xl text-stone-800 font-semibold">
                      {room.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {room.features.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-center gap-3 text-stone-600"
                      >
                        <span className="text-xl">{f.icon}</span>
                        <span className="text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <a
                      href={room.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-3.5 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.292 18.13c-.145-.387-.29-.724-.436-1.014-.144-.29-.37-.62-.623-.918l-7.02-9.468C13.6 6.04 12.86 5.6 12 5.6s-1.6.44-2.213 1.13L2.767 16.2c-.253.297-.48.627-.623.917-.146.29-.291.627-.436 1.014-.29.774-.27 1.477.072 1.99.387.59 1.06.892 1.95.892h15.54c.89 0 1.563-.301 1.95-.891.342-.514.362-1.217.072-1.99z" />
                      </svg>
                      Prenota su Airbnb
                    </a>

                    <a
                      href={siteConfig.links.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all hover:-translate-y-0.5"
                    >
                      🏨 Prenota su Booking.com
                    </a>

                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all hover:-translate-y-0.5"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chiedi su WhatsApp
                    </a>
                  </div>

                  {/* Trust */}
                  <div className="mt-6 pt-5 border-t border-stone-200 space-y-2">
                    <div className="flex items-center gap-2 text-stone-500 text-xs">
                      <span>✓</span>
                      <span>Risposta entro pochi minuti</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 text-xs">
                      <span>🔒</span>
                      <span>Prenotazione sicura e verificata</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 text-xs">
                      <span>⭐</span>
                      <span>Rating {siteConfig.rating}/5 su tutte le piattaforme</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mt-4 text-center">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-stone-500 text-sm hover:text-stone-800 transition-colors"
                    >
                      📞 {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif text-3xl text-stone-800">
              Recensioni degli ospiti
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.slice(0, 4).map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif text-3xl text-stone-800">
              Esplora le altre camere
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {otherRooms.map((r, i) => (
              <Link
                key={r.id}
                href={`/camere/${r.slug}`}
                className="group relative h-64 rounded-2xl overflow-hidden block"
              >
                <Image
                  src={r.coverImage}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-white text-2xl">{r.name}</h3>
                  <p className="text-stone-200 text-sm">{r.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-stone-900 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Pronto a prenotare {room.name}?
            </h2>
            <p className="text-stone-400 mb-8 max-w-md mx-auto">
              Contattaci su WhatsApp per disponibilità, domande o per
              un&apos;esperienza su misura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={room.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Prenota subito
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Chiedi informazioni
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
