export interface Review {
  id: string;
  groupId: string;
  memberId: string;
  ownerId: string;
  stars: number;
  review: string;
  createdAt: Date;
}
