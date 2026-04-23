"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type CarouselProps = {
  children: ReactNode;
  itemsPerViewDesktop?: number;
  itemsPerViewTablet?: number;
  itemsPerViewMobile?: number;
  gap?: number;
  glowClass?: string;
  ariaLabel?: string;
};

const SCROLL_SPEED_PX_PER_SEC = 340;

export function Carousel({
  children,
  itemsPerViewDesktop = 2,
  itemsPerViewTablet = 2,
  itemsPerViewMobile = 1,
  gap = 20,
  glowClass = "",
  ariaLabel,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const directionRef = useRef<0 | 1 | -1>(0);
  const lastTsRef = useRef<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const items = Children.toArray(children);
  const total = items.length;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(max > 2 && el.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateArrows();

    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateArrows());
    ro.observe(el);

    window.addEventListener("resize", onScroll);

    // Double-check after initial render settles (fonts, images)
    const t = window.setTimeout(updateArrows, 250);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [updateArrows]);

  const stop = useCallback(() => {
    directionRef.current = 0;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const start = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      if (directionRef.current === dir) return;
      directionRef.current = dir;
      lastTsRef.current = 0;

      const tick = (ts: number) => {
        const node = trackRef.current;
        if (!node || directionRef.current === 0) {
          rafRef.current = null;
          return;
        }
        if (lastTsRef.current === 0) lastTsRef.current = ts;
        const dt = (ts - lastTsRef.current) / 1000;
        lastTsRef.current = ts;
        const delta = SCROLL_SPEED_PX_PER_SEC * dt * directionRef.current;
        node.scrollLeft += delta;
        updateArrows();

        const max = node.scrollWidth - node.clientWidth;
        if (
          (directionRef.current === -1 && node.scrollLeft <= 0) ||
          (directionRef.current === 1 && node.scrollLeft >= max)
        ) {
          directionRef.current = 0;
          rafRef.current = null;
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    },
    [updateArrows],
  );

  const jump = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      stop();
      const firstItem = el.firstElementChild as HTMLElement | null;
      const step = firstItem ? firstItem.offsetWidth + gap : el.clientWidth * 0.8;
      const target = el.scrollLeft + step * dir;
      el.scrollTo({ left: target, behavior: "smooth" });
    },
    [gap, stop],
  );

  useEffect(() => stop, [stop]);

  const showArrows = total > itemsPerViewDesktop;

  const trackStyle = {
    gap: `${gap}px`,
    "--cz-gap": `${gap}px`,
    "--cz-per-mobile": itemsPerViewMobile,
    "--cz-per-tablet": itemsPerViewTablet,
    "--cz-per-desktop": itemsPerViewDesktop,
  } as CSSProperties;

  return (
    <div className="carousel-root relative" aria-label={ariaLabel} role="region">
      <div
        ref={trackRef}
        style={trackStyle}
        className="carousel-track no-scrollbar flex"
      >
        {items.map((child, idx) => (
          <div key={idx} className="carousel-item shrink-0">
            {child}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onMouseEnter={() => canScrollLeft && start(-1)}
            onMouseLeave={stop}
            onFocus={() => canScrollLeft && start(-1)}
            onBlur={stop}
            onClick={() => jump(-1)}
            disabled={!canScrollLeft}
            className={`carousel-arrow absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/85 text-white backdrop-blur transition md:flex ${
              canScrollLeft
                ? `opacity-60 hover:scale-110 hover:opacity-100 ${glowClass}`
                : "cursor-not-allowed opacity-20"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Próximo"
            onMouseEnter={() => canScrollRight && start(1)}
            onMouseLeave={stop}
            onFocus={() => canScrollRight && start(1)}
            onBlur={stop}
            onClick={() => jump(1)}
            disabled={!canScrollRight}
            className={`carousel-arrow absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/85 text-white backdrop-blur transition md:flex ${
              canScrollRight
                ? `opacity-60 hover:scale-110 hover:opacity-100 ${glowClass}`
                : "cursor-not-allowed opacity-20"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
