import { Metadata } from "next";
import RoomPageTemplate from "@/components/RoomPageTemplate";
import { getRoomById, getRooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Luna Room | La Terrazza Affittacamere",
  description: "Luna Room: an intimate countryside room with a private bathroom, breakfast included and a quiet atmosphere.",
  openGraph: {
    title: "Luna Room — La Terrazza Affittacamere",
    description: "Let the night wrap around you. A quiet room with countryside atmosphere.",
    images: [{ url: "/images/camera-luna/luna-1.jpg" }],
  },
};

export default function EnglishLunaPage() {
  const room = getRoomById("luna", "en")!;
  const otherRooms = getRooms("en").filter((r) => r.id !== "luna");
  return <RoomPageTemplate room={room} otherRooms={otherRooms} />;
}
