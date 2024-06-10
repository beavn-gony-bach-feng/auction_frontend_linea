"use client";

import React, { AllHTMLAttributes, useEffect } from "react";
import { Text, Button, Popover } from "@radix-ui/themes";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import useStore from "@/store";
import StorageUtil from "@/lib/storage";
import { NFTItem } from "@/hooks/useNFT";

const PopoverWarp = ({ children, item, ...rest }: any) => {
  const router = useRouter();
  const setCurrentNFT = useStore((state:any) => state.setCurrentNFT);
  console.log(item.tokenId, "@@@##");
  useEffect(() => {

  }, []);

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div {...rest}>{children}</div>
      </Popover.Trigger>

      <Popover.Content size="1">
        <div>
          <Button
            color="indigo"
            variant="soft"
            style={{ width: "100%", marginBottom: ".5rem" }}
          >
            Bid
          </Button>
        </div>
        <div>
          <Button
            variant="soft"
            style={{ width: "100%" }}
          >
            <Link
              href={{ pathname: "/detail/" }}
              color="indigo"
              style={{ width: "100%" }}
              onClick={() => StorageUtil.setLocalStorage("currentNFT", item)}
            >
              View
            </Link>
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PopoverWarp;
