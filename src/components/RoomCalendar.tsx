"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  roomName: string;
  roomSlug: string;
}

type DateStr = string; // "YYYY-MM-DD"

function toDateStr(d: Date): DateStr {
  return d.toISOString().split("T")[0];
}
function fromDateStr(s: DateStr): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function addDays(d: Date, n: number): Date {
  const r = new Date(d); r.setDate(r.getDate() + n); return r;
}
function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
function diffDays(a: Date, b: Date) {
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

const MONTHS_IT = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
const DAYS_IT = ["Lu","Ma","Me","Gi","Ve","Sa","Do"];

export default function RoomCalendar({ roomName, roomSlug }: Props) {
  const today = new Date(); today.setHours(0,0,0,0);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [blockedDates, setBlockedDates] = useState<Set<DateStr>>(new Set());
  const [checkIn, setCheckIn] = useState<DateStr | null>(null);
  const [checkOut, setCheckOut] = useState<DateStr | null>(null);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState<DateStr | null>(null);
  const [step, setStep] = useState<"checkin" | "checkout">("checkin");
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState<string | null>(null);

  // Fetch blocked dates from API
  useEffect(() => {
    setLoading(true);
    fetch(`/api/availability/${roomSlug}`)
      .then((r) => r.json())
      .then((data: { blocked: DateStr[] }) => {
        setBlockedDates(new Set(data.blocked || []));
      })
      .catch(() => setBlockedDates(new Set()))
      .finally(() => setLoading(false));
  }, [roomSlug]);

  const isBlocked = useCallback((d: Date) => blockedDates.has(toDateStr(d)), [blockedDates]);
  const isPast = (d: Date) => d < today;

  const isInRange = (d: Date) => {
    if (!checkIn) return false;
    const end = checkOut ? fromDateStr(checkOut) : hover ? fromDateStr(hover) : null;
    if (!end) return false;
    const start = fromDateStr(checkIn);
    return d > start && d < end;
  };
  const isCheckIn = (d: Date) => checkIn === toDateStr(d);
  const isCheckOut = (d: Date) => checkOut === toDateStr(d);

  // Check if a range has blocked dates inside
  const rangeHasBlocked = (start: Date, end: Date) => {
    let cur = addDays(start, 1);
    while (cur < end) {
      if (isBlocked(cur)) return true;
      cur = addDays(cur, 1);
    }
    return false;
  };

  const handleDayClick = (d: Date) => {
    if (isPast(d) || isBlocked(d)) return;
    const ds = toDateStr(d);
    setError(null);

    if (step === "checkin") {
      setCheckIn(ds); setCheckOut(null); setStep("checkout");
    } else {
      if (!checkIn) { setCheckIn(ds); setStep("checkout"); return; }
      const ciDate = fromDateStr(checkIn);
      if (d <= ciDate) { setCheckIn(ds); setCheckOut(null); return; }
      if (rangeHasBlocked(ciDate, d)) {
        setError("Le date selezionate includono giorni non disponibili. Scegli un periodo diverso.");
        return;
      }
      setCheckOut(ds); setStep("checkin");
    }
  };

  const reset = () => { setCheckIn(null); setCheckOut(null); setStep("checkin"); setError(null); };

  // Calendar grid
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear(), month = date.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    // Monday=0 offset
    let startDow = first.getDay() - 1; if (startDow < 0) startDow = 6;
    const days: (Date | null)[] = Array(startDow).fill(null);
    for (let i = 1; i <= last.getDate(); i++) days.push(new Date(year, month, i));
    return days;
  };

  const nights = checkIn && checkOut ? diffDays(fromDateStr(checkIn), fromDateStr(checkOut)) : 0;

  const formatDate = (ds: DateStr) => {
    const d = fromDateStr(ds);
    return `${d.getDate()} ${MONTHS_IT[d.getMonth()]} ${d.getFullYear()}`;
  };

  // Generate WhatsApp message
  const buildWAMsg = () => {
    if (!checkIn || !checkOut) return "";
    return encodeURIComponent(
      `Buongiorno! Vorrei prenotare la ${roomName} dal ${formatDate(checkIn)} al ${formatDate(checkOut)} per ${guests} ${guests === 1 ? "persona" : "persone"} (${nights} ${nights === 1 ? "notte" : "notti"}). È disponibile? Grazie!`
    );
  };

  // Generate email
  const buildEmailBody = () => {
    if (!checkIn || !checkOut) return "";
    return encodeURIComponent(
      `Gentili signori,\n\nVorrei richiedere disponibilità per la ${roomName}:\n\n• Check-in: ${formatDate(checkIn)}\n• Check-out: ${formatDate(checkOut)}\n• Notti: ${nights}\n• Ospiti: ${guests}\n\nAttendo risposta, grazie!`
    );
  };

  const days = getDaysInMonth(viewDate);
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  const canGoPrev = viewDate > new Date(today.getFullYear(), today.getMonth(), 1);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-stone-50 px-5 py-4 border-b border-stone-100">
        <h3 className="font-serif text-lg text-stone-800 mb-0.5">Verifica disponibilità</h3>
        <p className="text-stone-400 text-xs">
          {step === "checkin" ? "Seleziona la data di arrivo" : "Seleziona la data di partenza"}
        </p>
      </div>

      {/* Calendar */}
      <div className="p-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} disabled={!canGoPrev}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-medium text-stone-800 text-sm">
            {MONTHS_IT[viewDate.getMonth()]} {viewDate.getFullYear()}
          </span>
          <button onClick={nextMonth}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS_IT.map((d) => (
            <div key={d} className="text-center text-[10px] font-semibold text-stone-400 py-1">{d}</div>
          ))}
        </div>

        {/* Days grid */}
        {loading ? (
          <div className="flex justify-center items-center h-40 text-stone-400 text-sm">Caricamento...</div>
        ) : (
          <div className="grid grid-cols-7 gap-0.5">
            {days.map((day, i) => {
              if (!day) return <div key={`e-${i}`} />;
              const ds = toDateStr(day);
              const past = isPast(day);
              const blocked = isBlocked(day);
              const disabled = past || blocked;
              const checkin = isCheckIn(day);
              const checkout = isCheckOut(day);
              const inRange = isInRange(day);
              const isToday = toDateStr(day) === toDateStr(today);

              return (
                <button
                  key={ds}
                  onClick={() => handleDayClick(day)}
                  onMouseEnter={() => !disabled && step === "checkout" && checkIn && setHover(ds)}
                  onMouseLeave={() => setHover(null)}
                  disabled={disabled}
                  className={`
                    relative h-9 text-xs font-medium rounded-lg transition-all duration-100 select-none
                    ${disabled ? "text-stone-200 cursor-not-allowed" : "cursor-pointer"}
                    ${blocked && !past ? "bg-stone-100" : ""}
                    ${!disabled && !checkin && !checkout && !inRange ? "hover:bg-emerald-50 hover:text-emerald-700 text-stone-700" : ""}
                    ${inRange ? "bg-emerald-100 text-emerald-800 rounded-none" : ""}
                    ${checkin ? "bg-emerald-600 text-white rounded-lg z-10" : ""}
                    ${checkout ? "bg-emerald-600 text-white rounded-lg z-10" : ""}
                    ${isToday && !checkin && !checkout ? "ring-1 ring-emerald-400 text-emerald-700" : ""}
                  `}
                >
                  {day.getDate()}
                  {blocked && !past && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-300" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center gap-4 mt-3 text-[10px] text-stone-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-300 inline-block" /> Non disponibile
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-600 inline-block" /> Selezionato
          </span>
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mx-4 mb-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl px-4 py-3">
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selection summary */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className={`rounded-xl p-3 border-2 transition-colors ${checkIn ? "border-emerald-400 bg-emerald-50" : "border-stone-200 bg-stone-50"}`}>
            <p className="text-[10px] text-stone-400 mb-0.5">Arrivo</p>
            <p className={`text-sm font-semibold ${checkIn ? "text-emerald-700" : "text-stone-300"}`}>
              {checkIn ? formatDate(checkIn) : "—"}
            </p>
          </div>
          <div className={`rounded-xl p-3 border-2 transition-colors ${checkOut ? "border-emerald-400 bg-emerald-50" : "border-stone-200 bg-stone-50"}`}>
            <p className="text-[10px] text-stone-400 mb-0.5">Partenza</p>
            <p className={`text-sm font-semibold ${checkOut ? "text-emerald-700" : "text-stone-300"}`}>
              {checkOut ? formatDate(checkOut) : "—"}
            </p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center justify-between bg-stone-50 rounded-xl px-4 py-2.5 mb-4">
          <span className="text-sm text-stone-600">Ospiti</span>
          <div className="flex items-center gap-3">
            <button onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors text-base font-bold">−</button>
            <span className="text-sm font-semibold text-stone-800 w-4 text-center">{guests}</span>
            <button onClick={() => setGuests(Math.min(4, guests + 1))}
              className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors text-base font-bold">+</button>
          </div>
        </div>

        {/* Price placeholder */}
        {nights > 0 && (
          <div className="text-center mb-4">
            <span className="text-xs text-stone-400">{nights} {nights === 1 ? "notte" : "notti"} · </span>
            <span className="text-sm font-semibold text-stone-700">Prezzo su richiesta</span>
          </div>
        )}

        {/* CTAs */}
        {checkIn && checkOut ? (
          <div className="space-y-2">
            {/* PRIMARY: WhatsApp */}
            <a
              href={`https://wa.me/393513780768?text=${buildWAMsg()}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Prenota via WhatsApp
            </a>
            {/* SECONDARY: Email */}
            <a
              href={`mailto:${siteConfig.email}?subject=Richiesta prenotazione ${roomName}&body=${buildEmailBody()}`}
              className="flex items-center justify-center gap-2 w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-3 rounded-xl transition-all text-sm"
            >
              ✉️ Invia richiesta via email
            </a>
            <button onClick={reset}
              className="w-full text-stone-400 hover:text-stone-600 text-xs py-1.5 transition-colors">
              Cancella selezione
            </button>
          </div>
        ) : (
          <div className="text-center text-xs text-stone-400 py-2">
            {checkIn ? "Ora seleziona la data di partenza" : "Seleziona le date per procedere"}
          </div>
        )}
      </div>
    </div>
  );
}
