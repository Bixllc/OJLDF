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
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/RSU2_ctsjx4",
        kind: "youtube",
        primary: true,
      },
    ],
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 15), // June 15, 2026 (Mon)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 2",
    time: "7:00 PM EDT / 6:00 PM JT",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/gJmKNQZiL7k",
        kind: "youtube",
        primary: true,
      },
    ],
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 16), // June 16, 2026 (Tue)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 3",
    time: "7:00 PM EDT / 6:00 PM JT",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/7CzSpzYiVKM",
        kind: "youtube",
        primary: true,
      },
    ],
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 17), // June 17, 2026 (Wed)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 4",
    time: "7:00 PM EDT / 6:00 PM JT",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/776i05vlo6E",
        kind: "youtube",
        primary: true,
      },
    ],
  },
  {
    seriesId: "diaspora-conf-2026",
    date: new Date(2026, 5, 18), // June 18, 2026 (Thu)
    published: true,
    title: "2nd Biennial Online Diaspora Conference — Day 5",
    time: "7:00 PM EDT / 6:00 PM JT",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/QlkSXug-OoI",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  // =====================
  // Reason with Rattigan — Episodes
  // Year: 2026
  // =====================

  {
    seriesId: "come-reason-wed",
    date: new Date(2026, 8, 9), // September 9, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/EzRi-zKGOHM?si=szQpFh4W6B3ltdFN",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 8, 5), // September 5, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "MINISTER TUFTON AND THE HEALTH SECTOR CRISIS, PT. 2",
      "MINISTER SAMUDA: IN THE ABUNDANCE OF WATER THERE IS DROUGHT",
      "SUMMER EXAM RESULTS",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/l73EZ8MwD5g",
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
    date: new Date(2026, 8, 2), // September 2, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/fQKlHMeoXPg?si=x-MR0RZWP_gO9XDZ",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 7, 29), // August 29, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "MINISTER TUFTON AND HEALTH CARE: THE \"PUBLIC SECRETS\" THAT ARE KILLING JAMAICANS AND SCARING FOREIGNERS",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/FxMoO_pFBnE",
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
    date: new Date(2026, 7, 26), // August 26, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/0hudLLvlfE8?si=wT8lKDgyd64aeWtl",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 7, 22), // August 22, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE. GUEST LECTURERS: BERT SAMUELS, KC; CHRISTOPHER HENRY, ESQ.; DR. DEVON TAYLOR, JABBEM.",
    agenda: [
      "\"COOPERS PEN\" SAGA: DO \"SQUATTERS\" HAVE LEGAL RIGHTS?",
      "OVERWATER BUNGALOWS: THE IMPACT ON BEACH ACCESS AND THE ENVIRONMENT",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/LeqmU9YiBgA",
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
    date: new Date(2026, 7, 19), // August 19, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/ddBr9EYvZwc?si=hKBmdHGNfoV--WGa",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 7, 15), // August 15, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "SSL/DELTA CAPITAL PARTNERS/BVI - THE SHOCKING CONNECTIONS",
      "VAZ' VISAS - THE AMERICAN PERSPECTIVE",
      "INTEGRITY COMMISSION - BEFORE THE BEGINNING",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/MeUgT_rx21s",
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
    date: new Date(2026, 7, 12), // August 12, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/DN2ge7t226g?si=slffN9qSE7BSshXA",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 7, 8), // August 8, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "INSIDE VAZ' VISA REVOCATION",
      "THREE THINGS THAT FULLY EXPLAIN THE \"TCN\" ISSUE",
      "THE \"SUPPORT JAMAICA\" WEBSITE - DID ANYTHING GO RIGHT?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/3tt54BjjWqU",
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
    date: new Date(2026, 7, 5), // August 5, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/8l2dn9fKHfo?si=6m7YyDGOu5IQyw4Y",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 7, 1), // August 1, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "ARE HOLNESS' DAYS AS PRIME MINISTER NUMBERED?",
      "WILL \"FORKED TONGUE\" MARKS AND \"SILVER TONGUE\" JOHNSON SMITH TELL US WHEN THE 10,000 \"UPSTANDING\" DEPORTEES WILL ARRIVE FROM THE U.S.?",
      "TRUTH IS A SMALL SOLACE TO THE VICTIMS OF HURRICANES BERYL AND MELISSA",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/zR_uIkoidKI",
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
    date: new Date(2026, 6, 29), // July 29, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/vx7FEdABqXg?is=PxXfCYC0oNNf7FXH",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 6, 25), // July 25, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "WHEN IS A \"DEPORTEE\" NOT A \"DEPORTEE\"?",
      "THE IMPACT OF 10,000 TCNs ON \"VISION 2030 JAMAICA\"",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/aCqlD8TnC_g",
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
    date: new Date(2026, 6, 22), // July 22, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/c9oUgmECxJw?si=vSdGtkaLJNvUaxcM",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 6, 18), // July 18, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "WHAT IS AUDREY MARKS' REAL ROLE IN GOVERNMENT?",
      "THE \"INTEGRITY\" COMMISSION - A TOOTHLESS AND BLIND TIGER CUB",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/5V5q436q79A",
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
    date: new Date(2026, 6, 15), // July 15, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/1ydrKzgzl2U?si=BTeAghRfhSHykiJy",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 6, 11), // July 11, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "THE \"AMERICA FIRST\" PROGRAM",
      "THE \"TCN\" PROGRAM",
      "THE \"STRUCTURED MIGRATION\" PROGRAM",
      "SHOULD JAMAICA BELIEVE ANDREW HOLNESS, AUDREY MARKS, DANA MORRIS DIXON, AND HORACE CHANG?",
      "DID PEARNEL CHARLES, JR. AND KAMINA JOHNSON SMITH RESIGN FROM THE CABINET?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/_wuCj8HhrUM",
        kind: "youtube",
        primary: true,
      },
      {
        label: "Listen on Reggae Global Radio",
        url: "https://reggaeglobalradio.com/",
        kind: "radio",
      },
    ],
  },

  {
    seriesId: "come-reason-wed",
    date: new Date(2026, 6, 8), // July 8, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/vaFVKWIv5rs?si=H3gpc69iIXtCsAyo",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 6, 4), // July 4, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "DID MINISTER AUDREY MARKS' SPEECH REMOVE THE DOUBTS ABOUT HER (IN)COMPETENCE?",
      "TCN PROGRAM: THE USG'S CLEARLY STATED POSITION",
      "WHO \"LEAKED\" THE DIPLOMATIC NOTE/MOU TO THE MEDIA? WHY?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/cvmQBa0R0HA",
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
    date: new Date(2026, 6, 1), // July 1, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/vPogGNA6Vak?si=Y2nLXJPFgfahBhNA",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 5, 27), // June 27, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    agenda: [
      "WATER: IF THE FERRY DESALINATION PLANT WASN'T BUILT, WHERE IS THE MONEY?",
      "IMMIGRATION: IS THE GOVERNMENT LYING ABOUT THE TCN AND THE \"STRUCTURED MIGRATION\" PROGRAMS?",
      "GOOD GOVERNANCE: WILL THE INCREASING PRESSURE FORCE PM HOLNESS TO SEEK MP WHEATLEY'S RESIGNATION?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/8Dz4N9RVQ7Q",
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
        url: "https://www.youtube.com/live/LZy88laeyts",
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
        url: "https://www.youtube.com/live/ibgyxcRezQ4",
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
    date: new Date(2026, 4, 30), // May 30, 2026 (Sat) — postponed
    published: true,
    title: "Reason With Rattigan — Postponed",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "DUE TO UNFORESEEN CIRCUMSTANCES, CLASSES SCHEDULED FOR MAY 23 AND 30 HAVE BEEN POSTPONED AND RESCHEDULED FOR JUNE 6, 2026.",
    agenda: [
      "CLASS POSTPONED — RESCHEDULED FOR JUNE 6, 2026",
      "PLEASE CONTINUE TO STUDY FOR THE FINAL EXAM WHICH WILL BE ADMINISTERED ON JUNE 6, 2026.",
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 4, 23), // May 23, 2026 (Sat) — postponed
    published: true,
    title: "Reason With Rattigan — Postponed",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "DUE TO UNFORESEEN CIRCUMSTANCES, CLASSES SCHEDULED FOR MAY 23 AND 30 HAVE BEEN POSTPONED AND RESCHEDULED FOR JUNE 6, 2026.",
    agenda: [
      "CLASS POSTPONED — RESCHEDULED FOR JUNE 6, 2026",
      "PLEASE CONTINUE TO STUDY FOR THE FINAL EXAM WHICH WILL BE ADMINISTERED ON JUNE 6, 2026.",
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
        url: "https://www.youtube.com/live/tWh6cY6EaN4",
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 4, 13), // May 13, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/uyRfV2Sj5Jk",
        kind: "youtube",
        primary: true,
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
        url: "https://www.youtube.com/live/_yt0Vr82pA0",
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 3, 29), // April 29, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/hFVaE5PrndU",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 3, 25), // April 25, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "NaRRA ⎮ Ethics Committee: Chickens Coming Home To Roost ⎮ Speaker Holness & Cuthbert-Flynn Statement",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/e4WCXhiw-3g",
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
    date: new Date(2026, 3, 22), // April 22, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/CLt1_d6b7EQ",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 3, 18), // April 18, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "Speaker Holness Gives Rattigan Advice; Gov’t Badness, Ignorance Or Standing Orders-Nigerian Diaspora",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/SAO79GnhADQ",
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
    date: new Date(2026, 3, 15), // April 15, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/Htt1QtjA0_4",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 3, 11), // April 11, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "If Terrelongue Touts Success, Why Should The Diaspora Cont'd Sending Remittances? MP's Role? UHWI",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/606p2REZG8U",
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
    date: new Date(2026, 3, 8), // April 8, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/2nOqr6V3IKk",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 3, 4), // April 4, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "Pamela Monroe-Ellis Saving Taxpayers? Prosperity-Politicians But Promises-Poor Constitutional Crisis",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/CQvi4c9x-JY",
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
    date: new Date(2026, 3, 1), // April 1, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/AVkWvVv_W3Q",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 2, 28), // March 28, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "Are J’Cans Prime For Plunder? Ignorance Ambiguity & Fear = Prosperity For Politicians-Not The People",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/9ugGhm1fTWQ",
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
    date: new Date(2026, 2, 21), // March 21, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "Are There Thieves, Liars, Criminals, & Dunces in Parliament? Suffering Voters-Third Party of 5 Rule.",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/5J_T0ldZMjM",
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
    date: new Date(2026, 2, 18), // March 18, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/mgsQHGfFZr4",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 2, 14), // March 14, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 2:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3PM (NY) / 2PM (JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "MID-TERM EXAM TODAY!",
      "THE GOJ JUST \"DISCOVERED\" LEGAL VIOLATIONS WITH THE CUBAN MEDICAL PROGRAM: THE PEOPLE CANNOT BE FOOLED ALL THE TIME",
      "SPEAKER HOLNESS' REIGN OF TERROR, RUDENESS, AND IGNORANCE: HOW MUCH MORE CAN WE COUNTENANCE?",
      "THE AUDITOR GENERAL, STAKEHOLDERS, AND THE RURAL SCHOOL BUS PROGRAM - REAL ADVOCACY IN ACTION",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/fGGwnbrxbCk",
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
    date: new Date(2026, 2, 11), // March 11, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/fJz8OZSLBeU?si=HfhLgJmCF1i1swJu",
        kind: "youtube",
        primary: true,
      },
    ],
  },

  {
    seriesId: "reason-sat",
    date: new Date(2026, 2, 7), // March 7, 2026 (Sat)
    published: true,
    title: "Reason With Rattigan",
    time: "3:00 PM NY / 3:00 PM JA",
    description:
      "CLASS STARTS PROMPTLY TODAY AT 3 PM (NY/JAMAICA) ON \"REASON WITH RATTIGAN\" VIA REGGAE GLOBAL RADIO AND YOUTUBE.",
    agenda: [
      "THE JAMAICAN PEOPLE AND INACTION: EDUCATION V. ENTERTAINMENT",
      "CLASS DISCUSSION: HOW CAN 5 MPs CHART THE COURSE FOR A BETTER JAMAICA?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/e-UoKI_V3XU",
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
    date: new Date(2026, 1, 28), // Feb 28, 2026 (Sat)
    published: true,
    agenda: [
      'Guest lecturers: "Mama Rose" and Councillor Karl Smith',
      "UPDATE ON MINISTER DARYL VAZ AND THE RURAL SCHOOL BUS PROGRAM",
      "MOROCCAN FERTILIZER: THE AUDITOR GENERAL HAS SPOKEN - WHO WILL PAY?",
      "UNDER WHAT CIRCUMSTANCES WOULD JAMAICANS ALLOW A THIRD PARTY TO LEAD THE COUNTRY?",
    ],
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/live/NRU0_-yChg4",
        kind: "youtube",
        primary: true,
      },
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 1, 11), // February 11, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/-e8Q_iuezAY",
        kind: "youtube",
        primary: true,
      },
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 1, 4), // February 4, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/HBVkQtIojC4",
        kind: "youtube",
        primary: true,
      },
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 0, 28), // January 28, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/KnBVvx-bp28",
        kind: "youtube",
        primary: true,
      },
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
    seriesId: "come-reason-wed",
    date: new Date(2026, 0, 21), // January 21, 2026 (Wed)
    published: true,
    links: [
      {
        label: "Watch Live on YouTube",
        url: "https://www.youtube.com/live/sjcwfLbb0lk",
        kind: "youtube",
        primary: true,
      },
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