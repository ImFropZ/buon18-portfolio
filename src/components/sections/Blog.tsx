"use client";

import { Title } from "@/components/base";
import { BlogCard } from "@/components";
import { BLOGS } from "@/data";
import React from "react";
import { useTranslations } from "next-intl";

const LESS_BLOGS = BLOGS.slice(0, 3);

export function Blog() {
  const t = useTranslations();

  return (
    <section className="my-10">
      <Title className="mt-10 text-5xl md:mb-10 text-primary text-center" translateKey="blog.lastest" />
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
