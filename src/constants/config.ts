import { BritishAuctionAbi, DutchAuctionAbi, NFTAbi } from "@/constants/abi";

export const britisConfig = {
  abi: BritishAuctionAbi,
  address: "0xe5D4225D0ee388Ef332Ce39d4E04885eBb841500",
} as const;
export const dutchConfig = {
  abi: DutchAuctionAbi,
  address: "0xDF16f5a7cB1A352A0578D7009F2EA89c7A6A6876",
} as const;
export const NFTConfig = {
  abi: NFTAbi,
  address: "0x25017f6f3679090A37a87a1122AEb17D2556f6A0",
} as const;
// 新部署的荷兰拍，事件里增加了endTime：0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8
