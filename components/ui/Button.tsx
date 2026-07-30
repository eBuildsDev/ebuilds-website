import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)]"
      : "border border-zinc-700 text-white hover:border-white hover:bg-white/5";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}