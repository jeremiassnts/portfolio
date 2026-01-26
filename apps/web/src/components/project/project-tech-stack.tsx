interface ProjectTechStackProps {
  technologies: string[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
