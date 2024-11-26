import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/themes";
import Navbar from "@/components/navbar";
import {AnimatePresence} from "framer-motion";
import React from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
    icons: {
        icon: "/favicons/favicon.ico", // Default favicon
        shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
        apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
    },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <Navbar/>
          {/*<div className="fade-out-mask">*/}
              <AnimatePresence mode="wait">
                  {children}
              </AnimatePresence>
          {/*</div>*/}
      </ThemeProvider>
      </body>
      </html>
)
}