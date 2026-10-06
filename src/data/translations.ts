export type Language = "pt" | "en" | "es";

export const translations: Record<Language, Record<string, unknown>> = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      certificates: "Certificados",
      references: "Referências",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Currículo Web",
      contactBtn: "Entrar em contato",
    },
    about: {
      eyebrow: "Sobre",
      title: "Quem sou eu",
      description:
        "Uma visão objetiva do meu perfil, da minha atuação e do foco técnico que venho desenvolvendo.",
      paragraph:
        "Tenho experiência em engenharia de dados e na estruturação de bases locais com SQLite, Microsoft Access e DBeaver, incluindo integração entre sistemas atuais e legados, modelagem SCD tipo 2 e versionamento temporal de regras de negócio. Também desenvolvo pipelines, automações e dashboards para análise de grandes volumes de dados e apoio à decisão.",
      areasTitle: "Frentes de atuação",
      educationTitle: "Formação acadêmica",
      currentStudyLabel: "Cursando atualmente",
      areas: [
        "Análise e estruturação de dados",
        "Automação de processos e rotinas",
        "Dashboards e visualização interativa",
        "Modelagem analítica e machine learning aplicado",
        "Soluções para contexto administrativo e financeiro",
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Trajetória e atuação",
      description:
        "Uma visão resumida da minha atuação profissional e minha trajetória de hardskills e softskills.",
      currentLabel: "Atual",
      items: [
        {
          company: "Tribunal de Justiça do Rio Grande do Sul",
          role: "Atuação com dados, folha de pagamento e automação",
          period: "Desde 2018",
          periodDetail: "Atualmente em atuação",
          description:
            "Atuação em rotinas analíticas, organização de bases complexas e desenvolvimento de soluções para tratamento, cruzamento e visualização de dados.",
          highlights: [
            "Automação de processos com Python e VBA",
            "Criação de dashboards e análises interativas",
            "Tratamento e organização de grandes volumes de dados",
            "Desenvolvimento de soluções de cálculo/apuração aplicadas ao contexto administrativo e financeiro",
          ],
        },
        {
          company: "Indústria Antoniazzi e Cia Ltda",
          role: "Coordenador de Produção e Expedição",
          period: "2011 – 2015",
          description:
            "Coordenação de equipe e recursos para produção industrial no ramo alimentício.",
          highlights: [
            "Uso de Excel avançado com Power Query para organização de dados e controle de produção",
            "Desenvolvimento de soluções para otimização de processos produtivos",
            "Liderança de equipe e gestão de recursos para garantir eficiência e qualidade",
            "Resiliência e capacidade de adaptação a desafios operacionais e logísticos típicos do setor industrial",
          ],
        },
        {
          company: "Exército Brasileiro",
          role: "Oficial das Forças Armadas - 2º Tenente",
          period: "2008 – 2011",
          description: "Oficial Temporário do Exército Brasileiro.",
          highlights: [
            "Disciplina, organização e liderança de equipes em contextos desafiadores",
            "Desenvolvimento de habilidades de planejamento, tomada de decisão e resolução de problemas",
            "Instrutor de tiro, lidando com pressão e situações de alta responsabilidade",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "O que venho construindo",
      description:
        "Alguns dos projetos e frentes técnicas que desenvolvo com foco em dados, automação, visualização e aplicações analíticas.",
      statusDone: "Concluído",
      statusInProgress: "Em andamento",
      items: [
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
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Regressão Linear",
            "Séries Temporais",
          ],
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
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Tecnologias e frentes de atuação",
      description:
        "Conjunto de ferramentas, linguagens e áreas em que venho atuando com maior frequência em projetos de dados, automação, visualização e análise.",
      languagesTitle: "Idiomas",
      languagesDescription:
        "Domínios e estudos atuais em línguas para atuação profissional e técnica.",
      groups: [
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
          items: [
            "Machine Learning",
            "Estatística",
            "Validação",
            "Feature engineering",
          ],
        },
      ],
      languages: [
        {
          code: "br",
          name: "Português",
          level: "Nativo",
          levelPercent: 100,
        },
        {
          code: "gb",
          name: "Inglês",
          level: "Intermediário",
          levelPercent: 55,
          note: "Em progresso — aulas particulares + preparação Cambridge (12 meses)",
        },
        {
          code: "es",
          name: "Espanhol",
          level: "Intermediário",
          levelPercent: 65,
          note: "Conversação fluida sem certificação formal",
        },
      ],
    },
    certificates: {
      eyebrow: "Certificados",
      title: "Formação",
      description:
        "Certificações e cursos que reforçam minha atuação em dados, programação, análise, automação e machine learning.",
      closeBtn: "Fechar",
      institution: "Instituição",
      year: "Ano",
      openFile: "Abrir arquivo",
      items: [
        {
          title: "Certificado de Graduação Ciências Contábeis - UFSM",
          issuer: "Universidade Federal de Santa Maria",
          date: "2015",
          category: "Contábeis/Finanças",
          description: "Graduação de ensino superior.",
        },
        {
          title: "Pós-Graduação Latu Sensu Data Science e Machine Learning - Xp Educação",
          issuer: "Xp Educação",
          date: "2025",
          category: "Tecnologia/Análise de Dados",
          description: "Pós-Graduação Latu Sensu Data Science e Machine Learning.",
        },
        {
          title: "Curso Python Avançado para Ciência de Dados - CNJ e UFPR",
          issuer: "Conselho Nacional de Justiça e Universidade Federal do Paraná",
          date: "2025",
          category: "Python",
          description: "Curso Python Avançado para Ciência de Dados.",
        },
        {
          title: "Pós-Graduação Lato Sensu Data Science com Inteligência Artificial - Xp Educação",
          issuer: "Xp Educação",
          date: "2025/2026",
          category: "Tecnologia/Análise de Dados",
          description:
            "Pós-Graduação Lato Sensu em Data Science com Inteligência Artificial, com 592 horas. Projeto aplicado em modelagem e visualização preditiva de folha de pagamento pública com machine learning e Streamlit.",
        },
      ],
    },
    references: {
      eyebrow: "Referências",
      title: "Reconhecimento profissional",
      description: "Documento que registra o reconhecimento da minha atuação e das competências desenvolvidas ao longo da trajetória profissional.",
      openFile: "Abrir referência (PDF)",
      items: {
        "army-commendation": {
          title: "Referência elogiosa",
          issuer: "Exército Brasileiro · 1º Regimento de Carros de Combate",
          description: "Referência emitida ao término do serviço como oficial, destacando liderança, organização, trabalho em equipe e atuação na área de comunicações e redes de informática.",
        },
      },
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      location: "Localização",
      email: "E-mail",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "voce@exemplo.com",
        subject: "Assunto",
        subjectPlaceholder: "Sobre o que você quer falar?",
        message: "Mensagem",
        messagePlaceholder: "Escreva sua mensagem...",
        submit: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso. Obrigado pelo contato!",
        errors: {
          invalid_name: "Informe um nome válido.",
          invalid_email: "Informe um e-mail válido.",
          invalid_message: "A mensagem precisa ter entre 10 e 4000 caracteres.",
          invalid_subject: "Assunto muito longo.",
          invalid_json: "Dados inválidos.",
          rate_limited: "Muitas tentativas. Aguarde um instante e tente novamente.",
          server_not_configured: "Serviço de envio indisponível no momento.",
          send_failed: "Não foi possível enviar. Tente novamente mais tarde.",
          network: "Falha de conexão. Verifique sua internet e tente novamente.",
        },
      },
    },
    footer: {
      copyright: "Currículo web com desenvolvimento autônomo por Jéferson Bortoloti",
      downloadCV: "Baixar Currículo Acadêmico",
      downloadProfessionalCV: "Baixar currículo profissional com anexos",
      generatingCV: "Preparando PDF...",
      downloadError: "Não foi possível gerar o PDF. Verifique sua conexão e tente novamente.",
    },
    profile: {
      role: "Dados, Automação e Soluções na Interface entre Negócio e Tecnologia",
      summary:
        "Atuo na interface entre negócio e tecnologia, traduzindo regras, processos e necessidades operacionais em soluções de dados, automação e apoio à decisão. Minha base começou com VBA, Power Query, Power Pivot e Access, evoluiu para Python e Jupyter Notebook na exploração e análise de dados, e hoje inclui dashboards em Streamlit, aplicações web com Next.js, pipelines e módulos para cálculos prospectivos de despesas, além de projetos de machine learning com foco em regressão linear. Também tenho experiência na refatoração de bases Access para SQLite, estruturando tabelas-fato com dezenas de milhões de registros para análise, desempenho e escalabilidade. Tenho formação de pós-graduação em Data Science e curso Bacharelado em Ciência da Computação na FIAP - Instituto Caldeira, com conclusão prevista em 2030 e venho direcionando minha atuação para integrar conhecimento técnico, visão analítica e entendimento de negócio.",
      contactText:
        "Estou aberto a conexões profissionais e oportunidades em dados, automação e desenvolvimento de soluções aplicadas, especialmente em contextos que exijam articulação entre regras de negócio, análise e tecnologia.",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      references: "References",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Web Resume",
      contactBtn: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "Who I am",
      description:
        "An objective overview of my profile, my work and the technical focus I have been developing.",
      paragraph:
        "I have experience in data engineering and structuring local databases with SQLite, Microsoft Access and DBeaver, including integration of current and legacy systems, SCD type 2 modeling and temporal versioning of business rules. I also develop pipelines, automation and dashboards to analyze large datasets and support decisions.",
      areasTitle: "Areas of expertise",
      educationTitle: "Education",
      currentStudyLabel: "Currently studying",
      areas: [
        "Data analysis and structuring",
        "Process and routine automation",
        "Dashboards and interactive visualization",
        "Analytical modeling and applied machine learning",
        "Solutions for administrative and financial contexts",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Career path",
      description:
        "A summarized view of my professional experience and my journey of hard skills and soft skills.",
      currentLabel: "Current",
      items: [
        {
          company: "Court of Justice of Rio Grande do Sul",
          role: "Data, payroll and automation specialist",
          period: "Since 2018",
          periodDetail: "Currently active",
          description:
            "Working on analytical routines, organizing complex databases and developing solutions for data processing, cross-referencing and visualization.",
          highlights: [
            "Process automation with Python and VBA",
            "Creation of dashboards and interactive analyses",
            "Processing and organizing large volumes of data",
            "Development of calculation/audit solutions applied to administrative and financial contexts",
          ],
        },
        {
          company: "Antoniazzi Industry Ltd.",
          role: "Production and Shipping Coordinator",
          period: "2011 – 2015",
          description:
            "Team and resource coordination for industrial production in the food industry.",
          highlights: [
            "Advanced Excel with Power Query for data organization and production control",
            "Development of solutions for optimizing production processes",
            "Team leadership and resource management to ensure efficiency and quality",
            "Resilience and adaptability to operational and logistical challenges typical of the industrial sector",
          ],
        },
        {
          company: "Brazilian Army",
          role: "Armed Forces Officer - 2nd Lieutenant",
          period: "2008 – 2011",
          description: "Temporary Officer of the Brazilian Army.",
          highlights: [
            "Discipline, organization and team leadership in challenging contexts",
            "Development of planning, decision-making and problem-solving skills",
            "Shooting instructor, dealing with pressure and high-responsibility situations",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "What I have been building",
      description:
        "Some of the projects and technical fronts I develop with a focus on data, automation, visualization and analytical applications.",
      statusDone: "Completed",
      statusInProgress: "In progress",
      items: [
        {
          title: "Payroll liabilities with temporal business rules",
          description: "Refactoring of a legacy calculation system built with Microsoft Access and Excel into a Python, SQLite and DuckDB solution for payroll liabilities, interest and monetary adjustments. Integration of current and legacy system data, covering more than 300 million rows and 20 years of history. Temporal versioning of business rules and SCD type 2 modeling to preserve historical records and apply the calculation criteria relevant to each period.",
          stack: ["Microsoft Access", "Microsoft Excel", "Python", "SQLite", "DuckDB", "SCD type 2", "Temporal versioning"],
          statusType: "done",
          context: "Payroll",
        },
        {
          title: "Financial impacts of payroll",
          description: "VBA solution integrating Microsoft Access and Excel to calculate the financial impacts of payroll. Structured data flows between databases and spreadsheets, application of calculation rules and consolidation of results for financial analysis and decision support.",
          stack: ["VBA", "Microsoft Access", "Microsoft Excel"],
          statusType: "done",
          context: "Payroll",
        },
        {
          title: "ETL and database structuring Access → SQLite",
          description:
            "Migration and consolidation of data from legacy Access databases into an analytical SQLite structure, with transformation pipelines, standardization and data preparation for validations, historical queries and analytical applications.",
          stack: ["Python", "SQLite", "Access", "SQL"],
          statusType: "done",
          context: "TJRS",
        },
        {
          title: "Interactive dashboards for payroll analysis",
          description:
            "Development of dashboards focused on payroll and financial liabilities analysis, with interactive visualizations, managerial filters and indicator exploration for monitoring and decision support.",
          stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
          statusType: "in-progress",
          context: "TJRS",
        },
        {
          title: "Retroactive and Prospective Calculation Modules",
          description:
            "Development of modules for calculating liabilities, retroactive amounts and expense projections, covering calculation base rules, interest, monetary correction and simulations applied to different functional categories.",
          stack: ["Python", "Streamlit", "Pandas", "Financial Math", "Accounting"],
          statusType: "done",
          context: "TJRS",
        },
        {
          title: "Machine Learning Projects",
          description:
            "Application of linear regression models on historical payroll time series for expense forecasting, using temporal lags and rolling windows to support predictive analyses.",
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Linear Regression",
            "Time Series",
          ],
          statusType: "done",
          context: "Postgraduate Project",
        },
        {
          title: "Interactive Portfolio Web App",
          description:
            "Multi-language web application with responsive design, interactive experience timeline, dynamic carousels, contact form with email delivery and integrated analytics. Personal platform built as a professional showcase and technical demonstration in React + Next.js.",
          stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
          statusType: "in-progress",
          context: "Personal Project",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies and areas of expertise",
      description:
        "Set of tools, languages and areas in which I have been working most frequently on data, automation, visualization and analysis projects.",
      languagesTitle: "Languages",
      languagesDescription:
        "Current proficiency and studies in languages for professional and technical use.",
      groups: [
        {
          key: "languages",
          title: "Languages & Programming",
          items: ["Python", "SQL", "VBA", "TypeScript"],
        },
        {
          key: "backend",
          title: "Data engineering and local databases",
          items: ["Pandas", "SQLite", "DuckDB", "DBeaver", "Microsoft Access", "ETL", "Data modeling", "Local data structures", "SCD type 2", "Temporal versioning"],
        },
        {
          key: "frontend",
          title: "Front-end & Visualization",
          items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"],
        },
        {
          key: "ml",
          title: "Analysis & Machine Learning",
          items: [
            "Machine Learning",
            "Statistics",
            "Validation",
            "Feature engineering",
          ],
        },
      ],
      languages: [
        {
          code: "br",
          name: "Portuguese",
          level: "Native",
          levelPercent: 100,
        },
        {
          code: "gb",
          name: "English",
          level: "Intermediate",
          levelPercent: 55,
          note: "In progress — private lessons + Cambridge preparation (12 months)",
        },
        {
          code: "es",
          name: "Spanish",
          level: "Intermediate",
          levelPercent: 65,
          note: "Fluent conversation without formal certification",
        },
      ],
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Education",
      description:
        "Certifications and courses that reinforce my work in data, programming, analysis, automation and machine learning.",
      closeBtn: "Close",
      institution: "Institution",
      year: "Year",
      openFile: "Open file",
      items: [
        {
          title: "Bachelor's Degree in Accounting - UFSM",
          issuer: "Federal University of Santa Maria",
          date: "2015",
          category: "Accounting/Finance",
          description: "Undergraduate degree.",
        },
        {
          title: "Postgraduate in Data Science and Machine Learning - Xp Education",
          issuer: "Xp Education",
          date: "2025",
          category: "Technology/Data Analysis",
          description: "Postgraduate specialization in Data Science and Machine Learning.",
        },
        {
          title: "Advanced Python for Data Science - CNJ and UFPR",
          issuer: "National Council of Justice and Federal University of Paraná",
          date: "2025",
          category: "Python",
          description: "Advanced Python for Data Science course.",
        },
        {
          title: "Postgraduate in Data Science with Artificial Intelligence - Xp Education",
          issuer: "Xp Education",
          date: "2025/2026",
          category: "Technology/Data Analysis",
          description:
            "Postgraduate specialization in Data Science with Artificial Intelligence, 592 hours. Applied project on predictive modeling and visualization of public payroll using machine learning and Streamlit.",
        },
      ],
    },
    references: {
      eyebrow: "References",
      title: "Professional recognition",
      description: "A document recording recognition of my work and the skills developed throughout my career.",
      openFile: "Open reference (PDF)",
      items: {
        "army-commendation": {
          title: "Letter of commendation",
          issuer: "Brazilian Army · 1st Tank Regiment",
          description: "Reference issued at the end of my service as an officer, highlighting leadership, organization, teamwork and work in communications and computer networks.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      location: "Location",
      email: "Email",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        subject: "Subject",
        subjectPlaceholder: "What would you like to discuss?",
        message: "Message",
        messagePlaceholder: "Write your message...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully. Thank you for reaching out!",
        errors: {
          invalid_name: "Please provide a valid name.",
          invalid_email: "Please provide a valid email address.",
          invalid_message: "Message must be between 10 and 4000 characters.",
          invalid_subject: "Subject is too long.",
          invalid_json: "Invalid data.",
          rate_limited: "Too many attempts. Please wait a moment and try again.",
          server_not_configured: "Sending service unavailable at the moment.",
          send_failed: "Could not send. Please try again later.",
          network: "Connection error. Check your internet and try again.",
        },
      },
    },
    footer: {
      copyright: "Web resume with independent development by Jéferson Bortoloti",
      downloadCV: "Download Academic CV",
      downloadProfessionalCV: "Download professional CV with documents",
      generatingCV: "Preparing PDF...",
      downloadError: "Could not generate the PDF. Check your connection and try again.",
    },
    profile: {
      role: "Data, Automation and Solutions at the Interface between Business and Technology",
      summary:
        "I work at the interface between business and technology, translating rules, processes and operational needs into data solutions, automation and decision support. My foundation started with VBA, Power Query, Power Pivot and Access, evolved to Python and Jupyter Notebook for data exploration and analysis, and today includes dashboards in Streamlit, web applications with Next.js, pipelines and modules for prospective expense calculations, as well as machine learning projects focused on linear regression. I also have experience refactoring Access databases to SQLite, structuring fact tables with tens of millions of records for analysis, performance and scalability. I have postgraduate training in Data Science and am pursuing a Bachelor's Degree in Computer Science at FIAP - Instituto Caldeira, with expected graduation in 2030 and have been directing my work to integrate technical knowledge, analytical vision and business understanding.",
      contactText:
        "I am open to professional connections and opportunities in data, automation and development of applied solutions, especially in contexts that require articulation between business rules, analysis and technology.",
    },
  },

  es: {
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      certificates: "Certificados",
      references: "Referencias",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Currículum Web",
      contactBtn: "Contactar",
    },
    about: {
      eyebrow: "Acerca de",
      title: "Quién soy",
      description:
        "Una visión objetiva de mi perfil, mi actuación y el enfoque técnico que vengo desarrollando.",
      paragraph:
        "Tengo experiencia en ingeniería de datos y en la estructuración de bases locales con SQLite, Microsoft Access y DBeaver, incluyendo integración de sistemas actuales y legados, modelado SCD tipo 2 y versionado temporal de reglas de negocio. También desarrollo pipelines, automatizaciones y dashboards para analizar grandes volúmenes de datos y apoyar decisiones.",
      areasTitle: "Áreas de actuación",
      educationTitle: "Formación académica",
      currentStudyLabel: "Estudios en curso",
      areas: [
        "Análisis y estructuración de datos",
        "Automatización de procesos y rutinas",
        "Dashboards y visualización interactiva",
        "Modelado analítico y machine learning aplicado",
        "Soluciones para contexto administrativo y financiero",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      description:
        "Una visión resumida de mi actuación profesional y mi trayectoria de habilidades técnicas e interpersonales.",
      currentLabel: "Actual",
      items: [
        {
          company: "Tribunal de Justicia de Rio Grande do Sul",
          role: "Especialista en datos, nómina y automatización",
          period: "Desde 2018",
          periodDetail: "Actualmente en actividad",
          description:
            "Actuación en rutinas analíticas, organización de bases complejas y desarrollo de soluciones para tratamiento, cruce y visualización de datos.",
          highlights: [
            "Automatización de procesos con Python y VBA",
            "Creación de dashboards y análisis interactivos",
            "Tratamiento y organización de grandes volúmenes de datos",
            "Desarrollo de soluciones de cálculo/auditoría aplicadas al contexto administrativo y financiero",
          ],
        },
        {
          company: "Industria Antoniazzi y Cía Ltda",
          role: "Coordinador de Producción y Expedición",
          period: "2011 – 2015",
          description:
            "Coordinación de equipo y recursos para producción industrial en el sector alimenticio.",
          highlights: [
            "Uso de Excel avanzado con Power Query para organización de datos y control de producción",
            "Desarrollo de soluciones para optimización de procesos productivos",
            "Liderazgo de equipo y gestión de recursos para garantizar eficiencia y calidad",
            "Resiliencia y capacidad de adaptación a desafíos operacionales y logísticos típicos del sector industrial",
          ],
        },
        {
          company: "Ejército Brasileño",
          role: "Oficial de las Fuerzas Armadas - 2º Teniente",
          period: "2008 – 2011",
          description: "Oficial Temporal del Ejército Brasileño.",
          highlights: [
            "Disciplina, organización y liderazgo de equipos en contextos desafiantes",
            "Desarrollo de habilidades de planificación, toma de decisiones y resolución de problemas",
            "Instructor de tiro, lidiando con presión y situaciones de alta responsabilidad",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Lo que vengo construyendo",
      description:
        "Algunos de los proyectos y frentes técnicos que desarrollo con enfoque en datos, automatización, visualización y aplicaciones analíticas.",
      statusDone: "Finalizado",
      statusInProgress: "En progreso",
      items: [
        {
          title: "Cálculo de pasivos de nómina con reglas temporales",
          description: "Refactorización de un sistema legado de cálculos en Microsoft Access y Excel hacia una solución en Python, SQLite y DuckDB para calcular pasivos de nómina, intereses y corrección monetaria. Integración de datos de los sistemas actual y legado, abarcando más de 300 millones de filas y 20 años de histórico. Versionado temporal de reglas de negocio y modelado SCD tipo 2 para preservar el histórico y aplicar los criterios de cálculo de cada período.",
          stack: ["Microsoft Access", "Microsoft Excel", "Python", "SQLite", "DuckDB", "SCD tipo 2", "Versionado temporal"],
          statusType: "done",
          context: "Nómina",
        },
        {
          title: "Repercusiones financieras de nómina",
          description: "Solución en VBA que integra Microsoft Access y Excel para calcular las repercusiones financieras de nómina. Estructuración del flujo entre bases de datos y hojas de cálculo, aplicación de reglas de cálculo y consolidación de resultados para análisis financiero y apoyo a decisiones.",
          stack: ["VBA", "Microsoft Access", "Microsoft Excel"],
          statusType: "done",
          context: "Nómina",
        },
        {
          title: "ETL y estructuración de bases Access → SQLite",
          description:
            "Migración y consolidación de datos provenientes de bases legadas en Access hacia una estructura analítica en SQLite, con pipelines de transformación, estandarización y preparación de datos para validaciones, consultas históricas y aplicaciones analíticas.",
          stack: ["Python", "SQLite", "Access", "SQL"],
          statusType: "done",
          context: "TJRS",
        },
        {
          title: "Dashboards interactivos para análisis de nómina",
          description:
            "Creación de dashboards orientados al análisis de nómina y pasivos financieros, con visualizaciones interactivas, filtros gerenciales y exploración de indicadores para seguimiento y apoyo a la toma de decisiones.",
          stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
          statusType: "in-progress",
          context: "TJRS",
        },
        {
          title: "Módulos de Cálculo Retroactivos y Prospectivos",
          description:
            "Desarrollo de módulos para cálculo de pasivos, retroactivos y proyecciones de gastos, contemplando reglas de base de cálculo, intereses, corrección monetaria y simulaciones aplicadas a diferentes categorías funcionales.",
          stack: ["Python", "Streamlit", "Pandas", "Matemática Financiera", "Contabilidad"],
          statusType: "done",
          context: "TJRS",
        },
        {
          title: "Proyectos de Machine Learning",
          description:
            "Aplicación de modelos de regresión lineal en series históricas de nómina para proyección de gastos, utilizando desfases temporales y ventanas móviles como apoyo a análisis predictivos.",
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Regresión Lineal",
            "Series Temporales",
          ],
          statusType: "done",
          context: "Proyecto Posgrado",
        },
        {
          title: "Portfolio Web Interactivo",
          description:
            "Aplicación web multiidioma con diseño responsivo, línea de tiempo interactiva de experiencias, carruseles dinámicos, formulario de contacto con envío por correo electrónico y analytics integrado. Plataforma personal desarrollada como vitrina profesional y demostración técnica en React + Next.js.",
          stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
          statusType: "in-progress",
          context: "Proyecto Personal",
        },
      ],
    },
    skills: {
      eyebrow: "Competencias",
      title: "Tecnologías y áreas de actuación",
      description:
        "Conjunto de herramientas, lenguajes y áreas en las que vengo actuando con mayor frecuencia en proyectos de datos, automatización, visualización y análisis.",
      languagesTitle: "Idiomas",
      languagesDescription:
        "Dominios y estudios actuales en lenguas para actuación profesional y técnica.",
      groups: [
        {
          key: "languages",
          title: "Lenguajes & Programación",
          items: ["Python", "SQL", "VBA", "TypeScript"],
        },
        {
          key: "backend",
          title: "Ingeniería de datos y bases locales",
          items: ["Pandas", "SQLite", "DuckDB", "DBeaver", "Microsoft Access", "ETL", "Modelado de datos", "Estructuras de datos locales", "SCD tipo 2", "Versionado temporal"],
        },
        {
          key: "frontend",
          title: "Front-end & Visualización",
          items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"],
        },
        {
          key: "ml",
          title: "Análisis & Machine Learning",
          items: [
            "Machine Learning",
            "Estadística",
            "Validación",
            "Feature engineering",
          ],
        },
      ],
      languages: [
        {
          code: "br",
          name: "Portugués",
          level: "Nativo",
          levelPercent: 100,
        },
        {
          code: "gb",
          name: "Inglés",
          level: "Intermedio",
          levelPercent: 55,
          note: "En progreso — clases particulares + preparación Cambridge (12 meses)",
        },
        {
          code: "es",
          name: "Español",
          level: "Intermedio",
          levelPercent: 65,
          note: "Conversación fluida sin certificación formal",
        },
      ],
    },
    certificates: {
      eyebrow: "Certificados",
      title: "Formación",
      description:
        "Certificaciones y cursos que refuerzan mi actuación en datos, programación, análisis, automatización y machine learning.",
      closeBtn: "Cerrar",
      institution: "Institución",
      year: "Año",
      openFile: "Abrir archivo",
      items: [
        {
          title: "Licenciatura en Ciencias Contables - UFSM",
          issuer: "Universidad Federal de Santa Maria",
          date: "2015",
          category: "Contabilidad/Finanzas",
          description: "Graduación de educación superior.",
        },
        {
          title: "Posgrado en Data Science y Machine Learning - Xp Educación",
          issuer: "Xp Educación",
          date: "2025",
          category: "Tecnología/Análisis de Datos",
          description: "Posgrado Lato Sensu en Data Science y Machine Learning.",
        },
        {
          title: "Curso Python Avanzado para Ciencia de Datos - CNJ y UFPR",
          issuer: "Consejo Nacional de Justicia y Universidad Federal de Paraná",
          date: "2025",
          category: "Python",
          description: "Curso Python Avanzado para Ciencia de Datos.",
        },
        {
          title: "Posgrado en Data Science con Inteligencia Artificial - Xp Educación",
          issuer: "Xp Educación",
          date: "2025/2026",
          category: "Tecnología/Análisis de Datos",
          description:
            "Posgrado Lato Sensu en Data Science con Inteligencia Artificial, 592 horas. Proyecto aplicado en modelado y visualización predictiva de nómina pública con machine learning y Streamlit.",
        },
      ],
    },
    references: {
      eyebrow: "Referencias",
      title: "Reconocimiento profesional",
      description: "Documento que registra el reconocimiento de mi actuación y de las competencias desarrolladas a lo largo de mi trayectoria profesional.",
      openFile: "Abrir referencia (PDF)",
      items: {
        "army-commendation": {
          title: "Referencia elogiosa",
          issuer: "Ejército Brasileño · 1.er Regimiento de Carros de Combate",
          description: "Referencia emitida al término del servicio como oficial, destacando liderazgo, organización, trabajo en equipo y actuación en comunicaciones y redes informáticas.",
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      location: "Ubicación",
      email: "Correo electrónico",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo electrónico",
        emailPlaceholder: "tu@ejemplo.com",
        subject: "Asunto",
        subjectPlaceholder: "¿Sobre qué quieres hablar?",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje...",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "Mensaje enviado con éxito. ¡Gracias por tu contacto!",
        errors: {
          invalid_name: "Proporciona un nombre válido.",
          invalid_email: "Proporciona un correo electrónico válido.",
          invalid_message: "El mensaje debe tener entre 10 y 4000 caracteres.",
          invalid_subject: "El asunto es demasiado largo.",
          invalid_json: "Datos inválidos.",
          rate_limited: "Demasiados intentos. Espera un momento e inténtalo de nuevo.",
          server_not_configured: "Servicio de envío no disponible en este momento.",
          send_failed: "No se pudo enviar. Inténtalo de nuevo más tarde.",
          network: "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
        },
      },
    },
    footer: {
      copyright: "Currículum web con desarrollo independiente por Jéferson Bortoloti",
      downloadCV: "Descargar Currículum Académico",
      downloadProfessionalCV: "Descargar currículum profesional con anexos",
      generatingCV: "Preparando PDF...",
      downloadError: "No se pudo generar el PDF. Comprueba tu conexión e inténtalo de nuevo.",
    },
    profile: {
      role: "Datos, Automatización y Soluciones en la Interfaz entre Negocio y Tecnología",
      summary:
        "Actúo en la interfaz entre negocio y tecnología, traduciendo reglas, procesos y necesidades operacionales en soluciones de datos, automatización y apoyo a la toma de decisiones. Mi base comenzó con VBA, Power Query, Power Pivot y Access, evolucionó hacia Python y Jupyter Notebook para la exploración y análisis de datos, y hoy incluye dashboards en Streamlit, aplicaciones web con Next.js, pipelines y módulos para cálculos prospectivos de gastos, además de proyectos de machine learning con enfoque en regresión lineal. También tengo experiencia en la refactorización de bases Access a SQLite, estructurando tablas de hechos con decenas de millones de registros para análisis, rendimiento y escalabilidad. Tengo formación de posgrado en Data Science y curso un grado en Ciencias de la Computación en FIAP - Instituto Caldeira, con graduación prevista en 2030 y he estado dirigiendo mi actuación para integrar conocimiento técnico, visión analítica y comprensión del negocio.",
      contactText:
        "Estoy abierto a conexiones profesionales y oportunidades en datos, automatización y desarrollo de soluciones aplicadas, especialmente en contextos que requieran articulación entre reglas de negocio, análisis y tecnología.",
    },
  },
};
