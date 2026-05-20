"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Skip smooth scroll on mobile devices for better performance
    if (window.innerWidth < 768) return;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          smoothTouch: false,
          touchMultiplier: 1.5,
        } as Record<string, unknown>,
      });
    })();
  }, []);

  return null;
}
