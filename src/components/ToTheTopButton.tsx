"use client";

import { Button } from "@/components/base";
import { cn } from "@/components/utils";
import { ArrowUp } from "lucide-react";
import React from "react";

interface ToTheTopButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function ToTheTopButton({ className, ...props }: ToTheTopButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "sticky bottom-10 aspect-square w-fit rounded-lg border-4 p-2 py-0 outline-none",
        className,
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp className="stroke-[4]" />
    </Button>
  );
}
