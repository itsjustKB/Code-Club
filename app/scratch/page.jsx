import { fetchCoursesByTopic } from "@/app/actions/fetch";
import CourseCard from "@/components/CourseCard";

export const metadata = {
  title: "Scratch | Code Club",
  description:
    "Learn Scratch programming at Code Club",
};

export default async function ScratchPage() {
  const allCourses = await fetchCoursesByTopic("scratch");

const courses = allCourses.filter(
  (course) => !course.id.includes("beginners")
);

  return (
    <section className="space-y-12">
      <header className="bg-emerald-700 border-2 border-black rounded-3xl p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">Scratch Programming 🐱</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Begin your adventure in digital making by learning to code animations,
          stories, and games in Scratch.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} titleColor="text-cyan-600" />
        ))}
      </section>

      <div className="flex justify-center">
        <a
          href="/scratch/beginners"
          className="inline-block text-center bg-emerald-500 text-black px-6 py-3 rounded-lg hover:bg-emerald-600 font-semibold"
        >
          Explore more Scratch
        </a>
      </div>
    </section>
  );
}