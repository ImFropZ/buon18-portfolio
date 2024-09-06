import Image from "next/image";
import { cn } from "./utils";
import React from "react";
import { Button, Title } from "./base";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  const t = useTranslations();

  return (
    <div className="bg-[#042782] mt-auto">
      <div
        {...props}
        className={cn(
          "mx-auto grid w-full max-w-[96rem] place-content-center p-16 pb-0 text-white",
          props.className,
        )}
      >
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-6">
            <Title className="text-4xl text-white">
              {t("footer.title-1")}
              <br />
              {t("footer.title-2")}
            </Title>
            <p className="text-sm text-gray-200">{t("footer.description")}</p>
            <div className="flex gap-2">
              <Link href={"https://www.github.com/buon18"}>
                <Image
                  src="/images/github.svg"
                  alt="github"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={"https://www.facebook.com/buon18.kh"}>
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/buon18"}
                target="_blank"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title
              size={3}
              className="text-4xl text-white"
              translateKey="footer.keep-in-touch"
            />
            <input
              type="email"
              placeholder={t("footer.enter-your-email")}
              className="rounded-lg px-4 py-3 text-lg text-black placeholder:text-[#0066CCAA]"
            />
            <Button className="flex h-fit w-fit items-center gap-2 rounded-lg bg-[#1A56DB] px-5 py-3 font-medium text-white outline-none">
              <p>{t("footer.subscribe")}</p>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <p className="mx-auto my-8 text-sm font-normal leading-5 tracking-wide text-gray-200">
          {t("footer.copy-right")}
        </p>
      </div>
    </div>
  );
}
