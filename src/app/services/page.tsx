import { ServiceCard } from "@/components";
import { Title } from "@/components/base";
import React from "react";

export default function Services() {
  return (
    <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
      <Title className="text-center">Services</Title>
      <div className="grid auto-rows-[35rem] grid-cols-3 gap-10 my-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <p className="text-gray-500">
        * Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente
        harum asperiores autem adipisci officia quo, numquam mollitia laborum
        facere ipsam, dolor molestias! Minima, aliquid culpa. A aliquam quae
        rem.
      </p>
    </div>
  );
}
