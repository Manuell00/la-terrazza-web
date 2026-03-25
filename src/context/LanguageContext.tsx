"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang, getLangFromPath, switchLocalePath } from "@/lib/i18n";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "it",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = getLangFromPath(pathname);

  const value = useMemo(
    () => ({
      lang,
      setLang: (nextLang: Lang) => {
        const target = switchLocalePath(pathname || "/", nextLang);
        if (target !== pathname) {
          router.push(target);
        }
      },
    }),
    [lang, pathname, router]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}

export type { Lang };
