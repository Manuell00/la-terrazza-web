import { Metadata } from "next";
import PartnerPageClient from "@/components/PartnerPageClient";

export const metadata: Metadata = {
  title: "I Nostri Partner | La Terrazza Affittacamere",
  description:
    "Scopri i partner de La Terrazza Affittacamere: MaRoSa House a Rapallo e Appartamento San Bartolomeo al Mare. Strutture selezionate tra Piemonte e Liguria.",
};

export default function PartnerPage() {
  return <PartnerPageClient />;
}
