"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Expense {
  Month: string;
  Amount: number;
}

export default function ExpensesBarChart() {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [barChartExpenses, setBarChartExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchMonthlyExpenses = async () => {
      try {
        const response = await fetch("/api/barChartExpenses");
        const data = await response.json();
        if (data.barChartExpenses && Array.isArray(data.barChartExpenses)) {
          setBarChartExpenses(data.barChartExpenses);
        } else {
          console.error("Invalid data format from API:", data);
        }
      } catch (error) {
        console.error("Failed to fetch monthly expenses:", error);
      }
    };

    fetchMonthlyExpenses();
  }, []);

  const handleClickBar = (index: number) => {
    setSelectedBar(index === selectedBar ? null : index);
  };

  return (
    <div className="relative" style={{ width: "350px", height: "225px" }}>
      <div className="bg-white rounded-[25px] border border-[#DFEAF2] p-[33px_28px_25px_25px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartExpenses}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="Month"
              tick={{ fill: "#718ebf", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              content={({ active, payload }) =>
                active &&
                payload &&
                payload.length &&
                payload[0]?.value !== undefined ? (
                  <div className="bg-white shadow-md p-2 rounded text-sm text-[#343c6a] font-semibold">
                    ${payload[0].value.toLocaleString()}
                  </div>
                ) : null
              }
            />
            <Bar
              dataKey="Amount"
              barSize={30}
              radius={[8, 8, 0, 0]}
              onClick={(_, index) => handleClickBar(index)}
            >
              {barChartExpenses.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === selectedBar ? "#16DBCC" : "#EDF0F7"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {selectedBar !== null && (
        <div
          className="absolute transform translate-x-[-50%] translate-y-[-100%] text-[#343c6a] font-semibold text-xs pointer-events-none whitespace-nowrap"
          style={{
            left: `${50 + selectedBar * 10}%`,
            top: "10px",
          }}
        >
          ${barChartExpenses[selectedBar].Amount.toLocaleString()}
        </div>
      )}
    </div>
  );
}
