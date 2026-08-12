import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-bold tracking-wide text-pink">{children}</p>
  );
}
