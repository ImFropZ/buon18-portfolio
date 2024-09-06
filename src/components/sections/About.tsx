import { Title } from "@/components/base";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function About() {
  const t = useTranslations();

  return (
    <section className="my-20" id="about-section">
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div className="flex flex-1 flex-col flex-wrap">
          <Title
            size={1}
            className="overflow-clip text-nowrap text-5xl font-extrabold text-[#1A56DB]"
          >
            Who are we?
          </Title>
          <div className="my-10 text-lg text-gray-900">
            <p>
              Buon18 was established by a group of passionate students in 2022,
              with a shared vision of becoming a leading provider of IT
              solutions for businesses. What began as a small freelancing
              initiative has grown into a robust tech agency committed to
              driving digital transformation across various industries.
            </p>
            <br />
            <p>
              Our team is composed of skilled developers and creative designers
              who work together to deliver high-quality, customized solutions
              tailored to the unique needs of each client.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-14 flex w-full justify-center gap-2 rounded-lg border border-gray-900 py-3.5 font-medium hover:bg-gray-100"
          >
            <span>See more</span>
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
