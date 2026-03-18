import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              title={t(`items.${project.slug}.title`)}
              description={t(`items.${project.slug}.description`)}
              repoLabel={t("repoButton")}
              liveLabel={t("liveButton")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
