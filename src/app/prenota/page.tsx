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

const platforms = [
  {
    name: "Airbnb",
    icon: "🏠",
    description: "Prenota Camera Luna, Stella o Sole direttamente su Airbnb. Pagamento sicuro e protezione ospiti.",
    color: "bg-rose-500 hover:bg-rose-600",
    links: [
      { label: "Camera Luna", url: "https://www.airbnb.it/rooms/1360802067191927878" },
      { label: "Camera Stella", url: "https://www.airbnb.it/rooms/1360851292351796993" },
      { label: "Camera Sole", url: "https://www.airbnb.it/rooms/1360860375665572777" },
    ],
  },
  {
    name: "Booking.com",
    icon: "🏨",
    description: "Prenota su Booking.com con cancellazione flessibile. Migliaia di recensioni verificate.",
    color: "bg-blue-600 hover:bg-blue-700",
    links: [
      { label: "Prenota su Booking", url: siteConfig.links.booking },
    ],
  },
  {
    name: "Bed & Breakfast.it",
    icon: "🛏️",
    description: "Il portale italiano dei B&B. Trova disponibilità e prenota in pochi click.",
    color: "bg-green-600 hover:bg-green-700",
    links: [
      { label: "Vedi su B&B.it", url: siteConfig.links.bedAndBreakfast },
    ],
  },
];

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
              Il tuo riposo
              <br />
              inizia qui.
            </h1>
            <p className="text-stone-300 text-lg max-w-xl mx-auto">
              Scegli la camera che preferisci e prenota attraverso la
              piattaforma che ti è più comoda — o scrivici direttamente.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rooms quick select */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl text-stone-800">
              Scegli la tua camera
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={room.coverImage}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif text-white text-xl font-semibold">
                        {room.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-stone-500 text-sm mb-4">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {room.features.slice(0, 3).map((f) => (
                        <span
                          key={f.label}
                          className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full"
                        >
                          {f.icon} {f.label}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={room.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                      >
                        Airbnb
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
            <h2 className="font-serif text-3xl text-stone-800 mb-3">
              Dove prenotiamo
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Tutte le prenotazioni sono sicure e verificate. Scegli la
              piattaforma che preferisci.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-5">{p.description}</p>
                  <div className="space-y-2">
                    {p.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all hover:-translate-y-0.5 ${p.color}`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-16 bg-stone-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-3">
                  Contatto diretto
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Preferisci parlare con noi?
                </h2>
                <p className="text-stone-400 leading-relaxed mb-6">
                  Siamo sempre disponibili per rispondere alle tue domande,
                  verificare la disponibilità o aiutarti a scegliere la camera
                  giusta. Rispondiamo entro pochi minuti.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm">Risposta garantita entro 15 minuti</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm">Disponibili ogni giorno, dalle 8 alle 22</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm">Possibilità di accordi speciali per soggiorni lunghi</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white p-5 rounded-2xl transition-all hover:-translate-y-0.5 w-full"
                >
                  <svg
                    className="w-8 h-8 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <p className="text-green-200 text-sm">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 bg-stone-800 hover:bg-stone-700 text-white p-5 rounded-2xl transition-all hover:-translate-y-0.5 w-full border border-stone-700"
                >
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-semibold text-lg">Telefono</p>
                    <p className="text-stone-400 text-sm">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 bg-stone-800 hover:bg-stone-700 text-white p-5 rounded-2xl transition-all hover:-translate-y-0.5 w-full border border-stone-700"
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-stone-400 text-sm">{siteConfig.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
