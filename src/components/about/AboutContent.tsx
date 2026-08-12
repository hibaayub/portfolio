import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const interests = ["Gaming", "Reading", "Bedazzling"];

export function AboutContent() {
  return (
    <Container as="section" className="py-12 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#d7e4ef]">
            <Image
              src="/images/portrait.svg"
              alt="Portrait of Hiba Ayub"
              fill
              preload
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
        </FadeIn>
        <div>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl font-bold tracking-tight text-pink sm:text-5xl">
              Hi I&apos;m Hiba
            </h1>
          </FadeIn>
          <FadeIn delay={0.14} className="mt-6 space-y-5 text-base leading-7 text-ink sm:text-lg sm:leading-8">
            <p>
              I have been a gamer my whole life. One of my earliest product
              memories is the Xbox 360 Kinect. Your body being the controller
              felt like magic. Then came The Sims: infinite customization,
              decision-making, and building. Now, I have stepped into the world
              of puzzles: logic, thinking, strategy.
            </p>
            <p>
              I had been noticing design my whole life without realizing it.
              What made a game feel good. What made a UI feel dated. What made
              you want to keep playing. Now, I want to implement those thoughts
              by designing products that are fair, accessible, and easy to use.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <h2 className="text-sm font-medium tracking-wide text-teal">
              Interests
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full bg-pink px-5 py-2 text-sm font-medium text-white"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
