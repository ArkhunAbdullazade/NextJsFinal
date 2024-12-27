interface DashboardProps {
  children?: React.ReactNode;
  weeklyActivity?: React.ReactNode;
  balanceHistory?: React.ReactNode;
  myCards?: React.ReactNode;
  expenseStatistics?: React.ReactNode;
  recentTransaction?: React.ReactNode;
  quickTransfer?: React.ReactNode;
}

export default function DashboardLayout({
  children,
  weeklyActivity,
  balanceHistory,
  myCards,
  expenseStatistics,
  recentTransaction,
  quickTransfer,
}: DashboardProps) {
  return (
    <div className="bg-[#f5f7fa] h-full min-h-screen flex flex-col px-[20px] pt-[10px] ">
      {children}

      <div className="p-6">
        <div className="flex gap-[30px] mb-[30px] xl:gap-[30px] lg:gap-[25px]">
          {myCards}
          {recentTransaction}
        </div>

        <div className="flex gap-[30px] mb-[30px] xl:gap-[30px] lg:gap-[25px]">
          {weeklyActivity}
          {expenseStatistics}
        </div>

        <div className="flex gap-[30px] mb-[30px] xl:gap-[30px] lg:gap-[25px]">
          {quickTransfer}
          {balanceHistory}
        </div>
      </div>
    </div>
  );
}
