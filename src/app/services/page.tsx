"use client";

import { Title } from "@/components/base";
import { SERVICES } from "@/data";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ArrowRight, Triangle } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/components/utils";

function ServiceItem(props: (typeof SERVICES)[number]) {
  return (
    <div
      className="after:_border-gradient relative flex-[0_0_98%] overflow-hidden rounded-2xl p-8 after:absolute after:inset-0 after:-z-20 after:content-normal after:rounded-2xl after:border-2 after:border-[2px_solid_transparent] md:flex-[0_0_50%] xl:flex-1"
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

interface CollapsibleItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  toggleCollapsible: () => void;
  open: boolean;
}

function CollapsibleItem({
  title,
  description,
  toggleCollapsible,
  open,
  ...props
}: CollapsibleItemProps) {
  return (
    <div
      {...props}
      data-open={open}
      className={cn(
        "relative space-y-8 rounded-3xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-10 backdrop-blur",
        props.className,
      )}
      onClick={toggleCollapsible}
    >
      <h2 className="w-[90%] max-w-[26rem] text-lg font-medium capitalize text-primary md:text-2xl">
        {title}
      </h2>
      <Triangle
        className="absolute right-10 top-6 rotate-90 fill-pink-50 stroke-pink-50 transition-transform data-[open=true]:rotate-180"
        size={16}
        strokeWidth={4}
        data-open={open}
      />
      <AnimatePresence>
        {open && (
          <motion.p
            key="modal"
            className="text-sm capitalize md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: {
      "(min-width: 80rem)": { active: false },
    },
  });

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(1);
  }, [emblaApi]);

  const [collapsibleState, setCollapsibleState] = React.useState([
    true,
    false,
    false,
    false,
  ]);

  const toggleCollapsible = (toggleIndex: number) => {
    if (toggleIndex > 3 || toggleIndex < 0) return;
    setCollapsibleState((prev) => {
      const state = [false, false, false, false];
      state[toggleIndex] = !prev[toggleIndex];
      return state;
    });
  };

  return (
    <>
      <div className="mt-24">
        <Title className="py-6 text-center text-5xl text-primary">
          Services
        </Title>
        <p className="text-center text-lg">
          We&apos;re plan to make your business even bigger
        </p>
      </div>
      <div className="mx-auto my-10 w-[90%] max-w-7xl pb-10">
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
          you&apos;re a small business looking to expand your online presence or
          a large organization seeking custom IT solutions, we are here to
          provide you with innovative, cost-effective services that align with
          your goals and deliver results. Let us help you build the future of
          your business!
        </p>

        <div className="mt-10 grid items-center gap-4 rounded-2xl border border-primary bg-gradient-to-b from-primary to-primary/10 p-6 lg:grid-cols-3 lg:grid-rows-1 lg:p-12">
          <div className="lg:col-span-2">
            <Title className="text-3xl xl:text-6xl">
              Bring Your Business Online <br className="hidden xl:block" /> with
              Buon18
            </Title>
            <p className="lg:text-start lg:text-xl xl:mt-6 xl:text-center">
              Custom IT Solutions Designed for Cambodian Businesses
            </p>
          </div>
          <Link
            href="/contact"
            prefetch={true}
            className="mx-auto flex w-fit items-center gap-2 rounded-xl bg-black px-16 py-3 text-xl font-medium text-primary transition-colors"
          >
            <span>Start now</span>
            <ArrowRight />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-20 xl:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-medium md:text-[4rem]">
              Got Questions? <br />
              We&apos;ve Got Answers.
            </h1>
            <p className="capitalize xl:hidden">
              Here are some quick answers to the most common questions about our
              services — from development to design and everything in between.
            </p>
            <div className="flex flex-col gap-4">
              <CollapsibleItem
                title="Do you offer ready-made or custom websites?"
                description="Both. Choose a template or go fully custom — your call."
                toggleCollapsible={() => toggleCollapsible(0)}
                open={collapsibleState[0]}
              />
              <CollapsibleItem
                title="How long does a project take?"
                description=""
                toggleCollapsible={() => toggleCollapsible(1)}
                open={collapsibleState[1]}
              />
              <CollapsibleItem
                title="How do I start?"
                description=""
                toggleCollapsible={() => toggleCollapsible(2)}
                open={collapsibleState[2]}
              />
              <CollapsibleItem
                title="Can I customize the POS system?"
                description=""
                toggleCollapsible={() => toggleCollapsible(3)}
                open={collapsibleState[3]}
              />
            </div>
          </div>
          <div className="hidden xl:block">
            <p className="w-[32rem] text-xl capitalize">
              Here are some quick answers to the most common questions about our
              services — from development to design and everything in between.
            </p>
            <div className="relative mt-40 p-20">
              <Image
                src="/question-marks.svg"
                alt=""
                width={489}
                height={388}
                className="scale-125"
              />
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-50"
                style={{
                  background:
                    "radial-gradient(40.91% 48.08% at 47.78% 47.9%, rgba(152, 203, 51, 0.45) 0%, rgba(0, 0, 0, 0.00) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
