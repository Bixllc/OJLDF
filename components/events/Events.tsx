"use client";

import * as React from "react";
import Image from "next/image";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Video,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type EventType = "broadcast" | "in-person" | "community";

type EventLink = {
  label: string;
  url: string;
  kind?: "youtube" | "radio" | "rsvp" | "website";
  primary?: boolean;
};

type Series = {
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

type Episode = {
  seriesId: string;
  date: Date; // specific date
  title?: string;
  time?: string;
  description?: string;
  agenda?: string[];
  links?: EventLink[];
};

type ResolvedEvent = {
  id: string; // unique per date occurrence
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
};

/* -------------------------------------------------------------------------- */
/*                                   Utils                                    */
/* -------------------------------------------------------------------------- */

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function getEventBg(type: EventType) {
  if (type === "broadcast") return "bg-red-50 text-red-700";
  if (type === "in-person") return "bg-green-50 text-[#00843D]";
  return "bg-yellow-50 text-yellow-800";
}

function getEventBorder(type: EventType) {
  if (type === "broadcast") return "border-red-500";
  if (type === "in-person") return "border-[#00843D]";
  return "border-[#FCD116]";
}

function getLegendDot(type: EventType) {
  if (type === "broadcast") return "bg-red-500";
  if (type === "in-person") return "bg-[#00843D]";
  return "bg-[#FCD116]";
}

function getLinkButtonClass(kind?: EventLink["kind"]) {
  switch (kind) {
    case "youtube":
      return "bg-red-600 text-white hover:bg-red-700";
    case "radio":
      return "bg-gray-900 text-white hover:bg-black";
    case "rsvp":
      return "bg-[#00843D] text-white hover:bg-[#006930]";
    case "website":
    default:
      return "bg-[#00843D] text-white hover:bg-[#006930]";
  }
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isLastSaturdayOfMonth(date: Date) {
  if (date.getDay() !== 6) return false;
  const nextWeek = addDays(date, 7);
  return nextWeek.getMonth() !== date.getMonth();
}

function getCalendarDays(currentDate: Date) {
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

/* -------------------------------------------------------------------------- */
/*                               Data: Series + Episodes                      */
/* -------------------------------------------------------------------------- */

const SERIES: Series[] = [
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

/**
 * Episodes start from Jan 10, 2026.
 * Add/modify entries weekly with the correct agenda + specific YouTube live links.
 * If an episode isn't listed for a date, the UI will show "Agenda will be posted soon"
 * and will fall back to default links for that series.
 */
const EPISODES: Episode[] = [
  // Jan 10, 2026 (Saturday)
  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 10),
    title: "Reason with Rattigan",
    description: "Weekly Saturday discussion with community updates and Q&A.",
    agenda: ["IS THE GOVERNMENT COVERING UP THE TRUE MURDER RATE?", "WHY SHOULD THE PEOPLE TRUST THE GOVERNMENT AND JPS?", "IS THE GOVERNMENT INVOLVED IN THE RIGGING OF THE UPCOMING DIASPORA ELECTION?", "Live Q&A"],
    links: [
      {
        label: "Watch this episode on YouTube",
        url: "https://www.youtube.com/@reasonwithrattigan",
        kind: "youtube",
        primary: true,
      },
    ],
  },
  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 17),
    title: "Reason With Rattigan",
    description: "Weekly Saturday discussion with community updates and Q&A.",
    agenda: ["THE AUDITOR GENERAL'S REPORT ON THE UHWI: VICTIMIZATION OF THE PUBLIC", "HUNTER V. TUFTON: A SLAM DUNK CASE", "AMBASSADOR WARD: MY JOURNEY WITH A GIANT", "THE DIASPORA ELECTION: THE GOVERNMENT CAN'T FOOL THE PEOPLE THIS TIME", "MINISTER VAZ AND THE JPS: BETRAYAL OF THE JAMAICAN PEOPLE (ELECTRICITY AND SCHOOL BUSES)", "THE GOJ'S MISUNDERSTANDING OF ALLIES, FRIENDS, AND INTERESTS", "ODPEM: THE POLITICIZATION OF ITS ADMINISTRATION AND ASSISTANCE"],
    links: [
      { label: "YouTube Live (Episode Link)", url: "https://www.youtube.com/@ojldf", kind: "youtube", primary: true },
      { label: "Reggae Global Stream", url: "https://reggaeglobalradio.com/stream", kind: "radio" },
    ],
  },
  {
    seriesId: "reason-sat",
    date: new Date(2026, 0, 24),
    title: "Reason With Rattigan",
    description: "Weekly Saturday discussion with community updates and Q&A.",
    agenda: ["SHIFTING SHORELINE: THE PIRATES OF BLACK RIVER AND THE SAND MAFIA", "UNACCOUNTED MOROCCAN FERTILIZER: THE AUDITOR GENERAL'S BOLD MOVE", "FINANCIAL SCANDAL AT THE UHWI: ANOTHER 9-DAY WONDER?", "DIASPORA ELECTION: SIGNIFICANT EVIDENCE OF ELECTION MANIPULATION"],
    links: [
      { label: "YouTube Live (Episode Link)", url: "https://www.youtube.com/@ojldf", kind: "youtube", primary: true },
      { label: "Reggae Global Stream", url: "https://reggaeglobalradio.com/stream", kind: "radio" },
    ],
  },
  {
    seriesId: "come-reason-wed",
    date: new Date(2026, 1, 1),
    title: "Reason With Rattigan",
    description: "Weekly Saturday discussion with community updates and Q&A.",
    agenda: ["MINISTER TUFTON AND THE UHWI SCANDAL: DIALYSIS MACHINES AND COMPANY 2","ATTORNEY RATTIGAN IS BARRED FROM PARTICIPATING IN THE DIASPORA ELECTION - TIMELINE AND FACTS", "CIVICS 101: PARLIAMENTARY PROCEDURES (POINT OF ORDER, ETC.)"],
    links: [
      { label: "YouTube Live (Episode Link)", url: "https://www.youtube.com/@ojldf", kind: "youtube", primary: true },
      { label: "Reggae Global Stream", url: "https://reggaeglobalradio.com/stream", kind: "radio" },
    ],
  },
];

function findEpisode(seriesId: string, date: Date) {
  return EPISODES.find((e) => e.seriesId === seriesId && sameDay(e.date, date));
}

function resolveEventsForDate(date: Date): ResolvedEvent[] {
  const results: ResolvedEvent[] = [];

  for (const s of SERIES) {
    if (s.recurringRule === "weekly" && typeof s.recurringDay === "number") {
      if (date.getDay() !== s.recurringDay) continue;

      const ep = findEpisode(s.id, date);

      results.push({
        id: `${s.id}-${format(date, "yyyy-MM-dd")}`,
        seriesId: s.id,
        date,
        title: ep?.title ?? s.title,
        type: s.type,
        time: ep?.time ?? s.time,
        platform: s.platform,
        image: s.image,
        description: ep?.description ?? s.defaultDescription,
        agenda: ep?.agenda,
        links: ep?.links ?? s.defaultLinks,
      });
    }

    if (s.recurringRule === "monthly-last-saturday") {
      if (!isLastSaturdayOfMonth(date)) continue;

      const ep = findEpisode(s.id, date);

      results.push({
        id: `${s.id}-${format(date, "yyyy-MM-dd")}`,
        seriesId: s.id,
        date,
        title: ep?.title ?? s.title,
        type: s.type,
        time: ep?.time ?? s.time,
        platform: s.platform,
        image: s.image,
        description: ep?.description ?? s.defaultDescription,
        agenda: ep?.agenda,
        links: ep?.links ?? s.defaultLinks,
      });
    }
  }

  return results;
}

/* -------------------------------------------------------------------------- */
/*                             Small UI Primitives                            */
/* -------------------------------------------------------------------------- */

function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("rounded-2xl bg-white", className)}>{children}</div>;
}

function CardHeader({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

function CardContent({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

function Button({
  variant = "solid",
  size = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>
 & {
  variant?: "solid" | "outline";
  size?: "default" | "icon";
}) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const sizes = size === "icon" ? "h-10 w-10 rounded-xl" : "h-10 px-4 rounded-xl";
  const variants =
    variant === "outline"
      ? "border border-gray-200 bg-white hover:bg-gray-50 focus:ring-gray-200"
      : "bg-[#00843D] text-white hover:bg-[#006930] focus:ring-[#00843D]/30";

  return <button className={cn(base, sizes, variants, className)} {...props} />;
}

function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div className={cn("flex items-center justify-center bg-gray-200", className)}>
        <CalendarIcon className="h-12 w-12 text-gray-400" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={cn("object-cover", className)}
    />
  );
}

/* ------------------------------- Simple Modal ------------------------------ */

function Modal({
  open,
  onClose,
  title,
  children,
}: React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title?: string;
}>) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
        aria-label="Close modal overlay"
      />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">{title && <h3 className="text-xl font-bold">{title}</h3>}</div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function EventsPage() {
  const [viewMode, setViewMode] = React.useState<"calendar" | "list">("calendar");
  const [currentDate, setCurrentDate] = React.useState(() => new Date());
  const [selectedEvent, setSelectedEvent] = React.useState<ResolvedEvent | null>(null);

  const { monthStart, days: calendarDays } = React.useMemo(
    () => getCalendarDays(currentDate),
    [currentDate]
  );

  const prevMonth = () => setCurrentDate((d) => subMonths(d, 1));
  const nextMonth = () => setCurrentDate((d) => addMonths(d, 1));
  const goToToday = () => setCurrentDate(new Date());

  const openPrimaryLink = (event: ResolvedEvent) => {
    const primary = event.links?.find((l) => l.primary)?.url ?? event.links?.[0]?.url;
    if (!primary) return;

    if (primary.startsWith("http")) {
      window.open(primary, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = primary;
    }
  };

  // For list view: show episodes from Jan 10, 2026 onward, plus any future generated occurrences.
  // Simple approach: list only the explicit EPISODES, sorted.
  const episodeList: ResolvedEvent[] = React.useMemo(() => {
    const items: ResolvedEvent[] = [];

    for (const ep of EPISODES) {
      const series = SERIES.find((s) => s.id === ep.seriesId);
      if (!series) continue;

      items.push({
        id: `${series.id}-${format(ep.date, "yyyy-MM-dd")}`,
        seriesId: series.id,
        date: ep.date,
        title: ep.title ?? series.title,
        type: series.type,
        time: ep.time ?? series.time,
        platform: series.platform,
        image: series.image,
        description: ep.description ?? series.defaultDescription,
        agenda: ep.agenda,
        links: ep.links ?? series.defaultLinks,
      });
    }

    // Sort by date ascending
    items.sort((a, b) => a.date.getTime() - b.date.getTime());
    return items;
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Events</h1>

          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setViewMode("calendar")}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold",
                viewMode === "calendar"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              Calendar
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold",
                viewMode === "list"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {viewMode === "calendar" ? (
          <Card className="border border-gray-200 shadow-xl">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#00843D]">
                    {format(currentDate, "MMMM yyyy")}
                  </h2>

                  <div className="flex gap-1">
                    <Button variant="outline" size="icon" onClick={prevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" onClick={goToToday} className="ml-2">
                      Today
                    </Button>
                  </div>
                </div>

                {/* Legend */}
                <div className="hidden items-center gap-4 text-sm md:flex">
                  <div className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-full", getLegendDot("broadcast"))} />
                    <span>Broadcasts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-full", getLegendDot("in-person"))} />
                    <span>In-Person</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-full", getLegendDot("community"))} />
                    <span>Community</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <div className="p-0">
              {/* Weekday header */}
              <div className="grid grid-cols-7 border-b bg-gray-50">
                {daysOfWeek.map((day) => (
                  <div key={day} className="py-3 text-center text-sm font-semibold text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 auto-rows-fr gap-px bg-gray-200">
                {calendarDays.map((day) => {
                  const dayEvents = resolveEventsForDate(day);
                  const inMonth = isSameMonth(day, monthStart);
                  const today = isToday(day);

                  return (
                    <div
                      key={day.toISOString()}
                      className={cn(
                        "min-h-[120px] bg-white p-2 transition-colors hover:bg-gray-50",
                        !inMonth && "bg-gray-50/60 text-gray-400",
                        today && "bg-blue-50/30"
                      )}
                    >
                      <div className="mb-1 flex items-start justify-between">
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                            today && "bg-[#00843D] text-white"
                          )}
                        >
                          {format(day, "d")}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {dayEvents.map((event) => (
                          <button
                            key={event.id}
                            type="button"
                            onClick={() => setSelectedEvent(event)}
                            className={cn(
                              "w-full truncate rounded px-2 py-1 text-left text-xs font-medium transition-all hover:brightness-95",
                              "border-l-2",
                              getEventBg(event.type),
                              getEventBorder(event.type)
                            )}
                          >
                            <span className="hidden md:inline">{event.time.split(" ")[0]} </span>
                            {event.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Episodes (starting Jan 10, 2026)</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {episodeList.map((event) => {
                const badgeClass = "bg-[#00843D] text-white";

                return (
                  <Card
                    key={event.id}
                    className="overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback src={event.image} alt={event.title} className="h-full w-full" />
                      <span className={cn("absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold", badgeClass)}>
                        Episode
                      </span>
                    </div>

                    <CardContent>
                      <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                      <p className="mb-3 text-sm text-gray-600">{format(event.date, "MMMM d, yyyy")}</p>

                      {event.description && (
                        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                      )}

                      <div className="mb-4 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#00843D]" />
                          <span>{event.time}</span>
                        </div>

                        {event.platform && (
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-[#00843D]" />
                            <span>{event.platform}</span>
                          </div>
                        )}
                      </div>

                      <Button onClick={() => setSelectedEvent(event)} className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      <Modal open={!!selectedEvent} onClose={() => setSelectedEvent(null)} title={selectedEvent?.title}>
        {selectedEvent && (
          <div className="space-y-4">
            <div className={cn("inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", getEventBg(selectedEvent.type))}>
              {selectedEvent.type === "broadcast"
                ? "Broadcast"
                : selectedEvent.type === "in-person"
                ? "In-Person Event"
                : "Community Event"}
            </div>

            <p className="text-sm text-gray-600">{format(selectedEvent.date, "EEEE, MMMM d, yyyy")}</p>

            {selectedEvent.image && (
              <div className="h-48 w-full overflow-hidden rounded-xl">
                <ImageWithFallback src={selectedEvent.image} alt={selectedEvent.title} className="h-full w-full" />
              </div>
            )}

            {selectedEvent.description && (
              <p className="text-base text-gray-700">{selectedEvent.description}</p>
            )}

            {/* Agenda */}
            {selectedEvent.agenda?.length ? (
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Agenda</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {selectedEvent.agenda.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-200 bg-white p-4">
                <h4 className="mb-1 text-sm font-semibold text-gray-900">Agenda</h4>
                <p className="text-sm text-gray-600">Agenda will be posted soon.</p>
              </div>
            )}

            {/* Details */}
            <div className="space-y-3 rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#00843D]" />
                <span className="font-medium">{selectedEvent.time}</span>
              </div>

              {selectedEvent.platform && (
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-[#00843D]" />
                  <span>{selectedEvent.platform}</span>
                </div>
              )}
            </div>

            {/* Links */}
            {selectedEvent.links?.length ? (
              <div className="space-y-2">
                {selectedEvent.links.map((link) => (
                  <button
                    key={link.url}
                    type="button"
                    onClick={() => {
                      if (link.url.startsWith("http")) {
                        window.open(link.url, "_blank", "noopener,noreferrer");
                      } else {
                        window.location.href = link.url;
                      }
                    }}
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
                      getLinkButtonClass(link.kind)
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ) : null}

            <div className="flex justify-end gap-3 pt-1">
              <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
              <Button onClick={() => openPrimaryLink(selectedEvent)}>
                Open
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Missing Helper Fix                              */
/* -------------------------------------------------------------------------- */

function openPrimaryLink(event: ResolvedEvent) {
  const primary = event.links?.find((l) => l.primary)?.url ?? event.links?.[0]?.url;
  if (!primary) return;

  if (primary.startsWith("http")) {
    window.open(primary, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = primary;
  }
}
