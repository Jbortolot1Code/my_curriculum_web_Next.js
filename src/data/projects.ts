import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Cálculo de passivos de folha com regras temporais",
    description: "Refatoração de um sistema legado de cálculos em Microsoft Access e Excel para uma solução em Python, SQLite e DuckDB, voltada à apuração de passivos de folha com juros e correção monetária. Integração de dados dos sistemas atual e legado, abrangendo mais de 300 milhões de linhas e 20 anos de histórico. Versionamento temporal de regras de negócio e modelagem SCD tipo 2 para preservar o histórico e aplicar os critérios de cálculo de cada período.",
    stack: ["Microsoft Access", "Microsoft Excel", "Python", "SQLite", "DuckDB", "SCD tipo 2", "Versionamento temporal"],
    statusType: "done",
    context: "Folha de pagamento",
  },
  {
    title: "Repercussões financeiras de folha de pagamento",
    description: "Solução em VBA que integra Microsoft Access e Excel para apurar repercussões financeiras de folha de pagamento. Estruturação do fluxo entre bases de dados e planilhas, aplicação de regras de cálculo e consolidação de resultados para análise financeira e apoio à decisão.",
    stack: ["VBA", "Microsoft Access", "Microsoft Excel"],
    statusType: "done",
    context: "Folha de pagamento",
  },
  {
    title: "ETL e estruturação de bases Access → SQLite",
    description:
      "Migração e consolidação de dados oriundos de bases legadas em Access para estrutura analítica em SQLite, com pipelines de transformação, padronização e preparação de dados para validações, consultas históricas e aplicações analíticas.",
    stack: ["Python", "SQLite", "Access", "SQL"],
    statusType: "done",
    context: "TJRS",
  },
  {
    title: "Dashboards interativos para análise de folha",
    description:
      "Criação de dashboards voltados à análise de folha de pagamento e passivos financeiros, com visualizações interativas, filtros gerenciais e exploração de indicadores para acompanhamento e suporte à decisão.",
    stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
    statusType: "in-progress",
    context: "TJRS",
  },
  {
    title: "Módulos de Cálculo Retroativos e Prospectivos",
    description:
      "Desenvolvimento de módulos para cálculo de passivos, retroativos e projeções de despesas, contemplando regras de base de cálculo, juros, correção monetária e simulações aplicadas a diferentes categorias funcionais.",
    stack: ["Python", "Streamlit", "Pandas", "Matemática Financeira", "Contabilidade"],
    statusType: "done",
    context: "TJRS",
  },
  {
    title: "Projetos de Machine Learning",
    description:
      "Aplicação de modelos de regressão linear em séries históricas de folha de pagamento para projeção de despesas, utilizando defasagens temporais e janelas móveis como apoio a análises preditivas.",
    stack: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Regressão Linear", "Séries Temporais"],
    statusType: "done",
    context: "Pós-Graduação",
  },
  {
    title: "Currículo e Portfolio Web Interativo",
    description:
      "Aplicação web multi-idioma com design responsivo, timeline interativa de experiências, carrosséis dinâmicos, formulário de contato com envio por e-mail e analytics integrado. Plataforma pessoal desenvolvida como vitrine profissional e demonstração técnica em React + Next.js.",
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
    statusType: "in-progress",
    context: "Projeto Pessoal",
  },
];
