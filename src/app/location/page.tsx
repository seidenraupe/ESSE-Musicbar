import type { Metadata } from "next";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Location & Mieten" };

const prices = [
  ["Reservation inklusive Vorbereitung und Reinigung", "CHF 750"],
  ["Dasselbe für Mitglieder", "CHF 550"],
  ["Verlängerung bis 02:00", "CHF 150"],
  ["Verlängerung bis 04:00", "CHF 450"],
  ["Betreuung, zwei Personen pro Stunde", "CHF 100"],
  ["Jede weitere Person pro Stunde", "CHF 50"],
  ["Konzertflügel", "CHF 120"],
  ["Jazz-Schlagzeug ohne Becken", "CHF 50"],
  ["Beamer", "CHF 80"],
  ["Gasgrill inklusive Gas und Reinigung", "CHF 120"],
  ["Zapfengeld pro mitgebrachte Flasche", "CHF 23"],
];

export default function LocationPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
      <PageIntro eyebrow="Location & Mieten" title="Das Zeughaus für eigene Anlässe.">
        <p>
          Ausserhalb der öffentlichen Konzerte kann die ESSE für geschlossene
          Gesellschaften reserviert werden. Donnerstag, Freitag und Sonntag sind
          für Live-Konzerte belegt. Bis etwa 50 Personen sitzen bequem, insgesamt
          finden rund 70 Personen Platz.
        </p>
      </PageIntro>

      <img
        src="/media/venue/zeughaus.jpg"
        alt="Das Zeughaus 1 von aussen, mit dem ESSE-Pult vor dem Gebäude"
        className="h-72 w-full rounded-xl object-cover sm:h-96"
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4 text-sm leading-6 text-muted-foreground">
          <h2 className="text-2xl font-medium text-foreground">Was im Raum steht</h2>
          <p>
            Kleine Bühne, 4 auf 4 Meter und 30 Zentimeter hoch. Gestimmter
            Yamaha-Konzertflügel, Kammerton 442 Hz, der nicht weggestellt werden
            kann. Giannini-Jazzschlagzeug ohne Becken, Bass- und Gitarrenverstärker,
            vier Gesangsmikrofone, Yamaha-Mischpult TF1 und eine fest eingebaute
            Anlage von QSC. Eine eigene PA ist nicht vorgesehen. Für aufwendigere
            Produktionen kann gegen Kostenbeteiligung eine Tontechnikerin oder ein
            Tontechniker dazugebucht werden.
          </p>
          <p>
            Die Küche reicht vom Apéro riche und Buffet bis zum mehrgängigen Menü.
            Buffets eignen sich bis etwa 50 Personen, Menüs bis etwa 30. Mitgebrachte
            Getränke und Speisen werden mit Zapfen- oder Tortengeld verrechnet.
            Für Kinder unter 10 Jahren fehlen Kinderstühle, Spielzeug und ein
            Wickelraum.
          </p>
          <p>
            Zwei Parkplätze auf dem Gelände, sonst Parkhaus Teuchelweiher. Besser
            mit dem Bus 4 bis zur Haltestelle Zeughaus.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Preise</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Inklusive Mehrwertsteuer, Stand August 2024, von der heutigen Website.
          </p>
          <dl className="mt-4 divide-y divide-border">
            {prices.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                <dt>{label}</dt>
                <dd className="shrink-0 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="grid gap-8 rounded-xl bg-card p-5 ring-1 ring-foreground/10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium">Terminanfrage</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Wenn im Kalender bereits eine Veranstaltung steht, ist der Termin
            vergeben. Das Team ist in der Regel am Mittwoch- und am
            Sonntagnachmittag vor Ort, telefonisch ab 14:00.
          </p>
        </div>
        <DemoForm
          submitLabel="Anfrage senden"
          success="Die Anfrage ist in dieser Demo notiert. Das ESSE-Team hat noch nichts erhalten."
          fields={[
            { id: "first", label: "Vorname", required: true },
            { id: "last", label: "Nachname", required: true },
            { id: "email", label: "E-Mail", type: "email", required: true },
            { id: "phone", label: "Telefon", type: "tel", required: true },
            { id: "when", label: "Datum", type: "date", required: true },
            { id: "guests", label: "Erwartete Gäste", type: "number", required: true },
            {
              id: "kind",
              label: "Art des Anlasses",
              required: true,
              options: ["Geburtstag", "Jubiläum", "Firmenanlass", "Präsentation", "Privatkonzert", "Anderes"],
            },
            {
              id: "catering",
              label: "Bewirtung",
              required: true,
              options: [
                "Essen und Getränke",
                "Apéro riche",
                "Nur Getränke und Knabbereien",
                "Gäste bestellen an der Bar",
                "Eigener Caterer",
              ],
            },
            { id: "notes", label: "Bemerkungen", multiline: true },
          ]}
        />
      </section>
    </main>
  );
}
