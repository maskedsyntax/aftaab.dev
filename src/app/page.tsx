import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { PageTransition } from '@/components/page-transition'

export default function Home() {
  const skills = [
    "Python", "C++", "Go", "React", "Next.js", "JavaScript",
    "TypeScript", "Node.js", "Express.js", "Docker", "Kubernetes", "TensorFlow"
  ]

  const exploring = ["Remix", "Astro", "Rust", "Bun", "Deno"]

  return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
            <div className="flex justify-between items-start mb-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">
                  hi, i'm aftaab <span className="wave">👋</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  software developer with a knack for problem-solving and learning new technologies.
                </p>
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                <Image
                    src="/vercel.svg"
                    alt="Mehul's avatar"
                    fill
                    className="object-cover"
                />
              </div>
            </div>

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
              <p className="text-xl">
                Check out my{' '}
                <Link href="#" className="text-blue-500 hover:underline">
                  resume
                </Link>
                .
              </p>
            </section>
          </main>
        </div>
      </PageTransition>
  )
}

