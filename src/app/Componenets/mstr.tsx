"use client";

import React from "react";
import StatItem from "./btc_button";

const Mstr: React.FC = () => {
    const stats = [
        { name: "MSTR Price", value: "$312.54", change: "+$6.52 (2.13%)" },
        { name: "3 Month Return", value: "4%" },
        { name: "1 Year Return", value: "98%" },
        { name: "BSE Return", value: "2,428%" },
        { name: "Market Cap ($M)", value: "$83,191", change: "+$1,735 (2.13%)" },
        { name: "Enterprise Value ($M)", value: "$92,992", change: "+$1,735 (1.90%)" },
        { name: "Trading Volume ($M)", value: "$4,661" },
        { name: "Avg Trading Vol (30D) ($M)", value: "$5,835", change: "-$89 (-1.51%)" },
        { name: "Bitcoin Price", value: "$82,505", change: "-$2,664 (-3.13%)" },
        { name: "Bitcoin Count", value: "₿528,185" },
        { name: "Bitcoin NAV ($M)", value: "$43,578", change: "-$1,407 (-3.13%)" },
        { name: "mNAV", value: "2.13", change: "+0.10 (4.93%)" },
        { name: "Debt ($M)", value: "$8,224" },
        { name: "Pref ($M)", value: "$1,615" },
        { name: "(Debt + Pref)/Market Cap", value: "12%" },
        { name: "(Debt + Pref)/Bitcoin NAV", value: "23%" },
        { name: "Implied Volatility", value: "84%" },
        { name: "Historic Volatility (30D)", value: "99%" },
        { name: "Open Interest ($M)", value: "$67,682" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black">
            {stats.map((stat, index) => (
                <StatItem key={index} name={stat.name} value={stat.value} change={stat.change} />
            ))}
        </div>
    );
};

export default Mstr;
