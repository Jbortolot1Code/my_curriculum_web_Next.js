import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "ETL e estruturação de bases Access → SQLite",
    description:
      "Criação de pipelines para consolidar dados oriundos de bases legadas, organizar tabelas analíticas e preparar informações para consultas, validações e aplicações posteriores.",
    stack: ["Python", "SQLite", "Access", "SQL"],
    status: "Finalizado - TJRS",
  },
  {
    title: "Dashboards interativos para análise de folha",
    description:
      "Desenvolvimento de dashboards para exploração de dados financeiros, passivos e indicadores administrativos, com foco em visualização clara, filtros e apoio à tomada de decisão.",
    stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
    status: "Em andamento - TJRS",
  },
  {
    title: "Módulos de Cálculo Retroativos e Prospectivos",
    description:
      "Desenvolvimento de módulos de apuração envolvendo composição de bases de cálculo, aplicações de juros e correção monetária, projeções de reajustes salariais. Escopo do projeto inclui servidores públicos, magistrados, celetistas e cargos em comissão",
    stack: ["Python", "Streamlit", "Pandas"],
    status: "Em andamento - TJRS",
  },
  {
    title: "Projetos de Machine Learning",
    description:
      "Construção de modelo de regressão linear para projeção financeira de folha de pagamento considerando sazonalidades históricas e aplicação de técnicas de lagging e rolling.",
    stack: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Regressão Linear", "Séries Temporais"],
    status: "Finalizado - Projeto Pós-Graduação",
  },
];