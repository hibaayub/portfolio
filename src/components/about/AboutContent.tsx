import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const interests = ["Gaming", "Reading", "Puzzles"];

export function AboutContent() {
  return (
    <Container as="section" className="py-12 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#d7e4ef]">
            <Image
              src="/images/personal-pic.png"
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
              I'm currently an Associate at PwC in Tech Consulting, where I get to sit at 
              the intersection of user experience, business strategy, and technology 
              implementation. I'm passionate about building products that prioritize the user
              experience. I love understanding how UI/UX connects to business objectives, and 
              how that translates into technology that actually works for the people using it. 
              I'm always looking for ways to grow, refine my skills, and understand design and 
              development more deeply.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <h2 className="text-lg font-medium tracking-wide text-black">
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
