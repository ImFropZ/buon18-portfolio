import Image from "next/image";
import { cn } from "./utils";
import React from "react";
import { Button, Title } from "./base";
import { ArrowRight } from "lucide-react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  return (
    <div className="bg-[#042782]">
      <div
        {...props}
        className={cn(
          "mx-auto grid w-full max-w-[96rem] place-content-center p-16 pb-0 text-white",
          props.className,
        )}
      >
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-6">
            <Title className="text-4xl text-white">
              Welcome to Buon18 - <br />
              where technology meets creativity.
            </Title>
            <p className="text-sm text-gray-200">
              A local tech agency providing ready-to-go solutions that cater to
              businesses of all sizes, offering innovative and customized IT
              services to help streamline operations and enhance digital
              presence.
            </p>
            <div className="flex gap-2">
              <Image
                src="/images/github.svg"
                alt="github"
                width={32}
                height={32}
              />
              <Image
                src="/images/facebook.svg"
                alt="github"
                width={32}
                height={32}
              />
              <Image
                src="/images/linkedin.svg"
                alt="github"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title size={3} className="text-4xl text-white">
              Keep in touch with us!
            </Title>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg px-4 py-3 text-lg placeholder:text-[#0066CCAA]"
            />
            <Button className="flex h-fit w-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none">
              <p>Subscribe</p>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <p className="mx-auto my-8 text-sm font-normal leading-5 tracking-wide text-gray-200">
          @Copyright 2024 All rights reserved - Buon18
        </p>
      </div>
    </div>
  );
}
