"use client";

import { useEffect, useRef } from "react";

interface StickyHeroSectionProps {
  children: React.ReactNode;
}

export function StickyHeroSection({ children }: StickyHeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Fade completo ao rolar ~80% do viewport
      const opacity = Math.max(0, 1 - scrollY / (vh * 0.8));
      el!.style.opacity = String(opacity);
      el!.style.pointerEvents = opacity <= 0.01 ? "none" : "auto";
    }

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={ref}
      className="sticky top-0 z-0 h-screen overflow-hidden"
      style={{ willChange: "opacity" }}
    >
      {children}
    </div>
  );
}
