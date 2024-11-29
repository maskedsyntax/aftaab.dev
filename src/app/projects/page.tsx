import {ProjectGrid} from '@/components/project-grid'
import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";
import {Heart} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Projects | Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Dive Into My Work</h1>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Here's a peek at some of the cool stuff I've built over the years! From AI experiments to handy tools and
            just-for-fun projects, this is where I pour my ideas into code. Want to see what I've been up to lately?
            Check out my {' '}
            <Link href="https://github.com/MaskedSyntax" target="_blank" className="text-blue-500 hover:underline">
              latest creations
            </Link>
            !
          </p>
          <ProjectGrid/>
        </main>
        <footer className="mt-20 pb-24 text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="mr-1">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1"/>
            <span>by Aftaab Siddiqui</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aftaab Siddiqui. All rights reserved.
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}

