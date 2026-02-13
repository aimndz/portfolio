import { content } from "@/lib/constants";
import ArrowDown from "../../../public/icons/CustomArrow";
import CrossHair from "../../../public/icons/CrossHair";
import Github from "../../../public/icons/Github";
import Instagram from "../../../public/icons/Instagram";
import LinkedIn from "../../../public/icons/LinkedIn";
import Logo from "../../../public/icons/Logo";
import MapPin from "../../../public/icons/MapPin";
import TextbyTextAnimate from "../TextbyTextAnimate";
import { motion } from "motion/react";
import Radar from "../Radar";
import Link from "next/link";
import { Paperclip } from "lucide-react";

function Hero() {
  const { country, fullName, position } = content;

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative mx-5 flex min-h-screen flex-col items-center">
      {/* Radar — positioned behind hero content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl translate-y-[15%] md:translate-y-[10%]">
          <Radar />
          {/* Horizontal Line */}
          <div className="bg-s-default absolute top-1/2 left-1/2 -z-10 h-px w-[calc(100vw-10px)] -translate-x-1/2"></div>

          {/* Crosshair */}
          <div className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, rotate: 135, opacity: 0 }}
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: 0,
                opacity: 1,
                transition: {
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                  rotate: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <CrossHair />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="z-10 mt-32 text-center md:mt-56"
      >
        {/* Country */}
        <div className="font-dm-mono text-p-muted mt-3 mb-3 flex items-center justify-center gap-3 text-sm md:text-base">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MapPin />
          </motion.div>
          <TextbyTextAnimate text={country} />
        </div>

        {/* Logo */}
        <div className="relative mx-5 flex h-24 items-center justify-center">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            style={{
              height: "100%",
              width: "auto",
            }}
          >
            <Logo className="h-full w-60 md:w-auto" />
          </motion.div>
        </div>

        {/* Full name */}
        <div className="font-montserrat text-heading mt-2 flex justify-center uppercase md:text-base">
          <TextbyTextAnimate
            text={fullName}
            size="text-2xl"
            className="text-accent-100 font-semibold tracking-normal normal-case"
          />
        </div>

        {/* Position */}
        <div className="font-dm-mono text-p-muted -mt-2 flex justify-center text-sm uppercase md:text-base">
          <TextbyTextAnimate
            text={position}
            className="text-p-muted normal-case"
          />
        </div>

        {/* Socials Icon */}
        <motion.div
          className="mt-2 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href={content.socialLinks.github} target="_blank">
            <Github />
          </Link>
          <Link href={content.socialLinks.instagram} target="_blank">
            <Instagram />
          </Link>
          <Link href={content.socialLinks.linkedin} target="_blank">
            <LinkedIn />
          </Link>
          <Link
            href={content.socialLinks.resume}
            target="_blank"
            className="block md:hidden"
          >
            <Paperclip className="text-p-muted" />
          </Link>
        </motion.div>
      </div>

      {/* Arrow Down — at the bottom of viewport */}
      <div className="z-20 mt-auto mb-40">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 15, 0],
            opacity: 1,
            transition: {
              opacity: {
                duration: 1,
                delay: 1,
              },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
          onClick={scrollToAboutMe}
          className="cursor-pointer"
        >
          <ArrowDown />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
