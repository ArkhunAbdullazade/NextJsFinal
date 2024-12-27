"use client";

import ExpensesPieChart from "@/components/expensesPieChart";

export default function ExpenseStatistics() {
    return (
        <div>
            <h1 className="font-inter font-semibold text-gray-800 text-lg mb-5 sm:text-base sm:mb-4">
                Expense Statistics
            </h1>
            <ExpensesPieChart />
        </div>
    );
}
