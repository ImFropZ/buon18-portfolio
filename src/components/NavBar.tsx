import { Menu } from "@/components";
import { cn } from "./utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ ...props }: NavBarProps) {
  return (
    <div {...props} className={cn("flex w-full flex-col p-2", props.className)}>
      <div className="flex items-center justify-between px-5 py-2">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="h-14 w-14">
              <Image
                width={64}
                height={64}
                src="/assets/Logo_Icon-01.png"
                alt="logo"
              ></Image>
            </div>
            <p className="text-xl font-black text-primary">Buon18</p>
          </div>
        </Link>
        <div className="flex gap-5">
          <span>(555) 555-1234</span>
          <Link href="/contact">
            <span className="cursor-pointer select-none text-primary">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
      <nav className="bg-gray-50">
        <Menu />
      </nav>
    </div>
  );
}
