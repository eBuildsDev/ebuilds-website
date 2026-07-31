"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

import ComputerAssembly from "./ComputerAssembly";
import Lights from "./Lights";

export default function IntroScene() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,40,180,0.18),transparent_34%),linear-gradient(to_bottom,#020204,#05020b_60%,#000)]" />

      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 1.4]}
          camera={{
            position: [0, 0.25, 10],
            fov: 44,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          shadows
        >
          <Suspense fallback={null}>
            <Lights />

            <Sparkles
              count={90}
              scale={[13, 8, 10]}
              size={1.8}
              speed={0.22}
              opacity={0.45}
              color="#c4b5fd"
            />

            <ComputerAssembly />
          </Suspense>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/35">
          Constructing the experience
        </p>
      </div>
    </section>
  );
}