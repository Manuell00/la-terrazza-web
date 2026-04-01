import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Camera Stella | La Terrazza Affittacamere — Cantarana, Asti",
  description:
    "Camera Stella: luminosa e accogliente, con vista panoramica sui vigneti del Piemonte. Perfetta per una fuga romantica. Prenota ora.",
  alternates: {
    canonical: "/camere/stella",
    languages: {
      it: "/camere/stella",
      en: "/en/rooms/stella",
    },
  },
  openGraph: {
    title: "Camera Stella — La Terrazza Affittacamere",
    description:
      "Splendi nella tua notte. Camera calda e accogliente con vista panoramica.",
    images: [{ url: "/images/camera-stella/stella-1.jpg" }],
  },
};

export default function StellaPage() {
  const room = rooms.find((r) => r.id === "stella")!;
  const otherRooms = rooms.filter((r) => r.id !== "stella");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
