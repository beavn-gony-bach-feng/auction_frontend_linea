"use client";

import React from "react";
import { ScrollArea, Spinner, Text } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import AuctionItem from "@/components/auction/itemPersonal";
import PopoverWarp from "@/components/popover";
import { useMyNFTs } from "@/hooks/useNFT";
import { useAccount } from "wagmi";

const MyNFT = () => {
  const account = useAccount();
  const list = [
    {
      tokenId: 1,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 2,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x8888888111122222233444444",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 3,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["英式拍卖", "pleasure", "狂热"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 7,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "10ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 4,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "0.5ETH",
      tags: ["荷兰拍卖", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 5,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "6ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 6,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
  ];
  const { nfts, loading, error } = useMyNFTs(account?.address);
  console.log(nfts);

  if (loading) {
    return (
      <div className=" p-5 hover:shadow-lg shadow-md  flex-col h-full flex justify-center items-center">
        <Spinner size="3" />
        <Text size="2" className="text-gray-500 font-bold">loading...</Text>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="p-5 hover:shadow-lg shadow-md flex flex-col h-full">
      <div className="">
        <div className="flex justify-between font-bold text-lg">
          <div>My NFT</div>
        </div>
        <ScrollArea size="1" type="always" scrollbars="horizontal">
          <div className="flex justify-between">
            {nfts.map((e, i) => (
              // <PopoverWarp className="ml-2 mr-2" key={i} item={e}>
              <AuctionItem item={e} key={i} />
              // </PopoverWarp>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MyNFT;
