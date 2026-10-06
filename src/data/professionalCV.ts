import { certificates } from "./certificates";
import { education } from "./education";
import { references } from "./references";
import { translations, type Language } from "./translations";
import type { Certificate, Experience, LanguageProficiency, Project, SkillGroup } from "@/types";

const copy = {
  pt: {
    documentTitle: "Currículo profissional",
    headline: "Dados · Automação · Desenvolvimento de soluções",
    summaryTitle: "Perfil profissional",
    summary: "Profissional com experiência em engenharia de dados, automação e soluções para contextos administrativos e financeiros. Experiência com Python, SQL, migração de bases Access para SQLite, dashboards em Streamlit e aplicações web em React e Next.js. Combino conhecimento de negócio, formação contábil e análise de dados para estruturar processos e apoiar decisões.",
    experienceTitle: "Experiência profissional",
    skillsTitle: "Competências e idiomas",
    educationTitle: "Formação acadêmica",
    currentStudyLabel: "Cursando atualmente",
    websiteLabel: "Currículo web e portfólio",
    projectsTitle: "Projetos concluídos",
    certificationsTitle: "Formação complementar",
    referencesTitle: "Referências",
    viewDocument: "Ver documento anexo",
    page: "Página",
    appendixNote: "Os certificados e a referência seguem nas próximas páginas, no idioma original. Clique nos links das seções para acessar os documentos. Para validar assinaturas digitais, consulte os PDFs originais no site.",
  },
  en: {
    documentTitle: "Professional CV",
    headline: "Data · Automation · Software solutions",
    summaryTitle: "Professional profile",
    summary: "Professional with experience in data engineering, automation and solutions for administrative and financial contexts. Experience with Python, SQL, migration of Access databases to SQLite, Streamlit dashboards and web applications with React and Next.js. I combine business knowledge, an accounting background and data analysis to structure processes and support decisions.",
    experienceTitle: "Professional experience",
    skillsTitle: "Skills and languages",
    educationTitle: "Education",
    currentStudyLabel: "Currently studying",
    websiteLabel: "Web CV and portfolio",
    projectsTitle: "Completed projects",
    certificationsTitle: "Additional training",
    referencesTitle: "References",
    viewDocument: "View supporting document",
    page: "Page",
    appendixNote: "Certificates and the reference follow on the next pages in their original language. Use the section links to jump to each document. To validate digital signatures, consult the original PDFs on the website.",
  },
  es: {
    documentTitle: "Currículum profesional",
    headline: "Datos · Automatización · Desarrollo de soluciones",
    summaryTitle: "Perfil profesional",
    summary: "Profesional con experiencia en ingeniería de datos, automatización y soluciones para contextos administrativos y financieros. Experiencia con Python, SQL, migración de bases Access a SQLite, dashboards en Streamlit y aplicaciones web con React y Next.js. Combino conocimiento del negocio, formación contable y análisis de datos para estructurar procesos y apoyar decisiones.",
    experienceTitle: "Experiencia profesional",
    skillsTitle: "Competencias e idiomas",
    educationTitle: "Formación académica",
    currentStudyLabel: "Estudios en curso",
    websiteLabel: "Currículum web y portafolio",
    projectsTitle: "Proyectos finalizados",
    certificationsTitle: "Formación complementaria",
    referencesTitle: "Referencias",
    viewDocument: "Ver documento anexo",
    page: "Página",
    appendixNote: "Los certificados y la referencia siguen en las próximas páginas, en su idioma original. Usa los enlaces de las secciones para acceder a los documentos. Para validar firmas digitales, consulta los PDFs originales en el sitio.",
  },
};

type ReferenceTranslation = { title: string; issuer: string; description: string };
type CertificateTranslation = Pick<Certificate, "title" | "issuer" | "date" | "description">;

export function getProfessionalCV(lang: Language) {
  const localized = translations[lang];
  const experience = (localized.experience as { items: Experience[] }).items;
  const projects = (localized.projects as { items: Project[] }).items;
  const skills = localized.skills as { groups: SkillGroup[]; languages: LanguageProficiency[] };
  const certificateCopy = (localized.certificates as { items: CertificateTranslation[] }).items;
  const referenceCopy = (localized.references as { items: Record<string, ReferenceTranslation> }).items;

  return {
    ...copy[lang],
    // O texto vem da página; somente os projetos concluídos entram no PDF.
    experiences: experience.map((item, index) => ({
      ...item,
      highlights: item.highlights.slice(0, 3),
      referenceId: index === 2 ? "army-commendation" : undefined,
    })),
    projects: projects.filter((item) => item.statusType === "done"),
    skills: skills.groups,
    languages: skills.languages,
    education: education[lang],
    certificates: certificates.map((item, index) => ({ ...item, ...certificateCopy[index] })),
    references: references.map((item) => ({ ...item, ...referenceCopy[item.id] })),
  };
}
