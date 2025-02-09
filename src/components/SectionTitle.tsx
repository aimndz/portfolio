import CornerAccent from "../../public/icons/CornerAccent";

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="relative text-xl md:text-3xl font-montserrat font-extrabold md:mb-20 mb-14 inline-block glowing-gradient-text">
      <CornerAccent className="absolute md:bottom-8 md:left-0 left-3 bottom-3" />
      <p className="ml-8">{title}</p>
      <CornerAccent className="absolute md:-right-8 md:top-8 top-3 -right-5 rotate-180" />
    </h2>
  );
}

export default SectionTitle;
