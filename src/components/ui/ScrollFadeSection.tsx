"use client";

import { useEffect, useRef } from "react";

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * "top"  (padrão) — começa a desaparecer quando o topo da seção sai pelo topo do viewport.
   * "late" — só desaparece quando o fundo da seção está prestes a sair. Ideal para seções longas.
   */
  variant?: "top" | "late";
}

export function ScrollFadeSection({
  children,
  className,
  variant = "top",
}: ScrollFadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const desktopMql = window.matchMedia("(min-width: 768px)");

    function update() {
      if (!desktopMql.matches) {
        el!.style.opacity = "";
        return;
      }
      const rect = el!.getBoundingClientRect();
      const vh = window.innerHeight;

      if (variant === "late") {
        const fadeStart = vh * 0.65;
        const fadeEnd = vh * -0.05;

        if (rect.bottom >= fadeStart) {
          el!.style.opacity = "1";
          return;
        }
        if (rect.bottom <= fadeEnd) {
          el!.style.opacity = "0";
          return;
        }
        const progress = (rect.bottom - fadeStart) / (fadeEnd - fadeStart);
        el!.style.opacity = String(1 - progress);
        return;
      }

      const fadeStart = vh * 0.2;
      const fadeEnd = vh * -0.55;

      if (rect.top >= fadeStart) {
        el!.style.opacity = "1";
        return;
      }
      if (rect.top <= fadeEnd) {
        el!.style.opacity = "0";
        return;
      }
      const progress = (rect.top - fadeStart) / (fadeEnd - fadeStart);
      el!.style.opacity = String(1 - progress);
    }

    window.addEventListener("scroll", update, { passive: true });
    desktopMql.addEventListener("change", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      desktopMql.removeEventListener("change", update);
    };
  }, [variant]);

  return (
    <div ref={ref} className={className} style={{ willChange: "opacity" }}>
      {children}
    </div>
  );
}
