import { Separator } from "@/components/ui/separator";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-lg font-medium">
        {children}
      </h2>
      <Separator className="min-w-0 flex-1 shrink bg-border" />
    </div>
  );
}
