"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Field = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number";
  required?: boolean;
  options?: string[];
  multiline?: boolean;
};

export function DemoForm({
  fields,
  submitLabel,
  success,
}: {
  fields: Field[];
  submitLabel: string;
  success: string;
}) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="text-sm leading-6">
        {success}
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <Label htmlFor={field.id}>{field.label}</Label>
          {field.options ? (
            <select
              id={field.id}
              name={field.id}
              required={field.required}
              className="h-11 rounded-lg border border-input bg-transparent px-3 text-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.multiline ? (
            <Textarea id={field.id} name={field.id} required={field.required} rows={4} />
          ) : (
            <Input
              id={field.id}
              name={field.id}
              type={field.type ?? "text"}
              required={field.required}
              className="h-11"
            />
          )}
        </div>
      ))}
      <Button type="submit" className="h-11 w-full sm:w-auto">
        {submitLabel}
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        Demo: die Eingabe bleibt in diesem Browser und wird nicht verschickt.
      </p>
    </form>
  );
}
