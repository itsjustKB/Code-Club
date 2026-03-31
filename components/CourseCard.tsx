import Image from "next/image";
import type { CourseSeedRow } from "@/lib/definitions";

export default function CourseCard({
  course,
  titleColor = "text-white",
}: {
  course: CourseSeedRow;
  titleColor?: string;
}) {
  return (
    <article
      className="rounded-xl shadow hover:shadow-lg transition p-4 border-2 bg-emerald-700 border-black"
    >
      <Image
        src={course.image}
        alt={course.title}
        width={400}
        height={250}
        className="rounded"
      />

      <h2 className={`text-xl font-semibold mt-4 ${titleColor}`}>
        {course.title}
      </h2>

      {course.subtitle ? (
        <p className="text-emerald-100">{course.subtitle}</p>
      ) : null}

      <p className="text-white">{course.description}</p>
    </article>
  );
}