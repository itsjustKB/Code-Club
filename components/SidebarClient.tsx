"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLinkSeedRow } from "@/lib/definitions";

export default function SidebarClient({ links }: { links: NavLinkSeedRow[] }) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 bg-emerald-700 text-white p-6 flex-col">
      <h1 className="text-2xl font-bold mb-8 text-center">
        🤖 Code Club
      </h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive =
            pathname === link.link || pathname.startsWith(`${link.link}/`);

          return (
            <Link
              key={link.id}
              href={link.link}
              aria-current={isActive ? "page" : undefined}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                isActive
                  ? "bg-emerald-900 text-white"
                  : "text-emerald-100 hover:bg-emerald-600"
              }`}
            >
            {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="pt-10 text-sm text-emerald-100 text-center mt-auto">
        © 2026 Dundalk Institute of Technology
      </div>
    </aside>
  );
}