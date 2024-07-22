import { ArrowDownRight } from "lucide-react";
import { cn } from "../utils";
import React from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Hero({ ...props }: HeroProps) {
  return (
    <section
      {...props}
      className={cn(
        "relative h-[32rem] w-full bg-slate-400 outline",
        props.className,
      )}
    >
      {/* 3 Rectangle */}
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="relative h-1/4 w-48 bg-slate-500">
          <p className="absolute bottom-[calc(100%+1.25rem)] right-5 text-nowrap">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="relative h-1/2 w-48 bg-slate-600">
          <p className="absolute bottom-[calc(100%+1.25rem)] right-5 text-nowrap">
            quas minus velit necessitatibus!
          </p>
        </div>
        <div className="h-3/4 w-48 bg-slate-700"></div>
      </div>
      {/* 3 Rectangle */}

      <button
        type="button"
        className="absolute bottom-0 flex w-1/2 max-w-96 justify-between gap-10 bg-white px-10 py-5 outline"
      >
        <span>Scroll to</span>
        <ArrowDownRight />
      </button>
    </section>
  );
}
