import { AboutSection } from "@/components/about-section";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { TechnologiesSection } from "@/components/technologies-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto w-full max-w-[840px] px-4 pb-12 sm:px-6">
        <ProfileHero />
        <div className="mt-9 space-y-7 sm:mt-10">
          <AboutSection />
          <TechnologiesSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}
