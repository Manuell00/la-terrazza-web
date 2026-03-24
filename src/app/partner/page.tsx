import { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "I Nostri Partner | La Terrazza Affittacamere",
  description:
    "Scopri i partner de La Terrazza Affittacamere: MaRoSa House e Appartamento San Bartolomeo. Strutture selezionate per un soggiorno autentico in Piemonte.",
};

const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PartnerPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4">La nostra rete</p>
            <h1 className="font-serif text-4xl md:text-6xl text-stone-800 font-semibold leading-tight mb-5">
              I nostri partner.
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Strutture selezionate con cura, accomunate dalla stessa filosofia:
              accoglienza autentica e la magia del Piemonte come cornice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MaRoSa House */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Immagine / logo placeholder */}
            <AnimatedSection direction="left">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                {/* Logo MaRoSa placeholder — sostituire con <Image> quando disponibile */}
                <div className="text-center px-8">
                  <div className="text-6xl mb-4">🏡</div>
                  <p className="font-serif text-3xl text-amber-800 font-semibold tracking-wide">MaRoSa</p>
                  <p className="text-amber-600 text-sm tracking-widest uppercase mt-1">House</p>
                  <p className="text-stone-400 text-xs mt-4">
                    Visita{" "}
                    <a href="https://marosahouse.it" target="_blank" rel="noopener noreferrer"
                      className="text-amber-600 underline hover:text-amber-800">marosahouse.it</a>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-amber-50 border-amber-200 text-amber-700 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Casa vacanze
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-800 font-semibold mb-2">
                MaRoSa House
              </h2>
              <p className="text-amber-600 font-medium mb-5">
                Il comfort di casa, il calore dell&apos;ospitalità
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                MaRoSa House è una struttura partner selezionata per la qualità dell&apos;accoglienza
                e la cura degli spazi. Un punto di riferimento per chi cerca un soggiorno autentico
                e confortevole nel cuore del Piemonte.
              </p>
              <p className="text-stone-500 leading-relaxed text-sm mb-8">
                Eleganza discreta, atmosfera familiare e quella cura per i dettagli che si vede —
                e si sente. Un posto pensato per farti stare bene, dal primo all&apos;ultimo minuto.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5">
                  {WA_ICON} Contatta via WhatsApp
                </a>
                <a href="https://marosahouse.it" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 hover:border-amber-400 hover:text-amber-700 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
                  🌐 marosahouse.it
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* San Bartolomeo */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content — invertito su desktop */}
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-blue-50 border-blue-200 text-blue-700 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Appartamento privato
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-800 font-semibold mb-2">
                Appartamento San Bartolomeo
              </h2>
              <p className="text-amber-600 font-medium mb-5">
                Tra storia e natura, un posto tutto per te
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                L&apos;Appartamento San Bartolomeo offre una soluzione indipendente per chi desidera
                maggiore privacy e autonomia. Spazi ampi, arredi curati e la magia del paesaggio
                piemontese a portata di mano.
              </p>
              <p className="text-stone-500 leading-relaxed text-sm mb-8">
                Perfetto per famiglie o coppie che vogliono vivere il territorio con ritmi propri,
                senza rinunciare al comfort. La struttura parla da sola.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5">
                  {WA_ICON} Contatta via WhatsApp
                </a>
                <a href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 hover:border-stone-500 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
                  📞 {siteConfig.phone}
                </a>
              </div>
            </AnimatedSection>

            {/* Logo / immagine Casa Mare */}
            <AnimatedSection direction="right" className="order-1 md:order-2">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                {/* Logo "Casa Mare" per San Bartolomeo */}
                <div className="text-center px-8">
                  <div className="text-6xl mb-4">🌊</div>
                  <p className="font-serif text-3xl text-blue-800 font-semibold tracking-wide">Casa</p>
                  <p className="font-serif text-3xl text-blue-600 font-semibold tracking-wide">Mare</p>
                  <p className="text-stone-400 text-sm mt-3 leading-relaxed max-w-48 mx-auto">
                    Appartamento San Bartolomeo
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Vuoi collaborare con noi?
            </h2>
            <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm">
              Siamo aperti a collaborazioni con strutture che condividono la
              nostra filosofia di ospitalità autentica.
            </p>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
              {WA_ICON} Scrivici su WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
