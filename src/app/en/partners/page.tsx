import { Metadata } from "next";
import PartnerPageClient from "@/components/PartnerPageClient";

export const metadata: Metadata = {
  title: "Partners | La Terrazza Affittacamere",
  description:
    "Discover La Terrazza Affittacamere partners, including MaRoSa House on the Ligurian Riviera and San Bartolomeo al Mare.",
};

export default function EnglishPartnersPage() {
  return <PartnerPageClient />;
}
