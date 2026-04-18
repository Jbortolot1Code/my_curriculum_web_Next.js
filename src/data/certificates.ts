import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Certificado de Graduação Ciências Contábeis - UFSM",
    issuer: "Universidade Federal de Santa Maria",
    date: "2015",
    category: "Contábeis/Finanças",
    thumbnail: "/images/certificates/Certificado_Graduacao-thumb.jpg",
    image: "/images/certificates/Certificado_Graduacao-preview.jpg",
    fileUrl: "/files/certificates/Certificado_Graduacao.pdf",
    description:
      "Graduação de ensino superior.",
  },
  {
    id: "cert-2",
    title: "Pós-Graduação Latu Sensu Data Science e Machine Learning - Xp Educação",
    issuer: "Xp Educação",
    date: "2025",
    category: "Tecnologia/Análise de Dados",
    thumbnail: "/images/certificates/Certificado_Pos_Data_Science-thumb.jpg",
    image: "/images/certificates/Certificado_Pos_Data_Science-preview.jpg",
    fileUrl: "/files/certificates/Certificado_Pos_Data_Science.pdf",
    description:
      "Pós-Graduação Latu Sensu Data Science e Machine Learning.",
  },
  {
    id: "cert-3",
    title: "Curso Python Avançado para Ciência de Dados - CNJ e UFPR",
    issuer: "Conselho Nacional de Justiça e Universidade Federal do Paraná",
    date: "2025",
    category: "Python",
    thumbnail: "/images/certificates/Certificado Curso Avançado de Ciência de Dados - CNJ e UFPR - thumb.jpg",
    image: "/images/certificates/Certificado Curso Avançado de Ciência de Dados - CNJ e UFPR - preview.jpg",
    fileUrl: "/files/certificates/Certificado Curso Avançado de Ciência de Dados - CNJ e UFPR.pdf",
    description:
      "Curso Python Avançado para Ciência de Dados.",
  },
];