import { Title } from "@/components/base";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function BlogCard({
  title,
  description,
  image,
  href,
  className,
  ...props
}: BlogCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-rows-[auto,1fr] overflow-hidden rounded-lg shadow",
        className,
      )}
    >
      <div className="relative h-48">
        <Image
          width={410}
          height={230}
          src={image}
          alt="blog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <Title size={2} className="text-2xl font-bold text-gray-900">
          {title}
        </Title>
        <p>
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description || ""}
        </p>
        <Link
          href={href || "#"}
          className="mt-auto flex w-fit gap-2 rounded-lg bg-primary px-5 py-2 text-gray-50 outline-none hover:bg-primary"
        >
          <span>Read more</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
