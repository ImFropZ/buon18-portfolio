import Image from "next/image";
import React from "react";

export function About() {
  return (
    <div className="my-10">
      <h1 className="my-5 text-center text-3xl font-bold">About</h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            adipisci aperiam exercitationem? Eius, necessitatibus ad? Eos enim
            cum perspiciatis repellendus commodi tempore, minus nihil id rem
            quod, eius eveniet aliquid.
          </p>
          <button type="button" className="mt-auto w-full py-3 outline">
            See more
          </button>
        </div>
        <div className="grid place-content-center">
          <Image
            src="/assets/Logo_Icon-01.png"
            width={320}
            height={320}
            alt="about us image"
          ></Image>
        </div>
      </div>
    </div>
  );
}
