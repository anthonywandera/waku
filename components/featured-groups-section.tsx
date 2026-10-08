import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import GroupCard from "./group-card";
import { Group } from "@/types";

export default async function FeaturedGroupsSection() {
  const groups = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/groups?featured=true`,
  ).then<Group[]>((res) => {
    return res.json();
  });

  return (
    <section className="m-12 max-sm:m-6">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">Featured Groups</h1>
        <Link href={"/groups"} className="flex items-center gap-2 text-primary">
          View all <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {groups.slice(0, 3).map((group) => {
          return <GroupCard key={group.id} group={group} />;
        })}
      </div>
    </section>
  );
}
