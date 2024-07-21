import { cn } from "./utils";
import React from "react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  return (
    <div
      {...props}
      className={cn(
        "grid h-52 w-full place-content-center outline",
        props.className,
      )}
    >
      Footer
    </div>
  );
}
