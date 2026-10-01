import { SectionHeading } from "@/components/section-heading";
import { techStackIcons } from "@/components/tech-stack-icons";
import { techStack } from "@/data/portfolio";

type TechStackIconName = keyof typeof techStackIcons;

export function TechStackSection() {
  const categories = [
    { id: "frontend", name: "Frontend", items: techStack.frontend },
    { id: "backend", name: "Backend", items: techStack.backend },
    { id: "tools", name: "Tools", items: techStack.tools },
  ] as const;

  return (
    <section id="tech-stack">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="mt-6 flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-3">
            <h3 className="text-foreground font-mono text-[11px] tracking-wider uppercase">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-3 md:grid-cols-4">
              {category.items.map((tech) => {
                const iconName = tech.icon as TechStackIconName;
                return (
                  <div
                    className="text-secondary flex min-w-0 items-center gap-2 text-sm"
                    key={tech.name}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center">
                      {techStackIcons[iconName]}
                    </span>
                    <span className="truncate">{tech.name}</span>
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
