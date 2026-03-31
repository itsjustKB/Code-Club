import { fetchCoursesByTopic } from "@/app/actions/fetch";
import CourseCard from "@/components/CourseCard";

export const metadata = {
  title: "Python | Code Club",
  description:
    "Learn Python programming at Code Club",
};

export default async function PythonPage() {
  const courses = await fetchCoursesByTopic("python");

  return (
    <section className="space-y-12">
      <header className="bg-emerald-700 border-2 border-black rounded-3xl p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Python Programming ➕
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white">
          Make digital art, games, and more while exploring 
          one of the world's most popular programming languages.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} titleColor="text-orange-600" />
        ))}
      </section>
    </section>
  );
}