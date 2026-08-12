import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/case-study/SectionHeader";

type CaseStudySectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  id,
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <FadeIn>
      <section
        aria-labelledby={id}
        className={`mt-14 sm:mt-20 ${className}`.trim()}
      >
        <SectionHeader id={id}>{title}</SectionHeader>
        <div className="mt-6">{children}</div>
      </section>
    </FadeIn>
  );
}
