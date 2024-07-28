import React from "react";
import { cn } from "@/components/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded py-4 outline outline-[1px] transition-all hover:bg-gray-200",
        props.className,
      )}
    >
      {children}
    </button>
  );
}
