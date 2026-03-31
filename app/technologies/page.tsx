import { fetchAllTechs } from "@/app/actions/fetch";
import TechnologyCard from "@/components/TechnologyCard";

export const metadata = {
  title: "Technologies | Dundalk Coders Club",
  description: "Browse Scratch, Python and Web Development technologies",
};

export default async function TechnologiesPage() {
  const allTech = await fetchAllTechs();

  return (
    <section className="space-y-12">
      <header className="bg-emerald-700 border-2 border-black rounded-3xl p-10 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">Technologies ⚙️</h1>
        <p className="text-xl max-w-3xl mx-auto text-white">
          Pick a technology to explore projects and learning paths.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTech.map((tech) => (
          <TechnologyCard key={tech.id} tech={tech} />
        ))}
      </section>
    </section>
  );
}