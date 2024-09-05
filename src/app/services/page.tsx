import { ServiceCard } from "@/components";
import { Title } from "@/components/base";
import { SERVICES } from "@/data";
import { useTranslations } from "next-intl";
import React from "react";

export default function Services() {
  const t = useTranslations();

  return (
    <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
      <Title className="text-center">{t("service")}</Title>
      <div className="wrap mx-auto my-10 flex flex-wrap gap-10">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.name}
            {...service}
            className="flex-1 basis-80"
          />
        ))}
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
