import { content } from "@/lib/constants";
import SectionTitle from "../SectionTitle";

function Technologies() {
  const { technologies } = content;

  return (
    <div className="mt-48 max-w-4xl mx-auto">
      <SectionTitle title="Technologies" />
      <div className="grid grid-cols-4 gap-3">
        {technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-4 bg-s-muted p-4 rounded-lg border border-s-default relative overflow-hidden"
            >
              <i>{tech.icon}</i>
              <p className="text-p-default">{tech.name}</p>
              <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-full z-10 aspect-square rounded-full blur-lg bg-white opacity-10"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
