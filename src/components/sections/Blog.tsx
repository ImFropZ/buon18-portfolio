import React from "react";
import { Title } from "@/components/base";
import { BlogCard } from "@/components";

export function Blog() {
  return (
    <div className="my-10">
      <Title className="my-10 text-center">Blogs</Title>
      <div className="grid grid-cols-3 gap-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        {/* <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div>
        <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div>
        <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div> */}
      </div>
    </div>
  );
}
