import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="mx-5 max-w-4xl md:mt-52">
      <SectionTitle title="About me" />
      <div className="text-md text-p-muted md:text-lg">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.1 }}
        >
          I&apos;m a{" "}
          <span className="text-p-default">full-stack developer</span> and an{" "}
          <span className="text-p-default">artist</span> who sees programming
          the same way I see art. I was an artist first before diving into
          development, so that creative mindset naturally carried over. I also
          love <span className="text-p-default">solving problems</span> (which I
          sometimes create myself), which makes coding the perfect blend of
          logic and creativity for me.
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ amount: 0.1 }}
        >
          In my spare time, you&apos;ll probably find me learning something new
          on tech (lol nerd). Other than that, you&apos;ll find me playing
          basketball, drawing, or playing video games. Whether it&apos;s art,
          code, or strategy, I believe in creating, innovating, and having fun
          along the way.{" "}
          <span className="text-p-default">
            Let&apos;s build something awesome together!
          </span>
        </motion.p>
      </div>
    </div>
  );
}

export default AboutMe;
