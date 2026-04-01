import { Metadata } from "next";
import PartnerPageClient from "@/components/PartnerPageClient";

export const metadata: Metadata = {
  title: "Partners | La Terrazza Affittacamere",
  description:
    "Discover La Terrazza Affittacamere partner stays: MaRoSa House on the Ligurian Riviera and San Bartolomeo al Mare, selected for refined coastal escapes.",
  alternates: {
    canonical: "/en/partners",
    languages: {
      it: "/partner",
      en: "/en/partners",
    },
  },
};

export default function EnglishPartnersPage() {
  return <PartnerPageClient />;
}
