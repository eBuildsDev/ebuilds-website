"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const navigation = [
  { label: "Themes", href: "#themes" },
  { label: "Apps", href: "#apps" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: smoothEase,
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6"
    >
      <motion.nav
        animate={{
          marginTop: scrolled ? 14 : 0,
          maxWidth: scrolled ? 1050 : 1200,
          borderRadius: scrolled ? 22 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: smoothEase,
        }}
        className={`mx-auto flex h-20 items-center justify-between px-5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-7 ${
          scrolled
            ? "border border-white/10 bg-[#111113]/75 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group relative flex items-center gap-3"
          aria-label="EBuilds homepage"
        >
          <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/25 to-fuchsia-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative text-lg font-bold tracking-[-0.06em] text-white">
              E
            </span>
          </div>

          <div className="relative">
            <span className="text-lg font-semibold tracking-[-0.04em] text-white">
              EBuilds
            </span>

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-0 scale-90 rounded-xl bg-white/[0.06] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />

              <span className="relative">{item.label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="#themes"
          className="group relative isolate overflow-hidden rounded-xl border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] active:translate-y-0"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative">Explore</span>
        </Link>
      </motion.nav>
    </motion.header>
  );
}