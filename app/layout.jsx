import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";
import { Lobster_Two, Black_Ops_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const boo = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-boo",
});

export const metadata = {
  title: "Erics Resumepage",
  description: "Resumepage of E. E.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Test</title>
        <link rel="stylesheet preload" href="globals.css" as="style" />
      </Head>
      <body
        className={`${inter.className} ${boo.variable} p-0 m-0 
        scrollbar-thumb-teal-500 scrollbar-track-gray-700
        scrollbar-thin
         `}
      >
        {children}
      </body>
    </html>
  );
}
