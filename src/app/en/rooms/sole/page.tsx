import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { getRoomById, getRooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Sole Room | La Terrazza Affittacamere",
  description: "Sole Room: the brightest room in the property, with natural light, breakfast included and a relaxed atmosphere.",
  openGraph: {
    title: "Sole Room — La Terrazza Affittacamere",
    description: "Start every day beautifully. The brightest room at La Terrazza.",
    images: [{ url: "/images/camera-sole/sole-1.jpg" }],
  },
};

export default function EnglishSolePage() {
  const room = getRoomById("sole", "en")!;
  const otherRooms = getRooms("en").filter((r) => r.id !== "sole");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
