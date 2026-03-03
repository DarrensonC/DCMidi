import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm tracking-[0.35em] text-muted uppercase">
            DC Mídias
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Escolha a landing page
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Rotas prontas e otimizadas para mobile, com visual dark premium,
            glassmorphism e animações suaves no scroll.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-6 text-left backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-foreground">
                Assessoria de Growth Marketing
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Gestão completa para escalar com previsibilidade (R$ 3.000).
              </p>
              <div className="mt-5">
                <ButtonLink href="/assessoria-growth" className="w-full">
                  Abrir LP
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-6 text-left backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-foreground">
                Gestão de Tráfego Pago
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Tráfego qualificado e anúncios profissionais (R$ 1.500).
              </p>
              <div className="mt-5">
                <ButtonLink href="/gestao-trafego" className="w-full">
                  Abrir LP
                </ButtonLink>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-2">
            Dica: compartilhe os links direto com seu time —{" "}
            <Link href="/assessoria-growth" className="text-foreground underline">
              /assessoria-growth
            </Link>{" "}
            e{" "}
            <Link href="/gestao-trafego" className="text-foreground underline">
              /gestao-trafego
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
