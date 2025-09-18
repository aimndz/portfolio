function Footer() {
  return (
    <footer className="mx-5 mb-10 text-center text-sm">
      <div className="text-md flex flex-col md:flex-row md:justify-center md:space-x-2">
        <p>
          <span className="block md:inline-block">
            © 2025 Amiel Ian Mendoza.
          </span>{" "}
          <span className="block md:inline-block">All rights reserved.</span>
        </p>
      </div>
      <p className="text-xs text-p-muted">{`⛶ Built with ${"<3"} + idk decisions.`}</p>
    </footer>
  );
}

export default Footer;
