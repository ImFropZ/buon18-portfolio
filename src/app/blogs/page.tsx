import { BlogCard } from "@/components";
import { Title } from "@/components/base";
import React from "react";

export default function Blogs() {
  return (
    <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
      <Title className="text-center">Blogs</Title>
      <div className="my-10 grid grid-cols-3 gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
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
