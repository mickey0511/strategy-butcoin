"use client";

import React from "react";
import StatItem from "./btc_button";
import { MdCurrencyBitcoin } from "react-icons/md";

const Btc: React.FC = () => {
  const currentPrice = 0.0016;
  const currentAmount = 5384593;
  const butt_Supply_Control = currentAmount / 1000000000 * 100;
  const btc_Yield_Qtd = ((currentPrice - 0.0014) / 0.0014) * 100;
  const btc_Yield_Ytd = ((currentPrice - 0.0014) / 0.0014) * 100;
  const btc_Yield_2024 = ((currentPrice - 0.0014) / 0.0014) * 100;
//   const btc_Gain_Qtd = currentAmount;
//   const btc_Gain_Ytd = currentAmount;
//   const btc_Gain_2024 = currentAmount;

  const stats = [
    { name: "Buttcoin Price", value: `$${currentPrice.toFixed(4)}` },
    { 
      name: "Buttcoin Count", 
      value: (
        <>
          <MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> {currentAmount}
        </>
      ) 
    },
    { name: "Buttcoin Supply Control(B)", value: `${butt_Supply_Control.toFixed(4)}%` },
    { name: "Buttcoin Yield QTD", value: `${btc_Yield_Qtd.toFixed(2)}%` },
    { name: "Buttcoin Yield YTD", value: `${btc_Yield_Ytd.toFixed(2)}%` },
    { name: "Buttcoin Yield 2024", value: `${btc_Yield_2024.toFixed(2)}%` },
//     { 
//       name: "Buttcoin Gain QTD", 
//       value: (
//         <>
//           <MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> {btc_Gain_Qtd}
//         </>
//       ) 
//     },
//     { 
//       name: "Buttcoin Gain YTD", 
//       value: (
//         <>
//           <MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> {btc_Gain_Ytd}
//         </>
//       ) 
//     },
//     { 
//       name: "Buttcoin Gain 2024", 
//       value: (
//         <>
//           <MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" /> {btc_Gain_2024}
//         </>
//       ) 
//     }
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
