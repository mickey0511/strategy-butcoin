"use client";

import React, { useState, useEffect } from "react";
import StatItem from "./btc_button";
import { MdCurrencyBitcoin } from "react-icons/md";
import { Connection, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress, getAccount } from "@solana/spl-token";


interface DataType {
  data: {
    value: string;
  };
}

const Btc: React.FC = () => {

  const [data, setData] = useState<DataType | null>();
    const [balance, setBalance] = useState<number>(0);
  const currentPrice = data?.data.value;
  const currentAmount = balance;
  const butt_Supply_Control = (currentAmount / 1000000000) * 100;
  const btc_Yield_Qtd = ((Number(currentPrice) - 0.0014) / 0.0014) * 100;
  const btc_Yield_Ytd = ((Number(currentPrice) - 0.0014) / 0.0014) * 100;
  const btc_Yield_2024 = ((Number(currentPrice) - 0.0014) / 0.0014) * 100;
  //   const btc_Gain_Qtd = currentAmount;
  //   const btc_Gain_Ytd = currentAmount;
  //   const btc_Gain_2024 = currentAmount;

  const stats = [
    { name: "Buttcoin Price", value: `$${Number(currentPrice).toFixed(4)}` },
    {
      name: "Buttcoin Count",
      value: (
        <>
          <MdCurrencyBitcoin className="text-4xl text-[#fa660f] rotate-90" />{" "}
          {currentAmount.toFixed(0)}
        </>
      ),
    },
    {
      name: "Buttcoin Supply Control(B)",
      value: `${butt_Supply_Control.toFixed(4)}%`,
    },
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
 

    

    async function getTokenBalance() {
      // Replace with your Helius API key
      const HELIUS_API_KEY = "be199ccc-7f8b-483c-94d4-bb9f8d9d13a9";
      const HELIUS_URL = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;

      // Wallet & Token details
      const walletAddress = "CskV5d2Wzvbc5JSMUH13epYrZR1TQ2mHYNBrv8qgwBiZ";
      const tokenMintAddress = "FasH397CeZLNYWkd3wWK9vrmjd1z93n3b59DssRXpump";

      try {
        // Using Helius to get token accounts by owner
        const response = await fetch(HELIUS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "1",
            method: "getTokenAccountsByOwner",
            params: [
              walletAddress,
              {
                mint: tokenMintAddress,
              },
              {
                encoding: "jsonParsed",
              },
            ],
          }),
        });

        const data = await response.json();

        if (data.error) {
          throw new Error(`Helius API error: ${data.error.message}`);
        }

        if (data.result && data.result.value && data.result.value.length > 0) {
          // Get the token account info
          const tokenAccount = data.result.value[0];
          const balance =
            tokenAccount.account.data.parsed.info.tokenAmount.uiAmount;
          const decimals =
            tokenAccount.account.data.parsed.info.tokenAmount.decimals;
          const rawBalance =
            tokenAccount.account.data.parsed.info.tokenAmount.amount;
          setBalance(balance);

          console.log(`Token: ${tokenMintAddress}`);
          console.log(`Balance: ${balance} tokens (${rawBalance} raw amount)`);
          console.log(`Decimals: ${decimals}`);

          return balance;
        } else {
          console.log(`No token account found for this token mint and wallet`);
          return 0;
        }
      } catch (error) {
        console.error("Error fetching token balance from Helius:", error);
        return 0;
      }
    }

    const fetchButtcoinPrice = async () => {
      const apiUrl =
        "https://public-api.birdeye.so/defi/price?address=FasH397CeZLNYWkd3wWK9vrmjd1z93n3b59DssRXpump";

      const apiKey = "40376ad7de38481e823a40dba10bfe7d";

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "x-api-key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setData(data);
        console.log(data, "sdffsfsdfsdfsdf");
      } catch (error) {
        console.error("Failed to fetch Buttcoin data:", error);
      }
    };

    useEffect(() => {
      getTokenBalance();
      fetchButtcoinPrice();
    }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black">
      {stats.map((stat, index) => (
        <StatItem key={index} name={stat.name} value={stat.value} />
      ))}
    </div>
  );
};

export default Btc;
