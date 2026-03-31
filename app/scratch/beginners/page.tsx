import Image from "next/image";
import Link from "next/link";
import { fetchCoursesByTopic } from "@/app/actions/fetch";

export const metadata = {
  title: "Scratch Beginners | Code Club",
  description: "Scratch programming for beginners at Code Club",
};

export default async function ScratchBeginnersPage() {
  const courses = await fetchCoursesByTopic("scratch", "beginners");

  return (
    <section className="space-y-12">

      {/* Intro Section */}
      <header className="bg-cyan-600 border-2 border-black rounded-3xl p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Scratch for Beginners
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white">
          A beginner-friendly introduction to Scratch programming.
          Learn by building fun and interactive projects step by step.
        </p>
      </header>

      {/* Beginner Courses */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <article
            key={course.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold text-sky-700 mb-2">
              {course.title}
            </h2>

            {course.subtitle && (
              <p className="font-semibold mb-2 text-black">
                {course.subtitle}
              </p>
            )}

            <p className="text-black">
              {course.description}
            </p>
          </article>
        ))}
      </section>

      {/* Navigation */}
      <div className="flex justify-center gap-4">
        <Link
          href="/scratch"
          className="inline-block bg-sky-500 text-black px-6 py-3 rounded-lg hover:bg-sky-600 font-semibold transition"
        >
          Back to Scratch
        </Link>
      </div>

    </section>
  );
}