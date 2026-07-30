"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
  delay?: number;
};

function FeatureCard({
  eyebrow,
  title,
  description,
  className = "",
  children,
  delay = 0,
}: FeatureCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 22,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 22,
    mass: 0.5,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.5, 2.5]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [2.5, -2.5]);

  const lightX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);
  const lightY = useTransform(springY, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();

    mouseX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5,
    );

    mouseY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5,
    );
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: smoothEase,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative [perspective:1100px] ${className}`}
    >
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
              }
        }
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
          mass: 0.55,
        }}
        className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#111113] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.32)] will-change-transform sm:p-8"
      >
        <motion.div
          aria-hidden="true"
          style={{
            left: lightX,
            top: lightY,
          }}
          className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 opacity-0 blur-[85px] transition-opacity duration-500 group-hover:opacity-100"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.035),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div
          className="relative z-10 flex h-full flex-col"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300">
              {eyebrow}
            </p>

            <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
              {title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              {description}
            </p>
          </div>

          <div className="relative mt-auto pt-8">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="apps"
      className="relative overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[64rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
            ease: smoothEase,
          }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-400" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                The EBuilds standard
              </p>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              More than something
              <br />

              <span className="text-zinc-500">
                that simply looks good.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-400">
            Every product is designed around performance, flexibility and
            memorable digital experiences.
          </p>
        </motion.div>

        <div className="mt-16 grid auto-rows-[minmax(260px,auto)] gap-5 lg:grid-cols-6">
          <FeatureCard
            eyebrow="01 — Performance"
            title="Built to feel instant."
            description="Lightweight foundations, considered motion and responsive layouts keep every interaction fast and fluid."
            className="lg:col-span-4"
          >
            <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0e]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px]" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Performance
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-zinc-400">
                    Optimised
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-6 flex items-end gap-3">
                {[44, 66, 52, 82, 64, 95, 78, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              height: 0,
                            }
                      }
                      whileInView={{
                        height: `${height}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + index * 0.06,
                        ease: smoothEase,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-500/20 to-violet-400/80"
                    />
                  ),
                )}
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-white/10" />
            </div>
          </FeatureCard>

          <FeatureCard
            eyebrow="02 — Responsive"
            title="Perfect on every screen."
            description="Layouts intelligently adapt from desktop displays to phones without losing their visual impact."
            className="lg:col-span-2"
            delay={0.08}
          >
            <div className="relative mx-auto flex h-44 items-end justify-center">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 h-40 w-24 -translate-x-[70%] rounded-[1.5rem] border border-white/15 bg-[#0b0b0e] p-2 shadow-2xl"
              >
                <div className="h-full overflow-hidden rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.3),transparent_55%)] p-3">
                  <div className="h-2 w-9 rounded-full bg-white/20" />
                  <div className="mt-5 h-10 rounded-lg bg-white/10" />
                  <div className="mt-3 space-y-2">
                    <div className="h-2 rounded-full bg-white/15" />
                    <div className="h-2 w-3/4 rounded-full bg-white/10" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 5, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 h-32 w-44 -translate-x-[30%] rounded-[1.25rem] border border-white/15 bg-[#0b0b0e] p-2 shadow-2xl"
              >
                <div className="h-full overflow-hidden rounded-[0.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)] p-3">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-10 rounded-full bg-white/20" />

                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-14 rounded-lg bg-white/10" />
                    <div className="h-14 rounded-lg bg-white/[0.06]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </FeatureCard>

          <FeatureCard
            eyebrow="03 — Customisation"
            title="Designed to become yours."
            description="Flexible components and adaptable systems let every product evolve with your brand."
            className="lg:col-span-2"
            delay={0.12}
          >
            <div className="space-y-3">
              {[
                {
                  label: "Layout",
                  value: "Flexible",
                  width: "82%",
                },
                {
                  label: "Typography",
                  value: "Refined",
                  width: "68%",
                },
                {
                  label: "Motion",
                  value: "Smooth",
                  width: "91%",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -16,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.25 + index * 0.1,
                    ease: smoothEase,
                  }}
                  className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">
                      {item.label}
                    </span>

                    <span className="text-zinc-500">
                      {item.value}
                    </span>
                  </div>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: item.width,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.35 + index * 0.1,
                        ease: smoothEase,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            eyebrow="04 — Experience"
            title="Motion with a purpose."
            description="Every transition directs attention, reveals information or adds depth without compromising usability."
            className="lg:col-span-4"
            delay={0.16}
          >
            <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0e]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_60%)]" />

              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400" />

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Interaction system
                </p>
              </div>

              <div className="absolute inset-x-6 bottom-6 top-16 flex items-center justify-center">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          x: [-105, 0, 105, 0, -105],
                      }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: smoothEase,
                  }}
                  className="relative z-20 h-16 w-16 rounded-2xl border border-violet-400/50 bg-violet-500/25 shadow-[0_0_45px_rgba(139,92,246,0.3)]"
                />

                <div className="absolute inset-x-14 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="absolute left-10 h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]" />

                <div className="absolute h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]" />

                <div className="absolute right-10 h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]" />
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}