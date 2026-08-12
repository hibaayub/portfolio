import type { ReactNode } from "react";

type CaseStudyLayoutProps = {
  children: ReactNode;
};

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12 pb-24 pt-12 sm:pb-32 sm:pt-16">
      {children}
    </article>
  );
}
