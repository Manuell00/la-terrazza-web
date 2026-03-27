import { NextResponse } from "next/server";

// iCal URL per ogni camera
const ICAL_URLS: Record<string, string[]> = {
  luna: [
    "https://www.airbnb.com/calendar/ical/1360802067191927878.ics?t=f0110ccb83904bcbbe603e2b869aa4ae&locale=it",
    "https://ical.booking.com/v1/export?t=bcf0750f-426b-415c-8e6e-90ad094c6845",
    "https://www.bed-and-breakfast.it/export_calendar.cfm?id=38899&s=1774723113&t=E6704ADFCAED65B34F8B0DDFE3FCF2F63C533A49CEB5E7FFBC7364F6E29D1001&roomID=119262",
  ],
  stella: [
    "https://www.airbnb.com/calendar/ical/1360851292351796993.ics?t=057a49306c3f403185be5ef00a4304f6&locale=it",
    "https://ical.booking.com/v1/export?t=0a94840d-2439-4a5b-974a-ed9973d37527",
    "https://www.bed-and-breakfast.it/export_calendar.cfm?id=38899&s=1774723113&t=E6704ADFCAED65B34F8B0DDFE3FCF2F63C533A49CEB5E7FFBC7364F6E29D1001&roomID=119264",
  ],
  sole: [
    "https://www.airbnb.com/calendar/ical/1360860375665572777.ics?t=87b4a422e3f04347951c40fb7ebdf57a&locale=it",
    "https://ical.booking.com/v1/export?t=3a0c8715-c820-421d-9dfd-e219f7e5d055",
    "https://www.bed-and-breakfast.it/export_calendar.cfm?id=38899&s=1774723113&t=E6704ADFCAED65B34F8B0DDFE3FCF2F63C533A49CEB5E7FFBC7364F6E29D1001&roomID=119265",
  ],
};

function parseIcal(text: string): string[] {
  const blocked: string[] = [];
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  let inEvent = false;
  let dtStart = "";
  let dtEnd = "";

  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) { inEvent = true; dtStart = ""; dtEnd = ""; }
    if (!inEvent) continue;
    if (line.startsWith("DTSTART")) {
      const raw = line.split(":")[1]?.trim().replace(/[^0-9]/g, "");
      if (raw && raw.length >= 8) dtStart = `${raw.slice(0,4)}-${raw.slice(4,6)}-${raw.slice(6,8)}`;
    }
    if (line.startsWith("DTEND")) {
      const raw = line.split(":")[1]?.trim().replace(/[^0-9]/g, "");
      if (raw && raw.length >= 8) dtEnd = `${raw.slice(0,4)}-${raw.slice(4,6)}-${raw.slice(6,8)}`;
    }
    if (line.startsWith("END:VEVENT") && dtStart && dtEnd) {
      // Add all dates in range [dtStart, dtEnd)
      const start = new Date(dtStart);
      const end = new Date(dtEnd);
      for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
        blocked.push(d.toISOString().split("T")[0]);
      }
      inEvent = false;
    }
  }
  return blocked;
}

export async function GET(_req: Request, { params }: { params: { roomId: string } }) {
  const roomId = params.roomId.toLowerCase();
  const urls = ICAL_URLS[roomId] || [];

  const allBlocked = new Set<string>();

  await Promise.allSettled(
    urls
      .filter(Boolean)
      .map(async (url) => {
        try {
          const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
          if (!res.ok) return;
          const text = await res.text();
          for (const d of parseIcal(text)) allBlocked.add(d);
        } catch {
          // silently skip failed fetches
        }
      })
  );

  return NextResponse.json(
    { blocked: Array.from(allBlocked) },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    }
  );
}
