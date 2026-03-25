export type Lang = "it" | "en";

export function getLangFromPath(pathname: string | null | undefined): Lang {
  if (!pathname) return "it";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";
}

export function localizePath(path: string, lang: Lang): string {
  if (lang === "it") return toItalianPath(path);
  return toEnglishPath(path);
}

export function switchLocalePath(pathname: string, lang: Lang): string {
  return localizePath(pathname, lang);
}

function toEnglishPath(pathname: string): string {
  const path = stripTrailingSlash(pathname);

  if (path === "/" || path === "") return "/en";
  if (path === "/prenota") return "/en/book";
  if (path === "/partner") return "/en/partners";
  if (path.startsWith("/camere/")) return path.replace("/camere/", "/en/rooms/");
  if (path.startsWith("/en/")) return path;
  return `/en${path}`;
}

function toItalianPath(pathname: string): string {
  const path = stripTrailingSlash(pathname);

  if (path === "/en" || path === "") return "/";
  if (path === "/en/book") return "/prenota";
  if (path === "/en/partners") return "/partner";
  if (path.startsWith("/en/rooms/")) return path.replace("/en/rooms/", "/camere/");
  if (path.startsWith("/en/")) return path.slice(3) || "/";
  return path || "/";
}

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
