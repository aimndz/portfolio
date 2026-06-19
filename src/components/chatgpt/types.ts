import {
  User,
  Folder,
  Grid,
  Briefcase,
  Mail,
  type LucideIcon,
} from "lucide-react";
import {
  about,
  experiences,
} from "@/data/portfolio";

export interface Message {
  id?: string;
  sender: "user" | "assistant";
  text: string;
  isStreaming?: boolean;
}

export interface Thread {
  id: string;
  title: string;
  messages: Message[];
}

export interface PromptOption {
  cmd: string;
  label: string;
  desc: string;
}

export interface SuggestedSection {
  cmd: string;
  label: string;
  Icon: LucideIcon;
}

export const ALLOWED_PROMPTS: PromptOption[] = [
  {
    cmd: "/about",
    label: "About Amiel Ian Mendoza",
    desc: "View bio, background, and hobbies",
  },
  {
    cmd: "/projects",
    label: "Projects & Selected Work",
    desc: "See built applications and repositories",
  },
  {
    cmd: "/skills",
    label: "Technical Skills & Stack",
    desc: "List frontend, backend, and development tools",
  },
  {
    cmd: "/experience",
    label: "Work Experience",
    desc: "Review founder roles and internships",
  },
  {
    cmd: "/contact",
    label: "Get in Touch",
    desc: "Find email address and social links",
  },
];

export const SUGGESTED_SECTIONS: SuggestedSection[] = [
  { cmd: "/about", label: "About Amiel", Icon: User },
  { cmd: "/projects", label: "Projects", Icon: Folder },
  { cmd: "/skills", label: "Skills", Icon: Grid },
  { cmd: "/experience", label: "Experience", Icon: Briefcase },
  { cmd: "/contact", label: "Contact", Icon: Mail },
];

export const EXPERIENCES_LIST_STRING = experiences
  .map(
    (exp, idx) =>
      `${idx + 1}. **${exp.role}** at **${exp.company}** (${exp.year})`,
  )
  .join("\n\n");

export const INITIAL_THREADS: Record<string, Thread> = {
  about: {
    id: "about",
    title: "About Amiel Ian Mendoza",
    messages: [
      { sender: "user", text: "/about" },
      {
        sender: "assistant",
        text: about.join("\n\n"),
      },
    ],
  },
  projects: {
    id: "projects",
    title: "Amiel's Featured Projects",
    messages: [
      { sender: "user", text: "/projects" },
      {
        sender: "assistant",
        text: "Here are some of the key projects Amiel Ian Mendoza has built:\n\n[PROJECTS_LIST]",
      },
    ],
  },
  skills: {
    id: "skills",
    title: "Technical Skills & Stack",
    messages: [
      { sender: "user", text: "/skills" },
      {
        sender: "assistant",
        text: "Amiel has a diverse set of skills across Frontend, Backend, and Development Tools:\n\n[SKILLS_GRID]",
      },
    ],
  },
  experience: {
    id: "experience",
    title: "Work Experience & History",
    messages: [
      { sender: "user", text: "/experience" },
      {
        sender: "assistant",
        text:
          "Here is Amiel Ian Mendoza's experience history:\n\n" +
          EXPERIENCES_LIST_STRING,
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Get in Touch / Contact",
    messages: [
      { sender: "user", text: "/contact" },
      {
        sender: "assistant",
        text: "You can reach out to Amiel Ian Mendoza through these channels:\n\n[CONTACT_INFO]",
      },
    ],
  },
};
