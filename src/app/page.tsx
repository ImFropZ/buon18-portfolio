import { About, Blog, Hero, Service } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto w-[90%] max-w-[64rem]">
        <About />
        <Service />
        <Blog />
      </main>
    </div>
  );
}
