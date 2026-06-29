import { groups } from "@/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import GroupCard from "./group-card";

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
        {groups.slice(0, 3).map((group) => (
          // <article
          //   key={group.id}
          //   className="bg-elevated border border-border rounded-xl overflow-hidden"
          // >
          //   <Image
          //     src={group.coverImage}
          //     alt={group.name}
          //     width={200}
          //     height={100}
          //     className="w-full h-40 object-center object-cover"
          //   />
          //   <div className="p-2 flex flex-col gap-4">
          //     <h1 className="font-bold">{group.name}</h1>
          //     <p className="bg-secondary w-fit font-semibold px-2 rounded">
          //       {group.plan}
          //     </p>
          //     <p className="flex gap-2 items-center border-b border-border">
          //       <span className="flex gap-1 items-center text-yellow-500 font-semibold">
          //         <FaStar />
          //         {group.rating.toFixed(1)}
          //       </span>
          //       <span className="text-xs text-muted">(26)</span>
          //     </p>
          //     <p className="text-sm text-muted">Renews in 9 days</p>
          //     <p className="text-lg font-semibold">
          //       {formatCurrency(group.monthlyPrice)}
          //       <span className="text-sm font-medium">/month</span>
          //     </p>
          //   </div>
          // </article>
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
