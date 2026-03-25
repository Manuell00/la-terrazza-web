"use client";

import { useLanguage, Lang } from "@/context/LanguageContext";

interface Props {
  dark?: boolean;
}

export default function LangToggle({ dark = false }: Props) {
  const { lang, setLang } = useLanguage();

  const containerClass = dark
    ? "flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1"
    : "flex items-center gap-1 rounded-full border border-stone-200 bg-white p-1 shadow-sm";

  const activeClass = dark
    ? "bg-white text-stone-900 shadow-sm"
    : "bg-stone-900 text-white shadow-sm";

  const inactiveClass = dark
    ? "text-white/55 hover:text-white"
    : "text-stone-500 hover:text-stone-800";

  return (
    <div className={containerClass}>
      {(["it", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-200 ${
            lang === l ? activeClass : inactiveClass
          }`}
        >
          {l === "it" ? "🇮🇹 IT" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}
