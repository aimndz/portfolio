import CrossHair from "../../public/icons/CrossHair";
import Github from "../../public/icons/Github";
import Instagram from "../../public/icons/Instagram";
import LinkedIn from "../../public/icons/LinkedIn";
import MapPin from "../../public/icons/MapPin";
import RadarImage from "../../public/images/RadarImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function Main() {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mt-16">
          <Tabs defaultValue="account" className="w-[400px] ">
            <div className="flex justify-center">
              <TabsList className="w-52">
                <TabsTrigger value="account" className="uppercase w-full">
                  Home
                </TabsTrigger>
                <TabsTrigger value="password" className="uppercase w-full">
                  Proj
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="account"></TabsContent>
            <TabsContent value="password"></TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col items-center h-screen space-y-4 relative">
          <div className="z-30 text-center mt-48">
            <div className="flex gap-3 items-center text-p-muted tracking-custom justify-center uppercase -mb-11 mt-3">
              <MapPin />
              <p>Philippines</p>
            </div>
            <h1 className="font-montserrat font-bold text-[10rem] gradient-text">
              <span className="mr-[-4px]">A</span>
              <span className="mr-[-4px]">I</span>
              <span className="ml-[-18px]">M</span>
            </h1>
            <p className="tracking-custom uppercase text-heading -mt-10">
              Amiel Ian Mendoza
            </p>
            <p className="flex gap-3 items-center text-p-muted tracking-custom uppercase mt-3">
              Full Stack Developer
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <Github />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
          <div className="absolute top-48 flex justify-center items-center">
            <RadarImage />
            <div className="absolute inset-0 flex justify-center items-center">
              <CrossHair />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
