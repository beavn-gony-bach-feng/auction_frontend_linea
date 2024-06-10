import React from "react";
import Back from "@/components/back";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="my-10 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <Back />
        {children}
      </div>
    </div>
  );
}
