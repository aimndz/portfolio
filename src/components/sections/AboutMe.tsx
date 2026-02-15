import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { ChevronsRight, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useState } from "react";

function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="about-me" className="mx-5 mt-36 max-w-4xl">
      <SectionTitle title="About me" />
      <div className="flex flex-col gap-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ amount: 0.1, once: true }}
          className="h-fit self-start rounded-xl border border-[#0C3741] bg-[#031C20] p-3 md:p-4"
        >
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Image
                src="/images/me-img.png"
                alt="About me"
                width={1500}
                height={1500}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 1.05,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Image
                src="/images/me-mirror-flashed.png"
                alt="About me (mirrored)"
                width={1500}
                height={1500}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
          <Separator className="my-3 bg-[#0C3741] md:my-4" />
          <div className="text-p-muted -mt-2 flex justify-center gap-3 md:flex-col md:gap-0">
            <div className="flex items-center gap-3">
              <Link
                href="mailto:amiel.ian.mendoza@gmail.com"
                className="focus-visible:ring-accent-100 rounded-md p-2 focus-visible:ring-2 focus-visible:outline-none md:m-0 md:p-0"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="mailto:amiel.ian.mendoza@gmail.com"
                className="hidden hover:underline md:block"
              >
                amiel.ian.mendoza@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/aim_ndz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open X (Twitter) profile"
                className="focus-visible:ring-accent-100 -m-2 rounded-md p-2 focus-visible:ring-2 focus-visible:outline-none md:m-0 md:p-0"
              >
                <svg
                  width={18}
                  height={18}
                  className="shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799"
                >
                  <path
                    fill="#979797"
                    fillRule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </Link>
              <Link
                href="https://x.com/aim_ndz"
                target="_blank"
                className="hidden hover:underline md:block"
              >
                @aim_ndz
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="text-md md:text-md text-p-accent-100">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
            viewport={{ amount: 0.1, once: true }}
          >
            I&apos;m a{" "}
            <span className="text-p-default">
              full-stack developer / artist
            </span>{" "}
            who sees programming the same way I see art. I started out drawing
            before I ever wrote code, and that creative way of thinking still
            shapes how I build today. I see programming as another medium — one
            where structure, clarity, and expression matter.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ amount: 0.1, once: true }}
          >
            In my spare time, you&apos;ll probably find me learning something
            playing new on tech. Other than that, you&apos;ll find me{" "}
            <span className="text-p-default">
              drawing, playing basketball, or gaming
            </span>
            . Whether it&apos;s art, code, or just figuring out a strategy,
            I&apos;m all about creating, trying new things, and having fun with
            it.{" "}
          </motion.p>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ amount: 0.1, once: true }}
            className="group flex justify-start"
          >
            <Link
              href="/about-me"
              className="group text-accent-100 hover:border-accent-100 flex items-center gap-3 border-b border-transparent"
            >
              <p>Let&apos;s Get Personal</p>
              <ChevronsRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
