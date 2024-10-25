import { About, Blog, Hero,  Service, Technology } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto w-[90%] max-w-[80rem]">
        <About />
        <Service />
        <Technology />
        <Blog />
        {/* <Jumpbotron /> */}
      </main>
    </div>
  );
}
