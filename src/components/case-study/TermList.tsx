import type { ReactNode } from "react";

export function TermList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">{children}</ul>
  );
}

export function Term({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <li className="text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
      <span className="font-bold">{name}</span>—{children}
    </li>
  );
}
