import { Title } from "@/components/base";
import Image from "next/image";
import React from "react";

const WHY_WORK_WITH_US = [
  {
    title: "Fast, Flexible, and Focused",
    description:
      "As a small, agile team, we adapt quickly, communicate clearly, and deliver results without delays.",
  },
  {
    title: "Affordable Without Compromise",
    description:
      "We offer high-quality services at fair prices, perfect for small and growing businesses.",
  },
  {
    title: "Tech Meets Creativity",
    description:
      "With developers and designers working closely together, we make sure function and form go hand in hand.",
  },
  {
    title: "Rooted in Local Insight",
    description:
      "As a Cambodia-based team, we understand the local business landscape and how to bring real value through digital transformation.",
  },
];

const TEAM = [
  {
    name: "Tangmeng Lim",
    role: "Developer",
    description:
      "I connect front and back ends to create smooth, functional platforms.",
    picture: "https://loremfaces.net/128/id/2.jpg",
  },
  {
    name: "Viteary Phay",
    role: "Designer",
    description: "I design visuals that are clear, creative, and on-brand.",
    picture: "https://loremfaces.net/128/id/1.jpg",
  },
  {
    name: "Chansopheak Oum",
    role: "Developer",
    description: "I turn designs into responsive, user-friendly interfaces.",
    picture: "https://loremfaces.net/128/id/3.jpg",
  },
  {
    name: "Chan Ey Heng",
    role: "Designer",
    description: "I craft visual content that tells your brand's story.",
    picture: "https://loremfaces.net/128/id/5.jpg",
  },
  {
    name: "Sotharoth Yim",
    role: "Developer",
    description: "I build the systems that keep everything running smoothly.",
    picture: "https://loremfaces.net/128/id/4.jpg",
  },
];

export default function About() {
  return (
    <>
      <Title className="mt-24 py-6 text-center text-5xl text-primary">
        About Us
      </Title>
      <div className="mx-auto w-[90%] max-w-7xl pb-10">
        <div className="mb-10 grid grid-rows-1 items-center gap-20 md:mb-0 md:grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
          <div className="flex flex-col justify-between xl:h-full">
            <h2 className="text-3xl font-bold xl:text-5xl">
              Building Digital Solutions with Heart and Hustle
            </h2>
            <p className="max-w-[36rem] text-lg leading-[150%] xl:text-2xl">
              Buon18 is a team of tech enthusiasts from Cambodia, founded in
              2022 by ambitious students. Starting as freelancers, we now offer
              tailored digital solutions that help local businesses grow with
              confidence.
            </p>
          </div>
          <div className="relative inset-0 row-start-1 hidden items-center justify-center md:flex xl:row-start-auto">
            <Image src="/about-buon18.png" alt="" width={434} height={341} />
            <div
              className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[50rem] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(40.91% 48.08% at 47.78% 47.9%, rgba(152, 203, 51, 0.45) 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            />
          </div>
        </div>
        <div className="grid gap-4 xl:mt-20 xl:grid-cols-2 xl:gap-20">
          <div className="rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-4 xl:p-16">
            <h2 className="text-2xl font-bold text-primary xl:text-[2.5rem]">
              Our Mission
            </h2>
            <p className="mt-7 xl:text-2xl">
              To provide practical, affordable, and customized digital solutions
              that help local businesses grow — through smart systems, creative
              design, and reliable development.
            </p>
          </div>
          <div className="h-fit self-end rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-4 xl:p-12">
            <h2 className="text-2xl font-bold text-primary xl:text-[2rem]">
              Our Vision
            </h2>
            <p className="mt-5 xl:text-xl">
              To be a trusted freelance team that supports the digital journey
              of small and growing businesses across Cambodia — turning everyday
              ideas into real, working solutions.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <h2 className="text-center text-4xl font-bold text-primary">
            Meet the Team Behind Buon18
          </h2>
          <p className="mx-auto mb-12 mt-8 max-w-[44rem] text-center text-2xl leading-[120%]">
            We&apos;re a passionate group of developers and designers working
            together to turn ideas into real, impactful solutions — built with
            creativity, care, and collaboration.
          </p>
          <div className="grid items-center gap-4 md:gap-8 xl:grid-cols-2 xl:gap-20">
            {TEAM.map((member, i) => {
              if (i === TEAM.length - 1) {
                return (
                  <div className="xl:col-span-2" key={i}>
                    <div className="mx-auto flex flex-col-reverse items-center rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-2 md:flex-row md:p-10 xl:max-w-[calc(50%-2.5rem)]">
                      <div className="mt-2 flex flex-1 flex-col-reverse gap-2 self-start md:flex-col">
                        <p className="leading-7 text-white/60 md:max-w-96 md:text-xl">
                          {member.description}
                        </p>
                        <h3 className="text-lg md:text-2xl">
                          {member.name}{" "}
                          <span className="text-white/60 md:text-xl">
                            \ <br className="hidden md:block" />
                            {member.role}
                          </span>
                        </h3>
                      </div>
                      <img
                        src={member.picture}
                        alt=""
                        className="aspect-square h-full w-16 rounded-full md:w-auto"
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div
                  className="flex flex-col-reverse items-center rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-2 md:flex-row md:p-10"
                  key={i}
                >
                  <div className="mt-2 flex flex-1 flex-col-reverse gap-2 self-start md:flex-col">
                    <p className="leading-7 text-white/60 md:max-w-96 md:text-xl">
                      {member.description}
                    </p>
                    <h3 className="text-lg md:text-2xl">
                      {member.name}{" "}
                      <span className="text-white/60 md:text-xl">
                        \ <br className="hidden md:block" />
                        {member.role}
                      </span>
                    </h3>
                  </div>
                  <img
                    src={member.picture}
                    alt=""
                    className="aspect-square h-full w-16 rounded-full md:w-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-32 grid xl:grid-cols-2">
          <div>
            <h2 className="text-7xl font-medium text-primary">
              Why Work <br className="md:hidden" /> With Us?
            </h2>
            <p className="max-w-[28rem] text-xl leading-[150%] xl:hidden">
              At Buon18, we&apos;re more than just a freelance team — we&apos;re
              your digital partner. Here&apos;s what sets us apart:
            </p>
            <div className="mt-20 grid gap-12 xl:grid-cols-2">
              {WHY_WORK_WITH_US.map((item, i) => (
                <div className="flex gap-6 text-lg" key={i}>
                  <span className="flex flex-col gap-2">
                    <p>0</p>
                    <p>{i + 1}</p>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden flex-col items-center xl:flex">
            <p className="max-w-[28rem] text-xl leading-[150%]">
              At Buon18, we&apos;re more than just a freelance team — we&apos;re
              your digital partner. Here&apos;s what sets us apart:
            </p>
            <div className="relative flex flex-1 items-center justify-center">
              <Image src="/light-bulb.png" alt="" width={217} height={291} />
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
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
