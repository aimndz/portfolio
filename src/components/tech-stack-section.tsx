import { SectionHeading } from "@/components/section-heading";
import { techStackIcons } from "@/components/tech-stack-icons";
import { techStack } from "@/data/portfolio";

type TechStackIconName = keyof typeof techStackIcons;

export function TechStackSection() {
  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      tag: "CORE",
      items: techStack.frontend,
    },
    {
      id: "backend",
      name: "Backend",
      tag: "DATA",
      items: techStack.backend,
    },
    {
      id: "tools",
      name: "Infra & Tools",
      tag: "DEVOPS",
      items: techStack.tools,
    },
  ] as const;

  return (
    <section id="tech-stack">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="mt-6 flex flex-col gap-7">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-border/60 pb-1.5">
              <h3 className="text-foreground font-mono text-[11px] tracking-wider uppercase font-semibold">
                {category.name}
              </h3>
              <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                [{category.items.length.toString().padStart(2, "0")}]
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {category.items.map((tech) => {
                const iconName = tech.icon as TechStackIconName;
                return (
                  <div
                    className="group/item border border-border/70 bg-card hover:bg-muted/60 hover:border-foreground/50 flex min-w-0 items-center gap-2.5 px-2.5 py-2 transition-all duration-150 cursor-default"
                    key={tech.name}
                  >
                    <span className="flex size-4.5 shrink-0 items-center justify-center transition-transform duration-200 group-hover/item:-translate-y-0.5">
                      {techStackIcons[iconName]}
                    </span>
                    <span className="text-secondary group-hover/item:text-foreground truncate font-mono text-xs transition-colors">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
