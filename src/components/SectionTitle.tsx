import CornerAccent from "../../public/icons/CornerAccent";

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="relative gradient-text text-3xl font-montserrat font-extrabold uppercase mb-20 inline-block">
      <CornerAccent className="absolute bottom-8 left-0" />
      <p className="ml-8">{title}</p>
      <CornerAccent className="absolute right-[-30] top-8 rotate-180" />
    </h2>
  );
}

export default SectionTitle;
