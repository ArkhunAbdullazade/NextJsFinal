"use client";

interface TransactionsLayoutProps {
    children: React.ReactNode;
    myCards: React.ReactNode;
    myExpenses: React.ReactNode;
    recentTransactions: React.ReactNode;
}

export default function TransactionsLayout({
    children,
    myCards,
    myExpenses,
    recentTransactions,
}: TransactionsLayoutProps) {
    return (
        <div className="bg-[#f5f7fa] h-full pl-10 pt-6 sm:pl-6 sm:pt-5">
            <div className="flex gap-[30px] mb-6">
                {myCards}
                {myExpenses}
            </div>
            <div>{recentTransactions}</div>
            {children}
        </div>
    );
}
