import Link from "next/link";
import { navigation, venue } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg">ESSE Musicbar</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{venue.place}</p>
          <p className="mt-2 text-sm">
            <a className="hover:text-primary" href={venue.phoneHref}>
              {venue.phone}
            </a>
            <span className="mx-2 text-muted-foreground">·</span>
            <a className="hover:text-primary" href={`mailto:${venue.email}`}>
              {venue.email}
            </a>
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Link href="/uebergang" className="hover:text-primary">
            Kooperation 2027
          </Link>
        </nav>
        <p className="text-sm leading-6 text-muted-foreground">
          Klickbarer Entwurf für den Vorstand. Texte und Fotos stammen aus dem
          Briefing und von{" "}
          <a className="underline underline-offset-4" href={venue.liveSite}>
            esse-musicbar.ch
          </a>
          . Ticketpreise und der Eventfrog-Kauf sind noch nicht angebunden.
        </p>
      </div>
    </footer>
  );
}
