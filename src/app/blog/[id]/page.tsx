import Navbar from '@/components/navbar'
import {notFound} from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  content: string
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My Journey into Web Development",
    date: "2023-11-15",
    description: "Reflecting on my path from a curious student to a passionate web developer.",
    content: "It all started when I built my first HTML page. The thrill of seeing my code come to life in a browser was indescribable. From there, I dove headfirst into CSS, JavaScript, and various frameworks. Each new technology I learned opened up new possibilities and challenges. Through countless hours of coding, debugging, and learning from my mistakes, I've grown from a novice to a confident web developer. This journey has taught me that in the world of web development, learning never stops. Every day brings new technologies, techniques, and best practices to explore. As I continue on this path, I'm excited to see where the ever-evolving landscape of web development will take me next."
  },
  {
    id: "2",
    title: "The Future of AI in Software Development",
    date: "2023-12-01",
    description: "Exploring how AI is reshaping the landscape of software development.",
    content: "As AI continues to evolve, its impact on software development is becoming increasingly significant. We're seeing AI-powered tools that can generate code, predict bugs, and even design user interfaces. This shift is not just about automation; it's about augmenting human capabilities. AI can analyze vast amounts of data to provide insights that would take humans much longer to discover. It can help in optimizing code performance, suggesting best practices, and even in project management by predicting timelines and potential bottlenecks. However, this doesn't mean AI will replace human developers. Instead, it will likely change the nature of their work, allowing them to focus on more creative and strategic aspects of software development. As we move forward, the ability to work alongside AI tools will become an essential skill for developers. The future of software development is one where human creativity and AI capabilities work in tandem, pushing the boundaries of what's possible in technology."
  }
]

export default async function BlogPost({params}: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.id === resolvedParams.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1>{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
          <p className="lead">{post.description}</p>
          <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </article>
      </main>
    </div>
  )
}

