"use client";

import { cn } from "@/components/utils";
import { ArrowUp } from "lucide-react";
import React from "react";

interface ScrollToTopProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function ScrollToTop({ className, ...props }: ScrollToTopProps) {
  return (
    <button
      {...props}
      className={cn(
        "fixed bottom-10 right-5 z-50 grid aspect-square w-fit cursor-pointer place-content-center rounded-full border-4 bg-gray-50 p-2 outline-none transition-all active:scale-125 md:p-4",
        className,
      )}
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp className="stroke-[4]" size={32} />
    </button>
  );
}
