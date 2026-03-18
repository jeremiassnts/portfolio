import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { type ProjectItem } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  title: string;
  description: string;
  repoLabel: string;
  liveLabel: string;
}

export function ProjectCard({
  project,
  index,
  title,
  description,
  repoLabel,
  liveLabel,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-surface lg:min-h-[320px]">
      <div
        className={cn(
          "flex flex-col",
          index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <Carousel
          images={project.images}
          alt={title}
          width={420}
          height={320}
          className="shrink-0 rounded-none border-0 !h-[220px] !w-full sm:!h-[260px] lg:!h-[320px] lg:!w-[420px]"
        />

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6 lg:p-8">
          <div>
            <p className="font-mono text-[13px] text-accent-green">
              [{String(index + 1).padStart(2, "0")}]
            </p>
            <h3 className="mt-2 font-mono text-[20px] font-bold text-foreground-emphasis sm:mt-3 sm:text-[22px]">
              {title}
            </h3>
            <p className="mt-3 font-body text-[13px] leading-[1.7] text-foreground-secondary sm:mt-4">
              {description}
            </p>
          </div>

          <div className="my-4 flex flex-wrap gap-2 sm:mt-5">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:mt-5 sm:flex-row sm:items-center sm:gap-3 lg:mt-auto">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded border border-border bg-transparent px-4 py-2 font-mono text-[12px] font-medium text-foreground transition-opacity hover:opacity-90"
            >
              {repoLabel}
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded border border-transparent bg-accent-green px-4 py-2 font-mono text-[12px] font-medium text-surface transition-opacity hover:opacity-90"
              >
                {liveLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
