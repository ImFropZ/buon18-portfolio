import { BlogCard } from "@/components";
import { Title } from "@/components/base";
import { BLOGS } from "@/data";
import React from "react";

export default function Blogs() {
  return (
    <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
      <Title className="text-center text-5xl my-6" translateKey="blog.nav" />
      <div className="wrap mx-auto my-10 flex w-full flex-wrap gap-10">
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
      <p className="text-gray-500">
        * Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente
        harum asperiores autem adipisci officia quo, numquam mollitia laborum
        facere ipsam, dolor molestias! Minima, aliquid culpa. A aliquam quae
        rem.
      </p>
    </div>
  );
}
