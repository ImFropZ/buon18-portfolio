import { Menu } from "@/components";
import { LocaleButtons } from "@/components/base";
import { cn } from "./utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ ...props }: NavBarProps) {
  const t = useTranslations();

  return (
    <div
      {...props}
      className={cn(
        "relative flex w-full flex-col overflow-hidden p-4 after:absolute after:left-1/2 after:top-[calc(100%-1rem)] after:h-24 after:w-1/2 after:-translate-x-1/2 after:content-normal after:rounded-3xl after:bg-[#042782]",
        props.className,
      )}
    >
      <LocaleButtons />
      <div className="flex items-center justify-between px-20 py-2">
        <Link href="/" className="flex-1">
          <div className="flex items-center gap-2">
            <div className="h-full">
              <Image
                width={128}
                height={64}
                src="/assets/buon18-logo.png"
                alt="logo"
              ></Image>
            </div>
          </div>
        </Link>
        <Menu />
        <div className="flex flex-1 justify-end gap-10 font-medium leading-5 pr-12">
          <span>(555) 555-1234</span>
          <Link href="/contact">
            <span className="cursor-pointer select-none text-primary">
              {t("contact.nav")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
