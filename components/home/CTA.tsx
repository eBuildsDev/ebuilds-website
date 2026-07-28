import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
          Ready to Build?
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Premium digital products for modern businesses.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Whether you need a premium Shopify theme, a modern web application or
          a bespoke website, EBuilds is here to help bring your ideas to life.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            Get Started
          </Link>

          <Link
            href="#products"
            className="rounded-xl border border-zinc-700 px-6 py-4 font-semibold transition hover:border-white"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}