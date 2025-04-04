import { BlogCard } from "@/components";
import { Title } from "@/components/base";
import { BLOGS } from "@/data";
import { useTranslations } from "next-intl";
import React from "react";

export default function Blogs() {
  const t = useTranslations();

  return (
    <>
      <Title
        className="bg-primary-darker py-6 text-center text-5xl"
        translateKey="blog.nav"
      />
      <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
        <div className="mx-auto my-10 grid w-full grid-cols-[repeat(auto-fill,minmax(0,24rem))] place-content-center gap-10">
          {BLOGS.map((blog) => {
            return (
              <BlogCard
                key={blog.code}
                {...blog}
                href={`/blogs/${blog.code}`}
                className="flex-1 basis-80"
              />
            );
          })}
        </div>
        <p className="text-gray-500">* {t("blog.warning")}</p>
      </div>
    </>
  );
}
