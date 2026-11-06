import type { Metadata } from "next";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/page-intro";
import { hours, venue } from "@/lib/content";

export const metadata: Metadata = { title: "Info & Kontakt" };

export default function InfoPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
      <PageIntro eyebrow="Info & Kontakt" title="Hinkommen, anrufen, bleiben.">
        <p>
          {venue.place}. Telefon {venue.phone}, ab 14:00. Während einer
          Veranstaltung ist das Telefon nicht besetzt. E-Mail {venue.email},
          jederzeit. Gruppen ab 10 Personen können auch ausserhalb der
          Öffnungszeiten anfragen.
        </p>
      </PageIntro>

      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium">Öffnungszeiten</h2>
          <dl className="mt-4 divide-y divide-border">
            {hours.map((row) => (
              <div key={row.day} className="grid gap-1 py-3 text-sm sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-medium">{row.day}</dt>
                <dd className="text-muted-foreground">{row.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            An Tagen mit einer Veranstaltung ist von 17:00 bis 23:00 geöffnet.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/media/venue/zeughaus.jpg"
            alt="Zeughausstrasse vor dem Zeughaus 1"
            className="h-56 w-full rounded-xl object-cover"
          />
          <h2 className="text-2xl font-medium">Anreise</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Buslinie 4, Haltestelle Zeughaus, direkt vor dem Haus. Zurück zum
            Bahnhof in etwa vier Minuten, mit Halt beim Technikum. Zu Fuss vom
            Bahnhof rund 15 Minuten. Vor der Tür darf zum Ein- und Ausladen kurz
            gehalten werden. Parkplätze auf dem Gelände sind vermietet. Das
            Parkhaus Teuchelweiher ist in der Nähe Tag und Nacht offen.
          </p>
          <h2 className="text-2xl font-medium">Zugang</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Mit einem üblichen Rollstuhl ist der Besuch problemlos. Grosse
            Elektrorollstühle sind eher schwierig und sollten vorher angemeldet
            werden.
          </p>
        </div>
      </section>

      <section className="max-w-xl">
        <h2 className="text-2xl font-medium">Newsletter</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Auf der heutigen Website kann der Newsletter abonniert werden. Hier ist
          das Formular nur der Entwurf.
        </p>
        <div className="mt-6">
          <DemoForm
            submitLabel="Newsletter vormerken"
            success="Die Adresse ist in dieser Demo notiert. Es wurde kein Newsletter versendet."
            fields={[{ id: "email", label: "E-Mail", type: "email", required: true }]}
          />
        </div>
      </section>
    </main>
  );
}
