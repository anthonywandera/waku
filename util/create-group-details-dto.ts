import { memberships, users } from "@/data";
import { Group, GroupDetailsDTO } from "@/types";

export function createGroupDetailsDTO(group: Group): GroupDetailsDTO {
  const groupMemberships = memberships.filter((m) => m.groupId === group.id);
  const groupMembers = groupMemberships.map(
    (membership) => users.find((user) => user.id === membership.memberId)!,
  );
  const owner = groupMembers.find((m) => m.id === group.ownerId)!;
  const members = groupMembers.map((member) => ({
    id: member.id,
    avatar: member.avatar,
    username: member.username,
    owner: member.id === group.ownerId,
    createdAt: memberships.find((m) => m.memberId)!.joinedAt,
  }));

  return {
    group,
    owner,
    members,
    renewalHistory: [],
    reviews: [],
    plan: {
      name: "Crunchyroll Mega Fan",
      resolution: "4K",
      screens: 4,
      minimumCommitment: 1,
    },
  };
}
