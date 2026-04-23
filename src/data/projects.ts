import type { Project } from "@/types";

export const projects: Project[] = [
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
