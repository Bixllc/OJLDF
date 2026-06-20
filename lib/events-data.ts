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

  recurringRule: "weekly" | "monthly-last-saturday" | "none";
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
  videoSrc?: string;
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
  videoSrc?: string;

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
    id: "diaspora-conf-2026",
    title: "2nd Biennial Online Diaspora Conference",
    type: "community",
    time: "7:00 PM EDT / 6:00 PM JT",
    recurringRule: "none",
    platform: "YouTube Live — Reason With Rattigan",
    image: "/diaspora-conference.png",
    defaultDescription:
      "Global Jamaica Diaspora Coalition presents the 2nd Biennial Online Diaspora Conference: Seeing Reality — Shaping Our Future. June 14–18, 2026.",
    defaultLinks: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@reasonwithrattigan",
        kind: "youtube",
        primary: true,
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
  // 2nd Biennial Online Diaspora Conference — June 14–18, 2026
  // =====================

  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 14), // June 14, 2026 (Sun)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 1",
    time: "7:00 PM EDT / 6:00 PM JT",
    agenda: ["Seeing Reality — Shaping Our Future", "Come and Join the Conversation"],
    videoSrc: "/diaspora-conference-promo.mp4",
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 15), // June 15, 2026 (Mon)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 2",
    time: "7:00 PM EDT / 6:00 PM JT",
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 16), // June 16, 2026 (Tue)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 3",
    time: "7:00 PM EDT / 6:00 PM JT",
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 17), // June 17, 2026 (Wed)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 4",
    time: "7:00 PM EDT / 6:00 PM JT",
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 18), // June 18, 2026 (Thu)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 5",
    time: "7:00 PM EDT / 6:00 PM JT",
  },

  // =====================
  // Reason with Rattigan — Episodes
  // Year: 2026
  // =====================

  {
    seriesId: "reason-sat",
    date: new Date(2026, 5, 20), // June 20, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      "Guest lecturers: Jeanette Calder, JAMP",
      "Guest lecturers: Dr. Roger Hunter",
      "DR. WHEATLEY AND DR. HOLNESS: ARE THEY TWO PEAS IN A POD?",
      "NaRRA LEGISLATION: CORRUPTION OR RESILIENCE?",
      "MINISTER CHANG: HAVE YOU BEEN TRUTHFUL ABOUT THE MOU AND U.S. DEPORTEES?",
    ],
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/97iRmIUAz0U?si=8FWdwfOkNVOg9J_k",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com/",
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
    date: new Date(2026, 5, 13), // June 13, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      "FINAL EXAM!",
      "THE DIASPORA CONFERENCE: PROSPERITY FOR THE PROSPEROUS OR POVERTY STRICKEN?",
      "PM HOLNESS' FINANCES: BIG MAN, WEH YUH GET SUH MUCH MONEY FRAM?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@reasonwithrattigan",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com/",
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 5, 10), // June 10, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/5uJmjcMbReg?si=HeEADbuOR2IxQx0E",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 5, 6), // June 6, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      "THE PROVOST AND THE PROFESSOR ARE BACK!",
      "THE F-L-A REPORT AND THE INVESTIGATION THAT LACKS INTEGRITY",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@reasonwithrattigan",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com/",
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
    date: new Date(2026, 4, 24), // May 24, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      "THE F-L-A REPORT AND THE INVESTIGATION THAT LACKS INTEGRITY",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@reasonwithrattigan",
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
    date: new Date(2026, 4, 16), // May 16, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      'Should "Patois" Be Recognized in Parliament?',
      'Parliamentarians Disrupt Committee Meeting: "Government Badness" and Ignorance',
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
    videoSrc: ep?.videoSrc,
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

export function startOfLocalDay(d: Date) {
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

/* -------------------------------------------------------------------------- */
/*                    One-time events: upcoming vs. archived                 */
/* -------------------------------------------------------------------------- */

/**
 * One-time events (conferences, etc. — recurringRule "none") are "archived"
 * once their last scheduled date has passed. Archived events drop out of
 * "upcoming" listings but remain on the calendar, since resolveEventsForDate
 * doesn't filter by date — only getUpcomingOneTimeSeries/getArchivedOneTimeSeries do.
 */

export function getOneTimeSeries() {
  return SERIES.filter((s) => s.recurringRule === "none");
}

export function isOneTimeSeriesArchived(series: Series, today = new Date()) {
  if (series.recurringRule !== "none") return false;

  const episodes = EPISODES.filter((e) => e.seriesId === series.id);
  if (!episodes.length) return false;

  const lastDate = episodes.reduce(
    (latest, e) => (e.date > latest ? e.date : latest),
    episodes[0].date
  );

  return startOfLocalDay(lastDate) < startOfLocalDay(today);
}

export function getUpcomingOneTimeSeries(today = new Date()) {
  return getOneTimeSeries().filter((s) => !isOneTimeSeriesArchived(s, today));
}

export function getArchivedOneTimeSeries(today = new Date()) {
  return getOneTimeSeries().filter((s) => isOneTimeSeriesArchived(s, today));
}

export function formatOneTimeSeriesDateRange(series: Series) {
  const episodes = EPISODES.filter((e) => e.seriesId === series.id).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  if (!episodes.length) return series.time;

  const first = episodes[0];
  const last = episodes[episodes.length - 1];
  const time = first.time ?? series.time;

  if (sameDay(first.date, last.date)) {
    return `${format(first.date, "MMMM d, yyyy")} · ${time}`;
  }

  if (
    first.date.getMonth() === last.date.getMonth() &&
    first.date.getFullYear() === last.date.getFullYear()
  ) {
    return `${format(first.date, "MMMM d")}–${format(last.date, "d, yyyy")} · ${time}`;
  }

  return `${format(first.date, "MMMM d, yyyy")} – ${format(last.date, "MMMM d, yyyy")} · ${time}`;
}

/**
 * One card per archived one-time series, for surfacing in the Learning
 * Center Archive once the event has concluded.
 */
export function getArchivedEventCards(today = new Date()): ResolvedEvent[] {
  return getArchivedOneTimeSeries(today).map((series) => {
    const episodes = EPISODES.filter((e) => e.seriesId === series.id).sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );
    const last = episodes[episodes.length - 1];
    const videoSrc = episodes.find((e) => e.videoSrc)?.videoSrc;

    return {
      id: `${series.id}-archive`,
      seriesId: series.id,
      date: last.date,
      title: series.title,
      type: series.type,
      time: formatOneTimeSeriesDateRange(series),
      platform: series.platform,
      image: series.image,
      description: series.defaultDescription,
      links: series.defaultLinks,
      videoSrc,
    };
  });
}