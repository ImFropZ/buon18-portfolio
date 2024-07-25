import { Title } from "@/components/base";
import { BlogCard } from "@/components";
import { BLOGS } from "@/data";
import React from "react";

const LESS_BLOGS = BLOGS.slice(0, 3);

export function Blog() {
  return (
    <section className="my-10">
      <Title className="my-10 text-center">Blogs</Title>
      <div className="grid grid-cols-3 gap-20">
        {LESS_BLOGS &&
          LESS_BLOGS.map((blog) => {
            return (
              <BlogCard
                key={blog.code}
                {...blog}
                href={`/blogs/${blog.code}`}
              />
            );
          })}
      </div>
    </section>
  );
}
