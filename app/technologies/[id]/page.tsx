import { fetchTechById } from "@/app/actions/fetch";
import TechnologyInfo from "@/components/TechnologyInfo";
import { notFound } from "next/navigation";

export default async function TechnologyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: idStr } = await params; // ✅ unwrap params

  const id = Number(idStr);
  if (!Number.isInteger(id)) notFound();

  const tech = await fetchTechById(id);
  if (!tech) notFound();

  return <TechnologyInfo tech={tech} />;
}