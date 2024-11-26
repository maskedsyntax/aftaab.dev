import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { PageTransition } from '@/components/page-transition'
import {ProjectGrid} from "@/components/project-grid";
import {Heart} from "lucide-react"
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
    icons: {
        icon: "/favicons/favicon.ico", // Default favicon
        shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
        apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
    },
}

export default function Home() {
  const skills = [
    "Python", "C++", "Go", "React", "Next.js", "JavaScript",
    "TypeScript", "Node.js", "Express.js", "Docker", "Kubernetes", "TensorFlow"
  ]

  const exploring = ["Remix", "Astro", "Rust", "Bun", "Deno"]

  return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto px-8 py-8 sm:py-16 pt-8 sm:pt-24 max-w-4xl">

            <div className="flex flex-col sm:flex-row items-center justify-between sm:items-start gap-4 mb-12">
              <div className="max-w-lg text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  Hi, I'm Aftaab <span className="wave">👋</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Driven individual with a passion for problem-solving, continuous learning, and mastering advanced
                  technologies to build impactful solutions.
                </p>
              </div>
              <div className="relative w-36 h-36 rounded-full overflow-hidden bg-muted">
                <Image
                    src="/images/Avatar/avatar.jpg"
                    alt="Aftaab's avatar"
                    fill
                    sizes="144px"
                    className="object-cover"
                />
              </div>
            </div>

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

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 relative inline-block">
                Skills
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                    <Badge key={skill} variant="secondary"
                           className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                      {skill}
                    </Badge>
                ))}
              </div>
              <p className="text-lg font-medium mb-4">Currently exploring:</p>
              <div className="flex flex-wrap gap-2">
                {exploring.map((tech) => (
                    <Badge key={tech} variant="secondary"
                           className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                      {tech}
                    </Badge>
                ))}
              </div>
            </section>

            <section className="text-center">
              <p className="text-xl font-bold">
                Check out my{' '}
                <Link href="#" className="text-blue-500 hover:underline">
                  resume
                </Link>
                .
              </p>
            </section>

            <section className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
              <h1 className="text-3xl font-bold mb-8 text-center">My Latest Work</h1>
              <ProjectGrid/>
            </section>

            <section className="text-center pt-24 mb-24">
              <h2 className="text-4xl font-bold mb-3">
                Check out my <Link href="/blog" className="text-blue-500 hover:underline">blog</Link>.
              </h2>
              <p className="text-lg text-muted-foreground">
                I occasionally enjoy writing blogs, primarily about tech topics, but I also explore other subjects.
              </p>
            </section>

            <section className="text-center pt-12 mb-12">
              <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm mb-4">
                Contact
              </div>
              <h2 className="text-4xl font-bold mb-3">Get in touch</h2>
              <p className="text-lg text-muted-foreground mb-2">Want to chat?</p>
              <p className="text-lg">
                Just{' '}
                <Link href="mailto:aftaab@aftaab.xyz" className="text-blue-500 hover:underline">
                  email me
                </Link>
                {' '}or{' '}
                <Link href="https://x.com/MaskedSyntax" className="text-blue-500 hover:underline">
                  dm me on twitter
                </Link>
                .
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

