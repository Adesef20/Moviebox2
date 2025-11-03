import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-center text-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3">
        <Link
          href="/"
          className="text-3xl font-bold text-yellow-400 tracking-wide"
        >
          MovieBox 🎬
        </Link>
        <h1 className="font-semibold text-red-600 hover:text-yellow-500 transition-colors">
          &copy; {new Date().getFullYear()} ShyNaDev
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
