export type BriefingChoice = { value: string; label: string; hint?: string };

export type BriefingStep =
  | {
      id: string;
      kind: "choice";
      title: string;
      caption: string;
      options: BriefingChoice[];
    }
  | {
      id: "contact";
      kind: "contact";
      title: string;
      caption: string;
    };

export const BRIEFING_STEPS: BriefingStep[] = [
  {
    id: "tipo",
    kind: "choice",
    title: "Que tipo de obra você quer erguer?",
    caption: "O terreno é marcado. Escolha o programa do edifício.",
    options: [
      { value: "edificacao", label: "Edificação", hint: "Arquitetura, estrutura e MEP" },
      { value: "infra", label: "Infraestrutura", hint: "Vias, saneamento, transporte" },
      { value: "campus", label: "Campus / misto", hint: "Edifício + entorno" },
    ],
  },
  {
    id: "perfil",
    kind: "choice",
    title: "Quem conduz o projeto?",
    caption: "A fundação entra no solo. O perfil define o método.",
    options: [
      { value: "arquitetura", label: "Escritório de arquitetura" },
      { value: "construtora", label: "Construtora ou incorporadora" },
      { value: "publico", label: "Órgão público" },
      { value: "industria", label: "Indústria / manufatura" },
    ],
  },
  {
    id: "maturidade",
    kind: "choice",
    title: "Onde está a equipe no BIM?",
    caption: "Sobe a estrutura. O método precisa casar com o canteiro.",
    options: [
      { value: "cad", label: "Ainda no CAD 2D" },
      { value: "inicio", label: "Começando a implantar BIM" },
      { value: "avancado", label: "BIM no dia a dia — queremos evoluir" },
    ],
  },
  {
    id: "necessidade",
    kind: "choice",
    title: "O que a obra precisa agora?",
    caption: "Os pavimentos avançam. Cada escolha vira um pacote Autodesk.",
    options: [
      { value: "Licenciamento Autodesk", label: "Licenciamento oficial" },
      { value: "Consultoria BIM", label: "Consultoria e implantação" },
      { value: "Treinamento ATC", label: "Treinamento ATC" },
      { value: "Autodesk Construction Cloud", label: "Construction Cloud" },
    ],
  },
  {
    id: "prazo",
    kind: "choice",
    title: "Qual o horizonte da entrega?",
    caption: "A fachada fecha. O cronograma entra no modelo.",
    options: [
      { value: "trimestre", label: "Neste trimestre" },
      { value: "ano", label: "Neste ano" },
      { value: "longo", label: "Planejamento de longo prazo" },
    ],
  },
  {
    id: "contact",
    kind: "contact",
    title: "Quem recebe a chave?",
    caption: "Último pavimento: identifique a equipe para o comercial ligar.",
  },
];

export const STAGE_LABELS = [
  "Terreno e levantamento",
  "Fundação",
  "Estrutura",
  "Pavimentos",
  "Fachada",
  "Gêmeo digital BIM",
  "Obra entregue",
] as const;

export function interestFromAnswers(answers: Record<string, string>) {
  return answers.necessidade || "Consultoria BIM";
}

export function messageFromAnswers(answers: Record<string, string>) {
  const tipo =
    answers.tipo === "infra"
      ? "Infraestrutura"
      : answers.tipo === "campus"
        ? "Campus / misto"
        : "Edificação";
  const perfil = {
    arquitetura: "Escritório de arquitetura",
    construtora: "Construtora ou incorporadora",
    publico: "Órgão público",
    industria: "Indústria / manufatura",
  }[answers.perfil ?? ""] ?? answers.perfil;
  const mat = {
    cad: "Ainda no CAD 2D",
    inicio: "Começando BIM",
    avancado: "BIM avançado",
  }[answers.maturidade ?? ""] ?? answers.maturidade;
  const prazo = {
    trimestre: "Neste trimestre",
    ano: "Neste ano",
    longo: "Longo prazo",
  }[answers.prazo ?? ""] ?? answers.prazo;
  return [
    `Briefing interativo Pro-Systems.`,
    `Tipo: ${tipo}.`,
    `Perfil: ${perfil}.`,
    `Maturidade BIM: ${mat}.`,
    `Necessidade: ${answers.necessidade}.`,
    `Horizonte: ${prazo}.`,
  ].join(" ");
}
