import { WorkCard } from "@/components";
import { Title } from "@/components/base";
import { Dot } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#6CF] to-[#06C] pb-[7rem] pt-[2.75rem]">
        <Title className="text-center text-gray-50">About Buon18</Title>
        <p className="mx-auto mt-12 w-[90%] max-w-[95ch] text-center text-lg text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          delectus consequuntur adipisci reiciendis ut pariatur cumque sint at.
          Facilis inventore eligendi autem doloremque ullam ea totam libero
          fugit iure voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem non corporis quia, debitis amet molestias
          ut odio rem quam architecto eos modi tempore, iusto, distinctio
          veritatis deserunt maiores enim neque!
        </p>
      </div>
      <div className="mx-auto w-[90%] max-w-[82rem] pb-10">
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            Who are we
          </Title>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            labore quos necessitatibus eligendi, laudantium recusandae cum
            distinctio est nulla molestias aliquid, at tenetur ipsa quis
            doloremque. Hic quos neque explicabo, ad fugiat eos asperiores
            repudiandae tempore ipsam, ex rerum. Maxime officiis dicta voluptas
            suscipit, voluptates obcaecati commodi eligendi dolore provident?
          </p>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            Our Works
          </Title>
          <div className="relative flex w-full snap-x snap-mandatory gap-10 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <WorkCard key={i} className="relative min-w-full snap-start"/>
            ))}
          </div>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            Visions
          </Title>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            labore quos necessitatibus eligendi, laudantium recusandae cum
            distinctio est nulla molestias aliquid, at tenetur ipsa quis
            doloremque. Hic quos neque explicabo, ad fugiat eos asperiores
            repudiandae tempore ipsam, ex rerum. Maxime officiis dicta voluptas
            suscipit, voluptates obcaecati commodi eligendi dolore provident?
          </p>
        </div>
        <div className="my-10">
          <Title size={2} className="mb-5 text-4xl text-gray-900">
            Missions
          </Title>
          <ul className="text-lg text-gray-500">
            <li className="flex items-center">
              <Dot />
              <span>Mission 1</span>
            </li>
            <li className="flex items-center">
              <Dot />
              <span>Mission 2</span>
            </li>
            <li className="flex items-center">
              <Dot />
              <span>Mission 3</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
