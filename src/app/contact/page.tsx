import { Linkedin, Mail, Globe, Github } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20 text-center">
      <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
      <p className="text-gray-400 mb-6">
        I’m always open to collaboration, freelance projects, or full-time opportunities.
      </p>
      <div className="flex justify-center gap-8 mt-8">
        <Link href="mailto:ivney.info@gmail.com" target="_blank">
          <Mail className="w-7 h-7 hover:text-blue-400 transition" />
        </Link>
        <Link href="https://linkedin.com/in/kelvin-adrian-kad" target="_blank">
          <Linkedin className="w-7 h-7 hover:text-blue-400 transition" />
        </Link>
        <Link href="https://github.com/Ttanus" target="_blank">
          <Github className="w-7 h-7 hover:text-blue-400 transition" />
        </Link>
        <Link href="https://ivney.itch.io" target="_blank">
          <Globe className="w-7 h-7 hover:text-blue-400 transition" />
        </Link>
      </div>
    </section>
  );
}