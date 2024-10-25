import React from "react";
import { Title } from "../base";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Technology() {
  const t = useTranslations();

  return (
    <section>
      <Title
        className="mt-10 text-center text-5xl text-primary md:mb-10"
        translateKey="technology.title"
      />
      <p className="text-center text-gray-700 mt-2 md:mt-0">{t("technology.description")}</p>
      <div className="mt-6 grid auto-rows-[3rem] gap-4 p-4 md:auto-rows-[8rem] md:gap-10">
        <div className="flex justify-center gap-6">
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/aws.jpg"
              alt="AWS"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/vercel.jpg"
              alt="Vercel"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/docker.jpg"
              alt="Docker"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/github.jpg"
              alt="Github"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/tailwind-css.jpg"
              alt="Tailwind CSS"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/next-js.jpg"
              alt="Next JS"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/html.jpg"
              alt="HTML"
              className="flex-1 rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/css.jpg"
              alt="CSS"
              className="flex-1 rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>

          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/js.jpg"
              alt="JavaScript"
              className="flex-1 rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/ts.jpg"
              alt="TypeScript"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/postgres-db.jpg"
              alt="Postgres Database"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/mongo-db.jpg"
              alt="Mongo Database"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/firebase.jpg"
              alt="Firebase"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/redis.jpg"
              alt="Redis"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/kafka.jpg"
              alt="Kafka"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/golang.jpg"
              alt="GoLang"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/java.jpg"
              alt="Java"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/spring-boot.jpg"
              alt="Spring Boot"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
          <div className="aspect-square h-full">
            <Image
              src="/images/technologies/node-js.jpg"
              alt="Node JS"
              className="rounded-lg shadow"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
