import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PartnerGallery from "@/components/PartnerGallery";
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

const marosaImages = [
  "/images/partner/marosa/logo.png",
  "/images/partner/marosa/marosa-1.jpg",
  "/images/partner/marosa/marosa-2.jpg",
  "/images/partner/marosa/marosa-4.jpg",
  "/images/partner/marosa/marosa-5.jpg",
  "/images/partner/marosa/marosa-6.jpg",
];

const sanBartolomeoImages = [
  "/images/partner/san-bartolomeo/casa-mare-logo.jpg",
  "/images/partner/san-bartolomeo/sb-2.jpg",
  "/images/partner/san-bartolomeo/sb-3.jpg",
  "/images/partner/san-bartolomeo/sb-4.jpg",
];

export default function PartnerPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="section-label">La nostra rete</p>
            <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-stone-800 md:text-6xl">
              I nostri partner.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg">
              Strutture selezionate con cura, accomunate dalla stessa filosofia:
              accoglienza autentica e la magia del Piemonte come cornice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MaRoSa House ── */}
      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimatedSection className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Casa vacanze
            </div>
            <h2 className="font-serif text-3xl font-semibold text-stone-800 md:text-4xl">
              MaRoSa House
            </h2>
            <p className="mt-1 font-medium text-emerald-700">Il comfort di casa, il calore dell&apos;ospitalità</p>
          </AnimatedSection>

          <div className="grid items-start gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
            {/* Image grid */}
            <AnimatedSection direction="right" className="md:order-2">
              <PartnerGallery
                featuredImage={marosaImages[0]}
                gridImages={marosaImages.slice(1, 4)}
                lightboxImages={marosaImages.slice(1)}
                alt="MaRoSa House"
                featuredMode="contain"
              />
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="left" className="md:order-1 text-center md:text-left">
              <div className="rounded-[26px] border border-stone-100 bg-white p-7 shadow-card md:p-8">
                <p className="mb-4 leading-relaxed text-stone-600">
                  MaRoSa House è una struttura partner selezionata per la qualità dell&apos;accoglienza
                  e la cura degli spazi. Un punto di riferimento per chi cerca un soggiorno autentico
                  e confortevole nel cuore del Piemonte.
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Eleganza discreta, atmosfera familiare e quella cura per i dettagli che si vede
                  e si sente. Un posto pensato per farti stare bene, dal primo all&apos;ultimo minuto.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-6 py-3"
                >
                  {WA_ICON} Contatta via WhatsApp
                </a>
                <a
                  href="https://marosahouse.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-6 py-3"
                >
                  🌐 marosahouse.it
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── San Bartolomeo ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
            {/* Image gallery */}
            <AnimatedSection direction="right" className="text-center md:order-2">
              <PartnerGallery
                featuredImage={sanBartolomeoImages[0]}
                gridImages={sanBartolomeoImages.slice(1)}
                lightboxImages={sanBartolomeoImages.slice(1)}
                alt="Appartamento San Bartolomeo"
                featuredMode="contain"
              />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="left" className="text-center md:order-1 md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Appartamento privato
              </div>
              <h2 className="mb-2 font-serif text-3xl font-semibold text-stone-800 md:text-4xl">
                Appartamento San Bartolomeo
              </h2>
              <p className="mb-6 font-medium text-emerald-700">Tra storia e natura, un posto tutto per te</p>
              <div className="rounded-[26px] border border-stone-100 bg-cream-50 p-7 shadow-soft md:p-8 mb-7">
                <p className="mb-4 leading-relaxed text-stone-600">
                  L&apos;Appartamento San Bartolomeo offre una soluzione indipendente per chi desidera
                  maggiore privacy e autonomia. Spazi ampi, arredi curati e la magia del paesaggio
                  piemontese a portata di mano.
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Perfetto per famiglie o coppie che vogliono vivere il territorio con ritmi propri,
                  senza rinunciare al comfort. La struttura parla da sola.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-6 py-3"
                >
                  {WA_ICON} Contatta via WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-outline text-sm px-6 py-3"
                >
                  📞 Chiama ora
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-stone-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-emerald-400">Lavoriamo insieme</p>
            <h2 className="mb-4 font-serif text-3xl text-white md:text-4xl">
              Vuoi collaborare con noi?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-stone-400">
              Siamo aperti a collaborazioni con strutture che condividono la nostra filosofia di ospitalità autentica.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {WA_ICON} Scrivici su WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
