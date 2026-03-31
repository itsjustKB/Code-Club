import Image from "next/image";
import { fetchClub } from "@/app/actions/fetch";

export default async function ClubHeader() {
  const club = await fetchClub();

  return (
    <header className="bg-emerald-700 border-2 border-black rounded-3xl p-10 text-center shadow-md">
      {club?.logo_url ? (
        <div className="flex justify-center mb-4">
          <Image
            src={club.logo_url}
            alt={club.logo_alt ?? "Club logo"}
            width={120}
            height={120}
            className="rounded-xl"
          />
        </div>
      ) : null}

      <h1 className="text-4xl font-bold mb-4 text-white">
        {club?.name ?? "Code Club"}
      </h1>

      <p className="text-xl max-w-3xl mx-auto text-white">
        {club?.description ??
          "Our projects have step-by-step instructions to teach you how to create games, animations, and much more."}
      </p>
    </header>
  );
}