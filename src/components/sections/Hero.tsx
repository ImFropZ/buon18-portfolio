"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/components/utils";
import { Button } from "@/components/base";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero({ ...props }: HeroProps) {
  const t = useTranslations();

  return (
    <section
      {...props}
      className={cn(
        "relative grid w-full place-content-center gap-14 overflow-hidden bg-primary-darker/90 px-4 py-20 lg:py-40",
        props.className,
      )}
    >
      <h1 className="mx-auto max-w-[32ch] text-center text-2xl font-extrabold leading-normal text-white lg:text-6xl lg:leading-normal">
        {t("home.hero.slogun")}
      </h1>
      <p className="mx-auto max-w-[72ch] text-center text-sm text-gray-300 lg:text-lg">
        {t("home.hero.description")}
      </p>
      <div className="flex justify-center gap-4">
        <Button
          className="flex h-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none"
          onClick={() => {
            document.querySelector("#about-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <p>{t("get-started")}</p>
          <ArrowRight />
        </Button>
        <Link href={"/about"}>
          <Button className="flex h-fit items-center gap-2 rounded-lg border px-5 py-3 font-medium text-white">
            {t("learn-more")}
          </Button>
        </Link>
      </div>
      <img
        src="/images/hero-bg.gif"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-fill"
      />
    </section>
  );
}
