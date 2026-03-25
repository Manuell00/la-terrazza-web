import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getRooms } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Book | La Terrazza Affittacamere",
  description: "Book your stay at La Terrazza Affittacamere. Available via Airbnb, Booking.com and direct WhatsApp contact.",
};

const rooms = getRooms("en");

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function waLink(roomName: string) {
  const text = encodeURIComponent(`Hello! I would like more information about ${roomName}. Is it available? Thank you!`);
  return `${siteConfig.whatsapp}?text=${text}`;
}

export default function EnglishBookPage() {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0">
          <Image src="/images/struttura/struttura-3.jpg" alt="Book La Terrazza" fill className="object-cover opacity-32" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/68 to-stone-950/82" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">Book your stay</p>
            <h1 className="mb-5 font-serif text-[2.4rem] font-semibold leading-tight text-white sm:text-5xl md:text-6xl text-balance">
              Your escape starts here.
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-stone-300/90 md:text-lg">
              Choose the room you prefer and book directly, or message us on WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">Choose your room</p>
            <h2 className="font-serif text-3xl text-stone-800">Which one feels right for you?</h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image src={room.coverImage} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 text-center">
                      <h3 className="font-serif text-xl font-semibold text-white">{room.name}</h3>
                      <p className="text-sm font-light text-stone-200/80">{room.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 text-center">
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-500">{room.description}</p>
                    <div className="mb-4 border-t border-stone-100 pt-4 text-center">
                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">Indicative rate</p>
                      <p className="font-serif text-2xl font-semibold text-stone-800">{room.price}</p>
                      <p className="mt-2 text-xs leading-relaxed text-stone-400">Indicative price. It may vary depending on dates and season.</p>
                    </div>
                    <div className="flex gap-2.5">
                      <a href={waLink(room.name)} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-green-600 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500">
                        {WA_ICON} WhatsApp
                      </a>
                      <Link href={`/en/rooms/${room.slug}`} className="flex flex-1 items-center justify-center rounded-full border border-stone-200 bg-white py-2.5 text-sm font-medium text-stone-700 transition-all duration-200 hover:border-stone-300 hover:bg-stone-50">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">All platforms</p>
            <h2 className="mb-3 font-serif text-3xl text-stone-800">Book also on</h2>
            <p className="mx-auto max-w-lg text-stone-400">Choose the platform you prefer for your reservation.</p>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { title: "Airbnb", desc: "Book Luna, Stella or Sole on Airbnb with secure payment.", href: rooms[0].airbnbUrl, image: "/images/brands/airbnb-belo.svg", button: "View on Airbnb" },
              { title: "Booking.com", desc: "Book through Booking.com with dynamic availability and verified reviews.", href: siteConfig.links.booking, image: "/images/brands/booking-icon.png", button: "View on Booking" },
              { title: "Bed-and-Breakfast.it", desc: "Find the property on the Italian B&B portal and check the latest availability.", href: siteConfig.links.bedAndBreakfast, image: "/images/brands/bnb-logo.svg", button: "View on B&B.it" },
            ].map((platform, index) => (
              <AnimatedSection key={platform.title} delay={index * 0.1}>
                <div className="flex h-full flex-col items-center rounded-[26px] border border-stone-100 bg-white p-7 text-center shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-stone-50 shadow-soft">
                    <Image src={platform.image} alt={platform.title} width={28} height={28} className="h-[28px] w-auto rounded-md" />
                  </div>
                  <h3 className="mb-3 font-serif text-[1.6rem] font-semibold tracking-tight text-stone-800">{platform.title}</h3>
                  <p className="mb-6 max-w-xs text-sm leading-relaxed text-stone-400">{platform.desc}</p>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer" className="mt-auto flex min-h-[44px] w-full items-center justify-center rounded-full border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                    {platform.button}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
