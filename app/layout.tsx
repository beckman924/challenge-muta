import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
const PoetsenOne = localFont({ src: "./fonts/PoetsenOne-Regular.ttf" });

import "./globals.css";

const viewport: Viewport = {
  themeColor: "#E4383B",
};

export const metadata: Metadata = {
  title: "Pókedex",
  description: "Challenge for Muta - Poke API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoetsenOne.className} antialiased`}>{children}</body>
    </html>
  );
}

export { viewport };
