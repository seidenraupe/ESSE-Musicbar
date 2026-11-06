import { concerts, type Concert, type Genre } from "@/lib/content";

/** Spielplan des Entwurfs, verankert am 6. November 2026. */
export const programmeAsOf = "2026-11-06";

export function zurichToday() {
  return programmeAsOf;
}

export function formatEventDate(isoDate: string) {
  return new Intl.DateTimeFormat("de-CH", {
    weekday: "short",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Zurich",
  }).format(new Date(`${isoDate}T12:00:00+01:00`));
}

export function upcomingConcerts(today = zurichToday(), list: Concert[] = concerts) {
  return list
    .filter((concert) => concert.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}

export function filterConcerts(genre: Genre | "Alle", today = zurichToday()) {
  const upcoming = upcomingConcerts(today);
  if (genre === "Alle") return upcoming;
  return upcoming.filter((concert) => concert.genre === genre);
}

export function findConcert(slug: string) {
  return concerts.find((concert) => concert.slug === slug);
}
