import { ProjectCard } from './project-card'

const projects = [
    {
        name: "z'pple",
        dateRange: "Sept 2024 - Oct 2024",
        description: "A peer-to-peer (P2P) file sharing application that utilizes WebRTC for seamless communication and features real-time chat functionality through Socket.IO.",
        technologies: [
            { name: "Next.js" },
            { name: "WebRTC" },
            { name: "Socket.IO" },
            { name: "TypeScript" },
            { name: "Node.js" },
            { name: "Tailwind CSS" },
            { name: "shadcn/ui" },
            { name: "Vercel" },
        ],
        websiteUrl: "#",
        repoUrl: "#"
    },
    {
        name: "notez",
        dateRange: "Aug 2024 - Sept 2024",
        description: "An AI math solver that allows users to draw mathematical expressions on a blank canvas. It intelligently recognizes these drawings, solves the expressions, and converts them to LaTeX.",
        technologies: [
            { name: "Vue" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Gemini Gen AI API" },
            { name: "FastAPI" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
            { name: "Vercel" },
        ],
        websiteUrl: "#",
        repoUrl: "#"
    },
    {
        name: "bugpa",
        dateRange: "Dec 2023 - Jan 2024",
        description: "A GPA calculator designed for college students, addressing the common issue of understanding the credit system. It provides a simple UI for quick SGPA calculation.",
        technologies: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Node.js" },
            { name: "Tailwind CSS" },
            { name: "shadcn/ui" },
            { name: "Vercel" },
        ],
        websiteUrl: "#",
        repoUrl: "#"
    },
    {
        name: "qaution",
        dateRange: "Mar 2023 - May 2023",
        description: "A platform that offers a comprehensive suite of cybersecurity services, including redirect tracking, SSL certificate verification, IP reputation checking, and more.",
        technologies: [
            { name: "Python" },
            { name: "FastAPI" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
            { name: "Vercel" },
        ],
        websiteUrl: "#",
        repoUrl: "#"
    },
]

export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    )
}

