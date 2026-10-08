import { Review } from "./review";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Group {
  id: number;
  name: string;
  profileImage?: string;
  coverImage?: string;
  description?: string;
  verified: boolean;
  protected: boolean;
  createdAt: string;
  owner: { id: number; username: string; avatar?: string };
  maxMembers: number;
  rating: number;
  costPerMember: number;
  slotsLeft: number;
  subscription?: { active: boolean; expiry: string };
  plan: {
    id: number;
    name: string;
    region: string;
    price: number;
    currency: string;
    profiles: number;
  };
  reviews: {
    id: number;
    message: string;
    rating: number;
    createdAt: string;
    author: { username: string; avatar?: string };
  }[];
  members: {
    id: number;
    username: string;
    avatar: string;
    membership: { createdAt: string };
  }[];
  rules: { id: number; rule: string }[];
}

export interface GroupDTO {
  id: string;
  name: string;
  profileImage: string;
  plan: string;
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
