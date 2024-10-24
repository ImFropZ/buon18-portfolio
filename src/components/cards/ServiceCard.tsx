import { Button, Title } from "@/components/base";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../utils";
import React from "react";
import { Service } from "@/data";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  service: Service;
}

export function ServiceCard({
  service,
  className,
  ...props
}: ServiceCardProps) {
  const t = useTranslations();

  return (
    <div
      {...props}
      className={cn(
        "relative flex flex-col rounded border p-5",
        service.isPopular && "outline outline-4 outline-primary",
        className,
      )}
    >
      {service.isPopular && (
        <span className="absolute right-2 top-2 rounded-md bg-primary px-2 py-1 text-gray-50">
          {t("service.card.popular")}
        </span>
      )}
      <p className="text-xl text-gray-500">{service.name}</p>
      <Title
        size={2}
        className={cn(
          "my-2 text-5xl text-gray-900",
          service.isPopular && "_3d-text text-primary-dark",
        )}
      >
        {typeof service.price === "string" ? "" : "$"}
        {service.price}
        {service.isMore && "+"}
        <span
          className="text-xl font-normal text-gray-500"
          hidden={service.type !== "MONTHLY"}
        >
          /month
        </span>
      </Title>
      <p className="mb-5 text-gray-500">{service.description}</p>
      <div className="flex flex-col gap-2 pb-10">
        {service.availableServices.map((service) => (
          <ServicePoint key={service.label} state={true} text={service.label} />
        ))}
        {service.unavailableServices.map((service) => (
          <ServicePoint
            key={service.label}
            state={false}
            text={service.label}
          />
        ))}
      </div>
      <Link href="/contact" className="mt-auto">
        <Button className="mt-auto w-full rounded-lg bg-primary py-2 text-gray-50 outline-none hover:bg-primary">
          {t("service.card.contact")}
        </Button>
      </Link>
    </div>
  );
}

function ServicePoint({ state, text }: { state: boolean; text: string }) {
  return (
    <div className="flex h-fit gap-2">
      <div>
        <CheckCircle2
          className={cn(
            "stroke-white",
            state ? "fill-primary" : "fill-gray-400",
          )}
        />
      </div>
      <span className={cn("text-gray-700", state ? "" : "line-through")}>
        {text}
      </span>
    </div>
  );
}
