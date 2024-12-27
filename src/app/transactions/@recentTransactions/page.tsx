"use client";

import RecentTransactionsTable from "@/components/recentTransactionsTable";

export default function AllTransactions() {
  return (
    <div>
      <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] sm:text-[18px] sm:mb-[16px]">
        Recent Transactions
      </h1>
      <RecentTransactionsTable />
    </div>
  );
}
