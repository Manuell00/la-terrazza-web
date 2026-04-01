import type { MetadataRoute } from "next";

const baseUrl = "https://laterrazzaaffittacamere.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          it: `${baseUrl}/`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/prenota`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          it: `${baseUrl}/prenota`,
          en: `${baseUrl}/en/book`,
        },
      },
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          it: `${baseUrl}/partner`,
          en: `${baseUrl}/en/partners`,
        },
      },
    },
    {
      url: `${baseUrl}/camere/luna`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/luna`,
          en: `${baseUrl}/en/rooms/luna`,
        },
      },
    },
    {
      url: `${baseUrl}/camere/stella`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/stella`,
          en: `${baseUrl}/en/rooms/stella`,
        },
      },
    },
    {
      url: `${baseUrl}/camere/sole`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/sole`,
          en: `${baseUrl}/en/rooms/sole`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          it: `${baseUrl}/`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en/book`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          it: `${baseUrl}/prenota`,
          en: `${baseUrl}/en/book`,
        },
      },
    },
    {
      url: `${baseUrl}/en/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          it: `${baseUrl}/partner`,
          en: `${baseUrl}/en/partners`,
        },
      },
    },
    {
      url: `${baseUrl}/en/rooms/luna`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/luna`,
          en: `${baseUrl}/en/rooms/luna`,
        },
      },
    },
    {
      url: `${baseUrl}/en/rooms/stella`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/stella`,
          en: `${baseUrl}/en/rooms/stella`,
        },
      },
    },
    {
      url: `${baseUrl}/en/rooms/sole`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          it: `${baseUrl}/camere/sole`,
          en: `${baseUrl}/en/rooms/sole`,
        },
      },
    },
  ];
}
