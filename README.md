# ESSE-Musicbar

Entwicklungs- und Testumgebung für die neue Website der ESSE-Musicbar. Der öffentliche Auftritt folgt mit dem Briefing. Dieses Projekt stellt den Entwicklungsserver, die Tests und den Build bereit.

## Orte

- GitHub: https://github.com/seidenraupe/ESSE-Musicbar
- Lokaler Ordner: `C:\Users\thoma\inspiroo gmbh\KI-Projekte - Projekte\ESSE-Musicbar`

Der Windows-Ordner liegt auf dem eigenen Rechner. Diese Cloud-Umgebung kann ihn nicht beschreiben. Nach dem ersten Push klonst du das Repository dorthin:

```powershell
git clone https://github.com/seidenraupe/ESSE-Musicbar.git "C:\Users\thoma\inspiroo gmbh\KI-Projekte - Projekte\ESSE-Musicbar"
```

Wenn der Ordner schon existiert und leer ist:

```powershell
cd "C:\Users\thoma\inspiroo gmbh\KI-Projekte - Projekte\ESSE-Musicbar"
git clone https://github.com/seidenraupe/ESSE-Musicbar.git .
```

## Lokal starten

Voraussetzung: Node.js 22.

```bash
npm install
npm run dev
```

Der Entwicklungsserver hört auf Port **4317**. Öffne [http://localhost:4317](http://localhost:4317) und wähle **Umgebung prüfen**. Die Seite ruft `/api/health` auf und zeigt die Antwortzeit in Zürich.

## Prüfen

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

`npm test` führt Vitest einmal aus. `npm run test:watch` bleibt aktiv und prüft bei jeder Änderung.
