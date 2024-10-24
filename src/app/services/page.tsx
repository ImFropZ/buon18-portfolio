import { ServiceCard } from "@/components";
import { Title } from "@/components/base";
import { SERVICES } from "@/data";
import { useTranslations } from "next-intl";
import React from "react";

export default function Services() {
  const t = useTranslations();

  return (
    <>
      <div className="bg-primary-darker">
        <Title
          className="py-6 text-center text-5xl"
          translateKey="service.nav"
        />
      </div>
      <div className="mx-auto my-6 w-[90%] max-w-[82rem] pb-10">
        <p className="text-lg">{t("service.description")}</p>
        <div className="mx-auto my-10 grid grid-cols-[repeat(auto-fill,minmax(0,24rem))] place-content-center gap-10">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              className="flex-1 basis-80"
            />
          ))}
        </div>
        <p className="text-gray-500">* {t("service.warning")}</p>
      </div>
    </>
  );
}
