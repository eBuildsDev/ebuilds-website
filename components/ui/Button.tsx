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
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-zinc-200"
      : "border border-zinc-700 text-white hover:border-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}