import { TabContent, Tabs, TabsMenu, TabTrigger } from "./tabs";
import GroupDetailsOverviewTabContent from "./group-details-overview-tab-content";
import ReviewCard from "./review-card";
import Avatar from "./avatar";
import { formatDate } from "@/util";
import { FaCheck } from "react-icons/fa6";
import { Group } from "@/types";

export default function GroupDetailsTabs({ group }: { group: Group }) {
  return (
    <section className="mx-12 mb-12 max-sm:mx-6">
      <Tabs initial="overview">
        <TabsMenu className="flex gap-6 border-b border-border mb-6 text-muted max-sm:text-sm max-sm:gap-3 *:rounded-t-lg *:pb-6 *:hover:bg-elevated *:px-4 *:max-sm:px-1">
          <TabTrigger id="overview" activeClass="border-b-2 border-secondary">
            Overview
          </TabTrigger>
          <TabTrigger id="members" activeClass="border-b-2 border-secondary">
            Members ({group.members.length})
          </TabTrigger>
          <TabTrigger id="reviews" activeClass="border-b-2 border-secondary">
            Reviews ({group.reviews.length})
          </TabTrigger>
          {group.rules.length !== 0 && (
            <TabTrigger id="rules" activeClass="border-b-2 border-secondary">
              Rules
            </TabTrigger>
          )}
        </TabsMenu>

        {/* overview */}
        <GroupDetailsOverviewTabContent group={group} />

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
              {group.members.map((member) => (
                <tr key={member.id} className="*:py-2">
                  <td className="flex gap-1 items-center">
                    <Avatar
                      src={member.avatar}
                      alt={member.username}
                      className="w-8 h-8"
                    />
                    <span className="font-bold">@{member.username}</span>
                  </td>
                  <td className="text-xs text-success">
                    {member.id === group.owner.id ? "Owner" : ""}
                  </td>
                  <td>{formatDate(member.membership.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabContent>

        {/* reviews */}
        <TabContent
          id="reviews"
          className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
        >
          {group.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              message={review.message}
              rating={review.rating}
              createdAt={review.createdAt}
              avatar={review.author.avatar}
              username={review.author.username}
            />
          ))}
        </TabContent>

        {/* rules */}
        {group.rules.length !== 0 && (
          <TabContent id="rules">
            <ul className="py-2 bg-elevated rounded-lg *:not-last:border-b *:border-border *:py-2 *:px-4">
              {group.rules.map((rule) => (
                <li key={rule.id} className="flex items-center gap-2">
                  <FaCheck /> {rule.rule}
                </li>
              ))}
            </ul>
          </TabContent>
        )}
      </Tabs>
    </section>
  );
}
