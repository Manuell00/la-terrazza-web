"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
import RoomCalendar from "@/components/RoomCalendar";
import { Room } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  room: Room;
  otherRooms: Room[];
}

const amenityIcons: Record<string, string> = {
  "Lenzuola di qualità": "🧺",
  "Asciugamani inclusi": "🛁",
  "TV smart": "📺",
  "Pulizie giornaliere": "✨",
  "Parcheggio gratuito": "🚗",
};

const platformLabelClass = "text-sm font-semibold tracking-[0.01em]";

const AirbnbLogo = () => (
  <div className="flex items-center gap-2">
    <Image src="/images/brands/airbnb-belo.svg" alt="Airbnb" width={18} height={18} className="h-[18px] w-[18px] rounded-[4px]" />
    <span className={platformLabelClass}>Airbnb</span>
  </div>
);

const BookingLogo = () => (
  <div className="flex items-center gap-2">
    <Image src="/images/brands/booking-icon.png" alt="Booking.com" width={18} height={18} className="h-[18px] w-[18px] rounded-[4px]" />
    <span className={platformLabelClass}>
      Booking<span className="opacity-60">.com</span>
    </span>
  </div>
);

const BedAndBreakfastLogo = () => (
  <div className="flex items-center gap-2">
    <Image src="/images/brands/bnb-logo.svg" alt="Bed-and-Breakfast.it" width={84} height={10} className="h-[12px] w-auto" />
  </div>
);

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Uniform neutral style — platform identity comes from logo/name, not color
const platformButtonBase =
  "group flex min-h-[48px] w-full items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-stone-800 hover:text-white shadow-sm";

export default function RoomPageTemplate({ room, otherRooms }: Props) {
  return (
    <main className="pt-0">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={room.coverImage} alt={room.name} fill priority className="object-cover" quality={90} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15" />
        </div>

        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-white/60 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">{room.name}</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">
              {room.highlight}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-semibold mb-2">{room.name}</h1>
            <p className="text-stone-200 text-xl max-w-xl">{room.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Gallery + Description */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <Gallery images={room.images} alt={room.name} />
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-serif text-3xl text-stone-800 mb-4">La camera</h2>
                <p className="text-stone-600 leading-relaxed text-lg">{room.longDescription}</p>
              </AnimatedSection>
              <AnimatedSection>
                <h3 className="font-serif text-2xl text-stone-800 mb-5">Cosa trovi in camera</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {room.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-3 bg-stone-50 rounded-xl px-4 py-3">
                      <span className="text-xl">{f.icon}</span>
                      <span className="text-stone-700 text-sm">{f.label}</span>
                    </div>
                  ))}
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 bg-stone-50 rounded-xl px-4 py-3">
                      <span className="text-xl">{amenityIcons[a] ?? "✓"}</span>
                      <span className="text-stone-700 text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Booking sidebar */}
            <div className="lg:col-span-1 space-y-5">
              <AnimatedSection direction="right" className="sticky top-28 space-y-4">
                {/* Quick booking card */}
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 shadow-sm">
                  <div className="mb-5 pb-4 border-b border-stone-200">
                    <p className="text-stone-400 text-xs mb-1">A partire da</p>
                    <p className="font-serif text-2xl text-stone-800 font-semibold">{room.price}</p>
                  </div>

                  {/* CTA hierarchy: 1) WhatsApp, 2) Telefono, 3) Airbnb, 4) Booking, 5) B&B */}
                  <div className="space-y-2.5">
                    {/* 1. WhatsApp — PRIMARY */}
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm">
                      {WA_ICON}
                      Prenota via WhatsApp
                    </a>

                    {/* 2. Telefono */}
                    <a href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2.5 w-full bg-stone-800 hover:bg-stone-700 text-white font-medium py-3.5 px-5 rounded-xl transition-all hover:-translate-y-0.5 text-sm">
                      📞 Chiama ora
                    </a>

                    <div className="flex items-center gap-2 my-1">
                      <div className="flex-1 h-px bg-stone-200" />
                      <span className="text-[10px] text-stone-400 uppercase tracking-widest">oppure prenota su</span>
                      <div className="flex-1 h-px bg-stone-200" />
                    </div>

                    {/* 3. Airbnb */}
                    <a href={room.airbnbUrl} target="_blank" rel="noopener noreferrer"
                      className={platformButtonBase}>
                      <AirbnbLogo />
                    </a>

                    {/* 4. Booking */}
                    <a href={siteConfig.links.booking} target="_blank" rel="noopener noreferrer"
                      className={platformButtonBase}>
                      <BookingLogo />
                    </a>

                    {/* 5. B&B.it */}
                    <a href={siteConfig.links.bedAndBreakfast} target="_blank" rel="noopener noreferrer"
                      className={platformButtonBase}>
                      <BedAndBreakfastLogo />
                    </a>
                  </div>

                  {/* Trust */}
                  <div className="mt-5 pt-4 border-t border-stone-200 space-y-1.5">
                    {[
                      { icon: "✓", text: "Risposta entro pochi minuti" },
                      { icon: "🔒", text: "Prenotazione sicura e verificata" },
                      { icon: "⭐", text: `Rating ${siteConfig.rating}/5 verificato` },
                    ].map((t) => (
                      <div key={t.text} className="flex items-center gap-2 text-stone-500 text-xs">
                        <span className="text-green-500">{t.icon}</span><span>{t.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <RoomCalendar roomName={room.name} roomSlug={room.slug} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-8">
            <h2 className="font-serif text-3xl text-stone-800">Recensioni degli ospiti</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {reviews.slice(0, 4).map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection className="mb-8">
            <h2 className="font-serif text-3xl text-stone-800">Esplora le altre camere</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/camere/${r.slug}`}
                className="group relative h-60 rounded-2xl overflow-hidden block">
                <Image src={r.coverImage} alt={r.name} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
      <section className="py-14 bg-stone-900 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Pronto a prenotare {room.name}?
            </h2>
            <p className="text-stone-400 mb-8 max-w-md mx-auto text-sm">
              Scrivici su WhatsApp — risposta garantita entro pochi minuti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* PRIMARY: WhatsApp */}
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
                {WA_ICON} Scrivi su WhatsApp
              </a>
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-sm">
                📞 Chiama ora
              </a>
              <a href={room.airbnbUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full transition-all text-sm">
                Airbnb
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
