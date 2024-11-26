"use client";

import "./globals.css";
import {Inter} from 'next/font/google'
import {ThemeProvider} from "@/components/themes";
import Navbar from "@/components/navbar";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {useTheme} from "next-themes";
import {ThemeWrapper} from "@/components/theme-wrapper";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const {theme} = useTheme();
  console.log("layout: ", theme);
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${inter.className} light-theme`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeWrapper>
        <Navbar/>
        <div className="page-content">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </div>
      </ThemeWrapper>
    </ThemeProvider>
    </body>
    </html>
  )
}
