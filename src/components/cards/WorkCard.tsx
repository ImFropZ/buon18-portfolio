import { Package } from "lucide-react";
import { Button, Title } from "@/components/base";
import { cn } from "@/components/utils";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WorkCard({ className, ...props }: WorkCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative grid overflow-hidden rounded-lg shadow",
        className,
      )}
    >
      <div className="relative max-h-40">
        <img
          src="https://placehold.co/50"
          alt=""
          className="h-full w-full object-cover"
        />
        <Package
          size={64}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
        />
      </div>
      <div className="relative p-5">
        <Title size={3} className="text-center text-2xl font-bold text-black">
          Work Title
        </Title>
        <p className="mx-auto mt-5 w-[90%] text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          inventore.
        </p>
        <Button className="group/button mt-5 w-full py-1 hover:bg-primary hover:outline-gray-500">
          <span className="group-hover/button:text-white">Learn more</span>
        </Button>
      </div>
    </div>
  );
}
