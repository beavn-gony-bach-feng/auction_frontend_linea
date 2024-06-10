import React from "react";
import dynamic from "next/dynamic";
import { list } from "@/constants/NFTData";
// 动态加载客户端组件，禁止服务器端渲染
const DetailPageClient = dynamic(() => import("./_component/container"), { ssr: false });

type Props = {

}

const DetailPage = (props: Props) => (
  <DetailPageClient />
);
export async function generateStaticParams() {
  // Fetch your list of tokenIds here
  const tokenIds = list.map((item) => item.tokenId);

  return tokenIds.map((tokenId: number) => ({
    tokenId: tokenId.toString(),
  }));
}

export default DetailPage;
