"use client";

import { Title } from "@/components/base";
import { BLOGS } from "@/data";
import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "./utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function BlogCard({
  title,
  description,
  image,
  href,
  className,
  ...props
}: BlogCardProps) {
  const t = useTranslations();

  return (
    <div
      {...props}
      className={cn(
        "_border-gradient grid grid-rows-[auto,1fr] overflow-hidden rounded-lg",
        className,
      )}
    >
      <div className="relative h-48">
        <Image
          width={410}
          height={230}
          src={image}
          alt="blog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <Title size={2} className="text-2xl font-bold">
          {title}
        </Title>
        <p>
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description || ""}
        </p>
        <Link
          href={href || "#"}
          className="mt-auto flex w-36 gap-2 rounded-lg bg-primary px-4 py-2 text-center text-secondary outline-none transition-all hover:w-full hover:bg-primary"
        >
          <span>{t("blog.card.read-more")}</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

const LESS_BLOGS = BLOGS.slice(0, 3);

export function Blog() {
  const t = useTranslations();

  return (
    <section className="my-10">
      <Title
        className="mt-10 text-5xl text-primary md:mb-10"
        translateKey="blog.lastest"
      />
      {/* NOTE: Mobile View only */}
      <p className="my-5 text-center text-sm text-gray-500 md:hidden">
        {t("scroll-to-right")}
      </p>
      <div className="relative flex w-full snap-x snap-mandatory gap-20 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
        {LESS_BLOGS.map((blog) => {
          return (
            <BlogCard
              key={blog.code}
              {...blog}
              href={`/blogs/${blog.code}`}
              className="relative min-w-full snap-start"
            />
          );
        })}
      </div>
    </section>
  );
}
