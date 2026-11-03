import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "WDD 130 – Rafting Website",
    description:
      "A responsive white-water rafting website with trip information and visitor resources.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://allan2468coder.github.io/wdd130/wwr",
  },
  {
    title: "Open Gallery",
    description:
      "A responsive art discovery experience for searching collections from the Art Institute of Chicago and The Met.",
    technologies: ["JavaScript", "HTML", "CSS", "Vite"],
    link: "https://allan2468coder.github.io/wdd330-sleepoutside/open-gallery/",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-8">
      <section className="mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
          Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hello, I&apos;m Allan Ogwal.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          I build responsive web experiences and continue to grow my skills
          through hands-on projects. Here are a few examples of my work.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
