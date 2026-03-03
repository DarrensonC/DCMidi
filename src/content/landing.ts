export type Pillar = {
  title: string;
  subtitle: string;
  bullets: string[];
};

export type Service = {
  title: string;
  description: string;
  tag?: string;
};

export type CaseStudy = {
  title: string;
  highlight: string;
  bullets: string[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type TeamRole = {
  title: string;
  description: string;
  marketPriceLabel: string;
};

export type LandingConfig = {
  slug: "assessoria-growth" | "gestao-trafego";
  eyebrow: string;
  headline: string;
  subheadline: string;
  priceLabel: string;
  contractLabel: string;
  adSpendMinimumLabel: string;
  primaryCtaLabel: string;
  services: Service[];
  pillars: Pillar[];
  cases: CaseStudy[];
  teamRoles: TeamRole[];
  faq: FaqItem[];
};

export const pillars: Pillar[] = [
  {
    title: "EXPLORAÇÃO",
    subtitle: "Diagnóstico e leitura de dados para achar as alavancas.",
    bullets: [
      "Análise de funil, criativos e tráfego",
      "Mapeamento de gargalos e oportunidades",
      "Plano de ação por prioridade",
    ],
  },
  {
    title: "LAPIDAÇÃO",
    subtitle: "Otimização contínua de criativos, páginas e processo.",
    bullets: [
      "Melhorias em LP, copy e oferta",
      "Testes com hipóteses claras",
      "Rotina de performance e revisão",
    ],
  },
  {
    title: "ESCALA",
    subtitle: "Aumento de investimento com controle e previsibilidade.",
    bullets: [
      "Estrutura de campanhas e públicos",
      "Otimização por margem e CAC",
      "Reinvestimento baseado em resultado",
    ],
  },
  {
    title: "EXTRAÇÃO",
    subtitle: "CRM + comercial para transformar lead em lucro.",
    bullets: [
      "Pipeline e cadências no ClickUp",
      "Recuperação de leads e follow-ups",
      "Ações comerciais para aumentar LTV",
    ],
  },
];

export const lpAssessoriaGrowth: LandingConfig = {
  slug: "assessoria-growth",
  eyebrow: "ASSESSORIA DE GROWTH MARKETING",
  headline:
    "Receba um plano personalizado para fazer seu negócio vender em escala com previsibilidade e lucro.",
  subheadline:
    "Gestão completa de marketing + vendas para empresas que querem crescer com método. Você entra com o produto — a DC Mídias entra com o plano, execução e rotina de performance.",
  priceLabel: "Investimento de Mão de Obra: R$ 3.000,00",
  contractLabel: "Contrato mínimo: 6 meses",
  adSpendMinimumLabel: "Mídia mínima recomendada: R$ 2.000/mês (Meta/Google)",
  primaryCtaLabel: "Quero um diagnóstico agora",
  pillars,
  services: [
    {
      title: "Gestão de Tráfego (Google & Meta Ads)",
      description: "Estratégia e operação com métricas semanais e ajustes rápidos.",
      tag: "Performance",
    },
    {
      title: "Landing Pages Otimizadas",
      description: "Criação/otimização em WordPress, Elementor ou Greatpages focada em conversão.",
      tag: "Conversão",
    },
    {
      title: "Treinamento Comercial",
      description: "Ajuste de pitch e processo para aumentar a conversão de leads em vendas.",
      tag: "Vendas",
    },
    {
      title: "Criativos Estratégicos",
      description:
        "Direção de scripts + gravações presenciais em Curitiba para criativos que vendem.",
      tag: "Criativos",
    },
    {
      title: "Ações Comerciais e CRM (ClickUp)",
      description: "Gestão de leads, cadências e recuperação — sem lead morrendo no caminho.",
      tag: "CRM",
    },
    {
      title: "Reuniões Estratégicas Semanais",
      description: "30–40 min via Google Meet com plano e prioridades claras para a semana.",
      tag: "Rotina",
    },
  ],
  cases: [
    {
      title: "Clínica de Estética (PR)",
      highlight: "CPL -37% e aumento consistente de agenda",
      bullets: [
        "Ajuste de oferta + criativos focados em prova social",
        "Estrutura de campanhas por serviço e ticket",
        "Cadência de follow-up no ClickUp para recuperar leads",
      ],
    },
    {
      title: "E-commerce (Moda/Utilidades)",
      highlight: "ROAS 4.1 com escala controlada",
      bullets: [
        "Criativos em formato UGC + variações por ângulo",
        "LPs por categoria para melhorar taxa de conversão",
        "Otimização por margem e ticket médio",
      ],
    },
    {
      title: "Serviços B2B (Curitiba)",
      highlight: "Leads qualificados e previsibilidade de pipeline",
      bullets: [
        "Segmentação por ICP + mensagens por dor",
        "LP com prova e diferenciais por nicho",
        "Pipeline e cadências para reduzir tempo de resposta",
      ],
    },
  ],
  teamRoles: [
    {
      title: "Líder de Vendas",
      description: "Para liderar, conduzir e treinar o time de vendas",
      marketPriceLabel: "R$ 5.000,00/mês",
    },
    {
      title: "Redator de Publicidade",
      description: "Responsável por escrever textos persuasivos",
      marketPriceLabel: "R$ 3.500,00/mês",
    },
    {
      title: "Gestor de Tráfego",
      description: "Para fazer seus anúncios patrocinados na internet",
      marketPriceLabel: "R$ 2.500,00/mês",
    },
    {
      title: "Editor de vídeo",
      description: "Para editar seus vídeos e aumentar o engajamento do público",
      marketPriceLabel: "R$ 2.500,00/mês",
    },
    {
      title: "Gestor de Projetos",
      description: "Para tomar conta de todo o projeto e liderar o time",
      marketPriceLabel: "R$ 7.500,00/mês",
    },
  ],
  faq: [
    {
      q: "Em quanto tempo começo a ver resultado?",
      a: "Normalmente você já vê sinais nas primeiras semanas (volume e qualidade de lead). Escala consistente depende do ciclo do seu negócio e do ajuste fino do funil.",
    },
    {
      q: "Vocês cuidam do comercial também?",
      a: "Sim. A gente estrutura o processo e o CRM (ClickUp), e orienta a rotina de follow-up para aumentar conversão e reduzir lead perdido.",
    },
    {
      q: "Preciso ter equipe interna?",
      a: "Não necessariamente. A DC Mídias executa a operação principal. Se você já tem time, a gente integra e acelera com método e rotina.",
    },
  ],
};

export const lpGestaoTrafego: LandingConfig = {
  slug: "gestao-trafego",
  eyebrow: "GESTÃO DE TRÁFEGO PAGO",
  headline:
    "Atraia clientes qualificados todos os dias com Gestão Profissional de Tráfego Pago.",
  subheadline:
    "Para empresas que precisam de volume com qualidade: planejamento, copy estratégica e otimização contínua em Meta Ads e Google Ads.",
  priceLabel: "Investimento de Mão de Obra: R$ 1.500,00",
  contractLabel: "Contrato mínimo: 6 meses",
  adSpendMinimumLabel: "Mídia mínima recomendada: R$ 1.500/mês (Meta/Google)",
  primaryCtaLabel: "Quero atrair clientes",
  pillars,
  services: [
    {
      title: "Planejamento e Gestão (Meta Ads & Google Ads)",
      description: "Estratégia + operação para gerar demanda e controlar CAC.",
      tag: "Gestão",
    },
    {
      title: "Copywriting Estratégico",
      description: "Mensagens por intenção, dor e oferta para elevar CTR e conversão.",
      tag: "Copy",
    },
    {
      title: "Relatórios via WhatsApp",
      description: "Resumo objetivo da performance e próximos passos — sem planilhas infinitas.",
      tag: "Transparência",
    },
    {
      title: "Reunião Estratégica Mensal",
      description: "30–40 min para revisar dados, hipóteses e prioridades do mês.",
      tag: "Direção",
    },
  ],
  cases: [
    {
      title: "Serviço Local (Curitiba e região)",
      highlight: "Mais leads com melhor qualificação",
      bullets: [
        "Campanhas por intenção + criativos por objeção",
        "Otimização por taxa de conversão e custo por oportunidade",
        "Ajustes semanais com foco em consistência",
      ],
    },
    {
      title: "Negócio com ticket médio",
      highlight: "Custo por lead estabilizado e escala",
      bullets: [
        "Estrutura de funil (topo/meio/fundo) com remarketing",
        "Copy e criativos por ângulos de oferta",
        "Rotina de testes para manter performance",
      ],
    },
    {
      title: "B2B (captação por formulário)",
      highlight: "Pipeline mais previsível",
      bullets: [
        "Segmentação por cargo/segmento + keywords por dor",
        "LP com prova e clareza de proposta",
        "Relatório objetivo + plano mensal de otimização",
      ],
    },
  ],
  teamRoles: [
    {
      title: "Gestor de Tráfego",
      description: "Planejamento e otimização diária das campanhas",
      marketPriceLabel: "R$ 2.500,00/mês",
    },
    {
      title: "Redator de Publicidade",
      description: "Copy persuasiva por intenção e oferta",
      marketPriceLabel: "R$ 3.500,00/mês",
    },
    {
      title: "Editor de vídeo",
      description: "Variações de criativos para manter performance",
      marketPriceLabel: "R$ 2.500,00/mês",
    },
    {
      title: "Designer (criativos)",
      description: "Banners, carrosséis e peças para anúncios",
      marketPriceLabel: "R$ 2.800,00/mês",
    },
    {
      title: "Gestor de Projetos",
      description: "Organizar demandas, prazos e entregas",
      marketPriceLabel: "R$ 7.500,00/mês",
    },
  ],
  faq: [
    {
      q: "Preciso de landing page para anunciar?",
      a: "Ajuda muito. Você pode começar com uma página simples, e a gente evolui conforme os dados apontarem as melhores oportunidades.",
    },
    {
      q: "Como vocês enviam os resultados no WhatsApp?",
      a: "Você recebe um resumo prático: o que melhorou, o que piorou, e o plano de ação. Transparente e direto ao ponto.",
    },
    {
      q: "Vocês fazem criativos também?",
      a: "A gestão inclui direção e recomendações de criativos. Se você quiser produção completa, a Assessoria de Growth é o pacote ideal.",
    },
  ],
};


