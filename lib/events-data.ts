import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type EventType = "broadcast" | "in-person" | "community";

export type EventLink = {
  label: string;
  url: string;
  kind?: "youtube" | "radio" | "rsvp" | "website";
  primary?: boolean;
};

export type Series = {
  id: string;
  title: string;
  type: EventType;
  time: string;

  recurringRule: "weekly" | "monthly-last-saturday";
  recurringDay?: number; // 0=Sun..6=Sat

  platform?: string;
  image?: string;

  defaultDescription?: string;
  defaultLinks?: EventLink[];
};

export type Episode = {
  seriesId: string;
  date: Date;

  published?: boolean;

  title?: string;
  time?: string;
  description?: string;
  agenda?: string[];
  links?: EventLink[];
};

export type ResolvedEvent = {
  id: string;
  seriesId: string;
  date: Date;

  title: string;
  type: EventType;
  time: string;

  platform?: string;
  image?: string;

  description?: string;
  agenda?: string[];
  links?: EventLink[];

  agendaPending?: boolean;
};

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

export const SERIES: Series[] = [
  {
    id: "come-reason-wed",
    title: "Come Reason With Rattigan",
    type: "broadcast",
    time: "8:00 PM EST",
    recurringRule: "weekly",
    recurringDay: 3, // Wed
    platform: "YouTube Live / Reggae Global",
    image: "/come-reason.png",
    defaultDescription: "Weekly community broadcast.",
    defaultLinks: [
      {
        label: "Watch on YouTube (Channel)",
        url: "https://www.youtube.com/@OJLDF",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com",
        kind: "radio",
      },
    ],
  },
  {
    id: "reason-sat",
    title: "Reason with Rattigan (Saturday)",
    type: "broadcast",
    time: "3:00 PM EST",
    recurringRule: "weekly",
    recurringDay: 6, // Sat
    platform: "YouTube Live",
    image: "/reason-rattigan.png",
    defaultDescription: "Saturday show.",
    defaultLinks: [
      {
        label: "Watch on YouTube (Channel)",
        url: "https://www.youtube.com/@OJLDF",
        kind: "youtube",
        primary: true,
      },
    ],
  },
];

export const EPISODES: Episode[] = [
  // =====================
  // Reason with Rattigan — Episodes
  // Year: 2026
  // =====================

  {
    seriesId: "reason-sat",
    date: new Date(2026, 4, 9), // May 9, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      '"Lies, Damned Lies, and Statistics"',
      'Parliamentary Procedures: Ye Who Knoweth the "Standing Orders" Shall Serve the People Well',
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@OJLDF",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com",
        kind: "radio",
      },
      {
        label: "Newsletter",
        url: "https://globaldigital.createsend1.com/t/d-e-sdjkytd-l-i/",
        kind: "website",
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 1, 28), // Feb 28, 2026 (Sat)
    published: true,
    agenda: [
      'Guest lecturers: "Mama Rose" and Councillor Karl Smith',
      "UPDATE ON MINISTER DARYL VAZ AND THE RURAL SCHOOL BUS PROGRAM",
      "MOROCCAN FERTILIZER: THE AUDITOR GENERAL HAS SPOKEN - WHO WILL PAY?",
      "UNDER WHAT CIRCUMSTANCES WOULD JAMAICANS ALLOW A THIRD PARTY TO LEAD THE COUNTRY?",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 1, 16), // Feb 16, 2026 (Mon) — special dated event
    published: true,
    agenda: ["Special episode (dated event)."],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://youtu.be/JOGAnyPTI8U?si=-tavvnbHRTlNmqur",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 1, 14), // Feb 14, 2026 (Sat)
    published: true,
    agenda: [
      "MAJOR ANNOUNCEMENT",
      'MINISTER TUFTON, UHWI, "COMPANY #2", AND "COMPANY #3"',
      "MURDER STATISTICS: ARE THE JCF'S NUMBERS CORRECT?",
      "WILL THE DIASPORA ELECTION BE DECLARED INVALID?",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 1, 7), // Feb 7, 2026 (Sat)
    published: true,
    agenda: [
      "Guest lecturers: Diana Valle, Esq.",
      "Guest lecturers: Monique Christie (JABBEM Coordinator for Western Jamaica)",
      "Guest lecturers: Dr. Devon Taylor (President, JABBEM)",
      "MINISTER TUFTON AND PROCUREMENT ISSUES AT THE UHWI AND 'MARKET ME'",
      "BANKRUPTCY RELIEF FOR THE AVERAGE PERSON",
      "BEACH ACCESS FOR ALL",
      "UPCOMING DIASPORA CONFERENCE IN MONTEGO BAY",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 31), // Jan 31, 2026 (Sat)
    published: true,
    agenda: [
      "Guest lecturers: Gillian Murray (Candidate for the South Region in the Diaspora Election)",
      "Guest lecturers: Dr. Devon Taylor (JABBEM)",
      'MINISTER TUFTON AND THE UHWI SCANDAL: DIALYSIS MACHINES AND "COMPANY 2"',
      "ATTORNEY RATTIGAN IS BARRED FROM PARTICIPATING IN THE DIASPORA ELECTION - TIMELINE AND FACTS",
      "CIVICS 101: PARLIAMENTARY PROCEDURES (POINT OF ORDER, ETC.)",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 24), // Jan 24, 2026 (Sat)
    published: true,
    agenda: [
      'Dr. Devon Taylor (JABBEM): SHIFTING SHORELINE — "PIRATES" OF BLACK RIVER AND THE "SAND" MAFIA',
      '"UNACCOUNTED" MOROCCAN FERTILIZER: THE AUDITOR GENERAL\'S BOLD MOVE',
      "FINANCIAL SCANDAL AT THE UHWI: ANOTHER 9-DAY WONDER?",
      "DIASPORA ELECTION: SIGNIFICANT EVIDENCE OF ELECTION MANIPULATION",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 17), // Jan 17, 2026 (Sat)
    published: true,
    agenda: [
      "THE AUDITOR GENERAL'S REPORT ON THE UHWI: VICTIMIZATION OF THE PUBLIC",
      'HUNTER V. TUFTON: A "SLAM DUNK" CASE',
      'AMBASSADOR WARD: MY JOURNEY WITH A "GIANT"',
      "THE DIASPORA ELECTION: THE GOVERNMENT CAN'T FOOL THE PEOPLE THIS TIME",
      "MINISTER VAZ AND THE JPS: BETRAYAL OF THE JAMAICAN PEOPLE (ELECTRICITY AND SCHOOL BUSES)",
      "THE GOJ'S MISUNDERSTANDING OF ALLIES, FRIENDS, AND INTERESTS",
      "ODPEM: THE POLITICIZATION OF ITS ADMINISTRATION AND ASSISTANCE",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 10), // Jan 10, 2026 (Sat)
    published: true,
    agenda: [
      "IS THE GOVERNMENT COVERING UP THE TRUE MURDER RATE?",
      "WHY SHOULD THE PEOPLE TRUST THE GOVERNMENT AND JPS?",
      'IS THE GOVERNMENT INVOLVED IN THE "RIGGING" OF THE UPCOMING DIASPORA ELECTION?',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLastSaturdayOfMonth(date: Date) {
  if (date.getDay() !== 6) return false;
  const nextWeek = addDays(date, 7);
  return nextWeek.getMonth() !== date.getMonth();
}

export function getCalendarDays(currentDate: Date) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days: Date[] = [];
  let day = gridStart;
  while (day <= gridEnd) {
    days.push(day);
    day = addDays(day, 1);
  }
  return { monthStart, days };
}

export function episodeKey(seriesId: string, date: Date) {
  return `${seriesId}|${format(date, "yyyy-MM-dd")}`;
}

// Fast lookup map: `${seriesId}|yyyy-MM-dd` -> Episode
const EPISODES_BY_KEY: Record<string, Episode> = EPISODES.reduce((acc, ep) => {
  acc[episodeKey(ep.seriesId, ep.date)] = ep;
  return acc;
}, {} as Record<string, Episode>);

export function findEpisode(seriesId: string, date: Date) {
  return EPISODES_BY_KEY[episodeKey(seriesId, date)];
}

export function resolveEvent(series: Series, date: Date): ResolvedEvent {
  const ep = findEpisode(series.id, date);
  const agendaPending = !!ep && ep.published === false;

  return {
    id: `${series.id}-${format(date, "yyyy-MM-dd")}`,
    seriesId: series.id,
    date,
    title: ep?.title ?? series.title,
    type: series.type,
    time: ep?.time ?? series.time,
    platform: series.platform,
    image: series.image,
    description: ep?.description ?? series.defaultDescription,
    agenda: agendaPending ? undefined : ep?.agenda,
    links: ep?.links ?? series.defaultLinks,
    agendaPending,
  };
}

export function resolveEventsForDate(date: Date): ResolvedEvent[] {
  const results: ResolvedEvent[] = [];

  // 1) Normal recurring occurrences
  for (const s of SERIES) {
    if (s.recurringRule === "weekly" && typeof s.recurringDay === "number") {
      if (date.getDay() !== s.recurringDay) continue;
      results.push(resolveEvent(s, date));
    }

    if (s.recurringRule === "monthly-last-saturday") {
      if (!isLastSaturdayOfMonth(date)) continue;
      results.push(resolveEvent(s, date));
    }
  }

  // 2) Also include ANY explicitly dated episodes (even if they don't match the recurring day)
  for (const ep of EPISODES) {
    if (!sameDay(ep.date, date)) continue;

    const s = SERIES.find((x) => x.id === ep.seriesId);
    if (!s) continue;

    const id = `${s.id}-${format(date, "yyyy-MM-dd")}`;
    const alreadyAdded = results.some((r) => r.id === id);
    if (alreadyAdded) continue;

    results.push(resolveEvent(s, date));
  }

  return results;
}

export function nextWeeklyOccurrences(series: Series, from: Date, count: number) {
  const results: Date[] = [];
  if (series.recurringRule !== "weekly" || typeof series.recurringDay !== "number") return results;

  let cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  while (results.length < count) {
    if (cursor.getDay() === series.recurringDay) {
      results.push(new Date(cursor));
      cursor = addDays(cursor, 1);
      continue;
    }
    cursor = addDays(cursor, 1);
  }

  return results;
}

function startOfLocalDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * Latest banner event:
 * - considers recurring shows AND explicitly dated episodes
 * - returns the most recent event whose date <= today
 */
export function getLatestEventForBanner(today = new Date()): ResolvedEvent | null {
  const t = startOfLocalDay(today);

  const candidates: ResolvedEvent[] = [];

  // A) Latest occurrence for each recurring series (weekly)
  for (const s of SERIES) {
    if (s.recurringRule === "weekly" && typeof s.recurringDay === "number") {
      for (let i = 0; i <= 14; i++) {
        const d = subDays(t, i);
        if (d.getDay() === s.recurringDay) {
          candidates.push(resolveEvent(s, d));
          break;
        }
      }
    }

    if (s.recurringRule === "monthly-last-saturday") {
      // Scan current + previous month for last Saturday match (simple + safe)
      const scanMonths = [t, subDays(addMonths(t, -1), 0)];
      for (const monthAnchor of scanMonths) {
        const monthStart = startOfMonth(monthAnchor);
        const monthEnd = endOfMonth(monthAnchor);
        let day = monthEnd;
        while (day >= monthStart) {
          if (isLastSaturdayOfMonth(day) && day <= t) {
            candidates.push(resolveEvent(s, day));
            break;
          }
          day = subDays(day, 1);
        }
      }
    }
  }

  // B) Explicitly dated episodes (including off-schedule days like Mon 2/16)
  for (const ep of EPISODES) {
    const d = startOfLocalDay(ep.date);
    if (d.getTime() > t.getTime()) continue;

    const s = SERIES.find((x) => x.id === ep.seriesId);
    if (!s) continue;

    const resolved = resolveEvent(s, d);
    const exists = candidates.some((c) => c.id === resolved.id);
    if (!exists) candidates.push(resolved);
  }

  if (!candidates.length) return null;

  candidates.sort((a, b) => b.date.getTime() - a.date.getTime());
  return candidates[0];
}