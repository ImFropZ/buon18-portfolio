import { Button, Title } from "@/components/base";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../utils";
import React from "react";
import { Service } from "@/data";
import Link from "next/link";

interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Service {}

export function ServiceCard({
  type,
  name,
  description,
  price,
  availableServices,
  unavailableServices,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <div
      {...props}
      className={cn("flex flex-col rounded border p-5", className)}
    >
      <p className="text-xl text-gray-500">{name}</p>
      <Title size={2} className="my-2 text-5xl text-gray-900">
        ${price}
        <span
          className="text-xl font-normal text-gray-500"
          hidden={type !== "MONTHLY"}
        >
          /month
        </span>
      </Title>
      <p className="mb-5 text-gray-500">{description}</p>
      <div className="flex flex-col gap-2 pb-10">
        {availableServices.map((service) => (
          <ServicePoint key={service.label} state={true} text={service.label} />
        ))}
        {unavailableServices.map((service) => (
          <ServicePoint
            key={service.label}
            state={false}
            text={service.label}
          />
        ))}
      </div>
      <Link href="/contact">
        <Button className="mt-auto w-full rounded-lg bg-primary py-2 text-gray-50 outline-none hover:bg-primary">
          Contact Us
        </Button>
      </Link>
    </div>
  );
}

function ServicePoint({ state, text }: { state: boolean; text: string }) {
  return (
    <div className="flex gap-2">
      <CheckCircle2
        className={cn("stroke-white", state ? "fill-primary" : "fill-gray-400")}
      />
      <span className={cn("text-gray-700", state ? "" : "line-through")}>
        {text}
      </span>
    </div>
  );
}
