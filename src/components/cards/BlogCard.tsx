import React from "react";
import { Button, Title } from "@/components/base";
import { ArrowRight } from "lucide-react";

export function BlogCard() {
  return (
    <div className="grid grid-rows-[auto,1fr] overflow-hidden rounded-lg shadow">
      <div className="relative h-48">
        <img
          src="https://via.placeholder.com/300"
          alt="blog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <Title size={2} className="text-2xl font-bold text-gray-900">
          Blog Title
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
          placeat eum fugit explicabo id, tenetur accusantium magni quasi,
        </p>
        <Button className="mt-auto flex w-fit gap-2 rounded-lg bg-primary px-5 py-2 text-gray-50 outline-none hover:bg-primary">
          <span>Read more</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
