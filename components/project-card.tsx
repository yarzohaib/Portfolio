import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    tag: string
    icon: LucideIcon
    tech: string[]
    link?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = project.icon

  const content = (
    <div className="flex flex-col h-full">
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="bg-orange-500 text-white p-4 rounded-full">
          <IconComponent size={32} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-4 text-balance">{project.title}</h3>

      {/* Description - grows to fill available space */}
      <p className="text-muted-foreground text-center mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>

      {/* Tech Stack - always aligned */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs bg-background px-2 py-1 rounded border border-border">
            {tech}
          </span>
        ))}
      </div>

      {/* Tag - always at bottom */}
      <div className="text-center">
        <span className="text-orange-500 font-semibold text-sm">{project.tag}</span>
      </div>
    </div>
  )

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow cursor-pointer h-full">
          {content}
        </div>
      </Link>
    )
  }

  return (
    <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow h-full">
      {content}
    </div>
  )
}
