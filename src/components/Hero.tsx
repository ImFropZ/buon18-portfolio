"use client";

import { cn } from "@/components/utils";
import React from "react";
import Link from "next/link";
import { useAnimatedCounter } from "@/hooks/use-animation-counter";
import { motion } from "motion/react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero(props: HeroProps) {
  const teamNumber = useAnimatedCounter(5, 0);
  const qualityNumber = useAnimatedCounter(99.9, 0);

  return (
    <section
      {...props}
      className={cn("w-full overflow-hidden py-24", props.className)}
    >
      <HeroBackground />

      <motion.h1
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="mt-6 w-full max-w-[60ch] text-nowrap text-[11.8rem] font-extrabold leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.00) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        WELCOME TO
      </motion.h1>
      <div className="flex items-end gap-6">
        <motion.img
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
          src="/hero-buon18.png"
          className="flex-1 opacity-90"
          alt=""
          width={787}
          height={163}
        />
        <motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.5 } }}
          className="max-w-md text-2xl leading-none"
        >
          In a world where everything is becoming digital, we strive to lighten
          the workload of businesses by offering seamless, reliable, and
          innovative tech solutions.
        </motion.p>
      </div>

      <div className="mt-16 flex items-end justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="text-4xl">
            YOUR PARTNER IN IT <br />
            SOULUTION
          </h2>
          <div className="ml-6 mt-7 flex gap-60">
            <div className="flex flex-col gap-4">
              <p className="relative text-white/60 before:absolute before:right-[calc(100%+0.5rem)] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-white">
                Reliable Team
              </p>
              <p className="text-4xl">
                {String(teamNumber.toFixed(0)).padStart(2, "0")}+
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="relative text-white/60 before:absolute before:right-[calc(100%+0.5rem)] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-white">
                Quality Guarantee
              </p>
              <p className="text-4xl">{qualityNumber.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <Link
          href={"/about"}
          className="rounded-lg border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 px-16 py-6 text-2xl backdrop-blur"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-[140vh] overflow-x-hidden">
      <div
        className="absolute -right-1/2 left-0 top-0 -z-10 h-[140vh] blur-lg"
        style={{
          background:
            "linear-gradient(199deg, rgba(171, 215, 144, 0.00) -4.04%, #97CA33 33.81%, rgba(151, 202, 51, 0.00) 73.13%)",
        }}
      ></div>
    </div>
  );
}
