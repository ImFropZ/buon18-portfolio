"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const MENUS = [
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

  return (
    <nav className="flex flex-1 justify-center gap-12 p-3 px-7 font-medium">
      {MENUS.map((menu) => {
        return (
          <Link
            href={menu.link}
            key={menu.link}
            className="relative cursor-pointer select-none after:absolute after:left-0 after:top-full after:h-1 after:w-full after:scale-x-[115%] after:content-normal data-[active=true]:after:bg-[#042782]"
            data-active={
              pathname === "/"
                ? menu.link.toLowerCase() === "/"
                : menu.link.toLowerCase().startsWith(pathname.toLowerCase())
            }
          >
            {t(menu.label.toLowerCase())}
          </Link>
        );
      })}
    </nav>
  );
}
