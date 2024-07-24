import Image from "next/image";
import React from "react";
import { Title, Button } from "@/components/base";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="my-10">
      <Title className="my-10 text-center">About</Title>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <Title
            size={2}
            className="overflow-clip text-nowrap text-4xl text-gray-900"
          >
            We are passion
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            adipisci aperiam exercitationem? Eius, necessitatibus ad? Eos enim
            cum perspiciatis repellendus commodi tempore, minus nihil id rem
            quod, eius eveniet aliquid.
          </p>
          <Button type="button" className="mt-auto flex justify-center gap-5">
            <span>See more</span>
            <ArrowRight />
          </Button>
        </div>
        <div className="grid place-content-center">
          <Image
            src="/assets/buon18-logo-icon.png"
            width={500}
            height={500}
            alt="about us image"
          ></Image>
        </div>
      </div>
    </section>
  );
}
