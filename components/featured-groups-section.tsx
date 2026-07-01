import { groups, memberships, users } from "@/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import GroupCard from "./group-card";
import { User } from "@/types";

export default function FeaturedGroupsSection() {
  return (
    <section className="m-12">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">Featured Groups</h1>
        <Link href={"/groups"} className="flex items-center gap-2 text-primary">
          View all <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {groups.slice(0, 3).map((group) => {
          const groupMemberships = memberships.filter(
            (m) => m.groupId === group.id,
          );

          const groupMembers = groupMemberships.map(
            (membership) =>
              users.find((user) => user.id === membership.memberId) as User,
          );

          return (
            <GroupCard key={group.id} group={group} members={groupMembers} />
          );
        })}
      </div>
    </section>
  );
}
