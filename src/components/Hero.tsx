"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/components/utils";
import { Button } from "@/components/base";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero(props: HeroProps) {
  const t = useTranslations();

  // return (
  //   <section
  //     {...props}
  //     className={cn(
  //       "relative grid w-full place-content-center gap-14 overflow-hidden bg-primary-darker/90 px-4 py-20 lg:py-40",
  //       props.className,
  //     )}
  //   >
  //     <h1 className="mx-auto max-w-[32ch] text-center text-2xl font-extrabold leading-normal text-white lg:text-6xl lg:leading-normal">
  //       {t("home.hero.slogun")}
  //     </h1>
  //     <p className="mx-auto max-w-[72ch] text-center text-sm text-gray-300 lg:text-lg">
  //       {t("home.hero.description")}
  //     </p>
  //     <div className="flex justify-center gap-4">
  //       <Button
  //         className="flex h-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none"
  //         onClick={() => {
  //           document.querySelector("#about-section")?.scrollIntoView({
  //             behavior: "smooth",
  //           });
  //         }}
  //       >
  //         <p>{t("get-started")}</p>
  //         <ArrowRight />
  //       </Button>
  //       <Link href={"/about"}>
  //         <Button className="flex h-fit items-center gap-2 rounded-lg border px-5 py-3 font-medium text-white">
  //           {t("learn-more")}
  //         </Button>
  //       </Link>
  //     </div>
  //     <img
  //       src="/images/hero-bg.gif"
  //       alt=""
  //       className="absolute inset-0 -z-10 h-full w-full object-fill"
  //     />
  //   </section>
  // );

  return (
    <section
      {...props}
      className={cn(
        "min-h-screen w-full overflow-hidden py-28 lg:py-40",
        props.className,
      )}
    >
      <HeroBackground />

      <h1 className="max-w-[20ch] text-4xl font-extrabold leading-normal text-white lg:text-6xl lg:leading-normal">
        {t("home.hero.slogun")}
      </h1>
      <p className="max-w-[72ch] text-sm text-gray-300 lg:text-lg">
        {t("home.hero.description")}
      </p>

      <div className="mt-12 flex flex-col gap-4 xl:flex-row">
        <Button
          className="flex h-fit items-center gap-2 rounded-lg bg-primary px-12 py-3 font-medium text-white outline-none"
          onClick={() => {
            const headerEl = document.querySelector("#header");
            const aboutEl = document.querySelector("#about-section");

            window.scrollTo({
              top:
                (aboutEl?.getBoundingClientRect().top || 0) +
                window.scrollY -
                (headerEl?.clientHeight || 0) -
                20, // 20px for padding from header
              behavior: "smooth",
            });
          }}
        >
          <p>{t("get-started")}</p>
          <ArrowRight />
        </Button>
        <Link href={"/about"}>
          <Button className="flex h-fit w-full items-center gap-2 rounded-lg border px-12 py-3 font-medium text-white">
            {t("learn-more")}
          </Button>
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
