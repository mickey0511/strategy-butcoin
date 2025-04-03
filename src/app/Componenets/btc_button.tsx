"use client";

import React from "react";

interface StatItemProps {
  name: string;
  value: any;
  change?: string;
}

const StatItem: React.FC<StatItemProps> = ({ name, value, change }) => {
  const isPositive = change?.startsWith("+");
  const isNegative = change?.startsWith("-");
  const changeColor = isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-gray-400";

  return (
    <div className="flex flex-col space-y-1">
      <span className="text-gray-400 text-lg">{name}</span>
      <span className=" flex flex-row justify-start items-center text-white text-4xl font-semibold">{value}</span>
      {change && <span className={`text-md ${changeColor}`}>{change}</span>}
    </div>
  );
};

export default StatItem;