export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  source: "airbnb" | "booking" | "google";
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Francesca M.",
    location: "Milano",
    rating: 5,
    text: "Un posto magico. Siamo arrivati stanchi dalla città e ce ne siamo andati completamente rigenerati. La struttura è curata nei minimi dettagli, i proprietari sono premurosi e discreti. La colazione era deliziosa. Torneremo sicuramente.",
    date: "Febbraio 2026",
    avatar: "F",
    source: "airbnb",
  },
  {
    id: "2",
    author: "Marco & Giulia",
    location: "Torino",
    rating: 5,
    text: "Weekend romantico perfetto. La Camera Luna ci ha conquistati: silenziosa, elegante, con un letto che non volevamo lasciare. La campagna intorno è uno spettacolo. Consigliatissimo per coppie in cerca di relax vero.",
    date: "Gennaio 2026",
    avatar: "M",
    source: "booking",
  },
  {
    id: "3",
    author: "Stefan K.",
    location: "Zurigo",
    rating: 5,
    text: "Exceptional place. The hosts are very kind and the breakfast was amazing. The countryside view is breathtaking. We stayed in Camera Sole and the light in the morning was simply beautiful. Will definitely come back.",
    date: "Dicembre 2025",
    avatar: "S",
    source: "airbnb",
  },
  {
    id: "4",
    author: "Valentina R.",
    location: "Genova",
    rating: 5,
    text: "Ho soggiornato per tre notti nella Camera Stella ed è stata un'esperienza indimenticabile. Il silenzio, la natura, la gentilezza dei proprietari — tutto perfetto. Non cercate altro.",
    date: "Novembre 2025",
    avatar: "V",
    source: "google",
  },
  {
    id: "5",
    author: "Luca & Sara",
    location: "Bologna",
    rating: 5,
    text: "Posto incantevole immerso nel verde del Piemonte. Pulizia impeccabile, ospitalità autentica. È il tipo di posto che ti fa capire quanto sia importante rallentare. Consiglio a tutti.",
    date: "Ottobre 2025",
    avatar: "L",
    source: "airbnb",
  },
  {
    id: "6",
    author: "Chiara & Paolo",
    location: "Firenze",
    rating: 5,
    text: "Abbiamo scelto La Terrazza per il nostro anniversario e non potevamo fare scelta migliore. Atmosfera magica, cena romantica con vista sulle colline e una colazione che ricordiamo ancora. Grazie di cuore!",
    date: "Settembre 2025",
    avatar: "C",
    source: "google",
  },
];
