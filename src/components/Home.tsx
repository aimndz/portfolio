import AboutMe from "./sections/AboutMe";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import DecorativeRadar from "./DecorativeRadar";

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
