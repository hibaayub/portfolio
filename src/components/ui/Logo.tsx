import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-[1.35rem] font-bold tracking-tight text-ink"
      aria-label="Hiba home"
    >
      hiba
      <span
        className="ml-[3px] inline-block h-[7px] w-[7px] rounded-full bg-pink"
        aria-hidden="true"
      />
    </Link>
  );
}
