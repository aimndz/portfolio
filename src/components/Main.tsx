"use client";

import ArrowDown from "../../public/icons/ArrowDown";
import CrossHair from "../../public/icons/CrossHair";
import Github from "../../public/icons/Github";
import Instagram from "../../public/icons/Instagram";
import LinkedIn from "../../public/icons/LinkedIn";
import MapPin from "../../public/icons/MapPin";
import RadarImage from "../../public/images/RadarImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { technologies } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { motion } from "motion/react";
import { content } from "@/lib/content";
import Image from "next/image";
import GlowBG from "./GlowBG";
import TextbyTextAnimate from "./TextbyTextAnimate";
import VerticalRuler from "./VerticalRuler";

function Main() {
  const { country, fullName, position } = content;

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        {/* Glow main hero section */}
        <GlowBG />

        {/* Tabs */}
        <div className="flex justify-center mt-16 ">
          <Tabs defaultValue="home" className="w-[400px] z-50 ">
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
            <TabsContent value="home"></TabsContent>
            <TabsContent value="projects"></TabsContent>
          </Tabs>
        </div>

        {/* Main Hero Section */}
        <div className="flex flex-col items-center h-screen space-y-4 ">
          <div className="z-30 text-center mt-48">
            <div className="flex gap-3 items-center text-p-muted tracking-custom justify-center uppercase -mb-11 mt-3">
              <MapPin />
              <TextbyTextAnimate text={country} />
            </div>
            <h1 className="flex justify-center font-montserrat font-extrabold text-[10rem] gradient-text">
              {["A", "I", "M"].map((letter, index) => (
                <motion.span
                  key={index}
                  className={index === 2 ? "ml-[-12px]" : "mr-[-4px]"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div className="flex justify-center tracking-custom uppercase text-heading -mt-10">
              <TextbyTextAnimate text={fullName} />
            </div>
            <div className="flex text-p-muted tracking-custom uppercase mt-3">
              <TextbyTextAnimate text={position} />
            </div>
            <div className="flex justify-center gap-3 mt-3">
              <Github />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
          <div className="absolute top-40 flex justify-center items-center w-full">
            <div className="max-w-5xl w-full ">
              <RadarImage />
            </div>
            <div className="absolute inset-0">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-s-default"></div>
            </div>
            <div className="absolute bottom-72 left-1/2 transform -translate-x-1/2 z-10">
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  transition: { duration: 2, repeat: Infinity },
                }}
                className="cursor-pointer"
              >
                <ArrowDown />
              </motion.div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
              >
                <CrossHair />
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="About me" />
          <p className="text-p-muted text-lg text-justify">
            I am a full-stack developer with a passion for both coding and
            creativity. I specialize in crafting pixel-perfect user interfaces
            that seamlessly combine intuitive design with solid engineering. My
            best work emerges at the crossroads of design and development, where
            I create experiences that are not only visually striking but also
            optimized for performance and usability.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-48 max-w-4xl mx-auto">
          <SectionTitle title="Technologies" />
          <div className="grid grid-cols-4 gap-3">
            {technologies.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-s-muted p-4 rounded-lg border border-s-default relative overflow-hidden"
                >
                  <i>{tech.icon}</i>
                  <p className="text-p-default">{tech.name}</p>
                  <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-full z-10 aspect-square rounded-full blur-lg bg-white opacity-10"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-48 max-w-4xl mx-auto mb-48 z-10">
          <SectionTitle title="Featured Projects" />
          <div className="bg-s-muted rounded-lg border border-s-default overflow-hidden">
            <div className="px-4 pt-4">
              <Image
                src="/images/blissnflair.png"
                alt="blissnflair"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative overflow-hidden p-4">
              <h3 className="font-bold text-xl">
                Bliss and Flair Commercial Building Website
              </h3>
              <p className="text-p-muted mt-4">
                An event place management system that offers venue booking,
                scheduling, and managing, providing a better experience for both
                admins and customers.
              </p>
              <div className="mt-4 flex gap-3">
                <div className="py-1 px-3 text-xs rounded-full bg-s-default border border-s-default overflow-hidden inline-block">
                  TypeScript
                </div>
                <div className="py-1 px-3 text-xs rounded-full bg-s-default border border-s-default overflow-hidden inline-block">
                  PostgreSQL
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <Github />
              </div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-full z-10 aspect-square rounded-full blur-2xl bg-white opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Center Vertical Line */}
      <div className="fixed left-1/2 top-0 h-full w-[1px] bg-s-default -z-10"></div>

      {/* Left Vertical Line */}
      <div className="fixed left-5 min-[900px]:left-20 top-0 h-full w-[1px] bg-s-default"></div>
      <VerticalRuler position="left" />

      {/* Right Vertical Line */}
      <div className="fixed right-5 min-[900px]:right-20 top-0 h-full w-[1px] bg-s-default"></div>
      <VerticalRuler position="right" />
    </main>
  );
}

export default Main;
