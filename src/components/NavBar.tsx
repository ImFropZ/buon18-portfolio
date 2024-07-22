import Image from "next/image";
import { cn } from "./utils";
import React from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ ...props }: NavBarProps) {
  return (
    <div {...props} className={cn("flex w-full flex-col p-2", props.className)}>
      <div className="flex items-center justify-between px-5 py-2">
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
        <div className="flex gap-5">
          <span>(555) 555-1234</span>
          <span className="cursor-pointer select-none text-primary">
            Contact Us
          </span>
        </div>
      </div>
      <nav className="bg-gray-50">
        <ul className="flex gap-8 p-3 px-7">
          <li className="cursor-pointer select-none">Services</li>
          <li className="cursor-pointer select-none">Blogs</li>
          <li className="cursor-pointer select-none">About</li>
        </ul>
      </nav>
    </div>
  );
}
