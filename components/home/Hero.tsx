export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 pt-20">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          EBuilds
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          Building modern digital products.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          Premium Shopify themes, powerful apps and software crafted for
          ambitious businesses.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            Explore Themes
          </button>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}