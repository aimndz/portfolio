import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function AboutMe() {
  return (
    <div className="mx-5 mt-36 max-w-4xl">
      <SectionTitle title="About me" />
      <div className="text-lg text-p-accent-100 md:text-xl">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.1 }}
          className="text-justify"
        >
          I&apos;m a{" "}
          <span className="text-accent-100">full-stack developer</span> and an{" "}
          <span className="text-accent-100">artist</span> who sees programming
          the same way I see art. I was an artist first before diving into
          development, so that creative mindset naturally carried over. I also
          enjoy solving problems{" "}
          <span className="italic">(especially self-made ones)</span> because of
          the satisfaction when you finally figure it out.
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ amount: 0.1 }}
          className="text-justify"
        >
          In my spare time, you&apos;ll probably find me learning something new
          on tech <span className="italic">(lol nerd)</span>. Other than that,
          you&apos;ll find me playing basketball, drawing, or playing video
          games. Whether it&apos;s art, code, or just figuring out a strategy,
          I&apos;m all about creating, trying new things, and having fun with
          it.{" "}
          <span className="text-accent-100">
            Let&apos;s build something cool together!
          </span>
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ amount: 0.1 }}
        className="group mt-10 flex justify-center md:justify-end"
      >
        <Link
          href="/about-me"
          className="relative inline-block overflow-hidden rounded-full"
        >
          <div className="glow-top"></div>
          <Button className="text-md hover:text-accent-30 rounded-full border border-s-default bg-s-muted px-6 py-6 font-medium uppercase text-accent-100 transition-all duration-300 hover:bg-s-muted">
            <span>Let&apos;s get personal</span> <ArrowRight />
          </Button>
          <div className="absolute left-1/2 top-10 aspect-square w-[150%] -translate-x-1/2 transform rounded-full bg-[#26B0CE] opacity-0 blur-lg group-hover:opacity-30"></div>
        </Link>
      </motion.div>
    </div>
  );
}

export default AboutMe;
