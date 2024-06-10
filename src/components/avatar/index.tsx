import React, { AllHTMLAttributes } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { PersonIcon } from "@radix-ui/react-icons";

const AvatarDiv = (
  attr: AllHTMLAttributes<HTMLDivElement> & {
    iconAttr: { width: number; height: number };
  },
) => (
  <div className="flex gap-5 " {...attr}>
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center  text-[15px] font-medium">
        <PersonIcon width={attr?.iconAttr.width} height={attr?.iconAttr.height} />
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarDiv;
