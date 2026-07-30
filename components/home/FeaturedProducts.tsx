"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const products = [
  {
    title: "Noir Commerce",
    category: "Shopify Theme",
    description:
      "A refined ecommerce experience designed for fashion, lifestyle and luxury brands.",
    number: "01",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.24)",
  },
  {
    title: "Aura Studio",
    category: "Website Template",
    description:
      "A premium digital presence built for creative agencies, studios and independent creators.",
    number: "02",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.26)",
  },
  {
    title: "Flow Analytics",
    category: "Web Application",
    description:
      "A modern analytics interface created for ambitious SaaS products and digital platforms.",
    number: "03",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.24)",
  },
];

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const activeProduct = products[activeIndex];

  function selectProduct(index: number) {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function previousProduct() {
    const nextIndex =
      activeIndex === 0 ? products.length - 1 : activeIndex - 1;

    setDirection(-1);
    setActiveIndex(nextIndex);
  }

  function nextProduct() {
    const nextIndex =
      activeIndex === products.length - 1 ? 0 : activeIndex + 1;

    setDirection(1);
    setActiveIndex(nextIndex);
  }

  return (
    <section
      id="themes"
      className="relative overflow-hidden bg-[#09090b] px-6 py-20 text-white sm:py-24"
    >
      <motion.div
        animate={{
          background: `radial-gradient(circle at 50% 45%, ${activeProduct.glow}, transparent 36%)`,
        }}
        transition={{
          duration: 0.8,
          ease: smoothEase,
        }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Product stage */}
          <div>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-violet-400" />

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                  Selected work
                </p>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Explore the collection.
              </h2>
            </div>

            <div className="relative h-[380px] [perspective:1400px]">
              {products.map((product, index) => {
                const offset = index - activeIndex;
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={product.title}
                    type="button"
                    onClick={() => selectProduct(index)}
                    onMouseEnter={() => selectProduct(index)}
                    animate={{
                      x: offset * 210,
                      y: isActive ? 0 : 24,
                      scale: isActive ? 1 : 0.78,

                      rotateY:
                        offset < 0
                          ? 28
                          : offset > 0
                            ? -28
                            : direction > 0
                              ? [8, -3, 0]
                              : direction < 0
                                ? [-8, 3, 0]
                                : 0,

                      rotateZ:
                        offset < 0
                          ? -3
                          : offset > 0
                            ? 3
                            : 0,

                      opacity: isActive ? 1 : 0.48,

                      zIndex: isActive ? 30 : 10,

                      filter: isActive
                        ? "brightness(1) saturate(1)"
                        : "brightness(0.5) saturate(0.6)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: smoothEase,
                    }}
                    className="absolute left-1/2 top-0 w-[255px] -translate-x-1/2 text-left outline-none sm:w-[285px]"
                    style={{
                      transformStyle: "preserve-3d",
                      pointerEvents:
                        Math.abs(offset) > 1 ? "none" : "auto",
                    }}
                  >
                    <motion.div
                      animate={{
                        y: isActive ? [0, -6, 0] : 0,
                      }}
                      transition={{
                        duration: 4.8,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="relative rounded-[1.75rem] border border-white/10 bg-[#111113] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-product-outline"
                          className="pointer-events-none absolute -inset-px rounded-[1.75rem]"
                          style={{
                            boxShadow: `0 0 0 1px ${product.accent}, 0 20px 65px ${product.glow}`,
                          }}
                          transition={{
                            duration: 0.55,
                            ease: smoothEase,
                          }}
                        />
                      )}

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key={`${product.title}-flash`}
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            animate={{
                              opacity: [0, 0.65, 0],
                              scale: [0.8, 1.1, 1.25],
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.85,
                              ease: smoothEase,
                            }}
                            className="pointer-events-none absolute inset-0 rounded-[1.75rem]"
                            style={{
                              background: `radial-gradient(circle at 50% 45%, ${product.glow}, transparent 60%)`,
                            }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="relative h-[295px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#0c0c0f]">
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `radial-gradient(circle at 50% 12%, ${product.glow}, transparent 55%)`,
                          }}
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40" />

                        <div className="relative flex items-center justify-between px-5 pt-5">
                          <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          </div>

                          <span className="text-xs tracking-[0.25em] text-white/40">
                            {product.number}
                          </span>
                        </div>

                        <motion.div
                          animate={{
                            y: isActive ? -8 : 8,
                            scale: isActive ? 1.03 : 0.92,
                            rotateX: isActive ? 0 : 4,
                          }}
                          transition={{
                            duration: 0.85,
                            ease: smoothEase,
                          }}
                          className="absolute inset-x-5 top-16 rounded-2xl border border-white/10 bg-black/35 p-4 shadow-2xl [transform-style:preserve-3d]"
                        >
                          <div className="flex items-center justify-between">
                            <div className="h-2.5 w-16 rounded-full bg-white/20" />

                            <div className="flex gap-2">
                              <div className="h-2.5 w-7 rounded-full bg-white/10" />
                              <div className="h-2.5 w-7 rounded-full bg-white/10" />
                            </div>
                          </div>

                          <div className="relative mt-4 h-28 overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
                            <div className="absolute left-4 top-5 space-y-3">
                              <div className="h-2 w-16 rounded-full bg-white/20" />
                              <div className="h-5 w-28 rounded-md bg-white/80" />
                              <div className="h-2 w-24 rounded-full bg-white/15" />
                            </div>

                            <motion.div
                              animate={{
                                y: isActive ? [0, -7, 0] : 0,
                                rotate: isActive ? [-2, 2, -2] : 0,
                              }}
                              transition={{
                                duration: 4,
                                repeat: isActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              className="absolute bottom-4 right-4 h-16 w-20 rounded-xl"
                              style={{
                                background: product.accent,
                                boxShadow: `0 0 45px ${product.accent}`,
                              }}
                            />
                          </div>

                          <div className="mt-4 grid grid-cols-3 gap-3">
                            {[0, 1, 2].map((item) => (
                              <div
                                key={item}
                                className="h-10 rounded-lg border border-white/10 bg-white/[0.04]"
                              />
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{
                            x: isActive ? ["-170%", "280%"] : "-170%",
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: isActive ? Infinity : 0,
                            repeatDelay: 2.8,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute -bottom-16 -top-16 left-0 z-30 w-20 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent blur-sm"
                        />
                      </div>
                    </motion.div>
                  </motion.button>
                );
              })}

              <motion.div
                animate={{
                  x:
                    activeIndex === 0
                      ? -210
                      : activeIndex === 2
                        ? 210
                        : 0,
                  scaleX: activeIndex === 1 ? 1.1 : 0.88,
                }}
                transition={{
                  duration: 0.8,
                  ease: smoothEase,
                }}
                className="pointer-events-none absolute bottom-8 left-1/2 h-14 w-[240px] -translate-x-1/2 rounded-[100%] blur-2xl"
                style={{
                  background: activeProduct.glow,
                }}
              />
            </div>
          </div>

          {/* Information panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.title}
                initial={{
                  opacity: 0,
                  x: direction >= 0 ? 24 : -24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction >= 0 ? -20 : 20,
                }}
                transition={{
                  duration: 0.45,
                  ease: smoothEase,
                }}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  {activeProduct.category}
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {activeProduct.title}
                </h3>

                <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                  {activeProduct.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
                  >
                    Explore product

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    Live preview
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={previousProduct}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Previous product"
              >
                ←
              </button>

              <div className="flex items-center gap-3">
                {products.map((product, index) => (
                  <button
                    key={product.title}
                    type="button"
                    onClick={() => selectProduct(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "w-10 bg-white"
                        : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Select ${product.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextProduct}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Next product"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}