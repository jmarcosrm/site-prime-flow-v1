

import { Integration, BentoItem, Step, Stat, Value, Sector, SecuritySpec } from './types';

export const integrations: Integration[] = [
  { title: "ERP", icon: "building-2" },
  { title: "CRM", icon: "users" },
  { title: "WhatsApp", icon: "message-circle" },
  { title: "E-mail", icon: "mail" },
  { title: "Chat", icon: "message-square-text" },
  { title: "Bancos de dados", icon: "database" },
  { title: "Planilhas", icon: "file-spreadsheet" },
  { title: "Dashboards", icon: "layout-dashboard" },
  { title: "Autenticação", icon: "fingerprint" },
  { title: "Observabilidade", icon: "activity" },
  { title: "LLMs", icon: "sparkles" }
];

export const bentoItems: BentoItem[] = [
  {
    id: "automation",
    title: "Automação de ponta a ponta",
    description: "Workflows que eliminam tarefas repetitivas e reduzem falhas operacionais.",
    icon: "workflow",
    colSpan: "md:col-span-2"
  },
  {
    id: "ai",
    title: "IA aplicada (sem hype)",
    description: "Modelos e agentes para acelerar atendimento, análise e execução.",
    icon: "brain-circuit",
    colSpan: "md:col-span-1"
  },
  {
    id: "integration",
    title: "Integração sem fricção",
    description: "Conectamos sistemas legados e ferramentas modernas com segurança.",
    icon: "network",
    colSpan: "md:col-span-1"
  },
  {
    id: "data",
    title: "Dados e previsões",
    description: "Insights acionáveis com análise preditiva e painéis claros.",
    icon: "bar-chart-3",
    colSpan: "md:col-span-1"
  },
  {
    id: "governance",
    title: "Governança e controle",
    description: "Permissões, limites, rastreabilidade e monitoramento contínuo.",
    icon: "shield-check",
    colSpan: "md:col-span-1"
  },
  {
    id: "scale",
    title: "Escala com estabilidade",
    description: "Arquitetura modular, performance e evolução baseada em métricas.",
    icon: "zap",
    colSpan: "md:col-span-3"
  }
];

export const solutionsCarouselItems = [
  {
    title: "Automação Inteligente",
    description: "Processos 24/7, menos retrabalho e mais eficiência.",
    bullets: ["Mapeamento", "Implementação", "Otimização"]
  },
  {
    title: "Análise Preditiva",
    description: "Antecipe demanda, risco e comportamento com decisões melhores.",
    bullets: ["Previsão", "Tendências", "Anomalias"]
  },
  {
    title: "PLN (Linguagem)",
    description: "Texto e conversa viram ação: triagem, suporte e insights.",
    bullets: ["Classificação", "Sentimento", "Assistentes"]
  }
];

export const stepsHome: Step[] = [
  {
    id: 1,
    title: "Imersão & Diagnóstico",
    text: "Mergulhamos nos dados e processos para encontrar o ROI oculto antes de escrever uma linha de código.",
    icon: "file-search",
    image: "https://i.im.ge/2026/01/15/G9VOg1.Generated-Image-January-14-2026-6-08PM.jpeg" 
  },
  {
    id: 2,
    title: "Engenharia de Solução",
    text: "Arquitetura modular e segura. Desenvolvemos agentes e automações que se integram ao seu ecossistema atual.",
    icon: "workflow",
    image: "https://i.im.ge/2026/01/15/G9V7NT.Generated-Image-January-14-2026-6-11PM.jpeg"
  },
  {
    id: 3,
    title: "Escala & Evolução",
    text: "O go-live é apenas o início. Monitoramos anomalias e refinamos os modelos com base em dados reais.",
    icon: "trending-up",
    image: "https://i.im.ge/2026/01/15/G9V6N6.Generated-Image-January-14-2026-6-11PM-1.jpeg"
  }
];

export const stats: Stat[] = [
  {
    label: "Redução de manualidade",
    value: "-80%",
    desc: "Menos tarefas repetitivas",
    icon: "trending-down"
  },
  {
    label: "Precisão operacional",
    value: "99.9%",
    desc: "Menos falhas e retrabalho",
    icon: "check-circle-2"
  },
  {
    label: "Tempo de resposta",
    value: "24/7",
    desc: "Disponibilidade total",
    icon: "timer"
  },
  {
    label: "Visibilidade",
    value: "100%",
    desc: "Previsibilidade total",
    icon: "layout-dashboard"
  }
];

export const testimonials = [
  {
    name: 'Elena Fisher',
    username: '@elena_tech',
    body: 'A latência caiu 40% na primeira semana de deploy.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CTO, FinBank',
  },
  {
    name: 'Marcus Chen',
    username: '@chen_ops',
    body: 'Dashboard em tempo real mudou nossa logística.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Head of Ops, LogiCorp',
  },
  {
    name: 'Sarah Miller',
    username: '@sarah_m',
    body: 'Governança de dados impecável.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CISO, SecureNet',
  },
  {
    name: 'David Park',
    username: '@dpark_ai',
    body: 'A integração com legado foi surpreendentemente suave.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'VP Eng, RetailGiant',
  },
  {
    name: 'Jessica Wu',
    username: '@jess_product',
    body: 'ROI visível em menos de 30 dias.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Product Lead, TechFlow',
  },
  {
    name: 'Robert Fox',
    username: '@rob_fox',
    body: 'Automação que realmente escala.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Director, ManuFact',
  }
];

export const faqs = [
  {
    q: "O que exatamente vocês entregam?",
    a: "Automação + IA aplicada + integração de sistemas, com governança, monitoramento e evolução contínua."
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Em geral de 2 a 8 semanas, dependendo do escopo, integrações e maturidade dos dados."
  },
  {
    q: "Funciona para empresas de quais setores?",
    a: "Atendemos múltiplos setores. O projeto é desenhado por processo e resultado."
  },
  {
    q: "Preciso trocar meus sistemas atuais?",
    a: "Não. O foco é integrar e melhorar o que você já usa, reduzindo fricção e trabalho manual."
  },
  {
    q: "Como vocês garantem segurança e controle?",
    a: "Permissões, trilhas de auditoria, monitoramento, limites claros e boas práticas de dados."
  },
  {
    q: "Dá para começar pequeno?",
    a: "Sim. Começamos por um fluxo crítico (MVP) e evoluímos em ciclos."
  }
];

export const solutionTabs = {
  automation: {
    title: "Automação Inteligente",
    summary: "Orquestramos fluxos entre sistemas e automatizamos rotinas com consistência, rastreabilidade e controle.",
    grid: [
      { title: "Mapeamento de processos", desc: "Gargalos, riscos e ganhos rápidos identificados com clareza." },
      { title: "Workflows 24/7", desc: "Execução contínua com regras, aprovações e auditoria." },
      { title: "Integrações", desc: "APIs, bancos, CRMs, ERPs, mensageria e ferramentas internas." },
      { title: "Monitoramento", desc: "Alertas, logs e melhorias orientadas por métricas." }
    ],
    examples: ["Onboarding", "CRM", "Rotinas financeiras", "Aprovações internas"],
    deliverables: ["Fluxos documentados", "Painel de acompanhamento", "Guia de operação"],
    cta: "Solicitar demonstração"
  },
  predictive: {
    title: "Análise Preditiva",
    summary: "Transforme histórico em antecipação: demanda, risco, capacidade e comportamento.",
    grid: [
      { title: "Previsão de demanda", desc: "Planejamento com menos ruptura e excesso." },
      { title: "Tendências", desc: "Sinais precoces do que muda no mercado." },
      { title: "Anomalias e risco", desc: "Alertas para desvios operacionais e financeiros." },
      { title: "Dashboards acionáveis", desc: "Indicadores claros para decisão." }
    ],
    examples: ["Vendas/estoque", "Churn", "Risco/crédito", "Capacidade"],
    deliverables: ["Modelos", "Alertas", "Rotina de calibração"],
    cta: "Falar com especialista"
  },
  nlp: {
    title: "PLN",
    summary: "Texto e conversa viram ação: triagem, suporte e classificação e insights.",
    grid: [
      { title: "Assistentes", desc: "Respostas com contexto e fluxos definidos." },
      { title: "Classificação", desc: "Tickets, e-mails e mensagens categorizados automaticamente." },
      { title: "Sentimento", desc: "Sinais de satisfação e fricção do cliente." },
      { title: "Resumo e extração", desc: "Pontos-chave, entidades e próximos passos." }
    ],
    examples: ["SAC", "Pré-vendas", "Pesquisa", "Rotinas internas"],
    deliverables: ["Assistente", "Base de conhecimento", "Métricas de uso"],
    cta: "Solicitar demonstração"
  }
};

export const comparison = {
  before: ["Processos manuais", "Dados em silos", "Decisão lenta", "Retrabalho"],
  after: ["Workflows automatizados", "Integração", "Visão em tempo real", "Controle"]
};

// --- Updated Copy for About Us Page ---

export const methodology: Step[] = [
  {
    step: "01",
    title: "Mapeamento & Diagnóstico",
    desc: "Não automatizamos o caos. Entendemos suas regras de negócio, gargalos e segurança antes de propor tecnologia.",
    icon: "scan-search"
  },
  {
    step: "02",
    title: "Arquitetura da Solução",
    desc: "Desenhamos agentes e fluxos que se integram ao seu stack atual, focando em escalabilidade e menor fricção.",
    icon: "compass"
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    desc: "Sprints focados em entregáveis funcionais. Validamos cada etapa para garantir aderência ao processo real.",
    icon: "terminal"
  },
  {
    step: "04",
    title: "Operação Assistida & Evolução",
    desc: "Monitoramento proativo pós-deploy. Usamos os dados gerados para refinar modelos e expandir capacidades.",
    icon: "refresh-cw"
  }
];

export const values: Value[] = [
  { 
    title: "Antifragilidade", 
    description: "Sistemas que aprendem e evoluem com o erro.",
    icon: "shield-check",
    image: "https://i.im.ge/2026/01/15/GmBdUW.Generated-Image-January-15-2026-3-08PM.jpeg"
  },
  { 
    title: "Transparência Radical", 
    description: "Código auditável e comunicação direta.",
    icon: "layers",
    image: "https://i.im.ge/2026/01/15/GmBiWJ.Generated-Image-January-15-2026-3-09PM.jpeg"
  },
  { 
    title: "Pragmatismo Técnico", 
    description: "Tecnologia certa para o problema real.",
    icon: "code-2",
    image: "https://i.im.ge/2026/01/15/GmB6aF.Generated-Image-January-15-2026-3-10PM.jpeg"
  },
  { 
    title: "Obsessão pelo Impacto", 
    description: "Eficiência operacional mensurável.",
    icon: "target",
    image: "https://i.im.ge/2026/01/15/GmBCZh.Generated-Image-January-15-2026-3-11PM.jpeg"
  }
];

export const team = [
  { role: "CTO & Head de IA", desc: "15+ anos em arquitetura de dados e sistemas distribuídos. Focado em tornar IA auditável." },
  { role: "Head de Operações", desc: "Especialista em Lean Six Sigma. Traduz dores operacionais em requisitos técnicos precisos." },
  { role: "Líder de Engenharia", desc: "Expert em Cloud e Segurança. Garante que nossa infraestrutura escale sem comprometer dados." }
];

export const sectors: Sector[] = [
  {
    title: "Varejo & E-commerce",
    desc: "Previsão de demanda, otimização de estoque e SAC inteligente 24/7.",
    icon: "shopping-bag"
  },
  {
    title: "Finanças",
    desc: "Detecção de anomalias, automação de conciliação e análise de crédito.",
    icon: "landmark"
  },
  {
    title: "Logística",
    desc: "Rastreamento preditivo, otimização de rotas e gestão automática de incidentes.",
    icon: "truck"
  },
  {
    title: "Saúde",
    desc: "Triagem de pacientes, agendamento automatizado e análise de documentos.",
    icon: "stethoscope"
  },
  {
    title: "Indústria",
    desc: "Manutenção preditiva, controle de qualidade visual e automação de supply chain.",
    icon: "factory"
  },
];

export const securitySpecs: SecuritySpec[] = [
  {
    title: "Criptografia Avançada",
    desc: "Dados criptografados em repouso e em trânsito (AES-256 e TLS 1.3).",
    icon: "lock"
  },
  {
    title: "Isolamento de Dados",
    desc: "Ambientes segregados garantem que seus dados nunca cruzem fronteiras indesejadas.",
    icon: "server"
  },
  {
    title: "Controle de Acesso (RBAC)",
    desc: "Gestão granular de permissões e chaves de API com rotação automática.",
    icon: "key"
  },
  {
    title: "Conformidade",
    desc: "Arquitetura desenhada seguindo princípios da LGPD e GDPR.",
    icon: "shield-check"
  }
];
