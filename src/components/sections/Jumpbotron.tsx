import React from "react";
import { Button, Title } from "@/components/base";
import { ArrowRight } from "lucide-react";

export function Jumpbotron() {
  return (
    <section className="my-20 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <Title className="text-6xl">
          We invest in the world&apos;s potential
        </Title>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          eum aliquam provident excepturi nostrum nesciunt
        </p>
        <div className="flex gap-4">
          <Button className="flex gap-2 rounded-lg bg-primary px-5 py-3 text-gray-50 outline-none hover:bg-primary">
            <span>Get started</span>
            <ArrowRight strokeWidth={4} />
          </Button>
          <Button className="flex gap-2 rounded-lg px-5 py-3 text-gray-800 outline">
            <span>Learn more</span>
          </Button>
        </div>
      </div>
      <div className="relative aspect-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/wCUtvcEJuf0?si=U7nhpHWfDrz1swPN"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute h-full w-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
