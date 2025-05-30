import { Card, Title, AreaChart } from "@tremor/react";
import { useState } from 'react';

const chartdata = [
  { date: "Jan", Expenses: 2890, Savings: 2400 },
  { date: "Feb", Expenses: 1890, Savings: 3400 },
  { date: "Mar", Expenses: 3890, Savings: 2400 },
  // Add more data points
];

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('1');

  return (
    <div className="p-6 bg-primary text-white">
      <Title className="text-white mb-4">Financial Overview</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 p-4">
          <Title className="text-white">Expenses vs Savings</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["Expenses", "Savings"]}
            colors={["red", "green"]}
          />
        </Card>
        
        <Card className="bg-gray-900 p-4">
          <Title className="text-white">Quick Actions</Title>
          <div className="mt-4 space-y-4">
            <button className="w-full bg-secondary text-white p-3 rounded-lg hover:bg-blue-700 transition">
              Add Transaction
            </button>
            <button className="w-full bg-accent text-white p-3 rounded-lg hover:bg-indigo-700 transition">
              View Reports
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}