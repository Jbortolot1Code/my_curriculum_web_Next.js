import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    key: "languages",
    title: "Linguagens & Programação",
    items: ["Python", "SQL", "VBA", "TypeScript"],
  },
  {
    key: "backend",
    title: "Engenharia de dados e bancos locais",
    items: ["Pandas", "SQLite", "DuckDB", "DBeaver", "Microsoft Access", "ETL", "Modelagem de dados", "Estruturas de dados locais", "SCD tipo 2", "Versionamento temporal"],
  },
  {
    key: "frontend",
    title: "Front-end & Visualização",
    items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"],
  },
  {
    key: "ml",
    title: "Análise & Machine Learning",
    items: ["Machine Learning", "Estatística", "Validação", "Feature engineering"],
  },
];
