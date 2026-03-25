"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      /* Small delay so it doesn't compete with page load animations */
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
    if (consent === "accepted") setAnalyticsEnabled(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setAnalyticsEnabled(true);
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <>
      {/* ── Google Analytics — loaded only after explicit consent ── */}
      {analyticsEnabled && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* ── Cookie Banner ── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            /* Bottom-left on desktop; full-width bottom bar on mobile */
            className="fixed bottom-4 left-4 right-4 z-[90] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]"
            role="dialog"
            aria-label="Cookie consent"
          >
            <div className="rounded-[22px] border border-stone-200/70 bg-white/96 p-5 shadow-[0_16px_56px_-12px_rgba(28,25,23,0.22)] backdrop-blur-xl">

              {/* Header row */}
              <div className="mb-2 flex items-center gap-2">
                <span className="text-base">🍪</span>
                <p className="text-sm font-semibold text-stone-800">Cookie &amp; Privacy</p>
              </div>

              {/* Body */}
              <p className="mb-4 text-xs leading-relaxed text-stone-500">
                Utilizziamo cookie analitici per capire come migliorare il sito.
                I tuoi dati non vengono condivisi con terze parti.
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex-1 rounded-full bg-green-600 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:-translate-y-px active:translate-y-0"
                >
                  Accetta
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className="flex-1 rounded-full border border-stone-200 bg-transparent py-2.5 text-xs font-medium text-stone-600 transition-all duration-200 hover:bg-stone-50 hover:border-stone-300"
                >
                  Rifiuta
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
