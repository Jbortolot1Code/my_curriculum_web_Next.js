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

    const desktopMql = window.matchMedia("(min-width: 1024px)");

    function reset() {
      el!.style.opacity = "";
      el!.style.pointerEvents = "";
    }

    function update() {
      if (!desktopMql.matches) {
        reset();
        return;
      }
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const opacity = Math.max(0, 1 - scrollY / (vh * 0.8));
      el!.style.opacity = String(opacity);
      el!.style.pointerEvents = opacity <= 0.01 ? "none" : "auto";
    }

    window.addEventListener("scroll", update, { passive: true });
    desktopMql.addEventListener("change", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      desktopMql.removeEventListener("change", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:overflow-hidden"
      style={{ willChange: "opacity" }}
    >
      {children}
    </div>
  );
}
