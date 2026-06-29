export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "payment" | "renewal" | "refund" | "announcement";
  isRead: boolean;
  createdAt: Date;
}
