import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import useGetProducts from "../../hooks/useGetProducts";
import { Link } from "react-router-dom";

export default function Admin() {
  const { usersList } = useSelector((state) => state.usersList);
  const { items } = useSelector((state) => state.items);
  const [products] = useGetProducts();
  const productsPrice = products?.map((item) => item.price);
  const totalPrice = productsPrice?.reduce((acc, cur) => acc + cur, 0);
  const chekoutPrice = items.map((item) => item.price);
  const totalCheckOutPrice = chekoutPrice?.reduce((acc, cur) => acc + cur, 0);
  //   console.log(totalPrice);
  const data = [
    { name: "total Price", value: totalPrice },
    { name: "checkout", value: totalCheckOutPrice },
  ];
  const COLORS = ["#0088FE", , "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col sm:flex-row  gap-6">
        <div className="bg-orange-400 w-full rounded-lg shadow-lg shadow-orange-300 p-6">
          <h2 className="text-2xl font-semibold mb-2">Users</h2>
          <p className="text-slate-50 font-bold text-center text-6xl">
            {usersList?.length > 0 ? usersList.length : 0}{" "}
          </p>
          <Link
            to="/add-user"
            className="bg-slate-700 text-slate-100 p-2 rounded-lg"
          >
            Add User
          </Link>
        </div>
        <div className="bg-green-400 w-full rounded-lg shadow-lg shadow-green-300 p-6">
          <h2 className="text-2xl font-semibold mb-2">Products</h2>
          <p className="text-slate-50 font-bold text-center text-6xl">
            {products?.length > 0 ? products.length : 0}{" "}
          </p>
          <Link
            to="/products"
            className="bg-slate-700 text-slate-100 p-2 rounded-lg"
          >
            show all
          </Link>
        </div>
        <div className="bg-orange-400 w-full rounded-lg shadow-lg shadow-orange-300 p-6">
          <h2 className="text-2xl font-semibold mb-2">CheckOut</h2>
          <p className="text-slate-50 font-bold text-center text-6xl">
            {items?.length > 0 ? items.length : 0}{" "}
          </p>
          <Link
            to="/checkout"
            className="bg-slate-700 text-slate-100 p-2 rounded-lg"
          >
            CheckOut
          </Link>
        </div>
      </div>
    </div>
  );
}
