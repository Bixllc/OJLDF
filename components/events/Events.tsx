"use client";

import * as React from "react";
import Image from "next/image";
import {
  addMonths,
  endOfMonth,
  format,
  isSameMonth,
  isToday,
  subMonths,
} from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Video,
  X,
} from "lucide-react";

import {
  SERIES,
  daysOfWeek,
  getCalendarDays,
  nextWeeklyOccurrences,
  resolveEventsForDate,
  resolveEvent,
  isLastSaturdayOfMonth,
  type EventLink,
  type EventType,
  type ResolvedEvent,
} from "../../lib/events-data";

/* -------------------------------------------------------------------------- */
/*                                   Utils                                    */
/* -------------------------------------------------------------------------- */

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

function openLink(url: string) {
  if (url.startsWith("http")) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

function openPrimaryLink(event: ResolvedEvent) {
  const primary =
    event.links?.find((l) => l.primary)?.url ?? event.links?.[0]?.url;
  if (!primary) return;
  openLink(primary);
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
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  size?: "default" | "icon";
}) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const sizes =
    size === "icon" ? "h-10 w-10 rounded-xl" : "h-10 px-4 rounded-xl";
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
          <div className="min-w-0">
            {title && <h3 className="text-xl font-bold">{title}</h3>}
          </div>
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

  /**
   * List view:
   * Show next 12 occurrences per weekly series from today (auto)
   * plus monthly rule support if ever used.
   */
  const upcomingList: ResolvedEvent[] = React.useMemo(() => {
    const from = new Date();
    const items: ResolvedEvent[] = [];

    for (const s of SERIES) {
      if (s.recurringRule === "weekly") {
        const dates = nextWeeklyOccurrences(s, from, 12);
        for (const d of dates) items.push(resolveEvent(s, d));
      }

      if (s.recurringRule === "monthly-last-saturday") {
        const results: Date[] = [];
        let cursor = new Date(from.getFullYear(), from.getMonth(), 1);
        while (results.length < 6) {
          const monthEnd = endOfMonth(cursor);
          let day = monthEnd;
          while (day.getMonth() === cursor.getMonth()) {
            if (isLastSaturdayOfMonth(day)) {
              results.push(new Date(day));
              break;
            }
            day = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);
          }
          cursor = addMonths(cursor, 1);
        }
        for (const d of results) items.push(resolveEvent(s, d));
      }
    }

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
                            {event.agendaPending ? (
                              <span className="ml-2 opacity-70">• Agenda soon</span>
                            ) : null}
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
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Upcoming Episodes</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Recurring shows appear automatically. Add an episode entry when you have the agenda + live link.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingList.map((event) => {
                const badgeClass = event.agendaPending
                  ? "bg-gray-900 text-white"
                  : "bg-[#00843D] text-white";

                return (
                  <Card
                    key={event.id}
                    className="overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full"
                      />
                      <span
                        className={cn(
                          "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold",
                          badgeClass
                        )}
                      >
                        {event.agendaPending ? "Agenda Soon" : "Scheduled"}
                      </span>
                    </div>

                    <CardContent>
                      <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                      <p className="mb-3 text-sm text-gray-600">
                        {format(event.date, "MMMM d, yyyy")}
                      </p>

                      {event.description && (
                        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                          {event.description}
                        </p>
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
      <Modal
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
      >
        {selectedEvent && (
          <div className="space-y-4">
            <div
              className={cn(
                "inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                getEventBg(selectedEvent.type)
              )}
            >
              {selectedEvent.type === "broadcast"
                ? "Broadcast"
                : selectedEvent.type === "in-person"
                ? "In-Person Event"
                : "Community Event"}
            </div>

            <p className="text-sm text-gray-600">
              {format(selectedEvent.date, "EEEE, MMMM d, yyyy")}
            </p>

            {selectedEvent.image && (
              <div className="h-48 w-full overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="h-full w-full"
                />
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
                    onClick={() => openLink(link.url)}
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
              <Button onClick={() => openPrimaryLink(selectedEvent)}>Open</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}