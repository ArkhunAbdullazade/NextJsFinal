import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "./card";

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex space-x-4">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center space-x-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="text-sm text-[#718EBF]">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default function ActivityBarChart() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/activities");
        const data = await response.json();
        setActivities(data.activities);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <Card height={"322px"} width={"730px"} padding={"28px 30px 28px 33px"}>
      <div style={{ width: "100%", height: "322px" }}>
        <ResponsiveContainer width="100%" height={322}>
          <BarChart
            data={activities}
            margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Day"
              tickFormatter={(Day) => Day}
              interval={0}
              tick={{ fontSize: 13, fill: "#718EBF" }}
            />
            <YAxis
              ticks={[0, 100, 200, 300, 400, 500]}
              tick={{ fontSize: 13, fill: "#718EBF" }}
            />
            <Tooltip />
            <Legend
              content={<CustomLegend />}
              wrapperStyle={{ top: 0, left: 495 }}
            />
            <Bar
              dataKey="Withdraw"
              fill="#1814F3"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="Deposit"
              fill="#16DBCC"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
