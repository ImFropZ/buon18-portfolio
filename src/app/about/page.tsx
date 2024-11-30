import { WorkCard } from "@/components";
import { Title } from "@/components/base";
import { WORKS } from "@/data";
import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const t = useTranslations();

  return (
    <>
      <div className="bg-gradient-to-t from-primary-dark to-primary-darker py-20">
        <Title className="text-center text-5xl text-gray-50">
          {t("about.nav")} {t("buon18")}
        </Title>
        <p className="mx-auto mt-12 w-[90%] max-w-[95ch] text-center text-lg text-gray-50">
          {t("about.home.description-1")} <br /> {t("about.home.description-2")}
        </p>
      </div>
      <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            {t("about.who-are-we")}
          </Title>
          <p className="text-lg text-gray-500">{t("about.information")}</p>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            {t("about.our-work.title")}
          </Title>
          <p className="my-4 text-gray-500">
            {t("about.our-work.description")}
          </p>
          {/* NOTE: Mobile View only */}
          {WORKS.length < 2 ? null : (
            <p className="my-5 text-center text-sm text-gray-500 md:hidden">
              {t("scroll-to-right")}
            </p>
          )}
          <div className="relative flex w-full snap-x snap-mandatory gap-10 overflow-x-auto pb-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(0,20rem))] md:overflow-visible md:pb-0">
            {WORKS.map((work, i) => (
              <WorkCard
                key={i}
                work={work}
                className="relative min-w-full snap-start"
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            {t("about.our-vision.title")}
          </Title>
          <p className="text-lg text-gray-700">
            {t("about.our-vision.description")}
          </p>
          <ul className="my-2 list-inside list-disc text-lg text-gray-500">
            <li>{t("about.our-vision.visions.0")}</li>
            <li>{t("about.our-vision.visions.1")}</li>
            <li>{t("about.our-vision.visions.2")}</li>
          </ul>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            {t("about.our-mission.title")}
          </Title>
          <p className="my-4 text-gray-500">
            {t("about.our-mission.description")}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Title size={3} className="text-xl text-gray-900">
                {t("about.our-mission.short-term-goal")}
              </Title>
              <div className="mt-2">
                <p className="text-lg font-bold">
                  {t("about.our-mission.mission.now.time")}
                </p>
                <p className="text-gray-500">
                  {t("about.our-mission.mission.now.description")}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  {t("about.our-mission.mission.6-months.time")}
                </p>
                <p className="text-gray-500">
                  {t("about.our-mission.mission.6-months.description")}
                </p>
              </div>
            </div>
            <div>
              <Title size={3} className="text-xl text-gray-900">
                {t("about.our-mission.long-term-goal")}
              </Title>
              <div className="mt-2">
                <p className="text-lg font-bold">
                  {t("about.our-mission.mission.1-year.time")}
                </p>
                <p className="text-gray-500">
                  {t("about.our-mission.mission.1-year.description")}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  {t("about.our-mission.mission.2-years.time")}
                </p>
                <p className="text-gray-500">
                  {t("about.our-mission.mission.2-years.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
