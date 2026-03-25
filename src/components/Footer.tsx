import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-10 md:py-14">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* ── Brand ── */}
          <div className="flex flex-col items-center rounded-[22px] border border-white/6 bg-white/[0.04] px-5 py-6 text-center">
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-stone-700">
                <Image src="/images/logo/logo.jpg" alt="La Terrazza" fill className="object-cover" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-base font-semibold text-white">La Terrazza</span>
                <span className="block text-[9px] font-medium uppercase tracking-[0.3em] text-stone-500">Affittacamere</span>
              </div>
            </div>
            <p className="mx-auto mb-4 max-w-[18rem] text-xs leading-relaxed text-stone-500">
              Tre camere tra i vigneti del Piemonte. Dove il tempo rallenta e l&apos;anima respira.
            </p>
            <div className="flex gap-2.5">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-all duration-200 hover:bg-emerald-600 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-all duration-200 hover:bg-emerald-600 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Links ── */}
          <div className="rounded-[22px] border border-white/6 bg-white/[0.03] px-5 py-6">
            <div className="grid grid-cols-2 text-center gap-4">
              <div>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">Camere</h4>
                <ul className="space-y-2">
                  {[
                    { href: "/camere/luna", label: "Camera Luna" },
                    { href: "/camere/stella", label: "Camera Stella" },
                    { href: "/camere/sole", label: "Camera Sole" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-stone-500 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative pl-4">
                <div className="absolute bottom-2 left-0 top-2 w-px bg-[linear-gradient(180deg,transparent,rgba(52,211,153,0.35),transparent)]" />
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">Info</h4>
                <ul className="space-y-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/prenota", label: "Prenota" },
                    { href: "/partner", label: "Partner" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-stone-500 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Contatti ── */}
          <div className="rounded-[22px] border border-white/6 bg-white/[0.03] px-5 py-6 text-center">
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">Contatti</h4>
            <ul className="mb-4 space-y-2.5">
              <li className="flex items-center justify-center gap-2">
                <span className="text-emerald-500 text-xs">📍</span>
                <span className="text-xs text-stone-500">Cantarana (Asti), Piemonte</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 transition-colors hover:text-white"
                >
                  <span className="text-emerald-500">📞</span>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 break-all text-xs text-stone-500 transition-colors hover:text-white"
                >
                  <span className="text-emerald-500">✉️</span>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap justify-center gap-1.5">
              {[
                { href: siteConfig.links.booking, label: "Booking" },
                { href: "https://www.airbnb.it", label: "Airbnb" },
                { href: siteConfig.links.bedAndBreakfast, label: "B&B.it" },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/8 bg-stone-800 px-3 py-1 text-[10px] text-stone-500 transition-colors hover:bg-stone-700 hover:text-stone-300"
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-1.5 border-t border-stone-800/60 pt-4 sm:flex-row">
          <p className="text-center text-[11px] text-stone-700 sm:text-left">
            © {new Date().getFullYear()} La Terrazza Affittacamere. Tutti i diritti riservati.
          </p>
          <p className="text-[11px] text-stone-700">Palazzasso, Cantarana (AT)</p>
        </div>
      </div>
    </footer>
  );
}
