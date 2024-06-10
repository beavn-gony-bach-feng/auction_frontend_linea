"use client";

import React from "react";
import { useAccount } from "wagmi";
import * as Toast from "@radix-ui/react-toast";
import { Heading } from "@radix-ui/themes";
import MyNFT from "./_components/MyNFT";
import MyBalance from "./_components/MyBalance";
import InitiatedAuctionRecord from "./_components/InitiatedAuctionRecord";
import BidRecord from "./_components/BidRecord";

const Page = () => {
  const account = useAccount();
  return (
    <>
      {account?.isConnected && account?.chain?.name === "Sepolia" ? (
        <div className="flex flex-wrap w-full h-[92vh]">
          <div className="w-1/2 flex flex-col">
            <div className="text-center flex-grow">
              <MyNFT />
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <MyBalance />
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="text-center flex-grow">
              <BidRecord />
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="text-center flex-grow">
              <InitiatedAuctionRecord />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full text-center text-red-500 mt-[15%]">
          <Heading>Please connect wallet and switch to Sepolia...</Heading>
        </div>
      )}
    </>
  );
};

export default Page;
