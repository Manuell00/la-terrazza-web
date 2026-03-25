"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PartnerGallery from "@/components/PartnerGallery";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

/* ─── GA helper ─────────────────────────────────────────────────── */
function track(category: string, label: string) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "click", {
      event_category: category,
      event_label: label,
    });
  }
}

/* ─── Icons ──────────────────────────────────────────────────────── */
const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Image assets ───────────────────────────────────────────────── */
const marosaFeatured = "/images/partner/marosa/logo.png";
const marosaGridImages = [
  "/images/partner/marosa/marosa-1.jpg",
  "/images/partner/marosa/marosa-2.jpg",
  "/images/partner/marosa/marosa-4.jpg",
];
const marosaLightboxImages = [
  "/images/partner/marosa/marosa-1.jpg",
  "/images/partner/marosa/marosa-2.jpg",
  "/images/partner/marosa/marosa-4.jpg",
  "/images/partner/marosa/marosa-5.jpg",
  "/images/partner/marosa/marosa-6.jpg",
];
const sanBartolomeoLogo = "/images/partner/san-bartolomeo/casa-mare-logo-1024.png";
const sanBartolomeoImages = [
  "/images/partner/san-bartolomeo/sb-2.jpg",
  "/images/partner/san-bartolomeo/sb-3.jpg",
  "/images/partner/san-bartolomeo/sb-4.jpg",
];

/* ─── Bilingual content ──────────────────────────────────────────── */
const content = {
  it: {
    hero: {
      label: "La nostra rete",
      title: "I nostri partner.",
      description:
        "Strutture selezionate con cura, accomunate dalla stessa filosofia: accoglienza autentica, ritmo lento e luoghi capaci di raccontare il territorio.",
    },
    trust: "Collaboriamo con strutture selezionate per offrirti il miglior soggiorno possibile.",
    trustItems: ["Strutture verificate", "Qualità garantita"],
    marosa: {
      badge: "Casa vacanze",
      title: "MaRoSa House",
      tagline: "Il comfort di casa, il calore dell'ospitalità",
      label: "Partner selezionato",
      description:
        "MaRoSa House è una casa vacanze in posizione strategica tra Rapallo, Santa Margherita Ligure e Portofino. Una soluzione curata e professionale, pensata per chi vuole vivere la Riviera Ligure con comfort, autonomia e stile.",
      descSecondary:
        "Una gestione attenta, ambienti ordinati e un'accoglienza affidabile: il tipo di soggiorno che funziona davvero, dal weekend breve alla vacanza più rilassata.",
      mobileDescription:
        "Una casa vacanze curata e professionale, in posizione strategica tra Rapallo, Santa Margherita Ligure e Portofino.",
      descriptionHighlights: [
        "casa vacanze",
        "Rapallo",
        "Santa Margherita Ligure",
        "Portofino",
        "Riviera Ligure",
        "comfort",
        "autonomia",
        "stile",
      ],
      locationLabel: "Posizione",
      locationSub: "Rapallo Riviera Ligure",
      locationHref: "https://www.google.com/maps/search/?api=1&query=Rapallo%2C%20Liguria",
      cta1: "Vai al sito",
      ctaWa: "Chiama per informazioni",
    },
    sanBartolomeo: {
      badge: "Appartamento privato",
      title: "San Bartolomeo",
      tagline: "Tra storia e natura, un posto tutto per te",
      label: "Partner selezionato",
      description:
        "San Bartolomeo al Mare entra nella nostra selezione come riferimento per chi desidera una vera casa al mare. Un appartamento indipendente, spazioso e curato, dove vivere la Liguria con la libertà e la privacy che solo una soluzione privata può offrire.",
      descSecondary:
        "Perfetto per famiglie o coppie che vogliono vivere il territorio con ritmi propri, senza rinunciare al comfort. La struttura parla da sola.",
      mobileDescription:
        "Una vera casa al mare a San Bartolomeo al Mare: indipendente, curata e pensata per vivere la Liguria con più libertà.",
      descriptionHighlights: [
        "San Bartolomeo al Mare",
        "casa al mare",
        "appartamento indipendente",
        "Liguria",
        "libertà",
        "privacy",
      ],
      locationLabel: "Posizione",
      locationSub: "San Bartolomeo al Mare",
      locationHref: "https://www.google.com/maps/search/?api=1&query=San%20Bartolomeo%20al%20Mare%2C%20Liguria",
      cta1: "Scopri l'appartamento",
      cta2: "Verifica disponibilità",
      ctaPhone: "Chiama per informazioni",
    },
    cta: {
      label: "Lavoriamo insieme",
      title: "Vuoi collaborare con noi?",
      description:
        "Siamo aperti a collaborazioni con strutture che condividono la nostra filosofia di ospitalità autentica.",
      button: "Scrivici su WhatsApp",
    },
  },
  en: {
    hero: {
      label: "Our Network",
      title: "Our Partners.",
      description:
        "A carefully selected network of accommodations united by the same philosophy: authentic hospitality, unhurried rhythms, and places that genuinely capture the spirit of their territory.",
    },
    trust: "We collaborate with selected properties to offer you the best possible stay.",
    trustItems: ["Verified properties", "Quality guaranteed"],
    marosa: {
      badge: "Holiday Home",
      title: "MaRoSa House",
      tagline: "Home comfort, the warmth of true hospitality",
      label: "Selected partner",
      description:
        "MaRoSa House is a holiday home in a strategic position between Rapallo, Santa Margherita Ligure and Portofino. A polished, professionally managed stay for guests who want comfort, independence and the atmosphere of the Ligurian Riviera.",
      descSecondary:
        "Reliable hosting, well-kept interiors and a stay that works beautifully whether you are planning a short break or a slower holiday by the coast.",
      mobileDescription:
        "A polished holiday home in a strategic position between Rapallo, Santa Margherita Ligure and Portofino.",
      descriptionHighlights: [
        "holiday home",
        "Rapallo",
        "Santa Margherita Ligure",
        "Portofino",
        "comfort",
        "independence",
        "Ligurian Riviera",
      ],
      locationLabel: "Location",
      locationSub: "Rapallo Ligurian Riviera",
      locationHref: "https://www.google.com/maps/search/?api=1&query=Rapallo%2C%20Liguria",
      cta1: "Visit website",
      ctaWa: "Call for information",
    },
    sanBartolomeo: {
      badge: "Private Apartment",
      title: "San Bartolomeo",
      tagline: "Between history and nature, a place all your own",
      label: "Selected partner",
      description:
        "San Bartolomeo al Mare joins our selection as the ideal destination for those seeking a true seaside retreat. An independent, spacious, and thoughtfully furnished apartment — offering the privacy and freedom that only a private property can deliver.",
      descSecondary:
        "Perfect for couples or families who want to experience the Ligurian coast at their own pace, without compromising on comfort. The space speaks for itself.",
      mobileDescription:
        "A true seaside home in San Bartolomeo al Mare: independent, comfortable and ideal for a more private Ligurian stay.",
      descriptionHighlights: [
        "San Bartolomeo al Mare",
        "seaside retreat",
        "independent",
        "private property",
        "privacy",
        "freedom",
      ],
      locationLabel: "Location",
      locationSub: "San Bartolomeo al Mare",
      locationHref: "https://www.google.com/maps/search/?api=1&query=San%20Bartolomeo%20al%20Mare%2C%20Liguria",
      cta1: "Explore the property",
      cta2: "Verify availability",
      ctaPhone: "Call for information",
    },
    cta: {
      label: "Work with us",
      title: "Want to collaborate?",
      description:
        "We welcome collaborations with properties that share our philosophy of authentic hospitality.",
      button: "Message us on WhatsApp",
    },
  },
} as const;

/* ─── Trust Strip ────────────────────────────────────────────────── */
function TrustStrip({ text, items }: { text: string; items: readonly string[] }) {
  return (
    <AnimatedSection className="bg-stone-50 border-y border-stone-100">
      <div className="container mx-auto max-w-4xl px-4 py-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="max-w-lg text-sm font-medium leading-relaxed text-stone-600">
            {text}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap md:justify-end">
            {items.map((item) => (
              <span
                key={item}
                className="inline-flex min-w-[10.75rem] items-center justify-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-center text-xs font-semibold text-emerald-700"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Partner Section ────────────────────────────────────────────── */
interface PartnerSectionProps {
  bg: "cream" | "white";
  separated?: boolean;
  badge: string;
  title: string;
  tagline: string;
  label: string;
  description: string;
  descSecondary: string;
  mobileDescription?: string;
  descriptionHighlights?: readonly string[];
  locationLabel: string;
  locationSub: string;
  locationHref: string;
  featuredImage: string;
  gridImages: string[];
  lightboxImages: string[];
  featuredMode?: "cover" | "contain";
  cta1Text?: string;
  cta1Href?: string;
  cta1TrackLabel?: string;
  cta2Text?: string;
  cta2Href?: string;
  cta2TrackLabel?: string;
  cta3Text?: string;
  cta3Href?: string;
}

function PartnerSection({
  bg,
  separated = false,
  badge,
  title,
  tagline,
  label,
  description,
  descSecondary,
  mobileDescription,
  descriptionHighlights = [],
  locationLabel,
  locationSub,
  locationHref,
  featuredImage,
  gridImages,
  lightboxImages,
  featuredMode = "cover",
  cta1Text,
  cta1Href,
  cta1TrackLabel,
  cta2Text,
  cta2Href,
  cta2TrackLabel,
  cta3Text,
  cta3Href,
}: PartnerSectionProps) {
  const bgClass = bg === "cream" ? "bg-cream-50" : "bg-white";
  const highlightPhrase = description.split(". ")[0];
  const remainingDescription = description.slice(highlightPhrase.length).trim().replace(/^\./, "").trim();

  function emphasizeText(text: string, highlights: readonly string[]): ReactNode {
    if (!highlights.length) return text;

    const escaped = highlights
      .filter(Boolean)
      .map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

    if (!escaped.length) return text;

    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isHighlight = highlights.some((item) => item.toLowerCase() === part.toLowerCase());
      return isHighlight ? (
        <span
          key={`${part}-${index}`}
          className="font-semibold tracking-[-0.01em] text-stone-900 decoration-emerald-200 decoration-2 underline-offset-[0.22em] md:bg-[linear-gradient(180deg,transparent_58%,rgba(16,185,129,0.14)_58%)]"
        >
          {part}
        </span>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      );
    });
  }

  return (
    <section className={`${bgClass} ${separated ? "relative border-t border-stone-200/80 pt-20 md:border-t-0 md:pt-24" : "py-16 md:py-24"} ${!separated ? "py-16 md:py-24" : "pb-16 md:pb-24"}`}>
      <div className="container mx-auto max-w-4xl px-4">
        {separated && (
          <div className="mx-auto mb-12 flex justify-center md:hidden">
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>
        )}

        {/* 1 — TITLE */}
        <AnimatedSection className="mb-10 text-center">
          <div className="inline-flex flex-col items-center">
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-stone-800 md:text-5xl">{title}</h2>
            <span className="mt-3 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.2),rgba(16,185,129,0.9),rgba(16,185,129,0.2))] shadow-[0_8px_20px_-8px_rgba(16,185,129,0.65)]" />
          </div>
          <p className="mt-2 text-base font-medium text-emerald-700">{tagline}</p>
        </AnimatedSection>

        {/* 2 — IMAGES */}
        <AnimatedSection className="mb-10">
          <PartnerGallery
            featuredImage={featuredImage}
            gridImages={gridImages}
            lightboxImages={lightboxImages}
            alt={title}
            featuredMode={featuredMode}
          />
        </AnimatedSection>

        {/* 3 — DESCRIPTION */}
        <AnimatedSection className="mb-8">
          <div className={`rounded-[30px] border border-stone-100 ${bg === "cream" ? "bg-white" : "bg-cream-50"} p-7 shadow-[0_24px_70px_-42px_rgba(28,25,23,0.22)] md:p-10`}>
            <div className="mx-auto grid max-w-3xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_9.5rem] md:gap-8">
              <div className="text-center md:text-left">
                <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-700 md:text-left">
                  {label}
                </p>
                {mobileDescription && (
                  <div className="mx-auto mb-4 max-w-xl rounded-[22px] border border-stone-100 bg-white/88 px-5 py-4 text-center shadow-[0_18px_40px_-28px_rgba(28,25,23,0.22)] md:hidden">
                    <p className="text-[1rem] font-medium leading-[1.65] tracking-[-0.012em] text-stone-700">
                      {emphasizeText(mobileDescription, descriptionHighlights)}
                    </p>
                  </div>
                )}
                <p className={`mx-auto mb-4 max-w-xl text-balance font-sans text-[1.05rem] font-medium leading-[1.62] tracking-[-0.012em] text-stone-800 md:mx-0 md:max-w-2xl md:text-[1.15rem] ${mobileDescription ? "hidden md:block" : ""}`}>
                  {emphasizeText(highlightPhrase, descriptionHighlights)}
                </p>
                {remainingDescription && (
                  <p className="mx-auto hidden max-w-2xl text-center font-sans text-[15px] leading-[1.78] text-stone-500 md:mx-0 md:block md:text-left md:text-[15.5px]">
                    {emphasizeText(remainingDescription, descriptionHighlights)}
                  </p>
                )}
                {descSecondary && (
                  <div className="mx-auto mt-5 hidden max-w-xl rounded-[22px] border border-stone-100/80 bg-white/70 px-5 py-4 backdrop-blur-sm md:mx-0 md:block">
                    <p className="text-center text-sm leading-[1.7] text-stone-500 md:text-left md:text-[14.5px]">
                      {descSecondary}
                    </p>
                  </div>
                )}
              </div>

              <div className="mx-auto flex h-full min-h-[14.25rem] w-full max-w-[12.25rem] flex-col items-center justify-center md:min-h-[15rem] md:max-w-[13rem]">
                <div className="w-full rounded-[28px] border border-stone-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f6f5f0_48%,#eef4ef_100%)] p-3.5 text-center shadow-[0_26px_70px_-38px_rgba(28,25,23,0.34)] md:rounded-[30px] md:p-4">
                  <div className="relative mx-auto flex h-[6.75rem] w-[6.75rem] items-center justify-center overflow-hidden rounded-full border border-stone-200/90 bg-[radial-gradient(circle_at_30%_30%,#fff8ef_0%,#eef8f1_42%,#d8ece0_100%)] shadow-[0_20px_44px_-24px_rgba(28,25,23,0.34)] md:h-[7.4rem] md:w-[7.4rem]">
                    <div className="absolute inset-[0.9rem] rounded-full border border-white/70" />
                    <div className="absolute inset-[1.35rem] rounded-full border border-emerald-100/70" />
                    <div className="absolute left-[24%] top-[22%] h-7 w-7 rounded-full bg-white/80 blur-sm" />
                    <div className="absolute right-[22%] bottom-[23%] h-9 w-9 rounded-full bg-emerald-100/70 blur-md" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[0.95rem] shadow-[0_10px_22px_-14px_rgba(28,25,23,0.45)] md:h-10 md:w-10 md:text-lg">
                        📍
                      </span>
                      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                        {locationLabel}
                      </span>
                      <span className="mt-1 max-w-[5.4rem] text-[10.5px] font-medium leading-tight text-stone-700 md:max-w-[5.75rem] md:text-[11px]">
                        {locationSub}
                      </span>
                    </div>
                  </div>
                  <a
                    href={locationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline mt-3.5 min-h-[2.55rem] w-full justify-center gap-1.5 px-2.5 text-[12px] md:mt-4 md:min-h-[2.85rem] md:gap-2 md:px-3 md:text-[13px]"
                  >
                    <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-stone-800 text-white md:h-6 md:w-6">
                      <svg className="h-[11px] w-[11px] md:h-3 md:w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </span>
                    {locationLabel === "Posizione" ? "Mappe" : "Maps"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 4 — BUTTONS */}
        <AnimatedSection>
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
            {cta1Text && cta1Href && cta1TrackLabel && (
              <a
                href={cta1Href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("partner_click", cta1TrackLabel)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                🌐 {cta1Text}
              </a>
            )}
            {cta2Text && cta2Href && cta2TrackLabel && (
              <a
                href={cta2Href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("partner_whatsapp", cta2TrackLabel)}
                className="btn-secondary w-full text-sm px-5 py-3 text-center"
              >
                {WA_ICON} {cta2Text}
              </a>
            )}
            {cta3Text && cta3Href && (
              <a
                href={cta3Href}
                onClick={() => track("partner_phone", title)}
                className="btn-outline w-full text-sm px-5 py-3 text-center"
              >
                📞 {cta3Text}
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function PartnerPageClient() {
  const { lang } = useLanguage();
  const c = content[lang];
  const marosaPhone = "3383232007";

  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">

          <AnimatedSection className="mb-3">
            <p className="section-label">{c.hero.label}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mb-5">
            <h1 className="font-serif text-4xl font-semibold leading-tight text-stone-800 md:text-6xl">
              {c.hero.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg">
              {c.hero.description}
            </p>
          </AnimatedSection>

          {/* Intro card */}
          <AnimatedSection
            delay={0.24}
            className="mx-auto mt-10 max-w-xl rounded-[30px] border border-stone-100 bg-gradient-to-br from-white via-cream-50 to-emerald-50/40 p-4 shadow-[0_30px_90px_-46px_rgba(28,25,23,0.32)]"
          >
            <div className="grid items-center gap-4 rounded-[24px] bg-white/72 p-3 backdrop-blur-sm md:grid-cols-[1.05fr_0.95fr] md:p-4">
              <div className="relative aspect-[1.04] overflow-hidden rounded-[22px] bg-cream-50">
                <Image
                  src="/images/partner-intro.png"
                  alt="La Terrazza partner network"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="px-2 text-center md:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700">
                  {lang === "it" ? "Collaborazioni selezionate" : "Curated collaborations"}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-stone-800">
                  {lang === "it" ? (
                    <>Strutture che condividono<span className="block text-stone-500">la stessa idea di accoglienza</span></>
                  ) : (
                    <>Properties that share<span className="block text-stone-500">the same vision of hospitality</span></>
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {lang === "it"
                    ? "Un piccolo network costruito con cura, per proporre esperienze coerenti, affidabili e immerse nel carattere del territorio."
                    : "A small, carefully built network — offering consistent, reliable experiences deeply rooted in the character of each destination."}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip text={c.trust} items={c.trustItems} />

      {/* ── MaRoSa House ── */}
      <PartnerSection
        bg="cream"
        badge={c.marosa.badge}
        title={c.marosa.title}
        tagline={c.marosa.tagline}
        label={c.marosa.label}
        description={c.marosa.description}
        descSecondary={c.marosa.descSecondary}
        mobileDescription={c.marosa.mobileDescription}
        descriptionHighlights={c.marosa.descriptionHighlights}
        locationLabel={c.marosa.locationLabel}
        locationSub={c.marosa.locationSub}
        locationHref={c.marosa.locationHref}
        featuredImage={marosaFeatured}
        gridImages={marosaGridImages}
        lightboxImages={marosaLightboxImages}
        featuredMode="contain"
        cta1Text={c.marosa.cta1}
        cta1Href="https://marosahouse.it"
        cta1TrackLabel="MaRoSa House - Website"
        cta3Text={c.marosa.ctaWa}
        cta3Href={`tel:${marosaPhone}`}
      />

      {/* ── San Bartolomeo ── */}
      <PartnerSection
        bg="white"
        separated
        badge={c.sanBartolomeo.badge}
        title={c.sanBartolomeo.title}
        tagline={c.sanBartolomeo.tagline}
        label={c.sanBartolomeo.label}
        description={c.sanBartolomeo.description}
        descSecondary={c.sanBartolomeo.descSecondary}
        mobileDescription={c.sanBartolomeo.mobileDescription}
        descriptionHighlights={c.sanBartolomeo.descriptionHighlights}
        locationLabel={c.sanBartolomeo.locationLabel}
        locationSub={c.sanBartolomeo.locationSub}
        locationHref={c.sanBartolomeo.locationHref}
        featuredImage={sanBartolomeoLogo}
        gridImages={sanBartolomeoImages}
        lightboxImages={sanBartolomeoImages}
        featuredMode="contain"
        cta2Text={c.sanBartolomeo.cta2}
        cta2Href={siteConfig.whatsapp}
        cta2TrackLabel="San Bartolomeo - WhatsApp"
        cta3Text={c.sanBartolomeo.ctaPhone}
        cta3Href={`tel:${siteConfig.phone}`}
      />

      {/* ── Collaboration CTA ── */}
      <section className="bg-stone-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-emerald-400">{c.cta.label}</p>
            <h2 className="mb-4 font-serif text-3xl text-white md:text-4xl">{c.cta.title}</h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-stone-400">
              {c.cta.description}
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("partner_cta", "Collaboration CTA")}
              className="btn-primary"
            >
              {WA_ICON} {c.cta.button}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
