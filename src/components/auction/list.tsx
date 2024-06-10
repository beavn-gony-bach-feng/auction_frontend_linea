"use client";

import { ScrollArea, Spinner, Text } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import AuctionItem from "@/components/auction/item";
import { useTheGraph } from "@/hooks/useTheGraph";
import { useNFTsBycontract, useAggregateNFTs } from "@/hooks/useNFT";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import PopoverWarp from "../popover";

export default function AuctionList() {
  const listData = [
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
  const { data: auctionData, loading: auctionLoading, error: auctionError } = useTheGraph({
    url: "https://api.studio.thegraph.com/query/76625/auctionclub0/version/latest",
    query: `
    {
      auctionCancelleds {
        id
        auctionId
        blockNumber
        blockTimestamp
      }
      highestBidIncreaseds{
        id
        bidder
        amount
        transactionHash
      }
      auctionCreateds{
        id
        tokenId
        auctionId
        seller
        startingPrice
        _startTime
        transactionHash
      }
    }
    `,
  });
  const { data: auctionDutchData, loading: auctionDutchLoading, error: auctionDutchError } = useTheGraph({
    url: "https://api.studio.thegraph.com/query/76625/auctionclubdutch/version/latest",
    query: `
    {
  auctionEndeds {
    id
    auctionId
    buyer
    finalPrice
    
  }
  auctionFaileds{
    id
    auctionId
    blockNumber
    blockTimestamp
  }
  auctionStarteds{
    id
    
    auctionId
    seller
    tokenId
    startPrice  
    reservePrice
    nftAddress  
  }
}
    `,
  });

  const { nfts: openSeaNFTs, loading: openSeaLoading, error: openSeaError } = useNFTsBycontract("0xcef6df73404baeccdaa5986615233b0e7e442e2d");

  const [aggregatedNFTs, setAggregatedNFTs] = useState([]);
  const [aggregateLoading, setAggregateLoading] = useState(true);
  const [aggregateError, setAggregateError] = useState(null);
  const [list, setList] = useState(listData);
  useEffect(() => {
    console.log(aggregateError, "dddd");

    if (!auctionLoading && !openSeaLoading && auctionData && openSeaNFTs && auctionDutchData) {
      try {
        const aggregatedData:any = openSeaNFTs.map((nft:any) => {
          const auction = (auctionData as any)?.data.auctionCreateds.find((a) => a.tokenId === nft.tokenId);
          const auctionDutch = (auctionDutchData as any).data.auctionStarteds.find((a) => a.tokenId === nft.tokenId);
          return {
            tokenId: parseInt(nft.tokenId.toString(), 10),
            contractAddress: nft.contractAddress,
            img: nft.img,
            price: auction ? auction.startingPrice : (auctionDutch ? auctionDutch.startPrice : nft.price),
            tags: nft.tags,
            currentBid: "N/A",
            currentBidder: "N/A",
            auctionId: auction ? auction.auctionId : (auctionDutch ? auctionDutch.auctionId : ""),
            deadline: auction ? dayjs(auction._startTime * 1000).format("YYYY-MM-DD HH:mm") : (auctionDutch ? dayjs(auctionDutch._startTime * 1000).format("YYYY-MM-DD HH:mm") : nft.deadline),
            name: nft.name,
            description: nft.description,
            isOwner: nft.isOwner,
            auctionType: auction ? "British" : "Dutch",
          };
        }).filter((nft) => (auctionData as any)?.data.auctionCreateds.some((a) => a.tokenId === nft.tokenId.toString()) || (auctionDutchData as any).data.auctionStarteds.some((a) => a.tokenId === nft.tokenId.toString()));
        setAggregatedNFTs(aggregatedData);
        setList(aggregatedData);
      } catch (err:any) {
        setAggregateError(err.message);
      } finally {
        setAggregateLoading(false);
      }
    }
  }, [auctionLoading, openSeaLoading, auctionData, openSeaNFTs, auctionDutchData]);

  if (auctionLoading || openSeaLoading || aggregateLoading) {
    return (
      <div className=" h-[40vh] hover:shadow-lg shadow-md  flex-col flex justify-center items-center">
        <Spinner size="3" />
        <Text size="2" className="text-gray-500 font-bold">loading...</Text>
      </div>
    );
  }

  if (auctionError || openSeaError || aggregateError) {
    return (
      <p>
        Error:
        {auctionError || openSeaError || aggregateError}
      </p>
    );
  }

  console.log(aggregatedNFTs, openSeaNFTs, auctionData, aggregateError, auctionDutchData, "``````````````````````````");

  return (
    <div className="my-20 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <div className="flex justify-between font-bold text-lg">
          <div>Market</div>

          <div className="flex items-center cursor-pointer">
            more
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>

        <ScrollArea
          size="3"
          radius="full"
          type="always"
          scrollbars="horizontal"
        >
          <div className="flex justify-start mb-5 mt-5">
            {list.map((e, i) => (
              <AuctionItem key={i} item={e} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
