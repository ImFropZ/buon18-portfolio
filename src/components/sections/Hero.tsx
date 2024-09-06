"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/components/utils";
import { Button } from "@/components/base";
import React from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero({ ...props }: HeroProps) {
  return (
    <section
      {...props}
      className={cn(
        "relative grid h-[75vh] w-full place-content-center gap-14 overflow-hidden bg-[#042782]/80 py-40",
        props.className,
      )}
    >
      <h1 className="mx-auto w-[70%] text-center text-6xl font-extrabold text-white">
        Empowering Businesses in the Digital Age - Your Partner in IT Solutions.
      </h1>
      <p className="mx-auto w-[72ch] text-center text-lg text-gray-300">
        At Buon18, we believe in the power of digital transformation. Our
        mission is to provide cutting-edge IT solutions that not only meet the
        current demands of businesses but also anticipate future needs. In a
        world where everything is becoming digital, we strive to lighten the
        workload of businesses by offering seamless, reliable, and innovative
        tech solutions.
      </p>
      <div className="flex justify-center gap-4">
        <Button className="flex h-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none">
          <p>Get started</p>
          <ArrowRight />
        </Button>
        <Button className="flex h-fit items-center gap-2 rounded-lg border px-5 py-3 font-medium text-white">
          Learn more
        </Button>
      </div>
    </section>
  );
}
