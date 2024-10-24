import { ContactForm } from "@/components";
import { Title } from "@/components/base";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Contact() {
  const t = useTranslations();

  return (
    <>
      <Title
        className="bg-primary-darker py-6 text-center text-5xl"
        translateKey="contact.nav"
      />
      <div className="mx-auto mb-10 flex w-[90%] max-w-[82rem] flex-wrap gap-10 gap-y-10 mt-5">
        <div className="flex-1">
          <Title
            className="text-5xl text-gray-900"
            translateKey="contact.information"
          />
          <p className="my-4 text-lg text-gray-500">
            {t("contact.description")}
          </p>
          <Title className="text-3xl text-gray-900">{t("contact.find-us-on")}</Title>
          <div className="mt-5 flex gap-8">
            <a href="https://www.facebook.com/buon18.kh" target="_blank">
              <Image
                src="/images/facebook-color.svg"
                alt="facebook"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.youtube.com/@buon18-tech?sub_confirmation=1"
              target="_blank"
            >
              <Image
                src="/images/youtube-color.svg"
                alt="youtube"
                width={50}
                height={50}
              />
            </a>
            <a href="#" target="_blank">
              <Image
                src="/images/tiktok-color.svg"
                alt="tiktok"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="w-full md:flex-1">
          <ContactForm className="flex flex-col gap-2 py-4" />
        </div>
      </div>
    </>
  );
}
