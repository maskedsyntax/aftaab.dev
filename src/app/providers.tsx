"use client";

import { ThemeProvider } from "@/components/themes";
import { ThemeWrapper } from "@/components/theme-wrapper";
import Navbar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function RoutedPresence({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="contents">
        {children}
      </div>
    </AnimatePresence>
  );
}

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
            <RoutedPresence>{children}</RoutedPresence>
          </div>
        </ThemeWrapper>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
