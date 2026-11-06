export const project = {
  name: "ESSE-Musicbar",
  repositoryUrl: "https://github.com/seidenraupe/ESSE-Musicbar",
  localPath:
    "C:\\Users\\thoma\\inspiroo gmbh\\KI-Projekte - Projekte\\ESSE-Musicbar",
  devPort: 4317,
} as const;

export type HealthReport = {
  ok: true;
  project: typeof project.name;
  status: "awaiting-briefing";
  checkedAt: string;
};

export function healthReport(now = new Date()): HealthReport {
  return {
    ok: true,
    project: project.name,
    status: "awaiting-briefing",
    checkedAt: now.toISOString(),
  };
}

export function formatCheckedAt(iso: string) {
  return new Intl.DateTimeFormat("de-CH", {
    timeZone: "Europe/Zurich",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}
