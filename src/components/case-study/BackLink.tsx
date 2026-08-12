import Link from "next/link";

export function BackLink({ href = "/work" }: { href?: string }) {
  return (
    <p className="mt-10">
      <Link
        href={href}
        className="text-sm font-medium text-pink hover:text-pink-hover"
      >
        ← Back to work
      </Link>
    </p>
  );
}
