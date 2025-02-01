import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Github from "../../../public/icons/Github";

function FeaturedProjects() {
  return (
    <div className="mt-48 max-w-4xl mx-auto mb-48 z-10">
      <SectionTitle title="Featured Projects" />
      <div className="bg-s-muted rounded-lg border border-s-default overflow-hidden">
        <div className="px-4 pt-4">
          <Image
            src="/images/blissnflair.png"
            alt="blissnflair"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="relative overflow-hidden p-4">
          <h3 className="font-bold text-xl">
            Bliss and Flair Commercial Building Website
          </h3>
          <p className="text-p-muted mt-4">
            An event place management system that offers venue booking,
            scheduling, and managing, providing a better experience for both
            admins and customers.
          </p>
          <div className="mt-4 flex gap-3">
            <div className="py-1 px-3 text-xs rounded-full bg-s-default border border-s-default overflow-hidden inline-block">
              TypeScript
            </div>
            <div className="py-1 px-3 text-xs rounded-full bg-s-default border border-s-default overflow-hidden inline-block">
              PostgreSQL
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <Github />
          </div>
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-full z-10 aspect-square rounded-full blur-2xl bg-white opacity-10"></div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
