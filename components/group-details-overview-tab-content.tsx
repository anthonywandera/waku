import { GroupDetailsDTO } from "@/types";
import { TabContent, TabTrigger } from "./tabs";
import { FaBan, FaStar } from "react-icons/fa6";
import Avatar from "./avatar";
import { formatDate } from "@/util";
import ReviewCard from "./review-card";

function PlanInfo({ name, value }: { name: string; value: string }) {
  return (
    <li className="flex gap-6 justify-between py-4 px-6 not-last:border-b border-border">
      <span className="font-semibold">{name}</span>
      <span className="font-extralight text-muted">{value}</span>
    </li>
  );
}

export default function GroupDetailsOverviewTabContent({
  groupDetails,
}: {
  groupDetails: GroupDetailsDTO;
}) {
  const { group, owner, plan, reviews } = groupDetails;
  return (
    <TabContent id="overview">
      <div className="flex gap-6 mb-6 max-sm:flex-col">
        <ul className="bg-elevated rounded-lg border border-border text-sm w-100 max-sm:w-full">
          <PlanInfo name="Plan" value={plan.name} />
          <PlanInfo name="Resolution" value={`Up to ${plan.resolution}`} />
          <PlanInfo name="Screens" value={`${plan.screens} Screens`} />
          <PlanInfo name="Renewal Date" value={formatDate(group.renewalDate)} />
          <PlanInfo name="Created" value={formatDate(group.createdAt)} />
          <PlanInfo
            name="Minimum Commitment"
            value={`${plan.minimumCommitment} Month`}
          />
        </ul>

        <div className="grid grid-cols-2 w-full gap-6 max-sm:grid-cols-1 *:bg-elevated *:rounded-xl">
          <article className="p-6">
            <h1 className="font-bold mb-4">About the group</h1>
            <p className="text-muted text-sm mb-4">{group.description}</p>

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

      {reviews.length > 0 && (
        <div className="bg-linear-to-t from-background to-elevated rounded-xl">
          <div className="flex gap-2 justify-between items-center p-6">
            <h1 className="text-lg font-bold">Recent Reviews</h1>
            <TabTrigger id="reviews" className="text-secondary text-sm">
              View all
            </TabTrigger>
          </div>

          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
    </TabContent>
  );
}
