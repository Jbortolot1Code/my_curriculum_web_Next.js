export type Language = "pt" | "en" | "es";

export const translations: Record<Language, Record<string, unknown>> = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      certificates: "Certificados",
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
        "Tenho experiência na estruturação e análise de grandes volumes de dados, no desenvolvimento de pipelines e automações, na criação de dashboards interativos e na aplicação de técnicas analíticas e preditivas para geração de insights e apoio à decisão.",
      areasTitle: "Frentes de atuação",
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
      items: [
        {
          company: "Tribunal de Justiça do Rio Grande do Sul",
          role: "Atuação com dados, folha de pagamento e automação",
          period: "Desde 2018 (Atualmente em atuação)",
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
          period: "2011 a 2015",
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
          period: "2008 - 2011",
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
      items: [
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
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Regressão Linear",
            "Séries Temporais",
          ],
          status: "Finalizado - Projeto Pós-Graduação",
        },
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Tecnologias e frentes de atuação",
      description:
        "Conjunto de ferramentas, linguagens e áreas em que venho atuando com maior frequência em projetos de dados, automação, visualização e análise.",
      groups: [
        { title: "Linguagens e programação", items: ["Python", "SQL", "VBA", "TypeScript"] },
        { title: "Dados e bancos", items: ["Pandas", "SQLite", "Access", "ETL", "Modelagem de dados"] },
        { title: "Visualização e apps", items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"] },
        { title: "Análise e ML", items: ["Machine Learning", "Estatística", "Validação", "Feature engineering"] },
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
      ],
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
    },
    profile: {
      role: "Analista de Dados • Automação • Dashboards • Machine Learning",
      summary:
        "Sou entusiasta de dados, estatística, cálculo, automação de processos, dashboards interativos e soluções aplicadas a Datawarehouses. Tenho projetos em Python, SQL, VBA, Access, SQLite e Streamlit, com foco em cálculos, apurações, benchmarks, análise gerencial e uso inteligente de grandes volumes de dados.",
      contactText:
        "Estou aberto a conexões profissionais, troca de experiências e oportunidades relacionadas a dados, automação, análise e desenvolvimento de soluções aplicadas. Tenho disponibilidade para realocação para outros estados ou países.",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
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
        "I have experience in structuring and analyzing large volumes of data, developing pipelines and automations, creating interactive dashboards and applying analytical and predictive techniques to generate insights and support decision-making.",
      areasTitle: "Areas of expertise",
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
      items: [
        {
          company: "Court of Justice of Rio Grande do Sul",
          role: "Data, payroll and automation specialist",
          period: "Since 2018 (Currently active)",
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
          period: "2011 to 2015",
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
          period: "2008 - 2011",
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
      items: [
        {
          title: "ETL and database structuring Access → SQLite",
          description:
            "Creation of pipelines to consolidate data from legacy databases, organize analytical tables and prepare information for queries, validations and subsequent applications.",
          stack: ["Python", "SQLite", "Access", "SQL"],
          status: "Completed - TJRS",
        },
        {
          title: "Interactive dashboards for payroll analysis",
          description:
            "Development of dashboards for exploring financial data, liabilities and administrative indicators, with a focus on clear visualization, filters and decision support.",
          stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
          status: "In progress - TJRS",
        },
        {
          title: "Retroactive and Prospective Calculation Modules",
          description:
            "Development of audit modules involving composition of calculation bases, interest and monetary correction applications, salary adjustment projections. Project scope includes public servants, judges, CLT employees and commissioned positions.",
          stack: ["Python", "Streamlit", "Pandas"],
          status: "In progress - TJRS",
        },
        {
          title: "Machine Learning Projects",
          description:
            "Building a linear regression model for payroll financial projection considering historical seasonalities and application of lagging and rolling techniques.",
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Linear Regression",
            "Time Series",
          ],
          status: "Completed - Postgraduate Project",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies and areas of expertise",
      description:
        "Set of tools, languages and areas in which I have been working most frequently on data, automation, visualization and analysis projects.",
      groups: [
        { title: "Languages and programming", items: ["Python", "SQL", "VBA", "TypeScript"] },
        { title: "Data and databases", items: ["Pandas", "SQLite", "Access", "ETL", "Data modeling"] },
        { title: "Visualization and apps", items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"] },
        { title: "Analysis and ML", items: ["Machine Learning", "Statistics", "Validation", "Feature engineering"] },
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
      ],
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
    },
    profile: {
      role: "Data Analyst • Automation • Dashboards • Machine Learning",
      summary:
        "I am passionate about data, statistics, calculus, process automation, interactive dashboards and solutions applied to Data Warehouses. I have projects in Python, SQL, VBA, Access, SQLite and Streamlit, focused on calculations, audits, benchmarks, management analysis and intelligent use of large data volumes.",
      contactText:
        "I am open to professional connections, experience sharing and opportunities related to data, automation, analysis and development of applied solutions. I am available for relocation to other states or countries.",
    },
  },

  es: {
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      certificates: "Certificados",
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
        "Tengo experiencia en la estructuración y análisis de grandes volúmenes de datos, en el desarrollo de pipelines y automatizaciones, en la creación de dashboards interactivos y en la aplicación de técnicas analíticas y predictivas para la generación de insights y apoyo a la toma de decisiones.",
      areasTitle: "Áreas de actuación",
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
      items: [
        {
          company: "Tribunal de Justicia de Rio Grande do Sul",
          role: "Especialista en datos, nómina y automatización",
          period: "Desde 2018 (Actualmente en actividad)",
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
          period: "2011 a 2015",
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
          period: "2008 - 2011",
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
      items: [
        {
          title: "ETL y estructuración de bases Access → SQLite",
          description:
            "Creación de pipelines para consolidar datos provenientes de bases legadas, organizar tablas analíticas y preparar información para consultas, validaciones y aplicaciones posteriores.",
          stack: ["Python", "SQLite", "Access", "SQL"],
          status: "Finalizado - TJRS",
        },
        {
          title: "Dashboards interactivos para análisis de nómina",
          description:
            "Desarrollo de dashboards para exploración de datos financieros, pasivos e indicadores administrativos, con enfoque en visualización clara, filtros y apoyo a la toma de decisiones.",
          stack: ["Python", "Streamlit", "Pandas", "Qlik Sense"],
          status: "En progreso - TJRS",
        },
        {
          title: "Módulos de Cálculo Retroactivos y Prospectivos",
          description:
            "Desarrollo de módulos de auditoría involucrando composición de bases de cálculo, aplicaciones de intereses y corrección monetaria, proyecciones de reajustes salariales. Alcance del proyecto incluye servidores públicos, magistrados, empleados CLT y cargos comisionados.",
          stack: ["Python", "Streamlit", "Pandas"],
          status: "En progreso - TJRS",
        },
        {
          title: "Proyectos de Machine Learning",
          description:
            "Construcción de modelo de regresión lineal para proyección financiera de nómina considerando estacionalidades históricas y aplicación de técnicas de lagging y rolling.",
          stack: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Machine Learning",
            "Regresión Lineal",
            "Series Temporales",
          ],
          status: "Finalizado - Proyecto Posgrado",
        },
      ],
    },
    skills: {
      eyebrow: "Competencias",
      title: "Tecnologías y áreas de actuación",
      description:
        "Conjunto de herramientas, lenguajes y áreas en las que vengo actuando con mayor frecuencia en proyectos de datos, automatización, visualización y análisis.",
      groups: [
        { title: "Lenguajes y programación", items: ["Python", "SQL", "VBA", "TypeScript"] },
        { title: "Datos y bases de datos", items: ["Pandas", "SQLite", "Access", "ETL", "Modelado de datos"] },
        { title: "Visualización y apps", items: ["Streamlit", "Dashboards", "Altair", "React", "Next.js"] },
        { title: "Análisis y ML", items: ["Machine Learning", "Estadística", "Validación", "Feature engineering"] },
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
      ],
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
    },
    profile: {
      role: "Analista de Datos • Automatización • Dashboards • Machine Learning",
      summary:
        "Soy entusiasta de datos, estadística, cálculo, automatización de procesos, dashboards interactivos y soluciones aplicadas a Data Warehouses. Tengo proyectos en Python, SQL, VBA, Access, SQLite y Streamlit, con enfoque en cálculos, auditorías, benchmarks, análisis gerencial y uso inteligente de grandes volúmenes de datos.",
      contactText:
        "Estoy abierto a conexiones profesionales, intercambio de experiencias y oportunidades relacionadas con datos, automatización, análisis y desarrollo de soluciones aplicadas. Tengo disponibilidad para reubicación en otros estados o países.",
    },
  },
};
