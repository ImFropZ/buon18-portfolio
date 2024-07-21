import React from "react";

export function Blog() {
  return (
    <div className="my-10">
      <h1 className="my-5 text-center text-3xl font-bold">Blogs</h1>
      <div className="grid h-96 grid-cols-3 gap-5">
        <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div>
        <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div>
        <div className="grid grid-rows-[1fr,auto] bg-slate-400">
          <div className="mt-auto h-1/6 bg-slate-50 outline"></div>
        </div>
      </div>
    </div>
  );
}
