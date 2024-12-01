import {notFound} from 'next/navigation'
import {Heart} from "lucide-react";
import Navbar from "@/components/navbar";
import {blogPosts} from "@/lib/blogPosts";
import type {Metadata} from "next";

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export const metadata: Metadata = {
  title: 'Blog | Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}


export default async function BlogPost({params}: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.id === resolvedParams.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-16 max-w-4xl">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <div className="mb-4">
            <a href="/blog" className="text-blue-500 hover:underline">
              ← Back to Blog
            </a>
          </div>
          <h1 className="font-bold text-4xl mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">{post.date}</p>
          <p className="text-lg font-medium mb-4">{post.description}</p>
          <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </article>
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
  )
}

