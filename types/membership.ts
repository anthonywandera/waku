export interface Membership {
  id: string;
  groupId: string;
  memberId: string;
  profileId: string;
  status: "pending" | "active" | "removed" | "expired";
  joinedAt: Date;
}
