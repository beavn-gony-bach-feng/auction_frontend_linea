import Image from "next/image";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { useRouter, usePathname } from "next/navigation";
import { NFTItem } from "@/hooks/useNFT";
import { useState } from "react";
import StorageUtil from "@/lib/storage";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";

type AuctionItemProps = {
  item: NFTItem;
};
const colors = [
  "gray", "gold", "bronze", "brown", "yellow", "purple",
] as any;

export default function AuctionItem({ item }: AuctionItemProps) {
  const path = usePathname();
  const [imgSrc, setImgSrc] = useState(item.img);
  return (
    <Link onClick={() => StorageUtil.setLocalStorage("currentNFT", item)} href={{ pathname: "/detail/" }} className="w-[200px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in">
      <Image
        src={imgSrc}
        width={200}
        height={200}
        alt="Picture of the author"
        onError={() => setImgSrc("https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000")}
      />
      <div className="px-2 py-4  relative pt-4">
        <p className="font-bold text-lg mb-1">{item.name}</p>
        <div className="text-xs">
          <div className="flex mt-0.5 flex-col">
            {/* <p>Type:</p> */}
            {/* <p className="flex-1">{item.tags.join(" · ")}</p> */}

            {/* <Badge color="orange">In progress</Badge>
            <Badge color="orange">In progress</Badge>
            <Badge color="orange">In progress</Badge> */}

            {
                item.tags.map((tag, index) => (
                  <p className="block">
                    <Badge color={colors[index]}>{tag}</Badge>
                  </p>
                ))
            }

          </div>
        </div>
      </div>
    </Link>
  );
}
