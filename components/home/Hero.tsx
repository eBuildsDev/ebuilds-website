"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import Button from "@/components/ui/Button";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);

  const glowX = useTransform(springX, [-0.5, 0.5], ["15%", "85%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["15%", "85%"]);

  const previewX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const previewY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const reflectionX = useTransform(
    springX,
    [-0.5, 0.5],
    ["-85%", "85%"],
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
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
    <section className="relative isolate overflow-hidden bg-[#09090b] px-6 pb-24 pt-32 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_10%,rgba(124,58,237,0.22),transparent_36%),radial-gradient(circle_at_5%_65%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_95%_65%,rgba(217,70,239,0.12),transparent_30%),linear-gradient(to_bottom,#09090b,#07070a)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-22rem] -z-10 h-[48rem] w-[18rem] -translate-x-1/2 rotate-[24deg] bg-gradient-to-b from-transparent via-violet-400/10 to-transparent will-change-transform"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-18%", "18%", "-18%"],
                rotate: [20, 26, 20],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="mb-7 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-zinc-300"
        >
          Premium digital products
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.06,
            ease: smoothEase,
          }}
          className="max-w-5xl text-5xl font-bold tracking-[-0.06em] sm:text-7xl lg:text-8xl"
        >
          Build websites{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            people remember.
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.14,
            ease: smoothEase,
          }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          Premium Shopify themes, powerful applications and modern websites
          crafted for ambitious businesses.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.22,
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
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.32,
            ease: smoothEase,
          }}
          className="relative mt-20 w-full max-w-5xl"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-24 -top-12 h-32 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.28),transparent_70%)]"
          />

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-8 [perspective:900px]"
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
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -14, 0],
                    }
              }
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative rounded-[2rem] border border-white/10 bg-[#111113] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)] will-change-transform"
            >
              <motion.div
                aria-hidden="true"
                style={{
                  left: glowX,
                  top: glowY,
                }}
                className="pointer-events-none absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[90px]"
              />

              <motion.div
                aria-hidden="true"
                style={{ x: reflectionX }}
                className="pointer-events-none absolute -bottom-20 -top-20 left-1/2 z-20 w-44 -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-md"
              />

              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d0d10]">
                <div className="relative z-30 flex items-center border-b border-white/10 px-5 py-4 [transform:translateZ(30px)]">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>

                  <div className="mx-auto h-8 w-1/2 rounded-lg border border-white/10 bg-white/[0.05]" />

                  <div className="w-[52px]" />
                </div>

                <div className="relative grid min-h-[22rem] place-items-center overflow-hidden px-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.22),transparent_48%)]"
                  />

                  <motion.div
                    style={
                      reduceMotion
                        ? undefined
                        : {
                            x: previewX,
                            y: previewY,
                          }
                    }
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.5,
                      ease: smoothEase,
                    }}
                    className="relative text-center will-change-transform [transform:translateZ(65px)]"
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                      Featured build
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                      Your next website,
                      <br />
                      already imagined.
                    </h2>

                    <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
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