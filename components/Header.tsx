import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 sm:px-8"
      >
        <Link className="font-semibold tracking-tight" href="/">
          My Portfolio
        </Link>
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <Link className="transition-colors hover:text-zinc-950" href="/">
            Home
          </Link>
          <Link
            className="transition-colors hover:text-zinc-950"
            href="/about"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
