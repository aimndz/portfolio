import dynamic from "next/dynamic";
import Hero from "./sections/Hero";

const AboutMe = dynamic(() => import("./sections/AboutMe"), { ssr: true });
const FeaturedProjects = dynamic(() => import("./sections/FeaturedProjects"), {
  ssr: true,
});
const Technologies = dynamic(() => import("./sections/Technologies"), {
  ssr: true,
});
const DecorativeRadar = dynamic(() => import("./DecorativeRadar"), {
  ssr: true,
});

function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="relative flex flex-col items-center">
        {/* Large Background Radar */}
        <DecorativeRadar className="top-[450px] left-0 -translate-x-1/2" />

        <AboutMe />
        <Technologies />
      </div>
      <FeaturedProjects />
    </div>
  );
}

export default Home;
