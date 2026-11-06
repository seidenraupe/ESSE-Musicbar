import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./page";

describe("Home", () => {
  test("öffnet den Entwurf mit Programm, Bar und dem nächsten Konzert", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "Live im Zeughaus." })).toBeDefined();
    expect(screen.getByRole("link", { name: "Programm & Tickets" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Karte und Reservation" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Als Nächstes" })).toBeDefined();
  });
});
