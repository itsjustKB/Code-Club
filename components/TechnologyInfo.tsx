import Image from "next/image";
import { TechSeedRow } from "@/lib/definitions";

function levelLabel(level: number) {
  if (level === 1) return "Beginner";
  if (level === 2) return "Intermediate";
  if (level === 3) return "Advanced";
  return `Level ${level}`;
}

export default function TechnologyInfo({ tech }: { tech: TechSeedRow }) {
  return (
    <section className="space-y-8">
      <header className="bg-emerald-700 border-2 border-black rounded-3xl p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-3 text-white">{tech.title}</h1>
        <p className="text-white text-lg max-w-3xl mx-auto">{tech.description}</p>
        <p className="mt-4 text-white font-semibold">
          Difficulty: {levelLabel(tech.level)}
        </p>
      </header>

      <div className="bg-white rounded-xl p-6 border-2 border-black">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <Image
            src={tech.image_url}
            alt={tech.image_alt}
            width={tech.width}
            height={tech.height}
            className="rounded-lg"
          />

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-black">{tech.name}</h2>
            <p className="text-black">{tech.title}</p>

            {/* If tech.link is something like /python or /web, this keeps old pages accessible */}
            <a
              href={tech.link}
              className="inline-block mt-2 text-black px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
            >
              Go to learning page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}