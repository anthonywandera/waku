export interface Group {
  id: string;
  ownerId: string;
  name: string;
  profileImage: string;
  coverImage: string;
  description: string;
  plan: "Mega Fan";
  monthlyPrice: number;
  maxMembers: number;
  renewalDate: string;
  status: "funding" | "waiting_renewal" | "active" | "expired" | "suspended";
  isVerified: boolean;
  refundProtected: boolean;
  rating: number;
  totalReviews: number;
  createdAt: string;
}
