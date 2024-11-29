import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";
import {Heart} from "lucide-react";

export const metadata: Metadata = {
  title: 'About | Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8 pt-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 relative inline-block">
              About
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Since childhood, I have been passionate about computers, technology, and gaming. While
              gaming sparked my interest in game development, I ultimately found my true passion in
              programming through various <span className="font-medium text-foreground">projects</span>.
              I particularly enjoy <span className="font-medium text-foreground">competitive programming</span> and
              tackling complex problems. I love learning new technologies and building websites with the
              latest tech stacks. Additionally, I take pride in my typing skills, often reaching speeds of over
              200 words per minute.
            </p>
          </section>
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

