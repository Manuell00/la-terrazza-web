import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { rooms } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Prenota | La Terrazza Affittacamere — Cantarana, Asti",
  description:
    "Prenota il tuo soggiorno a La Terrazza Affittacamere. Disponibile su Airbnb, Booking.com e per prenotazione diretta su WhatsApp.",
};

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function waLink(roomName: string) {
  const text = encodeURIComponent(
    `Buongiorno! Vorrei informazioni sulla ${roomName}. È disponibile? Grazie!`
  );
  return `${siteConfig.whatsapp}?text=${text}`;
}

export default function PrenotaPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/struttura/struttura-3.jpg"
            alt="Prenota La Terrazza"
            fill
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/68 to-stone-950/82" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="relative isolate mx-auto max-w-3xl overflow-hidden rounded-[30px] border border-white/18 px-6 py-8 shadow-[0_28px_80px_-34px_rgba(0,0,0,0.82)] md:px-10 md:py-10">
              <div className="absolute inset-0 -z-10 bg-[rgba(12,10,9,0.84)]" />
              <div className="absolute inset-0 -z-10 backdrop-blur-xl" />
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Prenota il tuo soggiorno
              </p>
              <h1 className="page-hero-title mb-5 text-[2.4rem] text-white sm:text-5xl md:text-6xl text-balance">
                Il tuo relax inizia qui.
              </h1>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-stone-300/90 md:text-lg">
                Scegli la camera che preferisci e prenota direttamente — oppure scrivici su WhatsApp.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Rooms quick select ── */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">Scegli la camera</p>
            <h2 className="section-title-md">Qual è la tua preferita?</h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={room.coverImage}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 text-center">
                      <h3 className="card-title text-xl text-white">
                        {room.name}
                      </h3>
                      <p className="text-sm text-stone-200/80 font-light">{room.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 text-center">
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-500">{room.description}</p>
                    <div className="mb-4 border-t border-stone-100 pt-4 text-center">
                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                        Tariffa indicativa
                      </p>
                      <p className="font-serif text-2xl font-semibold text-stone-800">{room.price}</p>
                      <p className="mt-2 text-xs leading-relaxed text-stone-400">
                        Prezzo indicativo. Può variare in base a date e periodo.
                      </p>
                    </div>
                    <div className="flex gap-2.5">
                      <a
                        href={waLink(room.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-green-600 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:-translate-y-0.5"
                      >
                        {WA_ICON} WhatsApp
                      </a>
                      <Link
                        href={`/camere/${room.slug}`}
                        className="flex flex-1 items-center justify-center rounded-full border border-stone-200 bg-white py-2.5 text-sm font-medium text-stone-700 transition-all duration-200 hover:border-stone-300 hover:bg-stone-50"
                      >
                        Dettagli
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">Tutte le piattaforme</p>
            <h2 className="section-title-md mb-3">Prenota anche su</h2>
            <p className="mx-auto max-w-lg text-stone-400">
              Tutte le prenotazioni sono sicure e verificate. Scegli la piattaforma che preferisci.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

            {/* Airbnb */}
            <AnimatedSection delay={0}>
              <div className="flex h-full flex-col items-center rounded-[26px] border border-stone-100 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card-hover">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-stone-50 shadow-soft">
                  <Image src="/images/brands/airbnb-belo.svg" alt="Airbnb" width={26} height={26} className="h-[26px] w-[26px]" />
                </div>
                <h3 className="card-title mb-3 text-[1.6rem] tracking-tight">Airbnb</h3>
                <p className="mb-6 max-w-xs text-sm leading-relaxed text-stone-400">
                  Prenota Camera Luna, Stella o Sole su Airbnb. Pagamento sicuro e protezione ospiti.
                </p>
                <div className="mt-auto w-full space-y-2">
                  {rooms.map((room) => (
                    <a
                      key={room.id}
                      href={room.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] w-full items-center justify-center rounded-full border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                    >
                      {room.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Booking.com */}
            <AnimatedSection delay={0.1}>
              <div className="flex h-full flex-col items-center rounded-[26px] border border-stone-100 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card-hover">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-stone-50 shadow-soft">
                  <Image src="/images/brands/booking-icon.png" alt="Booking.com" width={28} height={28} className="h-[28px] w-[28px] rounded-md" />
                </div>
                <h3 className="card-title mb-3 text-[1.6rem] tracking-tight">Booking.com</h3>
                <p className="mb-6 max-w-xs text-sm leading-relaxed text-stone-400">
                  Prenota su Booking.com con cancellazione flessibile. Migliaia di recensioni verificate.
                </p>
                <div className="mb-5 flex w-full flex-wrap justify-center gap-2">
                  {rooms.map((room) => (
                    <span
                      key={room.id}
                      className="rounded-full border border-stone-100 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-500"
                    >
                      {room.name.replace("Camera ", "")}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[44px] w-full items-center justify-center rounded-full border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                >
                  Prenota su Booking
                </a>
              </div>
            </AnimatedSection>

            {/* B&B.it */}
            <AnimatedSection delay={0.2}>
              <div className="flex h-full flex-col items-center rounded-[26px] border border-stone-100 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card-hover">
                <div className="mb-5 flex h-14 items-center justify-center rounded-[18px] bg-stone-50 px-4 shadow-soft">
                  <Image src="/images/brands/bnb-logo.svg" alt="Bed-and-Breakfast.it" width={84} height={12} className="h-[13px] w-auto" />
                </div>
                <h3 className="card-title mb-3 text-[1.6rem] tracking-tight">Bed-and-Breakfast.it</h3>
                <p className="mb-6 max-w-xs text-sm leading-relaxed text-stone-400">
                  Il portale italiano dei B&B. Trova disponibilità e prenota in pochi click.
                </p>
                <div className="mb-5 flex w-full flex-wrap justify-center gap-2">
                  {rooms.map((room) => (
                    <span
                      key={room.id}
                      className="rounded-full border border-stone-100 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-500"
                    >
                      {room.name.replace("Camera ", "")}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.links.bedAndBreakfast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[44px] w-full items-center justify-center rounded-full border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                >
                  Vedi su B&amp;B.it
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Direct contact ── */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">Contatto diretto</p>
            <h2 className="section-title-md mb-3">
              Preferisci parlare con noi?
            </h2>
            <p className="mx-auto max-w-lg text-stone-400">
              Siamo disponibili ogni giorno dalle 8 alle 22. Rispondiamo entro pochi minuti.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-[20px] border border-stone-100 bg-white p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card md:gap-3 md:rounded-[22px] md:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 transition-colors group-hover:bg-emerald-100 md:h-11 md:w-11">
                <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-stone-800">WhatsApp</p>
              <p className="text-[11px] text-stone-400 md:text-xs">{siteConfig.phone}</p>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="group flex flex-col items-center gap-2 rounded-[20px] border border-stone-100 bg-white p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-card md:gap-3 md:rounded-[22px] md:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-50 transition-colors group-hover:bg-stone-100 md:h-11 md:w-11">
                <span className="text-lg md:text-xl">📞</span>
              </div>
              <p className="text-sm font-semibold text-stone-800">Chiama ora</p>
              <p className="text-[11px] text-stone-400 md:text-xs">{siteConfig.phone}</p>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group col-span-2 flex flex-col items-center gap-2 rounded-[20px] border border-stone-100 bg-white p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-card md:col-span-1 md:gap-3 md:rounded-[22px] md:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-50 transition-colors group-hover:bg-stone-100 md:h-11 md:w-11">
                <span className="text-lg md:text-xl">✉️</span>
              </div>
              <p className="text-sm font-semibold text-stone-800">Email</p>
              <p className="max-w-full truncate text-[11px] text-stone-400 md:text-xs">{siteConfig.email}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
