import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Link from 'next/link'
import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";
import {Heart} from "lucide-react";
import {getAllBlogs} from "@/lib/getBlogs";

export const metadata: Metadata = {
  title: 'Blog | Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}

function createSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

export default function BlogPage() {
  const blogPosts = getAllBlogs();
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8 pt-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id}
                    className="relative transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${createSlug(post.title)}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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

