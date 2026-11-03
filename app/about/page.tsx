import AboutHighlight from "@/components/AboutHighlight";

export default function About() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-8">
      <section aria-labelledby="about-heading" className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
          A little about me
        </p>
        <h1
          className="mb-6 text-4xl font-bold tracking-tight"
          id="about-heading"
        >
          About Allan
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          I&apos;m Allan Ogwal, a web development student building responsive
          and accessible websites. My projects include a community website and
          an interactive art discovery experience. I enjoy learning by making
          useful things for people.
        </p>
      </section>
      <AboutHighlight
        description="My recent work has helped me practice modern frontend development, responsive layouts, and accessible interfaces."
        highlights={[
          "React and TypeScript",
          "JavaScript, HTML, and CSS",
          "Responsive web design",
          "Accessible user interfaces",
        ]}
        title="What I’m learning and building"
      />
    </main>
  );
}
