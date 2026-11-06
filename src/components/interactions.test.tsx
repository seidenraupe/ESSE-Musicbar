import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DemoForm } from "./demo-form";
import { SiteHeader } from "./site-header";
import { TicketDialog } from "./ticket-dialog";

describe("interactions", () => {
  test("öffnet die Ticket-Auswahl und merkt eine Kategorie vor", async () => {
    render(<TicketDialog title="Lines in Space" />);
    fireEvent.click(screen.getByRole("button", { name: "Ticket & Platz reservieren" }));
    fireEvent.click(await screen.findByRole("button", { name: /Genuss-Ticket/ }));
    expect(screen.getByRole("status").textContent).toContain("Ein Kauf findet hier nicht statt");
  });

  test("bestätigt das Formular ohne die Seite zu verlassen", () => {
    render(
      <DemoForm
        fields={[{ id: "email", label: "E-Mail", type: "email", required: true }]}
        submitLabel="Newsletter vormerken"
        success="Die Adresse ist in dieser Demo notiert."
      />,
    );
    fireEvent.change(screen.getByLabelText("E-Mail"), {
      target: { value: "demo@esse.bar" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Newsletter vormerken" }));
    expect(screen.getByRole("status").textContent).toContain("notiert");
  });

  test("zeigt die Navigation im Menü", () => {
    render(<SiteHeader />);
    fireEvent.click(screen.getByRole("button", { name: "Menü öffnen" }));
    expect(screen.getAllByRole("link", { name: "Bar & Küche" }).length).toBeGreaterThan(1);
    expect(screen.getAllByRole("link", { name: "Vereine" }).length).toBeGreaterThan(1);
  });
});
