import { connection } from "next/server";

export default async function Footer() {
  await connection();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-zinc-200">
      <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-zinc-600 sm:px-8">
        <p>Copyright © {year} | Allan Ogwal | All rights reserved</p>
      </div>
    </footer>
  );
}
