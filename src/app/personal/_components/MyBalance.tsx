"use client";

import React from "react";
import * as Label from "@radix-ui/react-label";
import { Button } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

const MyBalance = () => (
  <div className="p-5 hover:shadow-lg shadow-md flex flex-col h-full ">
    <div className="">
      <div className="flex justify-between font-bold text-lg">
        <div>My Balance</div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <Form.Root className="w-[260px]">
        <Form.Field className="grid mb-[10px]" name="balance">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Balance:
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8] text-red-600"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <span className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6">
              {1000}
              {" "}
              ETH
            </span>
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Withdraw
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  </div>
);

export default MyBalance;
