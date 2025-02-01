"use client";

import GlowBG from "./GlowBG";
import VerticalRuler from "./VerticalRuler";
import NavigationTab from "./NavigationTab";

function Main() {
  return (
    <main className="font-kode_mono">
      <div className="max-w-6xl mx-auto">
        <GlowBG /> {/* Glow main hero section */}
        <NavigationTab />
      </div>

      {/* Center Vertical Line */}
      <VerticalRuler position="center" />
      {/* Left Vertical Line */}
      <VerticalRuler position="left" />
      {/* Right Vertical Line */}
      <VerticalRuler position="right" />
    </main>
  );
}

export default Main;
