import { BritishAuctionAbi, DutchAuctionAbi, NFTAbi } from "@/constants/abi";

export const britisConfig = {
  abi: BritishAuctionAbi,
  address: "0x1600c3aC7c86B332DB54A7d783F4e0250353E48F",
} as const;
export const dutchConfig = {
  abi: DutchAuctionAbi,
  address: "0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8",
} as const;
export const NFTConfig = {
  abi: NFTAbi,
//   address: "0xcef6dF73404BaecCDaa5986615233B0e7e442e2d",
} as const;
// 新部署的荷兰拍，事件里增加了endTime：0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8
