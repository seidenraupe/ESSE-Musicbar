import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "./page";

describe("Home", () => {
  test("zeigt die Entwicklungsumgebung der ESSE-Musicbar", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "ESSE-Musicbar" }),
    ).toBeDefined();
    expect(screen.getByRole("status").textContent).toContain("Noch nicht geprüft.");
    expect(
      screen.getByRole("link", { name: "seidenraupe/ESSE-Musicbar" }),
    ).toBeDefined();
  });

  test("bestätigt eine erfolgreiche Prüfung des Entwicklungsservers", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          ok: true,
          project: "ESSE-Musicbar",
          status: "awaiting-briefing",
          checkedAt: "2026-11-06T09:30:00.000Z",
        }),
      }),
    );

    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Umgebung prüfen" }));

    expect(await screen.findByText(/Der Entwicklungsserver antwortet/)).toBeDefined();
    expect(screen.getByRole("status").textContent).toContain("10:30");
    expect(screen.getByRole("status").textContent).toContain("Zürich");
  });

  test("meldet, wenn der Entwicklungsserver nicht antwortet", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: "Umgebung prüfen" }));

    expect(
      await screen.findByText(/Der Entwicklungsserver hat nicht geantwortet/),
    ).toBeDefined();
  });
});
