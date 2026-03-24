import { NextResponse } from "next/server";

// iCal URL per ogni camera — inserire gli URL reali da Airbnb/Booking
const ICAL_URLS: Record<string, string[]> = {
  luna: [
    // process.env.ICAL_LUNA_AIRBNB || "",
    // process.env.ICAL_LUNA_BOOKING || "",
  ],
  stella: [
    // process.env.ICAL_STELLA_AIRBNB || "",
    // process.env.ICAL_STELLA_BOOKING || "",
  ],
  sole: [
    // process.env.ICAL_SOLE_AIRBNB || "",
    // process.env.ICAL_SOLE_BOOKING || "",
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
