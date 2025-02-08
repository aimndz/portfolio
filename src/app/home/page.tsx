"use client";

import Main from "@/components/Main";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return <Main />;
}

export default HomePage;
