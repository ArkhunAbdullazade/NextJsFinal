"use client";

import { useEffect, useState } from "react";

interface Transaction {
    Id: string;
    Title: string;
    Type: "Deposit" | "Withdrawal";
    Card: string;
    Date: string;
    Amount: number;
}

const WithdrawalIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
            fill="#718EBF"
        />
    </svg>
);

const DepositIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z"
            fill="#718EBF"
        />
    </svg>
);

export default function RecentTransactionsTable() {
    const [activeFilter, setActiveFilter] = useState<"All" | "Income" | "Expense">("All");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const itemsPerPage = 5;

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

    const filteredTransactions = transactions.filter((transaction) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Income") return transaction.Type === "Deposit";
        if (activeFilter === "Expense") return transaction.Type === "Withdrawal";
        return true;
    });

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <div className="flex mb-6 gap-20 border-b border-[#EBEEF2] w-[1110px]">
                {["All", "Income", "Expense"].map((filter) => (
                    <button
                        key={filter}
                        className={`pb-4 font-medium text-[16px] ${
                            activeFilter === filter
                                ? "border-b-2 border-[#1814F3] text-[#1814F3]"
                                : "text-[#718EBF]"
                        }`}
                        onClick={() => {
                            setActiveFilter(filter as typeof activeFilter);
                            setCurrentPage(1);
                        }}
                    >
                        {filter} Transactions
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-[25px] border border-[#DFEAF2] p-6 w-[1110px]">
                <div className="grid grid-cols-7 pb-4 border-b border-[#e4e4e4] text-[#718EBF] font-medium">
                    <div>Description</div>
                    <div>Transaction ID</div>
                    <div>Type</div>
                    <div>Card</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Receipt</div>
                </div>

                <div className="flex flex-col gap-2">
                    {currentItems.map((transaction, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-7 py-4 items-center border-b border-[#f5f5f5] text-[#232323]"
                        >
                            <div className="flex items-center gap-4">
                                {transaction.Type === "Withdrawal" ? (
                                    <WithdrawalIcon />
                                ) : (
                                    <DepositIcon />
                                )}
                                <span>{transaction.Title}</span>
                            </div>
                            <div>{transaction.Id}</div>
                            <div>{transaction.Type}</div>
                            <div>{transaction.Card}</div>
                            <div>{transaction.Date}</div>
                            <div
                                className={`font-medium ${
                                    transaction.Type === "Withdrawal"
                                        ? "text-[#FE5C73]"
                                        : "text-[#16DBAA]"
                                }`}
                            >
                                {transaction.Type === "Withdrawal" ? "-" : "+"}$
                                {transaction.Amount.toLocaleString()}
                            </div>
                            <button className="text-[#123288] border border-[#123288] rounded-full w-[100px] h-[35px] text-[15px]">
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end items-center gap-2 mt-6 w-[1110px]">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="py-2 px-4 text-[#1814F3]"
                >
                    {"<"} Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-full font-medium ${
                            currentPage === i + 1
                                ? "bg-[#1814F3] text-white"
                                : "text-[#1814F3]"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="py-2 px-4 text-[#1814F3]"
                >
                    Next {">"}
                </button>
            </div>
        </div>
    );
};