import type { TechSeedRow, NavLinkSeedRow, ClubSeedRow, FooterSeedRow, CourseSeedRow, CourseTopic } from "@/lib/definitions";
import { techs, SideLinks, clubs, FooterData, coursesSeed } from "@/lib/data";
export const runtime = "nodejs";

/**
 * Fetch ALL technologies
 * - Prepared statement
 * - Maps DB rows into TechSeedRow structure
 */
export async function fetchAllTechs(): Promise<TechSeedRow[]> {
  return techs;
}

/**
 * Fetch ONE technology by ID
 */
export async function fetchTechById(
  id: number
): Promise<TechSeedRow | null> {
  return techs.find((tech) => tech.id === id) ?? null;
}
/** Fetch club info (usually 1 row) */
export async function fetchClub(): Promise<ClubSeedRow | null> {
  return clubs[0] ?? null;
}

/** Fetch footer text (usually 1 row) */
export async function fetchFooter(): Promise<FooterSeedRow | null> {
  return FooterData[0] ?? null;
}

export async function fetchNavLinks(): Promise<NavLinkSeedRow[]> {
  return SideLinks;
}

export async function fetchCoursesByTopic(
  topic: CourseTopic,
  search?: string
): Promise<CourseSeedRow[]> {
  let rows = coursesSeed.filter((course) => course.topic === topic);

  if (search) {
    const normalizedSearch = search.toLowerCase();

    rows = rows.filter(
      (course) =>
        course.id.toLowerCase().includes(normalizedSearch) ||
        course.title.toLowerCase().includes(normalizedSearch) ||
        course.subtitle.toLowerCase().includes(normalizedSearch)
    );
  }

  return rows;
}
