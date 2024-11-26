import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";

interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My Journey into Web Development",
    date: "2023-11-15",
    description: "Reflecting on my path from a curious student to a passionate web developer.",
    content: "It all started when I built my first HTML page..."
  },
  {
    id: "2",
    title: "The Future of AI in Software Development",
    date: "2023-12-01",
    description: "Exploring how AI is reshaping the landscape of software development.",
    content: "As AI continues to evolve, its impact on software development is becoming increasingly significant..."
  }
]

export const metadata: Metadata = {
  title: 'Blog | Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}

export default function BlogPage() {
  return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{post.description}</p>
                      <Link
                          href={`/blog/${post.id}`}
                          className="text-blue-500 hover:underline"
                      >
                        Read more
                      </Link>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </main>
        </div>
      </PageTransition>
  )
}

