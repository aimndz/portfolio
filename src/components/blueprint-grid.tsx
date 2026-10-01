"use client";

import { useEffect, useRef, useState } from "react";

export function BlueprintGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    };

    const onPointerLeave = () => {
      targetX = -1000;
      targetY = -1000;
    };

    const updateSpotlight = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.12;
      currentY += dy * 0.12;

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--spotlight-x",
          `${Math.round(currentX)}px`,
        );
        containerRef.current.style.setProperty(
          "--spotlight-y",
          `${Math.round(currentY)}px`,
        );
      }

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(updateSpotlight);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      style={
        {
          "--spotlight-x": "-1000px",
          "--spotlight-y": "-1000px",
        } as React.CSSProperties
      }
    >
      {/* Ultra-subtle ambient drafting grid (48px interval, faint opacity so it never overpowers content) */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.022] transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 35%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 35%, black 30%, transparent 95%)",
        }}
      />

      {/* Gentle, soft-focus cursor illumination */}
      {mounted && (
        <div
          className="absolute inset-0 transition-opacity duration-300 hidden md:block"
          style={{
            backgroundImage: `
              radial-gradient(
                380px circle at var(--spotlight-x) var(--spotlight-y),
                currentColor 1px,
                transparent 1px
              )
            `,
            backgroundSize: "48px 48px",
            opacity: 0.028,
            maskImage: `radial-gradient(320px circle at var(--spotlight-x) var(--spotlight-y), black 10%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(320px circle at var(--spotlight-x) var(--spotlight-y), black 10%, transparent 80%)`,
          }}
        />
      )}
    </div>
  );
}
