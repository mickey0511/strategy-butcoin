"use client";

import React from "react";
import StatItem from "./btc_button";

const Strk: React.FC = () => {
  const stats = [
    { name: "STRK Price", value: "$85.53", change: "-$0.93 (-1.08%)" },
    { name: "3 Month Return", value: "7%", change: "" },
    { name: "1 Year Return", value: "7%", change: "" },
    { name: "Lifetime Return", value: "7%", change: "" },
    { name: "Notional ($M)", value: "$765.0", change: "" },
    { name: "Market Cap ($M)", value: "$654.3", change: "-$7.1 (-1.08%)" },
    { name: "Trading Volume ($M)", value: "$9.0", change: "" },
    { name: "Avg Trading Vol (30D) ($M)", value: "$26.3", change: "-$0.9 (-3.26%)" },
    { name: "Dividend", value: "8.0%", change: "" },
    { name: "Effective Yield", value: "9.4%", change: "" },
    { name: "Historic Volatility (30D)", value: "42%", change: "" },
    { name: "Next Payout Date", value: "6/30/2025", change: "" },
    { name: "MSTR Correlation", value: "6%", change: "" },
    { name: "BTC Correlation", value: "6%", change: "" },
    { name: "SPY Correlation", value: "67%", change: "" },
    { name: "SPPREF Correlation", value: "59%", change: "" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-black">
      {stats.map((stat, index) => (
        <StatItem key={index} name={stat.name} value={stat.value} change={stat.change} />
      ))}
    </div>
  );
};

export default Strk;
