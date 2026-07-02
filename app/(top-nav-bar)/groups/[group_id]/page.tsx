import Avatar from "@/components/avatar";
import GroupDetailsTabs from "@/components/group-details-tabs";
import Progress from "@/components/progress";
import { groups } from "@/data";
import { calculateDaysLeft, formatCurrency, formatNumber } from "@/util";
import { createGroupDetailsDTO } from "@/util/create-group-details-dto";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FaArrowLeft, FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

export async function generateMetadata(data: {
  params: Promise<{ group_id: string }>;
}): Promise<Metadata> {
  const params = await data.params;
  const group = groups.find((g) => g.id === params.group_id)!;

  return { title: group.name };
}

export const dynamicParams = false;
export function generateStaticParams() {
  const generatedParams = groups.map((g) => ({ group_id: g.id }));
  return generatedParams;
}

export default async function GroupDetailsPage({
  params,
}: {
  params: Promise<{ group_id: string }>;
}) {
  const data = await params;
  const id = data.group_id;
  const groupDetails = createGroupDetailsDTO(groups.find((g) => g.id === id)!);
  const { group, owner, members } = groupDetails;

  return (
    <>
      <nav className="mx-12 my-6 flex gap-2 max-sm:mx-6 max-sm:my-4 text-muted text-sm">
        <Link href={"/groups"} className="flex items-center gap-4 text-muted">
          <FaArrowLeft /> Browse Groups
        </Link>
        {`/ ${group?.name}`}
      </nav>

      <section className="mx-12 mb-12 flex gap-8 max-sm:mx-6 max-sm:flex-col">
        <article className="border w-full border-border rounded-2xl overflow-hidden bg-[color-mix(var(--elevated),transparent_80%)]">
          <Image
            src={group.coverImage}
            alt={group.name}
            width={400}
            height={400}
            className="w-full h-70 object-center object-cover"
          />
          <div className="p-8 relative max-sm:p-4">
            <Avatar
              src={group.profileImage}
              alt={group.name}
              size={200}
              className="h-40 w-40 -mt-40 mb-4 border-3 border-border"
            />
            <h1 className="text-2xl font-bold mb-2">{group.name}</h1>

            <div className="flex gap-4 uppercase text-xs mb-2 font-semibold *:p-1 *:rounded-lg *:flex *:items-center *:gap-1 max-sm:gap-2">
              <span className="text-info backdrop-blur bg-[color-mix(var(--info),transparent_95%)] border border-[color-mix(var(--info),transparent_70%)]">
                <MdVerifiedUser />
                Verified Owner
              </span>
              <span className="text-yellow-500 backdrop-blur bg-[color-mix(var(--color-yellow-500),transparent_95%)] border border-[color-mix(var(--color-yellow-500),transparent_70%)]">
                <FaStar />
                Refund Guaranteed
              </span>
            </div>
            <p className="mb-2 text-sm flex items-center gap-1">
              <Avatar
                src={owner.avatar}
                alt={owner.username}
                size={50}
                className="w-8 h-8"
              />
              @{owner.username}
            </p>
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="text-lg font-semibold">
                {group.rating.toFixed(1)}{" "}
              </span>
              <span className="text-sm text-muted">
                ({group.totalReviews} reviews)
              </span>
            </p>
          </div>
        </article>

        <article className="w-150 border border-border rounded-2xl bg-elevated h-fit max-sm:w-full">
          <div className="p-6 flex flex-col gap-6">
            <h1>
              <span className="text-3xl font-bold">
                {formatCurrency(group.monthlyPrice)}
              </span>
              <span className="text-muted">&nbsp;/&nbsp;month</span>
            </h1>

            <div>
              <p className="flex justify-between items-center gap-6 mb-2">
                <span>3 / 4 Members</span>
                <span className="text-sm text-muted">
                  {formatNumber(members.length / group.maxMembers, {
                    style: "percent",
                  })}{" "}
                  Full
                </span>
              </p>
              <Progress max={group.maxMembers} value={members.length} />
            </div>

            <p className="text-sm text-muted">
              Renews in {calculateDaysLeft(group.renewalDate)} days
            </p>
          </div>

          <div className="p-6 flex flex-col border-t border-border">
            <Link
              href={"#"}
              className="hero-cta-gradient text-center p-4 font-bold rounded-lg mb-6"
            >
              Join Group
            </Link>
            <p className="text-muted text-sm text-center flex gap-2 items-center justify-center">
              <CiLock /> Secure payment via M-PESA
            </p>
          </div>
        </article>
      </section>

      <GroupDetailsTabs groupDetails={groupDetails} />
    </>
  );
}
