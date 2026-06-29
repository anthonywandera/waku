export interface Transaction {
  id: string;
  walletId: string;
  amount: number;
  direction: "credit" | "debit";
  reason: "subscription" | "refund" | "withdrawal" | "deposit";
  createdAt: Date;
}
