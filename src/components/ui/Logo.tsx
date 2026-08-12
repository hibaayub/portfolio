import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-[1.35rem] font-bold tracking-tight text-ink"
      aria-label="Hiba home"
    >
      hiba<span className="text-pink">.</span>
    </Link>
  );
}
