"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/components/utils";
import { Button } from "@/components/base";
import React from "react";
import { useTranslations } from "next-intl";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero({ ...props }: HeroProps) {
  const t = useTranslations();

  return (
    <section
      {...props}
      className={cn(
        "relative grid h-[75vh] w-full place-content-center gap-14 overflow-hidden bg-[#042782]/80 py-40",
        props.className,
      )}
    >
      <h1 className="mx-auto w-[32ch] text-center text-6xl font-extrabold leading-normal text-white">
        {t("home.hero.slogun")}
      </h1>
      <p className="mx-auto w-[72ch] text-center text-lg text-gray-300">
        {t("home.hero.description")}
      </p>
      <div className="flex justify-center gap-4">
        <Button className="flex h-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none">
          <p>{t("get-started")}</p>
          <ArrowRight />
        </Button>
        <Button className="flex h-fit items-center gap-2 rounded-lg border px-5 py-3 font-medium text-white">
          {t("learn-more")}
        </Button>
      </div>
      <video
        preload="none"
        aria-label="Video player"
        className="absolute inset-0 h-full w-full -z-10 object-fill"
        autoPlay={true}
        loop
        muted
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
