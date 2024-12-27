"use client";

import ActivityBarChart from "@/components/activityBarChart";

export default function WeeklyActivity() {
  return (
    <div>
      <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] sm:text-[18px] sm:mb-[16px]">
        Weekly Activity
      </h1>
      <ActivityBarChart />
    </div>
  );
}
