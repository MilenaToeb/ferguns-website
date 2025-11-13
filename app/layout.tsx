'use client';
import type { Metadata } from "next";
import { Saira } from "next/font/google"; /*new font*/
import "./globals.css";
import { use } from "react";

const saira = Saira({ /*new font*/
  weight: "400",           // regular 400
  subsets: ["latin"],
  variable: "--font-saira", // CSS variable for Tailwind/global use
});

export const metadata: Metadata = {
  title: "Ferguns",
  description: "Personalized guns. Customized for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} font-sans`} /*new font*/
      >
        {children}
      </body>
    </html>
  );
}
