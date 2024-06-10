"use client";

import { ScrollArea } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import AuctionItem from "@/components/collect/item";
import { OKLINK_KEY } from "@/constants";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useBalance,
  useReadContract,
} from "wagmi";
import { useCallback, useEffect, useState } from "react";

export default function CollectList() {
  const account = useAccount();
  const [list, setList] = useState([]);
  // const list = [
  //   {
  //     img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
  //     price: '1.23ETH',
  //     tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
  //     currentBid: '10ETH',
  //     currentBidder: '0x111112222',
  //     deadline: '2024-01-01 00:00:00',
  //     mintDate: '2024-05-03',
  //   },
  //   {
  //     img: 'https://i.seadn.io/s/raw/files/b8c7c610c8a6ffbc66db01a6c6559ebc.png?auto=format&dpr=1&w=1000',
  //     price: '1.23ETH',
  //     tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
  //     currentBid: '10ETH',
  //     currentBidder: '0x8888888111122222233444444',
  //     deadline: '2024-01-01 00:00:00',
  //     mintDate: '2024-05-03',
  //   },
  // ]
  const getData = useCallback(async () => {
    const res = await fetch(
      `https://www.oklink.com/api/v5/explorer/nft/address-balance-fills?chainShortName=SEPOLIA_TESTNET&address=${account.address}&protocolType=token_721&limit=100`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Ok-Access-Key": OKLINK_KEY as string,
        },
      },
    );

    if (!res.ok) {
      // 由最近的 error.js 处理
      throw new Error("Failed to fetch data");
    }
    const { data } = await res.json();

    if (data.length) {
      const _list = data[0].tokenList;
      setList(_list);
    }
  }, [account]);
  useEffect(() => {
    if (account.address) {
      getData();
    }
  }, [account, getData]);
  if (!list.length) return null;
  return (
    <div className="my-20 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <div className="flex justify-between font-bold text-lg">
          <div>Collect</div>
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
          <div className="flex justify-between mb-5 mt-5">
            {list.map((i, index) => <AuctionItem item={i} key={index} />)}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
