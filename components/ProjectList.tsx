import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        className="mb-6 text-2xl font-bold tracking-tight"
        id="projects-heading"
      >
        Selected Projects
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
