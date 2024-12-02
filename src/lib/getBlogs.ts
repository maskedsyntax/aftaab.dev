import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), '/public/content');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getAllBlogs(): BlogPost[] {
  const files = fs.readdirSync(contentDir);

  return files.map((fileName) => {
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const {data, content} = matter(fileContent);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  }).sort((a, b) => {
    const dateA: any = new Date(a.date.split("-").reverse().join("-"));
    const dateB: any = new Date(b.date.split("-").reverse().join("-"));
    return dateB - dateA;
  }); // Sort by date (latest first)
}

export function getBlogById(id: string): BlogPost | undefined {
  const blogs = getAllBlogs();
  return blogs.find((blog) => blog.id === id);
}
