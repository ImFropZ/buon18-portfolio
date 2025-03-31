import { Title } from "@/components/base";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function About() {
  const t = useTranslations();

  return (
    <section className="my-10" id="about-section">
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div className="flex flex-1 flex-col flex-wrap">
          <Title
            className="overflow-clip text-nowrap py-2 text-3xl font-extrabold leading-normal text-[#1A56DB] md:text-5xl"
            translateKey="about.who-are-we"
          />
          <div className="my-10 text-lg text-gray-900">
            <p>{t("about.home.description-1")}</p>
            <br />
            <p>{t("about.home.description-2")}</p>
          </div>
          <Link
            href="/about"
            className="mt-14 flex w-full justify-center gap-2 rounded-lg border border-gray-900 py-3.5 font-medium hover:bg-gray-100"
          >
            <span>{t("see-more")}</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="relative grid flex-1 place-content-center">
          <Image
            src="/images/about.jpg"
            width={720}
            height={640}
            alt="about us image"
            className="absolute inset-0 h-full shadow-lg"
            priority={false}
            placeholder="blur"
            blurDataURL="/images/about-blur.jpg"
          ></Image>
        </div>
      </div>
    </section>
  );
}
