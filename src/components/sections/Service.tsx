import React from "react";
import { Title } from "@/components/base";
import { ServiceCard } from "@/components";

export function Service() {
  return (
    <section className="my-10">
      <Title className="my-10 text-center">Services</Title>
      <div className="grid h-96 grid-cols-3 gap-20">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
