export const COMPANY = {
  name: "Pro-Systems",
  legal: "Pro-Systems Brasil",
  tagline: "Transforme seus projetos com especialistas em BIM e soluções Autodesk®",
  since: 1987,
  years: 39,
  city: "Brasília — DF",
  phones: ["(61) 3202-2666", "(61) 3968-1446"],
  emails: {
    comercial: "comercial@prosystems.com.br",
    suporte: "suporte@prosystems.com.br",
  },
  social: {
    instagram: "https://www.instagram.com/prosystemsdf/",
    facebook: "https://www.facebook.com/prosystemsdf/",
    cadstudio: "https://www.cadstudio.com.br/",
    atas: "https://ata.autodesk.prosystems.com.br",
  },
  badges: ["Autodesk Silver Partner", "Authorized Training Center"],
} as const;

export const INTERESTS = [
  "Licenciamento Autodesk",
  "Consultoria BIM",
  "Treinamento ATC",
  "Autodesk Construction Cloud",
  "Desenvolvimento de soluções",
  "Suporte técnico",
] as const;

export const SERVICES = [
  {
    slug: "licenciamento",
    title: "Licenciamento oficial Autodesk®",
    body: "Disponibilizamos licenciamento oficial Autodesk® com orientação especializada para que empresas utilizem as soluções mais adequadas às suas necessidades.",
  },
  {
    slug: "consultoria",
    title: "Consultoria BIM",
    body: "Apoiamos organizações na implantação da metodologia BIM, definição de processos, padronização de fluxos de trabalho e transformação digital.",
  },
  {
    slug: "treinamentos",
    title: "Treinamentos oficiais Autodesk®",
    body: "Como Autodesk Authorized Training Center (ATC), oferecemos treinamentos conduzidos por instrutores qualificados para diferentes níveis de conhecimento.",
  },
  {
    slug: "desenvolvimento",
    title: "Desenvolvimento de soluções",
    body: "Criamos aplicações e integrações personalizadas para otimizar processos e aumentar a produtividade — como o app Civil 3D desenvolvido para a Terracap.",
  },
] as const;

export const SPECIALIZATIONS = [
  {
    title: "Arquitetura de edifícios",
    body: "Otimizamos o projeto de construção com colaboração aprimorada da equipe, transferência de dados mais eficiente, redução do tempo geral de projeto e maior capacidade de carga de trabalho.",
  },
  {
    title: "Mecânica, elétrica e hidráulica (MEP)",
    body: "Ajudamos a projetar e fabricar melhores sistemas prediais e a adicionar componentes MEP aos projetos com eficiência.",
  },
  {
    title: "Infraestrutura civil e de transporte",
    body: "Fluxos BIM inteligentes e conectados para pontes, túneis, ferrovias, estradas e rodovias — mais resilientes, produtivos e lucrativos.",
  },
  {
    title: "Infraestrutura hídrica",
    body: "Modelagem hidráulica e tecnologias em nuvem que impulsionam eficiência e sustentabilidade em todas as fases do ciclo de vida dos ativos hídricos.",
  },
] as const;

export const ACCREDITATIONS = [
  {
    group: "Capacidades técnicas",
    items: [
      { title: "Revit — Arquitetura", body: "Como implementar o Revit em projetos de construção." },
      { title: "Revit — MEP", body: "Implementação do Revit incluindo funções MEP de gerenciamento de modelos." },
      { title: "Revit — Estrutura", body: "Criação de modelos, produção de desenhos e revisão de projetos." },
      { title: "Civil 3D", body: "Como implementar o Civil 3D em projetos de infraestrutura." },
      { title: "InfraWorks Starter Pack", body: "Abordagem BIM para projetar estradas nas fases conceitual e preliminar." },
      { title: "Capacidade técnica do Revit", body: "Suporte de produto para o Revit com êxito." },
    ],
  },
  {
    group: "Habilidades de sucesso do cliente",
    items: [
      { title: "Credenciamento de suporte técnico", body: "Comportamentos centrados no cliente, criando momentos positivos e decisivos." },
      { title: "Estrutura de implementação de consultoria", body: "Prestação de serviços por meio de uma abordagem sistemática de consultoria." },
      { title: "Gerenciamento de projetos", body: "Condução de projetos que sustentam a prestação de serviços." },
      { title: "Descoberta coordenada", body: "Identificamos as necessidades dos usuários e direcionamos aos serviços certos." },
    ],
  },
] as const;

export const CASES = [
  {
    client: "ArcelorMittal",
    quote:
      "A parceria que temos com a Pro-Systems é muito consolidada e nos proporciona um melhor desempenho em nossos projetos e desenvolvimentos.",
    person: "Giseli Batista Facundes Fabres",
    role: "Planejamento de Engenharia",
    result: "Adoção de coleções Autodesk para otimização de processos e produtividade.",
  },
  {
    client: "COMARA",
    quote:
      "Excelência profissional e tecnológica no projeto, construção e recuperação de aeroportos em áreas remotas da Amazônia Legal.",
    person: "Comissão de Aeroportos da Região Amazônica",
    role: "Comando da Aeronáutica",
    result: "Aprimoramento de projetos aeroportuários com uso de BIM.",
  },
  {
    client: "CAESB",
    quote:
      "Não se faz BIM sem todos os recursos proporcionados pelas ferramentas Autodesk. É o casamento da metodologia com os recursos dos softwares.",
    person: "Fábio Barcellar",
    role: "Gerente de Projetos dos Sistemas de Esgotos",
    result: "Implementação BIM bem-sucedida em saneamento no Distrito Federal.",
  },
  {
    client: "Terracap",
    quote:
      "O aplicativo AutoCAD Civil 3D para geração de caminhamento de perímetro e quadros de unidades imobiliárias melhorou bastante a utilização dos recursos humanos da GEPRO.",
    person: "Gerência de Projetos (GEPRO)",
    role: "Terracap",
    result: "App customizado em Civil 3D para agilidade nos processos fundiários.",
  },
  {
    client: "Receita Federal",
    quote:
      "O pacote Autodesk, implementado com o apoio da Pro-Systems, tornou a fiscalização de obras mais ágil e com ganhos de qualidade.",
    person: "Receita Federal do Brasil",
    role: "Fiscalização de projetos",
    result: "BIM aplicado à fiscalização de obras públicas.",
  },
] as const;

export const EVENTS = [
  {
    date: "Set 2025",
    title: "Autodesk University 2025",
    kind: "Presença",
    body: "A Pro-Systems participou do maior evento global de projeto e construção da Autodesk, acompanhando as práticas que chegam aos projetos brasileiros.",
  },
  {
    date: "2026",
    title: "Webinar InfraWorks",
    kind: "Online",
    body: "Modele e visualize projetos de infraestrutura em contexto real antes da execução — estradas, terrapleno e entorno.",
  },
  {
    date: "2026",
    title: "BIM para órgãos públicos",
    kind: "Brasília",
    body: "Workshop sobre os decretos federais de BIM e a adoção prática em obras e serviços de engenharia.",
  },
  {
    date: "Contínuo",
    title: "Turmas ATC — Civil 3D e Revit",
    kind: "Presencial / EaD",
    body: "Capacitação oficial com instrutores certificados, material didático Autodesk e certificação.",
  },
] as const;

export const PRODUCTS = [
  "AEC Collection",
  "AutoCAD",
  "Revit",
  "Civil 3D",
  "InfraWorks",
  "Navisworks",
  "ReCap Pro",
  "FormIt Pro",
  "BIM Collaborate",
  "Autodesk Construction Cloud",
  "Dynamo",
  "Vehicle Tracking",
] as const;
