"use client";

import { Mail, Phone } from "lucide-react";
import { ContactForm, MEDIAS } from "@/components";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto mt-24 grid w-[90%] max-w-[82rem] grid-cols-2 gap-12">
        <div className="relative">
          <div
            className="absolute -left-1/4 top-1/2 -z-10 h-[35rem] w-[70rem] -translate-y-1/2"
            style={{
              background:
                "radial-gradient(40.91% 48.08% at 47.78% 47.9%, rgba(152, 203, 51, 0.45) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <h1 className="text-6xl font-extrabold text-primary">Contact Us</h1>
          <h2 className="mt-4 text-6xl font-bold">
            Let&apos;s Bring Your <br /> Ideas to Life
          </h2>
          <p className="my-6 max-w-[28rem] text-xl text-gray-100">
            Have a project in mind or need more info? Reach out to our team —
            we&apos;re here to help you build smarter, faster, and better.
          </p>
          <div className="my-8 space-y-4">
            <Link
              href="tel:+855(0) 76 418 4185"
              className="flex items-center gap-4"
              target="_blank"
            >
              <Phone fill="white" />
              +855(0) 76 418 4185
            </Link>
            <Link
              href="mailto:buon18kh@gmail.com"
              className="flex items-center gap-4"
              target="_blank"
            >
              <Mail />
              buon18kh@gmail.com
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 rounded-xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-4 backdrop-blur">
            {MEDIAS.map((m) => {
              return (
                <Link href={m.href} key={m.href}>
                  {m.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="rounded-xl border-2 border-white/30 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
