import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProgrammeBrowser } from "@/components/programme-browser";

export const metadata: Metadata = { title: "Programm & Tickets" };

export default function ProgrammPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
      <PageIntro eyebrow="Programm & Tickets" title="Der Spielplan.">
        <p>
          Ausschnitt der öffentlichen Termine ab November 2026, übernommen von
          der heutigen Website. Der Filter folgt dem Briefing: Jazz, Blues, Soul
          und Special, ergänzt um Folk & More, die dritte Schiene des
          musikalischen Leitbilds.
        </p>
      </PageIntro>
      <ProgrammeBrowser />
      <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
        Wochentags beginnt das Konzert um 20:15, an Sonn- und Feiertagen um 19:30.
        Zwei Sets à etwa 45 Minuten. Mittwochs um 12:00 läuft separat der
        Mittagstisch, beschrieben unter Bar & Küche.
      </p>
    </main>
  );
}
