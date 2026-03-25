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

export const rooms: Room[] = [
  {
    id: "luna",
    slug: "luna",
    name: "Camera Luna",
    symbol: "🌙",
    subtitle: "Lasciati avvolgere dalla notte",
    description:
      "Toni profondi e atmosfera intima. La Luna ti attende con eleganza discreta e un riposo che senti nelle ossa.",
    longDescription:
      "La Camera Luna è un rifugio di pace pensato per chi cerca silenzio e raccoglimento. Arredata con cura, unisce il calore dei materiali naturali a tocchi di stile contemporaneo. La sera, quando la luce si fa dorata e il profumo della campagna entra dalla finestra, capisci perché questo posto è speciale. Un letto morbido come una nuvola, biancheria di qualità, e il suono lontano dei grilli come unica colonna sonora.",
    coverImage: "/images/camera-luna/luna-1.jpg",
    images: [
      "/images/camera-luna/luna-1.jpg",
      "/images/camera-luna/luna-2.jpg",
      "/images/camera-luna/luna-3.jpg",
      "/images/camera-luna/luna-4.jpg",
    ],
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
    maxGuests: 2,
    beds: "1 letto matrimoniale",
    airbnbUrl: "https://www.airbnb.it/rooms/1360802067191927878",
    price: "Tariffa variabile",
    highlight: "Silenzio assoluto",
    color: "from-indigo-900 to-slate-800",
  },
  {
    id: "stella",
    slug: "stella",
    name: "Camera Stella",
    symbol: "🌠",
    subtitle: "Splendi nella tua notte",
    description:
      "Luminosa e accogliente. La Stella ti abbraccia con la sua atmosfera calda, perfetta per una fuga romantica o un viaggio rigenerante.",
    longDescription:
      "La Camera Stella brilla di luce propria. Tonalità calde, tessuti morbidi, dettagli curati uno a uno. È la camera dei sogni per chi vuole sentirsi speciale. Aprendo la finestra al mattino, l'aria profumata di Piemonte entra come un benvenuto silenzioso. La colazione preparata con cura ti aspetta, e non avrai fretta di andare via.",
    coverImage: "/images/camera-stella/stella-3.jpg",
    images: [
      "/images/camera-stella/stella-1.jpg",
      "/images/camera-stella/stella-2.jpg",
      "/images/camera-stella/stella-3.jpg",
    ],
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
    maxGuests: 2,
    beds: "1 letto matrimoniale",
    airbnbUrl: "https://www.airbnb.it/rooms/1360851292351796993",
    price: "Tariffa variabile",
    highlight: "Vista mozzafiato",
    color: "from-emerald-800 to-stone-700",
  },
  {
    id: "sole",
    slug: "sole",
    name: "Camera Sole",
    symbol: "☀️",
    subtitle: "Inizia ogni giorno in bellezza",
    description:
      "La più luminosa. Il Sole ti sveglia dolcemente, inondando la stanza di luce naturale e di energia positiva.",
    longDescription:
      "La Camera Sole è pensata per chi ama iniziare la giornata con il sorriso. Ampie finestre, colori chiari, un'atmosfera che sa di estate e di buonumore. Qui il mattino è un evento: la luce del Piemonte, l'odore del caffè che sale, la promessa di una giornata in totale libertà. Uno spazio curato nei minimi dettagli, dove ogni elemento è stato scelto per farti sentire a casa — anzi, meglio.",
    coverImage: "/images/camera-sole/sole-1.jpg",
    images: [
      "/images/camera-sole/sole-1.jpg",
      "/images/camera-sole/sole-2.jpg",
      "/images/camera-sole/sole-3.jpg",
      "/images/camera-sole/sole-4.jpg",
      "/images/camera-sole/sole-5.jpg",
      "/images/camera-sole/sole-6.jpg",
    ],
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
    maxGuests: 2,
    beds: "1 letto matrimoniale",
    airbnbUrl: "https://www.airbnb.it/rooms/1360860375665572777",
    price: "Tariffa variabile",
    highlight: "La più luminosa",
    color: "from-emerald-700 to-teal-700",
  },
];
