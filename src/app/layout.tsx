import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "La Terrazza Affittacamere | B&B Cantarana, Asti — Piemonte",
    template: "%s | La Terrazza Affittacamere",
  },
  description:
    "Affittacamere a Cantarana, B&B vicino Asti e soggiorno in Piemonte tra vigne, quiete e colazione inclusa. Tre camere esclusive nel Monferrato.",
  keywords: [
    "La Terrazza Affittacamere",
    "affittacamere Cantarana",
    "B&B Cantarana",
    "Bed and Breakfast Asti",
    "B&B Asti",
    "soggiorno Piemonte",
    "affittacamere Piemonte",
    "agriturismo Asti",
    "vacanze campagna Piemonte",
    "Camera Luna Asti",
    "Camera Stella Asti",
    "Camera Sole Asti",
  ],
  metadataBase: new URL("https://laterrazzaaffittacamere.com"),
  authors: [{ name: "La Terrazza Affittacamere" }],
  creator: "La Terrazza Affittacamere",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "La Terrazza Affittacamere",
    title: "La Terrazza Affittacamere — Cantarana, Asti",
    description:
      "Affittacamere a Cantarana, B&B vicino Asti e soggiorno in Piemonte tra i vigneti del Monferrato.",
    images: [
      {
        url: "/images/logo/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Logo La Terrazza Affittacamere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Terrazza Affittacamere — Cantarana, Asti",
    description: "Affittacamere a Cantarana, B&B vicino Asti e soggiorno in Piemonte tra natura e quiete.",
    images: ["/images/logo/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
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
    logo: "https://laterrazzaaffittacamere.com/icon-512.png",
    description:
      "Affittacamere a Cantarana, B&B vicino Asti e soggiorno in Piemonte tra vigneti, natura, welcome kit e parcheggio gratuito.",
    url: "https://laterrazzaaffittacamere.com",
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
      { "@type": "LocationFeatureSpecification", name: "Welcome kit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
    ],
    sameAs: [
      "https://www.instagram.com/house_laterrazza",
      "https://www.facebook.com/share/18JmJpuNoU/",
    ],
    image: [
      "/images/logo/logo.jpg",
      "/images/seo/bb-asti-la-terrazza-struttura.jpg",
    ],
  };

  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-stone-800">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
