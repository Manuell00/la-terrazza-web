"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import ReviewCard from "@/components/ReviewCard";
import AnimatedSection from "@/components/AnimatedSection";
import MobileReviewsCarousel from "@/components/MobileReviewsCarousel";
import RoomCalendar from "@/components/RoomCalendar";
import { Room } from "@/data/rooms";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/lib/i18n";

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
  "Stazione di ricarica per auto elettriche": "🔌",
};

const AirbnbLogo = () => (
  <div className="flex items-center gap-2">
    <Image src="/images/brands/airbnb-belo.svg" alt="Airbnb" width={18} height={18} className="h-[18px] w-[18px]" />
    <span className="text-sm font-semibold">Airbnb</span>
  </div>
);

const BookingLogo = () => (
  <div className="flex items-center gap-2">
    <Image src="/images/brands/booking-icon.png" alt="Booking.com" width={18} height={18} className="h-[18px] w-[18px] rounded-sm" />
    <span className="text-sm font-semibold">Booking<span className="opacity-50">.com</span></span>
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

/* Neutral platform button */
const platformBtn =
  "group flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-600 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-600 hover:text-white hover:shadow-card";

export default function RoomPageTemplate({ room, otherRooms }: Props) {
  const { lang } = useLanguage();
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  /* Build feature lists */
  const keyFeatures = room.features.slice(0, 4); /* show 4 primary features */
  const extraAmenities = room.amenities.slice(0, 1);
  const collapsedFeatures = [
    ...keyFeatures,
    ...extraAmenities.map((label) => ({ icon: amenityIcons[label] ?? "✓", label })),
  ];
  const expandedFeatures = [
    ...room.features,
    ...room.amenities.map((label) => ({ icon: amenityIcons[label] ?? "✓", label })),
  ];
  const hasOddDesktopFeatureCount = expandedFeatures.length % 2 !== 0;

  return (
    <main>
      {/* ── Room Hero ── */}
      <section className="relative flex h-[65vh] min-h-[440px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={room.coverImage}
            alt={`${room.name} - soggiorno a La Terrazza Affittacamere, Cantarana`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={86}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/34 to-stone-950/18" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/50">
              <Link href={localizePath("/", lang)} className="transition-colors hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white/90">{room.name}</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <div className="mx-auto max-w-2xl rounded-[30px] border border-white/12 bg-stone-950/34 px-6 py-6 text-center shadow-[0_24px_70px_-34px_rgba(0,0,0,0.7)] backdrop-blur-md md:mx-0 md:px-8 md:py-7">
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                {room.highlight}
              </span>
              <h1 className="mb-2 font-serif text-5xl font-semibold text-white [text-shadow:0_10px_34px_rgba(0,0,0,0.45)] md:text-7xl">
                {room.name}
                <span className="ml-3">{room.symbol}</span>
              </h1>
              <p className="mx-auto max-w-xl text-xl text-stone-100/88 font-light">{room.subtitle}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">

            {/* Left: Gallery + Description + Features */}
            <div className="space-y-14 lg:col-span-2">

              {/* Gallery */}
              <AnimatedSection>
                <Gallery images={room.images} alt={room.name} />
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection className="text-center">
                <p className="section-label mb-3">{lang === "it" ? "La camera" : "The room"}</p>
                <h2 className="mb-5 font-serif text-[2.35rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-4xl">
                  {room.name}
                </h2>
                <div className="mx-auto max-w-2xl text-stone-500">
                  <p className="text-base leading-relaxed md:hidden">
                    {lang === "it" ? (
                      <>
                        <span className="font-semibold text-stone-800">{room.name}</span> unisce{" "}
                        <span className="font-semibold text-emerald-700">comfort autentico</span>, calma e dettagli curati per un soggiorno più intimo e rilassato.
                      </>
                    ) : (
                      <>
                        <span className="font-semibold text-stone-800">{room.name}</span> blends{" "}
                        <span className="font-semibold text-emerald-700">authentic comfort</span>, calm and thoughtful details for a more relaxed stay.
                      </>
                    )}
                  </p>
                  <p className="hidden text-base leading-relaxed md:block md:text-lg">
                    {lang === "it" ? (
                      <>
                        <span className="font-semibold text-stone-800">{room.name}</span> è pensata per chi cerca{" "}
                        <span className="font-semibold text-emerald-700">comfort autentico</span>, ritmi lenti e un&apos;atmosfera che invita davvero a fermarsi. Tra{" "}
                        <span className="font-semibold text-stone-800">luce naturale</span>, dettagli curati e la calma del paesaggio, ogni soggiorno acquista un tono più intimo e rilassato.
                      </>
                    ) : (
                      <>
                        <span className="font-semibold text-stone-800">{room.name}</span> is designed for guests looking for{" "}
                        <span className="font-semibold text-emerald-700">authentic comfort</span>, slower rhythms and a setting that genuinely invites you to pause. Between{" "}
                        <span className="font-semibold text-stone-800">natural light</span>, thoughtful details and the calm of the landscape, each stay feels more intimate and restorative.
                      </>
                    )}
                  </p>
                </div>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection className="text-center">
                <p className="section-label mb-3">{lang === "it" ? "Dotazioni" : "Features"}</p>
                <h3 className="mb-7 font-serif text-[2rem] font-semibold leading-[0.98] tracking-[-0.03em] text-stone-800 md:text-3xl">
                  {lang === "it" ? "Tutto quello che ti aspetta in camera" : "Everything waiting for you in the room"}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {expandedFeatures.map((f, index) => (
                    <div
                      key={f.label}
                      className={`flex items-center gap-3 rounded-[16px] border border-stone-100 bg-cream-50 px-4 py-3.5 transition-all duration-200 hover:border-emerald-100 hover:bg-emerald-50/40 ${
                        index >= collapsedFeatures.length
                          ? showAllFeatures
                            ? ""
                            : "hidden md:flex"
                          : ""
                      } ${
                        hasOddDesktopFeatureCount && index === expandedFeatures.length - 1
                          ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.375rem)]"
                          : ""
                      }`}
                    >
                      <span className="text-xl">{f.icon}</span>
                      <span className="text-sm font-medium text-stone-700">{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* "Visualizza tutto" — mobile only */}
                {expandedFeatures.length > collapsedFeatures.length && (
                  <button
                    type="button"
                    onClick={() => setShowAllFeatures((v) => !v)}
                    className="mt-5 btn-outline text-sm px-5 py-2.5 md:hidden"
                  >
                    {showAllFeatures ? (lang === "it" ? "Mostra meno ↑" : "Show less ↑") : (lang === "it" ? "Visualizza tutto →" : "View all →")}
                  </button>
                )}
              </AnimatedSection>
            </div>

            {/* Right: Booking sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right" className="sticky top-28 space-y-4 text-center">

                {/* Booking card */}
                <div className="rounded-[24px] border border-stone-100 bg-white p-6 shadow-elevated">
                  <div className="mb-5 border-b border-stone-100 pb-5">
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-400">{lang === "it" ? "Prezzo indicativo" : "Indicative price"}</p>
                    <p className="font-serif text-3xl font-semibold text-stone-800">{room.price}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-400">
                      {lang === "it"
                        ? "Prezzo indicativo per 2 ospiti. Può variare in base a date, stagione e piattaforma."
                        : "Indicative price for 2 guests. It may vary depending on dates, season and platform."}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {/* 1. WhatsApp — PRIMARY */}
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-green-600 px-5 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg"
                    >
                      {WA_ICON} {lang === "it" ? "Prenota via WhatsApp" : "Book via WhatsApp"}
                    </a>

                    {/* 2. Phone */}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-stone-800 px-5 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-700"
                    >
                      📞 {lang === "it" ? "Chiama per prenotare" : "Call to book"}
                    </a>

                    <div className="flex items-center gap-2 py-1">
                      <div className="h-px flex-1 bg-stone-100" />
                      <span className="text-[10px] uppercase tracking-widest text-stone-300">{lang === "it" ? "oppure prenota su" : "or book on"}</span>
                      <div className="h-px flex-1 bg-stone-100" />
                    </div>

                    {/* 3. Airbnb */}
                    <a href={room.airbnbUrl} target="_blank" rel="noopener noreferrer" className={platformBtn}>
                      <AirbnbLogo />
                    </a>

                    {/* 4. Booking */}
                    <a href={siteConfig.links.booking} target="_blank" rel="noopener noreferrer" className={platformBtn}>
                      <BookingLogo />
                    </a>

                    {/* 5. B&B.it */}
                    <a href={siteConfig.links.bedAndBreakfast} target="_blank" rel="noopener noreferrer" className={platformBtn}>
                      <BedAndBreakfastLogo />
                    </a>
                  </div>

                  {/* Trust signals */}
                  <div className="mt-5 space-y-2 border-t border-stone-100 pt-5">
                    {[
                      { icon: "✓", text: lang === "it" ? "Risposta entro pochi minuti" : "Reply within a few minutes" },
                      { icon: "🔒", text: lang === "it" ? "Prenotazione sicura e verificata" : "Secure verified booking" },
                      { icon: "⭐", text: lang === "it" ? `Rating ${siteConfig.rating}/5 verificato` : `Verified ${siteConfig.rating}/5 rating` },
                    ].map((t) => (
                      <div key={t.text} className="flex items-center justify-center gap-2 text-xs text-stone-400">
                        <span className="text-emerald-500">{t.icon}</span>
                        <span>{t.text}</span>
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

      {/* ── Reviews ── */}
      <section className="bg-cream-50 py-14 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <AnimatedSection className="mb-10 text-center">
            <p className="section-label mb-3">{lang === "it" ? "Cosa dicono" : "Guest reviews"}</p>
            <h2 className="font-serif text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800 md:text-4xl">{lang === "it" ? "Recensioni degli ospiti" : "What guests say"}</h2>
          </AnimatedSection>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-2 gap-5">
            {reviews.slice(0, 4).map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
          </div>

          {/* Mobile: carousel */}
          <MobileReviewsCarousel />
        </div>
      </section>

      {/* ── Other rooms ── */}
      <section className="bg-white py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimatedSection className="mb-10 text-center">
            <p className="section-label mb-3">{lang === "it" ? "Esplora ancora" : "Keep exploring"}</p>
            <h2 className="font-serif text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.03em] text-stone-800">{lang === "it" ? "Le altre camere" : "Other rooms"}</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {otherRooms.map((r) => (
              <Link
                key={r.id}
                href={localizePath(`/camere/${r.slug}`, lang)}
                className="group relative block h-64 overflow-hidden rounded-[22px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <Image
                  src={r.coverImage}
                  alt={`${r.name} - La Terrazza Affittacamere a Cantarana`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={82}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/82 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <div className="mx-auto max-w-[18rem] rounded-[22px] border border-white/12 bg-stone-950/38 px-4 py-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.7)] backdrop-blur-md">
                    <h3 className="font-serif text-2xl text-white">{r.name}</h3>
                    <p className="text-sm text-stone-100/86 font-light">{r.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-stone-900 py-16 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-emerald-400">{lang === "it" ? "Pronto?" : "Ready?"}</p>
            <h2 className="mb-3 font-serif text-3xl text-white md:text-4xl">
              {lang === "it" ? `Prenota ${room.name}` : `Book ${room.name}`}
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-stone-400">
              {lang === "it" ? "Scrivici su WhatsApp — risposta garantita entro pochi minuti." : "Message us on WhatsApp — we usually reply within a few minutes."}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-full max-w-[18rem] items-center justify-center px-7 py-3.5 text-sm sm:w-auto sm:max-w-none"
              >
                {WA_ICON} {lang === "it" ? "Verifica disponibilità" : "Check availability"}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18 sm:w-auto sm:max-w-none"
              >
                📞 {lang === "it" ? "Chiama per prenotare" : "Call to book"}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
