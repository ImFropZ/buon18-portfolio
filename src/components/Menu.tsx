"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const MENUS = [
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "About",
    link: "/about",
  },
];

export function Menu() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <ul className="flex gap-8 p-3 px-7">
      {MENUS.map((menu) => {
        return (
          <Link href={menu.link} key={menu.link}>
            <li
              key={menu.label}
              className="cursor-pointer select-none data-[active=true]:font-bold"
              data-active={pathname
                .toLowerCase()
                .includes(menu.label.toLowerCase())}
            >
              {t(menu.label.toLowerCase())}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
