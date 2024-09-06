import { About, Blog, Hero, Jumpbotron, Service } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto w-[90%] max-w-[80rem]">
        <About />
        <Service />
        <Blog />
        <Jumpbotron />
      </main>
    </div>
  );
}
