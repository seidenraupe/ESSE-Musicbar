import { describe, expect, test } from "vitest";
import { ticketCategories } from "./content";
import { filterConcerts, findConcert, formatEventDate, upcomingConcerts } from "./programme";

describe("programme", () => {
  test("lässt vergangene Daten weg und sortiert den Rest", () => {
    const titles = upcomingConcerts("2026-11-12").map((concert) => concert.slug);
    expect(titles[0]).toBe("jochen-baldes-basho");
    expect(titles).not.toContain("lines-in-space");
    expect(titles).not.toContain("hans-theessink");
  });

  test("filtert nach der Stilrichtung aus dem Briefing", () => {
    expect(filterConcerts("Blues", "2026-11-01").map((concert) => concert.slug)).toEqual([
      "hans-theessink",
    ]);
    expect(filterConcerts("Soul", "2026-11-01").map((concert) => concert.slug)).toEqual([
      "patrick-bianco-cannonsoul",
    ]);
  });

  test("formatiert das Datum für Zürich", () => {
    expect(formatEventDate("2026-11-08")).toContain("8");
    expect(formatEventDate("2026-11-08")).toContain("November");
  });

  test("findet ein Konzert und kennt die drei Ticket-Kategorien", () => {
    expect(findConcert("cash-only")?.time).toBe("19:30");
    expect(ticketCategories.map((category) => category.id)).toEqual([
      "standard",
      "genuss",
      "tavolata",
    ]);
  });
});
