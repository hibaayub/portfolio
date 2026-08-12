import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function WorkIntro() {
  return (
    <Container as="header" className="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Work
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          A collection of projects focused on accessibility, fairness, and
          intentional design.
        </p>
      </FadeIn>
    </Container>
  );
}
