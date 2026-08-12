import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
      {children}
    </div>
  );
}
