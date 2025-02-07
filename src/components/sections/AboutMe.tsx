import SectionTitle from "../SectionTitle";

function AboutMe() {
  return (
    <div className="max-w-4xl mx-10 mt-52">
      <SectionTitle title="About me" />
      <div className="text-p-muted md:text-lg text-md">
        <p>
          I&apos;m a{" "}
          <span className="text-p-default">full-stack developer</span> and an{" "}
          <span className="text-p-default">artist</span> who sees programming
          the same way I see art. I was an artist first before diving into
          development, so that creative mindset naturally carried over. I also
          love <span className="text-p-default">solving problems</span> (which I
          sometimes create myself), which makes coding the perfect blend of
          logic and creativity for me.
        </p>
        <br />
        <p>
          In my spare time, you&apos;ll probably find me learning something new
          on tech (lol nerd). Other than that, you&apos;ll find me playing
          basketball, drawing, or playing video games. Whether it&apos;s art,
          code, or strategy, I believe in creating, innovating, and having fun
          along the way.{" "}
          <span className="text-p-default">
            Let&apos;s build something awesome together!
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
