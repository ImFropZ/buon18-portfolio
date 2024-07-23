"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/components/utils";
import Link from "next/link";
import React from "react";

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
              {menu.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
