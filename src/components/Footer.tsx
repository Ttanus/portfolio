import { Github, Linkedin, Globe, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black/70 backdrop-blur-md border-t border-gray-800/60 text-gray-400 text-sm py-6 text-center mt-20">
      <div className="flex justify-center gap-6 mb-3">
        <Link href="https://github.com/Ttanus" target="_blank">
          <Github className="w-5 h-5 hover:text-emerald-400 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/kelvin-adrian-kad/" target="_blank">
          <Linkedin className="w-5 h-5 hover:text-emerald-400 transition" />
        </Link>
        <Link href="https://ivney.itch.io" target="_blank">
          <Globe className="w-5 h-5 hover:text-emerald-400 transition" />
        </Link>
        <Link href="https://www.fab.com/sellers/Ivney" target="_blank">
          <ShoppingBag className="w-5 h-5 hover:text-emerald-400 transition" />
        </Link>
      </div>

      <p className="text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">Kelvin Adrian Darmawan</span>. Built with{" "}
        <span className="text-blue-400 font-semibold">Next.js</span>.
      </p>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
    </footer>
  );
}
