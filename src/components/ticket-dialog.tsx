"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ticketCategories } from "@/lib/content";

export function TicketDialog({ title }: { title: string }) {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setChoice(null);
      }}
    >
      <DialogTrigger render={<Button type="button" className="h-11" />}>
        Ticket & Platz reservieren
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Ticket & Platz reservieren</DialogTitle>
          <DialogDescription>
            {title}. In der fertigen Website öffnet dieser Schritt das
            Eventfrog-Overlay. Preise legt der Verein mit Eventfrog fest.
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-2">
          {ticketCategories.map((category) => {
            const selected = choice === category.id;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  className="w-full rounded-lg border border-border px-3 py-3 text-left hover:border-primary data-[selected=true]:border-primary"
                  data-selected={selected}
                  onClick={() => setChoice(category.id)}
                >
                  <span className="block font-medium">{category.title}</span>
                  <span className="mt-1 block text-muted-foreground">{category.detail}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {choice && (
          <p role="status" className="text-sm leading-6">
            Für die Demo vorgemerkt:{" "}
            {ticketCategories.find((category) => category.id === choice)?.title}. Ein
            Kauf findet hier nicht statt.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
