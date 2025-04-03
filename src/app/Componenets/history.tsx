"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, LineHighlightPlot } from "@mui/x-charts";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsAxisHighlight } from "@mui/x-charts/ChartsAxisHighlight";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { LineSeriesType } from "@mui/x-charts/models";
import Image from 'next/image';
import image1 from "./StrategyB_footer.png"

// API fetch options
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-chain": "solana",
    "X-API-KEY": "40376ad7de38481e823a40dba10bfe7d",
  },
};

// Constant for timeFrom (Feb 8, 2025, 03:27:10 UTC)
const TIME_FROM = 1738985230; // Unix timestamp for Feb 8, 2025, 03:27:10 UTC

export default function Combining() {
  // State to hold fetched data
  const [chartData, setChartData] = React.useState<{ date: string; price: number }[]>([]);

  // Function to fetch data
  const fetchData = () => {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const timeFrom = TIME_FROM; // Fixed start date: Feb 8, 2025
    const timeTo = now; // Up to current time

    fetch(
      `https://public-api.birdeye.so/defi/history_price?address=FasH397CeZLNYWkd3wWK9vrmjd1z93n3b59DssRXpump&address_type=token&type=4H&time_from=${timeFrom}&time_to=${timeTo}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data && res.data.items) {
          // Transform API response to { date: "YYYY-MM-DD HH:mm", price: number }
          const transformedData = res.data.items.map((item: { unixTime: number; value: number }) => {
            const date = new Date(item.unixTime * 1000); // Convert Unix to Date object
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
            return {
              date: formattedDate, // e.g., "2025-02-08 03:27"
              price: item.value, // Exact token price
            };
          });
          setChartData(transformedData);
        } else {
          console.error("Invalid API response:", res);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  // Fetch data on mount and every 1 minute
  React.useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 60 * 1000); // Refresh every 1 minute
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Define series with proper TypeScript types (only line series)
  const series: LineSeriesType[] = [
    {
      type: "line",
      data: chartData.map((day) => day.price),
      label: "Butcoin Price",
      color: "#FA660F", // Orange line for visibility on black background
    },
  ];

  return (
    <div style={{ width: "90%", backgroundColor: "black" }} className="text-white m-auto mt-10 relative">
      <Typography sx={{ color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 4 }}>
        Butcoin Price
      </Typography>
      <div className="absolute text-[40px] left-2/5 font-bold flex items-center">
      <Image src={image1} alt="logo" className="w-44 h-13"/>
      Acquisitions</div>
      {/* Global CSS to style the ruler */}
      <style jsx global>{`
        .MuiChartsAxisHighlight-line {
          stroke: white !important; /* Bright white ruler lines */
          stroke-width: 2 !important; /* Thicker line */
          stroke-opacity: 0.8 !important; /* Slightly transparent */
        }
      `}</style>
      <div>
        <ResponsiveChartContainer
          series={series}
          height={600}
          margin={{ top: 10, left: 120, right: 150, bottom: 60 }}
          xAxis={[
            {
              id: "date",
              data: chartData.map((day) => new Date(day.date)),
              scaleType: "time",
              valueFormatter: (value: Date) =>
                `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`,
              tickInterval: (value: Date) => {
                const date = new Date(value);
                return date.getHours() === 0 && date.getMinutes() === 0;
              },
              tickLabelInterval: (value: Date) => {
                const date = new Date(value);
                return date.getHours() === 0 && date.getMinutes() === 0 && date.getDate() % 5 === 0;
              },
              tickLabelStyle: {
                fontSize: 18,
                fill: "white",
                fontWeight: "bold",
                angle: 0,
                textAnchor: "middle",
              },
            },
          ]}
          yAxis={[
            {
              id: "price",
              scaleType: "linear",
              valueFormatter: (value: number) => `$${value.toFixed(6)}`,
              tickLabelStyle: { fontSize: 18, fill: "white", fontWeight: "bold" },
            },
          ]}
        >
          <div className="text-white">
          <ChartsAxisHighlight x="line" y="line" /> 
          </div>
          <LinePlot />
          <LineHighlightPlot />
          <ChartsXAxis
            position="bottom"
            axisId="date"
            sx={{
              [`& .${axisClasses.line}`]: { stroke: "white" },
              [`& .${axisClasses.label}`]: {
                fill: "white",
                fontWeight: "bold",
                fontSize: 24,
              },
              [`& .${axisClasses.tick}`]: { stroke: "white" },
            }}
          />
          <ChartsYAxis
            position="left"
            axisId="price"
            sx={{
              [`& .${axisClasses.line}`]: { stroke: "white" },
              [`& .${axisClasses.tick}`]: { stroke: "white" },
              [`& .${axisClasses.label}`]: {
                transform: "translate(-40px, -10px)",
                fill: "white",
                fontWeight: "bold",
                position: "initial",
                fontSize: 24,
              },
            }}
          />
          <ChartsTooltip
            slotProps={{
              popper: {
                sx: {
                  "& .MuiChartsTooltip-root": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px",
                  },
                },
              },
            }}
          />
        </ResponsiveChartContainer>
      </div>
    </div>
  );
}