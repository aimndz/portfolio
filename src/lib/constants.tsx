import {
  Css3Original,
  ExpressOriginal,
  Html5Original,
  JavascriptOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";

export const content = {
  country: "Cavite, Philippines",
  fullName: "Amiel Ian Mendoza",
  position: "[ Full-Stack Developer ]",
  socialLinks: {
    github: "https://github.com/aimndz",
    instagram: "https://www.instagram.com/aim.ndz/",
    linkedin: "https://www.linkedin.com/in/amiel-ian-mendoza-aa8849312/",
    resume:
      "https://drive.google.com/file/d/1QUkCEfc5kdImTl1H2UehTn4-QgC0tA9S/view",
  },
  technologies: [
    {
      name: "TypeScript",
      icon: <TypescriptOriginal size={25} />,
    },
    {
      name: "JavaScript",
      icon: <JavascriptOriginal size={25} />,
    },
    {
      name: "NextJs",
      icon: <NextjsOriginal size={25} />,
    },
    {
      name: "React",
      icon: <ReactOriginal size={25} />,
    },
    {
      name: "NodeJS",
      icon: <NodejsOriginal size={25} />,
    },
    {
      name: "Express",
      icon: <ExpressOriginal size={25} color="white" />,
    },
    {
      name: "PostgreSQL",
      icon: <PostgresqlOriginal size={25} />,
    },
    {
      name: "Prisma",
      icon: <PrismaOriginal size={25} />,
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindcssOriginal size={25} />,
    },
    {
      name: "CSS",
      icon: <Css3Original size={25} />,
    },
    {
      name: "HTML",
      icon: <Html5Original size={25} />,
    },
  ],
  featuredProjects: [
    {
      name: "Bliss and Flair Commercial Building Website",
      image: "/images/projects/blissnflair.png",
      role: "Lead Developer and Designer",
      date: "Jan 2025",
      description:
        "Event management system for Bliss & Flair Commercial Building.",
      stack: ["TypeScript", "React", "Express", "PostgreSQL"],
      route: "https://github.com/aimndz/blissnflair",
    },
    {
      name: "Propertize",
      image: "/images/projects/propertize.png",
      role: "Lead Developer and Designer",
      date: "Jul 2024",
      description:
        "Real estate management system for buying, selling, and renting properties.",
      stack: ["CodeIgniter 4", "PHP", "MySQL"],
      route: "https://github.com/aimndz/propertize",
    },
  ],
  otherProjects: [
    {
      name: "Cinematrix",
      image: "/images/projects/cinematrix.png",
      role: "Lead Developer and Designer",
      date: "Jan 2024",
      description:
        "A cinema booking system for managing movie listings, ticket sales, and customer bookings.",
      stack: ["C#", "MySQL"],
      route: "https://github.com/aimndz/Cinematrix",
    },
  ],
};
