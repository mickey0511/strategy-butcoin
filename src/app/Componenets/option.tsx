"use client";

import React from "react";

interface OptionsData {
  category?: string; // Used to group items (e.g., "Magnificent 7", "Indices")
  asset: string;
  putOpenInterest: string;
  callOpenInterest: string;
  totalOpenInterest: string;
  impliedVolatility: string;
  putToCall: string;
  durationDays: string;
}

const data: OptionsData[] = [
  { asset: "MSTR", putOpenInterest: "$30,856", callOpenInterest: "$36,827", totalOpenInterest: "$67,682", impliedVolatility: "85%", putToCall: "0.84", durationDays: "155" },
  { category: "Magnificent 7" },
  { asset: "AAPL", putOpenInterest: "$44,636", callOpenInterest: "$55,483", totalOpenInterest: "$100,119", impliedVolatility: "22%", putToCall: "0.80", durationDays: "175" },
  { asset: "MSFT", putOpenInterest: "$33,748", callOpenInterest: "$44,452", totalOpenInterest: "$78,200", impliedVolatility: "27%", putToCall: "0.76", durationDays: "173" },
  { asset: "NVDA", putOpenInterest: "$110,949", callOpenInterest: "$116,441", totalOpenInterest: "$227,489", impliedVolatility: "48%", putToCall: "0.95", durationDays: "199" },
  { asset: "AMZN", putOpenInterest: "$33,540", callOpenInterest: "$41,570", totalOpenInterest: "$75,110", impliedVolatility: "35%", putToCall: "0.81", durationDays: "162" },
  { asset: "META", putOpenInterest: "$51,089", callOpenInterest: "$67,951", totalOpenInterest: "$119,040", impliedVolatility: "39%", putToCall: "0.75", durationDays: "191" },
  { asset: "TSLA", putOpenInterest: "$120,930", callOpenInterest: "$123,519", totalOpenInterest: "$244,449", impliedVolatility: "58%", putToCall: "0.98", durationDays: "195" },
  { asset: "GOOG", putOpenInterest: "$26,393", callOpenInterest: "$39,090", totalOpenInterest: "$65,482", impliedVolatility: "34%", putToCall: "0.68", durationDays: "171" },
  { category: "Indices" },
  { asset: "SPY", putOpenInterest: "$590,130", callOpenInterest: "$337,645", totalOpenInterest: "$927,775", impliedVolatility: "19%", putToCall: "1.75", durationDays: "97" },
  { asset: "QQQ", putOpenInterest: "$249,848", callOpenInterest: "$155,387", totalOpenInterest: "$405,234", impliedVolatility: "24%", putToCall: "1.61", durationDays: "109" },
  { asset: "BND", putOpenInterest: "$5", callOpenInterest: "$11", totalOpenInterest: "$15", impliedVolatility: "4%", putToCall: "0.46", durationDays: "73" },
  { asset: "IBIT", putOpenInterest: "$3,916", callOpenInterest: "$7,849", totalOpenInterest: "$11,765", impliedVolatility: "54%", putToCall: "0.50", durationDays: "140" },
  { asset: "VNQ", putOpenInterest: "$177", callOpenInterest: "$162", totalOpenInterest: "$339", impliedVolatility: "18%", putToCall: "1.10", durationDays: "179" },
  { asset: "GLD", putOpenInterest: "$41,043", callOpenInterest: "$50,404", totalOpenInterest: "$91,447", impliedVolatility: "17%", putToCall: "0.81", durationDays: "97" },
];

const Option: React.FC = () => {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <table className="w-full border-collapse text-white text-sm">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-gray-600 text-left text-gray-400">
            {[
              "Asset",
              "Put Open Interest ($M)",
              "Call Open Interest ($M)",
              "Total Open Interest ($M)",
              "Implied Volatility",
              "Put to Call",
              "Duration (Days)",
            ].map((header, index) => (
              <th key={index} className="p-3 font-medium">{header}</th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) =>
            item.category ? (
              <tr key={index} className="border-b border-gray-700 text-lg font-semibold text-gray-500">
                <td colSpan={7} className="p-3">{item.category}</td>
              </tr>
            ) : (
              <tr
                key={index}
                className={`border-b border-gray-700 hover:bg-[#2A3435] transition-colors duration-200 ${
                  item.asset === "TSLA" ? "" : ""
                }`}
              >
                <td className="p-3 text-white">{item.asset}</td>
                <td className="p-3">{item.putOpenInterest}</td>
                <td className="p-3">{item.callOpenInterest}</td>
                <td className="p-3">{item.totalOpenInterest}</td>
                <td className="p-3">{item.impliedVolatility}</td>
                <td className="p-3">{item.putToCall}</td>
                <td className="p-3">{item.durationDays}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Option;