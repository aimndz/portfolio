import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

function AboutMe() {
  return (
    <div className="mx-5 mt-36 max-w-4xl">
      <SectionTitle title="About me" />
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="h-fit self-start rounded-xl border border-[#0C3741] bg-[#031C20] p-3 md:p-4">
          <Image
            src={"/images/me-img.png"}
            alt="About me"
            width={1500}
            height={1500}
            className="rounded-lg"
          />
          <Separator className="my-3 bg-[#0C3741] md:my-4" />
          <div className="flex justify-center gap-3 md:flex-col md:gap-0">
            <div className="flex items-center justify-center gap-3">
              <Mail size={15} />
              <Link
                href="mailto:amiel.ian.mendoza@gmail.com"
                className="hidden hover:underline md:block"
              >
                amiel.ian.mendoza@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width={15}
                height={15}
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
                  fill="#fff"
                  fillRule="nonzero"
                  d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                />
              </svg>
              <Link
                href="https://x.com/aim_mndz"
                target="_blank"
                className="hidden hover:underline md:block"
              >
                @aim_mndz
              </Link>
            </div>
          </div>
        </div>
        <div className="text-md md:text-md text-p-accent-100">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.1 }}
          >
            I&apos;m a{" "}
            <span className="text-accent-100">
              full-stack developer and an artist
            </span>{" "}
            who sees programming the same way I see art. I was an artist first
            before diving into development, so that creative mindset naturally
            carried over. I also enjoy solving problems{" "}
            <span className="italic">(especially self-made ones)</span> because
            of the satisfaction when you finally figure it out.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ amount: 0.1 }}
          >
            In my spare time, you&apos;ll probably find me learning something
            new on tech <span className="italic">(lol nerd)</span>. Other than
            that, you&apos;ll find me{" "}
            <span className="text-accent-100">
              playing basketball, drawing, or playing video games
            </span>
            . Whether it&apos;s art, code, or just figuring out a strategy,
            I&apos;m all about creating, trying new things, and having fun with
            it.{" "}
          </motion.p>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ amount: 0.1 }}
            className="group flex justify-start"
          >
            <Link
              href="/about-me"
              className="flex items-center gap-3 border-b border-transparent text-white hover:border-white"
            >
              <p>⛶</p>
              <p>Let&apos;s Get Personal</p> <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
