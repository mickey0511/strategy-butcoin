"use client";

import React from "react";

interface SharesData {
  category: string;
  "12/31/2020": string;
  "12/31/2021": string;
  "12/31/2022": string;
  "12/31/2023": string;
  "12/31/2024": string;
  "03/30/2025": string;
}

const data: SharesData[] = [
  { category: "Total Bitcoin Holdings", "12/31/2020": "70,469", "12/31/2021": "124,391", "12/31/2022": "132,500", "12/31/2023": "189,150", "12/31/2024": "447,470", "03/30/2025": "528,185" },
  { category: "Shares Outstanding (in '000s)", "12/31/2020": "", "12/31/2021": "", "12/31/2022": "", "12/31/2023": "", "12/31/2024": "", "03/30/2025": "" },
  { category: "Class A", "12/31/2020": "76,230", "12/31/2021": "93,215", "12/31/2022": "95,848", "12/31/2023": "149,041", "12/31/2024": "226,138", "03/30/2025": "246,537" },
  { category: "Class B", "12/31/2020": "19,640", "12/31/2021": "19,640", "12/31/2022": "19,640", "12/31/2023": "19,640", "12/31/2024": "19,640", "03/30/2025": "19,640" },
  { category: "Basic Shares Outstanding", "12/31/2020": "95,870", "12/31/2021": "112,855", "12/31/2022": "115,488", "12/31/2023": "168,681", "12/31/2024": "245,778", "03/30/2025": "266,178" },
  { category: "2025 Convert Shares @ $39.80", "12/31/2020": "16,330", "12/31/2021": "16,330", "12/31/2022": "16,330", "12/31/2023": "16,330", "12/31/2024": "-", "03/30/2025": "-" },
  { category: "2027 Convert Shares @ $143.25", "12/31/2020": "-", "12/31/2021": "7,330", "12/31/2022": "7,330", "12/31/2023": "7,330", "12/31/2024": "-", "03/30/2025": "-" },
  { category: "2028 Convert Shares @ $183.19", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "5,513", "12/31/2023": "5,513", "12/31/2024": "5,513", "03/30/2025": "5,513" },
  { category: "2029 Convert Shares @ $672.40", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "4,462", "12/31/2024": "4,462", "03/30/2025": "4,462" },
  { category: "2030 A Convert Shares @ $149.77", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "5,342", "12/31/2024": "5,342", "03/30/2025": "5,342" },
  { category: "2030 B Convert Shares @ $433.43", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "4,614", "12/31/2024": "4,614", "03/30/2025": "4,614" },
  { category: "2031 Convert Shares @ $232.72", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "2,594", "12/31/2024": "2,594", "03/30/2025": "2,594" },
  { category: "2032 Convert Shares @ $204.33", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "3,915", "12/31/2024": "3,915", "03/30/2025": "3,915" },
  { category: "STRK Convert Shares @ $1,000.00", "12/31/2020": "-", "12/31/2021": "-", "12/31/2022": "-", "12/31/2023": "-", "12/31/2024": "765", "03/30/2025": "765" },
  { category: "Options Outstanding", "12/31/2020": "11,570", "12/31/2021": "11,668", "12/31/2022": "15,769", "12/31/2023": "11,936", "12/31/2024": "4,956", "03/30/2025": "4,573" },
  { category: "RSU/PSU Unvested", "12/31/2020": "740", "12/31/2021": "1,051", "12/31/2022": "1,196", "12/31/2023": "2,359", "12/31/2024": "1,845", "03/30/2025": "1,719" },
  { category: "Assumed Diluted Shares Outstanding", "12/31/2020": "124,510", "12/31/2021": "149,234", "12/31/2022": "156,113", "12/31/2023": "207,836", "12/31/2024": "281,735", "03/30/2025": "299,674" },
];

const footnotes = [
  "1. Reflects retrospective adjustment for the Company’s 10-for-1 stock split effective by means of a stock dividend distributed after the close of trading on August 7, 2024.",
  "2. Basic Shares Outstanding reflects the actual class A common stock and class B common stock outstanding as of the dates presented. For purposes of this calculation, outstanding shares of such stock are deemed to include shares, if any, that (A) were sold under at-the-market equity offering programs, or (B) were to be issued pursuant to (i) options that had been exercised, (ii) restricted stock units that have vested or (iii) conversion requests received with respect to the convertible securities, but which in each case were pending issuance as of the dates presented.",
  "3. Assumed Diluted Shares Outstanding refers to the aggregate of our Basic Shares Outstanding as of the dates presented plus additional shares that would result from the assumed conversion of all outstanding convertible notes and convertible preferred stock, exercise of all outstanding stock option awards, and settlement of all outstanding restricted stock units and performance stock units as of such dates. Assumed Diluted Shares Outstanding is not calculated using the treasury method and does not take into account any vesting conditions (in the case of equity awards), the exercise price of any stock option awards or any contractual conditions limiting conversion of the convertible debt instruments.",
];

const Shares: React.FC = () => {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
      <div className="w-full text-white text-2xl font-semibold text-center">Assumed Diluted Shares Outstanding</div>
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse text-white text-sm">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-600 text-left text-gray-400 sticky top-0 z-10">
              <th className="p-3 font-medium"></th>
              {["12/31/2020", "12/31/2021", "12/31/2022", "12/31/2023", "12/31/2024", "03/30/2025"].map((date, index) => (
                <th key={index} className="p-3 font-medium">{date}</th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 hover:bg-[#2A3435] transition-colors duration-200 ${
                  item.category === "Total Bitcoin Holdings" ? "" : ""
                }`}
              >
                <td className="px-3 text-white">{item.category}</td>
                <td className="px-3">{item["12/31/2020"]}</td>
                <td className="px-3">{item["12/31/2021"]}</td>
                <td className="px-3">{item["12/31/2022"]}</td>
                <td className="px-3">{item["12/31/2023"]}</td>
                <td className="px-3">{item["12/31/2024"]}</td>
                <td className="px-3">{item["03/30/2025"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnotes */}
      <div className="mt-4 text-gray-400 text-xs">
        {footnotes.map((note, index) => (
          <p key={index} className="mb-2">{note}</p>
        ))}
      </div>
    </div>
  );
};

export default Shares;