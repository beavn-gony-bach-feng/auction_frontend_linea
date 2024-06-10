import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
// 给...rest定义类型 是为了传递给Tooltip.Content的属性 例如align
const TooltipProvider = ({
  text,
  children,
  ...rest
}: { text: string; children: React.ReactNode } & React.ComponentProps<
  typeof Tooltip.Content
>) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className="text-violet11  hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center mx-3 ">
          {children}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          {...rest}
          className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
          sideOffset={5}
        >
          {text}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default TooltipProvider;
