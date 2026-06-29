import { groups } from "@/data";
import { Group } from "@/types";
import { formatCurrency } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

export default function GroupCard({ group }: { group: Group }) {
  function calculateDaysToRenewal(date: string) {
    const renewalDate = new Date(date);
    const today = new Date();
    const difference = renewalDate.getTime() - today.getTime();

    const timeInDays = difference / (1000 * 60 * 60 * 24);
    return Math.ceil(timeInDays);
  }

  const renewalDate = calculateDaysToRenewal(group.renewalDate);

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
            <span className="text-yellow-500 bg-[color-mix(var(--color-yellow-500),transparent_90%)] border border-current p-2 rounded-lg flex items-center gap-1">
              <FaStar />
              {/* Refund Guaranteed */}
            </span>
          </h1>
          <p className="flex gap-1 items-center text-muted">
            <span className="flex gap-1 items-center font-semibold">
              <FaStar className="text-yellow-500" />
              {group.rating.toFixed(1)}
            </span>
            <span>(26)</span>
            <span className="text-info ml-2 bg-[color-mix(var(--info),transparent_90%)] border border-current p-1 rounded-lg flex items-center gap-1">
              <MdVerifiedUser />
              Verified Owner
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted mb-2">
        <span>Crunchyroll {group.plan}</span>
        <span className="p-0.5 rounded-full bg-muted"></span>
        <span>4 profiles</span>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex">
          {groups.slice(0, 4).map((grp) => (
            <Image
              key={grp.id}
              src={grp.profileImage}
              alt={grp.name}
              width={50}
              height={50}
              className="w-8 h-8 rounded-full border-3 border-elevated not-first:-ml-4 object-center object-cover"
            />
          ))}
        </div>
        <progress
          max={4}
          value={3}
          className="w-full h-2 appearance-none overflow-hidden rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-background [&::-webkit-progress-value]:bg-secondary [&::-moz-progress-bar]:bg-secondary"
        />
        <div className="flex flex-col items-center">
          <p className="font-semibold">3 / 4</p>
          <p className="w-max text-success">1 slot left</p>
        </div>
      </div>

      <div className="flex justify-between text-muted border-b pb-4 border-border">
        <p>@{group.ownerId}</p>
        {renewalDate > 0 ? (
          <p className="flex items-center gap-1">
            <CiCalendar /> Renews in {renewalDate} days
          </p>
        ) : (
          <p>{group.status}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          {formatCurrency(group.monthlyPrice)}
          <span className="text-xs font-medium text-muted">/month</span>
        </p>
        <Link
          href={"#"}
          className="bg-primary py-2 px-8 text-sm rounded-md text-center font-bold"
        >
          Join Group
        </Link>
      </div>
    </article>
  );
}
