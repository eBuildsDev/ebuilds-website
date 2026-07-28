import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-2xl">
      {children}
    </div>
  );
}