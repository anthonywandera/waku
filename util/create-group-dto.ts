import { memberships, users } from "@/data";
import { Group, GroupDTO, User } from "@/types";

export function createGroupDTO(group: Group): GroupDTO {
  const groupMemberships = memberships.filter((m) => m.groupId === group.id);
  const groupMembers = groupMemberships.map(
    (membership) =>
      users.find((user) => user.id === membership.memberId) as User,
  );
  const members = groupMembers.map((member) => ({
    id: member.id,
    avatar: member.avatar,
    username: member.username,
    owner: member.id === group.ownerId,
  }));

  const {
    id,
    createdAt,
    isVerified,
    maxMembers,
    monthlyPrice,
    name,
    plan,
    profileImage,
    rating,
    refundProtected,
    renewalDate,
    totalReviews,
  } = group;

  return {
    id,
    createdAt,
    isVerified,
    maxMembers,
    monthlyPrice,
    name,
    plan,
    profileImage,
    rating,
    refundProtected,
    renewalDate,
    totalReviews,
    members,
  };
}
