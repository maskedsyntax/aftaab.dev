import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { slugifyTitle } from '@/lib/slug';

const contentDir = path.join(process.cwd(), 'content');

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  /** Optional `dateModified` from frontmatter — same DD-MM-YYYY format as `date` */
  dateModified?: string;
  description: string;
  content: string;
}

let cached: BlogPost[] | null = null;

export function getAllBlogs(): BlogPost[] {
  /** In dev, always re-read so new/edited posts don’t stay stuck behind a stale cache. */
  if (process.env.NODE_ENV === "production" && cached) return cached;

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((fileName) => {
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const {data, content} = matter(fileContent);

    const title = typeof data.title === "string" ? data.title : "";
    const fromTitle = slugifyTitle(title);
    /** Fallback when the title slugifies to nothing (avoids duplicate empty keys). */
    const slug =
      fromTitle ||
      fileName.replace(/\.md$/i, "").replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

    return {
      id: data.id != null ? String(data.id) : fileName,
      slug,
      title,
      date: typeof data.date === "string" ? data.date : "",
      dateModified:
        typeof data.dateModified === "string" ? data.dateModified : undefined,
      description:
        typeof data.description === "string" ? data.description : "",
      content: typeof content === "string" ? content : "",
    };
  }).sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split("-").reverse().join("-")).getTime();
    return dateB - dateA;
  });

  if (process.env.NODE_ENV === "production") {
    cached = posts;
  }
  return posts;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogs().find((blog) => blog.slug === slug);
}
