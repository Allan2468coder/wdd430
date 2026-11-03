interface AboutHighlightProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutHighlight({
  title,
  description,
  highlights,
}: AboutHighlightProps) {
  return (
    <section
      aria-labelledby="about-highlight-heading"
      className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
    >
      <h2
        className="mb-3 text-2xl font-bold tracking-tight"
        id="about-highlight-heading"
      >
        {title}
      </h2>
      <p className="mb-5 max-w-2xl leading-7 text-zinc-600">{description}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <li
            className="rounded-lg bg-white px-4 py-3 font-medium text-zinc-800"
            key={highlight}
          >
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
}
