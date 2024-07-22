import React from "react";
import { Button, Title } from "@/components/base";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../utils";

export function ServiceCard() {
  return (
    <div className="flex flex-col rounded border p-5 shadow">
      <p className="text-xl text-gray-500">Standard plan</p>
      <Title size={2} className="my-2 text-5xl text-gray-900">
        $49<span className="text-xl font-normal text-gray-500">/month</span>
      </Title>
      <div className="flex flex-col gap-2">
        <ServicePoint state={true} text="Design" />
        <ServicePoint state={true} text="Website" />
        <ServicePoint state={false} text="Unlimited access to all features" />
      </div>

      <Button className="mt-auto w-full rounded-lg bg-primary py-2 text-gray-50 outline-none hover:bg-primary">
        Contact Us
      </Button>
    </div>
  );
}

function ServicePoint({ state, text }: { state: boolean; text: string }) {
  return (
    <div className="flex gap-2">
      <CheckCircle2
        className={cn("stroke-white", state ? "fill-primary" : "fill-gray-400")}
      />
      <span className={cn("text-gray-700", state ? "" : "line-through")}>
        {text}
      </span>
    </div>
  );
}
