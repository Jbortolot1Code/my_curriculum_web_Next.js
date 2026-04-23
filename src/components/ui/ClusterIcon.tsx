export type ClusterKey = "languages" | "backend" | "frontend" | "ml";

type ClusterIconProps = {
  cluster: ClusterKey;
  size?: number;
  className?: string;
};

const ICONS: Record<
  ClusterKey,
  { path: string; color: string; glow: string }
> = {
  languages: {
    color: "#60A5FA",
    glow: "rgba(96, 165, 250, 0.35)",
    path: "M8 3 L2 12 L8 21 M16 3 L22 12 L16 21 M14 3 L10 21",
  },
  backend: {
    color: "#06B6D4",
    glow: "rgba(6, 182, 212, 0.35)",
    path: "M4 5 C4 3.5 7.58 2 12 2 C16.42 2 20 3.5 20 5 L20 19 C20 20.5 16.42 22 12 22 C7.58 22 4 20.5 4 19 Z M4 5 C4 6.5 7.58 8 12 8 C16.42 8 20 6.5 20 5 M4 12 C4 13.5 7.58 15 12 15 C16.42 15 20 13.5 20 12",
  },
  frontend: {
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.35)",
    path: "M3 4 L21 4 L21 16 L3 16 Z M3 20 L21 20 M9 8 L9 12 M12 8 L12 12 M15 8 L15 12",
  },
  ml: {
    color: "#A855F7",
    glow: "rgba(168, 85, 247, 0.35)",
    path: "M12 2 L12 6 M12 18 L12 22 M4.93 4.93 L7.76 7.76 M16.24 16.24 L19.07 19.07 M2 12 L6 12 M18 12 L22 12 M4.93 19.07 L7.76 16.24 M16.24 7.76 L19.07 4.93 M9 12 A3 3 0 1 0 15 12 A3 3 0 1 0 9 12",
  },
};

export function ClusterIcon({
  cluster,
  size = 24,
  className = "",
}: ClusterIconProps) {
  const { path, color, glow } = ICONS[cluster];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ filter: `drop-shadow(0 0 6px ${glow})` }}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
