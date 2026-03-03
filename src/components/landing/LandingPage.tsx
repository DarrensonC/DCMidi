import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { PerformanceGraph } from "@/components/decoration/PerformanceGraph";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import type { LandingConfig } from "@/content/landing";
import { LeadForm } from "./LeadForm";

function BrandHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <Section as="div" className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/dc-midias-logo.svg"
            alt="DC Mídias"
            width={128}
            height={28}
            priority
          />
        </Link>

        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href="#metodo" variant="outline">
            Ver método
          </ButtonLink>
          <ButtonLink href="#diagnostico">Falar com a DC Mídias</ButtonLink>
        </div>
      </Section>
    </header>
  );
}

export function LandingPage({ config }: { config: LandingConfig }) {
  return (
    <main className="min-h-screen">
      <BrandHeader />

      {/* HERO */}
      <Section as="header" className="pt-14 pb-16 sm:pt-18 sm:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                {config.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {config.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                {config.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#diagnostico" className="w-full sm:w-auto">
                  {config.primaryCtaLabel}
                </ButtonLink>
                <ButtonLink
                  href="#servicos"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Ver o que está incluso
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Método", "4 pilares com rotina"],
                  ["Execução", "Performance + processo"],
                  ["Clareza", "Próximos passos objetivos"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-border bg-surface px-4 py-4 backdrop-blur-xl"
                  >
                    <p className="text-xs font-semibold text-foreground">{k}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal>
              <div className="absolute -inset-2 -z-10 opacity-70 blur-2xl [background:radial-gradient(500px_220px_at_60%_40%,rgba(232,62,45,0.34),transparent_60%)]" />
              <PerformanceGraph className="mb-5" />
              <GlassCard id="diagnostico">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Diagnóstico rápido
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Preencha e fale direto no WhatsApp.
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="shrink-0">{config.contractLabel}</Badge>
                      <Badge className="shrink-0">{config.adSpendMinimumLabel}</Badge>
                    </div>
                  </div>

                  <div className="mt-5">
                    <LeadForm
                      ctaLabel={config.primaryCtaLabel}
                      offerLabel={`${config.eyebrow} — ${config.priceLabel}`}
                    />
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* MÉTODO 4 PILARES */}
      <Section id="metodo" className="py-14 sm:py-18">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                O MÉTODO DC MÍDIAS
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                4 Pilares para previsibilidade e lucro
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              Um fluxo sequencial: diagnosticar, otimizar, escalar e extrair
              resultado com processo comercial.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {config.pillars.map((p, idx) => (
            <Reveal key={p.title} delay={0.05 * idx}>
              <GlassCard className="h-full">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-muted">
                        0{idx + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-2xl border border-border bg-surface-2 backdrop-blur-xl [box-shadow:0_0_0_1px_rgba(232,62,45,0.15),0_18px_45px_rgba(0,0,0,0.4)]" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {p.subtitle}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-muted">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVIÇOS */}
      <Section id="servicos" className="py-14 sm:py-18">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                O QUE ESTÁ INCLUSO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Execução focada em resultado
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted backdrop-blur-xl">
              <span className="font-semibold text-foreground">
                {config.priceLabel}
              </span>{" "}
              <span className="text-muted-2">•</span>{" "}
              <span>{config.contractLabel}</span>{" "}
              <span className="text-muted-2">•</span>{" "}
              <span>{config.adSpendMinimumLabel}</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((s, idx) => (
            <Reveal key={s.title} delay={0.03 * idx}>
              <GlassCard className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    {s.tag ? <Badge>{s.tag}</Badge> : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {s.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CASES */}
      <Section className="py-14 sm:py-18">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                PROVA REAL
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Cases (exemplos reais)
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              Resultados variam por nicho e oferta — aqui a ideia é mostrar como
              a DC Mídias estrutura o jogo.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {config.cases.map((c, idx) => (
            <Reveal key={c.title} delay={0.04 * idx}>
              <GlassCard className="h-full">
                <div className="p-6">
                  <p className="text-sm font-semibold text-foreground">
                    {c.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{c.highlight}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TIME AVULSO (VALORES DE MERCADO) */}
      <Section id="time" className="py-14 sm:py-18">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
              QUANTO CUSTARIA AVULSO?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Quanto custaria contratar esse time no mercado?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Uma visão rápida de valores mensais médios por profissional (referência).
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {config.teamRoles.map((r, idx) => (
            <Reveal key={r.title} delay={0.03 * idx}>
              <GlassCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <div className="mx-auto h-16 w-16 rounded-full border border-border bg-surface-2 backdrop-blur-xl [box-shadow:0_0_0_1px_rgba(232,62,45,0.18),0_18px_45px_rgba(0,0,0,0.45)]" />
                  <h3 className="mt-4 text-center text-sm font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-center text-xs leading-5 text-muted">
                    {r.description}
                  </p>
                  <p className="mt-4 text-center text-sm font-semibold text-brand">
                    {r.marketPriceLabel}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 text-center text-xs text-muted-2">
            *Valores apenas como referência (podem variar por região, senioridade e formato de contratação).
          </p>
        </Reveal>
      </Section>

      {/* OFERTA + CTA */}
      <Section className="py-14 sm:py-18">
        <Reveal>
          <GlassCard>
            <div className="grid items-center gap-8 p-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                  Pronto para acelerar?
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {config.priceLabel}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {config.contractLabel}. O foco é construir previsibilidade com
                  método, execução e rotina de performance.
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-foreground">
                    {config.adSpendMinimumLabel}
                  </span>
                  {" "}— investimento em mídia é separado da mão de obra.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="#diagnostico" className="w-full">
                  {config.primaryCtaLabel}
                </ButtonLink>
                <ButtonLink href="#metodo" variant="outline" className="w-full">
                  Ver o Método 4 Pilares
                </ButtonLink>
                <ButtonLink href="#time" variant="outline" className="w-full">
                  Ver custo do time no mercado
                </ButtonLink>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="py-14 sm:py-18">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                DÚVIDAS
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Perguntas frequentes
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              Transparência total: o que você recebe, como trabalhamos e como
              medimos evolução.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {config.faq.map((f, idx) => (
            <Reveal key={f.q} delay={0.02 * idx}>
              <details className="group rounded-[var(--radius-lg)] border border-border bg-surface px-5 py-4 backdrop-blur-xl">
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">
                  <span>{f.q}</span>
                  <span className="float-right text-muted group-open:text-foreground">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/80 bg-background/60 backdrop-blur-xl">
        <Section as="div" className="py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/dc-midias-logo.svg"
                alt="DC Mídias"
                width={120}
                height={26}
              />
              <p className="text-xs text-muted">
                Performance • Criativos • Processo
              </p>
            </div>
            <div className="text-xs text-muted">
              © {new Date().getFullYear()} DC Mídias. Todos os direitos
              reservados.
            </div>
          </div>
        </Section>
      </footer>
    </main>
  );
}


