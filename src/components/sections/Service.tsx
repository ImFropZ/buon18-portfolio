import { Title } from "@/components/base";
import { ServiceCard } from "@/components";
import { SERVICES } from "@/data";
import React from "react";

const LESS_SERVICES = SERVICES.slice(0, 3);

export function Service() {
  return (
    <section className="my-10">
      <Title className="mt-10 text-center md:mb-10">Services</Title>
      {/* NOTE: Mobile View only */}
      <p className="my-5 text-center text-sm text-gray-500 md:hidden">
        Scroll to the right for more info
      </p>
      <div className="relative flex w-full snap-x snap-mandatory gap-10 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
        {/* TODO: Remove this in production */}
        {Array.from({ length: 3 }).map(() =>
          LESS_SERVICES.map((service) => (
            <ServiceCard
              key={service.name}
              {...service}
              className="relative min-w-full snap-start"
            />
          )),
        )}
      </div>
    </section>
  );
}
