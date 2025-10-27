"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Store", href: "/store" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-800/60 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
    >
      <div className="flex justify-center">
        <ul className="flex gap-8 text-gray-300 text-sm font-medium py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`transition duration-200 ${
                    isActive ? "text-emerald-400" : "hover:text-emerald-300"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-400 to-blue-500"
                      : "bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Subtle accent line at bottom */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
    </motion.nav>
  );
}
