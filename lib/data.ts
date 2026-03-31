import type {
  Course,
  DashboardCard,
  TechSeedRow,
  ClubSeedRow,
  NavLinkSeedRow,
  FooterSeedRow,
  CourseSeedRow,
} from "./definitions";

/* =========================================================
   DASHBOARD CARDS
   ========================================================= */
export const indexPage: DashboardCard[] = [
  {
    id: "scratch",
    title: "Scratch",
    description:
      "Create animations, apps, and interactive stories by adding code, costumes, and sounds.",
    image: "/images/scratch-intro.webp",
    href: "/scratch",
    buttonText: "Explore Scratch",
    accentClass: "text-sky-700",
    buttonClass: "bg-sky-500 hover:bg-sky-600",
  },
  {
    id: "web",
    title: "Web Dev",
    description:
      "Build websites and apps by learning HTML, CSS, and JavaScript.",
    image: "/images/web-intro.webp",
    href: "/web",
    buttonText: "Explore Web Development",
    accentClass: "text-lime-700",
    buttonClass: "bg-lime-500 hover:bg-lime-600",
  },
  {
    id: "python",
    title: "Python",
    description:
      "Make digital art, games, and more while exploring one of the world's most popular programming languages.",
    image: "/images/python-intro.webp",
    href: "/python",
    buttonText: "Explore Python",
    accentClass: "text-orange-600",
    buttonClass: "bg-orange-500 hover:bg-orange-600",
  },
];

/* =========================================================
   COURSES
   ========================================================= */
export const scratchCourses: Course[] = [
  {
    id: "scratch-intro",
    title: "Intro to Scratch",
    subtitle: "Sprites, Scripts, and Loops",
    description:
      "Learn Scratch basics by creating animations, games, apps, and stories.",
    image: "/images/scratch-intro.webp",
  },
  {
    id: "scratch-more",
    title: "More Scratch",
    subtitle: "Broadcasts, Decisions, and Variables",
    description:
      "Create apps, games, and simulations using messages and variables.",
    image: "/images/more-scratch.webp",
  },
  {
    id: "scratch-further",
    title: "Further Scratch",
    subtitle: "Clones, My Blocks, and Boolean Logic",
    description:
      "Build advanced Scratch projects using functions, clones, and logic.",
    image: "/images/further-scratch.webp",
  },
];

export const scratchBeginnersCourses: Course[] = [
  {
    id: "scratch-beginners",
    title: "Scratch Beginners",
    subtitle: "Start here!",
    description:
      "Learn the Scratch interface, sprites, animations, and beginner coding concepts.",
    image: "/images/scratch.png",
  },
];

export const pythonCourses: Course[] = [
  {
    id: "python-intro",
    title: "Intro to Python",
    subtitle: "Variables, functions, and loops",
    description: "Write your first Python programs.",
    image: "/images/python-intro.webp",
  },
  {
    id: "python-more",
    title: "More Python",
    subtitle: "Lists, dictionaries, and data",
    description: "Use data structures to build charts, models, and apps.",
    image: "/images/more-python.webp",
  },
];

export const webdevCourses: Course[] = [
  {
    id: "web-intro",
    title: "Intro to Web Dev",
    subtitle: "HTML, CSS & animations",
    description: "Learn webpage structure and styling.",
    image: "/images/web.png",
  },
  {
    id: "web-more",
    title: "More Web Dev",
    subtitle: "HTML, CSS and JavaScript",
    description: "Build interactive and engaging websites using JavaScript.",
    image: "/images/more-web.webp",
  },
];

/* =========================================================
   DB SEED
   ========================================================= */

// Seed "techs" table from dashboard cards
export const techs: TechSeedRow[] = indexPage.map((card, idx) => {
  const bg =
   card.id === "scratch"
    ? "#0891b2"  // cyan-600
    : card.id === "python"
    ? "#ea580c"  // orange-600
    : "#059669"; // emerald-600

  return {
    id: idx + 1,
    name: card.id,
    techid: 100 + idx,
    level: 1,
    image_url: card.image,
    image_alt: `${card.id} preview`,
    width: 400,
    height: 250,
    title: card.title,
    description: card.description,
    bg_colour: bg,
    border_colour: "#000000",
    link: card.href,
  };
});

// Seed courses table from UI courses   
export const coursesSeed: CourseSeedRow[] = [
  ...scratchCourses.map((c) => ({ ...c, topic: "scratch" as const })),
  ...scratchBeginnersCourses.map((c) => ({ ...c, topic: "scratch" as const })),
  ...pythonCourses.map((c) => ({ ...c, topic: "python" as const })),
  ...webdevCourses.map((c) => ({ ...c, topic: "web" as const })),
];

// Small tables (static)
export const clubs: ClubSeedRow[] = [
  {
    id: 1,
    name: "Code Club",
    description:
      "Beginner-friendly coding club for Scratch, Python and Web Dev.",
    logo_url: "/images/code_club_logo.jpg",
    logo_alt: "Club logo",
  },
];

export const SideLinks: NavLinkSeedRow[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Technologies", link: "/technologies" },
  { id: 3, name: "Scratch", link: "/scratch" },
  { id: 5, name: "Python", link: "/python" },
  { id: 6, name: "Web Dev", link: "/web" },
];

export const FooterData: FooterSeedRow[] = [
  { address: "© 2026 Dundalk Coders Club" },
];