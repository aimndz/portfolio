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
      description:
        "An event place management system build for Bliss and Flair Commercial Building that offers venue booking, scheduling, and managing, providing a better experience for both admins and customers.",
      stack: ["TypeScript", "React", "Express", "PostgreSQL"],
      route: "https://github.com/aimndz/blissnflair",
    },
    {
      name: "Propertize",
      image: "/images/projects/propertize.png",
      role: "Lead Developer and Designer",
      description:
        "Propertize is a real estate management system designed to simplify buying, selling, and renting properties.",
      stack: ["CodeIgniter 4", "PHP", "MySQL"],
      route: "https://github.com/aimndz/propertize",
    },
  ],
  otherProjects: [
    {
      name: "Cinematrix",
      image: "/images/projects/cinematrix.png",
      role: "Lead Developer and Designer",
      description:
        "Cinematrix is a simple yet powerful cinema booking management system. It's designed to make managing cinema operations a breeze, from handling movie listings to processing ticket sales and tracking customer bookings.",
      stack: ["C#", "MySQL"],
      route: "https://github.com/aimndz/Cinematrix",
    },
  ],
};
