import { Title } from "@/components/base";
import React from "react";
import { Brush, Monitor, Settings } from "lucide-react";

interface ServiceItemProps {
  large?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="relative p-8">
      <div
        className="_border-gradient absolute inset-0 -z-10 rounded-xl xl:data-[large=true]:-bottom-12 xl:data-[large=true]:-top-12"
        data-large={props.large ? "true" : "false"}
      ></div>
      <div className="w-fit rounded-full bg-primary p-3 text-black">
        <div className="h-8 w-8 [&>svg]:h-full [&>svg]:w-full">
          {props.icon}
        </div>
      </div>
      <div>
        <h2 className="mt-6 text-3xl font-bold">{props.title}</h2>
        <p className="text-xl text-gray-100">{props.description}</p>
      </div>
    </div>
  );
}

export function Service() {
  return (
    <section className="my-10">
      <Title className="mt-10 text-center text-5xl text-primary md:mb-10">
        Service
      </Title>

      <div className="grid place-content-baseline gap-8 pt-12 xl:grid-cols-3 xl:gap-12">
        <ServiceItem
          icon={<Settings />}
          title="POS & In-House Systems"
          description="Custom-built Point of Sale (POS) and internal management systems to optimize workflow, increase efficiency, and improve business processes."
        />
        <ServiceItem
          icon={<Monitor />}
          title="Web Development"
          description="We create responsive and scalable websites tailored to your business, ensuring a smooth user experience and strong online presence."
          large={true}
        />
        <ServiceItem
          icon={<Brush />}
          title="Design"
          description="Intuitive, user-friendly interfaces designed to improve user engagement and create a smooth digital experience."
        />
      </div>
    </section>
  );
}
