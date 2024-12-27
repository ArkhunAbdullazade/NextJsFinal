"use client";

import React, { useEffect, useState } from "react";
import Transaction1 from "../../../assets/transaction1.svg";
import Transaction2 from "../../../assets/transaction2.svg";
import Transaction3 from "../../../assets/transaction3.svg";

const icons = [Transaction1, Transaction2, Transaction3];

interface Transaction {
  Title: string;
  Date: string;
  Type: string;
  Amount: number;
}

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions");
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <div className="p-4">
      <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] sm:text-[18px] sm:mb-[16px]">
        Recent Transactions
      </h1>
      <div
        className="bg-white rounded-[25px] border border-[#DFEAF2] p-[25px_24px_30px_25px]"
        style={{ height: "235px", width: "350px" }}
      >
        {transactions.slice(0, 3).map((transaction, index) => (
          <div
            key={index}
            className={`w-[301px] h-[55px] mb-${index === 0 ? 0 : 2}`}
          >
            <div className="flex">
              <div className={`rounded-full ${index == 0 ? "bg-[#fff5d9]" : index == 1 ? "bg-[#E7EDFF]" : "bg-[#DCFAF8]"} w-[55px] h-[55px] flex items-center justify-center mr-[17px]`}>
                {React.createElement(icons[index], {
                  width: "28px",
                  height: "28px",
                })}
              </div>

              <div>
                <h1 className="font-inter font-medium text-[16px] text-[#232323]">
                  {transaction.Title}
                </h1>
                <h1 className="font-inter font-normal text-[15px] text-[#718ebf]">
                  {transaction.Date}
                </h1>
              </div>

              <div className="ml-auto flex items-center">
                {transaction.Type === "Deposit" ? (
                  <h1 className="text-[#41d4a8]">
                    +${transaction.Amount.toLocaleString()}
                  </h1>
                ) : transaction.Type === "Withdrawal" ? (
                  <h1 className="text-[#ff4b4a]">
                    -${transaction.Amount.toLocaleString()}
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
