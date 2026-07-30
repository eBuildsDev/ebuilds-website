import {
  Blocks,
  Code2,
  PanelsTopLeft,
  ShoppingBag,
} from "lucide-react";

import FadeIn from "@/components/shared/FadeIn";

const features = [
  {
    title: "Shopify Themes",
    description:
      "Beautiful, high-performance themes designed to help brands sell more online.",
    icon: ShoppingBag,
  },
  {
    title: "Web Applications",
    description:
      "Modern software built with Next.js, React and TypeScript for ambitious businesses.",
    icon: Code2,
  },
  {
    title: "UI Components",
    description:
      "Reusable, responsive and accessible components for faster development.",
    icon: Blocks,
  },
  {
    title: "Custom Websites",
    description:
      "Professional websites crafted for startups, creators and growing companies.",
    icon: PanelsTopLeft,
  },
];

export default function Features() {
  return (
    <section
      id="apps"
      className="border-t border-zinc-900 bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
            What We Build
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Digital products built for growth.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <article className="group h-full rounded-2xl border border-zinc-800 bg-zinc-950 p-9 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-zinc-600 hover:bg-zinc-900/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-black transition-all duration-300 group-hover:scale-105 group-hover:border-zinc-600">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-zinc-300 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="max-w-xl leading-8 text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}