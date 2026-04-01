import { Metadata } from "next";
import PartnerPageClient from "@/components/PartnerPageClient";

export const metadata: Metadata = {
  title: "I Nostri Partner | La Terrazza Affittacamere",
  description:
    "Scopri i partner de La Terrazza Affittacamere: MaRoSa House sulla Riviera Ligure e San Bartolomeo al Mare. Due strutture selezionate per soggiorni curati tra mare e territorio.",
  alternates: {
    canonical: "/partner",
    languages: {
      it: "/partner",
      en: "/en/partners",
    },
  },
};

export default function PartnerPage() {
  return <PartnerPageClient />;
}
