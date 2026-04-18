import type { Language } from "./translations";

export type AcademicEntry = {
  title: string;
  organization?: string;
  period?: string;
  description?: string;
  highlights?: string[];
};

export type AcademicEducation = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesisTitle?: string;
  advisor?: string;
  highlights?: string[];
};

export type AcademicSkillGroup = { title: string; items: string[] };

export type AcademicLanguageItem = { language: string; level: string };

export type AcademicReference = {
  name: string;
  role: string;
  institution: string;
  email: string;
};

export type AcademicConference = {
  title: string;
  event: string;
  location: string;
  date: string;
  kind?: string;
};

export type AcademicPublicationGroup = {
  label: string;
  items: string[];
};

export type AcademicCV = {
  documentTitle: string;
  researchInterests: { title: string; content?: string };
  education: { title: string; items?: AcademicEducation[] };
  researchExperience: { title: string; items?: AcademicEntry[] };
  teachingExperience: { title: string; items?: AcademicEntry[] };
  publications: { title: string; groups?: AcademicPublicationGroup[] };
  conferences: { title: string; items?: AcademicConference[] };
  awards: { title: string; items?: AcademicEntry[] };
  academicService: { title: string; items?: AcademicEntry[] };
  technicalSkills: { title: string; groups?: AcademicSkillGroup[] };
  certifications: { title: string; items?: AcademicEntry[] };
  memberships: { title: string; items?: string[] };
  languages: { title: string; items?: AcademicLanguageItem[] };
  references: {
    title: string;
    items?: AcademicReference[];
    uponRequestLabel?: string;
  };
};

export const academicCV: Record<Language, AcademicCV> = {
  pt: {
    documentTitle: "Currículo Acadêmico",
    researchInterests: {
      title: "Interesses de Pesquisa",
      content:
        "Aplicação de métodos quantitativos, estatística e machine learning a problemas analíticos no setor público, com ênfase em modelagem preditiva, análise de séries temporais e projeções financeiras de folha de pagamento. Linhas de interesse incluem automação de pipelines de dados, estruturação e análise de bases administrativas e financeiras complexas, desenvolvimento de soluções analíticas para apoio à tomada de decisão e uso aplicado de aprendizado de máquina em contextos de gestão pública.",
    },
    education: {
      title: "Formação Acadêmica",
      items: [
        {
          degree:
            "Pós-Graduação Lato Sensu em Data Science e Machine Learning",
          institution: "XP Educação",
          location: "Brasil",
          period: "2024 – 2025",
          thesisTitle:
            "Modelo de regressão linear para projeção financeira de folha de pagamento, com aplicação de técnicas de lagging, rolling e tratamento de sazonalidades históricas",
          highlights: [
            "Ênfase em modelagem preditiva, séries temporais e validação de modelos aplicados a dados financeiros",
          ],
        },
        {
          degree: "Bacharelado em Ciências Contábeis",
          institution: "Universidade Federal de Santa Maria (UFSM)",
          location: "Santa Maria, RS, Brasil",
          period: "Conclusão em 2015",
        },
      ],
    },
    researchExperience: {
      title: "Experiência em Pesquisa",
      items: [
        {
          title:
            "Modelagem preditiva aplicada à projeção financeira de folha de pagamento",
          organization:
            "Projeto vinculado à Pós-Graduação em Data Science e Machine Learning – XP Educação",
          period: "2024 – 2025",
          description:
            "Construção de modelo de regressão linear sobre séries temporais financeiras, com aplicação de técnicas de lagging, rolling e tratamento de sazonalidades históricas para projeção da folha de pagamento.",
          highlights: [
            "Métodos: regressão linear, séries temporais, feature engineering, validação",
            "Stack: Python, scikit-learn, Pandas",
            "Resultado: pipeline analítico para projeções financeiras com métricas de acurácia e estabilidade",
          ],
        },
        {
          title:
            "Apuração e composição de bases de cálculo aplicadas a regimes funcionais",
          organization:
            "Tribunal de Justiça do Rio Grande do Sul (TJRS) – Projeto institucional",
          period: "2018 – atual",
          description:
            "Desenvolvimento de módulos analíticos para composição de bases de cálculo, aplicação de juros e correção monetária e projeção de reajustes salariais aplicados a servidores públicos, magistrados, celetistas e cargos em comissão.",
          highlights: [
            "Métodos: cálculos retroativos e prospectivos, composição de bases, simulações financeiras",
            "Stack: Python, Streamlit, Pandas",
          ],
        },
        {
          title:
            "Estruturação e migração de bases administrativas legadas (ETL Access → SQLite)",
          organization: "Tribunal de Justiça do Rio Grande do Sul (TJRS)",
          period: "2018 – 2024",
          description:
            "Construção de pipelines de ETL para consolidação, limpeza e organização de bases oriundas de sistemas legados, viabilizando consultas analíticas, validações e aplicações posteriores.",
          highlights: [
            "Stack: Python, SQL, SQLite, Microsoft Access",
            "Resultado: bases analíticas estruturadas e auditáveis a partir de fontes heterogêneas",
          ],
        },
        {
          title:
            "Análise interativa de dados financeiros e indicadores administrativos",
          organization: "Tribunal de Justiça do Rio Grande do Sul (TJRS)",
          period: "Em andamento",
          description:
            "Desenvolvimento de dashboards exploratórios para análise de folha de pagamento, passivos e indicadores administrativos, com foco em visualização clara, filtros analíticos e suporte à tomada de decisão.",
          highlights: ["Stack: Python, Streamlit, Pandas, Qlik Sense"],
        },
      ],
    },
    teachingExperience: {
      title: "Experiência Didática",
      items: [
        {
          title: "Instrutor de Tiro",
          organization: "Exército Brasileiro",
          period: "2008 – 2011",
          description:
            "Atuação como instrutor em ambiente de alta responsabilidade, com ensino técnico, treinamento de equipes e desenvolvimento de competências sob pressão.",
        },
      ],
    },
    publications: { title: "Publicações" },
    conferences: { title: "Apresentações em Congressos / Palestras / Pôsteres" },
    awards: { title: "Prêmios, Bolsas e Financiamentos" },
    academicService: { title: "Serviço Acadêmico / Atividades Administrativas" },
    technicalSkills: {
      title: "Competências Técnicas e de Pesquisa",
      groups: [
        {
          title: "Métodos quantitativos",
          items: [
            "Regressão linear",
            "Análise de séries temporais",
            "Lagging e rolling",
            "Validação de modelos",
            "Feature engineering",
            "Estatística descritiva e inferencial",
          ],
        },
        {
          title: "Linguagens de programação",
          items: ["Python", "SQL", "VBA", "TypeScript"],
        },
        {
          title: "Bibliotecas e frameworks",
          items: [
            "Pandas",
            "scikit-learn",
            "Streamlit",
            "Altair",
            "React",
            "Next.js",
          ],
        },
        {
          title: "Bancos e modelagem de dados",
          items: [
            "SQLite",
            "Microsoft Access",
            "ETL",
            "Modelagem de dados",
          ],
        },
        {
          title: "Visualização e análise",
          items: ["Dashboards interativos", "Qlik Sense"],
        },
      ],
    },
    certifications: {
      title: "Treinamentos e Certificações",
      items: [
        {
          title: "Curso Python Avançado para Ciência de Dados",
          organization:
            "Conselho Nacional de Justiça (CNJ) e Universidade Federal do Paraná (UFPR)",
          period: "2025",
          description:
            "Formação avançada em Python aplicado à ciência de dados, com ênfase em manipulação, análise e modelagem.",
        },
      ],
    },
    memberships: { title: "Filiações Profissionais" },
    languages: { title: "Idiomas" },
    references: {
      title: "Referências",
      uponRequestLabel: "Disponíveis mediante solicitação.",
    },
  },

  en: {
    documentTitle: "Academic Curriculum Vitae",
    researchInterests: {
      title: "Research Interests",
      content:
        "Application of quantitative methods, statistics and machine learning to analytical problems in the public sector, with emphasis on predictive modeling, time series analysis and financial payroll projections. Lines of interest include automation of data pipelines, structuring and analysis of complex administrative and financial databases, development of analytical solutions to support decision-making, and applied use of machine learning in public management contexts.",
    },
    education: {
      title: "Education",
      items: [
        {
          degree:
            "Postgraduate Specialization in Data Science and Machine Learning",
          institution: "XP Education",
          location: "Brazil",
          period: "2024 – 2025",
          thesisTitle:
            "Linear regression model for financial payroll projection, applying lagging, rolling and historical seasonality techniques",
          highlights: [
            "Focus on predictive modeling, time series and model validation applied to financial data",
          ],
        },
        {
          degree: "Bachelor's Degree in Accounting",
          institution: "Federal University of Santa Maria (UFSM)",
          location: "Santa Maria, RS, Brazil",
          period: "Completed in 2015",
        },
      ],
    },
    researchExperience: {
      title: "Research Experience",
      items: [
        {
          title:
            "Predictive modeling applied to financial payroll projection",
          organization:
            "Project linked to the Postgraduate Program in Data Science and Machine Learning – XP Education",
          period: "2024 – 2025",
          description:
            "Construction of a linear regression model on financial time series, applying lagging, rolling and historical seasonality techniques for payroll projection.",
          highlights: [
            "Methods: linear regression, time series, feature engineering, validation",
            "Stack: Python, scikit-learn, Pandas",
            "Outcome: analytical pipeline for financial projections with accuracy and stability metrics",
          ],
        },
        {
          title:
            "Calculation base composition applied to functional regimes",
          organization:
            "Court of Justice of Rio Grande do Sul (TJRS) – Institutional project",
          period: "2018 – present",
          description:
            "Development of analytical modules for the composition of calculation bases, application of interest and monetary correction, and salary adjustment projections applied to public servants, judges, CLT employees and commissioned positions.",
          highlights: [
            "Methods: retroactive and prospective calculations, base composition, financial simulations",
            "Stack: Python, Streamlit, Pandas",
          ],
        },
        {
          title:
            "Structuring and migration of legacy administrative databases (ETL Access → SQLite)",
          organization: "Court of Justice of Rio Grande do Sul (TJRS)",
          period: "2018 – 2024",
          description:
            "Construction of ETL pipelines for consolidation, cleaning and organization of databases from legacy systems, enabling analytical queries, validations and subsequent applications.",
          highlights: [
            "Stack: Python, SQL, SQLite, Microsoft Access",
            "Outcome: structured and auditable analytical databases from heterogeneous sources",
          ],
        },
        {
          title:
            "Interactive analysis of financial data and administrative indicators",
          organization: "Court of Justice of Rio Grande do Sul (TJRS)",
          period: "Ongoing",
          description:
            "Development of exploratory dashboards for analysis of payroll, liabilities and administrative indicators, with focus on clear visualization, analytical filters and decision support.",
          highlights: ["Stack: Python, Streamlit, Pandas, Qlik Sense"],
        },
      ],
    },
    teachingExperience: {
      title: "Teaching Experience",
      items: [
        {
          title: "Shooting Instructor",
          organization: "Brazilian Army",
          period: "2008 – 2011",
          description:
            "Worked as an instructor in a high-responsibility environment, providing technical training, team coaching and skills development under pressure.",
        },
      ],
    },
    publications: { title: "Publications" },
    conferences: {
      title: "Conference Presentations / Talks / Posters",
    },
    awards: { title: "Awards, Scholarships and Funding" },
    academicService: {
      title: "Academic Service / Administrative Experience",
    },
    technicalSkills: {
      title: "Technical and Research Skills",
      groups: [
        {
          title: "Quantitative methods",
          items: [
            "Linear regression",
            "Time series analysis",
            "Lagging and rolling",
            "Model validation",
            "Feature engineering",
            "Descriptive and inferential statistics",
          ],
        },
        {
          title: "Programming languages",
          items: ["Python", "SQL", "VBA", "TypeScript"],
        },
        {
          title: "Libraries and frameworks",
          items: [
            "Pandas",
            "scikit-learn",
            "Streamlit",
            "Altair",
            "React",
            "Next.js",
          ],
        },
        {
          title: "Databases and data modeling",
          items: ["SQLite", "Microsoft Access", "ETL", "Data modeling"],
        },
        {
          title: "Visualization and analysis",
          items: ["Interactive dashboards", "Qlik Sense"],
        },
      ],
    },
    certifications: {
      title: "Training and Certifications",
      items: [
        {
          title: "Advanced Python for Data Science",
          organization:
            "National Council of Justice (CNJ) and Federal University of Paraná (UFPR)",
          period: "2025",
          description:
            "Advanced training in Python applied to data science, with emphasis on data manipulation, analysis and modeling.",
        },
      ],
    },
    memberships: { title: "Professional Memberships" },
    languages: { title: "Languages" },
    references: {
      title: "References",
      uponRequestLabel: "Available upon request.",
    },
  },

  es: {
    documentTitle: "Currículum Académico",
    researchInterests: {
      title: "Intereses de Investigación",
      content:
        "Aplicación de métodos cuantitativos, estadística y machine learning a problemas analíticos en el sector público, con énfasis en modelado predictivo, análisis de series temporales y proyecciones financieras de nómina. Líneas de interés incluyen automatización de pipelines de datos, estructuración y análisis de bases administrativas y financieras complejas, desarrollo de soluciones analíticas para apoyo a la toma de decisiones y uso aplicado de aprendizaje automático en contextos de gestión pública.",
    },
    education: {
      title: "Formación Académica",
      items: [
        {
          degree:
            "Posgrado Lato Sensu en Data Science y Machine Learning",
          institution: "XP Educación",
          location: "Brasil",
          period: "2024 – 2025",
          thesisTitle:
            "Modelo de regresión lineal para proyección financiera de nómina, aplicando técnicas de lagging, rolling y tratamiento de estacionalidades históricas",
          highlights: [
            "Énfasis en modelado predictivo, series temporales y validación de modelos aplicados a datos financieros",
          ],
        },
        {
          degree: "Licenciatura en Ciencias Contables",
          institution: "Universidad Federal de Santa Maria (UFSM)",
          location: "Santa Maria, RS, Brasil",
          period: "Conclusión en 2015",
        },
      ],
    },
    researchExperience: {
      title: "Experiencia en Investigación",
      items: [
        {
          title:
            "Modelado predictivo aplicado a la proyección financiera de nómina",
          organization:
            "Proyecto vinculado al Posgrado en Data Science y Machine Learning – XP Educación",
          period: "2024 – 2025",
          description:
            "Construcción de modelo de regresión lineal sobre series temporales financieras, aplicando técnicas de lagging, rolling y tratamiento de estacionalidades históricas para proyección de nómina.",
          highlights: [
            "Métodos: regresión lineal, series temporales, feature engineering, validación",
            "Stack: Python, scikit-learn, Pandas",
            "Resultado: pipeline analítico para proyecciones financieras con métricas de precisión y estabilidad",
          ],
        },
        {
          title:
            "Composición de bases de cálculo aplicadas a regímenes funcionales",
          organization:
            "Tribunal de Justicia de Rio Grande do Sul (TJRS) – Proyecto institucional",
          period: "2018 – actual",
          description:
            "Desarrollo de módulos analíticos para composición de bases de cálculo, aplicación de intereses y corrección monetaria, y proyección de reajustes salariales aplicados a servidores públicos, magistrados, empleados CLT y cargos comisionados.",
          highlights: [
            "Métodos: cálculos retroactivos y prospectivos, composición de bases, simulaciones financieras",
            "Stack: Python, Streamlit, Pandas",
          ],
        },
        {
          title:
            "Estructuración y migración de bases administrativas legadas (ETL Access → SQLite)",
          organization: "Tribunal de Justicia de Rio Grande do Sul (TJRS)",
          period: "2018 – 2024",
          description:
            "Construcción de pipelines de ETL para consolidación, limpieza y organización de bases provenientes de sistemas legados, viabilizando consultas analíticas, validaciones y aplicaciones posteriores.",
          highlights: [
            "Stack: Python, SQL, SQLite, Microsoft Access",
            "Resultado: bases analíticas estructuradas y auditables a partir de fuentes heterogéneas",
          ],
        },
        {
          title:
            "Análisis interactivo de datos financieros e indicadores administrativos",
          organization: "Tribunal de Justicia de Rio Grande do Sul (TJRS)",
          period: "En curso",
          description:
            "Desarrollo de dashboards exploratorios para análisis de nómina, pasivos e indicadores administrativos, con foco en visualización clara, filtros analíticos y soporte a la toma de decisiones.",
          highlights: ["Stack: Python, Streamlit, Pandas, Qlik Sense"],
        },
      ],
    },
    teachingExperience: {
      title: "Experiencia Docente",
      items: [
        {
          title: "Instructor de Tiro",
          organization: "Ejército Brasileño",
          period: "2008 – 2011",
          description:
            "Actuación como instructor en un entorno de alta responsabilidad, con enseñanza técnica, entrenamiento de equipos y desarrollo de competencias bajo presión.",
        },
      ],
    },
    publications: { title: "Publicaciones" },
    conferences: {
      title: "Presentaciones en Congresos / Charlas / Pósteres",
    },
    awards: { title: "Premios, Becas y Financiación" },
    academicService: {
      title: "Servicio Académico / Experiencia Administrativa",
    },
    technicalSkills: {
      title: "Competencias Técnicas y de Investigación",
      groups: [
        {
          title: "Métodos cuantitativos",
          items: [
            "Regresión lineal",
            "Análisis de series temporales",
            "Lagging y rolling",
            "Validación de modelos",
            "Feature engineering",
            "Estadística descriptiva e inferencial",
          ],
        },
        {
          title: "Lenguajes de programación",
          items: ["Python", "SQL", "VBA", "TypeScript"],
        },
        {
          title: "Bibliotecas y frameworks",
          items: [
            "Pandas",
            "scikit-learn",
            "Streamlit",
            "Altair",
            "React",
            "Next.js",
          ],
        },
        {
          title: "Bases de datos y modelado",
          items: ["SQLite", "Microsoft Access", "ETL", "Modelado de datos"],
        },
        {
          title: "Visualización y análisis",
          items: ["Dashboards interactivos", "Qlik Sense"],
        },
      ],
    },
    certifications: {
      title: "Entrenamientos y Certificaciones",
      items: [
        {
          title: "Curso Python Avanzado para Ciencia de Datos",
          organization:
            "Consejo Nacional de Justicia (CNJ) y Universidad Federal de Paraná (UFPR)",
          period: "2025",
          description:
            "Formación avanzada en Python aplicada a la ciencia de datos, con énfasis en manipulación, análisis y modelado.",
        },
      ],
    },
    memberships: { title: "Membresías Profesionales" },
    languages: { title: "Idiomas" },
    references: {
      title: "Referencias",
      uponRequestLabel: "Disponibles bajo solicitud.",
    },
  },
};
