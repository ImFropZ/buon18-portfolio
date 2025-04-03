import React from "react";
import { Title } from "./base";
import { Work as IWork, WORKS } from "@/data";
import { useTranslations } from "next-intl";
import { cn } from "./utils";
import { Package } from "lucide-react";
import Link from "next/link";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  work: IWork;
}

function WorkItem({ work, className, ...props }: WorkCardProps) {
  const t = useTranslations();

  return (
    <div
      {...props}
      className={cn(
        "relative grid overflow-hidden rounded-lg shadow",
        className,
      )}
    >
      <div className="relative max-h-40">
        <img
          src={work.image.src}
          alt={work.image.alt}
          className="h-full w-full object-cover"
        />
        <Package
          size={64}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
        />
      </div>
      <div className="relative p-5">
        <Title
          size={3}
          className="text-center text-2xl font-bold text-secondary"
        >
          {t(`about.our-work.work.${work.translateKey}.title`)}
        </Title>
        <p className="mx-auto mt-5 w-[90%] text-center text-gray-500">
          {t(`about.our-work.work.${work.translateKey}.description`)}
        </p>
        <Link
          href={work.href}
          target="_blank"
          className="group/button mt-5 block w-full rounded py-1 text-center outline outline-2 hover:bg-primary hover:outline-gray-300"
        >
          <span className="group-hover/button:text-white">
            {t(`learn-more`)}
          </span>
        </Link>
      </div>
    </div>
  );
}

export function Work() {
  const t = useTranslations();

  return (
    <div className="my-10">
      <Title size={2} className="mb-5 text-4xl text-gray-900">
        {t("about.our-work.title")}
      </Title>
      <p className="my-4 text-gray-500">{t("about.our-work.description")}</p>
      {/* NOTE: Mobile View only */}
      {WORKS.length < 2 ? null : (
        <p className="my-5 text-center text-sm text-gray-500 md:hidden">
          {t("scroll-to-right")}
        </p>
      )}
      <div className="relative flex w-full snap-x snap-mandatory gap-10 overflow-x-auto pb-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(0,20rem))] md:overflow-visible md:pb-0">
        {WORKS.map((work, i) => (
          <WorkItem
            key={i}
            work={work}
            className="relative min-w-full snap-start"
          />
        ))}
      </div>
    </div>
  );
}
