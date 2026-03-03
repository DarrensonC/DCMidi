"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/landing/LeadForm";

/* ─── Serviços inclusos ─────────────────────────────────────── */
const services = [
  {
    icon: "📊",
    title: "Gestão Profissional de Tráfego Pago",
    description:
      "Meta Ads (Instagram + Facebook) com planejamento, segmentação cirúrgica e otimização semanal. Cada real investido em anúncio é monitorado de perto para trazer o maior número de pedidos possível.",
    tag: "Performance",
  },
  {
    icon: "✍️",
    title: "Copywriting Estratégico para Anúncios",
    description:
      "Textos criados para despertar desejo imediato — headline que para o dedo no scroll, oferta que gera ação, call-to-action que converte. Escrito por especialistas, não por IA genérica.",
    tag: "Copy",
  },
  {
    icon: "🎥",
    title: "1 Gravação Presencial por Mês (8 Vídeos)",
    description:
      "Nossa equipe vai até a Cerol Pizzaria, grava 8 vídeos estratégicos em 1 sessão mensal — pizzas saindo do forno, bastidores, ofertas do dia, conteúdo que humaniza e vende. Entrega editada e pronta para veicular.",
    tag: "Criativos",
  },
  {
    icon: "📱",
    title: "Relatórios de Performance via WhatsApp",
    description:
      "Sem planilhas complicadas. Você recebe semanalmente: o que está convertendo, o custo por resultado e o plano da próxima semana. Transparência total.",
    tag: "Transparência",
  },
  {
    icon: "📅",
    title: "Reunião Estratégica Mensal",
    description:
      "30–40 min via Google Meet para revisar os números do mês, alinhar prioridades e definir a estratégia do próximo ciclo. Decisões baseadas em dados, não em achismo.",
    tag: "Direção",
  },
];

/* ─── O que os concorrentes estão fazendo ─────────────────────── */
const competitors = [
  {
    label: "Concorrente A",
    href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=117010848102846",
    description:
      "Está rodando anúncios ativos agora mesmo — alcançando clientes que poderiam ser seus.",
  },
  {
    label: "Concorrente B",
    href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=110124128233245",
    description:
      "Também anunciando com frequência — enquanto isso, cada dia sem anúncios é dinheiro na mesa do concorrente.",
  },
];

/* ─── Breakdown de preço ───────────────────────────────────────── */
const priceBreakdown = [
  { label: "Mão de obra (gestão, copy, reuniões)", value: "R$ 2.000,00/mês" },
  { label: "Investimento em mídia (Meta Ads)", value: "R$ 1.500,00/mês" },
];

/* ─── FAQ ──────────────────────────────────────────────────────── */
const faq = [
  {
    q: "Em quanto tempo aparecem os primeiros resultados?",
    a: "Nas primeiras 2 semanas você já vê os anúncios rodando e os primeiros dados de alcance e cliques. Pedidos via anúncio costumam aparecer ainda na primeira semana — velocidade depende da oferta e da região.",
  },
  {
    q: "Como funciona a gravação mensal?",
    a: "Nossa equipe agenda 1 visita por mês na Cerol Pizzaria. Em uma única sessão gravamos 8 vídeos com diferentes ângulos: pizzas, bastidores, ofertas e depoimentos. Tudo editado e entregue pronto para rodar nos anúncios.",
  },
  {
    q: "O tráfego inclui Instagram e Facebook?",
    a: "Sim. Os R$ 1.500 de mídia rodam no Meta Ads (Instagram + Facebook), nas redes com maior alcance para gastronomia e delivery local.",
  },
  {
    q: "Como faço o pagamento?",
    a: "Via PIX no início de cada mês. Simples, rápido e sem burocracia — nada de boleto com vencimento surpresa.",
  },
  {
    q: "Por que 3 meses?",
    a: "Marketing de performance tem curva de aprendizado. Os primeiros dados chegam nas semanas 1–2, a otimização acontece no mês 2, e a escala consistente no mês 3. Contratos curtos demais não dão tempo de construir resultado real.",
  },
];

/* ═══════════════════════════════════════════════════════════════ */

export default function PropostaCerolPizzaria() {
  return (
    <main className="min-h-screen">

      {/* ── HEADER ───────────────────────────────────────────────── */}
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
            <ButtonLink href="#inclusos" variant="outline">
              O que está incluso
            </ButtonLink>
            <ButtonLink href="#proposta">Ver proposta</ButtonLink>
          </div>
        </Section>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <Section as="section" className="pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Esquerda */}
          <div>
            <Reveal>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                PROPOSTA EXCLUSIVA · DC MÍDIAS × CEROL PIZZARIA
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Enquanto você lê isso,{" "}
                <span className="text-brand">seus concorrentes</span> estão
                anunciando para os seus clientes.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                A Cerol Pizzaria tem produto. Tem identidade. O que falta é
                presença digital ativa e consistente — anúncios que aparecem no
                momento certo, criativos que geram desejo e gestão que entrega
                resultado mensurável.
              </p>
              <p className="mt-3 max-w-xl text-base font-medium leading-7 text-foreground sm:text-lg">
                É exatamente isso que a DC Mídias entrega nos próximos 3 meses.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#proposta" className="w-full sm:w-auto">
                  Ver proposta completa
                </ButtonLink>
                <ButtonLink
                  href="#concorrentes"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Ver concorrentes anunciando
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["3 meses", "de execução focada"],
                  ["8 vídeos", "por mês gravados presencialmente"],
                  ["100% PIX", "parcelado sem juros"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-border bg-surface px-4 py-4 backdrop-blur-xl"
                  >
                    <p className="text-sm font-bold text-brand">{k}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Direita: formulário */}
          <div className="relative">
            <Reveal>
              <div className="absolute -inset-4 -z-10 opacity-60 blur-3xl [background:radial-gradient(520px_240px_at_60%_40%,rgba(232,62,45,0.38),transparent_65%)]" />
              <GlassCard id="form-hero">
                <div className="p-7">
                  <p className="text-sm font-semibold text-foreground">
                    Quer conversar sobre a proposta?
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Preencha e fale direto no WhatsApp — sem enrolação.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>3 meses de contrato</Badge>
                    <Badge>8 vídeos/mês</Badge>
                    <Badge>PIX sem juros</Badge>
                  </div>
                  <div className="mt-5">
                    <LeadForm
                      ctaLabel="Quero fechar essa proposta"
                      offerLabel="Proposta Cerol Pizzaria — Tráfego + Produção de Vídeo"
                    />
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── URGÊNCIA: CONCORRENTES ANUNCIANDO ────────────────────── */}
      <Section id="concorrentes" className="py-14 sm:py-18">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
              ⚠️ ALERTA DE MERCADO
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Os seus concorrentes já estão anunciando.{" "}
              <span className="text-brand">Hoje.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
              Verificamos a Biblioteca de Anúncios do Meta. Veja você mesmo: enquanto a Cerol não
              anuncia, a concorrência está pagando para aparecer exatamente para as pessoas que
              podem pedir uma pizza hoje à noite.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {competitors.map((c, idx) => (
            <Reveal key={c.label} delay={0.05 * idx}>
              <GlassCard className="h-full">
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-brand [box-shadow:0_0_8px_2px_rgba(232,62,45,0.7)] animate-pulse" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                      Anúncio Ativo
                    </p>
                  </div>
                  <p className="text-base font-semibold text-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm leading-6 text-muted flex-1">
                    {c.description}
                  </p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    Ver anúncios ativos na Biblioteca do Meta →
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <GlassCard className="mt-6 border-brand/30">
            <div className="p-6 text-center">
              <p className="text-sm leading-7 text-muted">
                Cada dia sem anunciar é{" "}
                <span className="font-semibold text-foreground">
                  mercado cedido de graça
                </span>{" "}
                para a concorrência. A janela para agir primeiro ainda está aberta — por quanto
                tempo mais, só o mercado decide.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* ── SERVIÇOS INCLUSOS ────────────────────────────────────── */}
      <Section id="inclusos" className="py-14 sm:py-18">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                O QUE ESTÁ INCLUSO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Tudo que a Cerol Pizzaria vai receber
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted backdrop-blur-xl">
              <span className="font-semibold text-foreground">3 meses de contrato</span>{" "}
              <span className="text-muted-2">•</span>{" "}
              <span>PIX no início de cada mês</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={0.04 * idx}>
              <GlassCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="mt-3 text-base font-semibold text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <Badge>{s.tag}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted flex-1">
                    {s.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── PROPOSTA / PREÇO ─────────────────────────────────────── */}
      <Section id="proposta" className="py-14 sm:py-18">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
              A PROPOSTA
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Investimento total do plano
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">

          {/* Card preço cheio */}
          <Reveal>
            <GlassCard className="h-full border-brand/40">
              <div className="flex h-full flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Investimento completo (3 meses)
                </p>
                <p className="mt-4 text-5xl font-bold text-foreground">
                  R$ 10.500
                  <span className="text-xl font-medium text-muted">,00</span>
                </p>
                <p className="mt-2 text-sm text-muted">
                  Valor cheio do pacote completo — tráfego pago + gestão + produção de vídeo por 3 meses.
                </p>

                <div className="mt-6 space-y-3">
                  {priceBreakdown.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm"
                    >
                      <span className="text-muted">{item.label}</span>
                      <span className="font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5 text-muted-2">
                  * Os R$ 1.500 de mídia vão 100% para o Meta Ads (Instagram + Facebook). Nenhum
                  centavo fica com a DC Mídias — você tem acesso à conta de anúncios.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* Card pagamento no PIX */}
          <Reveal delay={0.06}>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-cta">
                  💰 Forma de pagamento
                </p>
                <p className="mt-4 text-4xl font-bold text-foreground">
                  3× R$ 3.500
                  <span className="text-xl font-medium text-muted">,00</span>
                </p>
                <p className="mt-2 text-sm font-medium text-cta">
                  PIX no início de cada mês · Sem juros · Sem cartão
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Parcela 1 → início do mês 1 (campanha já no ar na semana 1)<br />
                  Parcela 2 → início do mês 2 (otimização e escala)<br />
                  Parcela 3 → início do mês 3 (extração de resultado máximo)
                </p>

                <div className="mt-auto pt-6">
                  <ul className="space-y-2 text-sm text-muted">
                    {[
                      "Gestão profissional de Meta Ads todos os meses",
                      "8 vídeos gravados presencialmente por mês",
                      "Copy estratégica para todos os anúncios",
                      "Relatório semanal via WhatsApp",
                      "Reunião mensal de estratégia",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-4 w-4 shrink-0 text-cta">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* CTA principal */}
        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <ButtonLink
              href="#form-hero"
              className="px-10 py-4 text-base"
            >
              Quero fechar a proposta agora
            </ButtonLink>
            <p className="mt-4 text-xs text-muted">
              Ao entrar em contato, um especialista da DC Mídias retorna em até 2h para confirmar detalhes e data de início.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
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
            <p className="max-w-sm text-sm leading-6 text-muted">
              Transparência total antes de qualquer compromisso.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {faq.map((f, idx) => (
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

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <Section className="py-14 sm:py-18">
        <Reveal>
          <GlassCard className="border-brand/30">
            <div className="p-8 text-center">
              <p className="font-display text-xs tracking-[0.35em] text-muted uppercase">
                A decisão é agora
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A Cerol Pizzaria merece estar na frente.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
                Seus concorrentes já escolheram anunciar. Você pode continuar esperando — ou pode começar
                a aparecer para os clientes certos, na hora certa, com criativos que geram pedidos.
                3 meses, resultado mensurável, PIX sem complicação.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="#form-hero" className="px-10 py-4 text-base">
                  Fechar proposta — 3× R$ 3.500 no PIX
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-muted-2">
                Proposta válida por 7 dias · Início imediato após confirmação
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
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
                Performance · Criativos · Resultado
              </p>
            </div>
            <div className="text-xs text-muted">
              © {new Date().getFullYear()} DC Mídias. Todos os direitos reservados.
            </div>
          </div>
        </Section>
      </footer>

    </main>
  );
}

