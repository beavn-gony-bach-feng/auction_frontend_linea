"use client";

import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="classic" color="blue" className="flex items-center text-xl">
      <ResetIcon className="w-5 h-5 " />
      goback
    </Button>
  );
}
