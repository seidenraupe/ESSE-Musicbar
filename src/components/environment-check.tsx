"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  formatCheckedAt,
  type HealthReport,
} from "@/lib/project";

type Status =
  | { kind: "idle" }
  | { kind: "checking" }
  | { kind: "ready"; checkedAt: string }
  | { kind: "error" };

export function EnvironmentCheck() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function checkEnvironment() {
    setStatus({ kind: "checking" });
    try {
      const response = await fetch("/api/health");
      if (!response.ok) {
        throw new Error("Health check failed");
      }
      const body = (await response.json()) as HealthReport;
      if (!body.ok || !body.checkedAt) {
        throw new Error("Health check failed");
      }
      setStatus({ kind: "ready", checkedAt: body.checkedAt });
    } catch {
      setStatus({ kind: "error" });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p role="status" className="min-h-12 text-sm leading-6 text-muted-foreground">
        {status.kind === "idle" && "Noch nicht geprüft."}
        {status.kind === "checking" && "Prüfe den Entwicklungsserver…"}
        {status.kind === "ready" &&
          `Der Entwicklungsserver antwortet. Geprüft um ${formatCheckedAt(status.checkedAt)} (Zürich). Die Umgebung ist bereit für das Briefing.`}
        {status.kind === "error" &&
          "Der Entwicklungsserver hat nicht geantwortet. Starte ihn mit npm run dev und prüfe erneut."}
      </p>
      <Button
        type="button"
        size="lg"
        className="h-11 w-full sm:w-auto"
        disabled={status.kind === "checking"}
        onClick={checkEnvironment}
      >
        {status.kind === "checking" ? "Prüfe…" : "Umgebung prüfen"}
      </Button>
    </div>
  );
}
