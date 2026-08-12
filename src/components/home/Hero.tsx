import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <Container as="section" className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pt-28">
      <FadeIn>
        <h1 className="max-w-4xl text-[2.15rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          Hi I&apos;m Hiba. I build products with purpose designed to be fair,
          intuitive, accessible, and easy to use.
        </h1>
      </FadeIn>
      <FadeIn delay={0.12} className="mt-10 flex flex-wrap gap-3">
        <Button href="/work">See my Work</Button>
        <Button href="/about">About Me</Button>
      </FadeIn>
    </Container>
  );
}
