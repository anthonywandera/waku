import { GroupDTO } from "@/types";
import { calculateDaysLeft, formatCurrency } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import Progress from "./progress";
import Avatar from "./avatar";

export default function GroupCard({ group }: { group: GroupDTO }) {
  const daysLeft = calculateDaysLeft(group.renewalDate);
  const slotsLeft = group.maxMembers - group.members.length;
  const owner = group.members.find((m) => m.owner);

  return (
    <article className="bg-elevated border border-border rounded-xl p-2 flex flex-col gap-2 text-xs">
      <div className="flex gap-2 items-center mb-2">
        <Image
          src={group.profileImage}
          alt={group.name}
          width={100}
          height={100}
          className="w-16 h-16 rounded-3xl object-center object-cover"
        />
        <div className="w-full">
          <h1 className="mb-1 flex gap-2 justify-between items-center">
            <span className="font-bold text-lg">{group.name}</span>
            {group.refundProtected && (
              <span className="text-yellow-500 bg-[color-mix(var(--color-yellow-500),transparent_90%)] border border-current p-2 rounded-lg flex items-center gap-1">
                <FaStar />
                {/* Refund Guaranteed */}
              </span>
            )}
          </h1>
          <p className="flex gap-1 items-center text-muted">
            <span className="flex gap-1 items-center font-semibold">
              <FaStar className="text-yellow-500" />
              {group.rating.toFixed(1)}
            </span>
            <span>({group.totalReviews})</span>
            {group.isVerified && (
              <span className="text-info ml-2 bg-[color-mix(var(--info),transparent_90%)] border border-current p-1 rounded-lg flex items-center gap-1">
                <MdVerifiedUser />
                Verified Owner
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted mb-2">
        <span>{group.plan}</span>
        <span className="p-0.5 rounded-full bg-muted"></span>
        <span>{group.maxMembers} profiles</span>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex">
          {group.members.slice(0, 4).map((member) => (
            <Avatar
              key={member.id}
              src={member.avatar}
              alt={member.username}
              size={50}
              className="w-8 not-first:-ml-4"
            />
          ))}
        </div>
        <Progress max={group.maxMembers} value={group.members.length} />
        <div className="flex flex-col items-center">
          <p className="font-semibold">
            {group.members.length} / {group.maxMembers}
          </p>
          <p className="w-max text-success">
            {slotsLeft === 1
              ? `${slotsLeft} slot left`
              : `${slotsLeft} slots left`}
          </p>
        </div>
      </div>

      <div className="flex justify-between text-muted border-b pb-4 border-border">
        <p>@{owner?.username}</p>
        {daysLeft > 0 && (
          <p className="flex items-center gap-1">
            <CiCalendar /> Renews in {daysLeft} days
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          {formatCurrency(group.monthlyPrice)}
          <span className="text-xs font-medium text-muted">/month</span>
        </p>
        <Link
          href={`/groups/${group.id}`}
          className="hero-cta-gradient py-2 px-8 text-sm rounded-md text-center font-bold"
        >
          Join Group
          {/* View Details */}
        </Link>
      </div>
    </article>
  );
}
