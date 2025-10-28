"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, ShoppingBag, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 bg-[url('/bg-cinematic.jpg')] bg-cover bg-center blur-sm opacity-30"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl px-6"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mx-auto w-40 h-40 mb-6 rounded-full overflow-hidden ring-4 ring-emerald-500/40 shadow-xl"
        >
          <Image
            src="assets/images/self/selfie.jpg"
            alt="Kelvin Adrian Darmawan"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 bg-clip-text text-transparent tracking-tight">
          Kelvin Adrian Darmawan
        </h1>

        {/* Tagline */}
        <p className="text-lg text-gray-400 mb-6">
          <span className="text-emerald-400 font-medium">Gameplay Programmer</span> •{" "}
          <span className="text-sky-400 font-medium">Unreal Engine Developer</span> •{" "}
          <span className="text-violet-400 font-medium">3D Artist</span>
        </p>

        {/* Tech Logos */}
        <div className="flex justify-center gap-14 mt-10 mb-8">
          {/* Unreal Engine Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-20 h-20 flex items-center justify-center"
          >
            {/* Glow background for Unreal logo */}
            <div className="absolute inset-0 bg-white/15 rounded-full blur-lg"></div>
            <img
              src="assets/images/logos/Unreal_Engine_Logo.png"
              alt="Unreal Engine"
              className="relative w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </motion.div>

          {/* Blender Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative w-20 h-20 flex items-center justify-center"
          >
            {/* Glow background for Blender logo */}
            <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-lg"></div>
            <img
              src="assets/images/logos/Blender_Logo.png"
              alt="Blender"
              className="relative w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,150,50,0.6)]"
            />
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <Link href="/projects">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
              View Projects
            </Button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://github.com/Ttanus" target="_blank">
            <Github className="w-6 h-6 hover:text-emerald-400 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/kelvin-adrian-kad/" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-sky-400 transition" />
          </Link>
          <Link href="https://ivney.itch.io" target="_blank">
            <Globe className="w-6 h-6 hover:text-violet-400 transition" />
          </Link>
          <Link href="https://www.fab.com/sellers/Ivney" target="_blank">
            <ShoppingBag className="w-6 h-6 hover:text-orange-400 transition" />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}