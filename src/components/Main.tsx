"use client";

import GlowBG from "./GlowBG";
import VerticalRuler from "./VerticalRuler";
import NavigationTab from "./NavigationTab";
import Footer from "./sections/Footer";

function Main() {
  return (
    <main className="font-montserrat text-p-default">
      <div>
        <GlowBG />
        <NavigationTab />
      </div>

      <Footer />

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
