"use client";

import ExpensesBarChart from "@/components/expensesBarChart";

export default function MonthlyExpensesChart() {
  return (
    <div>
      <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] sm:text-[18px] sm:mb-[16px]">
        My Expense
      </h1>

      <ExpensesBarChart />
    </div>
  );
}
