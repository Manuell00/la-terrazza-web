import { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "I Nostri Partner | La Terrazza Affittacamere",
  description:
    "Scopri i partner de La Terrazza Affittacamere: MaRoSa House e Appartamento San Bartolomeo. Strutture selezionate per un soggiorno autentico in Piemonte.",
};

const partners = [
  {
    id: "marosa",
    name: "MaRoSa House",
    tagline: "Il comfort di casa, il calore dell'ospitalità",
    description:
      "MaRoSa House è una struttura partner selezionata per la qualità dell'accoglienza e la cura degli spazi. Un punto di riferimento per chi cerca un soggiorno autentico e confortevole.",
    images: [
      "/images/struttura/struttura-3.jpg",
    ],
    highlight: "Partner di fiducia",
    contact: siteConfig.whatsapp,
    type: "Casa vacanze",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: "san-bartolomeo",
    name: "Appartamento San Bartolomeo",
    tagline: "Tra storia e natura, un posto tutto per te",
    description:
      "L'Appartamento San Bartolomeo offre una soluzione indipendente per chi desidera maggiore privacy e autonomia. Spazi ampi, arredi curati e la magia del paesaggio piemontese a portata di mano.",
    images: [
      "/images/partner/san-bartolomeo/sb-1.jpg",
      "/images/partner/san-bartolomeo/sb-2.jpg",
      "/images/partner/san-bartolomeo/sb-3.jpg",
      "/images/partner/san-bartolomeo/sb-4.jpg",
    ],
    highlight: "Appartamento privato",
    contact: siteConfig.whatsapp,
    type: "Appartamento",
    color: "bg-green-50 border-green-200",
  },
];

export default function PartnerPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
              La nostra rete
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-800 font-semibold leading-tight mb-6">
              I nostri partner.
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Strutture selezionate con cura, accomunate dalla stessa filosofia:
              accoglienza autentica, qualità senza compromessi e la magia del
              Piemonte a fare da sfondo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      {partners.map((partner, i) => (
        <section
          key={partner.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className={`grid md:grid-cols-2 gap-16 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Images */}
              <AnimatedSection direction={i % 2 === 0 ? "left" : "right"}>
                {partner.images.length > 1 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {partner.images.map((src, j) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden rounded-xl ${
                          j === 0 ? "col-span-2 h-56" : "h-36"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${partner.name} ${j + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={partner.images[0]}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection direction={i % 2 === 0 ? "right" : "left"}>
                <div
                  className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border mb-5 ${partner.color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {partner.type}
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 font-semibold mb-3">
                  {partner.name}
                </h2>
                <p className="text-amber-600 font-medium mb-5">
                  {partner.tagline}
                </p>
                <p className="text-stone-600 leading-relaxed text-lg mb-8">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={partner.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contatta via WhatsApp
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 hover:border-stone-500 px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                  >
                    📞 {siteConfig.phone}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Vuoi aggiungere la tua struttura?
            </h2>
            <p className="text-stone-400 mb-8 max-w-lg mx-auto">
              Siamo aperti a collaborazioni con strutture che condividono la
              nostra filosofia di ospitalità autentica.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              Scrivici su WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
