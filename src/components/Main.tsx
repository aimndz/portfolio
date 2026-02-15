"use client";

import VerticalRuler from "./VerticalRuler";
import NavigationTab from "./NavigationTab";
import Footer from "./sections/Footer";

function Main() {
  return (
    <main className="font-montserrat text-p-default">
      <NavigationTab />

      {/* Center Vertical Line */}
      <VerticalRuler position="center" />
      {/* Left Vertical Line */}
      <VerticalRuler position="left" />
      {/* Right Vertical Line */}
      <VerticalRuler position="right" />

      <Footer />
    </main>
  );
}

export default Main;
