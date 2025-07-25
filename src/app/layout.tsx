import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Buon18",
  description: "",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <link rel="preload" href="/hero-buon18.png" as="image" />
      <body className="overflow-x-hidden font-primary">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            theme="light"
            transition={Bounce}
          />
          <div id="backdrop-portal" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
