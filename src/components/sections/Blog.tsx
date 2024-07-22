import React from "react";
import { Title } from "@/components/base";
import { BlogCard } from "@/components";

export function Blog() {
  return (
    <section className="my-10">
      <Title className="my-10 text-center">Blogs</Title>
      <div className="grid grid-cols-3 gap-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
