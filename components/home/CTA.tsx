"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#09090b] px-6 pb-24 pt-16 text-white sm:pb-32 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: smoothEase,
          }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111113] shadow-[0_35px_100px_rgba(0,0,0,0.52)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(139,92,246,0.2),transparent_34%),radial-gradient(circle_at_18%_65%,rgba(59,130,246,0.1),transparent_30%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.35, 0.65, 0.35],
                    scale: [0.96, 1.04, 0.96],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-violet-500/15 blur-[110px] will-change-transform"
          />

          <div className="relative grid items-center gap-14 px-8 py-16 sm:px-12 lg:grid-cols-[1fr_0.68fr] lg:px-16 lg:py-20">
            <div className="relative z-10">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease: smoothEase,
                }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-violet-400" />

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                  Build something memorable
                </p>
              </motion.div>

              <motion.h2
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 22,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.14,
                  ease: smoothEase,
                }}
                className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl"
              >
                Your next idea deserves
                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  more than ordinary.
                </span>
              </motion.h2>

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 16,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                  ease: smoothEase,
                }}
                className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
              >
                Explore premium themes, applications and website experiences
                designed to help ambitious brands stand out.
              </motion.p>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 16,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: smoothEase,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#themes"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black shadow-[0_12px_35px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  Explore the collection

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="#about"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-7 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:translate-y-0"
                >
                  Discover EBuilds

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </motion.div>
            </div>

            <div className="relative mx-auto hidden h-[330px] w-full max-w-[360px] lg:block">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                      }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-[#0c0c0f] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.58)] will-change-transform"
              >
                <div className="relative h-[295px] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0b0b0e]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.34),transparent_55%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:38px_38px] opacity-45" />

                  <div className="relative flex items-center justify-between px-5 pt-5">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                      EBuilds
                    </span>
                  </div>

                  <div className="absolute inset-x-5 top-16 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-16 rounded-full bg-white/20" />

                      <div className="flex gap-2">
                        <div className="h-2.5 w-6 rounded-full bg-white/10" />
                        <div className="h-2.5 w-6 rounded-full bg-white/10" />
                      </div>
                    </div>

                    <div className="relative mt-4 h-28 overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
                      <div className="absolute left-4 top-5 space-y-3">
                        <div className="h-2 w-14 rounded-full bg-white/20" />
                        <div className="h-5 w-28 rounded-md bg-white/80" />
                        <div className="h-2 w-24 rounded-full bg-white/15" />
                      </div>

                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                y: [0, -6, 0],
                              }
                        }
                        transition={{
                          duration: 4.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-4 right-4 h-16 w-20 rounded-xl bg-violet-500 shadow-[0_0_42px_rgba(139,92,246,0.55)] will-change-transform"
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[0, 1, 2].map((item) => (
                        <div
                          key={item}
                          className="h-11 rounded-lg border border-white/10 bg-white/[0.04]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 6, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-14 w-36 rounded-2xl border border-white/10 bg-[#151519]/90 p-4 shadow-[0_20px_55px_rgba(0,0,0,0.45)] will-change-transform"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Performance
                </p>

                <p className="mt-4 text-3xl font-semibold">99</p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
                </div>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-0 w-40 rounded-2xl border border-white/10 bg-[#151519]/90 p-4 shadow-[0_20px_55px_rgba(0,0,0,0.45)] will-change-transform"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Ready to launch
                  </p>
                </div>

                <div className="mt-5 flex h-12 items-end gap-2">
                  {[18, 27, 22, 38, 31, 46].map((height, index) => (
                    <div
                      key={index}
                      style={{ height }}
                      className="w-full rounded-t-sm bg-violet-400/60"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}