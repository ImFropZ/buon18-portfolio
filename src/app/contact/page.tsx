import { ContactForm } from "@/components";
import { Title } from "@/components/base";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="mx-auto mb-10 flex w-[90%] max-w-[82rem] flex-wrap gap-4 gap-y-10">
      <div className="flex-1">
        <Title className="text-5xl text-gray-900">Information</Title>
        <p className="my-4 text-lg text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          mollitia maxime nesciunt dicta voluptatum eos velit optio dolorem
          autem minus odio suscipit dignissimos in natus, laudantium iusto animi
          corrupti odit provident voluptates! Quo eveniet harum adipisci eos aut
          sint! Ratione, cupiditate? Animi commodi quisquam quia aliquam nulla
          tempore placeat excepturi?
        </p>
        <Title className="text-3xl text-gray-900">Find us on</Title>
        <div className="mt-5 flex gap-8">
          <a href="https://www.facebook.com/buon18.kh" target="_blank">
            <Image
              src="/images/facebook.svg"
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
              src="/images/youtube.svg"
              alt="youtube"
              width={50}
              height={50}
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src="/images/tiktok.svg"
              alt="tiktok"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <div className="w-full md:flex-1">
        <Title className="text-5xl text-gray-900">Contact</Title>
        <ContactForm className="flex flex-col gap-2 py-4" />
      </div>
    </div>
  );
}
