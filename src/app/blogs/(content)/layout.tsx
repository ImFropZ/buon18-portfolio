export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-16 w-full xl:mt-24" />
      <section className="relative mx-auto w-[90%] max-w-[64rem] pb-10 pt-4">
        <article className="markdown">{children}</article>
      </section>
    </>
  );
}
