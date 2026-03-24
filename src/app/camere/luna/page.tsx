import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Camera Luna | La Terrazza Affittacamere — Cantarana, Asti",
  description:
    "Camera Luna: un rifugio di pace con letto matrimoniale, bagno privato e vista sulla campagna piemontese. Prenota su Airbnb o Booking.com.",
  openGraph: {
    title: "Camera Luna — La Terrazza Affittacamere",
    description:
      "Lasciati avvolgere dalla notte. Camera elegante con vista campagna.",
    images: [{ url: "/images/camera-luna/luna-1.jpg" }],
  },
};

export default function LunaPage() {
  const room = rooms.find((r) => r.id === "luna")!;
  const otherRooms = rooms.filter((r) => r.id !== "luna");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
