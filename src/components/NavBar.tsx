import { cn } from "./utils";
import React from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ ...props }: NavBarProps) {
  return (
    <nav
      {...props}
      className={cn(
        "grid h-16 w-full place-content-center outline",
        props.className,
      )}
    >
      NavBar
    </nav>
  );
}
