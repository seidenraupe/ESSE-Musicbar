import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Kooperation 2027" };

export default function TransitionPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
      <PageIntro eyebrow="Aus dem Vorstand" title="Neue Kooperation ab 1. Januar 2027.">
        <p>
          Im Juni 2026 haben der Jazz-Verein ESSE Winterthur und die
          Draft-Brothers GmbH einen Vertrag für den gemeinsamen Betrieb ab 2027
          unterschrieben. Der Verein führt die Musicbar seit 2005 und veranstaltet
          bis zu 150 Konzerte im Jahr. Samuel Rommel und Beni Erb führen die Draft
          Brothers seit 2015 und betreiben seit 2019 im Zeughaus 1 eine Brennerei.
        </p>
      </PageIntro>
      <img
        src="/media/venue/concert.jpg"
        alt="Voller Konzertabend in der ESSE"
        className="h-72 w-full rounded-xl object-cover sm:h-[28rem]"
      />
      <div className="grid gap-8 text-base leading-7 text-muted-foreground lg:grid-cols-2">
        <p>
          Ab 2027 teilen sie sich die Gastgeberrolle: die Draft Brothers für die
          Gastronomie, der Jazz-Verein für die Musik. Bis Ende 2026 bleiben Thomas
          Wicki und Tom Schmid die Betreiber, für Gäste, Konzertbesuch und
          Musikerinnen und Musiker.
        </p>
        <p>
          Der öffentliche Auftritt soll diesen Wechsel zeigen, ohne die Kollekte
          «Jedes Nötli zellt» weiter in die Mitte zu stellen. Sitzplatz und
          Einlass werden mit dem Ticket verlässlich. Die Gastronomie bekommt einen
          eigenen Menüpunkt.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/bar" className="text-sm font-medium text-primary">
          Zur Bar & Küche
        </Link>
        <Link href="/programm" className="text-sm font-medium text-primary">
          Zum Programm
        </Link>
      </div>
    </main>
  );
}
