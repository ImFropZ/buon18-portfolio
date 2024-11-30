import { Button } from "@/components/base";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-4 w-full bg-primary-darker" />
      <section className="relative mx-auto w-[80%] max-w-[64rem] pb-10 pt-4">
        <div className="absolute -left-20 h-full pb-5">
          <Link href="/blogs" className="sticky top-10">
            <Button className="rounded-lg bg-blue-500 px-5 py-2 text-gray-50 outline-none hover:bg-primary">
              <ArrowLeftSquare />
            </Button>
          </Link>
        </div>
        <article className="prose xl:prose-xl">{children}</article>
      </section>
    </>
  );
}
