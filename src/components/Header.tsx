import { Menu } from "@/components";
import { cn } from "./utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header(props: HeaderProps) {
  return (
    <header
      {...props}
      className={cn(
        "fixed top-0 z-20 flex w-full flex-col bg-secondary/20 p-4 py-8 font-medium text-white backdrop-blur-lg",
        props.className,
      )}
      id="header"
    >
      {/* <LocaleButtons /> */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex-1 cursor-default">
          <div className="flex w-fit items-center gap-2">
            <Link href="/" prefetch={true}>
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
