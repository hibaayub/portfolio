import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { datahubCaseStudy } from "@/data/datahub";

export function CaseStudyArticle() {
  const study = datahubCaseStudy;

  return (
    <article>
      <Container className="pb-10 pt-12 sm:pt-16">
        <FadeIn>
          <p className="text-sm font-bold tracking-wide text-pink">
            {study.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-pink sm:text-xl">
            {study.hook}
          </p>
        </FadeIn>
      </Container>

      <Container as="section" className="py-10 sm:py-14" aria-labelledby="problem">
        <FadeIn>
          <h2 id="problem" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            The Problem
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
            {study.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {study.before.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container as="section" className="py-10 sm:py-14" aria-labelledby="research">
        <FadeIn>
          <h2 id="research" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Research
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
            {study.research.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container as="section" className="py-10 sm:py-14" aria-labelledby="building">
        <FadeIn>
          <h2 id="building" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Building
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
            {study.buildingIntro}
          </p>
          <ul className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {study.components.map((item) => (
              <li key={item.name} className="text-base leading-7 text-ink/90">
                <span className="font-bold">{item.name}</span>
                —{item.description}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <Container as="section" className="py-6 sm:py-10" aria-label="Project screenshots">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {study.gallery.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container as="section" className="py-10 sm:py-14" aria-labelledby="decisions">
        <FadeIn>
          <h2 id="decisions" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Design Decisions and Why
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
            {study.decisions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container as="section" className="pb-24 pt-10 sm:pb-32 sm:pt-14" aria-labelledby="learned">
        <FadeIn>
          <h2 id="learned" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            What I learned
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
            {study.learned}
          </p>
          <p className="mt-10">
            <Link href="/work" className="text-sm font-medium text-pink hover:text-pink-hover">
              ← Back to work
            </Link>
          </p>
        </FadeIn>
      </Container>
    </article>
  );
}
