"use client";

import "./globals.css";
import {Fira_Sans, Inter, JetBrains_Mono, Montserrat, Roboto} from 'next/font/google'
import {ThemeProvider} from "@/components/themes";
import Navbar from "@/components/navbar";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {ThemeWrapper} from "@/components/theme-wrapper";

// Example for importing multiple fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Use desired weights
  variable: '--font-roboto', // Custom CSS variable for this font
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  // weight: ['400', '600'],
  // variable: '--font-montserrat',
});
const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-firasans',
});

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${firaSans.className} light-theme`}
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
