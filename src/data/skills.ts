import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    key: "languages",
    title: "Linguagens & Programação",
    items: ["Python", "SQL", "VBA", "TypeScript"],
  },
  {
    key: "backend",
    title: "Back-end & Databases",
    items: ["Pandas", "SQLite", "Access", "ETL", "Modelagem de dados"],
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
