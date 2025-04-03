import { Button, Title } from "@/components/base";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Jumpbotron() {
  return (
    <section className="mt-20 bg-primary py-20">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-wrap gap-10">
        <div className="flex flex-1 flex-col gap-5">
          <Title className="text-6xl text-secondary">
            Transform your digital world with Buon18!
          </Title>
          <p className="text-secondary">
            We specialize in custom web development, POS systems, and creative
            design solutions to help your business grow in the digital age.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="flex gap-2 rounded-lg bg-secondary px-5 py-3 text-primary outline-none hover:bg-primary hover:text-secondary hover:outline-2 hover:outline-secondary">
                <span>Get started</span>
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/about">
              <Button className="flex gap-2 rounded-lg border border-secondary px-5 py-3 text-secondary">
                <span>Learn more</span>
              </Button>
            </Link>
          </div>
        </div>
        <iframe
          src={process.env.NEXT_PUBLIC_IFRAME_YOUTUBE}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video h-full w-full flex-none rounded-xl shadow-lg md:flex-1 xl:max-w-lg"
        ></iframe>
      </div>
    </section>
  );
}
