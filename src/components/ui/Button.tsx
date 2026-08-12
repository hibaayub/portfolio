import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-pink text-white hover:bg-pink-hover"
      : "bg-transparent text-ink hover:text-pink";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition duration-200 hover:scale-[1.02] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
