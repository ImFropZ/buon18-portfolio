import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buon18 Portfolio",
  description: "",
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
        <NavBar className="mt-10" />
        {children}
        <Footer className="mt-auto bg-slate-500" />
      </body>
    </html>
  );
}
