"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {usePathname} from 'next/navigation'

import {Moon, Sun} from "lucide-react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function Navbar() {
  const {setTheme, theme} = useTheme()
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/blog", label: "Blog" },
  ];

  const getActiveRoute = (path: string) => {
    if (path.startsWith("/blog/")) return "/blog";
    return path;
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-sm">
      <nav className="flex items-center gap-2 rounded-md border border-border bg-background/95 px-1 py-1 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Tabs value={getActiveRoute(pathname)} className="w-full">
          <TabsList>
            {routes.map((route) => (
              <TabsTrigger key={route.href} value={route.href} asChild>
                <Link href={route.href}>
                  {route.label}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Separator orientation="vertical" className="h-6"/>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-8 h-8"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </nav>
    </div>
  )
}

