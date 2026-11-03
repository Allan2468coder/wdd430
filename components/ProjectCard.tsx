interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 p-6">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-5 leading-7 text-zinc-600">{description}</p>
      <ul aria-label={`${title} technologies`} className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
      {link && (
        <p className="mt-5">
          <a
            className="font-medium text-blue-700 hover:underline"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}
