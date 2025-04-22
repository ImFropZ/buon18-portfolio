"use client";

import { cn } from "./utils";
import React from "react";
import { Title } from "./base";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Title className="text-4xl text-white">Buon18</Title>
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
          <div className="space-y-4">
            <Title className="text-4xl text-white">Company</Title>
            <ul className="text-lg font-medium">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Our Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Title className="text-4xl text-white">Contact</Title>
            <div className="flex gap-2">
              <Phone className="text-primary" />
              <Link href="tel:+855764184185" target="_blank">
                +855(0) 76 418 4185
              </Link>
            </div>
            <div className="flex gap-2">
              <Mail className="text-primary" />
              <Link href="mailto:buon18kh@gmail.com" target="_blank">
                buon18kh@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 text-sm font-normal leading-5 tracking-wide text-gray-200">
          <p>
            @Copyright {new Date().getFullYear()} All rights reserved - Buon18
          </p>
          <div className="mx-auto mt-4 flex w-fit gap-2 underline">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Term of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
