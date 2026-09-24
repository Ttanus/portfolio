import Link from "next/link";
import certificates from "@/data/certificates";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-300 leading-relaxed mb-4">
        Hi! I’m{" "}
        <span className="text-blue-400 font-semibold">
          Kelvin Adrian Darmawan
        </span>{" "}
        — a{" "}
        <span className="text-blue-400 font-semibold">
          Gameplay Programmer
        </span>{" "}
        from Indonesia, focused on building gameplay systems and interactive
        game experiences.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        I have professional experience developing and publishing game
        experiences from planning through release. My work includes
        implementing gameplay systems such as interactions, checkpoints,
        timers, round systems, teleportation, health and damage adjustments,
        and UI.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        My main technical focus is{" "}
        <span className="text-blue-400">Unreal Engine 5</span>, using both{" "}
        <span className="text-blue-400">C++</span> and{" "}
        <span className="text-blue-400">Blueprint</span>. I enjoy designing
        gameplay logic, solving technical problems, testing features, and
        iterating on systems to create polished player-facing experiences.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        I also build independent Unreal Engine projects. One of my projects is
        a data-driven{" "}
        <span className="text-blue-400">Achievement System</span> built with
        Blueprint, featuring progress tracking, unlock logic, save/load
        functionality, UI, and notifications. The system has been commercially
        published on Fab.
      </p>

      <p className="text-gray-400 leading-relaxed mb-8">
        Alongside programming, I have experience with{" "}
        <span className="text-blue-400">Blender</span> for creating and
        integrating 3D assets, rigging, and animation. I enjoy working across
        different parts of game development while keeping gameplay and player
        experience at the center of my work.
      </p>

      {/* Skills Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Skills & Tools
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 text-sm">
          <li>Unreal Engine 5</li>
          <li>C++</li>
          <li>Blueprint</li>
          <li>Gameplay Programming</li>
          <li>Gameplay Systems</li>
          <li>Game Mechanics</li>
          <li>Interaction Systems</li>
          <li>UI / UMG</li>
          <li>Save & Load Systems</li>
          <li>Blender</li>
          <li>3D Modeling</li>
          <li>Animation & Rigging</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Certifications
        </h2>

        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
          {certificates.map((cert, index) => (
            <li key={index}>
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200"
              >
                {cert.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}