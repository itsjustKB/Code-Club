import { fetchFooter } from "@/app/actions/fetch";

export default async function Footer() {
  const footer = await fetchFooter();

  return (
    <footer className="bg-emerald-700 text-center text-sm text-white py-6">
      {footer?.address ?? "© 2026 Dundalk Institute of Technology"}
    </footer>
  );
}