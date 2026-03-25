import { Lang } from "@/lib/i18n";

export interface Room {
  id: string;
  slug: string;
  name: string;
  symbol: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  features: { icon: string; label: string }[];
  amenities: string[];
  maxGuests: number;
  beds: string;
  airbnbUrl: string;
  price: string;
  highlight: string;
  color: string;
}

type RoomKey = "luna" | "stella" | "sole";

type RoomStatic = Omit<Room, "name" | "subtitle" | "description" | "longDescription" | "features" | "amenities" | "price" | "highlight" | "beds">;

const roomStatic: Record<RoomKey, RoomStatic> = {
  luna: {
    id: "luna",
    slug: "luna",
    symbol: "🌙",
    coverImage: "/images/camera-luna/luna-1.jpg",
    images: [
      "/images/camera-luna/luna-1.jpg",
      "/images/camera-luna/luna-2.jpg",
      "/images/camera-luna/luna-3.jpg",
      "/images/camera-luna/luna-4.jpg",
    ],
    maxGuests: 2,
    airbnbUrl: "https://www.airbnb.it/rooms/1360802067191927878",
    color: "from-indigo-900 to-slate-800",
  },
  stella: {
    id: "stella",
    slug: "stella",
    symbol: "🌠",
    coverImage: "/images/camera-stella/stella-3.jpg",
    images: [
      "/images/camera-stella/stella-1.jpg",
      "/images/camera-stella/stella-2.jpg",
      "/images/camera-stella/stella-3.jpg",
    ],
    maxGuests: 2,
    airbnbUrl: "https://www.airbnb.it/rooms/1360851292351796993",
    color: "from-emerald-800 to-stone-700",
  },
  sole: {
    id: "sole",
    slug: "sole",
    symbol: "☀️",
    coverImage: "/images/camera-sole/sole-1.jpg",
    images: [
      "/images/camera-sole/sole-1.jpg",
      "/images/camera-sole/sole-2.jpg",
      "/images/camera-sole/sole-3.jpg",
      "/images/camera-sole/sole-4.jpg",
      "/images/camera-sole/sole-5.jpg",
      "/images/camera-sole/sole-6.jpg",
    ],
    maxGuests: 2,
    airbnbUrl: "https://www.airbnb.it/rooms/1360860375665572777",
    color: "from-emerald-700 to-teal-700",
  },
};

const translatedRooms = {
  it: {
    luna: {
      name: "Camera Luna",
      subtitle: "Lasciati avvolgere dalla notte",
      description: "Toni profondi e atmosfera intima. La Luna ti attende con eleganza discreta e un riposo che senti nelle ossa.",
      longDescription: "La Camera Luna è un rifugio di pace pensato per chi cerca silenzio e raccoglimento. Arredata con cura, unisce il calore dei materiali naturali a tocchi di stile contemporaneo. La sera, quando la luce si fa dorata e il profumo della campagna entra dalla finestra, capisci perché questo posto è speciale.",
      features: [
        { icon: "🛏️", label: "Letto matrimoniale" },
        { icon: "🚿", label: "Bagno privato" },
        { icon: "❄️", label: "Aria condizionata" },
        { icon: "📶", label: "Wi-Fi gratuito" },
        { icon: "🪟", label: "Vista campagna" },
        { icon: "☕", label: "Colazione inclusa" },
      ],
      amenities: [
        "Lenzuola di qualità",
        "Asciugamani inclusi",
        "TV smart",
        "Pulizie giornaliere",
        "Parcheggio gratuito",
        "Stazione di ricarica per auto elettriche",
      ],
      beds: "1 letto matrimoniale",
      price: "€55 / notte · 2 ospiti",
      highlight: "Silenzio assoluto",
    },
    stella: {
      name: "Camera Stella",
      subtitle: "Splendi nella tua notte",
      description: "Luminosa e accogliente. La Stella ti abbraccia con la sua atmosfera calda, perfetta per una fuga romantica o un viaggio rigenerante.",
      longDescription: "La Camera Stella brilla di luce propria. Tonalità calde, tessuti morbidi, dettagli curati uno a uno. È la camera dei sogni per chi vuole sentirsi speciale. Aprendo la finestra al mattino, l'aria profumata di Piemonte entra come un benvenuto silenzioso.",
      features: [
        { icon: "🛏️", label: "Letto matrimoniale" },
        { icon: "🚿", label: "Bagno privato" },
        { icon: "❄️", label: "Aria condizionata" },
        { icon: "📶", label: "Wi-Fi gratuito" },
        { icon: "🌅", label: "Vista panoramica" },
        { icon: "☕", label: "Colazione inclusa" },
      ],
      amenities: [
        "Lenzuola di qualità",
        "Asciugamani inclusi",
        "TV smart",
        "Pulizie giornaliere",
        "Parcheggio gratuito",
        "Stazione di ricarica per auto elettriche",
      ],
      beds: "1 letto matrimoniale",
      price: "€55 / notte · 2 ospiti",
      highlight: "Vista mozzafiato",
    },
    sole: {
      name: "Camera Sole",
      subtitle: "Inizia ogni giorno in bellezza",
      description: "La più luminosa. Il Sole ti sveglia dolcemente, inondando la stanza di luce naturale e di energia positiva.",
      longDescription: "La Camera Sole è pensata per chi ama iniziare la giornata con il sorriso. Ampie finestre, colori chiari, un'atmosfera che sa di estate e di buonumore. Qui il mattino è un evento: la luce del Piemonte, l'odore del caffè che sale, la promessa di una giornata in totale libertà.",
      features: [
        { icon: "🛏️", label: "Letto matrimoniale" },
        { icon: "🚿", label: "Bagno privato" },
        { icon: "❄️", label: "Aria condizionata" },
        { icon: "📶", label: "Wi-Fi gratuito" },
        { icon: "☀️", label: "Luce naturale" },
        { icon: "☕", label: "Colazione inclusa" },
      ],
      amenities: [
        "Lenzuola di qualità",
        "Asciugamani inclusi",
        "TV smart",
        "Pulizie giornaliere",
        "Parcheggio gratuito",
        "Stazione di ricarica per auto elettriche",
      ],
      beds: "1 letto matrimoniale",
      price: "€55 / notte · 2 ospiti",
      highlight: "La più luminosa",
    },
  },
  en: {
    luna: {
      name: "Luna Room",
      subtitle: "Let the night wrap around you",
      description: "Deep tones and an intimate atmosphere. Luna welcomes you with discreet elegance and the kind of rest you feel in your bones.",
      longDescription: "Luna Room is a quiet retreat designed for guests looking for silence and calm. Carefully furnished, it blends natural materials with contemporary touches. In the evening, when the countryside light softens, the whole room feels slower and more intimate.",
      features: [
        { icon: "🛏️", label: "Double bed" },
        { icon: "🚿", label: "Private bathroom" },
        { icon: "❄️", label: "Air conditioning" },
        { icon: "📶", label: "Free Wi-Fi" },
        { icon: "🪟", label: "Countryside view" },
        { icon: "☕", label: "Breakfast included" },
      ],
      amenities: [
        "Quality bed linen",
        "Towels included",
        "Smart TV",
        "Daily housekeeping",
        "Free parking",
        "Electric car charging station",
      ],
      beds: "1 double bed",
      price: "€55 / night · 2 guests",
      highlight: "Pure quiet",
    },
    stella: {
      name: "Stella Room",
      subtitle: "Shine through your night",
      description: "Bright and welcoming. Stella feels warm and inviting, ideal for a romantic escape or a restorative stay.",
      longDescription: "Stella Room shines with its own character. Warm tones, soft fabrics and carefully selected details create a refined, welcoming atmosphere. Open the window in the morning and the Piedmont air arrives gently, setting the tone for a slower day.",
      features: [
        { icon: "🛏️", label: "Double bed" },
        { icon: "🚿", label: "Private bathroom" },
        { icon: "❄️", label: "Air conditioning" },
        { icon: "📶", label: "Free Wi-Fi" },
        { icon: "🌅", label: "Panoramic view" },
        { icon: "☕", label: "Breakfast included" },
      ],
      amenities: [
        "Quality bed linen",
        "Towels included",
        "Smart TV",
        "Daily housekeeping",
        "Free parking",
        "Electric car charging station",
      ],
      beds: "1 double bed",
      price: "€55 / night · 2 guests",
      highlight: "Open views",
    },
    sole: {
      name: "Sole Room",
      subtitle: "Start every day beautifully",
      description: "The brightest room. Sole wakes you gently, filling the space with natural light and positive energy.",
      longDescription: "Sole Room is made for guests who love mornings. Large windows, light tones and a relaxed atmosphere make the room feel airy and uplifting. It is the kind of space where breakfast, sunlight and quiet all arrive at the right pace.",
      features: [
        { icon: "🛏️", label: "Double bed" },
        { icon: "🚿", label: "Private bathroom" },
        { icon: "❄️", label: "Air conditioning" },
        { icon: "📶", label: "Free Wi-Fi" },
        { icon: "☀️", label: "Natural light" },
        { icon: "☕", label: "Breakfast included" },
      ],
      amenities: [
        "Quality bed linen",
        "Towels included",
        "Smart TV",
        "Daily housekeeping",
        "Free parking",
        "Electric car charging station",
      ],
      beds: "1 double bed",
      price: "€55 / night · 2 guests",
      highlight: "The brightest room",
    },
  },
} as const;

export function getRooms(lang: Lang = "it"): Room[] {
  const localizedContent = translatedRooms[lang] as typeof translatedRooms.it;
  const roomKeys: RoomKey[] = ["luna", "stella", "sole"];
  return roomKeys.map((key) => ({
    ...roomStatic[key],
    ...localizedContent[key],
    features: localizedContent[key].features.map((feature) => ({ ...feature })),
    amenities: [...localizedContent[key].amenities],
  }));
}

export function getRoomById(id: string, lang: Lang = "it"): Room | undefined {
  return getRooms(lang).find((room) => room.id === id);
}

export const rooms = getRooms("it");
