import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TicketDialog } from "@/components/ticket-dialog";
import { concerts } from "@/lib/content";
import { findConcert, formatEventDate } from "@/lib/programme";

export function generateStaticParams() {
  return concerts.map((concert) => ({ slug: concert.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concert = findConcert(slug);
  return { title: concert?.title ?? "Programm" };
}

export default async function ConcertPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concert = findConcert(slug);
  if (!concert) notFound();

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <article className="flex flex-col gap-5">
        <p className="text-xs tracking-[0.18em] text-primary uppercase">{concert.genre}</p>
        <h1 className="text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
          {concert.title}
        </h1>
        <p className="text-lg">
          {formatEventDate(concert.date)} · {concert.time} Uhr · Zeughaus 1
        </p>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">{concert.summary}</p>
        <p className="text-sm leading-6 text-muted-foreground">
          Wer dasselbe Menü essen möchte wie die Musikerinnen und Musiker, wählt
          bei der Reservation das Bandmenü, CHF 39.50. Die ausführliche Ankündigung
          steht auf der{" "}
          <a className="underline underline-offset-4" href={concert.sourceUrl}>
            heutigen Website
          </a>
          .
        </p>
        <Link href="/programm" className="text-sm text-primary">
          Zurück zum Spielplan
        </Link>
      </article>
      <aside className="h-fit overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <img
          src="/media/venue/stage.jpg"
          alt="Band auf der Bühne der ESSE, davor sitzendes Publikum"
          className="h-52 w-full object-cover"
        />
        <div className="flex flex-col gap-4 p-5">
          <h2 className="text-lg font-medium">Platz sichern</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Etwa 50 Sitzplätze. Der Knopf zeigt die drei Kategorien aus dem
            Briefing. Der Kauf läuft später über Eventfrog, ohne die Seite zu verlassen.
          </p>
          <TicketDialog title={concert.title} />
        </div>
      </aside>
    </main>
  );
}
