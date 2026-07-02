import { Review } from "./review";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Group {
  id: string;
  ownerId: string;
  name: string;
  profileImage: string;
  coverImage: string;
  description: string;
  plan: "Crunchyroll Mega Fan";
  monthlyPrice: number;
  maxMembers: number;
  renewalDate: string;
  status: "funding" | "waiting_renewal" | "active" | "expired" | "suspended";
  isVerified: boolean;
  refundProtected: boolean;
  rating: number;
  totalReviews: number;
  createdAt: string;
  rules?: string[];
}

export interface GroupDTO {
  id: string;
  name: string;
  profileImage: string;
  plan: "Crunchyroll Mega Fan";
  monthlyPrice: number;
  maxMembers: number;
  renewalDate: string;
  isVerified: boolean;
  refundProtected: boolean;
  rating: number;
  totalReviews: number;
  createdAt: string;
  members: { id: string; username: string; avatar: string; owner: boolean }[];
}

export interface GroupDetailsDTO {
  group: Group;
  reviews: Review[];
  renewalHistory: Transaction[];
  owner: User;
  plan: {
    name: "Crunchyroll Mega Fan";
    resolution: "720p" | "1080p" | "2K" | "4K";
    screens: number;
    minimumCommitment: number;
  };
  members: {
    id: string;
    username: string;
    avatar: string;
    owner: boolean;
    createdAt: string;
  }[];
}
