import Link from "next/link";
import certificates from "@/data/certificates";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-300 leading-relaxed mb-4">
        Hi! I’m <span className="text-blue-400 font-semibold">Kelvin Adrian Darmawan</span> — a passionate{" "}
        <span className="text-blue-400 font-semibold">Gameplay Programmer</span> and{" "}
        <span className="text-blue-400 font-semibold">3D Artist</span> from Indonesia.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        I’m deeply interested in creating interactive gameplay experiences using{" "}
        <span className="text-blue-400">Unreal Engine 5</span>, both through{" "}
        <span className="text-blue-400">C++</span> and{" "}
        <span className="text-blue-400">Blueprints</span>. Over the past year, I’ve built small but meaningful gameplay systems
        — from character controls and traversal mechanics to AI behaviors — while sharpening my problem-solving and debugging skills.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Alongside programming, I enjoy modeling and animating in{" "}
        <span className="text-blue-400">Blender</span>, especially creating stylized and semi-realistic 3D assets that
        complement gameplay worlds. I find great satisfaction in merging logic and artistry — bringing ideas to life
        through smooth mechanics, visual appeal, and strong player feedback.
      </p>

      <p className="text-gray-400 leading-relaxed mb-8">
        I’m eager to keep learning and growing in a collaborative environment where creativity, persistence,
        and curiosity drive every project forward.
      </p>

      {/* Skills Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills & Tools</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 text-sm">
          <li>Unreal Engine 5</li>
          <li>C++ / Blueprints</li>
          <li>Blender</li>
          <li>Gameplay Systems</li>
          <li>AI & Character Logic</li>
          <li>3D Modeling & Animation</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Certifications</h2>
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