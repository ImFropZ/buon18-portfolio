import { Title } from "@/components/base";
import { ServiceCard } from "@/components";
import { SERVICES } from "@/data";
import React from "react";

const LESS_SERVICES = SERVICES.slice(0, 3);

export function Service() {
  return (
    <section className="my-10">
      <Title className="my-10 text-center">Services</Title>
      <div className="grid h-96 grid-cols-3 gap-20">
        {LESS_SERVICES.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
}
