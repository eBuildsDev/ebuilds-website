"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Button from "@/components/ui/Button";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const titleWords = [
  { text: "Build", gradient: false },
  { text: "websites", gradient: false },
  { text: "people", gradient: true },
  { text: "remember.", gradient: true },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /*
   * Scroll progress for the whole hero scene.
   * 0 = hero starts
   * 1 = hero scene finishes
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Mouse interaction
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 140,
    damping: 22,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 140,
    damping: 22,
    mass: 0.5,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const previewX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const previewY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const reflectionX = useTransform(
    springX,
    [-0.5, 0.5],
    ["-90%", "90%"],
  );

  /*
   * Scroll choreography
   */
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.42],
    [1, 1, 0],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.42],
    [0, -130],
  );

  const introScale = useTransform(
    scrollYProgress,
    [0, 0.42],
    [1, 0.86],
  );

  const browserY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    [190, 60, -30, -70],
  );

  const browserScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.72, 1],
    [0.78, 0.9, 1.12, 1.34],
  );

  const browserRotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    [18, 10, 2, 0],
  );

  const browserOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 1],
    [0.3, 1, 1],
  );

  const browserGlow = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.2, 0.65, 1],
  );

  const browserContentScale = useTransform(
    scrollYProgress,
    [0.3, 1],
    [0.92, 1.08],
  );

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0],
  );

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[190vh] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden px-6">
        {/* Opening flash */}
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.35,
            delay: 0.1,
            ease: smoothEase,
          }}
          className="pointer-events-none absolute left-0 right-0 top-1/2 z-40 h-px origin-center bg-gradient-to-r from-transparent via-white to-transparent"
        />

        {/* Vertical energy beam */}
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 0.8, 0.25], scaleY: [0, 1, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease: smoothEase,
          }}
          className="pointer-events-none absolute left-1/2 top-0 h-full w-[26rem] -translate-x-1/2 origin-top bg-gradient-to-b from-violet-400/20 via-fuchsia-400/10 to-transparent blur-3xl"
        />

        {/* Hero text layer */}
        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  opacity: introOpacity,
                  y: introY,
                  scale: introScale,
                }
          }
          className="relative z-20 mx-auto flex h-screen max-w-6xl flex-col items-center justify-center text-center"
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -18,
                    filter: "blur(10px)",
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: smoothEase,
            }}
            className="mb-7 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-zinc-300 backdrop-blur-md"
          >
            Premium digital products
          </motion.div>

          <h1 className="flex max-w-6xl flex-wrap justify-center gap-x-[0.22em] overflow-hidden text-5xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[7rem]">
            {titleWords.map((word, index) => (
              <span
                key={word.text}
                className="inline-block overflow-hidden pb-[0.08em]"
              >
                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          y: "120%",
                          rotateX: -80,
                          opacity: 0,
                          filter: "blur(12px)",
                        }
                  }
                  animate={{
                    y: "0%",
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.95,
                    delay: 0.32 + index * 0.11,
                    ease: smoothEase,
                  }}
                  className={
                    word.gradient
                      ? "inline-block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                      : "inline-block"
                  }
                  style={{
                    transformOrigin: "50% 100%",
                  }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                    filter: "blur(8px)",
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: smoothEase,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            Premium Shopify themes, powerful applications and modern websites
            crafted for ambitious businesses.
          </motion.p>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.05,
              ease: smoothEase,
            }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#themes">Explore Themes</Button>

            <Button href="#apps" variant="secondary">
              See What We Build
            </Button>
          </motion.div>

          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    opacity: scrollHintOpacity,
                  }
            }
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
            }}
            className="absolute bottom-8 flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/40"
          >
            <span>Scroll to enter</span>

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 8, 0],
                    }
              }
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Browser scene */}
        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: browserY,
                  scale: browserScale,
                  rotateX: browserRotateX,
                  opacity: browserOpacity,
                  transformPerspective: 1100,
                  transformOrigin: "center center",
                }
          }
          className="pointer-events-none absolute inset-x-6 top-[48%] z-30 mx-auto w-full max-w-5xl will-change-transform"
        >
          <motion.div
            aria-hidden="true"
            style={
              reduceMotion
                ? undefined
                : {
                    opacity: browserGlow,
                  }
            }
            className="absolute inset-x-16 -inset-y-20 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.45),rgba(59,130,246,0.14)_42%,transparent_72%)] blur-3xl"
          />

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="pointer-events-auto relative [perspective:1100px]"
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
              className="relative rounded-[2rem] border border-white/15 bg-[#101014]/95 p-3 shadow-[0_45px_140px_rgba(0,0,0,0.75)] backdrop-blur-xl will-change-transform"
            >
              <motion.div
                aria-hidden="true"
                style={{ x: reflectionX }}
                className="pointer-events-none absolute -bottom-28 -top-28 left-1/2 z-30 w-52 -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent blur-md"
              />

              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0b0f]">
                <div className="relative z-30 flex items-center border-b border-white/10 px-5 py-4 [transform:translateZ(28px)]">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>

                  <div className="mx-auto h-8 w-1/2 rounded-lg border border-white/10 bg-white/[0.05]" />

                  <div className="w-[52px]" />
                </div>

                <div className="relative grid min-h-[25rem] place-items-center overflow-hidden px-8">
                  <motion.div
                    aria-hidden="true"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.18, 1],
                            opacity: [0.45, 0.85, 0.45],
                          }
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-[30rem] w-[30rem] rounded-full bg-violet-600/25 blur-[100px]"
                  />

                  <motion.div
                    style={
                      reduceMotion
                        ? undefined
                        : {
                            x: previewX,
                            y: previewY,
                            scale: browserContentScale,
                          }
                    }
                    className="relative text-center will-change-transform [transform:translateZ(75px)]"
                  >
                    <motion.p
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              letterSpacing: "0.7em",
                            }
                      }
                      animate={{
                        opacity: 1,
                        letterSpacing: "0.35em",
                      }}
                      transition={{
                        duration: 1,
                        delay: 1,
                        ease: smoothEase,
                      }}
                      className="text-sm uppercase text-zinc-500"
                    >
                      Featured build
                    </motion.p>

                    <motion.h2
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 0.88,
                              filter: "blur(14px)",
                            }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 1.1,
                        ease: smoothEase,
                      }}
                      className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl"
                    >
                      Your next website,
                      <br />
                      already imagined.
                    </motion.h2>

                    <motion.div
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.35,
                        ease: smoothEase,
                      }}
                      className="mx-auto mt-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}