import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="px-20 py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <div className="mt-10 space-y-10">
          {projects.map((project, index) => (
            <Card key={project.slug} className="h-[320px] overflow-hidden bg-surface">
              <div
                className={cn(
                  "flex h-full",
                  index % 2 === 1 ? "flex-row-reverse" : "flex-row"
                )}
              >
                <Carousel
                  images={project.images}
                  alt={t(`items.${project.slug}.title`)}
                  width={420}
                  height={320}
                  className="shrink-0 rounded-none border-0"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between p-8">
                  <div>
                    <p className="font-mono text-[13px] text-accent-green">
                      [{String(index + 1).padStart(2, "0")}]
                    </p>
                    <h3 className="mt-3 font-mono text-[22px] font-bold text-foreground-emphasis">
                      {t(`items.${project.slug}.title`)}
                    </h3>
                    <p className="mt-4 font-body text-[13px] leading-[1.7] text-foreground-secondary">
                      {t(`items.${project.slug}.description`)}
                    </p>
                  </div>

                  <div>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded border border-border bg-transparent px-4 py-2 font-mono text-[12px] font-medium text-foreground transition-opacity hover:opacity-90"
                      >
                        {t("repoButton")}
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded border border-transparent bg-accent-green px-4 py-2 font-mono text-[12px] font-medium text-surface transition-opacity hover:opacity-90"
                      >
                        {t("liveButton")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
