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
    <div {...props} className={cn("flex w-full flex-col p-2", props.className)}>
      <div className="flex justify-end p-5">
        <LocaleButtons />
      </div>
      <div className="flex items-center justify-between px-5 py-2">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="h-14 w-14">
              <Image
                width={64}
                height={64}
                src="/assets/buon18-logo-icon.png"
                alt="logo"
              ></Image>
            </div>
            <p className="hidden text-xl font-black text-primary lg:block">
              Buon18
            </p>
          </div>
        </Link>
        <div className="flex justify-end gap-5">
          <span>(555) 555-1234</span>
          <Link href="/contact">
            <span className="cursor-pointer select-none text-primary">
              {t("contact")}
            </span>
          </Link>
        </div>
      </div>
      <Menu />
    </div>
  );
}
