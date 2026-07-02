import PageHeader from "@/components/page-header";
import { formatCurrency } from "@/util";
import { CiLock } from "react-icons/ci";

const transactionFilters = [
  "All Transactions",
  "Payments",
  "Top Ups",
  "Refunds",
];

export default function Page() {
  return (
    <>
      <PageHeader title="Wallet & Payments" />
      <div className="p-6 flex gap-6">
        <div className="flex flex-col gap-4 text-sm *:bg-elevated *:rounded-lg">
          <section className="flex flex-col gap-4 p-4">
            <h2 className="font-semibold">Wallet Balance</h2>
            <p className="text-4xl font-semibold">{formatCurrency(1250)}</p>
            <menu className="flex gap-2 font-semibold *:px-8 *:py-2 *:rounded">
              <button className="bg-secondary">Top Up</button>
              <button className="bg-border">Withdraw</button>
            </menu>
            <p className="text-xs text-success flex items-center gap-2">
              <CiLock className="text-sm text-text" /> Secure payment via M-PESA
            </p>
          </section>

          <menu className="flex flex-col p-2">
            {transactionFilters.map((trans) => (
              <button
                key={trans}
                className="text-left py-2 px-4 rounded-lg hover:bg-border"
              >
                {trans}
              </button>
            ))}
          </menu>
        </div>
        <div>Hey</div>
      </div>
    </>
  );
}
