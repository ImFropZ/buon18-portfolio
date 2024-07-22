import React from "react";
import { cn } from "../utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title({ size, children, ...props }: TitleProps) {
  return React.createElement(
    `h${size || 1}`,
    { ...props, className: cn("text-primary text-7xl font-black", props.className) },
    children,
  );
}
