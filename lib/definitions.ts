
export interface Course {
  id: string; // unique ID used as a key in React + primary key in DB
  title: string; // main heading on the card
  subtitle: string; // smaller heading under the title
  description: string; // body text
  image: string; // image path (usually from /public/images)
}

/**
 * A card shown on the landing/dashboard page:
 * - shows a title + image + a button that links to the topic page
 */
export interface DashboardCard {
  id: string; 
  title: string;
  description: string;
  image: string;

  // Where the button navigates
  href: string; // e.g. "/scratch"

  // Button text + Tailwind classes for styling
  buttonText: string;
  accentClass: string; // e.g. "text-sky-700"
  buttonClass: string; // e.g. "bg-sky-500 hover:bg-sky-600"
}

/* =========================================================
   DB SEED TYPES
   ========================================================= */

/**
 * Restricts course topics to ONLY these 3 allowed values.
 */
export type CourseTopic = "scratch" | "python" | "web";

/**
 * A Course row for the database.
 * It's the same as Course, but with ONE extra field: topic
 */
export type CourseSeedRow = Course & { topic: CourseTopic };

/**
 * TechSeedRow matches `techs` table structure.
 * This is the "dashboard tech" data you seed into PostgreSQL.
 */
export interface TechSeedRow {
  id: number; // numeric primary key
  name: string; // short label ("scratch", "python", etc.)
  techid: number; // another numeric ID (you can keep it or remove it later)
  level: number; // level/category marker (1 for now)

  // Image metadata for DB
  image_url: string;
  image_alt: string;
  width: number;
  height: number;

  // Card content
  title: string;
  description: string;

  // Styling stored in DB 
  bg_colour: string;
  border_colour: string;

  // Link path (where it should navigate)
  link: string;
}

/**
 * ClubSeedRow matches `clubs` table.
 * Used for storing club info like name + logo.
 */
export interface ClubSeedRow {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  logo_alt: string;
}

/**
 * NavLinkSeedRow matches `navlinks` table.
 * Used to store sidebar/mobile navigation links.
 */
export interface NavLinkSeedRow {
  id: number;
  name: string; // link text (e.g. "Scratch")
  link: string; // route (e.g. "/scratch")
}

/**
 * FooterSeedRow matches `footerdata` table.
 * Simple table storing footer text.
 */
export interface FooterSeedRow {
  address: string;
}