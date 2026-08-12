import type { ReactNode } from "react";

type SectionHeaderProps = {
  id: string;
  children: ReactNode;
};

export function SectionHeader({ id, children }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
    >
      {children}
    </h2>
  );
}
