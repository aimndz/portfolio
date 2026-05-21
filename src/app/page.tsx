import { AboutSection } from "@/components/about-section";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto w-full max-w-[840px] px-4 pb-12 sm:px-6 flex-1 flex flex-col">
        <ProfileHero />
        <div className="mt-7 space-y-7 flex-1 flex flex-col">
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
