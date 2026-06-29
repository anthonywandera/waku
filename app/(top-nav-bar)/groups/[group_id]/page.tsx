import Progress from "@/components/progress";
import { groups } from "@/data";
import { calculateDaysLeft, formatCurrency } from "@/util";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

const group = groups[1];

export const metadata: Metadata = {
  title: group.name,
  description: group.description,
};

function PlanInfo({ name, value }: { name: string; value: string }) {
  return (
    <li className="flex gap-6 justify-between py-4 px-6 not-last:border-b border-border">
      <span className="font-semibold">{name}</span>
      <span className="font-extralight text-muted">{value}</span>
    </li>
  );
}

export default function GroupDetailsPage() {
  return (
    <>
      <nav className="mx-12 my-6 flex gap-2">
        <Link href={"/groups"} className="flex items-center gap-4 text-muted">
          <FaArrowLeft /> Browse Groups
        </Link>
        / {group.name}
      </nav>
      <section className="mx-12 mb-12 flex gap-8">
        <article className="border w-full border-border rounded-2xl overflow-hidden bg-[color-mix(var(--elevated),transparent_80%)]">
          <Image
            src={group.coverImage}
            alt={group.name}
            width={400}
            height={400}
            className="w-full h-70 object-center object-cover"
          />
          <div className="p-8 relative">
            <Image
              src={group.profileImage}
              alt={group.name}
              width={200}
              height={200}
              className="h-40 w-40 object-center object-cover rounded-full -mt-40 mb-4 border-3 border-border"
            />
            <h1 className="text-2xl font-bold mb-2">{group.name}</h1>

            <div className="flex gap-4 uppercase text-xs mb-2 font-semibold *:p-1 *:rounded-lg *:flex *:items-center *:gap-1">
              <span className="text-info backdrop-blur bg-[color-mix(var(--info),transparent_95%)] border border-[color-mix(var(--info),transparent_70%)]">
                <MdVerifiedUser />
                Verified Owner
              </span>
              <span className="text-yellow-500 backdrop-blur bg-[color-mix(var(--color-yellow-500),transparent_95%)] border border-[color-mix(var(--color-yellow-500),transparent_70%)]">
                <FaStar />
                Refund Guaranteed
              </span>
            </div>
            <p className="mb-2 text-sm">@{group.ownerId}</p>
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="text-lg font-semibold">
                {group.rating.toFixed(1)}{" "}
              </span>
              <span className="text-sm text-muted">(22 reviews)</span>
            </p>
          </div>
        </article>

        <article className="p-6 w-150 border border-border rounded-2xl bg-elevated flex flex-col gap-6 h-fit">
          <h1>
            <span className="text-3xl font-bold">
              {formatCurrency(group.monthlyPrice)}
            </span>
            <span className="text-muted">&nbsp;/&nbsp;month</span>
          </h1>

          <div>
            <p className="flex justify-between items-center gap-6 mb-2">
              <span>3 / 4 Members</span>
              <span className="text-sm text-muted">75% Full</span>
            </p>
            <Progress max={group.maxMembers} value={3} />
          </div>

          <p className="text-sm text-muted border-b border-border pb-4">
            Renews in {calculateDaysLeft(group.renewalDate)} days
          </p>

          <button className="hero-cta-gradient p-4 font-bold rounded-lg">
            Join Group
          </button>
          <p className="text-muted text-sm text-center">
            Secure payment via M-PESA
          </p>
        </article>
      </section>

      <section className="mx-12 mb-12">
        <menu className="flex gap-6 border-b pb-6 border-border mb-6 text-muted *:px-4">
          <button>Overview</button>
          <button>Members (2)</button>
          <button>Reviews (38)</button>
          <button>Rules</button>
          <button>Renewal History</button>
        </menu>

        <div className="flex gap-6">
          <ul className="bg-elevated rounded-lg border border-border text-sm w-100">
            <PlanInfo name="Plan" value="Mega Fan" />
            <PlanInfo name="Resolution" value="Up to 4K" />
            <PlanInfo name="Screens" value="4 Screens" />
            <PlanInfo name="Renewal Date" value="May 25, 2026" />
            <PlanInfo name="Created" value="Apr 25,2025" />
            <PlanInfo name="Minimum Commitment" value="1 Month" />
          </ul>

          <div className="grid grid-cols-2 gap-6 *:bg-elevated *:rounded-xl *:p-6">
            <article>
              <h1 className="font-bold mb-4">About the group</h1>
              <p className="text-muted text-sm mb-4">{group.description}</p>

              <ul className="text-muted text-sm flex flex-col gap-2">
                <li>No password sharing</li>
                <li>Be respectfull</li>
                <li>No account charges</li>
              </ul>
            </article>

            <article>
              <h1 className="font-bold mb-4">Owner</h1>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
