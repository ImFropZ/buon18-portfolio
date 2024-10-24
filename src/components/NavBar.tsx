import { Menu, MobileMenu } from "@/components";
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
        "relative flex w-full flex-col overflow-hidden p-4 after:absolute after:left-1/2 after:top-[calc(100%-1rem)] after:h-24 after:w-1/2 after:-translate-x-1/2 after:content-normal after:rounded-3xl after:bg-primary-darker",
        props.className,
      )}
    >
      <LocaleButtons />
      <div className="flex items-center justify-between p-2 md:px-20">
        <Link href="/" className="xl:flex-1">
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
        <div className="hidden justify-end gap-10 pr-12 font-medium leading-5 lg:flex xl:flex-1">
          <span>(xxx) xxx-xxxx</span>
          <Link href="/contact">
            <span className="cursor-pointer select-none text-primary">
              {t("contact.nav")}
            </span>
          </Link>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
