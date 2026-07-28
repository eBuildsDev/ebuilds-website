import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Mode",
    category: "Fashion Shopify Theme",
    description:
      "A bold, modern storefront designed for clothing brands and fashion retailers.",
    status: "Coming Soon",
  },
  {
    name: "Atelier",
    category: "Furniture Shopify Theme",
    description:
      "A minimal ecommerce experience designed for furniture and interior brands.",
    status: "Coming Soon",
  },
  {
    name: "Lumière",
    category: "Beauty Shopify Theme",
    description:
      "A premium storefront for skincare, cosmetics and luxury beauty businesses.",
    status: "Coming Soon",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="border-t border-zinc-900 bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
              Featured Products
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Premium themes for modern brands.
            </h2>
          </div>

          <a
            href="#themes"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            View all products
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div
          id="themes"
          className="mt-14 grid gap-7 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-white"
            >
              <div className="flex aspect-[4/3] items-center justify-center border-b border-zinc-800 bg-gradient-to-br from-zinc-900 to-black">
                <span className="text-6xl font-bold text-zinc-800 transition duration-300 group-hover:scale-105 group-hover:text-zinc-700">
                  0{index + 1}
                </span>
              </div>

              <div className="p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm text-zinc-500">
                      {product.category}
                    </p>

                    <h3 className="text-2xl font-semibold">
                      {product.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-zinc-500 transition group-hover:text-white"
                  />
                </div>

                <p className="leading-7 text-zinc-400">
                  {product.description}
                </p>

                <div className="mt-7">
                  <span className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300">
                    {product.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}