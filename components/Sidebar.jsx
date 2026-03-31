import { fetchNavLinks } from "@/app/actions/fetch";
import SidebarClient from "@/components/SidebarClient";

export default async function Sidebar() {
  const links = await fetchNavLinks();
  return <SidebarClient links={links} />;
}