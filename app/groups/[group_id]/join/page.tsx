import Input from "@/components/input";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Join Group",
  description: "Join a group to watch anime together",
};

export default function JoinGroupPage(data: {
  params: Promise<{ group_id: string }>;
}) {
  const params = React.use(data.params);

  return (
    <>
      <section className="p-12">
        <h1 className="text-2xl font-bold mb-8">Pay with Mpesa</h1>
        <form>
          <Input
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="0712345678"
            required
          />

          <Input
            name="amount"
            label="Amount in KES"
            type="number"
            value={150}
            readOnly
          />

          <input type="hidden" name="type" value="subscription" readOnly />
          <input
            type="hidden"
            name="group_id"
            value={params.group_id}
            readOnly
          />

          <button type="button" className="px-6 py-2 bg-primary rounded">
            Complete payment
          </button>
        </form>
      </section>
    </>
  );
}
