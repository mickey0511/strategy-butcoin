"use client";

import React from "react";

interface MarketData {
  category?: string; // Used to group items (e.g., "Magnificent 7", "Indices")
  asset: string;
  price: string;
  threeMonthReturn: string;
  oneYearReturn: string;
  bseReturn: string;
  marketCap: string;
  avgTradingVol: string;
  historicVolatility: string;
  openInterest: string;
  sharpeRatio: string;
  openInterestMarketCap: string;
  avgTradingVolMarketCap: string;
}

const data: MarketData[] = [
  { asset: "MSTR", price: "$312.54", threeMonthReturn: "4%", oneYearReturn: "98%", bseReturn: "2,428%", marketCap: "$83,191", avgTradingVol: "$5,835", historicVolatility: "99%", openInterest: "$67,682", sharpeRatio: "0.99", openInterestMarketCap: "81.4%", avgTradingVolMarketCap: "7.0%" },
  { asset: "BTC", price: "$87,939.28", threeMonthReturn: "-9%", oneYearReturn: "34%", bseReturn: "639%", marketCap: "$1,751,281", avgTradingVol: "-", historicVolatility: "42%", openInterest: "-", sharpeRatio: "0.82", openInterestMarketCap: "-", avgTradingVolMarketCap: "0.1%" },
  { category: "Magnificent 7" },
  { asset: "AAPL", price: "$223.89", threeMonthReturn: "-8%", oneYearReturn: "33%", bseReturn: "99%", marketCap: "$3,363,291", avgTradingVol: "$11,433", historicVolatility: "25%", openInterest: "$100,119", sharpeRatio: "1.32", openInterestMarketCap: "3.0%", avgTradingVolMarketCap: "0.3%" },
  { asset: "MSFT", price: "$382.03", threeMonthReturn: "-3%", oneYearReturn: "39%", bseReturn: "88%", marketCap: "$2,840,026", avgTradingVol: "$8,864", historicVolatility: "22%", openInterest: "$78,200", sharpeRatio: "0.43", openInterestMarketCap: "2.8%", avgTradingVolMarketCap: "0.3%" },
  { asset: "NVDA", price: "$110.42", threeMonthReturn: "-20%", oneYearReturn: "23%", bseReturn: "889%", marketCap: "$2,694,248", avgTradingVol: "$32,771", historicVolatility: "57%", openInterest: "$227,489", sharpeRatio: "0.41", openInterestMarketCap: "8.4%", avgTradingVolMarketCap: "1.2%" },
  { asset: "AMZN", price: "$196.01", threeMonthReturn: "-11%", oneYearReturn: "8%", bseReturn: "25%", marketCap: "$2,077,261", avgTradingVol: "$9,083", historicVolatility: "29%", openInterest: "$75,110", sharpeRatio: "0.29", openInterestMarketCap: "3.6%", avgTradingVolMarketCap: "0.4%" },
  { asset: "META", price: "$583.93", threeMonthReturn: "-3%", oneYearReturn: "17%", bseReturn: "122%", marketCap: "$1,278,748", avgTradingVol: "$10,210", historicVolatility: "32%", openInterest: "$119,040", sharpeRatio: "0.54", openInterestMarketCap: "9.3%", avgTradingVolMarketCap: "0.8%" },
  { asset: "TSLA", price: "$282.71", threeMonthReturn: "-25%", oneYearReturn: "70%", bseReturn: "199%", marketCap: "$907,506", avgTradingVol: "$34,380", historicVolatility: "68%", openInterest: "$244,449", sharpeRatio: "1.02", openInterestMarketCap: "26.9%", avgTradingVolMarketCap: "3.8%" },
  { asset: "GOOG", price: "$158.86", threeMonthReturn: "-17%", oneYearReturn: "2%", bseReturn: "112%", marketCap: "$894,061", avgTradingVol: "$3,710", historicVolatility: "29%", openInterest: "$65,482", sharpeRatio: "0.07", openInterestMarketCap: "7.3%", avgTradingVolMarketCap: "0.4%" },
  { category: "Indices" },
  { asset: "SPY", price: "$564.52", threeMonthReturn: "-3%", oneYearReturn: "9%", bseReturn: "68%", marketCap: "$573,710", avgTradingVol: "$39,544", historicVolatility: "14%", openInterest: "$927,775", sharpeRatio: "0.63", openInterestMarketCap: "161.7%", avgTradingVolMarketCap: "6.9%" },
  { asset: "QQQ", price: "$476.15", threeMonthReturn: "-7%", oneYearReturn: "8%", bseReturn: "76%", marketCap: "$302,046", avgTradingVol: "$22,155", historicVolatility: "20%", openInterest: "$405,234", sharpeRatio: "0.40", openInterestMarketCap: "134.2%", avgTradingVolMarketCap: "7.3%" },
  { asset: "BND", price: "$73.38", threeMonthReturn: "2%", oneYearReturn: "2%", bseReturn: "-18%", marketCap: "$100,621", avgTradingVol: "$433", historicVolatility: "5%", openInterest: "$515", sharpeRatio: "0.41", openInterestMarketCap: "0.5%", avgTradingVolMarketCap: "0.4%" },
  { asset: "GLD", price: "$288.16", threeMonthReturn: "17%", oneYearReturn: "37%", bseReturn: "52%", marketCap: "$62,627", avgTradingVol: "$2,487", historicVolatility: "15%", openInterest: "$1,447", sharpeRatio: "2.37", openInterestMarketCap: "2.3%", avgTradingVolMarketCap: "4.0%" },
  { asset: "IBIT", price: "$49.41", threeMonthReturn: "-11%", oneYearReturn: "31%", bseReturn: "104%", marketCap: "$50,060", avgTradingVol: "$2,031", historicVolatility: "54%", openInterest: "$1,765", sharpeRatio: "0.58", openInterestMarketCap: "3.5%", avgTradingVolMarketCap: "4.1%" },
  { asset: "VNQ", price: "$91.13", threeMonthReturn: "3%", oneYearReturn: "9%", bseReturn: "10%", marketCap: "$35,003", avgTradingVol: "$314", historicVolatility: "16%", openInterest: "$339", sharpeRatio: "0.53", openInterestMarketCap: "1.0%", avgTradingVolMarketCap: "0.9%" },
];

const Assets: React.FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse text-white text-sm">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-gray-600 text-left text-gray-400">
            {[
              "Asset",
              "Price",
              "3 Month Return",
              "1 Year Return",
              "BSE Return",
              "Market Cap ($M)",
              "Avg Trading Vol (30D) ($M)",
              "Historic Volatility (30D)",
              "Open Interest ($M)",
              "Sharpe Ratio",
              "Open Interest/Market Cap",
              "Avg Trading Vol/Market Cap",
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
                <td colSpan={12} className="p-3">{item.category}</td>
              </tr>
            ) : (
              <tr
                key={index}
                className={`border-b border-gray-700 hover:bg-[#2A3435] transition-colors duration-200 ${
                  item.asset === "TSLA" ? "" : ""
                }`}
              >
                <td className="px-3 text-white">{item.asset}</td>
                <td className="px-3 py-1">{item.price}</td>
                <td className="px-3 py-1">{item.threeMonthReturn}</td>
                <td className="px-3 py-1">{item.oneYearReturn}</td>
                <td className="px-3 py-1">{item.bseReturn}</td>
                <td className="px-3 py-1">{item.marketCap}</td>
                <td className="px-3 py-1">{item.avgTradingVol}</td>
                <td className="px-3 py-1">{item.historicVolatility}</td>
                <td className="px-3 py-1">{item.openInterest}</td>
                <td className="px-3 py-1">{item.sharpeRatio}</td>
                <td className="px-3 py-1">{item.openInterestMarketCap}</td>
                <td className="px-3 py-1">{item.avgTradingVolMarketCap}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Assets;