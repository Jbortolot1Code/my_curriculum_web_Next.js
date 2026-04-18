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
