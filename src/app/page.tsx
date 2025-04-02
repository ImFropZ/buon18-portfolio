import { About, Blog, Hero, Jumpbotron, Service } from "@/components";

export default function Home() {
  // return <></>;
  return (
    <>
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-12">
        <Hero />
        <About />
        <Service />
        {/* <Technology /> */}
        <Blog />
      </div>
      <Jumpbotron />
    </>
  );
}
