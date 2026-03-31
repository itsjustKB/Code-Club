import Link from "next/link";
import { fetchNavLinks } from "@/app/actions/fetch";

export default async function MobileNav() {
  const links = await fetchNavLinks();

  return (
    <nav className="md:hidden bg-emerald-700 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        Dundalk Code Club
      </Link>

      <div className="flex gap-4 text-sm">
        {links.slice(0, 4).map((l) => (
          <Link key={l.id} href={l.link}>
            {l.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}