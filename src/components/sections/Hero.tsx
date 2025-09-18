import { content } from "@/lib/constants";
import ArrowDown from "../../../public/icons/ArrowDown";
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

  return (
    <div className="relative flex flex-col items-center space-y-4">
      {/* Hero Content */}
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="z-[100] mt-32 text-center md:mt-56"
      >
        {/* Country */}
        <div className="mb-3 mt-3 flex items-center justify-center gap-3 font-dm_mono text-sm text-p-muted md:text-base">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MapPin />
          </motion.div>
          <TextbyTextAnimate text={country} />
        </div>

        {/* Logo */}
        <div className="mx-5 flex h-[6rem] items-center justify-center">
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
        <div className="mt-2 flex justify-center font-montserrat uppercase text-heading md:text-base">
          <TextbyTextAnimate
            text={fullName}
            size="text-2xl"
            className="font-semibold normal-case tracking-normal text-accent-100"
          />
        </div>

        {/* Position */}
        <div className="-mt-2 flex justify-center font-dm_mono text-sm uppercase text-p-muted md:text-base">
          <TextbyTextAnimate
            text={position}
            className="normal-case text-p-muted"
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

      <div
        data-scroll
        data-scroll-speed="0.3"
        className="relative mt-96 flex w-full items-center justify-center"
      >
        <Radar />
        <div className="absolute inset-0 md:-mt-[22rem]">
          <div>
            {/* Horizontal Line */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[1px] w-[calc(100vw-10px)] -translate-x-1/2 bg-s-default"></div>

            {/* Crosshair */}
            <div className="absolute inset-0 z-50 flex items-center justify-center">
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

        {/* Arrow Down */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform min-[600px]:bottom-24 min-[750px]:bottom-60">
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
            className="cursor-pointer"
          >
            <ArrowDown />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
