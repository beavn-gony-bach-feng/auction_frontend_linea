import Image from "next/image";
import { LapTimerIcon } from "@radix-ui/react-icons";
import StorageUtil from "@/lib/storage";
import Link from "next/link";
import { useState } from "react";
import { parseEther, formatUnits } from "viem";

type AuctionItemProps = {
  item: any;
};

export default function AuctionItem({ item }: AuctionItemProps) {
  const [imgSrc, setImgSrc] = useState(item.img);
  return (
    <Link onClick={() => StorageUtil.setLocalStorage("currentNFT", item)} href={{ pathname: "/detail/" }} className="w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in">
      <Image
        src={imgSrc}
        width={250}
        height={250}
        alt="Picture of the author"
        onError={() => setImgSrc("https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000")}
      />
      <div className="px-2 py-4 relative pt-12">
        <div className="w-[90%] text-sm rounded-2xl text-[#fff] flex flex-col items-center font-bold py-1 px-4 bg-[#f87171] overflow-hidden absolute z-1 -top-8 left-[5%]">
          <div className="w-full flex items-center overflow-hidden">
            <LapTimerIcon className="mr-2" />
            <span>{item.deadline}</span>
          </div>
          <div className="w-full flex items-center overflow-hidden">
            <span className="mr-2">bid:</span>
            <span>{item.currentBid}</span>
          </div>
          <div className="w-full flex items-center overflow-hidden">
            <span className="mr-2">bidder:</span>
            <span className="flex-1 truncate">{item.currentBidder}</span>
          </div>
        </div>
        <p className="font-bold text-lg mb-1">{item.name}</p>
        <div className="text-xs">
          <div className="flex">
            <p>Starting Price:</p>
            <p>
              {formatUnits(item.price, 18) }
              ETH
            </p>
          </div>
          <div className="flex mt-0.5">
            <p>Type：</p>
            <p>{item.tags.join(" · ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
