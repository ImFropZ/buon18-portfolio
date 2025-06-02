import { About, Blog, Hero, Jumpbotron, Project, Service } from "@/components";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-12">
        <Hero />
        <Service />
        <About />
        <Project />
        <Blog />
      </div>
      {/* <Jumpbotron /> */}
    </>
  );
}
