"use client";

import React from "react";

interface ConvertibleData {
  name: string;
  issueDate: string;
  price: string;
  maturity: string;
  putDate: string;
  coupon: string;
  notional: string;
  marketValue: string;
  bitcoinPar: string;
  referencePrice: string;
  conversionPrice: string;
}

const data: ConvertibleData[] = [
  {
    name: "Convert 2028",
    issueDate: "9/19/2024",
    price: "$182.87",
    maturity: "9/14/2028",
    putDate: "9/15/2027",
    coupon: "0.625%",
    notional: "$1,010",
    marketValue: "$1,847",
    bitcoinPar: "60,100",
    referencePrice: "$130.85",
    conversionPrice: "$183.19",
  },
  {
    name: "Convert 2029",
    issueDate: "11/21/2024",
    price: "$80.94",
    maturity: "12/1/2029",
    putDate: "6/1/2028",
    coupon: "0.000%",
    notional: "$3,000",
    marketValue: "$2,428",
    bitcoinPar: "92,300",
    referencePrice: "$433.80",
    conversionPrice: "$672.40",
  },
  {
    name: "Convert 2030 A",
    issueDate: "3/8/2024",
    price: "$213.33",
    maturity: "3/15/2030",
    putDate: "9/15/2028",
    coupon: "0.625%",
    notional: "$800",
    marketValue: "$1,707",
    bitcoinPar: "64,100",
    referencePrice: "$105.10",
    conversionPrice: "$149.77",
  },
  {
    name: "Convert 2030 B",
    issueDate: "2/21/2025",
    price: "$97.49",
    maturity: "3/1/2030",
    putDate: "3/1/2028",
    coupon: "0.000%",
    notional: "$2,000",
    marketValue: "$1,950",
    bitcoinPar: "96,200",
    referencePrice: "$321.05",
    conversionPrice: "$433.43",
  },
  {
    name: "Convert 2031",
    issueDate: "3/18/2024",
    price: "$146.50",
    maturity: "3/15/2031",
    putDate: "9/15/2028",
    coupon: "0.875%",
    notional: "$604",
    marketValue: "$884",
    bitcoinPar: "70,500",
    referencePrice: "$166.22",
    conversionPrice: "$232.72",
  },
  {
    name: "Convert 2032",
    issueDate: "6/17/2024",
    price: "$163.68",
    maturity: "6/15/2032",
    putDate: "6/15/2029",
    coupon: "2.250%",
    notional: "$800",
    marketValue: "$1,309",
    bitcoinPar: "66,700",
    referencePrice: "$151.35",
    conversionPrice: "$204.33",
  },
];

const summary = {
  years: "5.0 Years",
  coupon: "0.421%",
  notional: "$8,214",
  marketValue: "$10,125",
  bitcoinPar: "$82,448",
  referencePrice: "$289.90",
  conversionPrice: "$425.25",
};

const Debt: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-black p-4">
      <table className="w-full border-collapse text-white">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-gray-600 text-left text-sm text-gray-400">
            {[
              "Name",
              "Issue Date",
              "Price",
              "Maturity",
              "Put Date",
              "Coupon",
              "Notional ($M)",
              "Market Value ($M)",
              "Bitcoin Par",
              "Reference Price",
              "Conversion Price",
            ].map((header, index) => (
              <th key={index} className="p-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-2 text-blue-400">{item.name}</td>
              <td className="p-2">{item.issueDate}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.maturity}</td>
              <td className="p-2">{item.putDate}</td>
              <td className="p-2">{item.coupon}</td>
              <td className="p-2">{item.notional}</td>
              <td className="p-2">{item.marketValue}</td>
              <td className="p-2">{item.bitcoinPar}</td>
              <td className="p-2">{item.referencePrice}</td>
              <td className="p-2">{item.conversionPrice}</td>
            </tr>
          ))}
        </tbody>

        {/* Summary Row */}
        <tfoot>
          <tr className="text-yellow-400 text-lg font-semibold">
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2">{summary.years}</td>
            <td className="p-2"></td>
            <td className="p-2">{summary.coupon}</td>
            <td className="p-2">{summary.notional}</td>
            <td className="p-2">{summary.marketValue}</td>
            <td className="p-2">{summary.bitcoinPar}</td>
            <td className="p-2">{summary.referencePrice}</td>
            <td className="p-2">{summary.conversionPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Debt;
