import {
  Gauge,
  Palette,
  Settings2,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    title: "Fast Performance",
    description:
      "Built with modern technology to deliver smooth, responsive experiences.",
    icon: Gauge,
  },
  {
    title: "Premium Design",
    description:
      "Clean, modern interfaces designed to help brands look professional.",
    icon: Palette,
  },
  {
    title: "Easy to Customise",
    description:
      "Flexible products that can be adapted to suit different businesses.",
    icon: Settings2,
  },
  {
    title: "Built for Growth",
    description:
      "Digital products designed to support businesses as they expand.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="border-t border-zinc-900 bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
              Why EBuilds
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Products designed with quality at their core.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              EBuilds creates modern digital products that combine strong
              design, clean development and long-term flexibility.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-black">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-zinc-300 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {reason.title}
                  </h3>

                  <p className="leading-7 text-zinc-400">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}