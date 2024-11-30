"use client";

import { AlignLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";
import { MENUS } from "./Menu";
import Link from "next/link";

export function MobileMenu() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4 lg:hidden">
      <Link href="tel:+855764184185">
        <span className="font-semibold tracking-wider">{t("telephone.number")}</span>
      </Link>

      <AlignLeft
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      {isOpen && (
        <div className="fixed inset-0 z-10 grid place-content-center bg-white/60">
          <div
            className="absolute inset-0"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <nav className="z-20 flex h-full flex-col items-center justify-center gap-5 rounded-xl bg-white px-20 py-10 shadow">
            {MENUS.map((menu) => {
              return (
                <Link
                  href={menu.link}
                  key={menu.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="relative cursor-pointer select-none after:absolute after:left-0 after:top-full after:h-1 after:w-full after:scale-x-[115%] after:content-normal data-[active=true]:after:bg-primary-darker"
                  data-active={
                    pathname === "/"
                      ? menu.link.toLowerCase() === "/"
                      : menu.link
                          .toLowerCase()
                          .startsWith(pathname.toLowerCase())
                  }
                >
                  {t(menu.label.toLowerCase())}
                </Link>
              );
            })}
            <Link
              href={"/contact"}
              key={"/contact"}
              onClick={() => {
                setIsOpen(false);
              }}
              className="relative cursor-pointer select-none after:absolute after:left-0 after:top-full after:h-1 after:w-full after:scale-x-[115%] after:content-normal data-[active=true]:after:bg-primary-darker"
              data-active={
                pathname === "/"
                  ? "/contact".toLowerCase() === "/"
                  : "/contact".toLowerCase().startsWith(pathname.toLowerCase())
              }
            >
              {t("contact.nav")}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
