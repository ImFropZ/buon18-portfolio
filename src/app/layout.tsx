import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Buon18 Portfolio",
  description: "",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-primary">
        <NavBar className="md:mt-10" />
        {children}
        <Footer className="mt-auto bg-slate-500" />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
