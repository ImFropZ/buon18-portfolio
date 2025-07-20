"use client";

import React from "react";
import { cn } from "./utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";

interface ProjectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

function ProjectItem({ title, description, ...props }: ProjectItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 px-10 py-14 backdrop-blur",
        props.className,
      )}
    >
      <motion.div
        initial={{ left: "-100%" }}
        animate={{ left: isInView ? "200%" : "-100%" }}
        className="absolute -top-1/2 h-[200%] w-12 -translate-x-full rotate-45 bg-gradient-to-r from-white/0 to-white/10 duration-500 ease-linear"
      ></motion.div>
      <h2 className="text-2xl xl:text-4xl">{title}</h2>
      <p className="mt-6 xl:text-xl">{description}</p>
      <ArrowRight
        className="absolute bottom-8 right-10 w-fit text-[#707378]"
        size={32}
        strokeWidth={4}
      />
    </div>
  );
}

export function Project() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 xl:gap-y-2">
      <ProjectItem
        title="Quiz Lobby"
        description="QuizLobby is a fun, easy way for students to practice university-level quizzes and prep with confidence."
      />
      <div className="col-span-2 hidden pl-32 xl:block">
        <h1 className="mb-10 tracking-[0.3rem] text-zinc-300">
          OUR LATEST PROJECT
        </h1>
        <p className="text-5xl text-gray-100">
          Check out our latest project — <br /> built with care and creativity.
        </p>
      </div>
      <ProjectItem
        className="xl:col-start-2"
        title="Restaurant System"
        description="A smart, customizable restaurant system designed to simplify ordering, manage inventory, and speed up service — all in one place."
      />
      <div className="col-span-2 mt-auto hidden xl:block">
        <p className="mb-8 text-5xl text-gray-100">
          Start your project <br /> with us today!
        </p>
        <Link
          href="/about"
          className="w-fit rounded-xl bg-primary px-12 py-4 font-bold text-neutral-900"
        >
          Start Now
        </Link>
      </div>
      <ProjectItem
        className="md:col-span-2 xl:col-span-1"
        title="CreativeDesign"
        description="Creative design solutions that blend UX/UI and visual storytelling to elevate user experience and communicate your brand with clarity and impact."
      />
      <div className="md:col-span-2 md:flex md:items-center md:justify-between xl:hidden">
        <p className="mb-8 text-3xl font-bold text-gray-100 md:mb-0">
          Start your project with us today!
        </p>
        <Link
          href="/about"
          className="block w-full rounded-xl bg-primary px-12 py-4 text-center font-bold text-neutral-900 md:w-fit"
        >
          Start Now
        </Link>
      </div>
    </section>
  );
}
