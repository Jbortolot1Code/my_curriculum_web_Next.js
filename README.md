# Curriculo Web

Aplicação web de currículo/portfólio pessoal construída com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**.

O projeto foi desenvolvido como uma **single-page application (SPA)** para apresentar perfil profissional, experiências, habilidades, projetos, certificados e informações de contato em uma interface moderna, responsiva e multilíngue.

## Visão geral

O conteúdo do currículo é mantido de forma estática em arquivos TypeScript dentro de `src/data`, sem necessidade de backend ou banco de dados.

### Principais características

- Single-page application para currículo e portfólio
- Estrutura modular com componentes React
- Suporte a múltiplos idiomas (**PT / EN / ES**)
- Certificados com imagens e arquivos PDF
- Layout responsivo
- Preparado para deploy na **Vercel**

## Stack

- **Next.js 16**
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **ESLint 9**

## Estrutura do projeto

```text
curriculo_web/
├── public/
│   ├── files/
│   │   └── certificates/
│   └── images/
│       ├── certificates/
│       └── profile/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── contexts/
│   ├── data/
│   ├── types/
│   └── utils/
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Formação, referências e currículos

- `src/data/education.ts` centraliza a formação em PT, EN e ES. Atualize curso, instituição, período e status aqui; `in-progress` destaca a formação em andamento na página e nos dois currículos.
- `src/data/references.ts` registra os documentos de referência; seus textos traduzidos ficam em `src/data/translations.ts`. Os PDFs ficam em `public/files/references/`.
- `src/data/professionalCV.ts` define o resumo profissional e reutiliza experiências e competências da página. A seção de projetos do PDF inclui todos os itens com `statusType: "done"`.
- `websiteUrl` em `src/data/profile.ts` define o link destacado do currículo web no início do PDF profissional.
- `src/utils/generateProfessionalCV.ts` gera o PDF no navegador, com foto, fontes incorporadas e links internos para todos os certificados e referências. O código de geração só é carregado ao clicar no botão do rodapé.
- `src/data/curriculo_acadm.ts` e `src/utils/generateCV.ts` mantêm a versão acadêmica com impressão pelo navegador.

O PDF profissional inclui as páginas completas dos documentos, preservando seus tamanhos e orientações. Assinaturas digitais devem ser verificadas nos PDFs originais disponíveis no site; a cópia combinada serve para apresentação. As fontes Source Sans 3 e sua licença ficam em `public/fonts/cv/`.

Prévias locais em `output/pdf/` são ignoradas pelo Git.
