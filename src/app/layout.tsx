import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gothamFont.className}>{children}</body>
    </html>
  );
}
