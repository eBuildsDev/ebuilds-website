"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    number: "01",
    eyebrow: "Thoughtful design",
    title: "Every detail has a reason.",
    description:
      "Layouts, typography, spacing and motion are carefully considered to create experiences that feel clear, polished and intentional.",
    accent: "#60a5fa",
    glow: "rgba(59,130,246,0.28)",
  },
  {
    number: "02",
    eyebrow: "Built for growth",
    title: "Made for where your brand is going.",
    description:
      "Flexible systems and reusable components allow your website to evolve without rebuilding everything from the beginning.",
    accent: "#818cf8",
    glow: "rgba(99,102,241,0.28)",
  },
  {
    number: "03",
    eyebrow: "Performance first",
    title: "Beautiful without feeling heavy.",
    description:
      "Premium visuals are balanced with efficient code, responsive layouts and smooth interactions across every device.",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.28)",
  },
  {
    number: "04",
    eyebrow: "Reliable foundations",
    title: "Designed to work beyond the demo.",
    description:
      "Products are structured around real business needs, usability and maintainability rather than visuals made only for screenshots.",
    accent: "#e879f9",
    glow: "rgba(217,70,239,0.26)",
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeReason = reasons[activeIndex];

  useEffect(() => {
    if (paused || reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reasons.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  function getPosition(index: number) {
    let distance = activeIndex - index;

    if (distance < 0) {
      distance += reasons.length;
    }

    return distance;
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <motion.div
        animate={{
          background: `radial-gradient(circle at 72% 46%, ${activeReason.glow}, transparent 34%)`,
        }}
        transition={{
          duration: 0.8,
          ease: smoothEase,
        }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="pointer-events-none absolute -left-52 top-28 h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="relative"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-400" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                Why EBuilds
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Design that earns

              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                attention.
              </span>

              <span className="mt-2 block text-zinc-500">
                Quality that keeps it.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
              EBuilds combines visual impact with practical foundations,
              creating products that feel premium today and remain useful
              tomorrow.
            </p>

            <div className="mt-10 flex items-center gap-3">
              {reasons.map((reason, index) => (
                <button
                  key={reason.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative grid h-11 place-items-center overflow-hidden rounded-full border text-xs font-medium transition-all duration-500 ${
                    activeIndex === index
                      ? "w-16 border-white/25 bg-white text-black"
                      : "w-11 border-white/10 bg-white/[0.04] text-zinc-500 hover:border-white/20 hover:text-white"
                  }`}
                  aria-label={`Show ${reason.title}`}
                >
                  {reason.number}

                  {activeIndex === index && (
                    <motion.span
                      layoutId="active-reason-progress"
                      className="absolute bottom-0 left-0 h-[2px] bg-black/40"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 2.6,
                        ease: "linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Animated launch stack */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative mx-auto h-[540px] w-full max-w-[620px]"
          >
            {/* Launch beam */}
            <motion.div
              animate={{
                background: `linear-gradient(to bottom, ${activeReason.accent}, transparent)`,
              }}
              transition={{
                duration: 0.7,
                ease: smoothEase,
              }}
              className="pointer-events-none absolute left-1/2 top-[92px] h-[330px] w-px -translate-x-1/2 opacity-60"
            />

            {/* Exhaust glow */}
            <motion.div
              key={`exhaust-${activeIndex}`}
              initial={{
                opacity: 0,
                scaleY: 0.2,
              }}
              animate={{
                opacity: [0, 0.9, 0.35],
                scaleY: [0.2, 1.25, 0.8],
              }}
              transition={{
                duration: 1.1,
                ease: smoothEase,
              }}
              className="pointer-events-none absolute left-1/2 top-[245px] h-40 w-20 origin-top -translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${activeReason.glow}, transparent)`,
                filter: "blur(24px)",
              }}
            />

            {/* Small launch particles */}
            <AnimatePresence>
              {[0, 1, 2, 3, 4].map((particle) => (
                <motion.span
                  key={`${activeIndex}-${particle}`}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    x: (particle - 2) * 22,
                    y: 95 + particle * 10,
                    scale: [0.4, 1, 0.2],
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: particle * 0.05,
                    ease: smoothEase,
                  }}
                  className="pointer-events-none absolute left-1/2 top-[250px] h-1.5 w-1.5 rounded-full"
                  style={{
                    background: activeReason.accent,
                    boxShadow: `0 0 14px ${activeReason.accent}`,
                  }}
                />
              ))}
            </AnimatePresence>

            <div className="absolute inset-0 [perspective:1300px]">
              {reasons.map((reason, index) => {
                const position = getPosition(index);

                const isActive = position === 0;
                const isPreviousOne = position === 1;
                const isPreviousTwo = position === 2;
                const isPreviousThree = position === 3;

                let y = -120;
                let scale = 0.78;
                let opacity = 0;
                let rotateX = -10;
                let zIndex = 0;
                let blur = 4;

                if (isActive) {
                  y = 10;
                  scale = 1;
                  opacity = 1;
                  rotateX = 0;
                  zIndex = 40;
                  blur = 0;
                } else if (isPreviousOne) {
                  y = 190;
                  scale = 0.9;
                  opacity = 0.68;
                  rotateX = -5;
                  zIndex = 30;
                  blur = 0;
                } else if (isPreviousTwo) {
                  y = 330;
                  scale = 0.8;
                  opacity = 0.32;
                  rotateX = -8;
                  zIndex = 20;
                  blur = 1.5;
                } else if (isPreviousThree) {
                  y = 440;
                  scale = 0.7;
                  opacity = 0;
                  rotateX = -12;
                  zIndex = 10;
                  blur = 4;
                }

                return (
                  <motion.article
                    key={reason.number}
                    animate={{
                      y,
                      scale,
                      opacity,
                      rotateX,
                      filter: `blur(${blur}px) brightness(${
                        isActive ? 1 : 0.65
                      })`,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: smoothEase,
                    }}
                    className="absolute left-0 top-0 w-full origin-top"
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <motion.div
                      animate={
                        isActive && !reduceMotion
                          ? {
                              y: [0, -7, 0],
                            }
                          : {
                              y: 0,
                            }
                      }
                      transition={{
                        duration: 3.8,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111113] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.52)] sm:p-8"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="launch-card-outline"
                          className="pointer-events-none absolute -inset-px rounded-[2rem]"
                          style={{
                            boxShadow: `0 0 0 1px ${reason.accent}, 0 30px 90px ${reason.glow}`,
                          }}
                          transition={{
                            duration: 0.65,
                            ease: smoothEase,
                          }}
                        />
                      )}

                      <motion.div
                        key={`${reason.number}-${isActive}`}
                        initial={
                          isActive
                            ? {
                                opacity: 0,
                                scale: 0.65,
                              }
                            : false
                        }
                        animate={
                          isActive
                            ? {
                                opacity: [0, 0.85, 0],
                                scale: [0.65, 1.15, 1.35],
                              }
                            : {
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.9,
                          ease: smoothEase,
                        }}
                        className="pointer-events-none absolute inset-0 rounded-[2rem]"
                        style={{
                          background: `radial-gradient(circle at 50% 55%, ${reason.glow}, transparent 65%)`,
                        }}
                      />

                      <div className="relative flex items-start gap-6">
                        <motion.div
                          animate={{
                            backgroundColor: isActive
                              ? reason.accent
                              : "rgba(255,255,255,0.04)",
                            color: isActive ? "#09090b" : "#71717a",
                          }}
                          transition={{
                            duration: 0.6,
                            ease: smoothEase,
                          }}
                          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 text-xs font-bold tracking-[0.18em]"
                        >
                          {reason.number}
                        </motion.div>

                        <div>
                          <p
                            className="text-xs font-medium uppercase tracking-[0.28em]"
                            style={{
                              color: isActive ? reason.accent : "#71717a",
                            }}
                          >
                            {reason.eyebrow}
                          </p>

                          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                            {reason.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                            {reason.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-7 flex items-center gap-3 pl-20">
                        <motion.span
                          animate={{
                            width: isActive ? 48 : 16,
                            backgroundColor: reason.accent,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: smoothEase,
                          }}
                          className="h-px"
                        />

                        <span className="text-xs uppercase tracking-[0.22em] text-zinc-600">
                          EBuilds standard
                        </span>
                      </div>

                      <motion.div
                        animate={{
                          x: isActive ? ["-170%", "280%"] : "-170%",
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 1.9,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -bottom-20 -top-20 left-0 w-24 rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-md"
                      />
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-600">
              <motion.span
                animate={{
                  backgroundColor: activeReason.accent,
                }}
                className="h-1.5 w-1.5 rounded-full"
              />

              {paused ? "Sequence paused" : "Launch sequence"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}