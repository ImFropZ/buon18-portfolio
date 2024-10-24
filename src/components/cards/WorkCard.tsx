import { Package } from "lucide-react";
import { Button, Title } from "@/components/base";
import { cn } from "@/components/utils";
import { Work } from "@/data";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  work: Work;
}

export function WorkCard({ work, className, ...props }: WorkCardProps) {
  const t = useTranslations();

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
          src={work.image.src}
          alt={work.image.alt}
          className="h-full w-full object-cover"
        />
        <Package
          size={64}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
        />
      </div>
      <div className="relative p-5">
        <Title size={3} className="text-center text-2xl font-bold text-black">
          {t(`about.our-work.work.${work.translateKey}.title`)}
        </Title>
        <p className="mx-auto mt-5 w-[90%] text-center text-gray-500">
          {t(`about.our-work.work.${work.translateKey}.description`)}
        </p>
        <Link
          href={work.href}
          className="group/button mt-5 block w-full rounded py-1 text-center outline outline-2 hover:bg-primary hover:outline-gray-300"
        >
          <span className="group-hover/button:text-white">{t(`learn-more`)}</span>
        </Link>
      </div>
    </div>
  );
}
