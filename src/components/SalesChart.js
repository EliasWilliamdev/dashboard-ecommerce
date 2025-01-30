import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', vendas: 4000, estoque: 2400 },
  { name: 'Fev', vendas: 3000, estoque: 1398 },
  { name: 'Mar', vendas: 2000, estoque: 9800 },
  { name: 'Abr', vendas: 2780, estoque: 3908 },
  { name: 'Mai', vendas: 1890, estoque: 4800 },
  { name: 'Jun', vendas: 2390, estoque: 3800 },
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="vendas"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="estoque" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
