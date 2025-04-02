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
            className="overflow-clip text-nowrap py-2 text-3xl font-extrabold leading-normal text-primary md:text-5xl"
            translateKey="about.who-are-we"
          />
          <div className="my-10 text-lg">
            <p>{t("about.home.description-1")}</p>
            <br />
            <p>{t("about.home.description-2")}</p>
          </div>
          <Link
            href="/about"
            className="mt-14 flex w-full justify-center gap-2 rounded-lg border py-3.5 font-medium text-primary transition-all hover:bg-primary hover:text-white"
          >
            <span>{t("see-more")}</span>
            <ArrowRight className="text-white" />
          </Link>
        </div>
        <div className="relative flex-1">
          <Image
            src="/person.png"
            width={311}
            height={548}
            alt="about us image"
            className="absolute inset-0 ml-auto h-full"
            priority={false}
          ></Image>
        </div>
      </div>
    </section>
  );
}
