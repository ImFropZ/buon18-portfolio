"use client";

import { ArrowDown } from "lucide-react";
import { cn } from "@/components/utils";
import { Button } from "@/components/base";
import React from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero({ ...props }: HeroProps) {
  return (
    <section
      {...props}
      className={cn(
        "relative grid w-full place-content-center overflow-hidden bg-gradient-to-br from-primary-light to-primary py-40",
        props.className,
      )}
    >
      <p className="right-5 mx-auto w-4/5 text-wrap rounded-lg border-2 bg-gray-50 p-4 text-center text-2xl font-black">
        We&apos;re helping you to inovate your{" "}
        <span className="text-primary">business</span>
      </p>

      <Button
        type="button"
        className="mx-auto mt-10 flex w-1/2 justify-center gap-5 bg-primary font-bold text-gray-50 hover:bg-primary-dark"
        onClick={() => {
          const aboutSectionTopPosition =
            document.getElementById("about-section")?.getBoundingClientRect()
              .top ?? 0;

          window.scrollTo({
            top: aboutSectionTopPosition - 30,
            behavior: "smooth",
          });
        }}
      >
        <span>Scroll down</span>
        <ArrowDown className="animate-bounce stroke-[4]" />
      </Button>
    </section>
  );
}
