import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { getRoomById, getRooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Stella Room | La Terrazza Affittacamere",
  description: "Stella Room: a bright and welcoming room, ideal for a romantic stay among the hills of Piedmont.",
  alternates: {
    canonical: "/en/rooms/stella",
    languages: {
      it: "/camere/stella",
      en: "/en/rooms/stella",
    },
  },
  openGraph: {
    title: "Stella Room — La Terrazza Affittacamere",
    description: "Shine through your night. A warm room with open views and soft light.",
    images: [{ url: "/images/camera-stella/stella-1.jpg" }],
  },
};

export default function EnglishStellaPage() {
  const room = getRoomById("stella", "en")!;
  const otherRooms = getRooms("en").filter((r) => r.id !== "stella");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
