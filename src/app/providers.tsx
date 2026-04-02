"use client";

import { ThemeProvider } from "@/components/themes";
import { ThemeWrapper } from "@/components/theme-wrapper";
import Navbar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeWrapper>
          <Navbar />
          <div className="page-content">
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </div>
        </ThemeWrapper>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
