import AboutMe from "./sections/AboutMe";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Technologies />
      <FeaturedProjects />
    </>
  );
}

export default Home;
