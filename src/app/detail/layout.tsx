"use client";

import React from "react";

type Props = {
    children: React.ReactNode;
}

const DetailLayout = (props: Props) => (
  <div className="sticky  w-full sm:px-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 flex justify-center">
    <div className=" w-full md:max-w-screen-lg 2xl:max-w-screen-xl flex justify-between items-center">
      {props?.children}
    </div>
  </div>
);

export default DetailLayout;
