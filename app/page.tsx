import Image from "next/image";
import Link from "next/link";
import { indexPage } from "@/lib/data";
import ClubHeader from "@/components/ClubHeader";

export const metadata = {
  title: "Code Club | Dashboard",
  description: "Learn Scratch, Python and Web Development",
};

export default function HomePage() {
  return (
    <section className="space-y-12">
      <ClubHeader />

      {/* Technologies Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {indexPage.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className={`text-2xl font-bold mb-3 ${item.accentClass}`}>
              {item.title}
            </h2>

            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />

            <p className="mb-4 text-black">{item.description}</p>

            <Link
              href={item.href}
              className={`inline-block text-black px-4 py-2 rounded-lg transition ${item.buttonClass}`}
            >
              {item.buttonText}
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
