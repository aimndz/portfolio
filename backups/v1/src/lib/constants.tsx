import Css3Original from "devicons-react/lib/icons/Css3Original";
import ExpressOriginal from "devicons-react/lib/icons/ExpressOriginal";
import Html5Original from "devicons-react/lib/icons/Html5Original";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import PrismaOriginal from "devicons-react/lib/icons/PrismaOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";

export type Project = {
  name: string;
  slug: string;
  image: string;
  role: string;
  date: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  screenshots: string[];
  features: string[];
  challenges?: string;
  lessonsLearned?: string;
};

export const content = {
  country: "Cavite, Philippines",
  fullName: "Amiel Ian Mendoza",
  position: "Full-Stack Developer",
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
      slug: "blissnflair",
      image: "/images/projects/blissnflair.webp",
      role: "Lead Developer and Designer",
      date: "Jan 2025",
      description:
        "Event management system for Bliss & Flair Commercial Building.",
      longDescription:
        "A full-featured event management platform built for Bliss & Flair Commercial Building. The system allows clients to browse available event spaces, submit booking requests, and manage their reservations — while the admin dashboard enables building managers to oversee all bookings, approve or reject requests, and monitor space utilization in real time.",
      stack: ["TypeScript", "React", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/aimndz/blissnflair",
      screenshots: ["/images/projects/blissnflair.webp"],
      features: [
        "Event space browsing and booking system",
        "Admin dashboard for managing reservations",
        "Real-time booking status updates",
        "Responsive design for all devices",
        "User authentication and role-based access",
      ],
      challenges:
        "Building a reliable booking system that handles concurrent requests and prevents double-booking was one of the biggest challenges. Implementing real-time status updates while keeping the UI responsive required careful state management.",
      lessonsLearned:
        "This project deepened my understanding of full-stack architecture, database design for scheduling systems, and the importance of thorough error handling in production applications.",
    },
    {
      name: "Propertize",
      slug: "propertize",
      image: "/images/projects/propertize.webp",
      role: "Lead Developer and Designer",
      date: "Jul 2024",
      description:
        "Real estate management system for buying, selling, and renting properties.",
      longDescription:
        "A comprehensive real estate management platform that streamlines the process of listing, buying, selling, and renting properties. The system features property search with advanced filtering, detailed listing pages with image galleries, and a complete transaction management workflow.",
      stack: ["CodeIgniter 4", "PHP", "MySQL"],
      githubUrl: "https://github.com/aimndz/propertize",
      screenshots: ["/images/projects/propertize.webp"],
      features: [
        "Property listing with image galleries",
        "Advanced search and filtering",
        "Transaction management workflow",
        "User dashboard for buyers and sellers",
        "Admin panel for content moderation",
      ],
      challenges:
        "Designing a database schema that could efficiently handle complex property queries with multiple filters was a significant challenge. Optimizing image loading for listings with many photos also required creative solutions.",
      lessonsLearned:
        "This project taught me the importance of database indexing for search performance and gave me valuable experience with the MVC architecture pattern through CodeIgniter 4.",
    },
  ] as Project[],
  otherProjects: [
    {
      name: "Cinematrix",
      slug: "cinematrix",
      image: "/images/projects/cinematrix.webp",
      role: "Lead Developer and Designer",
      date: "Jan 2024",
      description:
        "A cinema booking system for managing movie listings, ticket sales, and customer bookings.",
      longDescription:
        "A desktop cinema booking application that provides a complete solution for movie theater management — from listing now-showing films and scheduling screenings to processing ticket purchases and managing customer bookings.",
      stack: ["C#", "MySQL"],
      githubUrl: "https://github.com/aimndz/Cinematrix",
      screenshots: ["/images/projects/cinematrix.webp"],
      features: [
        "Movie listing and screening scheduler",
        "Seat selection and ticket booking",
        "Customer management system",
        "Sales reporting and analytics",
      ],
      challenges:
        "Creating an intuitive seat selection UI and ensuring the booking process was atomic (preventing race conditions) were the primary challenges.",
      lessonsLearned:
        "This was my introduction to building complete CRUD applications with a relational database, and it solidified my understanding of desktop application architecture.",
    },
    {
      name: "ThisIsWhereYourTaxesGo",
      slug: "thisiswhereyourtaxesgo",
      image: "/images/projects/thisiswhereyourtaxesgo.webp",
      role: "Developer and Designer",
      date: "Sep 2025",
      description: "Visualize how taxes are spent.",
      longDescription:
        "A desktop cinema booking application that provides a complete solution for movie theater management — from listing now-showing films and scheduling screenings to processing ticket purchases and managing customer bookings.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/aimndz/thisiswhereyourtaxesgo",
      screenshots: ["/images/projects/thisiswhereyourtaxesgo.webp"],
      features: ["Visualize how taxes are spent"],
      challenges:
        "Creating an intuitive seat selection UI and ensuring the booking process was atomic (preventing race conditions) were the primary challenges.",
      lessonsLearned:
        "This was my introduction to building complete CRUD applications with a relational database, and it solidified my understanding of desktop application architecture.",
    },
    {
      name: "Furfeit",
      slug: "furfeit",
      image: "/images/projects/furfeit.webp",
      role: "Developer and Designer",
      date: "Sep 2025",
      description: "Visualize how taxes are spent.",
      longDescription:
        "A desktop cinema booking application that provides a complete solution for movie theater management — from listing now-showing films and scheduling screenings to processing ticket purchases and managing customer bookings.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/aimndz/thisiswhereyourtaxesgo",
      screenshots: ["/images/projects/thisiswhereyourtaxesgo.png"],
      features: ["Visualize how taxes are spent"],
      challenges:
        "Creating an intuitive seat selection UI and ensuring the booking process was atomic (preventing race conditions) were the primary challenges.",
      lessonsLearned:
        "This was my introduction to building complete CRUD applications with a relational database, and it solidified my understanding of desktop application architecture.",
    },
  ] as Project[],
};
