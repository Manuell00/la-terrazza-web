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
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/images/struttura/struttura-1.jpg"
            alt="Prenota La Terrazza"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-4">
              Prenota il tuo soggiorno
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-semibold leading-tight mb-6">
              Il tuo relax inizia qui.
            </h1>
            <p className="text-stone-300 text-lg max-w-xl mx-auto">
              Scegli la camera che preferisci e prenota direttamente — o scrivici su WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rooms quick select */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl text-stone-800">Scegli la tua camera</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={room.coverImage}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif text-white text-xl font-semibold">{room.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-stone-500 text-sm mb-4 flex-1">{room.description}</p>
                    <div className="mb-5 border-t border-stone-100 pt-4">
                      <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-stone-400 mb-1">
                        Tariffa indicativa
                      </p>
                      <p className="font-serif text-2xl text-stone-800">{room.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={waLink(room.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                      >
                        {WA_ICON} WhatsApp
                      </a>
                      <Link
                        href={`/camere/${room.slug}`}
                        className="flex-1 text-center bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
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

      {/* Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl text-stone-800 mb-3">Prenota anche su</h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Tutte le prenotazioni sono sicure e verificate. Scegli la piattaforma che preferisci.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Airbnb */}
            <AnimatedSection delay={0}>
              <div className="flex h-full flex-col items-center rounded-[28px] border border-stone-200 bg-stone-50 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:bg-rose-50/60 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-sm">🏠</div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Airbnb</h3>
                <p className="max-w-xs text-stone-500 text-sm leading-relaxed mb-6">
                  Prenota Camera Luna, Stella o Sole direttamente su Airbnb. Pagamento sicuro e protezione ospiti.
                </p>
                <div className="mt-auto w-full space-y-2.5">
                  {rooms.map((room) => (
                    <a
                      key={room.id}
                      href={room.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-rose-200 px-4 py-3 text-center text-sm font-semibold text-rose-600 transition-all hover:border-rose-400 hover:bg-rose-500 hover:text-white"
                    >
                      {room.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Booking */}
            <AnimatedSection delay={0.1}>
              <div className="flex h-full flex-col items-center rounded-[28px] border border-stone-200 bg-stone-50 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/60 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-sm">🏨</div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Booking.com</h3>
                <p className="max-w-xs text-stone-500 text-sm leading-relaxed mb-6">
                  Prenota su Booking.com con cancellazione flessibile. Migliaia di recensioni verificate.
                </p>
                <div className="mb-6 flex w-full flex-wrap justify-center gap-2">
                  {rooms.map((room) => (
                    <span
                      key={room.id}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {room.name.replace("Camera ", "")}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-blue-200 px-4 py-3 text-center text-sm font-semibold text-blue-600 transition-all hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  Prenota su Booking
                </a>
              </div>
            </AnimatedSection>

            {/* B&B.it */}
            <AnimatedSection delay={0.2}>
              <div className="flex h-full flex-col items-center rounded-[28px] border border-stone-200 bg-stone-50 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50/70 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-sm">🛏️</div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Bed-and-Breakfast.it</h3>
                <p className="max-w-xs text-stone-500 text-sm leading-relaxed mb-6">
                  Il portale italiano dei B&B. Trova disponibilità e prenota in pochi click.
                </p>
                <div className="mb-6 flex w-full flex-wrap justify-center gap-2">
                  {rooms.map((room) => (
                    <span
                      key={room.id}
                      className="rounded-full border border-green-100 bg-white px-3 py-1 text-xs font-medium text-green-700"
                    >
                      {room.name.replace("Camera ", "")}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.links.bedAndBreakfast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-green-200 px-4 py-3 text-center text-sm font-semibold text-green-700 transition-all hover:border-green-500 hover:bg-green-600 hover:text-white"
                >
                  Vedi su B&B.it
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-16 mb-0 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Contatto diretto</p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-3">Preferisci parlare con noi?</h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Siamo disponibili ogni giorno dalle 8 alle 22. Rispondiamo entro pochi minuti.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-stone-200 bg-white hover:border-green-300 hover:bg-green-50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="font-semibold text-stone-800 text-sm">WhatsApp</p>
              <p className="text-stone-500 text-xs">{siteConfig.phone}</p>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-stone-200 flex items-center justify-center transition-colors">
                <span className="text-lg">📞</span>
              </div>
              <p className="font-semibold text-stone-800 text-sm">Chiamaci</p>
              <p className="text-stone-500 text-xs">{siteConfig.phone}</p>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-stone-200 bg-white hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                <span className="text-lg">✉️</span>
              </div>
              <p className="font-semibold text-stone-800 text-sm">Email</p>
              <p className="text-stone-500 text-xs truncate max-w-full">{siteConfig.email}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
