"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Navbar() {
    const { setTheme, theme } = useTheme()
    const pathname = usePathname()

    const routes = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
    ]

    const getActiveRoute = (path: string) => {
        if (path.startsWith('/blog/')) return '/blog'
        return path
    }

    return (
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-10`}>
            <nav className="flex items-center gap-2 px-1 py-1 bg-background rounded-md border shadow-sm">
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
                <Separator orientation="vertical" className="h-6" />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="w-8 h-8"
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </nav>
        </div>
    )
}

