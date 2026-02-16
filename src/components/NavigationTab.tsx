"use client";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import dynamic from "next/dynamic";

import Home from "./Home";
const AllProjects = dynamic(() => import("./AllProjects"), { ssr: true });
import Logo from "../../public/icons/Logo";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { content } from "@/lib/constants";

function NavigationTab() {
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = pathname === "/projects" ? "projects" : "home";

  const handleTabChange = (value: string) => {
    const route = value === "home" ? "/" : `/${value}`;
    router.push(route);
  };

  return (
    <div className="font-dm-mono mt-10 flex justify-center">
      <Tabs
        id="main-navigation"
        value={activeTab}
        onValueChange={handleTabChange}
        className="z-50"
      >
        <div>
          <Link
            href="/"
            aria-label="Home"
            className="fixed top-14 left-10 z-999 hidden min-[900px]:left-32 md:block"
          >
            <Logo />
          </Link>

          <TabsList className="fixed top-10 left-1/2 z-999 h-12 w-52 -translate-x-1/2 transform border border-[#0c374180] bg-[#06232b80] backdrop-blur-md">
            <div className="glow-top"></div>
            <TabsTrigger
              value="home"
              id="tabs-trigger-home"
              aria-label="Home"
              className="h-9 w-full uppercase"
            >
              Home
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              id="tabs-trigger-projects"
              aria-label="Projects"
              className="h-9 w-full uppercase"
            >
              Proj
            </TabsTrigger>
          </TabsList>

          <Link
            href={content.socialLinks.resume}
            target="_blank"
            aria-label="View Resume"
            className="text-md text-p-default hover:bg-s-muted hover:text-accent-100 fixed right-6 z-999 hidden items-center justify-center gap-1 rounded-full border border-transparent bg-transparent px-6 py-3 font-medium uppercase shadow-sm transition-all duration-300 min-[900px]:right-24 md:top-10 md:flex"
          >
            <span>Resume</span> <ArrowUpRight size={18} />
          </Link>
        </div>
        <TabsContent value="home" id="tabs-content-home">
          <Home />
        </TabsContent>
        <TabsContent value="projects" id="tabs-content-projects">
          <AllProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default NavigationTab;
