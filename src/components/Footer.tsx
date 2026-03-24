import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-stone-600 flex-shrink-0">
                <Image src="/images/logo/logo.jpg" alt="La Terrazza Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-white text-base leading-tight">La Terrazza</h3>
                <p className="text-[10px] text-stone-500 tracking-widest uppercase">Affittacamere</p>
              </div>
            </div>
            <p className="max-w-xs text-xs text-stone-400 leading-relaxed mb-3">
              Tre camere tra i vigneti del Piemonte. Dove il tempo rallenta e l&apos;anima respira.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-stone-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Camere */}
          <div className="grid grid-cols-2 gap-5 md:block">
            <div>
              <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-2.5">Camere</h4>
              <ul className="space-y-1.5">
              {[
                { href: "/camere/luna", label: "Camera Luna" },
                { href: "/camere/stella", label: "Camera Stella" },
                { href: "/camere/sole", label: "Camera Sole" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-stone-400 hover:text-amber-400 transition-colors">{link.label}</Link>
                </li>
              ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-2.5">Info</h4>
              <ul className="space-y-1.5">
              {[
                { href: "/", label: "Home" },
                { href: "/prenota", label: "Prenota" },
                { href: "/partner", label: "Partner" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-stone-400 hover:text-amber-400 transition-colors">{link.label}</Link>
                </li>
              ))}
              </ul>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-2.5">Contatti</h4>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 text-xs mt-0.5">📍</span>
                <span className="text-xs text-stone-400">Cantarana (Asti), Piemonte</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-xs text-stone-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">📞</span>Chiama ora
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-xs text-stone-400 hover:text-white transition-colors flex items-center gap-1.5 break-all">
                  <span className="text-amber-400">✉️</span>{siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <a href={siteConfig.links.booking} target="_blank" rel="noopener noreferrer"
                className="text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full hover:bg-blue-600 transition-colors">Booking</a>
              <a href="https://www.airbnb.it" target="_blank" rel="noopener noreferrer"
                className="text-[10px] bg-rose-700 text-white px-2 py-0.5 rounded-full hover:bg-rose-600 transition-colors">Airbnb</a>
              <a href={siteConfig.links.bedAndBreakfast} target="_blank" rel="noopener noreferrer"
                className="text-[10px] bg-green-700 text-white px-2 py-0.5 rounded-full hover:bg-green-600 transition-colors">B&amp;B.it</a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <p className="text-[11px] text-center sm:text-left text-stone-600">© {new Date().getFullYear()} La Terrazza Affittacamere. Tutti i diritti riservati.</p>
          <p className="text-[11px] text-stone-700">Palazzasso, Cantarana (AT)</p>
        </div>
      </div>
    </footer>
  );
}
