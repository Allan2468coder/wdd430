import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-8">
      <section className="mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
          Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hello, I&apos;m a web developer.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          I build useful, accessible web experiences. Explore a few of my
          projects below.
        </p>
      </section>
      <ProjectList />
    </main>
  );
}
