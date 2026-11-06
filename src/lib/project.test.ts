import { describe, expect, test } from "vitest";
import { formatCheckedAt, healthReport, project } from "./project";

describe("healthReport", () => {
  test("meldet die Umgebung als bereit für das Briefing", () => {
    const report = healthReport(new Date("2026-11-06T09:30:00.000Z"));

    expect(report).toEqual({
      ok: true,
      project: "ESSE-Musicbar",
      status: "awaiting-briefing",
      checkedAt: "2026-11-06T09:30:00.000Z",
    });
  });
});

describe("formatCheckedAt", () => {
  test("zeigt die Prüfzeit in Zürich", () => {
    expect(formatCheckedAt("2026-11-06T09:30:00.000Z")).toBe("06.11.2026, 10:30");
  });
});

describe("project", () => {
  test("zeigt auf das GitHub-Repository und den lokalen Ordner", () => {
    expect(project.repositoryUrl).toBe(
      "https://github.com/seidenraupe/ESSE-Musicbar",
    );
    expect(project.localPath).toContain("ESSE-Musicbar");
    expect(project.devPort).toBe(4317);
  });
});
