"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpensesPieChart = () => {
    const colors = ["#FA00FF", "#FC7900", "#343C6A", "#1814F3"];

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch("/api/expenses");
                const data = await response.json();
                setExpenses(data.expenses);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div
            className="bg-white rounded-[25px] border border-[#DFEAF2] p-[31px_40px_32px_41px]"
            style={{ width: "350px", height: "322px" }}
        >
            <PieChart width={300} height={300}>
                <Pie
                    data={expenses}
                    dataKey="Percent"
                    nameKey="Title"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    label={({ name, percent }) => `${percent}%`}
                >
                    {expenses.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default ExpensesPieChart;
