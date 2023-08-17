import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric E. @ Web",
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
        className={`${inter.className} p-0 m-0 
        scrollbar-thumb-teal-500 scrollbar-track-gray-700
        scrollbar-thin
         `}
      >
        {children}
      </body>
    </html>
  );
}
