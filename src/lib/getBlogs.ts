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
  description: string;
  content: string;
}

let cached: BlogPost[] | null = null;

export function getAllBlogs(): BlogPost[] {
  if (cached) return cached;

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

  cached = files.map((fileName) => {
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const {data, content} = matter(fileContent);

    return {
      id: data.id,
      slug: slugifyTitle(data.title),
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  }).sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split("-").reverse().join("-")).getTime();
    return dateB - dateA;
  });

  return cached;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogs().find((blog) => blog.slug === slug);
}
