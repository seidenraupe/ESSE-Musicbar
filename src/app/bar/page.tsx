import type { Metadata } from "next";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Bar & Küche" };

export default function BarPage() {
  return (
    <main>
      <section className="relative">
        <img
          src="/media/venue/bar.jpg"
          alt="Blick über die Bar der ESSE, rote Rückwand und Flaschenregale"
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
      </section>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
        <PageIntro eyebrow="Bar & Küche" title="Vor dem Konzert wird gegessen.">
          <p>
            Die Gastronomie ist die zweite Säule des Hauses, nicht die Fussnote
            zum Abend. Bis Ende 2026 führen Thomas Wicki und Tom Schmid den
            Betrieb. Ab 2027 übernehmen Samuel Rommel und Beni Erb von den Draft
            Brothers die Küche und die Bar. Sie brennen seit 2019 im Zeughaus Gin
            und weitere Spirituosen.
          </p>
        </PageIntro>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
            <h2 className="text-xl font-medium">Kulinarische Mittagspause</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Jeden Mittwoch um 12:00, an langen Tischen. Drei Gänge, abwechselnd
              vegetarisch oder mit Schweizer Fleisch oder Fisch. Inklusive
              Winti-Wasser und Kaffee oder Tee. Pauschale CHF 29.50. Anmeldung
              bis am Vortag um 12:00, der Vorrat ist begrenzt. Die Bar öffnet um
              11:30.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Beispiel vom 26. August 2026, nicht die Karte dieser Woche:
              Randen-Meerrettich-Suppe, Roastbeef mit Country Fries, karamellisierte
              Aprikosen mit Vanille-Glace.
            </p>
          </article>
          <article className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
            <h2 className="text-xl font-medium">Bandmenü</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Die auftretenden Musikerinnen und Musiker essen vor dem Konzert ein
              dreigängiges Menü, unter der Woche gegen 19:00, am Sonntag gegen
              18:30. Gäste können dasselbe Menü bei der Sitzplatzreservation
              wählen, CHF 39.50. Vegetarisch, vegan, gluten- oder laktosefrei auf
              Wunsch, mindestens zwei Tage im Voraus.
            </p>
          </article>
          <article className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
            <h2 className="text-xl font-medium">Café-Bar</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Donnerstag, Freitag und Sonntag ab 17:00 Drinks und Snacks, auch
              ohne Konzertticket an den Abenden mit Live-Musik. Wein, Bier mit
              und ohne Alkohol, eigene Spirituosen. Der Leitspruch der Bar: «Wir
              haben alles ausser Rivella.» Eine feste Speisekarte gibt es nicht,
              weil das Gericht oft kurzfristig feststeht.
            </p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <img
            src="/media/venue/guests.jpg"
            alt="Gäste an der Bar der ESSE, rote Theke und Pendelleuchten"
            className="h-full max-h-96 w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-medium">Tisch reservieren</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Für den Mittagstisch und für Abende ohne Konzert. Konzertplätze
              laufen über das Ticket. Ein externes Reservationswerkzeug wie
              forAtable ist im Briefing vorgeschlagen und hier noch nicht
              angebunden.
            </p>
            <div className="mt-6">
              <DemoForm
                submitLabel="Reservation anfragen"
                success="Die Anfrage ist in dieser Demo notiert. Es wurde keine Reservation verschickt."
                fields={[
                  { id: "name", label: "Name", required: true },
                  { id: "email", label: "E-Mail", type: "email", required: true },
                  { id: "date", label: "Datum", type: "date", required: true },
                  { id: "guests", label: "Anzahl Personen", type: "number", required: true },
                  {
                    id: "occasion",
                    label: "Anlass",
                    required: true,
                    options: ["Mittagstisch", "Abend an der Bar", "Gruppe ab 10 Personen"],
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
