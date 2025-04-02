import { Menu } from "@/components";
import { cn } from "./utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header(props: HeaderProps) {
  const t = useTranslations();

  return (
    <header
      {...props}
      className={cn(
        "fixed top-0 z-20 flex w-full flex-col bg-black/20 p-4 font-medium text-white backdrop-blur-lg",
        props.className,
      )}
      id="header"
    >
      {/* <LocaleButtons /> */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2">
        <div className="flex-1 cursor-default">
          <div className="flex w-fit items-center gap-2">
            <Link href="/">
              <Image
                width={610}
                height={128}
                src="/buon18.png"
                alt="logo"
                className="h-8 w-auto object-contain"
              ></Image>
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
}
