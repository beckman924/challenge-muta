import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
const PoetsenOne = localFont({ src: "./fonts/PoetsenOne-Regular.ttf" });

import "./globals.css";
import Header from "./components/Header/Header";

const viewport: Viewport = {
  themeColor: "#E4383B",
};

export const metadata: Metadata = {
  title: "Pókedex",
  description: "Challenge para Muta - Poke API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${PoetsenOne.className} antialiased pt-36`}>
        <Header />

        {children}
      </body>
    </html>
  );
}

export { viewport };
