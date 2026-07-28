"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/70 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          EBuilds
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="#themes"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Themes
          </Link>

          <Link
            href="#apps"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Apps
          </Link>

          <Link
            href="#about"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        <Link
          href="#products"
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          View Products
        </Link>
      </nav>
    </header>
  );
}