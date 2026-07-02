import Avatar from "@/components/avatar";
import Progress from "@/components/progress";
import { groups, reviews, users } from "@/data";
import { User } from "@/types";
import {
  calculateDaysLeft,
  formatCurrency,
  formatDate,
  getStars,
} from "@/util";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FaArrowLeft, FaBan, FaStar } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

function PlanInfo({ name, value }: { name: string; value: string }) {
  return (
    <li className="flex gap-6 justify-between py-4 px-6 not-last:border-b border-border">
      <span className="font-semibold">{name}</span>
      <span className="font-extralight text-muted">{value}</span>
    </li>
  );
}

export async function generateMetadata(data: {
  params: Promise<{ group_id: string }>;
}): Promise<Metadata> {
  const params = await data.params;
  const group = groups.find((g) => g.id === params.group_id);

  return !group ? { title: "Group Not Found" } : { title: group.name };
}

export default async function GroupDetailsPage({
  params,
}: {
  params: Promise<{ group_id: string }>;
}) {
  const data = await params;
  const id = data.group_id;
  const group = groups.find((g) => g.id === id);
  const owner = users.find((user) => user.id === group?.ownerId);
  const groupReviews = reviews.filter((r) => r.groupId === group?.id);

  return (
    <>
      <nav className="mx-12 my-6 flex gap-2">
        <Link href={"/groups"} className="flex items-center gap-4 text-muted">
          <FaArrowLeft /> Browse Groups
        </Link>
        {group && `/ ${group?.name}`}
      </nav>

      {group && owner && (
        <>
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
                <Avatar
                  src={group.profileImage}
                  alt={group.name}
                  size={200}
                  className="h-40 w-40 -mt-40 mb-4 border-3 border-border"
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

            <article className="w-150 border border-border rounded-2xl bg-elevated h-fit">
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
                    <span className="text-sm text-muted">75% Full</span>
                  </p>
                  <Progress max={group.maxMembers} value={3} />
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

          <section className="mx-12 mb-12">
            <menu className="flex gap-6 border-b pb-6 border-border mb-6 text-muted *:px-4">
              <button>Overview</button>
              <button>Members (2)</button>
              <button>Reviews (38)</button>
              <button>Rules</button>
              <button>Renewal History</button>
            </menu>

            <div>
              <div className="flex gap-6 mb-6">
                <ul className="bg-elevated rounded-lg border border-border text-sm w-100">
                  <PlanInfo name="Plan" value={group.plan} />
                  <PlanInfo name="Resolution" value="Up to 4K" />
                  <PlanInfo name="Screens" value="4 Screens" />
                  <PlanInfo
                    name="Renewal Date"
                    value={formatDate(group.renewalDate)}
                  />
                  <PlanInfo
                    name="Created"
                    value={formatDate(group.createdAt)}
                  />
                  <PlanInfo name="Minimum Commitment" value="1 Month" />
                </ul>

                <div className="grid grid-cols-2 w-full gap-6 *:bg-elevated *:rounded-xl">
                  <article className="p-6">
                    <h1 className="font-bold mb-4">About the group</h1>
                    <p className="text-muted text-sm mb-4">
                      {group.description}
                    </p>

                    <ul className="text-muted text-sm flex flex-col gap-2 *:flex *:items-center *:gap-2">
                      <li>
                        <FaBan className="text-error" /> No password sharing
                      </li>
                      <li>
                        <FaBan className="text-warning" /> Be respectful
                      </li>
                      <li>
                        <FaBan className="text-warning" /> No account changes
                      </li>
                    </ul>
                  </article>

                  <article>
                    <div className="p-6 mb-auto">
                      <h1 className="font-bold mb-4">Owner</h1>
                      <div className="flex gap-4">
                        <Avatar
                          src={owner.avatar}
                          alt={owner.username}
                          size={100}
                          className="w-30 h-30"
                        />
                        <div className="flex flex-col gap-1 text-xs text-muted pt-2">
                          <h2 className="text-xl font-semibold text-text">
                            {owner.username}
                          </h2>
                          <p>Member since {formatDate(owner.createdAt)}</p>
                          <p className="flex items-center gap-1">
                            <FaStar className="text-sm text-yellow-500" />
                            <span className="text-lg font-semibold text-yellow-500">
                              {owner.rating.toFixed(1)}
                            </span>
                            <span>({owner.totalReviews} reviews)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-border">
                      <button className="border border-border p-4 text-sm font-semibold rounded-lg w-full">
                        Message Owner
                      </button>
                    </div>
                  </article>
                </div>
              </div>

              <div className="bg-linear-to-t from-background to-elevated rounded-xl">
                <div className="flex gap-2 justify-between items-center p-6">
                  <h1 className="text-lg font-bold">Recent Reviews</h1>
                  <Link href={"#"} className="text-secondary text-sm">
                    View all
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {groupReviews.slice(0, 3).map((review) => {
                    const user = users.find(
                      (u) => u.id === review.memberId,
                    ) as User;

                    return (
                      <article
                        key={review.id}
                        className="p-4 bg-elevated shadow rounded-xl flex gap-4 text-sm"
                      >
                        <Avatar
                          src={user.avatar}
                          alt={user.username}
                          className="w-14 h-14"
                        />
                        <div className="w-full">
                          <div className="flex items-center gap-6 border-b border-border w-full py-2 mb-2">
                            <h1 className="font-semibold">@{user.username}</h1>
                            <div className="flex gap-0.5 text-yellow-500 text-xs">
                              {getStars(review.stars)}
                            </div>
                          </div>
                          <p className="text-xs text-muted mb-2">
                            {Math.abs(calculateDaysLeft(review.createdAt))} days
                            ago
                          </p>
                          <p className="text-xs text-mute">{review.review}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
