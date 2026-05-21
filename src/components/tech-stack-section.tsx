"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { techStackIcons } from "@/components/tech-stack-icons";
import { techStack } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

type TechStackIconName = keyof typeof techStackIcons;

export function TechStackSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: "frontend", name: "Frontend", items: techStack.frontend },
    { id: "backend", name: "Backend", items: techStack.backend },
    { id: "tools", name: "Tools", items: techStack.tools },
  ] as const;

  return (
    <section id="tech-stack">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="mt-6 flex flex-col gap-6">
        {categories.map((category, index) => {
          const displayedItems = isExpanded
            ? category.items
            : category.items.slice(0, 4);

          return (
            <div key={category.id} className="flex flex-col gap-3">
              {index > 0 && <div className="bg-border mb-2 h-px w-full" />}
              <h3 className="text-secondary font-mono text-[11px] tracking-wider uppercase">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
                {displayedItems.map((tech) => {
                  const iconName = tech.icon as TechStackIconName;
                  return (
                    <div
                      className="text-secondary flex min-w-0 items-center gap-2 text-sm"
                      key={tech.name}
                    >
                      <span className="text-foreground flex size-5 shrink-0 items-center justify-center">
                        {techStackIcons[iconName]}
                      </span>
                      <span className="truncate">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-border text-secondary hover:bg-muted hover:text-foreground h-8 cursor-pointer gap-1.5 rounded-none px-4 font-mono text-[11px] uppercase transition-all hover:scale-[1.02]"
          variant="outline"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp aria-hidden="true" className="size-3.5" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown aria-hidden="true" className="size-3.5" />
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
