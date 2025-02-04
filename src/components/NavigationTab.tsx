import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Home from "./Home";
import AllProjects from "./AllProjects";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

function NavigationTab() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const activeTab = pathname === "/projects" ? "projects" : "home";

  const handleTabChange = (value: string) => {
    router.push(`/${value}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-10">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="z-50">
        <div className="flex justify-center ">
          <TabsList className="w-52 h-12 fixed z-[999]">
            <TabsTrigger value="home" className="uppercase w-full h-9">
              Home
            </TabsTrigger>
            <TabsTrigger value="projects" className="uppercase w-full h-9">
              Proj
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="home">
          <Home />
        </TabsContent>
        <TabsContent value="projects">
          <AllProjects />
        </TabsContent>
      </Tabs>
      {/* <Button className="fixed z-[999] right-32 top-10 text-md flex gap-1 uppercase font-medium rounded-full py-6 px-6 bg-transparent text-muted-foreground hover:bg-s-muted hover:text-accent-100 transition-all duration-300">
        <span>Resume</span> <ArrowUpRight />
      </Button> */}
    </div>
  );
}

export default NavigationTab;
