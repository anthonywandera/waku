import { GroupDetailsDTO } from "@/types";
import { TabContent, Tabs, TabsMenu, TabTrigger } from "./tabs";
import GroupDetailsOverviewTabContent from "./group-details-overview-tab-content";
import ReviewCard from "./review-card";
import Avatar from "./avatar";
import { formatDate } from "@/util";
import { FaCheck } from "react-icons/fa6";

export default function GroupDetailsTabs({
  groupDetails,
}: {
  groupDetails: GroupDetailsDTO;
}) {
  const { members, reviews, renewalHistory } = groupDetails;
  return (
    <section className="mx-12 mb-12">
      <Tabs initial="overview">
        <TabsMenu className="flex gap-6 border-b border-border mb-6 text-muted *:rounded-t-lg *:pb-6 *:hover:bg-elevated *:px-4">
          <TabTrigger id="overview" activeClass="border-b-2 border-secondary">
            Overview
          </TabTrigger>
          <TabTrigger id="members" activeClass="border-b-2 border-secondary">
            Members ({members.length})
          </TabTrigger>
          <TabTrigger id="reviews" activeClass="border-b-2 border-secondary">
            Reviews ({reviews.length})
          </TabTrigger>
          {groupDetails.group.rules && groupDetails.group.rules.length > 0 && (
            <TabTrigger id="rules" activeClass="border-b-2 border-secondary">
              Rules
            </TabTrigger>
          )}
          {groupDetails.renewalHistory &&
            groupDetails.renewalHistory.length > 0 && (
              <TabTrigger
                id="renewal_history"
                activeClass="border-b-2 border-secondary"
              >
                Renewal History
              </TabTrigger>
            )}
        </TabsMenu>

        {/* overview */}
        <GroupDetailsOverviewTabContent groupDetails={groupDetails} />

        {/* members */}
        <TabContent id="members" className="bg-elevated rounded-lg p-4">
          <table className="w-full text-sm">
            <thead className="text-left ">
              <tr className="text-muted border-b border-border *:pb-2">
                <th>User</th>
                <th>Role</th>
                <th>Member since</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="*:py-2">
                  <td className="flex gap-1 items-center">
                    <Avatar
                      src={member.avatar}
                      alt={member.username}
                      className="w-8 h-8"
                    />
                    <span>{member.username}</span>
                  </td>
                  <td className="text-xs text-success">
                    {member.owner ? "Owner" : ""}
                  </td>
                  <td>{formatDate(member.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabContent>

        {/* reviews */}
        <TabContent id="reviews" className="flex flex-col gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </TabContent>

        {/* rules */}
        {groupDetails.group.rules && groupDetails.group.rules.length > 0 && (
          <TabContent id="rules">
            <ul className="py-2 bg-elevated rounded-lg *:not-last:border-b *:border-border *:py-2 *:px-4">
              {groupDetails.group.rules.map((rule) => (
                <li key={rule} className="flex items-center gap-2">
                  <FaCheck /> {rule}
                </li>
              ))}
            </ul>
          </TabContent>
        )}

        {/* renewal history */}
        {groupDetails.renewalHistory &&
          groupDetails.renewalHistory.length > 0 && (
            <TabContent id="renewal_history">
              {renewalHistory.map((renewal) => (
                <div key={renewal.id}>{renewal.amount}</div>
              ))}
            </TabContent>
          )}
      </Tabs>
    </section>
  );
}
