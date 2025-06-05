import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function About() {
  return (
    <section className="my-10" id="about-section">
      <div className="flex flex-col-reverse gap-10 md:flex-row xl:gap-60">
        <div className="relative hidden xl:block">
          <Image
            src="/person.png"
            width={311}
            height={548}
            alt="about us image"
            className="h-full"
            priority={true}
          ></Image>
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[50rem] w-[100rem] -translate-x-1/2 -translate-y-1/2 opacity-50"
            style={{
              background:
                "radial-gradient(40.91% 48.08% at 47.78% 47.9%, rgba(152, 203, 51, 0.45) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col flex-wrap gap-8">
          <h1 className="tracking-[0.3rem] text-zinc-300">ABOUT US</h1>
          <h2 className="text-2xl leading-[130%] text-gray-100 xl:text-5xl">
            At Buon18, we build fast, smart, and scalable solutions to power
            your business forward.
          </h2>
          <div className="leading-[130%] text-gray-100 xl:text-2xl">
            In a world where technology evolves daily, our team moves quickly to
            develop custom systems that solve real business problems.
          </div>
          <Link
            href="/about"
            prefetch={true}
            className="group flex w-fit gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-neutral-900 transition-all hover:px-6"
          >
            <p>Learn More</p>
            <ChevronRight className="hidden group-hover:block" />
          </Link>
        </div>
      </div>
    </section>
  );
}
