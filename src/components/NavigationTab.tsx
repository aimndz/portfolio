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
    router.push(route, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-10">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="z-50">
        <div>
          <Link
            href="/"
            className="left-10 min-[900px]:left-32 top-14 hidden md:block fixed z-[999]"
          >
            <Logo />
          </Link>

          <TabsList className="w-52 h-12 fixed top-10 left-1/2 transform -translate-x-1/2 z-[999]">
            <div className="glow-top"></div>
            <TabsTrigger value="home" className="uppercase w-full h-9">
              Home
            </TabsTrigger>
            <TabsTrigger value="projects" className="uppercase w-full h-9">
              Proj
            </TabsTrigger>
          </TabsList>

          <Link href={content.socialLinks.resume} target="_blank">
            <Button className="fixed hidden z-[999] right-6 min-[900px]:right-24 md:top-10 text-md md:flex gap-1 uppercase font-medium rounded-full py-6 px-6 bg-transparent text-p-default hover:bg-s-muted hover:text-accent-100 transition-all duration-300">
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
