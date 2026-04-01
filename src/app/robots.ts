import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://laterrazzaaffittacamere.com/sitemap.xml",
    host: "https://laterrazzaaffittacamere.com",
  };
}
