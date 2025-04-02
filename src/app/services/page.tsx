"use client";

import { Title } from "@/components/base";
import { SERVICES } from "@/data";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

function ServiceItem(props: (typeof SERVICES)[number]) {
  return (
    <div
      className="after:_border-gradient relative flex-[0_0_100%] overflow-hidden rounded-2xl p-8 after:absolute after:inset-0 after:-z-20 after:content-normal after:rounded-2xl after:border-2 after:border-[2px_solid_transparent] xl:flex-1"
      style={
        props.recommend
          ? {
              background:
                "radial-gradient(75.58% 75.58% at 50% 24.42%, rgba(0, 0, 0, 0.00) 0%, rgba(152, 203, 51, 0.18) 100%)",
            }
          : {}
      }
    >
      {props.recommend && (
        <div
          className="after:_border-gradient absolute right-0 top-0 rounded-bl-xl px-2 py-4 text-xs after:absolute after:inset-0 after:-z-10 after:content-normal after:rounded-bl-2xl after:rounded-tr-2xl after:border-2"
          style={{
            background:
              "linear-gradient(251deg, rgba(152, 203, 51, 0.56) 37.31%, rgba(0, 0, 0, 0.00) 114.02%)",
          }}
        >
          Highly Recommended
        </div>
      )}
      <h1 className="text-2xl font-bold">{props.name}</h1>
      <p className="mt-2 font-bold">
        Starting from <span className="text-primary">${props.startFrom}</span>
      </p>
      <button
        className="_border-gradient data-[recommend=true]:_border-gradient-white mt-4 w-full rounded-3xl border-2 py-2 font-medium data-[recommend=true]:text-primary"
        data-recommend={props.recommend}
      >
        {props.recommend ? "Start now" : "Contact Us"}
      </button>

      <hr className="my-4 h-0.5 w-full bg-white" />

      <p>{props.description}</p>

      <ul className="mt-4">
        {props.features.map((feature, i) => (
          <li
            key={i}
            className="relative pl-8 before:absolute before:left-0 before:top-1 before:content-check"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(1);
  }, [emblaApi]);

  return (
    <>
      <div className="mt-24">
        <Title className="py-6 text-center text-5xl text-primary">
          Services
        </Title>
        <p className="text-center text-lg">
          We're plan to make your business even bigger
        </p>
      </div>
      <div className="mx-auto my-10 w-[90%] max-w-[82rem] pb-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">
            {SERVICES.map((service, i) => (
              <ServiceItem key={i} {...service} />
            ))}
          </div>
        </div>
        <p className="mt-2 text-gray-400 xl:hidden">
          * Scroll to the left or right for more info
        </p>
        <p className="mt-10">
          Buon18 is your trusted partner in digital transformation. Whether
          you're a small business looking to expand your online presence or a
          large organization seeking custom IT solutions, we are here to provide
          you with innovative, cost-effective services that align with your
          goals and deliver results. Let us help you build the future of your
          business!
        </p>
      </div>
    </>
  );
}
