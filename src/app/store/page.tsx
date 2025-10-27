import Image from "next/image";
import Link from "next/link";

export default function StorePage() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20 text-center">
      <h1 className="text-4xl font-bold mb-8">My Game Assets & Creations</h1>
      <p className="text-gray-400 mb-12">
        Explore my works — from{" "}
        <span className="text-blue-400">3D game assets</span> built in{" "}
        <span className="text-orange-400">Blender</span> to{" "}
        <span className="text-pink-400">playable Unreal Engine games</span> on itch.io.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        {/* Fab.com Card */}
        <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-purple-500/10 transition">
          <Image
            src="/assets/images/logos/fab_logo.png"
            alt="Fab.com"
            width={100}
            height={100}
            className="rounded-md mb-6 object-contain"
          />
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">Fab.com</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Browse my collection of stylized and semi-realistic 3D assets — optimized for games,
            simulations, and cinematic use.
          </p>
          <Link
            href="https://www.fab.com/sellers/Ivney"
            target="_blank"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
          >
            Visit Store
          </Link>
        </div>

        {/* itch.io Card */}
        <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-red-500/10 transition">
          <div className="relative w-[140px] h-[60px] mb-6">
            <Image
              src="/assets/images/logos/itchio_logo.png"
              alt="itch.io"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-red-400">itch.io</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Experience my indie games — crafted in Unreal Engine 5 with creative gameplay,
            cinematic feel, and polished mechanics.
          </p>
          <Link
            href="https://ivney.itch.io"
            target="_blank"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition"
          >
            Visit Page
          </Link>
        </div>
      </div>
    </section>
  );
}