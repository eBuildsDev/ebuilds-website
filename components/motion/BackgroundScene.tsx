"use client";

import { useEffect } from "react";

export default function BackgroundScene() {
  useEffect(() => {
    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--cursor-x",
          `${event.clientX}px`
        );

        document.documentElement.style.setProperty(
          "--cursor-y",
          `${event.clientY}px`
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="living-background" aria-hidden="true">
        <div className="living-background__base" />
        <div className="living-background__gradient" />
        <div className="living-background__aurora" />
        <div className="living-background__grid" />
        <div className="living-background__spotlight" />
    </div>
  );
}