"use client";

import React from "react";
import { ArrowRight, Brush, Monitor, Settings } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface ServiceItemProps {
  large?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="relative flex w-full flex-col md:flex-[1_0_calc(50%-1rem)] xl:flex-1 xl:p-8">
      <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-10 backdrop-blur md:h-[28rem]">
        <motion.div
          key={"sheen"}
          initial={{ translateX: "-44rem", rotate: "45deg" }}
          animate={{ translateX: "44rem", rotate: "45deg" }}
          className="absolute -bottom-1/2 -top-1/2 w-12 bg-gradient-to-r from-white/0 to-white/10 duration-500 ease-linear"
        ></motion.div>
        <div className="rounded-full bg-primary p-3 text-secondary">
          <div className="h-8 w-8 [&>svg]:h-full [&>svg]:w-full">
            {props.icon}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="mt-6 text-center text-3xl font-medium text-gray-100">
            {props.title}
          </h2>
          <p className="mx-auto max-w-72 text-center text-xl font-light text-white/60">
            {props.description}
          </p>
        </div>
      </div>
      {props.large && (
        <Link
          href={"/services"}
          className="mt-4 hidden flex-1 items-end justify-between rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 px-10 py-4 text-2xl font-light backdrop-blur xl:flex"
        >
          <p>
            Explore our <br />
            Services
          </p>
          <ArrowRight />
        </Link>
      )}
    </div>
  );
}

export function Service() {
  return (
    <section className="my-10">
      <div className="flex flex-col flex-wrap items-end justify-center gap-4 md:flex-row xl:gap-0">
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
        <Link
          href={"/services"}
          className="mt-4 flex h-full w-full flex-1 items-end justify-between rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 px-10 py-4 text-2xl font-light backdrop-blur md:flex-[1_0_calc(50%-1rem)] xl:hidden"
        >
          <p>
            Explore our <br />
            Services
          </p>
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
