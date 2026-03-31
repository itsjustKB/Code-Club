"use client";

import Image from "next/image";
import Link from "next/link";
import { TechSeedRow } from "@/lib/definitions";

export default function TechnologyCard({ tech }: { tech: TechSeedRow }) {
  return (
    <Link href={`/technologies/${tech.id}`}>
      <article
        className="rounded-xl shadow hover:shadow-lg transition p-4 border-2"
        style={{
          backgroundColor: tech.bg_colour,
          borderColor: tech.border_colour,
        }}
      >
        <Image
          src={tech.image_url}
          alt={tech.image_alt}
          width={tech.width}
          height={tech.height}
          className="rounded"
        />

        <h2 className="text-xl font-semibold mt-4 text-white">{tech.title}</h2>
        <p className="text-white">{tech.description}</p>
      </article>
    </Link>
  );
}