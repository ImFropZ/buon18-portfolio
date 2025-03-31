import { Title } from "@/components/base";
import { ServiceCard } from "@/components";
import { SERVICES } from "@/data";
import React from "react";
import { useTranslations } from "next-intl";

const LESS_SERVICES = SERVICES.slice(0, 3);

export function Service() {
  const t = useTranslations();

  return (
    <section className="my-10">
      <Title
        className="mt-10 text-center text-5xl text-primary md:mb-10"
        translateKey="service.nav"
      />
      {/* NOTE: Mobile View only */}
      <p className="my-5 text-center text-sm text-gray-500 md:hidden">
        {t("scroll-to-right")}
      </p>
      <div className="relative flex w-full snap-x snap-mandatory gap-10 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3">
        {LESS_SERVICES.map((service) => (
          <div
            key={service.name}
            className="relative min-w-full snap-start p-2"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
