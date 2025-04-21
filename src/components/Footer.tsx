"use client";

import { cn } from "./utils";
import React from "react";
import { Button, Title } from "./base";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { Facebook, GitHub, LinkedIn, TikTok, YouTube } from "./icons";

const MEDIAS = [
  {
    href: "https://www.github.com/buon18",
    icon: (
      <GitHub className="h-8 w-8 transition-colors duration-300 hover:fill-primary" />
    ),
  },
  {
    href: "https://www.facebook.com/buon18.kh",
    icon: (
      <Facebook className="h-8 w-8 transition-colors duration-300 hover:fill-primary" />
    ),
  },
  {
    href: "https://www.youtube.com/@buon18-tech?sub_confirmation=1",
    icon: (
      <YouTube className="h-8 w-8 transition-colors duration-300 hover:fill-primary" />
    ),
  },
  {
    href: "#",
    icon: (
      <TikTok className="h-8 w-8 transition-colors duration-300 hover:fill-primary" />
    ),
  },
  {
    href: "https://www.linkedin.com/company/buon18",
    icon: (
      <LinkedIn className="h-8 w-8 transition-colors duration-300 hover:fill-primary" />
    ),
  },
];

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  const emailRef = React.useRef<null | HTMLInputElement>(null);
  const t = useTranslations();

  const onSubscribeHandler = (email: string) => {
    return fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="mt-auto">
      <div
        {...props}
        className={cn(
          "mx-auto grid w-full max-w-[96rem] place-content-center p-4 pb-0 text-white xl:p-16",
          props.className,
        )}
      >
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Title className="text-4xl text-white">
              {t("footer.title-1")}
              <br />
              {t("footer.title-2")}
            </Title>
            <p className="text-sm text-gray-200">{t("footer.description")}</p>
            <div className="flex gap-2">
              {MEDIAS.map((m, i) => {
                return (
                  <Link href={m.href} target="_blank" key={i}>
                    {m.icon}
                  </Link>
                );
              })}
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
              className="rounded-lg px-4 py-3 text-lg text-secondary placeholder:text-primary"
              ref={emailRef}
            />
            <Button
              className="flex h-fit w-fit items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-white outline-none"
              onClick={() => {
                if (emailRef.current != null) {
                  if (isValidEmail(emailRef.current.value)) {
                    onSubscribeHandler(emailRef.current.value)
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.id) {
                          toast.success("Subscribed successfully", {
                            autoClose: 2000,
                            position: "top-right",
                          });
                          if (emailRef.current) emailRef.current.value = "";
                        }

                        if (data.error) {
                          toast.error(data.error, {
                            autoClose: 2000,
                            position: "top-right",
                          });
                        }
                      });
                  } else {
                    toast.error("Invalid email", {
                      autoClose: 2000,
                      position: "top-right",
                    });
                  }
                }
              }}
            >
              <p>{t("footer.subscribe")}</p>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <p className="mx-auto my-8 text-sm font-normal leading-5 tracking-wide text-gray-200">
          @Copyright {new Date().getFullYear()} All rights reserved - Buon18
        </p>
      </div>
    </div>
  );
}
