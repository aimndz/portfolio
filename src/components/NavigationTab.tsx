import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Home from "./Home";
import AllProjects from "./AllProjects";
import Logo from "../../public/icons/Logo";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { content } from "@/lib/constants";

function NavigationTab() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const activeTab = pathname === "/projects" ? "projects" : "home";

  const handleTabChange = (value: string) => {
    const route = value === "home" ? "/" : `/${value}`;
    router.push(route);
  };

  return (
    <div className="mt-10 flex justify-center font-dm_mono">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="z-50">
        <div>
          <Link
            href="/"
            className="fixed left-10 top-14 z-[999] hidden md:block min-[900px]:left-32"
          >
            <Logo />
          </Link>

          <TabsList className="fixed left-1/2 top-10 z-[999] h-12 w-52 -translate-x-1/2 transform border border-[#0c374180] bg-[#06232b80] backdrop-blur-md">
            <div className="glow-top"></div>
            <TabsTrigger value="home" className="h-9 w-full uppercase">
              Home
            </TabsTrigger>
            <TabsTrigger value="projects" className="h-9 w-full uppercase">
              Proj
            </TabsTrigger>
          </TabsList>

          <Link href={content.socialLinks.resume} target="_blank">
            <Button className="text-md fixed right-6 z-[999] hidden gap-1 rounded-full bg-transparent px-6 py-6 font-medium uppercase text-p-default transition-all duration-300 hover:bg-s-muted hover:text-accent-100 md:top-10 md:flex min-[900px]:right-24">
              <span>Resume</span> <ArrowUpRight />
            </Button>
          </Link>
        </div>
        <TabsContent value="home">
          <Home />
        </TabsContent>
        <TabsContent value="projects">
          <AllProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default NavigationTab;
