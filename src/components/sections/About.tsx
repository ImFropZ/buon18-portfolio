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
      <Title className="my-10 text-center">{t("about")}</Title>
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div className="flex flex-1 flex-col flex-wrap">
          <Title
            size={2}
            className="overflow-clip text-nowrap text-4xl text-gray-900"
          >
            We are passion
          </Title>
          <p className="mb-5 mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            adipisci aperiam exercitationem? Eius, necessitatibus ad? Eos enim
            cum perspiciatis repellendus commodi tempore, minus nihil id rem
            quod, eius eveniet aliquid.
          </p>
          <Link
            href="/about"
            className="mt-auto flex w-full justify-center gap-5 rounded-lg border py-2 hover:bg-gray-100"
          >
            <span>See more</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="grid place-content-center md:flex-1">
          <Image
            src="/images/handshake.jpg"
            width={500}
            height={500}
            alt="about us image"
            className="rounded-lg shadow-lg"
          ></Image>
        </div>
      </div>
    </section>
  );
}
