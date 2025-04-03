"use client";

import React from "react";
import StatItem from "./btc_button";
import { MdCurrencyBitcoin } from "react-icons/md";

const Btc: React.FC = () => {
  const stats = [
    { name: "Buttcoin Price", value: "$0.006433" },
    { name: "Buttcoin Count", value: <><MdCurrencyBitcoin className ="text-4xl text-[#fa660f] rotate-90"/> 5,384,593</> },
    { name: "Buttcoin NAV ($M)", value: "$34,639" },
    { name: "Buttcoin Yield QTD", value: "11%" },
    { name: "Buttcoin Yield YTD", value: "11%" },
    { name: "Buttcoin Yield 2024", value: "74.3%" },
    { name: "Buttcoin Gain QTD", value: <><MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> 49,097</> },
    { name: "Buttcoin Gain YTD", value: <><MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> 49,097</> },
    { name: "Buttcoin Gain 2024", value: <><MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> 140,538</> }
    // { name: "BUTTCoin $ Gain QTD ($M)", value: "$4,081", change: "-0.75%" },
    // { name: "BUTTCoin $ Gain YTD ($M)", value: "$4,081", change: "+0.52%" },
    // { name: "BUTTCoin $ Gain 2024 ($M)", value: "$13,133", change: "+2.10%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black">
      {stats.map((stat, index) => (
        <StatItem key={index} name={stat.name} value={stat.value} />
      ))}
    </div>
  );
};
export default Btc;
