"use client";

import React from "react";

interface PurchaseData {
  reported: string;
  btcAcquisitions: string;
  avgBtcCost: string;
  acquisitionCost: string;
  btcHoldings: string;
  yieldQtd: string;
  yieldYtd: string;
  btcGainQtd: string;
  btcGainYtd: string;
  bitcoinNav: string;
}

const data: PurchaseData[] = [
  { reported: "3/31/2025", btcAcquisitions: "22,048", avgBtcCost: "$86,969", acquisitionCost: "$1,918", btcHoldings: "528,185", yieldQtd: "11.0%", yieldYtd: "11.0%", btcGainQtd: "$4,116", btcGainYtd: "$4,116", bitcoinNav: "$44,283" },
  { reported: "3/24/2025", btcAcquisitions: "6,911", avgBtcCost: "$84,529", acquisitionCost: "$584", btcHoldings: "506,137", yieldQtd: "7.7%", yieldYtd: "7.7%", btcGainQtd: "$2,882", btcGainYtd: "$2,882", bitcoinNav: "$42,556" },
  { reported: "3/17/2025", btcAcquisitions: "130", avgBtcCost: "$82,991", acquisitionCost: "$11", btcHoldings: "499,226", yieldQtd: "6.9%", yieldYtd: "6.9%", btcGainQtd: "$2,595", btcGainYtd: "$2,595", bitcoinNav: "$41,964" },
  { reported: "2/24/2025", btcAcquisitions: "20,356", avgBtcCost: "$97,514", acquisitionCost: "$1,985", btcHoldings: "499,096", yieldQtd: "6.9%", yieldYtd: "6.9%", btcGainQtd: "$2,941", btcGainYtd: "$2,941", bitcoinNav: "$47,813" },
  { reported: "2/10/2025", btcAcquisitions: "7,633", avgBtcCost: "$97,255", acquisitionCost: "$742", btcHoldings: "478,740", yieldQtd: "4.1%", yieldYtd: "4.1%", btcGainQtd: "$1,785", btcGainYtd: "$1,785", bitcoinNav: "$46,122" },
  { reported: "1/27/2025", btcAcquisitions: "10,107", avgBtcCost: "$105,596", acquisitionCost: "$1,100", btcHoldings: "471,107", yieldQtd: "2.9%", yieldYtd: "2.9%", btcGainQtd: "$1,360", btcGainYtd: "$1,360", bitcoinNav: "$49,391" },
  { reported: "1/21/2025", btcAcquisitions: "11,000", avgBtcCost: "$101,191", acquisitionCost: "$1,100", btcHoldings: "461,000", yieldQtd: "1.7%", yieldYtd: "1.7%", btcGainQtd: "$783", btcGainYtd: "$783", bitcoinNav: "$47,742" },
  { reported: "1/13/2025", btcAcquisitions: "2,530", avgBtcCost: "$95,972", acquisitionCost: "$243", btcHoldings: "450,000", yieldQtd: "0.3%", yieldYtd: "0.3%", btcGainQtd: "$136", btcGainYtd: "$136", bitcoinNav: "$42,597" },
  { reported: "1/6/2025", btcAcquisitions: "1,070", avgBtcCost: "$94,004", acquisitionCost: "$101", btcHoldings: "447,470", yieldQtd: "48.0%", yieldYtd: "74.3%", btcGainQtd: "$11,890", btcGainYtd: "$13,803", bitcoinNav: "$43,948" },
  { reported: "12/30/2024", btcAcquisitions: "2,138", avgBtcCost: "$97,837", acquisitionCost: "$209", btcHoldings: "446,400", yieldQtd: "47.8%", yieldYtd: "74.1%", btcGainQtd: "$11,287", btcGainYtd: "$13,122", bitcoinNav: "$41,793" },
  { reported: "12/23/2024", btcAcquisitions: "5,262", avgBtcCost: "$106,662", acquisitionCost: "$561", btcHoldings: "444,262", yieldQtd: "47.4%", yieldYtd: "73.7%", btcGainQtd: "$11,403", btcGainYtd: "$13,297", bitcoinNav: "$42,375" },
  { reported: "12/16/2024", btcAcquisitions: "15,350", avgBtcCost: "$100,386", acquisitionCost: "$1,500", btcHoldings: "439,000", yieldQtd: "46.4%", yieldYtd: "72.4%", btcGainQtd: "$12,073", btcGainYtd: "$14,128", bitcoinNav: "$45,289" },
  { reported: "12/9/2024", btcAcquisitions: "21,550", avgBtcCost: "$95,876", acquisitionCost: "$2,100", btcHoldings: "423,650", yieldQtd: "43.2%", yieldYtd: "68.7%", btcGainQtd: "$10,879", btcGainYtd: "$12,975", bitcoinNav: "$42,301" },
  { reported: "12/2/2024", btcAcquisitions: "15,400", avgBtcCost: "$95,976", acquisitionCost: "$1,500", btcHoldings: "402,100", yieldQtd: "38.7%", yieldYtd: "63.3%", btcGainQtd: "$9,477", btcGainYtd: "$11,625", bitcoinNav: "$39,042" },
  { reported: "11/25/2024", btcAcquisitions: "55,500", avgBtcCost: "$97,862", acquisitionCost: "$5,400", btcHoldings: "386,700", yieldQtd: "35.2%", yieldYtd: "59.3%", btcGainQtd: "$8,596", btcGainYtd: "$10,860", bitcoinNav: "$37,441" },
  { reported: "11/18/2024", btcAcquisitions: "51,780", avgBtcCost: "$88,627", acquisitionCost: "$4,600", btcHoldings: "331,200", yieldQtd: "20.4%", yieldYtd: "41.8%", btcGainQtd: "$4,608", btcGainYtd: "$7,080", bitcoinNav: "$29,659" },
  { reported: "11/11/2024", btcAcquisitions: "27,200", avgBtcCost: "$74,463", acquisitionCost: "$2,025", btcHoldings: "279,420", yieldQtd: "7.3%", yieldYtd: "26.4%", btcGainQtd: "$1,454", btcGainYtd: "$3,945", bitcoinNav: "$22,073" },
  { reported: "9/20/2024", btcAcquisitions: "7,420", avgBtcCost: "$61,750", acquisitionCost: "$458", btcHoldings: "252,220", yieldQtd: "5.1%", yieldYtd: "17.8%", btcGainQtd: "$731", btcGainYtd: "$2,130", bitcoinNav: "$15,954" },
  { reported: "9/13/2024", btcAcquisitions: "18,300", avgBtcCost: "$60,408", acquisitionCost: "$1,110", btcHoldings: "244,800", yieldQtd: "4.4%", yieldYtd: "17.0%", btcGainQtd: "$581", btcGainYtd: "$1,876", bitcoinNav: "$14,280" },
  { reported: "8/1/2024", btcAcquisitions: "169", avgBtcCost: "$67,455", acquisitionCost: "$11", btcHoldings: "226,500", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$14,760" },
  { reported: "6/20/2024", btcAcquisitions: "11,931", avgBtcCost: "$65,883", acquisitionCost: "$786", btcHoldings: "226,331", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$14,686" },
  { reported: "4/29/2024", btcAcquisitions: "155", avgBtcCost: "$63,397", acquisitionCost: "$10", btcHoldings: "214,400", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$13,654" },
  { reported: "3/19/2024", btcAcquisitions: "9,245", avgBtcCost: "$67,382", acquisitionCost: "$623", btcHoldings: "214,245", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$14,369" },
  { reported: "3/11/2024", btcAcquisitions: "12,000", avgBtcCost: "$68,477", acquisitionCost: "$822", btcHoldings: "205,000", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$14,250" },
  { reported: "2/26/2024", btcAcquisitions: "3,000", avgBtcCost: "$51,813", acquisitionCost: "$155", btcHoldings: "193,000", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$9,988" },
  { reported: "2/16/2024", btcAcquisitions: "850", avgBtcCost: "$43,723", acquisitionCost: "$37", btcHoldings: "190,000", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "$8,045" },
  { reported: "12/27/2023", btcAcquisitions: "14,620", avgBtcCost: "$42,110", acquisitionCost: "$616", btcHoldings: "189,150", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/30/2023", btcAcquisitions: "16,130", avgBtcCost: "$36,785", acquisitionCost: "$593", btcHoldings: "174,530", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "11/17/2023", btcAcquisitions: "155", avgBtcCost: "$34,495", acquisitionCost: "$5", btcHoldings: "158,400", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "9/25/2023", btcAcquisitions: "5,445", avgBtcCost: "$27,053", acquisitionCost: "$147", btcHoldings: "158,245", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "8/1/2023", btcAcquisitions: "467", avgBtcCost: "$30,788", acquisitionCost: "$14", btcHoldings: "152,800", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "6/28/2023", btcAcquisitions: "12,333", avgBtcCost: "$28,136", acquisitionCost: "$347", btcHoldings: "152,333", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "4/5/2023", btcAcquisitions: "1,045", avgBtcCost: "$28,016", acquisitionCost: "$29", btcHoldings: "140,000", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "3/23/2023", btcAcquisitions: "6,455", avgBtcCost: "$23,238", acquisitionCost: "$150", btcHoldings: "138,955", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/28/2022", btcAcquisitions: "2,501", avgBtcCost: "$17,847", acquisitionCost: "$45", btcHoldings: "132,500", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "9/20/2022", btcAcquisitions: "301", avgBtcCost: "$19,851", acquisitionCost: "$6", btcHoldings: "129,999", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "6/29/2022", btcAcquisitions: "480", avgBtcCost: "$20,817", acquisitionCost: "$10", btcHoldings: "129,698", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "4/5/2022", btcAcquisitions: "4,167", avgBtcCost: "$45,714", acquisitionCost: "$190", btcHoldings: "129,218", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "2/1/2022", btcAcquisitions: "660", avgBtcCost: "$37,885", acquisitionCost: "$25", btcHoldings: "125,051", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/30/2021", btcAcquisitions: "1,914", avgBtcCost: "$49,229", acquisitionCost: "$94", btcHoldings: "124,391", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/9/2021", btcAcquisitions: "1,434", avgBtcCost: "$57,477", acquisitionCost: "$82", btcHoldings: "122,477", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "11/29/2021", btcAcquisitions: "7,002", avgBtcCost: "$59,187", acquisitionCost: "$414", btcHoldings: "121,043", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "9/13/2021", btcAcquisitions: "5,050", avgBtcCost: "$48,009", acquisitionCost: "$242", btcHoldings: "114,041", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "7/24/2021", btcAcquisitions: "3,907", avgBtcCost: "$45,294", acquisitionCost: "$177", btcHoldings: "108,991", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "6/21/2021", btcAcquisitions: "13,005", avgBtcCost: "$37,617", acquisitionCost: "$489", btcHoldings: "105,084", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "5/18/2021", btcAcquisitions: "229", avgBtcCost: "$43,663", acquisitionCost: "$10", btcHoldings: "92,079", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "5/13/2021", btcAcquisitions: "271", avgBtcCost: "$55,387", acquisitionCost: "$15", btcHoldings: "91,850", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "4/5/2021", btcAcquisitions: "253", avgBtcCost: "$59,339", acquisitionCost: "$15", btcHoldings: "91,579", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "3/12/2021", btcAcquisitions: "262", avgBtcCost: "$57,146", acquisitionCost: "$15", btcHoldings: "91,326", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "3/5/2021", btcAcquisitions: "205", avgBtcCost: "$48,888", acquisitionCost: "$10", btcHoldings: "91,064", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "3/1/2021", btcAcquisitions: "328", avgBtcCost: "$45,710", acquisitionCost: "$15", btcHoldings: "90,859", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "2/19/2021", btcAcquisitions: "19,452", avgBtcCost: "$52,765", acquisitionCost: "$1,023", btcHoldings: "90,531", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "2/2/2021", btcAcquisitions: "295", avgBtcCost: "$33,810", acquisitionCost: "$10", btcHoldings: "71,079", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "1/22/2021", btcAcquisitions: "314", avgBtcCost: "$31,808", acquisitionCost: "$10", btcHoldings: "70,784", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/21/2020", btcAcquisitions: "29,646", avgBtcCost: "$22,925", acquisitionCost: "$650", btcHoldings: "70,470", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "12/14/2020", btcAcquisitions: "2,574", avgBtcCost: "$19,427", acquisitionCost: "$50", btcHoldings: "40,824", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "9/14/2020", btcAcquisitions: "16,796", avgBtcCost: "$10,419", acquisitionCost: "$175", btcHoldings: "38,250", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
  { reported: "8/10/2020", btcAcquisitions: "21,454", avgBtcCost: "$11,652", acquisitionCost: "$250", btcHoldings: "21,454", yieldQtd: "-", yieldYtd: "-", btcGainQtd: "-", btcGainYtd: "-", bitcoinNav: "-" },
];

const sortedData = data.sort((a, b) => {
  const dateA = new Date(a.reported);
  const dateB = new Date(b.reported);
  return dateB.getTime() - dateA.getTime();
});

const Purchase: React.FC = () => {
  return (
    <div className="overflow-x-auto  p-4">
      <div className="max-h-[70vh] overflow-y-auto">
        <table className="w-full border-collapse text-white text-sm">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-600 text-left text-gray-400 sticky top-0 z-10">
              {[
                "Reported",
                "BTC Acquisitions",
                "Avg BTC Cost",
                "Acquisition Cost ($M)",
                "BTC Holdings",
                "Yield QTD",
                "Yield YTD",
                "BTC $ Gain QTD ($M)",
                "BTC $ Gain YTD ($M)",
                "Bitcoin NAV ($M)",
              ].map((header, index) => (
                <th key={index} className="p-3 font-medium">{header}</th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 hover:bg-[#2A3435] transition-colors duration-200 ${
                  item.reported === "3/23/2023" ? "bg-[#2A3435]" : ""
                }`}
              >
                <td className="p-3 text-white">{item.reported}</td>
                <td className="p-3">{item.btcAcquisitions}</td>
                <td className="p-3">{item.avgBtcCost}</td>
                <td className="p-3">{item.acquisitionCost}</td>
                <td className="p-3">{item.btcHoldings}</td>
                <td className="p-3">{item.yieldQtd}</td>
                <td className="p-3">{item.yieldYtd}</td>
                <td className="p-3">{item.btcGainQtd}</td>
                <td className="p-3">{item.btcGainYtd}</td>
                <td className="p-3">{item.bitcoinNav}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase;