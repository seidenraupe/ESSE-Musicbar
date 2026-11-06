import { EnvironmentCheck } from "@/components/environment-check";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { project } from "@/lib/project";

const commands = [
  "npm install",
  "npm run dev",
  "npm test",
  "npm run lint",
  "npm run typecheck",
  "npm run build",
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
      <header className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Entwicklungs- und Testumgebung
          </p>
          <p className="mt-2 font-heading text-3xl tracking-tight">ESSE</p>
        </div>
        <a
          className="text-sm text-foreground underline-offset-4 hover:underline"
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
        >
          seidenraupe/ESSE-Musicbar
        </a>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            ESSE-Musicbar
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Die neue Website wird hier entwickelt und getestet. Seiten, Inhalte
            und Gestaltung folgen mit dem Briefing. Entwicklungsserver, Tests
            und Build sind bereits eingerichtet.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Serverstatus</CardTitle>
            <CardDescription>
              Prüft, ob diese Umgebung auf Anfragen antwortet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EnvironmentCheck />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Repository</CardTitle>
            <CardDescription>Quelle für Cloud und lokal.</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              className="text-sm break-all underline-offset-4 hover:underline"
              href={project.repositoryUrl}
            >
              {project.repositoryUrl}
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lokaler Ordner</CardTitle>
            <CardDescription>
              Checkout auf dem Windows-Rechner.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="block text-sm leading-6 break-all">
              {project.localPath}
            </code>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Befehle</CardTitle>
            <CardDescription>Port {project.devPort} für den Server.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-1">
              {commands.map((command) => (
                <li key={command}>
                  <code className="text-sm">{command}</code>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
