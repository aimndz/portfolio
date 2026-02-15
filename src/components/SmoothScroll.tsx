"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
        },
      });
    })();
  }, []);

  return null;
}
