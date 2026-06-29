export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  role: "member" | "owner" | "admin";
  verification: {
    email: boolean;
    phone: boolean;
    identity: boolean;
  };
  walletBalance: number;
  rating: number;
  totalReviews: number;
  createdAt: Date;
}
