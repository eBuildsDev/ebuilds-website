import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950
        p-8
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:border-zinc-600
        hover:bg-zinc-900/70
        hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]
      "
    >
      {children}
    </div>
  );
}