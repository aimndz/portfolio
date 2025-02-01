import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Home from "./Home";
import AllProjects from "./AllProjects";

function NavigationTab() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const activeTab = pathname === "/projects" ? "projects" : "home";

  const handleTabChange = (value: string) => {
    router.push(`/${value}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-16">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="z-50">
        <div className="flex justify-center">
          <TabsList className="w-52 h-12">
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
    </div>
  );
}

export default NavigationTab;
