"use client";

import { Mail, Phone } from "lucide-react";
import { ContactForm, MEDIAS } from "@/components";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto mt-24 grid w-[90%] max-w-[82rem] grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-extrabold text-primary">Contact Us</h1>
          <p className="text-lg">Let&apos;s Build Something Great Together!</p>
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
          <p className="max-w-[28rem]">
            At Buon18, we believe every conversation could be the beginning of a
            powerful digital solution. Whether you&apos;re ready to start a
            project or just exploring ideas, our team is here to help bring your
            vision to life.
          </p>
          <div className="_border-gradient mt-6 flex items-center justify-center gap-4 rounded-xl p-4">
            {MEDIAS.map((m) => {
              return (
                <Link href={m.href} key={m.href}>
                  {m.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="_border-gradient rounded-xl p-6">
          <ContactForm />
        </div>
      </div>
      <div className="my-12 grid grid-cols-2">
        <img src="/contact-1.png" className="w-full object-cover" />
        <img src="/contact-2.png" className="w-full object-contain" />
      </div>
    </>
  );
}
