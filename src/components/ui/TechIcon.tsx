import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiPandas,
  SiPython,
  SiQlik,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";

type BrandIconProps = {
  size?: number | string;
  color?: string;
  className?: string;
};

type BrandIcon = ComponentType<BrandIconProps>;

const BRAND_ICONS: Record<string, BrandIcon> = {
  python: SiPython,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  vercel: SiVercel,
  pandas: SiPandas,
  sqlite: SiSqlite,
  streamlit: SiStreamlit,
  scikitlearn: SiScikitlearn,
  qliksense: SiQlik,
  qlik: SiQlik,
};

type CustomIcon = {
  color: string;
  paths: string[];
  fill?: boolean;
};

// Custom clean stroke-based SVGs for tools Simple Icons doesn't cover
// (Microsoft Access, SQL, VBA, Altair, etc.)
const CUSTOM_ICONS: Record<string, CustomIcon> = {
  sql: {
    color: "#38BDF8",
    paths: [
      "M4 6 C4 4.5 7.58 3 12 3 C16.42 3 20 4.5 20 6 L20 18 C20 19.5 16.42 21 12 21 C7.58 21 4 19.5 4 18 Z",
      "M4 6 C4 7.5 7.58 9 12 9 C16.42 9 20 7.5 20 6",
      "M4 13 C4 14.5 7.58 16 12 16 C16.42 16 20 14.5 20 13",
    ],
  },
  access: {
    color: "#C9504C",
    paths: [
      "M4 6 C4 4.5 7.58 3 12 3 C16.42 3 20 4.5 20 6 L20 18 C20 19.5 16.42 21 12 21 C7.58 21 4 19.5 4 18 Z",
      "M4 6 C4 7.5 7.58 9 12 9 C16.42 9 20 7.5 20 6",
      "M4 13 C4 14.5 7.58 16 12 16 C16.42 16 20 14.5 20 13",
    ],
  },
  vba: {
    color: "#22C55E",
    paths: [
      "M3 4 L8 20 L12 10 L16 20 L21 4",
    ],
  },
  altair: {
    color: "#60A5FA",
    paths: [
      "M3 19 L9 9 L12 14 L17 5 L21 19 Z",
    ],
    fill: true,
  },
};

type GenericIcon = {
  symbol: string;
  color: string;
};

// Concept-level items (not brands) — rendered as styled unicode symbols
const GENERIC_ICONS: Record<string, GenericIcon> = {
  dashboards: { symbol: "▦", color: "#60A5FA" },
  "machine learning": { symbol: "◈", color: "#A855F7" },
  estatística: { symbol: "∑", color: "#A855F7" },
  statistics: { symbol: "∑", color: "#A855F7" },
  estadística: { symbol: "∑", color: "#A855F7" },
  validação: { symbol: "✓", color: "#22C55E" },
  validation: { symbol: "✓", color: "#22C55E" },
  validación: { symbol: "✓", color: "#22C55E" },
  "feature engineering": { symbol: "⚙", color: "#F59E0B" },
  "modelagem de dados": { symbol: "▤", color: "#06B6D4" },
  "data modeling": { symbol: "▤", color: "#06B6D4" },
  "modelado de datos": { symbol: "▤", color: "#06B6D4" },
  "regressão linear": { symbol: "📈", color: "#A855F7" },
  "linear regression": { symbol: "📈", color: "#A855F7" },
  "regresión lineal": { symbol: "📈", color: "#A855F7" },
  "séries temporais": { symbol: "⏱", color: "#06B6D4" },
  "time series": { symbol: "⏱", color: "#06B6D4" },
  "series temporales": { symbol: "⏱", color: "#06B6D4" },
  "matemática financeira": { symbol: "$", color: "#22C55E" },
  "financial math": { symbol: "$", color: "#22C55E" },
  "matemática financiera": { symbol: "$", color: "#22C55E" },
  contabilidade: { symbol: "€", color: "#F59E0B" },
  accounting: { symbol: "€", color: "#F59E0B" },
  contabilidad: { symbol: "€", color: "#F59E0B" },
  etl: { symbol: "⇄", color: "#06B6D4" },
};

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/[\s\-.]/g, "")
    .replace(/[áàâã]/g, "a")
    .replace(/[éê]/g, "e")
    .replace(/í/g, "i")
    .replace(/[óô]/g, "o")
    .replace(/ú/g, "u")
    .replace(/ç/g, "c");
}

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 16, className = "" }: TechIconProps) {
  const key = normalize(name);

  // 1. Brand icon via simple-icons package
  const Brand = BRAND_ICONS[key];
  if (Brand) {
    return (
      <Brand size={size} color="default" className={className} />
    );
  }

  // 2. Custom clean SVG
  const custom = CUSTOM_ICONS[key];
  if (custom) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={custom.fill ? custom.color : "none"}
        stroke={custom.color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {custom.paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  }

  // 3. Generic concept symbol
  const generic = GENERIC_ICONS[name.toLowerCase()] ?? GENERIC_ICONS[key];
  if (generic) {
    return (
      <span
        className={className}
        style={{
          fontSize: size * 0.95,
          color: generic.color,
          lineHeight: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
        }}
        aria-hidden="true"
      >
        {generic.symbol}
      </span>
    );
  }

  // 4. Fallback diamond
  return (
    <span
      className={className}
      style={{
        fontSize: size * 0.8,
        lineHeight: 1,
        color: "#94A3B8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      ◆
    </span>
  );
}

export function hasTechIcon(name: string): boolean {
  const key = normalize(name);
  return (
    !!BRAND_ICONS[key] ||
    !!CUSTOM_ICONS[key] ||
    !!GENERIC_ICONS[name.toLowerCase()] ||
    !!GENERIC_ICONS[key]
  );
}
