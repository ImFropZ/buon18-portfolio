"use client";

import { cn } from "@/components/utils";
import { LANGUAGES } from "@/data";
import Image from "next/image";
import React from "react";

interface LocaleButtonsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LocaleButtons({ className, ...props }: LocaleButtonsProps) {
  return (
    <div {...props} className={cn("flex items-center gap-2", className)}>
      {LANGUAGES.map((lang) => (
        <button key={lang} className="aspect-video w-10 flex-1" onClick={() => {
          document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
          window.location.reload();
        }}>
          <Image
            src={`/images/locales/${lang}.png`}
            width={128}
            height={64}
            alt={lang}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
