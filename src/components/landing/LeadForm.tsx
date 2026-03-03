"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/links";

type Props = {
  className?: string;
  ctaLabel: string;
  offerLabel: string;
};

export function LeadForm({ className, ctaLabel, offerLabel }: Props) {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [goal, setGoal] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const msg = [
      "Olá, vim pela landing page da DC Mídias.",
      `Interesse: ${offerLabel}`,
      name ? `Nome: ${name}` : null,
      company ? `Empresa: ${company}` : null,
      contact ? `Contato: ${contact}` : null,
      goal ? `Objetivo: ${goal}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = whatsappHref(msg);
  }

  const input =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[color:rgba(232,62,45,0.35)]";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-3", className)}>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className={input}
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          className={input}
          placeholder="WhatsApp ou e-mail"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <input
        className={input}
        placeholder="Empresa / nicho"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className={cn(input, "min-h-[96px] resize-none")}
        placeholder="Qual seu objetivo nos próximos 90 dias?"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <Button type="submit" className="w-full">
        {ctaLabel}
      </Button>
      <p className="text-xs leading-5 text-muted">
        Ao enviar, você será direcionado para o WhatsApp com a mensagem pronta.
      </p>
    </form>
  );
}


