import {
  Blocks,
  Code2,
  PanelsTopLeft,
  ShoppingBag,
} from "lucide-react";

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
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
          What We Build
        </p>

        <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Digital products built for growth.
        </h2>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-9 transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-2xl"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-black transition group-hover:border-zinc-600">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-zinc-300 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="max-w-xl leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}