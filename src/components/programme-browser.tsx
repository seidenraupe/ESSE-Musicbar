"use client";

import Link from "next/link";
import { useState } from "react";
import { TicketDialog } from "@/components/ticket-dialog";
import { genres, type Genre } from "@/lib/content";
import { filterConcerts, formatEventDate, zurichToday } from "@/lib/programme";

const filters = ["Alle", ...genres] as const;

export function ProgrammeBrowser() {
  const [genre, setGenre] = useState<(typeof filters)[number]>("Alle");
  const today = zurichToday();
  const concerts = filterConcerts(genre as Genre | "Alle", today);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Stilrichtung">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={genre === item}
            className="rounded-full border border-border px-3 py-1.5 text-sm data-[on=true]:border-primary data-[on=true]:text-primary"
            data-on={genre === item}
            onClick={() => setGenre(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {concerts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          In dieser Stilrichtung steht im geladenen Ausschnitt kein Termin mehr an.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {concerts.map((concert) => (
            <li
              key={concert.slug}
              className="grid gap-4 rounded-xl bg-card p-4 ring-1 ring-foreground/10 md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-center"
            >
              <p className="text-sm">
                <span className="block font-medium">
                  {concert.date === today ? "Heute" : formatEventDate(concert.date)}
                </span>
                <span className="text-muted-foreground">{concert.time} Uhr</span>
              </p>
              <div>
                <p className="text-xs tracking-wide text-primary uppercase">{concert.genre}</p>
                <Link href={`/programm/${concert.slug}`} className="mt-1 block text-lg leading-snug hover:text-primary">
                  {concert.title}
                </Link>
              </div>
              <TicketDialog title={concert.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
