import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal website to introduce my work and share selected projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Dashboard",
    description:
      "A clear dashboard concept for organizing project details and progress.",
    technologies: ["React", "TypeScript"],
  },
  {
    title: "Responsive Landing Page",
    description:
      "A responsive page focused on accessible content and straightforward navigation.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectList() {
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
