"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { AlignLeft, X } from "lucide-react";
import { ClientPortal } from "./ClientPortal";

export const MENUS = [
  {
    label: "home.nav",
    link: "/",
  },
  {
    label: "about.nav",
    link: "/about",
  },
  {
    label: "blog.nav",
    link: "/blogs",
  },
  {
    label: "service.nav",
    link: "/services",
  },
];

export function Menu() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ClientPortal selector="backdrop-portal" show={open}>
        <div
          data-modal-open
          className="fixed bottom-0 left-0 right-0 top-0 z-10"
          onClick={() => {
            setOpen(false);
          }}
        />
      </ClientPortal>
      <nav
        className="absolute right-0 top-0 z-50 grid h-screen w-3/4 max-w-96 flex-1 grid-rows-[auto,1fr] justify-end gap-2 bg-secondary p-8 pr-20 transition-all duration-500 data-[open=false]:translate-x-full xl:static xl:h-fit xl:max-w-max xl:bg-transparent xl:p-0 xl:backdrop-blur-none xl:data-[open=false]:translate-x-0"
        data-open={open}
      >
        <X
          className="absolute right-0 top-0 m-4 h-10 w-10 xl:hidden"
          onClick={() => {
            setOpen(false);
          }}
        />
        <div className="flex flex-col items-end gap-6 xl:flex-row xl:p-0">
          {MENUS.map((menu) => {
            return (
              <Link
                href={menu.link}
                key={menu.link}
                prefetch={true}
                className="relative flex-1 cursor-pointer select-none text-nowrap text-center after:absolute after:left-0 after:top-full after:h-1 after:w-0 after:content-normal after:rounded-full after:bg-primary after:transition-all after:duration-500 hover:after:w-full data-[active=true]:after:w-full"
                data-active={
                  pathname === "/"
                    ? menu.link.toLowerCase() === "/"
                    : menu.link.toLowerCase().startsWith(pathname.toLowerCase())
                }
                onClick={() => {
                  setOpen(false);
                }}
              >
                {t(menu.label.toLowerCase())}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-end justify-end gap-2 pb-10 xl:hidden">
          <Link href="tel:+855764184185">
            <span>{t("telephone.number")}</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer select-none text-primary">
              {t("contact.nav")}
            </span>
          </Link>
        </div>
      </nav>
      <div className="hidden flex-1 justify-end gap-10 xl:flex">
        <Link href="tel:+855764184185">
          <span>{t("telephone.number")}</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer select-none text-primary">
            {t("contact.nav")}
          </span>
        </Link>
      </div>

      <AlignLeft
        className="xl:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />
    </>
  );
}
