import React from 'react'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Eat",
  description: "Мудрый выбор для осмысленного питания",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="text-stone-800 dark:bg-stone-950 dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
