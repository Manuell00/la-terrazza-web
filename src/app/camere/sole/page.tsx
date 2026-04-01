import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Camera Sole | La Terrazza Affittacamere — Cantarana, Asti",
  description:
    "Camera Sole: la più luminosa. Ampie finestre, colori chiari e un risveglio indimenticabile tra le colline del Piemonte. Prenota su Airbnb.",
  alternates: {
    canonical: "/camere/sole",
    languages: {
      it: "/camere/sole",
      en: "/en/rooms/sole",
    },
  },
  openGraph: {
    title: "Camera Sole — La Terrazza Affittacamere",
    description:
      "Inizia ogni giorno in bellezza. La camera più luminosa della struttura.",
    images: [{ url: "/images/camera-sole/sole-1.jpg" }],
  },
};

export default function SolePage() {
  const room = rooms.find((r) => r.id === "sole")!;
  const otherRooms = rooms.filter((r) => r.id !== "sole");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
