import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { featuredProject } from "@/data/projects";

export function SelectedWork() {
  return (
    <Container as="section" className="pb-24 sm:pb-32" aria-labelledby="selected-work">
      <FadeIn>
        <h2
          id="selected-work"
          className="mb-8 text-xl font-bold tracking-tight sm:text-2xl"
        >
          Selected Work
        </h2>
      </FadeIn>
      <FadeIn delay={0.08}>
        <Link
          href={featuredProject.href ?? "/work"}
          className="group block overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(17,17,17,0.1)]"
        >
          <div className="flex min-h-[220px] items-center justify-center bg-navy sm:min-h-[280px] lg:min-h-[320px]">
            <p className="text-2xl font-bold text-white sm:text-4xl">
              {featuredProject.title}
            </p>
          </div>
          <div className="flex items-start justify-between gap-4 bg-white px-6 py-6 sm:px-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {featuredProject.title}
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">
                {featuredProject.client}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="text-lg text-ink transition group-hover:text-pink"
            >
              ↗
            </span>
          </div>
        </Link>
      </FadeIn>
    </Container>
  );
}
