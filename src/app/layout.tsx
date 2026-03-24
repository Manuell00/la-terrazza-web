import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "La Terrazza Affittacamere | B&B Cantarana, Asti — Piemonte",
    template: "%s | La Terrazza Affittacamere",
  },
  description:
    "Affittacamere nel cuore della campagna astigiana. Tre camere esclusive — Luna, Stella e Sole — circondati dalla natura del Monferrato. Colazione inclusa, parcheggio gratuito.",
  keywords: [
    "La Terrazza Affittacamere",
    "B&B Cantarana",
    "Bed and Breakfast Asti",
    "affittacamere Piemonte",
    "agriturismo Asti",
    "vacanze campagna Piemonte",
    "Camera Luna Asti",
    "Camera Stella Asti",
    "Camera Sole Asti",
  ],
  metadataBase: new URL("https://www.laterrazza-affittacamere.it"),
  authors: [{ name: "La Terrazza Affittacamere" }],
  creator: "La Terrazza Affittacamere",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "La Terrazza Affittacamere",
    title: "La Terrazza Affittacamere — Cantarana, Asti",
    description:
      "Tre camere esclusive tra i vigneti del Piemonte. Natura, relax e ospitalità autentica a Cantarana (Asti).",
    images: [
      {
        url: "/images/struttura/struttura-1.jpg",
        width: 1200,
        height: 630,
        alt: "La Terrazza Affittacamere - Cantarana, Asti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Terrazza Affittacamere — Cantarana, Asti",
    description: "Tre camere esclusive tra i vigneti del Piemonte.",
    images: ["/images/struttura/struttura-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo/logo.jpg",
    apple: "/images/logo/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    name: "La Terrazza Affittacamere",
    description:
      "Affittacamere immerso nella campagna di Cantarana (Asti), Piemonte. Tre camere esclusive con colazione inclusa.",
    url: "https://www.laterrazza-affittacamere.it",
    telephone: "+39 351 378 0768",
    email: "houselaterrazza@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palazzasso",
      addressLocality: "Cantarana",
      addressRegion: "Asti",
      postalCode: "14010",
      addressCountry: "IT",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
    priceRange: "€€",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Colazione inclusa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
    ],
    image: [
      "/images/struttura/struttura-1.jpg",
      "/images/struttura/struttura-2.jpg",
    ],
  };

  return (
    <html lang="it" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-stone-800">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
