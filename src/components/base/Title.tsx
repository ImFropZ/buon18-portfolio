"use client";

import React from "react";
import { cn } from "../utils";
import { useTranslations } from "next-intl";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  translateKey?: string;
}

export function Title({ size, translateKey, ...props }: TitleProps) {
  const t = useTranslations();

  return React.createElement(
    `h${size || 1}`,
    {
      ...props,
      className: cn("text-primary font-black", props.className),
    },
    translateKey ? t(translateKey) : props.children,
  );
}
