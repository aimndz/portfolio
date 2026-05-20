import { AboutSection } from "@/components/about-section";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TechnologiesSection } from "@/components/technologies-section";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteHeader />
      <div className="mx-auto w-full max-w-[840px] px-4 pb-12 sm:px-6">
        <ProfileHero />
        <div className="mt-7 space-y-7">
          <AboutSection />
          <TechnologiesSection />
          <ProjectsSection />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
