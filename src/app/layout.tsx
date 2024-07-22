import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import { cn } from "@/components/utils";

export const metadata: Metadata = {
  title: "Buon18 Portfolio",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

const gothamFont = localFont({
  src: [
    {
      path: "../assets/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(gothamFont.className, "flex min-h-screen flex-col")}>
        <NavBar className="my-10 bg-slate-500" />
        {children}
        <Footer className="mt-auto bg-slate-500" />
      </body>
    </html>
  );
}
