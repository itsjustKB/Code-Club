import postgres from "postgres";
import { techs, clubs, SideLinks, FooterData, coursesSeed } from "@/lib/data";

export const runtime = "nodejs";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedTechs() {
  await sql`
    CREATE TABLE IF NOT EXISTS techs (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      techid INT NOT NULL,
      level INT NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      image_alt VARCHAR(255) NOT NULL,
      width INT NOT NULL,
      height INT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      bg_colour VARCHAR(255) NOT NULL,
      border_colour VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL
    );
  `;

  return Promise.all(
    techs.map((tech) => sql`
      INSERT INTO techs (
        id, name, techid, level, image_url, image_alt, width, height,
        title, description, bg_colour, border_colour, link
      )
      VALUES (
        ${tech.id}, ${tech.name}, ${tech.techid}, ${tech.level},
        ${tech.image_url}, ${tech.image_alt}, ${tech.width}, ${tech.height},
        ${tech.title}, ${tech.description}, ${tech.bg_colour}, ${tech.border_colour}, ${tech.link}
      )
      ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      techid = EXCLUDED.techid,
      level = EXCLUDED.level,
      image_url = EXCLUDED.image_url,
      image_alt = EXCLUDED.image_alt,
      width = EXCLUDED.width,
      height = EXCLUDED.height,
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      bg_colour = EXCLUDED.bg_colour,
      border_colour = EXCLUDED.border_colour,
      link = EXCLUDED.link;
    `)
  );
}

async function seedClubs() {
  await sql`
    CREATE TABLE IF NOT EXISTS clubs (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      logo_url VARCHAR(255) NOT NULL,
      logo_alt VARCHAR(255) NOT NULL
    );
  `;

  return Promise.all(
    clubs.map((club) => sql`
      INSERT INTO clubs (id, name, description, logo_url, logo_alt)
      VALUES (${club.id}, ${club.name}, ${club.description}, ${club.logo_url}, ${club.logo_alt})
      ON CONFLICT (id) DO NOTHING;
    `)
  );
}

async function seedCourses() {
  await sql`
    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      topic TEXT NOT NULL
    );
  `;

  return Promise.all(
  coursesSeed.map((course) => sql`
    INSERT INTO courses (id, title, subtitle, description, image, topic)
    VALUES (${course.id}, ${course.title}, ${course.subtitle}, ${course.description}, ${course.image}, ${course.topic})
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      subtitle = EXCLUDED.subtitle,
      description = EXCLUDED.description,
      image = EXCLUDED.image,
      topic = EXCLUDED.topic;
  `)
);
}

async function seedNavLinks() {
  await sql`
    CREATE TABLE IF NOT EXISTS navlinks (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL
    );
  `;

  return Promise.all(
    SideLinks.map((nav) => sql`
      INSERT INTO navlinks (id, name, link)
      VALUES (${nav.id}, ${nav.name}, ${nav.link})
      ON CONFLICT (id) DO NOTHING;
    `)
  );
}

async function seedFooterData() {
  await sql`
    CREATE TABLE IF NOT EXISTS footerdata (
      address VARCHAR(255) PRIMARY KEY
    );
  `;

  return Promise.all(
    FooterData.map((data) => sql`
      INSERT INTO footerdata (address)
      VALUES (${data.address})
      ON CONFLICT (address) DO NOTHING;
    `)
  );
}

export async function GET(): Promise<Response> {
  try {
    await sql.begin(async () => {
      await seedTechs();
      await seedClubs();
      await seedNavLinks();
      await seedFooterData();
      await seedCourses();
    });

    return Response.json({ message: "Database seeded successfully" });
  } catch (error: any) {
    return Response.json(
      { message: "Seeding failed", error: error?.message ?? String(error) },
      { status: 500 }
    );
  }
}