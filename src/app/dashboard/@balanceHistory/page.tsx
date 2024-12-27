"use client";

import BalanceAreaChart from "@/components/balanceAreaChart";

export default function BalanceHistory() {
    return (
        <div>
            <h1 className="font-inter font-semibold text-gray-800 text-lg mb-5 sm:text-base sm:mb-4">
                Balance History
            </h1>
            <BalanceAreaChart />
        </div>
    );
}
