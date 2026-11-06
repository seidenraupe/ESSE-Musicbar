import Link from "next/link";
import { TicketDialog } from "@/components/ticket-dialog";
import { venue } from "@/lib/content";
import { formatEventDate, upcomingConcerts, zurichToday } from "@/lib/programme";

export default function Home() {
  const today = zurichToday();
  const next = upcomingConcerts(today).slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/media/venue/concert.jpg"
          alt="Konzertabend in der ESSE: Band auf der kleinen Bühne, Publikum an Tischen unter den Holzbalken"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/20" />
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-end gap-5 px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Where Music Lives
          </p>
          <h1 className="max-w-3xl text-5xl leading-none font-medium tracking-tight sm:text-7xl">
            Live im Zeughaus.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-foreground/90">
            Über 150 Konzerte im Jahr, Jazz, Blues und Folk & More, an etwa 50
            Tischen im Zeughaus 1. Ab 2027 teilen sich Jazz-Verein und Draft
            Brothers die Gastgeberrolle.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programm"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Programm & Tickets
            </Link>
            <Link
              href="/uebergang"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background/70 px-4 text-sm font-medium"
            >
              Kooperation ab 2027
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <h2 className="text-3xl font-medium tracking-tight">Als Nächstes</h2>
          <ul className="mt-6 flex flex-col gap-5">
            {next.map((concert) => (
              <li key={concert.slug} className="border-t border-border pt-5">
                <p className="text-sm text-primary">
                  {concert.date === today ? "Heute" : formatEventDate(concert.date)} · {concert.time} Uhr · {concert.genre}
                </p>
                <Link href={`/programm/${concert.slug}`} className="mt-1 block text-2xl leading-snug hover:text-primary">
                  {concert.title}
                </Link>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{concert.summary}</p>
                <div className="mt-4">
                  <TicketDialog title={concert.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <h2 className="text-lg font-medium">Fester Platz statt Kollekte</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Heute gilt auf der Live-Seite «Jedes Nötli zellt», empfohlenes Minimum
            CHF 30. Der Entwurf zeigt den geplanten Vorverkauf: Sitzplatz und
            Einlass sind mit dem Ticket gesichert.
          </p>
          <Link href="/programm" className="mt-4 inline-block text-sm text-primary">
            Zum Spielplan
          </Link>
        </aside>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid w-full max-w-6xl md:grid-cols-2">
          <img
            src="/media/venue/bar.jpg"
            alt="Bar der ESSE mit roter Rückwand, Gläsern und Flaschen"
            className="h-80 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center gap-4 px-4 py-12 sm:px-10">
            <p className="text-xs tracking-[0.18em] text-primary uppercase">Bar & Küche</p>
            <h2 className="text-3xl font-medium tracking-tight">Essen vor dem Konzert.</h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Mittwochs ein dreigängiger Mittagstisch für CHF 29.50. Am Konzertabend
              das Bandmenü für CHF 39.50, wenn es bei der Reservation gewählt wird.
              Donnerstag, Freitag und Sonntag Café-Bar ab 17:00.
            </p>
            <Link href="/bar" className="text-sm font-medium text-primary">
              Karte und Reservation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-3">
        {[
          {
            href: "/vereine",
            title: "Zwei Vereine, zwei Aufgaben",
            text: "Der Jazz-Verein macht das Programm. Der Förderverein sichert Gagen, Technik und besondere Projekte.",
          },
          {
            href: "/location",
            title: "Zeughaus mieten",
            text: `Geschlossene Gesellschaften für bis zu ${venue.seats} Personen. Donnerstag, Freitag und Sonntag bleiben den Konzerten.`,
          },
          {
            href: "/info",
            title: "Anreise und Zugang",
            text: "Bus 4, Haltestelle Zeughaus. Mit einem üblichen Rollstuhl ist der Raum zugänglich.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary"
          >
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
