"use client"; // Fix for Next.js

import { useState } from "react";
import OptionalButton from "./Componenets/OptionalButton";
import Btc from "./Componenets/btc";
import Mstr from "./Componenets/mstr";
import Strk from "./Componenets/strk";
import Debt from "./Componenets/debt";
import Assets from "./Componenets/assets";
import Options from "./Componenets/option";
import Charts from "./Componenets/charts";
import Purchases from "./Componenets/purchases";
import Shares from "./Componenets/shares";
import Notes from "./Componenets/notes";
import History_ from "./Componenets/history";

export default function Home() {
    const optionButton_name = ["MSTR", "STRK", "BTC", "DEBT", "ASSETS", "OPTIONS", "CHARTS", "HISTORY", "PURCHASES", "SHARES", "NOTES"];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <main className="relative w-screen min-h-screen montserrat bg-black text-white overflow-x-hidden p-12">

            <OptionalButton names={optionButton_name} currentIndex={currentIndex} onSelect={setCurrentIndex} />

            <div className="mt-6">
                {currentIndex === 0 && <Mstr />}
                {currentIndex === 1 && <Strk />}
                {currentIndex === 2 && <Btc />}
                {currentIndex === 3 && <Debt />}
                {currentIndex === 4 && <Assets />}
                {currentIndex === 5 && <Options />}
                {currentIndex === 6 && <Charts />}
                {currentIndex === 7 && <History_ />}
                {currentIndex === 8 && <Purchases />}
                {currentIndex === 9 && <Shares />}
                {currentIndex === 10 && <Notes />}
            </div>
            <div className="w-full text-lg text-white opacity-80 italic mt-4">
                Securities market data last updated: 04/02/2025 04:00 PM ET; Bitcoin market data last updated: 04/02/2025 05:25 PM ET. +/- data reflects change since prior market close (4:00pm ET) for securities market data and since 11:59pm ET for Bitcoin market data.   •   Market data source: Polygon.io  •  See Notes (strategy.com/notes) for important information.
            </div>
        </main>
    );
}
