import {ProjectGrid} from '@/components/project-grid'
import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";

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
          <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
          <ProjectGrid/>
        </main>
      </div>
    </PageTransition>
  )
}

