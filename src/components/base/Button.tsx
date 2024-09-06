import React from "react";
import { cn } from "@/components/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded transition-all",
        props.className,
      )}
    >
      {children}
    </button>
  );
}
