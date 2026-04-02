import {Badge} from "@/components/ui/badge"
import { FaGithub, FaGlobe } from "react-icons/fa"

interface Technology {
  name: string
}

interface ProjectCardProps {
  name: string
  dateRange: string
  description: string
  technologies: Technology[]
  websiteUrl: string
  repoUrl: string
}

export function ProjectCard({
                              name,
                              dateRange,
                              description,
                              technologies,
                              websiteUrl,
                              repoUrl
                            }: ProjectCardProps) {
  return (
    <div
      className="border rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-card dark:text-card-foreground flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{dateRange}</p>
        <p className="text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="secondary"
                   className="text-xs px-2 py-1">
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {websiteUrl && websiteUrl !== "#" &&
            <Badge
              variant="default"
              className="text-sm cursor-pointer transition-colors hover:bg-primary/90 flex items-center"
              asChild
            >
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <FaGlobe className="inline-block mr-1" /> Website</a>
            </Badge>
          }
          <Badge
            variant="default"
            className="text-sm cursor-pointer transition-colors hover:bg-primary/90 flex items-center"
            asChild
          >
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="inline-block mr-1" /> Repository</a>
          </Badge>
        </div>
      </div>
    </div>
  )
}

