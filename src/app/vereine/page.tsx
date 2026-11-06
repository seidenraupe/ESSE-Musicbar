import type { Metadata } from "next";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/page-intro";
import { board } from "@/lib/content";

export const metadata: Metadata = { title: "Vereine & Support" };

export default function VereinePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
      <PageIntro eyebrow="Vereine & Support" title="Wer das Haus trägt.">
        <p>
          Zwei Vereine, klar getrennt. Der Jazz-Verein ESSE Winterthur betreibt
          seit 2005 die Musicbar und stellt das Programm. Der Förderverein
          ermöglicht, was der Spielplan allein nicht trägt.
        </p>
      </PageIntro>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <h2 className="text-2xl font-medium">Jazz-Verein ESSE</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Operative Seele des Clubs: Booking, Helferteam, Programm. Das
            Leitbild stellt Jazz, Blues und Folk & More ins Zentrum, mit Schwerpunkt
            auf der regionalen Szene. «Young People on Stage» holt Nachwuchs von
            Musikschule, Konservatorium und PROVA auf die Bühne. Daneben gibt es
            Let’s Dance 45 und Jam-Sessions. Stadt Winterthur und Kanton Zürich
            unterstützen den Verein.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Mitmachen heisst Bar, Technik oder Verein. Die heutige Anmeldung kennt
            Einzel, Partner, Gönner oder Mäzen und Sponsoring. Beiträge für diese
            Stufen stehen auf der Live-Seite nicht.
          </p>
        </article>
        <article className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <h2 className="text-2xl font-medium">Förderverein ESSE</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Einzelmitgliedschaft CHF 320 im Jahr, Paarmitgliedschaft CHF 480.
            Die Beiträge sind steuerlich abzugsfähig. Mitglieder sind zugleich
            Freimitglieder des Jazz-Vereins, erhalten dreimal jährlich
            Konzertgutscheine und sind an Generalversammlung, September-Anlass
            und am Paella-Essen von César Redondo dabei. Für die Miete privater
            Anlässe gilt der Mitgliederpreis.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Der Verein stützt Bühnentechnik, Darlehen, den Gastraum und die
            Defizitgarantie besonderer Projekte. Sitz: Pflanzschulstrasse 3, 8400
            Winterthur. Bankverbindung ZKB, IBAN CH31 0070 0114 8038 9217 0.
          </p>
        </article>
      </section>

      <section className="rounded-xl border border-dashed border-primary/50 p-5">
        <h2 className="text-xl font-medium">Gönner-Stufen, noch offen</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Das Briefing schlägt zusätzlich Bronze, Silber und Gold vor, mit klaren
          Gegenleistungen wie Freikarten und einem Gönner-Apéro. Diese Stufen und
          ihre Beiträge sind noch nicht beschlossen. Auf der heutigen Website
          gelten die Beträge oben. Ein 1-Klick-Beitritt mit TWINT, Karte oder LSV
          ist vorgesehen und in diesem Entwurf nur als Formular sichtbar.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-medium">Vorstand des Jazz-Vereins</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die Kommunikation im Vorstand ist vakant. Porträts von der heutigen Website.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((person) => (
            <li key={person.name} className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
              <img src={person.image} alt="" className="h-64 w-full object-cover object-top" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{person.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{person.role}</p>
                {person.email && (
                  <a className="mt-2 inline-block text-sm text-primary" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-xl">
        <h2 className="text-2xl font-medium">Mitglied werden</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Interesse an einer Aktivmitgliedschaft im Jazz-Verein oder an der
          Förderverein-Mitgliedschaft. Die Zahlung folgt später, nicht in dieser Demo.
        </p>
        <div className="mt-6">
          <DemoForm
            submitLabel="Interesse anmelden"
            success="Der Wunsch ist in dieser Demo notiert. Es wurde keine Mitgliedschaft eröffnet und nichts bezahlt."
            fields={[
              { id: "name", label: "Name", required: true },
              { id: "email", label: "E-Mail", type: "email", required: true },
              {
                id: "kind",
                label: "Mitgliedschaft",
                required: true,
                options: [
                  "Förderverein, Einzel, CHF 320",
                  "Förderverein, Paar, CHF 480",
                  "Jazz-Verein, aktiv mithelfen",
                  "Gönner-Stufe, sobald sie feststeht",
                ],
              },
              { id: "note", label: "Nachricht", multiline: true },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
