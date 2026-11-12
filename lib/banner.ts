/**
 * Home page show banner (the red strip under the hero).
 *
 * Updated automatically by the OJLDF show-day cloud routine:
 * - "live":  set on show day once the agenda/link is in the RWR Google Doc
 * - "recap": set after the show ends, with watchUrl pointing to the recording
 */
export type ShowBanner = {
  mode: "live" | "recap";
  /** "Reason With Rattigan" (Sat) or "Come Reason With Rattigan" (Wed) */
  title: string;
  /** Show date, YYYY-MM-DD */
  date: string;
  /** Shown on the badge in live mode, e.g. "3 PM EST" */
  startTime: string;
  /** Lecture topics, shown joined with " • " */
  topics: string[];
  /** Live stream link (live mode) or recording link (recap mode) */
  watchUrl: string;
};

export const SHOW_BANNER: ShowBanner = {
  mode: "recap" as ShowBanner["mode"],
  title: "Come Reason With Rattigan",
  date: "2026-11-11",
  startTime: "8 PM EST",
  topics: ["BASICS OF STANDING ORDERS: SESSION UNDERWAY. MEMBERS OF PARLIAMENT, KINDLY BE PRESENT."],
  watchUrl: "https://www.youtube.com/live/GWWrLI9MAkM?si=kbgyFqjPq9O5PQwC",
};
