export interface Payment {
  id: string;
  memberId: string;
  groupId: string;
  amount: number;
  type: "subscription" | "refund";
  status: "pending" | "paid" | "failed" | "refunded";
  mpesaReceipt: string;
  paidAt: Date;
}
